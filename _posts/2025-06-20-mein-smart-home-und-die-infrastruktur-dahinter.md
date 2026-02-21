---
layout: post
title: "Mein Smart Home und die Infrastruktur dahinter"
date: 2025-06-20
category: infrastruktur
tags: [smart-home, infrastruktur, netzwerk, automatisierung, hardware, sicherheit]
excerpt: "Was als einfaches Smart-Home-Projekt begann, ist inzwischen zu einer umfassenden Infrastruktur gewachsen. In diesem Beitrag gebe ich einen Überblick über die verschiedenen Komponenten und erkläre, warum bestimmte Entscheidungen getroffen wurden."
---

## Das Netzwerk als Grundlage

Das Herzstück jeder vernetzten Infrastruktur ist ein stabiles Netzwerk. Als Hauptrouter dient eine AVM Fritz!Box 6690 Cable, die durch fünf weitere Fritz!Box 7590 AX ergänzt wird. Zusätzlich sorgen vier FRITZ!Repeater 6000 und zwei FRITZ!Repeater 3000 für eine weitestgehend lückenlose WLAN-Abdeckung im Haus und Garten. Diese Konfiguration entstand durch die baulichen Gegebenheiten des Grundstücks – im Grunde befinden sich in jedem Stockwerk zwei Router, die über Kabel zusammenlaufen. Die Repeater sorgen dafür, dass das WLAN-Netzwerk auch um das Haus herum sichergestellt ist.

Für die kabelgebundene Infrastruktur kommen zwei managed Netgear-Switches mit je 24 Ports zum Einsatz. Die eine ist für die LAN-Buchsen im Haus sowie Geräte in Netzwerkschrank zuständig, während an der anderen die Komponenten des Smart Homes (insb. die Gateways) zusammenlaufen. Beide Switches sind über redundante Verbindungen miteinander gekoppelt, um bei Ausfall einer Switch den Betrieb aufrechtzuerhalten.

Für zusätzliche Sicherheit sorgt eine WatchGuard Firebox als Firewall-Lösung.

## Netzwerksegmentierung und VLANs: Sicherheit durch Trennung

Ein wichtiger Sicherheitsaspekt in der Smart-Home-Infrastruktur ist die Netzwerksegmentierung durch VLANs. Dabei wird das physische Netzwerk in mehrere logische Segmente unterteilt, die voneinander isoliert sind. Mit der Firebox und den Netgear-Switches wurde eine durchdachte VLAN-Segmentierung implementiert, die das Netzwerk in 7 verschiedene Bereiche unterteilt:

- Management und Infrastruktur (2 VLANs)
- Smart Home, funktionsbasiert (9 VLANs)
- Sicherheit und Überwachung (4 VLANs)
- Client-Geräte (4 VLANs)
- Services und Server (4 VLANs)
- Fernzugriff und Gäste (3 VLANs)
- Zukünftige Erweiterungen (3 VLANs)

Vorteile der Segmentierung:
- Verbesserte Sicherheit: Ein kompromittiertes IoT-Gerät kann nicht auf persönliche Daten in Nextcloud zugreifen („IoT“ steht für „Internet of Things“, also bspw. Smart-Home-Geräte)
- Bessere Performance durch reduzierten Broadcast-Traffic
- Einfacheres Troubleshooting bei Netzwerkproblemen
- Klare Trennung zwischen Smart-Home-Diensten und persönlichen Services
- Möglichkeit, unterschiedliche Sicherheitsrichtlinien pro Segment zu implementieren

Diese Struktur hat sich für mich als sehr effektiv erwiesen – sowohl für die Sicherheit als auch für die Netzwerk-Performance bei der Vielzahl vernetzter Geräte. Außerdem habe ich solche Sachen gerne ordentlich strukturiert.

## Server-Landschaft: Getrennte Aufgaben

Die Server-Infrastruktur besteht aus zwei QNAP-Systemen.

Das erste ist ein TS-1273AU-RP mit einer GPGPU (NVIDIA Quadro P1000), 64 GB Arbeitsspeicher und 12 Festplatten zu je 24 TB (Seagate Exos X24). Diese Konfiguration ist ausschließlich für die Videoüberwachung ausgelegt – die Grafikkarte übernimmt dabei das Transcoding von Videos, während der große Speicherplatz die Aufzeichnung von 26 Kameras über längere Zeiträume ermöglicht. Das SSD-Caching übernehmen zwei Samsung 990 Pro mit je 4 TB.

