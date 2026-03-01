---
layout: post
title: "Fußbodenheizung smart: Integration Schritt für Schritt"
date: 2026-01-11
category: "Smart Home & Automatisierung"
bild: /assets/img/posts/260111-fussbodenheizung-smart.png
tags: [smart-home, heizung, homekit, homebridge, integration]
excerpt: "9 Räume, ein Gateway, viele Kabel und ein Elektrobetrieb, der wusste, was er tut. Wie die Fußbodenheizung ins Smart Home kam und warum ich es nicht selbst gemacht habe."
---

## Der Ausgangspunkt

Die Fußbodenheizung war da, bevor das Smart Home kam. 9 Räume, jeder mit eigenem Thermostat, manuelle Steuerung über Drehregler an der Wand. Das funktionierte, aber es war weit entfernt von dem, was mit dem restlichen Haus möglich war und wie ich es mir vorgestellt habe. Während sich Beleuchtung und Jalousien längst automatisiert hatten, blieb die Heizung außen vor. Die Klimaanlagen standen auch schon auf der To-do-Liste.

Das Problem: Fußbodenheizungen sind nicht für Nachrüstung gemacht. Es gibt keine standardisierten Schnittstellen, keine Plug-and-Play-Lösungen. Selbst mit technischem Verständnis ist das kein Projekt für einen Nachmittag im Keller.

## Warum ich es nicht selbst gemacht habe

Ich traue mir einiges zu: Netzwerke konfigurieren, Arch Linux installieren, Docker-Container basteln – das läuft. Aber bei der Fußbodenheizung habe ich bewusst professionelle Hilfe geholt. Der Grund: Es geht nicht nur um Software-Integration, sondern um Elektro-Installation und die Steuerung von Stellantrieben, die direkt in die Heizungsanlage eingreifen.

Ein Fehler bei der Verkabelung kann dazu führen, dass die Heizung gar nicht mehr funktioniert – oder schlimmer, dass etwas kaputtgeht. Also habe ich den Elektrobetrieb beauftragt, der auch den Rest des Smart Homes installiert hat.

## Das Setup: Gateway-basierte Lösung

Die Integration läuft über ein Gateway-System, das die Fußbodenheizung ins Netzwerk bringt. Das Gateway sitzt im Heizungsraum und ist über mehrere Leitungen mit den Stellantrieben der einzelnen Räume verbunden. Jeder Raum hat einen eigenen Kanal, der separat gesteuert werden kann.

Das Gateway selbst kommuniziert über Ethernet mit dem Netzwerk und hängt im VLAN 20 (Klimatisierung/Heizung). Von dort aus greift Homebridge darauf zu und macht die Heizung für Apple HomeKit verfügbar. In der Home-App erscheint jeder Raum als eigener Thermostat mit Soll-Temperatur, Ist-Temperatur und Status (Heizen/Standby).

## Was der Elektrobetrieb gemacht hat

Die Installation durch den Elektrobetrieb lief in mehreren Schritten:

### Bestandsaufnahme

Zuerst wurde geschaut, wie die vorhandene Heizungssteuerung verkabelt ist, welche Stellantriebe verbaut sind und welche Signale sie erwarten. Hier gibt es keine Universallösungen, sondern es kann Unterschiede geben: Manche Heizungen arbeiten mit 24-V-Stellantrieben, andere mit PWM-Signalen, andere mit einfachen Schaltsignalen. In meinem Fall waren es 230-V-Stellantriebe mit potentialfreien Kontakten, was auch immer das bedeutet, aber so steht es auf dem Zettel, der vor mir liegt.

### Gateway-Installation

Das Gateway wurde im Heizungsraum montiert und mit dem Netzwerk verbunden. Die Stromversorgung läuft über ein separates Netzteil (redundante Stromversorgung), nicht über das Heizungssystem selbst – wichtig für die Ausfallsicherheit.

### Verkabelung der Stellantriebe

Jeder der 9 Räume bekam eine eigene Leitung zum Gateway. Die bestehenden Thermostate blieben als Fallback-Option erhalten – falls das Gateway oder das Smart-Home-System ausfällt, funktioniert die Heizung weiterhin manuell. Die Stellantriebe selbst wurden so verdrahtet, dass sie sowohl vom Gateway als auch von den alten Thermostaten angesteuert werden können, aber nie gleichzeitig.

### Konfiguration und Inbetriebnahme

Nach der Verkabelung kam die Konfiguration: Welcher Raum ist welcher Kanal? Welche Temperaturgrenzwerte sind sinnvoll? Wie schnell sollen die Stellantriebe reagieren? Das wurde alles eingestellt und getestet.

### Homebridge-Integration

Der letzte Schritt war die Integration in Homebridge. Dafür gibt es ein entsprechendes Plugin, das mit dem Gateway kommuniziert und die Heizung als HomeKit-kompatible Thermostate darstellt. Die Konfiguration lief über JSON-Dateien, in denen IP-Adresse des Gateways, Raumnamen und Temperaturbereiche hinterlegt wurden.

## Wie es im Alltag funktioniert

Seit der Installation läuft die Fußbodenheizung genauso wie der Rest des Smart Homes: Unauffällig. Danke an der Stelle nochmal an die Herren für ihre zuverlässige Arbeit insgesamt. In der Home-App sind alle 9 Räume als Thermostate aufgelistet. Jeder kann einzeln gesteuert werden, entweder manuell per App oder über Automatisierungen.

