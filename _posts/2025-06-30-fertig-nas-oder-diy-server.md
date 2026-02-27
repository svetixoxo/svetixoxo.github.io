---
layout: post
title: "Fertig-NAS oder DIY-Server: Was würde ich heute wählen?"
date: 2025-06-30
category: "Self-Hosting & Dienste"
bild: /assets/img/posts/250630-fertig-nas-oder-diy-server.png
tags: [self-hosting, nas, hardware, raspberry-pi]
excerpt: "Nach einem Jahr mit meinem QNAP-System stelle ich mir die Frage: Würde ich heute wieder ein Fertig-NAS kaufen oder doch lieber einen DIY-Server bauen?"
---

## Die große Entscheidung

Als ich vor gut einem Jahr <a href="/mein-smart-home-und-die-infrastruktur-dahinter/">meinen Heimserver geplant</a> habe, war die Entscheidung eigentlich schnell getroffen: QNAP TS-873AeU-RP, fertig. Plug-and-Play, redundante Stromversorgung (RP), professionell aussehend, alle Features aus einer Hand. Heute, nach einem Jahr intensiver Nutzung und deutlich mehr Erfahrung mit Heimservern, würde ich diese Entscheidung kritischer betrachten.

Die Frage „Fertig-NAS oder DIY-Server?“ beschäftigt jeden, der mehr als nur einen einfachen Cloud-Ersatz sucht. Geht es nur um Nextcloud für die Familie? Oder sollen später auch Virtualisierung, erweiterte Netzwerkfunktionen und experimentelle Services dazukommen? Die Antwort darauf entscheidet über die optimale Lösung.

## Mein aktuelles Setup: QNAP im Praxistest

### Hardware-Specs und Kosten

Mein QNAP TS-873AeU-RP kostete etwa 1.900 €. Ich erweiterte es auf 64 GB RAM und auf setzte 8 Enterprise Festplatten (Seagate Exos) zu je 12 TB als Speicher sowie zwei Samsung-SSDs zu je 2 TB für das SSD-Caching ein. Als CPU setzt QNAP auf hierbei auf den AMD Ryzen V1500B mit 2,2 GHz (4C/8T). Die Gesamtinvestition lag bei etwa 4.600 €, wobei mit je 280 € pro Stück die Festplatten einen großen Anteil daran ausmachen. Dafür bekam ich ein rackmount-fähiges System mit QuTS hero, dem ZFS-basierten Betriebssystem von QNAP, ausreichend dimensionierte Hardware und einen zuverlässigen RAID-Controller.

Außerdem seien wir mal ehrlich: So ein eigener Netzwerkschrank im Rackformat ist schon eine feine Sache.

### Was funktioniert gut

Die Plug-and-Play-Erfahrung ist tatsächlich beeindruckend. Nach dem Einschalten dauerte es keine 30 Minuten, bis das System komplett konfiguriert war. Das RAID-Management über die Weboberfläche ist intuitiv, die mobile App praktisch für schnelle Status-Checks und die Stabilität ist über das Jahr hinweg tadellos gewesen.

Das SSD-Caching mit den Samsung 980 Pro bringt spürbare Performance-Verbesserungen, besonders bei häufig genutzten Dateien wie über Nextcloud oder Plex. Die Integration funktioniert nahtlos und automatisch.

### Was mich heute stört

Der größte Kritikpunkt: Vendor Lock-in. QuTS hero ist zwar auf ZFS basiert, aber stark an QNAP-Hardware und -Software gekoppelt. Ich lasse sämtliche Dienste über Docker-Container laufen und habe mit der QNAP-Software im Grunde nichts mehr zu tun.

Heute würde ich lieber Standard-Debian auf der Hardware laufen haben. Das Problem: Ein OS-Wechsel ist praktisch unmöglich, ohne zentrale Funktionen zu verlieren. Das RAID-Management, Hardware-Monitoring oder erweiterte Netzwerkfunktionen wie Link Aggregation (Dual 2,5 GbE) zum Erhöhen der Bandbreite und Ausfallsicherheit durch Zusammenfassen mehrerer Verbindungen sind tief ins System integriert, nur um einige wenige Funktionen zu nennen. Inwieweit kompatible Erweiterungskarten für USB 4, 10 bzw. 25 GbE oder GPGPUs (NVIDIA Quadro P1000 oder NVIDIA GeForce GT 1030) dann noch unterstützt würden, entzieht sich meiner Kenntnis.

