---
layout: post
title: "10 GbE im Heimnetzwerk: Overkill oder sinnvoll?"
date: 2026-01-16
category: "Netzwerk & Infrastruktur"
bild: /assets/img/posts/260116-10-gbe-im-heimnetzwerk.png
tags: [netzwerk, switches, nas, performance]
excerpt: "10 Gigabit Ethernet im Heimnetzwerk– klingt nach Overkill, ist aber in manchen Situationen der Unterschied zwischen flüssig und frustrierend. Wo es sich lohnt, wo 2,5 GbE reicht und wo 1 GbE immer noch ausreicht."
---

## Die Ausgangssituation

Als ich <a href="/mein-smart-home-und-die-infrastruktur-dahinter/" class="link-orange">mein Netzwerk geplant</a> habe, stand schnell fest: Die beiden NAS-Systeme sollten mehr Bandbreite bekommen als Standard-Gigabit. Die Frage war nur: Wie viel mehr? 2,5 GbE, 5 GbE oder gleich 10 GbE? Die Antwort kam weniger aus einer theoretischen Berechnung als aus der praktischen Überlegung, was ich tatsächlich übertragen würde. Außerdem hatte ich auch schon Client-Geräte, die von Haus aus mit 10-GbE-Buchsen ausgestattet waren.

Das Problem bei Netzwerk-Upgrades ist, dass man leicht in beide Richtungen übertreiben kann. Entweder man investiert viel Geld in Geschwindigkeit, die man nie ausnutzt oder man spart am falschen Ende und ärgert sich später über Wartezeiten, die vermeidbar gewesen wären.

## Was bei mir läuft

<a href="/it-infrastruktur/">Mein Setup</a> nutzt 10-GbE-Verbindungen gezielt an zwei Stellen: Zwischen den beiden QNAP-NAS-Systemen und den entsprechenden Switches. Das Heimserver-NAS (TS-873AeU-RP) und das Überwachungs-NAS (TS-1273AU-RP) haben jeweils eine QNAP-Erweiterungskarte (QXG-10G2T-X710) eingebaut, die zwei 10-GbE-Ports bereitstellt.

Darüber hinaus sind sämtliche fest installierten LAN-Buchsen im Haus über 10 GbE mit der Core-Infrastruktur verbunden. Das bedeutet: Jede Wanddose ist technisch in der Lage, einem angeschlossenen Gerät die volle Bandbreite bereitzustellen, sofern das Endgerät dies unterstützt.


## Wo 10 GbE wirklich etwas bringt

### Heimserver-NAS

Der offensichtlichste Nutzen zeigt sich beim Zugriff auf die Heimserver-NAS: Wenn große Datenmengen übertragen werden, spielt 10 GbE seine Stärke aus. Statt der typischen 100–110 MB/s, die bei einer Gigabit-Verbindung realistisch erreichbar sind, liegen die Transferraten hier in der Praxis bei etwa 800–900 MB/s. Das macht sich vor allem bei großen Daten oder vielen parallelen Zugriffen deutlich bemerkbar.

### Videoüberwachung

Das Überwachungs-NAS verarbeitet die Streams von 26 Kameras gleichzeitig. Die meisten davon laufen mit 4K-Auflösung, einige zusätzlich mit Wärmebilddaten. Die aggregierte Bandbreite dieser Streams liegt deutlich über 1 GbE. Mit 10 GbE hat das System genug Spielraum, um auch bei Spitzenlasten nicht ins Stocken zu geraten.

### Mehrere parallele Zugriffe

Wenn mehrere Geräte gleichzeitig auf die NAS zugreifen – zum Beispiel beim Streamen von Medien, während gleichzeitig Nextcloud synchronisiert und ein Backup läuft – ist die höhere Bandbreite spürbar. Nicht, weil ein einzelner Stream 10 GbE braucht, sondern weil die Summe der parallelen Zugriffe die Gigabit-Verbindung an ihre Grenzen bringt.

## Wo 2,5 GbE reicht

Mac Studio und iMac haben 10-GbE-Ports, aber ehrlich: Die schnelle Verbindung ist nett, aber im normalen Betrieb merke ich kaum Unterschied – einfach weil ich selten so viele/große Dateien auf einmal kopiere. Dateien öffnen, <a href="/von-icloud-zu-nextcloud-1-jahr-spaeter/" class="link-magenta">Nextcloud</a> synchronisieren, Medien streamen – dafür braucht man keine 10 GbE.

Ich würde behaupten, 2,5 GbE ist der Sweet Spot für Client-Geräte: Deutlich schneller als Gigabit, aber ohne den Preisaufschlag und die Komplexität von 10 GbE. 2,5 GbE ist bei modernen Geräten inzwischen auch kein exotisches Feature mehr. Ich denke beim Aufrüsten des Netzwerks ist man auch heute mit 2,5 oder 5 GbE oft besser bedient als mit dem Sprung auf 10 GbE. Wer nach 25 oder 100 GbE schaut, hat ohnehin einen anderen Anwendungszweck und wird schon wissen, was und warum er das tut.