Der zweite Server, ein TS-873AeU-RP mit 64 GB Arbeitsspeicher und 8 Festplatten zu je 12 TB (Seagate Exos X14). Dieses System fungiert als Heimserver. Hier laufen die Automatisierungslogik, Homebridge und weitere Dienste, die für die Haussteuerung erforderlich sind. Das SSD-Caching übernehmen zwei Samsung 980 Pro mit je 2 TB. Über Homebridge können alle Geräte über Apple HomeKit angesteuert werden. Darüber hinaus läuft hierüber mit Nextcloud auch meine eigene Daten-Cloud (siehe auch: *[Von iCloud zu Nextcloud: 1 Jahr später – ein ehrliches Review](https://svetixoxo.github.io/2025/06/22/von-icloud-zu-nextcloud-1-jahr-spaeter/)*).

Für Nextcloud und ähnliche Anwendungen setze ich bereits auf Docker-Container, was sich als sehr praktisch erwiesen hat. Für die restlichen Services stellt sich die Frage: Virtualisierung oder Container? Container bieten den Vorteil geringerer Ressourcennutzung und einfacherer Verwaltung, während Virtualisierung eine stärkere Isolation bietet. Bei der aktuellen Hardware-Ausstattung wäre beides problemlos möglich – für die meisten Smart-Home-Dienste sind Container jedoch die elegantere Lösung.

## Protokolle und Standards: Warum Apple HomeKit?

Die Entscheidung für Apple HomeKit als zentrale Smart-Home-Plattform fiel aus mehreren Gründen. Als ausschließlicher Nutzer von Apple-Geräten war die nahtlose Integration ein wichtiger Faktor. Die Home-App bietet dabei eine sehr übersichtliche Benutzeroberfläche, die auch bei der Vielzahl an Geräten nicht unübersichtlich wird. (Gesendet von meinem Lenovo ThinkPad mit Arch Linux)

In meiner vorherigen Wohnung hatte ich bereits Erfahrungen mit der Smart-Home-App von Fritz gesammelt, jedoch stellte sich schnell heraus, dass dieses System auf deutlich weniger Geräte ausgelegt und komplett geschlossen ist. Apple HomeKit bietet im Gegensatz dazu ein offenes System, das Geräte verschiedenster Hersteller problemlos einbinden kann. Über Homebridge lassen sich auch Geräte integrieren, die ursprünglich nicht HomeKit-kompatibel sind. HomeKit nutzt dabei verschiedene Protokolle wie WLAN, Zigbee und das neuere Matter/Thread, was eine hohe Flexibilität bei der Auswahl der Geräte ermöglicht.

Herausforderungen bei der Interoperabilität verschiedener Hersteller sind mit Homebridge praktisch nicht existent. Selbst Geräte, die ursprünglich gar nicht für Smart-Home-Anwendungen vorgesehen waren, konnten durch einen spezialisierten Elektrotechnik-Betrieb erfolgreich eingebunden werden. Ein perfektes Beispiel dafür ist die Fußbodenheizung – was die Jungs dort an Integrationsarbeit geleistet haben, bleibt für mich zwar ein Rätsel, aber das Ergebnis funktioniert tadellos und ich bin sehr dankbar für diese Lösung.

Anfangs hatte ich auch Home Assistant als Alternative in Betracht gezogen, bin aber mit HomeKit soweit sehr zufrieden gewesen. Wer weiß – vielleicht steige ich ja irgendwann um. Bisher ist das aber nicht geplant. Noch nicht.

## Smart Home: Vollständige Automatisierung

Die **Klimatisierung** des Hauses übernehmen 8 Multi-Split-Klimaanlagen von Mitsubishi Electric, 2 mit je 6,8 kW und 6 mit je 4,2 kW Leistung. Über WLAN-Brücken sind diese in das Smart Home eingebunden. Ergänzt wird das System durch verschiedene Steuermodule und eine Lüftungsanlage (Viessmann Vitovent 300-W).

Die **Fußbodenheizung** in 9 Räumen wird über ein separates Gateway-System gesteuert, das wiederum über eine der Switches in das Smart Home integriert ist. Darüber hinaus ist auch weiterhin eine manuelle Steuerung möglich. Dadurch ist es möglich, auch bei Ausfall einzelner Komponenten die Grundfunktionen aufrechtzuerhalten.

Für die Sicherheit sorgt eine umfassende **Alarmanlage** mit 16 Bewegungsmeldern, 50 Tür- und Fensterkontakten, 15 Rauch- und 4 Gasmeldern. Auch diese Anlage ist über ein Gateway in das Netzwerk eingebunden.

Die **Beleuchtung** ist vollständig automatisiert – sowohl die Außenbeleuchtung auf dem Grundstück und am Haus als auch die Innenbeleuchtung in jedem Raum mit direkter und indirekter Beleuchtung. 83 smarte Steckdosen und 25 smarte Lichtschalter mit Dimmer-Funktion (bei Bedarf einsetzbar) ergänzen das System. Bewegungsmelder in jedem Raum sorgen für automatisches Ein- und Ausschalten je nach Anwesenheit.

Die **Audio-Integration** wird oft übersehen, zumindest kam ich da vergleichsweise spät drauf, obwohl ich viel und gerne Musik höre. In jedem Raum sind Einbaulautsprecher von KEF installiert, die über einen Multiroom-Verstärker von Yamaha ebenfalls in das Smart-Home-System eingebunden sind. Ein separates Heimkino-System existiert zwar, läuft aber unabhängig vom Smart-Home-System. Sprachsteuerung kommt bewusst nicht zum Einsatz.

Darüber hinaus werden 44 **elektrische Jalousien** ebenfalls über separate Gateways gesteuert und in das Gesamtsystem eingebunden.

Eine **Wetterstation** liefert darüber hinaus Wetterdaten für die Automatisierung. So werden etwa alle Jalousien bei starkem Wind hochgefahren oder die Klimaanlagen (je nach Anwesenheit) bei hohen Außentemperaturen eingeschaltet; dies gilt entsprechend auch für die Heizung. Darüber hinaus wird über den Stromverbrauch bestimmter Steckdosen (Computer im Arbeitszimmer, Fernseher im Wohnzimmer, Nachtlicht im Schlafzimmer usw.) erkannt, in welchem Raum bzw. Stockwerk ich gerade unterwegs bin und Klimaanlage bzw. Heizung dort dementsprechend auch etwas stärker eingesetzt.

## Videoüberwachung: Professionelle Sicherheit

Die Videoüberwachung umfasst 26 Kameras, aufgeteilt in drei verschiedene Typen je nach Einsatzgebiet. Dazu zählen 12 bispektrale Tube-Kameras (Wärmebild) im Außenbereich sowie 8 bispektrale Dome-Kameras (schwenkbar und neigbar) und 6 Fisheye-Kameras (360 Grad) im Innen- und Außenbereich.

Die Kameras laufen an zwei 16-Kanal-NVR-Systemen zusammen, die Speicherung der Aufzeichnungen erfolgt jedoch auf dem 12-Bay-NAS, was eine zentrale Verwaltung, reaktionsfreudigere Handhabung, längere Speicherdauer und bessere Integration via Homebridge ermöglicht.

## Zentrale Steuerung und Monitoring

An den Treppenaufgängen jedes Stockwerks ist je ein iPad in der Wand installiert, die als weitere Steuereinheiten dienen. Sie zeigen den Status der jeweiligen Systeme an und ermöglichen die manuelle Steuerung einzelner Komponenten. Darüber hinaus ist eine Steuerung über iPhone, Mac usw. möglich.

## Redundanz und Ausfallsicherheit

Ein kritischer Aspekt bei einer so umfassenden Automatisierung ist die Ausfallsicherheit. Für alle wesentlichen Systeme existieren Redundanz-Konzepte: Die Beleuchtung kann bei Ausfall der Smart-Home-Zentrale über konventionelle Lichtschalter gesteuert werden. Heizung und Klimaanlage behalten ihre ursprünglichen Steuereinheiten als Fallback-Option. Die Alarmanlage funktioniert auch bei Netzwerkausfall autonom und die Jalousien lassen sich über separate Gateways auch manuell bedienen. Die Kameras sind zusätzlich über die NVR-Systeme abgesichert, sodass die Aufzeichnung auch bei Ausfall des Heimservers weiterläuft.

Grundsätzlich gilt: Alle Geräte, die über Gateways eingebunden wurden, verfügen über eine Fallback-Funktionalität, die den Grundbetrieb auch bei Smart-Home-Ausfall gewährleistet.

## Sicherheit und Datenschutz

Ein zentraler Aspekt bei der Planung war die Sicherheit des Systems. Das gesamte Smart-Home-System ist nicht von außen erreichbar und funktioniert ausschließlich lokal. Für den externen Zugriff nutze ich eine VPN-Verbindung, die sicheren Fernzugriff auf alle Komponenten ermöglicht. Lediglich die Kameras sind über die NVR-Systeme auch von außen erreichbar, was für Überwachungszwecke notwendig ist.

Die Zugriffskontrolle erfolgt über differenzierte Benutzerrechte: Die fest installierten iPads haben eigene Apple IDs, können jedoch keine Geräte hinzufügen oder entfernen. Besonders sensible Bereiche wie die Kameras oder Alarmanlage sind über diese Terminals nicht zugänglich – darauf haben ausschließlich meine Admin-Geräte Zugriff.

## Kosten und Wirtschaftlichkeit

Die Hardware-Investition in das Smart Home bewegt sich im mittleren fünfstelligen Bereich. Die Kosten beziehen sich dabei nicht auf die Endgeräte (Klimageräte, Heizungen, NAS etc.), sondern auf die dafür notwendige smarte Infrastruktur wie Gateways, Bridges und Steuerungskomponenten zur Einbindung in das vernetzte Gesamtsystem. Im Grunde also auf den Aufpreis dafür, dass bestimmte Komponenten smart sind oder werden.

Die laufenden Kosten entstehen hauptsächlich durch den Stromverbrauch der Server und der zahlreichen Netzwerkkomponenten.

Dennoch amortisiert sich die Investition teilweise durch Energieeinsparungen bei der intelligenten Steuerung von Heizung und Klimaanlage sowie durch den Wegfall externer Dienstleister für Überwachung und Wartung. Außerdem ist es irgendwie cool und macht Spaß.

## Erfahrungen

Die größte Herausforderung liegt in der Komplexität des Systems. Je mehr Komponenten vernetzt sind, desto wichtiger wird eine saubere Dokumentation und strukturierte Fehlersuche. Was als einfache Automatisierung beginnt, kann schnell zu einem Teilzeitjob werden, wenn man nicht von Anfang an systematisch vorgeht.

So hatte ich bspw. das Dokument verlegt, aus dem hervorging, welche Nummer welche Steckdose hat; der Betrieb, der die Installation dieser Geräte vornahm, hatte auf meine Anweisung auch keine Kopie behalten. Während der Einrichtung und Benennung in der Home-App lief ich also mit iPad in der einen und Tischlampe in der anderen Hand von Steckdose zu Steckdose und schaute, welches Gerät in der Home-App plötzlich Stromverbrauch registrierte, wenn ich die Lampe einschaltete. Das ursprüngliche Papier ist übrigens bis heute nicht wieder aufgetaucht.

Gleichzeitig bietet die umfassende Automatisierung einen Komfort, auf den ich nicht mehr verzichten möchte. Das Haus denkt mit – von der automatischen Anpassung der Temperatur über die Beleuchtung bis hin zur Sicherheit und vielem mehr.

Auch wenn ich mich für die Technik interessiere und gerne Zeit damit verbringe, war die professionelle Unterstützung für mich als Noob unverzichtbar. Die Integration der verschiedenen Systeme und das Gesamtkonzept habe ich zusammen mit den Zauberern entwickelt, die auch die Gateways und komplexeren Einbindungen übernommen haben. Ohne diese Expertise wäre ein System dieser Größenordnung und Komplexität für mich allein nicht realisierbar gewesen.

## Ausblick

Die Infrastruktur ist nie wirklich fertig. Regelmäßig kommen neue Ideen dazu und es stehen immer wieder Optimierungen bei der Energieeffizienz und insbesondere Integration weiterer Automatisierungen auf der Agenda.

Ein konkretes Zukunftsprojekt ist die automatisierte Gartenbewässerung, die bisher noch nicht realisiert wurde, aber definitiv auf der Roadmap steht.