## Alternativ: Raspberry Pi als Nextcloud-Server

### Hardware-Setup

Für viele wäre ein Raspberry Pi der perfekte Einstieg gewesen, auch für mich. Mein Setup hätte etwa so ausgesehen: Raspberry Pi 5 mit 16 GB Arbeitsspeicher, dazu eine SSD mit 512 GB über das M.2-HAT+ sowie ein DAS (Festplattengehäuse) wie das QNAP TR-004 über USB 3.2 (10 Gbps) mit 4 Festplatten im RAID-10-Verbund; für ein einfaches Setup sollte auch ein 2-Bay-Gehäuse ausreichend sein, dort dann als RAID 1. Die QNAP-DAS hatte ich tatsächlich vorher schon als Speichererweiterung für meinen Mac genutzt und den Raspi in der obigen Konfiguration ist inzwischen meine Testumgebung geworden.

Der entscheidende Punkt: Weg von der SD-Karte! Das M.2-HAT+ ermöglicht das Booten von einer SSD, die über PCIe mit 4 Spuren angebunden ist, was die Performance und Langlebigkeit dramatisch verbessert. Die Daten lagern dann auf den USB 3.0-angeschlossenen Festplatten im externen Gehäuse.

Ein Einsteiger-Setup mit einem aktuellen Raspi (8 GB), 256 GB SSD, QNAP TR-002 als 2-Bay-DAS mit 2 WD Red zu je 4 TB im RAID-1-Verbund sollte für den alltäglichen Gebrauch mehr als ausreichen. Die Kosten hierfür lägen bei rund 550 Euro. Für den Preis bekommt man normalerweise eine Fertig-NAS, die deutlich weniger kann. Aus meinen Testszenarien mit dem Raspi mit 16 GB RAM weiß ich, dass für Nextcloud mit 2 aktiven Benutzern nicht mehr als 6 GB RAM belegt werden.

### Performance-Realität

Ein Raspberry Pi 5 kann problemlos 2-3 gleichzeitige Nextcloud-Benutzer bedienen und bietet schon eine durchaus amtliche Grundlage. Bei reiner Dateisynchronisation sollten sogar mehr möglich sein. Der Gigabit-Ethernet-Port ist voll nutzbar, und bei lokalen Transfers erreicht man tatsächlich die theoretischen 125 MB/s.

### Stromverbrauch

Was den typischen Stromverbrauch betrifft, gibt es keine nennenswerten Unterschiede zwischen einem Raspberry Pi mit DAS im Vergleich zu einer fertigen NAS.

| Gerät                          | Stromverbrauch | Typ    |
|--------------------------------|----------------|--------|
| Raspberry Pi 5 + QNAP TR-002   | 22 W           | 2 Bay  |
| QNAP TS-253E                   | 25 W           | 2 Bay  |
| Raspberry Pi 5 + QNAP TR-004   | 30 W           | 4 Bay  |
| QNAP TS-433eU                  | 30 W           | 4 Bay  |
| Raspberry Pi 5 + QNAP TL-D800C | 60 W           | 8 Bay  |
| QNAP TS-873AeU-RP              | 58 W           | 8 Bay  |

### Limitierungen

Die USB-Bandbreite wird zum Flaschenhals, wenn mehrere Benutzer gleichzeitig auf große Dateien zugreifen. Für Nextcloud, einfache Automatisierungen und grundlegende Heimserver-Aufgaben dürfte der Raspberry Pi 5 aber völlig ausreichend sein.

## DIY-Server: Die Königsklasse für Enthusiasten

### Hardware-Auswahl