Auch beim Thema WLAN relativiert sich die Diskussion um 10 GbE ein Stück weit, denn hier entscheidet nicht nur die kabelgebundene Infrastruktur, sondern vor allem der eingesetzte WLAN-Standard und das Client-Gerät. Mit Wi-Fi 5 (802.11ac) sind in der Praxis meist einige hundert MBit/s realistisch. Wi-Fi 6 (802.11ax) steigert Effizienz und Durchsatz deutlich, besonders bei vielen gleichzeitigen Clients. Wi-Fi 6E erweitert das Ganze um das 6-GHz-Band und reduziert Interferenzen und mit Wi-Fi 7 (802.11be) sind theoretisch mehrere Gigabit pro Client möglich. 

In meinem Fall kommen als Access Points UniFi U7 Pro XGS für das Haus bzw. UniFi U7 Pro Outdoor für den Garten. Erstere haben eine Uplink-Anbindung von 10 GbE, letztere von 2,5 GbE. Das bedeutet konkret: Der Access Point selbst kann mehr als 1 GbE zum Switch liefern, so wird der Uplink nicht zum Flaschenhals.

## Wo 1 GbE immer noch ausreicht

Für die meisten Smart-Home-Geräte, Kameras (einzeln betrachtet) und diverse Netzwerk-Komponenten ist Gigabit nach wie vor mehr als genug. Eine einzelne 4K-Kamera braucht im Live-Stream selbst bei höchster Qualität selten mehr als 50 Mbit/s. Smarte Steckdosen, Beleuchtung, Sensoren – die sind an dieser Stelle kaum nennenswert.

## Was 10 GbE kostet

Die Hardware ist nicht günstig. Die QNAP-Erweiterungskarten kosten jeweils etwa 300 Euro. Switches mit 10-GbE-Ports sind deutlich teurer als ihre Gigabit-Pendants, wobei es hier große Unterschiede gibt: Je nachdem, ob managed oder unmanaged, mit oder ohne PoE sowie wie viele (oder alle) 10-GbE-Ports man haben möchte.

Eine weitere Herausforderung ist oft die Verkabelung. 10 GbE funktioniert zwar theoretisch auch über Cat 6, aber für die vollen 100 Meter Reichweite sollte es schon Cat 6a oder besser sein. Wer sein Haus bereits verkabelt hat und auf 10 GbE aufrüsten will, sollte die Kabel prüfen – nicht jede Verkabelung ist dafür geeignet. Ich würde da von Anfang an einfach auf Cat 7 setzen, dann muss man sich darüber keine Gedanken mehr machen.

## Stromverbrauch

Ein oft übersehener Aspekt: 10-GbE-Ports verbrauchen mehr Strom als Gigabit. Nicht dramatisch viel pro Port, aber in der Summe spürbar. Vergleicht man zwei ähnliche 24-Port-Switches, liegen typische Leistungsaufnahmen bei rund 20–30 Watt für ein reines Gigabit-Modell, während ein 10-GbE-Switch durchaus um die 100–120 Watt aufnehmen kann. PoE wurd jeweils nicht berücksichtigt.

Auf das Jahr gerechnet kann das einen Unterschied machen. 70 Watt Mehrverbrauch im Dauerbetrieb entsprechen grob über 600 kWh in zehn Jahren – also nicht nur mehr Abwärme im Netzwerkschrank, sondern auch Stromkosten. Dauerbetrieb heißt nicht, dass zwingend Daten übertragen werden müssen; es reicht aus, dass bereits ein Kabel eingesteckt wurde und der Uplink steht. Bei SFP+ sieht die Sache hingegen wieder etwas anders aus.

## Würde ich es wieder machen?

Für die NAS-Verbindungen: Ja, definitiv. Der Geschwindigkeitsvorteil bei Backups und größeren Datentransfers rechtfertigt den Aufwand. Für die Überwachungskameras: Ebenfalls ja, allein schon wegen der aggregierten Bandbreite von 26 Kameras bzw. der möglichen 46 Streams (20 der Kameras liefern zusätzlich Wärmebild).

Für Client-Geräte: Wahrscheinlich nicht. Ich habe zwar welche, die 10 GbE unterstützen, im Alltag wäre 2,5 GbE aber genauso gut gewesen. Wenn ich heute von vorne anfangen würde, würde ich das Netzwerk gestaffelt aufbauen: 10 GbE nur für die NAS-Systeme und die Switch-Verbindungen, 2,5 GbE für Workstations und wichtige Client-Geräte, 1 GbE für den Rest. Das würde die Kosten deutlich senken, ohne dass die Performance im Alltag leidet.

10 GbE im Heimnetzwerk ist kein Overkill, wenn man die richtigen Anwendungsfälle hat. NAS-Systeme mit hohem Durchsatz, Videoüberwachung mit vielen Streams – dort macht es einen spürbaren Unterschied. Für normale Client-Geräte ist 2,5 GbE oft die bessere Wahl: Günstiger, einfacher und im Alltag kaum langsamer. Die Frage ist nicht, ob 10 GbE sich lohnt, sondern wo. Wer das von Anfang an durchdenkt und gezielt einsetzt, bekommt ein Netzwerk, das genau dort schnell ist, wo es darauf ankommt.