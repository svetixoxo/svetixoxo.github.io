---
layout: post
title: "Dual-Homing für Game-Streaming: Dediziertes LAN richtig konfiguriert"
date: 2026-04-21
category: "Netzwerk & Infrastruktur"
tags: [netzwerk, lan, self-hosting, gaming, streaming]
excerpt: "Ein Ethernet-Port, zwei Aufgaben: Game-Streaming über LAN, Internet über WiFi. Wie ich ein Point-to-Point-Netzwerk mit Metrik-basiertem Routing aufgebaut habe – und warum das funktioniert."
---

## Das Netzwerk-Problem

Mein Gaming-Server mit CachyOS hat ein Problem: Er hat nur einen Ethernet-Port. Nach dem Einbau der GPU war kein Platz mehr für eine PCIe-Netzwerkkarte und das Mainboard bietet nur einen Port (2,5 GbE) und WiFi 6E – das ist dann auch schon die gesamte Netzwerk-Hardware.

Das Problem: Ich brauche zwei Verbindungen:
1. **Internet-Zugang** für Updates, Downloads, Online-Gaming
2. **Dedizierte Verbindung zum Client** für Game-Streaming mit Sunlight und Moonlight

Die Lösung klingt simpel: WiFi für Internet, LAN für Game-Streaming. In der Praxis bedeutet das aber: Dual-Homing (zwei aktive Netzwerk-Interfaces gleichzeitig) mit korrektem Routing, damit der Traffic auch wirklich die richtigen Wege nimmt.

## Das Dual-Homing-Setup

Ich habe ein **Point-to-Point-Netzwerk** zwischen Gaming-Server und Mac Studio aufgebaut – ein dediziertes LAN-Segment, das nur diese beiden Geräte verbindet. Keine Switches, keine Router, nur ein Ethernet-Kabel zwischen den beiden Geräten.

**Gaming-Server (CachyOS):**
- `eno1` (LAN): `10.0.0.1/24` – Dedizierte Verbindung zum Gaming-Client
- `wlan0` (WiFi): `10.40.0.54/24` – IP aus dem Heimnetzwerk

**Gaming-Client (macOS):**
- `en0` (LAN): `10.0.0.2/24` ~ Dedizierte Verbindung zum Gaming-Server  
- `en1` (WiFi): `10.40.0.47/24` – IP aus dem Heimnetzwerk

Beide Geräte haben also zwei Netzwerk-Interfaces gleichzeitig aktiv. Das Problem: Wie stelle ich sicher, dass Game-Streaming über LAN läuft, während Internet-Traffic über WiFi geht?

## Routing-Konfiguration: Wie es funktioniert

Die Lösung liegt im Metrik-basierten Routing. Linux und macOS nutzen diese Routing-Metrik, um zu entscheiden, welche Route Vorrang hat. Niedrigere Metrik bedeutet höhere Priorität. Die Routing-Metrik ist also eine Zahl, die angibt, wie sehr eine Route bevrzugt werden soll. Wenn ein Betriebssystem mehrere Wege zu einem Ziel hat, wählt es immer die Route mit der niedrigsten Zahl/Metrik.

Das ermöglicht es, mehrere Netzwerk-Interfaces gleichzeitig zu nutzen, ohne dass sie sich gegenseitig stören. Jedes Interface bekommt eine eigene Metrik und das System weiß dadurch, welches Interface für welchen Traffic zuständig ist.

### Server-Seite: CachyOS

Auf dem Gaming-Server sieht die Routing-Tabelle so aus:

```
$ ip route show
default via 10.40.0.1 dev wlan0 proto dhcp src 10.40.0.54 metric 600
10.0.0.0/24 dev eno1 proto kernel scope link src 10.0.0.1 metric 100
10.40.0.0/24 dev wlan0 proto kernel scope link src 10.40.0.54 metric 600
```

Was passiert hier?
- **Default-Route** geht über WiFi (`wlan0`) mit **Metric 600**
- **10.0.0.0/24** (das Point-to-Point-Netzwerk) geht über LAN (`eno1`) mit **Metric 100**
- Niedrigere Metrik = höhere Priorität

