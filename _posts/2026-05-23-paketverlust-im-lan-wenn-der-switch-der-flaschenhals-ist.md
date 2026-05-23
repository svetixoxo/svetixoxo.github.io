---
layout: post
title: "Paketverlust im LAN: Wenn die Switch der Flaschenhals ist"
date: 2026-05-23
category: "Netzwerk & Infrastruktur"
tags: [netzwerk, switches, gaming, streaming, diagnose, unifi]
excerpt: "Webseiten hingen beim ersten Aufruf, Speedtest war tadellos. Die Ursache war nicht das Internet, nicht DNS und auch nicht Routing, sondern eine Switch, die offenbar mit Multi-Gigabit-NICs nicht umgehen konnte."
---

## Das Problem

Bisher lief das Setup zwischen Gaming-Server und Mac Studio als [dediziertes Dual-Homing-Setup](/dual-homing-fuer-game-streaming-dediziertes-lan-richtig-konfiguriert/): LAN-Kabel für Game-Streaming (Peer-to-Peer), WLAN für Internet und Heimnetz. Das funktionierte gut, aber ich wollte weg von WLAN als primärem Netzwerkweg. Beide Geräte sollten vollständig per LAN angebunden sein: Internet, Heimnetz und Streaming über ein einziges, sauberes Kabel.

Das Problem dabei: In meinem Arbeits-/Computerraum liegt genau eine LAN-Buchse mit 10-GbE-Anbindung. Beim Verlegen der Leitungen hatte ich schlicht nicht eingeplant, dass dort zwei Buchsen sein sollten, nämlich eine für den Mac Studio, eine für den Gaming-Server oder allgemein einfach mal vorausschauend planend. Das Nachziehen eines weiteren Kabels wäre aufwendig, also habe ich eine Switch davor gehängt: Eine ungenutzte, unmanaged Switch (1 GbE), die noch herumlag.

Beide Geräte hingen damit über diese Switch an der 10-GbE-Buchse. Technisch funktionierte es, aber eben nicht sauber. Webseiten brauchten beim ersten Aufruf oft einige Sekunden, manchmal länger, auch einfache Seiten ohne viel Inhalt. Danach luden sie sofort. Diverse Speedtests lieferten 900 Mbit/s aufwärts im Downstream, das Internet war also nicht das Problem.

## Diagnose: Was steckt dahinter?

Der erste Schritt war, das Problem einzugrenzen. DNS schied schnell aus: `dig`-Abfragen antworteten sofort. IPv6-Timeouts ebenfalls: `curl -4` und `curl -6` verhielten sich identisch. Das Symptom passte also weder zu einem DNS- noch zu einem IPv6-Problem.

Was bleibt, wenn DNS und Routing sauber sind, aber der Verbindungsaufbau sporadisch hängt? Paketverlust auf Layer 2. Der erste HTTPS-Verbindungsaufbau ist empfindlich: Ein verlorenes TCP-SYN-Paket (sog. TCP-Handshake) bedeutet eine Sekunde Wartezeit bis zum Retry. Genau das erklärt das Muster – erster Aufruf langsam, danach schnell, weil die Verbindung bereits steht.

Ein einfacher Ping-Test bestätigte den Verdacht. Der Ping geht an 10.40.0.1 – das Gateway von VLAN 40, also die WatchGuard Firebox als nächster Hop im Netzwerk. Das isoliert den lokalen Pfad: Gerät → Switch → Gateway, ohne dass Internet-Latenz das Ergebnis verfälscht.

```
ping -c 100 10.40.0.1
100 packets transmitted, 88 packets received, 12.0% packet loss
round-trip min/avg/max/mdev = 0.4/18.3/487.2/68.4 ms
```

Zwölf Prozent Paketverlust zum Router, mit einzelnen Spikes bis fast 500 ms. Das ist kein normales Verhalten in einem verkabelten Netz. Zum Vergleich, ein direkter Ping vom Mac an den Gaming-Server ohne Switch dazwischen:

```
ping -c 300 10.40.0.54
300 packets transmitted, 300 packets received, 0.0% packet loss
round-trip min/avg/max/mdev = 0.4/0.9/4.3/0.4 ms
```

Kein einziges verlorenes Paket, stabile Latenz. Die Kabel waren also in Ordnung. Die Switch war die Ursache.

## Warum eine Gigabit-Switch mit Multi-Gig-NICs Probleme macht

Der Mac Studio hat einen 10-GbE-Port, der Gaming-Server einen 2,5-GbE-Port. Beide müssen an einer Switch auf Gigabit herunterhandeln. Das klingt nach einem normalen Vorgang und in der Theorie ist es das auch, dachte ich jedenfalls. In der Praxis führt die Kombination aus schnellen NICs, einer einfachen Gigabit-Switch und aktivem Energy Efficient Ethernet (EEE) jedoch zu genau diesem Verhalten: Sporadische Aussetzer, die nicht konsistent auftreten und deshalb schwer zu lokalisieren sind.

