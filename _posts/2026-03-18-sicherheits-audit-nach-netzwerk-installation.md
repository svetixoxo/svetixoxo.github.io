---
layout: post
title: "Audit nach Netzwerk-Installation: Vertrauen ist gut, Kontrolle ist besser"
date: 2026-03-18
category: "Netzwerk & Infrastruktur"
bild: /assets/img/posts/260318-audit-nach-netzwerk-installation.png
tags: [netzwerk, sicherheit, smart-home, vlan, firewall]
excerpt: "Fast 30 VLANs, über 300 Geräte, professionelle Installation – und trotzdem/deshalb ein unabhängiges Sicherheits-Audit beauftragt. Warum ich mein Netzwerk prüfen ließ, was dabei überprüft wurde und ob sich der Aufwand gelohnt hat."
---

## Professionelle Installation, aber fehlendes Know-how

<a href="/it-infrastruktur/">Mein Smart-Home- und Netzwerk-Setup ist komplex.</a> Fast 30 VLANs, über 300 vernetzte Geräte, NGFW, mehrere managed Switches, zwei NAS-Systeme und etliche smarte IoT-Geräte – und alles läuft lokal ohne Cloud-Abhängigkeit. Die initiale Einrichtung wurde von einer Fachfirma durchgeführt, die sich auf Netzwerk-Infrastruktur und Smart-Home-Integration spezialisiert hat.

Die Firma hat sehr gute Arbeit geleistet. Das System lief stabil und zuverlässig, die VLANs waren sauber segmentiert und die Firewall-Regeln schienen durchdacht. Aber: Ich selbst hatte nicht die Expertise, um beurteilen zu können, ob wirklich alles sicher konfiguriert war. Ich kenne mich mit Technik aus, aber ein komplettes Netzwerk-Setup auf Sicherheitslücken zu prüfen? Davon habe ich überhaupt keine Ahnung.

Genau da stellte sich die Frage: Kann ich der Installation blind vertrauen oder sollte ich eine unabhängige Überprüfung durchführen lassen?

## Warum ein IT-Sicherheits-Audit?

Es war kein Misstrauen gegenüber der ersten Firma. Die haben ihren Job gemacht und ich hatte keinen Grund, an ihrer Kompetenz zu zweifeln. Aber: Bei einem Setup dieser Größenordnung – mit sensiblen Daten auf den NAS-Systemen, Kamera-Streams, Zugriff auf Hausautomation und einem Netzwerk, das teilweise auch für Arbeitszwecke genutzt wird – wollte ich sichergehen. Die Gründe für ein Audit waren:

- **Fehlende eigene Expertise:** Ich kann ein Netzwerk bedienen, aber ich kann nicht beurteilen, ob eine Firewall-Regel sicher genug ist oder ob es versteckte Schwachstellen gibt. Ein professioneller Auditor hat das Wissen und die Tools, um Dinge zu finden, die mir nie auffallen würden.

- **Absicherung gegen unbeabsichtigte Fehler:** Selbst bei professionellen Installationen passieren Fehler. Nicht aus böser Absicht, sondern weil Menschen nun mal Fehler machen. Eine vergessene Firewall-Regel, ein nicht deaktivierter Standard-Zugang, eine falsch konfigurierte VLAN-Segmentierung – solche Dinge können passieren.

- **Theoretische Backdoors:** Ich will nicht paranoid klingen (auch, wenn ich es bin), aber: Eine Fachfirma, die ein Netzwerk aufsetzt, hat theoretisch die Möglichkeit, versteckte Zugänge einzubauen. Das ist sicherlich sehr selten und in den meisten Fällen völlig unbegründet – aber gerade bei kritischer Infrastruktur wie wollte ich dieses Risiko ausschließen.

- **Compliance und Best Practices:** Auch wenn ich kein Unternehmen bin, wollte ich wissen, ob mein Setup nach aktuellen Best Practices konfiguriert ist. Gibt es offene Ports, die nicht sein sollten? Laufen Dienste mit Standard-Passwörtern? Sind die VLANs wirklich sauber getrennt?

## Wie findet man eine unabhängige Audit-Firma?

Die zweite Firma zu finden war einfacher als gedacht. Mein Bruder hatte mir von solch einer Sicherheitsüberprüfung in seinem Unternehmen erzählt. Ich hatte ihn gebeten, sich bei der IT mal etwas umzuhören und so wurde ich am Ende über zwei Ecken an einen Dienstleister aus der nächsten Großstadt vermittelt, der sich auf Netzwerk-Sicherheit und IT-Sicherheits-Audits spezialisiert hatte.