Das bedeutet: Traffic zum Client (`10.0.0.2`) geht automatisch über LAN, alles andere über WiFi. Die konkreten Zahlen (100, 600) sind dabei nicht wichtig – entscheidend ist nur der Unterschied. Ich könnte auch 1 und 2 verwenden, aber die höheren Werte sind Standard-Konvention und lassen Raum für zusätzliche Routes.

### Client-Seite: macOS

Auf dem Mac ist es identisch aufgebaut:

```bash
$ netstat -rn
default            10.40.0.1          UGScg                 en1
10/24              link#18            UCS                   en0
10.0.0.1           xx:xx:xx:xx:xx:xx  UHLWIi                en0
```

Der Mac weiß: `10.0.0.1` (Gaming-Server) erreichst du über `en0` (LAN), alles andere über `en1` (WiFi). Die MAC-Adresse `xx:xx:xx:xx:xx:xx` (ausgeblendet) gehört zum Ethernet-Port des Gaming-Servers, macOS hat sie automatisch via ARP aufgelöst.

### Warum das funktioniert

Moonlight verbindet sich zur IP `10.0.0.1`. Das Betriebssystem schaut in die Routing-Tabelle und sieht: „Ah, `10.0.0.0/24` geht über `eno1`/`en0`". Der gesamte Game-Streaming-Traffic läuft automatisch über die dedizierte LAN-Verbindung.

Gleichzeitig können beide Geräte normal ins Internet: Downloads, Updates, Online-Gaming – alles läuft über WiFi, ohne dass es den Streaming-Traffic beeinträchtigt. Die beiden Netzwerk-Interfaces konkurrieren nicht miteinander, weil das Routing klar definiert ist.

## DNS-Konfiguration

Ein Detail, das wichtig ist: Beide Geräte nutzen den QNAP-Heimserver, auf dem auch ein DNS-Server läuft, der lokale Anfragen auflöst und externe Anfragen an vorgelagerte DNS-Server weiterleitet.

Der Gaming-Server hat `resolvectl` konfiguriert, das sicherstellt, dass DNS-Anfragen über das richtige Interface laufen:

```bash
$ resolvectl status
Link 2 (eno1)
    Current Scopes: LLMNR/IPv4 LLMNR/IPv6 mDNS/IPv4 mDNS/IPv6
         Protocols: -DefaultRoute +LLMNR +mDNS -DNSOverTLS
     Default Route: no

Link 3 (wlan0)
Current DNS Server: 10.60.0.123
       DNS Servers: 10.60.0.123
     Default Route: yes
```

Was hier passiert:
- `eno1` (LAN) hat **keine Default-Route** – es wird nur für Traffic zum Client genutzt
- `wlan0` (WiFi) hat die **Default-Route** und DNS-Server

DNS-Anfragen laufen über WiFi, nicht über das Point-to-Point-Netzwerk. Das macht Sinn, weil am anderen Ende des Point-to-Point-Netzes nur der Mac hängt und kein DNS-Server.

## Performance-Vergleich: LAN vs. WiFi

Ich habe das Game-Streaming sowohl über LAN als auch über WiFi getestet. Die Unterschiede sind erheblich.

### LAN-Performance (4K bei 60 FPS über 2,5 GbE)

- **Average Network Latency**: 1 ms (Variance: 0 ms)
- **Average Decoding Time**: 4,1 ms
- **Average Frame Queue Delay**: 4,4–5,2 ms
- **Average Rendering Time**: 1,4–1,6 ms
- **Frames Dropped by Network**: 0 %
- **Network Jitter**: 0 %

**Gesamtlatenz**: Etwa 10–12 ms vom Input bis zum sichtbaren Frame.

Das ist sehr gut. Die Latenz ist minimal, keine Frame-Drops, kein Jitter. Game-Streaming über dediziertes LAN funktioniert hier wie lokales Gaming.

### WiFi-Performance (4K bei 60 FPS über WiFi 6)