Ein DIY-Server bietet maximale Flexibilität. Der Vollständigkeit halber: „DIY“ steht for „do it yourself“. Für 1.000 € bekommt man bereits ein solides System mit gebrauchter Enterprise-Hardware. Den Stromverbrauch lasse ich jetzt mal außen vor. Für 2.500 € ist ein neues System mit aktueller Hardware möglich, das meinem QNAP-Setup performance-mäßig deutlich überlegen wäre.

Die Frage ist halt immer, wie viel braucht man und wie viel ist genug, damit der Server auch nach mehreren Jahren ausreichend dimensioniert ist? Es kommt halt drauf an, was man damit machen möchte. Es braucht keinen AMD EPYC mit 12 CCDs und 192 Kernen, nur um ein Smart Home zu steuern, Nextcloud zu hosten, einen Werbeblocker laufen zu lassen und gelegentlich Medien zu streamen.

Für so ein Heizkraftwerk mit CPU-Funktion braucht es einfach mehr als nur eine Steckdose, schon aus Prinzip…

> **Hey, Siri!** Hau mir mal einen weiteren Spruch in dem Stil raus.

> **Klar, hier eine Alternative in deinem Stil:** Wenn das Ding beim Hochfahren nicht den Sicherungskasten hypnotisiert, ist es unterdimensioniert.

> **Alles klar, danke für nichts!**

### Betriebssystem

Hier liegt die wahre Stärke: Proxmox für Virtualisierung, TrueNAS Scale für ZFS mit Container-Support, Ubuntu Server für maximale Flexibilität oder Debian für rock-solid Stabilität. Jedes System kann exakt an die eigenen Bedürfnisse angepasst werden.

Will ich experimentieren? Einfach eine neue VM aufsetzen. Brauche ich eine spezielle Docker-Konfiguration? Kein Problem. Möchte ich das Betriebssystem komplett wechseln? Geht, solange die Hardware unterstützt wird.

## Vergleichsmatrix

### Technische Aspekte

| Kriterium              | Raspberry Pi  | Fertig-NAS    | DIY-Server    |
|------------------------|---------------|---------------|---------------|
| **Anschaffungskosten** | 300–500 €     | 1.000–5.000 € | 1.000-5.000 € |
| **Stromverbrauch**     | 20–60 W       | 25–60 W       | 70–200 W      |
| **Performance**        | moderat       | sehr gut      | legendär      |
| **Erweiterbarkeit**    | gering        | moderat       | hoch          |
| **Lernkurve**          | moderat       | niedrig       | hoch          |
| **Flexibilität**       | moderat       | niedrig       | hoch          |
| **Vendor Lock-in**     | gering        | hoch          | keiner        |

### Wartung

Der Zeitaufwand unterscheidet sich erheblich: Raspberry Pi und Fertig-NAS brauchen etwa 0-2 Stunden pro Monat für Updates und Wartung. Ein DIY-Server kann da schon etwas anspruchsvoller sein, gerade bei Problemen oder Experimenten. Dafür ist der Community-Support ist bei DIY-Lösungen meist besser.

### Flexibilität und Zukunftssicherheit

Hier zeigen sich die größten Unterschiede. Der Raspberry Pi ist begrenzt erweiterbar, aber günstig zu ersetzen. Fertig-NAS-Systeme haben meist feste Hardware-Grenzen und sind an den Hersteller gebunden. DIY-Server bieten maximale Flexibilität: CPU-Upgrade? Kein Problem. Mehr RAM? Einfach einbauen. Anderes Betriebssystem? Neuinstallation und fertig.

## Anwendungsszenarien: Wer braucht was?

### Der Einsteiger
- Nextcloud für 1–2 Personen
- Grundlegende Automatisation  
- Budget um 500 €
- **Empfehlung: Raspberry Pi**

Ein Raspberry Pi 5 mit externem USB-Gehäuse reicht völlig aus. Die Lernkurve ist moderat, die Kosten überschaubar und für erste Schritte ins Self-Hosting ist es perfekt.

### Die kleine Familie
- 3-5 Benutzer
- Medienserver für lokale Medien
- Smart-Home-Integration
- Budget um 500–2.000 €
- **Empfehlung: Raspberry Pi, Entry-Level DIY-Server oder günstiges Consumer-NAS**