Wichtig war mir:
- **Unabhängigkeit:** Die zweite Firma sollte nichts mit der ersten Firma zu tun haben. Keine geschäftlichen Verbindungen, keine persönlichen Kontakte. Das ermöglicht eine objektive Bewertung.
- **Regionale Distanz:** Die Firma kam aus einer völlig anderen Region, was bedeutet, dass sie nicht im gleichen lokalen Netzwerk von Dienstleistern hängt wie die erste Firma.
- **Spezialisierung:** Keine allgemeine IT-Dienstleistung, sondern echte Expertise in Netzwerk-Sicherheit.

Beide Firmen wussten voneinander. Die erste Firma hat eine umfangreiche Dokumentation übergeben: Netzwerkpläne, VLAN-IDs, IP-Ranges, Firewall-Regeln, Passwort-Management. Das hat der zweiten Firma geholfen, sich schnell einzuarbeiten.

## Was wurde überprüft?

Das Audit war umfangreich. Die Firma war zwei Tage vor Ort und hat weitere drei Tage remote gearbeitet, um die Ergebnisse auszuwerten und den Bericht zu erstellen. Ein IT-Sicherheits-Audit ist mehr als ein schneller Port-Scan oder ein oberflächlicher Blick in die Firewall-Konfiguration. Ziel war nicht, einzelne Einstellungen zu bewerten, sondern das gesamte Setup ganzheitlich zu betrachten: Netzwerkarchitektur, Segmentierung, Zugriffskontrollen, externe Angriffsflächen, Geräte-Sicherheit, Dokumentation und organisatorische Aspekte.

Die Prüfer sind systematisch vorgegangen – aus zwei Perspektiven:

1. **Konfigurationsanalyse:** Stimmen die Einstellungen mit Best Practices überein? Wurde nach dem Prinzip sog. Least Privilege gearbeitet? Gibt es unnötige Freigaben, Altlasten oder inkonsistente Regeln?

2. **Angreifer-Perspektive (Penetrationstest):** Was passiert, wenn jemand versucht, aktiv in das Netzwerk einzudringen? Lassen sich VLAN-Grenzen überwinden? Gibt es Wege von einem IoT-Gerät zu sensiblen Systemen? Ist von außen irgendetwas erreichbar, das nicht erreichbar sein sollte?

Dabei ging es nicht nur um offensichtliche Schwachstellen wie offene Ports oder Standard-Passwörter. Ebenso wichtig war die Frage, ob die Sicherheitsarchitektur in sich logisch, konsistent und langfristig tragfähig ist.

## 1. VLAN-Segmentierung

Die VLAN-Struktur ist das Rückgrat des gesamten Netzwerks.

- **Saubere Trennung:** Sind die VLANs wirklich voneinander isoliert? Können IoT-Geräte (etwa smarte Steckdosen) auf sensible Bereiche (etwa NAS-Systeme oder Kameras) zugreifen?
- **Brücken zwischen VLANs:** Gibt es ungewollte Verbindungen zwischen Segmenten, die eigentlich getrennt sein sollten?
- **Konsistenz über alle Switches:** Sind die VLAN-Konfigurationen auf allen managed Switches identisch oder gibt es Abweichungen, die zu Sicherheitslücken führen könnten?
- **Inter-VLAN-Routing:** Sind die Regeln, die festlegen, welches VLAN mit welchem kommunizieren darf, restriktiv genug?

Die Prüfer haben dafür sowohl automatisierte Scans als auch manuelle Konfigurationsprüfungen durchgeführt. So haben sie etwa versucht, von einem IoT-VLAN aus auf ein sensibles VLAN  zuzugreifen – und sind gescheitert, wie es sein sollte.

**Ergebnis:** Die VLAN-Segmentierung war einwandfrei. Jedes Gerät war im richtigen VLAN, die Inter-VLAN-Regeln waren restriktiv und es gab keine ungewollten Verbindungen. Die erste Firma hatte hier sehr saubere Arbeit geleistet.

## 2. Firewall-Regeln

Die WatchGuard Firebox ist das Herzstück der Netzwerk-Sicherheit. Es handelt sich dabei um eine sog. Next-Generation-Firewall (NGFW).

- **Sind die Regeln restriktiv genug?** Gilt das Prinzip Default Deny, also dass alles verboten ist, was nicht explizit erlaubt wird?
- **Gibt es unnötig offene Ports?** Besonders von außen ins Netzwerk?
- **Sind die Inter-VLAN-Regeln sauber definiert?** Welches VLAN darf mit welchem kommunizieren und sind diese Regeln so eng wie möglich gefasst?
- **Internet-Zugang für IoT-Geräte:** Haben die IoT-VLANs wirklich keinen Internet-Zugang oder gibt es doch noch Lücken?