- **Average Network Latency**: 3–7 ms
- **Average Decoding Time**: 0,3–0,4 ms
- **Average Frame Queue Delay**: 8–15 ms
- **Average Rendering Time**: 0,7 ms
- **Frames Dropped by Network**: Meist 0 %, aber alle paar Minuten kurz 15–17 % für etwa eine Sekunde**
- **Network Jitter**: Unter 1 %, manchmal 3–8 %, wenn Frames droppen

**Gesamtlatenz**: Etwa 12–23 ms vom Input bis zum sichtbaren Frame.

Das ist deutlich schlechter. Die Frame-Drops sind unvorhersehbar und stören den Spielfluss. Die höhere Latenz ist spürbar und die Schwankungen in der Frame-Queue-Delay machen das Erlebnis weniger flüssig. WiFi 6 (statt 6E) ist an dieser Stelle übrigens richtig, denn das ist der WLAN-Standard des Clients, auf dem diese Verbindung getestet wurde.

### Warum LAN so viel besser ist

Der Unterschied liegt nicht nur in der Bandbreite – 2,5 GbE vs. WiFi 6 – sondern vor allem in der **Konsistenz**. LAN ist eine dedizierte Point-to-Point-Verbindung ohne Konkurrenz. WiFi ist ein Shared Medium mit Interferenzen, anderen Geräten im Netzwerk und schwankenden Signalstärken.

Bei Game-Streaming zählt nicht nur die durchschnittliche Latenz, sondern auch die **Latenz-Varianz**. Ein Streaming-Setup mit konstanten 10 ms Latenz fühlt sich besser an als eines mit durchschnittlich 5 ms, aber Spitzen von 20 ms. LAN liefert konstante Latenz, WiFi nicht.

## Warum nicht einfach beide per LAN ins Heimnetzwerk?

Die naheliegende Frage: Warum nicht einfach Gaming-Server und Mac beide per Ethernet ins <a href="/it-infrastruktur">Heimnetzwerk</a> (VLAN 40) hängen? <a href="/10-gbe-im-heimnetzwerk-overkill-oder-sinnvoll/">Das gesamte Heimnetzwerk läuft mit 10 GbE</a> – mehr als genug Bandbreite für Game-Streaming. Dann wären beide miteinander verbunden, hätten Internet und das Problem wäre direkt gelöst.

Der Mac war ursprünglich per 10 GbE mit dem Heimnetzwerk verbunden. Als ich den Gaming-Server gebaut habe, hätte ich ihn auch per LAN ins Netzwerk hängen können. Das hätte funktioniert, aber es gab einen ganz banalen praktischen Grund: Ich hatte keinen freien LAN-Port in der Nähe.

Und dann kam noch ein zweiter Grund hinzu: Ich hatte den Gaming-Server selbst zusammengebaut und wollte ihn auch sehen. Ein Mini-ITX-Tower, den man mit Aufwand konfiguriert und optimiert hat, verschwindet nicht einfach im Keller ins Rack – zumindest nicht sofort. Der Server steht momentan noch im gleichen Raum wie der Mac und solange er hier steht, ist ein direktes Kabel zwischen den beiden Geräten die einfachste Lösung.

Die Bandbreite wäre kein Problem gewesen – 10 GbE reicht locker für Game-Streaming und gleichzeitigen <a href="/von-icloud-zu-nextcloud-1-jahr-spaeter/">Nextcloud</a>-Sync, <a href="/fertig-nas-oder-diy-server/">NAS</a>-Backups oder Kamera-Streams. Aber: Der Gaming-Traffic hätte dann über die Switches laufen müssen, mit vermutlich minimal höherer Latenz. Bei Game-Streaming zählt nicht nur die Bandbreite, sondern vor allem die **Latenz-Konsistenz**. Ein Point-to-Point-Netzwerk hat keine Switch, keine anderen Geräte, die um Aufmerksamkeit konkurrieren und keine unvorhersehbaren Latenz-Spitzen (in der Theorie). Selbst wenn die durchschnittliche Latenz über 10 GbE ähnlich wäre – die Varianz wäre wohl höher. Und bei Game-Streaming fühlt sich konstante 10 ms besser an als durchschnittlich 5 ms mit gelegentlichen Spitzen auf 15 ms.