Die Automatisierungen laufen hauptsächlich über Zeitpläne: Bestimmte Räume werden zu bestimmten Zeiten auf eine Zieltemperatur gebracht, andere bleiben auf Grundtemperatur. Zusätzlich gibt es Abhängigkeiten zu anderen Systemen – zum Beispiel wird die Heizung in einem Raum gedrosselt, wenn die Klimaanlage läuft, um zu vermeiden, dass beide gegeneinander arbeiten. Mit dabei sind auch die Erkennung von Anwesenheiten im Raum sowie die Wetterstation. Dazu schreibe ich irgendwann auch eigene Beiträge.

Die Reaktionszeit ist deutlich langsamer als bei Heizkörper-Thermostaten. Fußbodenheizungen haben eine hohe thermische Trägheit – es dauert, bis eine Temperaturänderung ankommt. Das bedeutet: Die Automatisierungen müssen vorausschauend arbeiten. Wenn ein Raum um 18 Uhr warm sein soll, sollte die Heizung schon um 16 Uhr hochfahren.

## Was gut funktioniert

### Zentrale Steuerung

Alle Räume aus einer App heraus steuern zu können, ist deutlich komfortabler als neun einzelne Drehregler. Besonders praktisch: Wenn ich länger weg bin, kann ich das gesamte Haus auf Grundtemperatur setzen und vor der Rückkehr wieder hochfahren – alles remote über VPN.

Wer cool ist, legt sich zusätzlich eine Szene wie „länger abwesend“, Urlaub“ oder sonstiges an. Eine Szene ist ein vordefinierter Haus-Zustand, in dem für alle Geräte einmal definiert wird, was passieren soll. Einmal aktiviert, fährt das Haus in den Energiesparmodus: Heizung auf Grundtemperatur, Klimaanlagen aus, Lichter aus, Jalousien in Sicherheitsposition. Optional lässt sich das Ganze auch automatisieren. Komfort ist, wenn man nicht mehr daran denken muss.

### Automatisierung mit anderen Systemen

Die Integration mit der Wetterstation Erkennung von Anwesenheit funktionieren gut. Wenn es draußen kälter wird, fährt die Heizung automatisch etwas höher. Wenn niemand zu Hause ist, geht sie runter. Das läuft alles über HomeKit-Szenen bzw. -Automationen und braucht kein manuelles Eingreifen.

### Fallback über manuelle Thermostate

Die alten Wandthermostate gibt es nicht mehr, aber im Keller lässt zusätzlich noch manuell regeln. Das funktioniert quasi als Fallback – falls das Netzwerk oderr Gateway ausfällt, kann man die Heizung trotzdem steuern. Das ist wichtig, denn bei einer Heizung will man keinen Single Point of Failure haben.

## Was weniger gut funktioniert

### Träge Reaktionszeit

Wie gesagt: Fußbodenheizungen sind träge. Eine schnelle Temperaturänderung gibt es nicht. Das ist kein Problem des Smart-Home-Systems, sondern physikalische Realität. Es bedeutet aber, dass man Automatisierungen anders denken muss als bei Heizkörper-Thermostaten.

### Komplexität der Automatisierungen

Je mehr Abhängigkeiten man einbaut (Wetterstation, Anwesenheit, Kombination mit Klimaanlage), desto komplizierter wird das System. Ich habe die Automatisierungen mehrfach angepasst, weil sie anfangs zu aggressiv waren – die Heizung ist hochgefahren, obwohl es gar nicht nötig war oder hat zu spät reagiert.

### Gateway als Abhängigkeit

Das Gateway ist ein weiteres Gerät, das laufen muss. Bisher war es stabil, aber es ist trotzdem ein zusätzlicher Punkt, an dem etwas schiefgehen kann. Ein Firmware-Update, ein Netzwerk-Problem, ein Stromausfall – all das kann die Heizungssteuerung beeinflussen.

## Würde ich es wieder machen?

Ja. Die Fußbodenheizung ins Smart Home zu integrieren war einer der Schritte, die sich wirklich gelohnt haben. Nicht, weil es Spaß macht, sondern weil es im Alltag spürbar ist. Die Räume sind warm, wenn sie warm sein sollen und nicht, weil ich daran gedacht habe, die Thermostate hochzudrehen.

Der Punkt, den ich anders machen würde: Ich würde früher anfangen, die Automatisierungen zu justieren. Die ersten Wochen waren zu viel Trial and Error – die Heizung lief zu oft oder zu selten, weil die Schwellwerte nicht passten. Mit mehr Geduld beim Feintuning wäre das schneller gegangen.

## Fazit

Fußbodenheizung smart zu machen ist kein DIY-Projekt für einen Sonntagnachmittag. Es braucht Elektroinstallation, ein passendes Gateway und eine saubere Integration ins Smart-Home-System. Ich habe den Elektrobetrieb beauftragt und bin froh darüber – die Sache läuft stabil, hat Fallback-Optionen und funktioniert im Alltag so, wie sie soll.

Wer eine Fußbodenheizung hat und sie ins Smart Home integrieren will, sollte sich vorher überlegen, ob die Automatisierung wirklich etwas bringt. Bei trägen Systemen wie Fußbodenheizungen ist der Nutzen weniger offensichtlich als bei Heizkörper-Thermostaten. Aber wenn man die Automatisierungen richtig aufsetzt – vorausschauend, mit vernünftigen Schwellwerten und in Kombination mit anderen Systemen – ist es ein deutlicher Gewinn am Komfort.