Die Prüfer haben auch Penetrationstests durchgeführt: Können sie von einem IoT-VLAN aus doch noch ins Internet gelangen? Können sie Firewall-Regeln umgehen?

**Ergebnis:** Die Firewall-Regeln waren sehr gut. Das Prinzip Default Deny wurde konsequent umgesetzt, die Inter-VLAN-Regeln waren restriktiv und die IoT-VLANs hatten tatsächlich keinen Internet-Zugang. Die erste Firma hatte hier keine Kompromisse gemacht. Es gab vereinzelte Kleinigkeiten – etwa eine Logging-Regel, die etwas genauer hätte sein können – aber nichts, was die Sicherheit beeinträchtigt hätte.

## 3. Externe Erreichbarkeit

Einer der kritischsten Punkte bei jedem Netzwerk-Audit: <a href="/smart-home-und-datenschutz-was-nach-aussen-geht-und-was-nicht/" class="link-gruen">Was ist von außen erreichbar?</a>

- **Offene Ports:** Gibt es Ports, die von außen erreichbar sind und nicht sein sollten? Es wurden Port-Scans von außen durchgeführt (mit meiner Erlaubnis natürlich), um zu sehen, welche Dienste von außen sichtbar sind.
- **Port-Forwarding-Regeln:** Sind alle Port-Forwarding-Regeln dokumentiert und gerechtfertigt? Gibt es vergessene Weiterleitungen, die niemand mehr braucht?
- **UPnP:** Ist Universal Plug and Play deaktiviert? UPnP ist praktisch, aber ein Sicherheitsrisiko, weil Geräte damit automatisch Ports öffnen können.
- **VPN-Zugang:** Ist der VPN-Zugang sauber konfiguriert? 

Sie haben auch versucht, bekannte Angriffsvektoren auszunutzen, etwa veraltete VPN-Protokolle.

**Ergebnis:** Keine externen Schwachstellen gefunden. Der VPN-Zugang war korrekt konfiguriert, UPnP war deaktiviert und es gab keine Port-Forwarding-Regeln, die nicht dokumentiert waren. Von außen war das Netzwerk praktisch unsichtbar – genau wie es sein sollte.

## 4. Switch-Konfiguration

Die managed Switches sind der Knotenpunkt des gesamten Netzwerks. Hier wurde sehr genau hingeschaut.

- **VLAN-Konsistenz:** Sind die VLANs auf allen Switches identisch konfiguriert? Ein einziger Fehler auf einem Switch kann die gesamte Segmentierung aushebeln.
- **Trunk-Ports:** Sind die Trunk-Ports (die mehrere VLANs transportieren) richtig konfiguriert? Transportieren sie wirklich nur die VLANs, die sie sollen, oder sind dort noch unerwünschte VLANs dabei?
- **Ungenutzte Ports:** Sind Ports, die nicht benutzt werden, deaktiviert? Offene, ungenutzte Ports sind potenzielle Einfallstore.
- **Port Security:** Ist MAC-Adressen-Binding aktiviert? Das bedeutet, dass nur bestimmte Geräte (identifiziert über ihre MAC-Adresse) an bestimmten Ports erlaubt sind.
- **Loop Prevention:** Sind Protokolle wie STP (Spanning Tree Protocol) korrekt konfiguriert, um Netzwerk-Loops zu verhindern?

Die Prüfer haben auch versucht, ein nicht autorisiertes Gerät an einem ungenutzten Port anzuschließen, um zu sehen, ob es Zugang zum Netzwerk bekommt.

**Ergebnis:** Die Switches waren hervorragend konfiguriert. Alle VLANs waren konsistent über alle Switches hinweg, Trunk-Ports waren sauber gesetzt und ungenutzte Ports waren deaktiviert. Der Versuch, ein nicht autorisiertes Gerät anzuschließen, scheiterte – der Port war deaktiviert. Einzige Empfehlung: Port Security (MAC-Adressen-Binding) war nicht aktiviert. Das wäre eine zusätzliche Sicherheitsebene, aber kein kritisches Problem.

## 5. Passwörter und Zugänge

Schwache Passwörter und Standard-Zugänge sind eine der häufigsten Ursachen für erfolgreiche Angriffe. Die Prüfer haben systematisch überprüft:

- **Standard-Passwörter:** Sind alle Standard-Passwörter (bspw. «admin/admin» auf Switches oder IoT-Geräten) geändert worden?
- **Passwortstärke:** Sind die Passwörter stark genug? Mindestlänge, Komplexität, keine Wörterbuch-Wörter?
- **Admin-Zugänge:** Gibt es Admin-Zugänge, die nicht dokumentiert sind? Backdoor-Accounts?
- **Unnötige Benutzerkonten:** Gibt es Konten von ehemaligen Mitarbeitern oder alten Geräten, die nicht mehr existieren?
- **Passwort-Management:** Wie werden die Passwörter verwaltet? Gibt es ein zentrales System oder liegen sie in Textdateien rum?

Die Prüfer haben auch versucht, mit gängigen Krypto-Tools (etwa John the Ripper) schwache Passwörter zu knacken – natürlich nur im Rahmen des Audits und mit meiner Zustimmung.

**Ergebnis:** Alle Standard-Passwörter waren geändert, die verwendeten Passwörter waren stark (Länge, Komplexität) und es gab keine undokumentierten Admin- oder sonstigen Zugänge. Das Passwort-Management lief über einen verschlüsselten Passwort-Manager, keine Textdateien. Es gab auch keine unnötigen Benutzerkonten. Auch hier hatte die erste Firma sehr konsequent gearbeitet.

## 6. Backdoors und versteckte Zugänge

Gibt es SSH/Telnet-Zugänge, die nicht sein sollten? Gibt es Services, die auf unerwarteten Ports laufen? Gibt es sog. Management-/Support-Schnittstellen, die von außen erreichbar sind?

**Ergebnis:** Keine Backdoors gefunden. Alle SSH-Zugänge waren dokumentiert und passwortgeschützt und es gab keine Services auf unerwarteten Ports.

## 7. IoT-Geräte und NAS/Server

Sind die NAS-Systeme von außen erreichbar? Sind Admin-Panels nur intern erreichbar? Sind die Docker-Container sauber konfiguriert? Sind Firmware-Updates aktuell? Gibt es Geräte mit bekannten Sicherheitslücken?

**Ergebnis:** Die NAS-Systeme waren von außen nicht erreichbar und die Admin-Panels waren nur intern verfügbar. Die Docker-Container auf einem der NAS-Systeme hatten ein paar kleine Konfigurationsprobleme, aber nichts Kritisches. Homebridge und die anderen Gateways waren sauber isoliert. Einige Geräte hatten veraltete Firmware und es wurde eine Empfehlung für Sicherheitsupdates ausgesprochen.

## 8. Kameras und Überwachungssystem

Sind die Kameras in eigenen VLANs ohne Internet-Zugang? Ist das Überwachungssystem von außen erreichbar? Gibt es Cloud-Uploads, die nicht dokumentiert sind?

**Ergebnis:** Die Kameras waren sauber isoliert, das Überwachungssystem war nicht von außen erreichbar und es gab keine Cloud-Uploads. Alles lief lokal, wie geplant.

## 9. DNS und DHCP

Sind die DNS-Server sauber konfiguriert? Gibt es DNS-Leaks? Ist DHCP sauber segmentiert?

**Ergebnis:** DNS und DHCP waren korrekt konfiguriert. Es gab keine DNS-Leaks und jedes VLAN hatte seinen eigenen DHCP-Bereich.

## 10. Logging und Monitoring

Gibt es Logging auf der Firewall? Werden verdächtige Aktivitäten geloggt? Gibt es ein Monitoring-System, das Anomalien erkennt?

**Ergebnis:** Logging war aktiviert, aber es gab kein zentrales Monitoring-System. Das war eine Empfehlung: Ein sog. SIEM-System (Security Information and Event Management) oder zumindest ein zentrales Log-Management wären sinnvoll.

## 11. Dokumentation

Ist alles dokumentiert? Gibt es Netzwerkpläne? Sind die VLAN-IDs und IP-Ranges klar beschrieben? Gibt es ein Passwort-Management?

**Ergebnis:** Die Dokumentation war hervorragend. Die erste Firma hatte alles sauber dokumentiert und es gab keine Unklarheiten.

## Wie lief das Audit ab?

Die Firma kam an zwei Tagen vorbei. Am ersten Tag haben sie sich die Hardware angeschaut und haben mit automatisierten Tools (etwa Nmap und Nessus) das Netzwerk gescannt. Am zweiten Tag haben sie manuelle Tests durchgeführt – Penetrationstests, Konfigurationsprüfungen, Firewall-Regel-Analysen. Danach haben sie weitere drei Tage remote gearbeitet, um die Daten auszuwerten, den Bericht zu erstellen und Empfehlungen zu formulieren.

