---
layout: post
title: "Smart Home und Datenschutz: Was nach außen geht und was nicht"
date: 2025-11-07
category: "Smart Home & Automatisierung"
bild: /assets/img/posts/251107-smart-home-und-datenschutz.png
tags: [smart-home, datenschutz, netzwerk, vlan, homekit, sicherheit, infrastruktur]
excerpt: "Ein smartes Zuhause bedeutet nicht zwangsläufig ein gläsernes. Wie ich von Anfang an dafür gesorgt habe, dass meine Geräte lokal bleiben – und warum das leichter ist als es klingt."
---

## Datenschutz als Ausgangspunkt, nicht als Nachgedanke

Ich gehöre zu den Menschen, denen Datenschutz und Privatsphäre wirklich wichtig sind. Vielleicht sogar etwas zu wichtig – zumindest würden das wohl einige sagen, die mich kennen. Deswegen war für mich von Anfang an klar: <a href="/mein-smart-home-und-die-infrastruktur-dahinter/">Wenn ich ein Smart Home aufbaue</a>, dann so, dass ich weiß, was mit den Daten passiert. Und das bedeutet vor allem: lokal, lokal, lokal.

Das klingt nach Aufwand. Ist es auch. Aber weniger nach Aufwand als es zunächst erscheint, jedenfalls wenn man die Weichen von vornherein richtig stellt.

## Was eigentlich nach außen geht – und warum das die falsche Frage ist

Die meisten Diskussionen über Smart Home und Datenschutz drehen sich darum, welche Daten ein Gerät in irgendeine Cloud schickt. Das ist zwar nicht falsch, aber es greift zu kurz. Die eigentliche Frage ist: Hat das Gerät überhaupt die Möglichkeit, nach außen zu kommunizieren?

Denn ob ein Gerät Daten sendet oder nicht, lässt sich von außen schwer kontrollieren. Firmware-Updates ändern das Verhalten, Hersteller passen ihre Datenschutzrichtlinien an und nicht jeder hat die Möglichkeit, den Netzwerkverkehr jedes einzelnen Geräts dauerhaft zu überwachen. Wer sich auf das Vertrauen in einen Hersteller verlässt, gibt die Kontrolle ab.

Mein Ansatz ist ein anderer: Die Geräte können gar nicht nach außen, weil ich es ihnen technisch nicht erlaube.

## VLANs als Fundament

Das Herzstück meiner Lösung ist die Netzwerksegmentierung über VLANs. Alle Smart-Home-Geräte – ob Klimaanlagen, Jalousien, Steckdosen, Beleuchtung oder Sensoren – laufen in eigenen VLANs; bei mir ist das der Bereich 20 bis 29. Diese Segmente sind vom Internet vollständig abgeschnitten. Sie kommunizieren ausschließlich innerhalb des lokalen Netzwerks.

Das bedeutet konkret: Eine smarte Steckdose im VLAN 24 kann weder Google-Server anpingen noch ungefragt Daten an den Hersteller schicken. Sie darf mit Homebridge reden – und das war es auch schon.

Diese Struktur habe ich nicht nachträglich eingebaut, sondern von Anfang an geplant. Das macht einen großen Unterschied: Wer bestehende Geräte nachträglich segmentieren will, kämpft oft mit Hersteller-Apps, die eine Internetverbindung voraussetzen, oder mit Gateways, die bei fehlendem Cloud-Zugang einfach aufhören zu funktionieren. Beim Neuaufbau kann man solche Geräte von vornherein ausschließen oder gezielt nach lokalen Alternativen suchen.

## Homebridge als lokale Schaltzentrale

Homebridge läuft auf meinem QNAP-Heimserver und übernimmt die Verbindung zwischen den verschiedenen Herstellern und Apple HomeKit. Der entscheidende Punkt: Homebridge ist kein Cloud-Dienst, sondern eine lokale Software, die ich selbst betreibe.

Das bedeutet, dass die Kommunikation zwischen einem Gerät und der Home-App von Apple ausschließlich im eigenen Netzwerk stattfindet. Es gibt keinen Umweg über externe Server, keine Abhängigkeit von der Verfügbarkeit eines Hersteller-Backends, keine Verbindung, die ich nicht selbst kontrolliere.

Für Geräte, die von Haus aus keine HomeKit-Unterstützung mitbringen, gibt es entsprechende Homebridge-Plugins, die die Integration übernehmen. Auch diese laufen vollständig lokal.

## Kein Remote-Zugriff, sondern VPN

Apple HomeKit bietet von sich aus die Möglichkeit, von außerhalb auf das Smart Home zuzugreifen – über iCloud und Apple-Server. Ich nutze das nicht. Stattdessen verbinde ich mich, wenn ich von unterwegs Zugriff brauche, zuerst per VPN mit meinem eigenen Netzwerk. Erst dann ist das Smart Home erreichbar, genauso wie von zu Hause aus.

Das ist ein kleiner zusätzlicher Schritt, den ich aber bewusst in Kauf nehme. Der Vorteil: Es gibt keinen dauerhaft offenen Kanal nach außen, keinen Dienst, den ich nicht selbst betreibe, und keine Apple-ID, die Informationen darüber hat, wann ich welche Geräte steuere.

## Kompromisse? Kaum.

Es gibt Setups, bei denen man Abstriche macht: Ein Gerät, das nur mit Cloud funktioniert, aber so praktisch ist, dass man es trotzdem kauft oder eine Herstellerapp, die man für die Ersteinrichtung braucht und danach nie wieder anfasst. Ich habe das von Anfang an vermieden.

Das klingt strenger als es ist. Die meisten Geräte in meinem Setup kommunizieren über Zigbee oder sind über Gateways eingebunden, die ich selbst kontrolliere. Wer lokale Kontrolle als Auswahlkriterium von Anfang an ernst nimmt, merkt schnell, dass es für fast jeden Anwendungsfall eine Lösung gibt, die ohne Cloud auskommt.

Der Unterschied liegt oft weniger in der Technologie als in der Bereitschaft, beim Kauf eines Geräts eine Frage zu stellen, die man sonst vielleicht nicht stellt: Funktioniert das auch, wenn der Hersteller morgen seinen Cloud-Dienst abschaltet?

## Was das in der Praxis bedeutet

<a href="/it-infrastruktur/">Mein Smart Home</a> läuft vollständig lokal. Temperatur, Beleuchtung, Jalousien, Audio – alles wird innerhalb des Netzwerks gesteuert, ohne dass auch nur ein Paket das Haus verlässt. Fällt der Internetzugang aus, läuft alles weiter wie gewohnt.

Das ist nicht nur eine Datenschutzentscheidung, sondern auch eine praktische: Keine Abhängigkeit von externen Diensten bedeutet keine Ausfälle, wenn ein Hersteller seine Server abschaltet, seinen Dienst einstellt oder einfach eine schlechte Nacht hat.

Ob das für jeden der richtige Weg ist? Wahrscheinlich nicht. Es braucht etwas mehr Planung am Anfang und eine gewisse Bereitschaft, sich mit Netzwerken auseinanderzusetzen. Aber wer Datenschutz ernst nimmt und ein Smart Home aufbauen will, wird feststellen: Es ist machbar. Und es ist weniger kompliziert als der Ruf, den es hat.