## Was ich aus dem Setup gelernt habe

2,5 GbE reichen problemlos für Streaming in 4K bei 60 FPS. Die Bitrate liegt bei 80–150 Mbit/s, also weit unter der theoretischen Kapazität von 2,5 GbE (2.500 Mbit/s). Aber auch so eine dedizierte Verbindung besser als eine shared.

Zum Metrik-basierten Routing: Ich hätte auch statische Routen mit spezifischen Ziel-IPs setzen können. Aber Metrik-basiertes Routing ist eleganter. Das Betriebssystem entscheidet automatisch, welche Route genommen wird, basierend auf der Metrik. Ich muss nicht für jede IP-Range eine separate Route definieren. Das macht das Setup insoweit auch robuster, dass wenn die Netzwerk-Konfiguration geändert würde (aus welchen Gründen auch immer), muss ich mich nicht erneut mit den Routing-Regeln beschäftigen, da die Default-Route über WiFi läuft.

Das Setup mit dem Dual-Homing klingt kompliziert, ist es aber nicht. Zwei Interfaces, zwei IP-Adressen, ein paar Routing-Regeln – das war's. Das Point-to-Point-Netzwerk ist bewusst einfach gehalten: Zwei Geräte, direktes Kabel, flache IP-Struktur. Kein DHCP-Server, keine Gateways, kein Routing zu anderen Netzen. Einfach nur eine dedizierte Verbindung zwischen zwei Geräten.

## Was ich anders machen würde

### USB4/Thunderbolt auf 10 GbE für den Client

Der Mac hat eine 10-GbE-Karte, die ich momentan nutze. Ursprünglich war er über 10 GbE mit dem Heimnetzwerk verbunden, jetzt läuft er mit 2,5 GbE zum Gaming-Server (wegen der Hardware-Limitierung) und WiFi fürs Internet und Heimnetz.

Das nervt, weil Nextcloud-Transfers jetzt deutlich langsamer sind. Die Lösung: Ein Adapter bzw. Hub von USB4/Thunderbolt auf 10 GbE (oder zumindest 5 GbE) für den Gaming-Server. Dann kann ich am Mac wieder 10 GbE fürs Heimnetzwerk nutzen und das Point-to-Point-Netzwerk über einen zusätzlichen Port laufen lassen. Das ist auf der To-do-Liste, aber nicht dringend.

### PCIe-Netzwerkkarte von Anfang an einplanen

Das größte Problem war die fehlende PCIe-Netzwerkkarte im Gaming-Server. Das Mainboard hat nur einen einzigen PCIe-Slot und der ist von der GPU belegt. Wenn ich heute nochmal einen Gaming-Server bauen würde, würde ich mich für ein Mainboard mit mindestens zwei PCIe-Slots entscheiden.

Mini-ITX war eine bewusste Entscheidung für die Optik, aber die Einschränkung auf einen PCIe-Slot macht sich bemerkbar. Ein Mainboard/Computer mit zwei Ethernet-Ports hätte das Problem elegant gelöst, ohne auf die kompakte Bauform verzichten zu müssen.

## Fazit

Dual-Homing mit dediziertem LAN für Game-Streaming funktioniert exzellent. Die Performance über das Point-to-Point-Netzwerk ist besser als über jedes andere Setup, das ich ausprobiert habe. Die Latenz ist minimal, die Konsistenz konsistent und die Konfiguration ist robuster als ich dachte.

Die wichtigste Lektion: Netzwerk-Design ist wichtiger als rohe Hardware-Power. Ein Gaming-Server mit Mid-Range-Hardware und perfektem Netzwerk-Setup schlägt High-End-Hardware mit schlechtem Netzwerk. 2,5 GbE ist ausreichend für 4K bei 60 FPS, aber nur weil sie dediziert für Game-Streaming läuft und nicht mit sonstigem Traffic konkurrieren muss.