Hier wird es interessant. Ein gebrauchter Dell-Server für 500 € plus neuer Festplatten kann mehr Performance bieten als eine NAS für 1.000 €. Dafür ist die Einrichtung aufwendiger.

### Der Technik-Enthusiast
- Experimentierfreude vorhanden
- zu viel Virtualisierung und noch mehr Container
- hohe Performance-Anforderungen
- Budget um 1.000–3.000 €
- **Empfehlung: DIY-Server**

Wer gerne bastelt und lernt, ist mit einem DIY-System besser bedient. Die Flexibilität und Lernmöglichkeiten überwiegen den höheren Aufwand.

### Der Profi-Heimanwender
- Business-ähnliche Anforderungen
- Redundanz und Ausfallsicherheit
- Integration in bestehende Infrastruktur
- Budget ist nur noch eine Glaubensfrage
- **Empfehlung: High-End DIY-Server oder Enterprise-NAS**

Hier können sowohl DIY-Systeme als auch professionelle NAS-Lösungen sinnvoll sein, je nach Schwerpunkt auf Flexibilität oder Wartungsaufwand.

## Was ich heute anders machen würde

Heute würde ich klar zum DIY-Server tendieren. Meine ideale Konfiguration wäre deutlich simpler: Ein selbst zusammengestellter Server mit einem Standard-Linux-System (wahrscheinlich Debian) und Docker für die Container-Verwaltung.

Virtualisierung brauche ich ehrlich gesagt nicht. Alle meine Services laufen bereits in Docker-Containern und das reicht völlig aus. Warum also eine zusätzliche Abstraktionsebene einführen, die nur Komplexität hinzufügt? Ein schlankes Host-System mit Docker ist für meine Anwendungsfälle die praktischere Lösung.

TrueNAS oder ähnliches würde ich mir durchaus mal anschauen – allein schon wegen der ZFS-Unterstützung und dem professionellen Storage-Management. Ob es am Ende zum Einsatz käme, würde ich aber erst nach intensiveren Tests entscheiden. Möglicherweise ist auch hier ein einfacheres Setup mit direktem ZFS oder Btrfs unter Linux die bessere Wahl.

Der Hauptgrund für den Wechsel zum DIY-Server: Maximale Flexibilität ohne Vendor Lock-in. Ich kann das Betriebssystem wählen, das am besten zu meinen Anforderungen passt. Ich kann Hardware austauschen, ohne mir Gedanken über Kompatibilität mit proprietärer Software zu machen. Und ich kann experimentieren, ohne durch Herstellerbeschränkungen ausgebremst zu werden.

Warum diese Erkenntnis erst jetzt? Vor einem Jahr war ich noch vorsichtiger und wollte eine sichere Lösung. Inzwischen habe ich aber so viel Spaß am Thema Self-Hosting entwickelt und genug Erfahrung gesammelt, dass ich mir den Sprung ins DIY-Lager zutrauen würde. Die Lernkurve ist steiler, aber genau das macht es spannend.

### Mein persönliches Learning

Nach einem Jahr intensive Nutzung ist mein Fazit klar: Flexibilität ist wichtiger als Komfort. Ein Fertig-NAS mag anfangs einfacher sein, aber wer sich für Self-Hosting interessiert, wird früher oder später an dessen Grenzen stoßen.

Würde ich heute neu entscheiden, wäre es ein DIY-Server mit Proxmox. Die Lernkurve ist steiler, aber die Möglichkeiten sind grenzenlos. Und genau das macht den Reiz des Self-Hosting aus.

- **Für Einsteiger und Fortgeschrittene**: Startet mit einem Raspberry Pi. Sammelt Erfahrungen, lernt die Grundlagen und steigt erst dann auf einen DIY-Server um, wenn ihr mehr braucht.
- **Für Anspruchsvolle**: Überspringt Fertig-NAS-Systeme und baut gleich einen flexiblen Server. Die Investition in Wissen zahlt sich langfristig aus.
- **Für Giga-Nerds**: Ihr wisst eh schon, was ihr wollt. ;-)