## Was hat es gekostet?

Das Audit hat etwa 3.500 Euro gekostet. Das mag viel klingen, aber für ein Setup dieser Größenordnung ist das angemessen. Zum Vergleich: Ein Sicherheitsvorfall mit kompromittierten NAS-Systemen oder Kamera-Zugriffen würde deutlich teurer werden – sowohl finanziell als auch emotional.

## Die Ergebnisse: Was wurde gefunden?

Das wichtigste Ergebnis vorweg: Es wurde nichts Kritisches gefunden. Keine Backdoors, keine offenen Ports von außen, keine gravierenden Sicherheitslücken. Die erste Firma hat saubere Arbeit geleistet. Aber es gab ein paar Empfehlungen für Verbesserungen.

- **Port Security aktivieren:** Auf den managed Switches war Port Security (MAC-Adressen-Binding) nicht aktiviert. Das ist keine kritische Schwachstelle, aber es würde die Sicherheit erhöhen, indem nur noch bekannte Geräte an bestimmten Ports erlaubt sind. Wenn jemand ein nicht autorisiertes Gerät an eine Switch anschließt, würde es sofort blockiert werden.

- **Firmware-Updates für IoT-Geräte:** Einige Sensoren und Steckdosen hatten veraltete Firmware. Die Empfehlung war, diese zu aktualisieren, da sie bekannte Sicherheitslücken enthalten kann, die Angreifer ausnutzen könnten.

- **Zentrales Log-Management:** Es gab kein zentrales System zur Überwachung von Logs. Die WatchGuard Firebox loggt zwar Ereignisse, aber es gibt kein SIEM-System, das alle Logs zusammenführt und automatisch nach Anomalien sucht. Die Empfehlung war, ein zentrales Log-Management einzurichten – entweder ein vollwertiges SIEM oder zumindest ein System, das Logs von Firewall, Switches und NAS-Systemen zentral sammelt und auswertet.

- **Regelmäßige Sicherheits-Reviews:** Die Empfehlung war, alle 2 Jahre ein erneutes Audit durchzuführen, um sicherzustellen, dass das System weiterhin sicher ist – insbesondere nach größeren Änderungen am Netzwerk. Netzwerke sind nicht statisch: Neue Geräte kommen hinzu, Firmware wird aktualisiert und neue Schwachstellen werden entdeckt. Ein regelmäßiges Review hilft, auf dem aktuellen Stand zu bleiben.

## Hat sich das Audit gelohnt?

Absolut. Auch wenn nichts Kritisches gefunden wurde, hat das Audit mir drei Dinge gegeben:

- **Bestätigung, dass die erste Firma gute Arbeit geleistet hat:** Die erste Firma hat nichts falsch gemacht. Das Setup war sauber, die VLANs waren korrekt, die Firewall-Regeln waren gut. Das Audit hat das bestätigt und ich weiß jetzt, dass ich der Installation vertrauen kann.

- **Konkrete Verbesserungsvorschläge:** Die Empfehlungen waren nicht kritisch, aber sinnvoll. Es wurden Port Security auf den Switches aktiviert und ein paar Firmware-Updates durchgeführt. Das zentrale Log-Management steht noch auf der To-do-Liste; das ist ein größeres Projekt, das ich angehen werde, wenn ich die Zeit dafür finde. Aber allein die Tatsache, dass ich jetzt weiß, wo die Verbesserungspotenziale liegen, hat die Sicherheit erhöht.

- **Beruhigung und Sicherheit:** Das wichtigste Ergebnis ist, dass ich jetzt weiß, dass mein Netzwerk sicher ist. Ich muss mir keine Sorgen machen, dass es versteckte Schwachstellen gibt, die ausgenutzt werden könnten. Das ist ein gutes Gefühl.

## Vertrauen ist gut, Kontrolle ist besser

Wenn ich heute nochmal ein Smart-Home- und Netzwerk-Setup aufbauen würde, würde ich das Audit von Anfang an einplanen. Nicht als Misstrauensvotum gegenüber der ersten Firma, sondern als festen Bestandteil des Projekts. So wie man ein Auto nach dem Kauf zum TÜV bringt, sollte man ein Netzwerk nach der Installation auditieren lassen.

Ein Sicherheits-Audit nach einer professionellen Installation ist eine sinnvolle Absicherung. Die erste Firma hat bei mir hervorragende Arbeit geleistet und das Audit hat das bestätigt. Gleichzeitig hat es ein paar kleine Verbesserungen aufgezeigt, die die Sicherheit weiter erhöht haben.