EEE ist ein Stromspar-Feature, das den Link kurzzeitig in einen Ruhezustand versetzt, wenn keine Daten fließen. Beim Wiederaufwachen entsteht eine kurze Verzögerung. Das ist bei zwei Geräten mit gleicher Geschwindigkeit meistens kein Problem. Bei einer Kombination aus 10 GbE und 2,5 GbE, die auf 1 GbE herunterverhandeln, können dabei jedoch Pakete verloren gehen – besonders beim initialen Verbindungsaufbau.

EEE auf dem NIC des Gaming-Servers zu deaktivieren half etwas:

```
sudo ethtool --set-eee eno1 eee off
```

Der Paketverlust ging von zwölf auf etwa sechs Prozent zurück. Behoben war das Problem damit nicht.

## Erster Test: Zyxel XMG-105

Ich hatte noch einen Zyxel XMG-105 herumliegen – eine kompakte unmanaged Switch mit fünf 2,5-GbE-Ports. Der Tausch war schnell gemacht. Ergebnis:

```
ping -c 300 10.40.0.1
300 packets transmitted, 300 packets received, 0.0% packet loss
round-trip min/avg/max/mdev = 0.5/0.9/4.6/0.3 ms
```

Kein Paketverlust, stabile Latenz. Das Problem war damit eindeutig bei der Switch zu suchen, nicht bei Kabeln, NICs oder Konfiguration. Die Zyxel bewies außerdem, dass eine Switch, die die tatsächlichen NIC-Geschwindigkeiten nativ unterstützt, das Auto-Negotiation-Problem gar nicht erst entstehen lässt.

Als Dauerlösung schied sie aber aus, aus zwei Gründen. Erstens lässt sie sich nicht vernünftig in den [UniFi Network Controller](/it-infrastruktur/) einbinden – kein Monitoring, keine VLAN-Konfiguration über das bestehende Interface. Zweitens versteht eine unmanaged Switch keine VLANs: Sie leitet alles ungefiltert durch, alle Geräte dahinter landen im selben VLAN wie der Uplink-Port am übergeordneten Switch. Für den Test war das ausreichend, für den Dauerbetrieb in einem segmentierten Netz nicht.

## Die saubere Lösung: UniFi USW-Flex-XG

Im restlichen Netzwerk läuft alles über verwaltete Netgear- und UniFi-Hardware – eine unmanaged Switch an dieser Stelle wäre ein dauerhafter blinder Fleck.

Die naheliegende Wahl war der UniFi USW-Flex-XG. Fünf Ports, vier davon mit 10 GbE, kompakte Bauform, vollständig in das UniFi-Netzwerk integriert. Die Einbindung ist unkompliziert: Controller erkennt die Switch im Netzwerk, einmal adoptieren, danach läuft sie wie alle anderen UniFi-Switches – VLANs, Trunk-Ports und Monitoring über dasselbe Interface wie der Rest der Infrastruktur.

Der Mac Studio hängt jetzt mit vollem 10-GbE-Uplink daran, der Gaming-Server mit seinen nativen 2,5 GbE – beide bekommen, was ihre NICs können, ohne dass Auto-Negotiation irgendwo einen Kompromiss erzwingen muss. Einer der vier 10-GbE-Ports geht als Uplink an die Wandbuchse, damit bleibt die volle Bandbreite Richtung Core-Infrastruktur, NAS und Heimnetz erhalten. Der fünfte Port (1 GbE) bleibt als Reserve für Geräte, die sowieso nicht mehr als Gigabit benötigen.

## Was das im Alltag bedeutet

Das Ergebnis nach dem Tausch:

```
ping -c 300 10.40.0.1
300 packets transmitted, 300 packets received, 0.0% packet loss
round-trip min/avg/max/mdev = 0.5/0.8/3.9/0.3 ms
```

Kein Paketverlust, keine Spikes. Webseiten laden beim ersten Aufruf sofort. Sunshine und Moonlight (das ist das Game-Stream-Setup, das ich nutze) verbinden sich zuverlässig und ohne Aussetzer. Nextcloud-Transfers zwischen Mac Studio und NAS laufen wieder mit den erwarteten Raten.

## Was ich daraus mitnehme

Das eigentliche Problem war kein Netzwerkdesign-Problem und kein Konfigurations-Problem (und natürlich, dass ich geschlafen habe bei der Planung der stationären LAN-Buchsen). Es war ein Hardware-Mismatch: Eine Switch, die die Geschwindigkeiten der angeschlossenen Geräte nicht nativ unterstützt und ein Stromspar-Feature, das dabei zuverlässig für sporadische Verluste sorgt.

Zwei Dinge hätten das von Anfang an verhindert. Erstens: Beim Verlegen der Leitungen eine zweite Buchse einplanen – das wäre die sauberste Lösung gewesen. Zweitens: Wenn eine Switch nötig ist, eine nehmen, die zu den angeschlossenen Geräten passt. Eine Gigabit-Switch vor einem 10-GbE- und einem 2,5-GbE-Gerät ist kein neutrales Bindeglied, sondern ein aktiver Flaschenhals.

Der USW-Flex-XG ist für diesen Einsatzzweck etwas überdimensioniert – vier 10-GbE-Ports brauche ich dort nicht. Aber er passt ins bestehende Ökosystem, lässt sich zentral verwalten und macht das Problem dauerhaft weg. Das zählt mehr als ein paar Euro Ersparnis bei einer Switch, die dort für Jahre hängen wird.
