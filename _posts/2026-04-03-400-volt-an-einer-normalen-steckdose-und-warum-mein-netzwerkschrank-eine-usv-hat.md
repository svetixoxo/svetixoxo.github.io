---
layout: post
title: "400 Volt an einer normalen Steckdose – und warum mein Netzwerkschrank eine USV hat"
date: 2026-04-03
category: "Netzwerk & Infrastruktur"
bild: /assets/img/posts/260403-400-volt-an-einer-normalen-steckdose.png
tags: [infrastruktur, strom, netzwerk, server]
excerpt: "Ein Staubsauger, ein Knall, 400 Volt an einer normalen Steckdose. Was dabei kaputtging, warum eine USV im Netzwerkschrank sinnvoll ist und was sie konkret kann."
---

## Es fing mit einem Staubsauger an

<a href="/proberaum-im-souterrain-ein-raum-der-klingt-wie-er-soll/" class="link-lila">Der Proberaum im Souterrain war fertig.</a> Akustisch behandelt, verkabelt, eingerichtet. Nachdem die PA soweit aufgebaut war, wollte ich Keller kurz durchsaugen. Staubsauger eingesteckt, eingeschaltet und dann ein Knall. Die Sicherung flog raus.

Kurz darauf schlug der Rauchmelder im Proberaum an – und mit ihm alles auf einmal: <a href="/ipad-als-steuerung-warum-ich-sie-fest-montiert-habe/" class="link-gruen">Die iPads an den Treppenaufgängen</a>, mein Handy, die Alarmanlage. Die Beleuchtung im Treppenhaus und den Fluren schaltete auf helles Weiß, die Räume färbten sich gelb und der Proberaum selbst blinkte rot. Man wusste sofort wo das Problem war.

Ich war ja noch im Vorraum, habe durch die Tür geschaut und gesehen, dass Rauch aus dem iMac stieg und sofort den Stecker gezogen. Dann bemerkte ich, dass auch aus den Deckenleuchten leichter Rauch kam.

Ich stand vor dem Raum, Feuerlöscher neben mir und schaute rein. Der Rauch war aktiv vielleicht dreißig Sekunden, dann weniger – aber er hing noch ein paar Minuten im Raum. Ganz wohl war mir in dem Moment nicht, verständlich. Ich habe gewartet, bis klar war dass nichts brennt und dann sofort den Elektriker angerufen. Der kam sofort und hat gemessen: An der besagten Steckdose lagen 400 Volt an. An einer normalen Haushaltssteckdose, die für 230 Volt ausgelegt ist.

## Was da passiert ist

Ich habe mir erklären lassen, was passiert ist: Es ist eine Unterbrechung des Neutralleiters (N-Unterbrechung) passiert. Das Hausnetz ist dreiphasig: Drei Außenleiter mit je 230 Volt gegen den Neutralleiter. Normalerweise sorgt dieser dafür, dass an jeder Steckdose sauber 230 Volt ankommen.

Wenn der Neutralleiter unterbrochen ist – durch eine schlechte Klemme, eine Wackelverbindung, irgendeinen Fehler in der Installation – werden die angeschlossenen Geräte verschiedener Phasen plötzlich in Serie geschaltet. Die 400 Volt zwischen zwei Außenleitern verteilen sich auf sie, aber ungleichmäßig – je nach Widerstand des jeweiligen Geräts. Was zu viel abbekommt, wird zerstört.

Das erklärt, warum gleichzeitig der iMac geraucht hat und die Deckenleuchten – Geräte aus scheinbar völlig verschiedenen Bereichen.

## Warum die Sicherung trotzdem rausgeflogen ist

Ein Leitungsschutzschalter schützt nicht vor diesem Szenario. Er reagiert auf zu hohen Strom, nicht auf falsche Spannung. Man kann 400 Volt an einer Steckdose haben, während alle Sicherungen oben stehen.

Bei mir hat etwas anderes ausgelöst – ein FI-Schalter. Ein FI (auch RCD genannt) schützt nicht die Leitung, sondern den Menschen: Er reagiert auf Ableitströme, die entstehen können, wenn Spannung auf den Schutzleiter überschlägt. Genau das passiert bei einer N-Unterbrechung unter Umständen. Der Knall war der FI – das Richtige zur richtigen Zeit, auch wenn es danach trotzdem geraucht hat.

Ein befreundeter Elektrotechniker hat sich den Vorfall angeschaut und nachdem er mir das erklärt hatte nur kopfschüttelnd gesagt, dass sowas schlicht nicht passieren darf – und dass ich sehr viel Glück gehabt habe, dass nicht noch mehr passiert ist.

## Was kaputt ist

Im Proberaum: Der iMac, der dort als Recording-Computer lief, und eine kleine SSD-NAS für diesen, die als Speichererweiterung daran hing. Dazu die Deckenleuchten. Die PA war bereits angeschlossen, Gitarrenverstärker und Geräte zum Recording noch nicht. Der Gesamtschaden wird derzeit auf rund 12.000 Euro geschätzt. Geräte, die einmal 400 Volt abbekommen haben, kommen nicht wieder in Betrieb – auch wenn äußerlich alles in Ordnung aussieht. Interne Schäden können sich später zeigen, auch als Brandrisiko.

## Wo der Fehler saß

Die Besichtigung am nächsten Tag hat die Ursache gefunden: Ein Fehler in einem der Unterverteiler. Eine schlecht ausgeführte Verbindung am Neutralleiter, die unter Last nachgegeben hat.

Die gesamte Elektroinstallation im Haus wurde von einem Elektrotechnikbetrieb über mehrere Monate durchgeführt – ein komplexes Projekt, mit dem ich insgesamt sehr zufrieden bin. Dieser Fehler hier war, wie der Betrieb selbst eingeräumt hat, ein grober Fehler. Sie haben sich ausdrücklich entschuldigt und übernehmen sämtliche Schäden.

Nach der Behebung wurde die gesamte Installation nochmal neu durchgemessen, mit dem vorherigen Messprotokoll abgeglichen und ein neues erstellt. Alles in Ordnung, keine weiteren Auffälligkeiten.

## Warum im Netzwerkschrank eine USV hängt

<a href="/it-infrastruktur/">Über den Netzwerkschrank läuft bei mir eine Menge:</a> Die Server, Firewall, Switches, Router, Kameres und, und, und – alles hängt an dieser Infrastruktur. Wenn der Schrank weg ist, ist das Netzwerk weg, die Kameras zeichnen nicht auf und das Smart Home reagiert nicht mehr.

Mit im Rack sitzt daher eine APC Smart-UPS SRT 5000VA RM USV (unterbechungsfreie Stromversorgung), ergänzt um ein zusätzliches Batterie-Modul. Die Kombination macht bei meiner tatsächlichen Last einen deutlichen Unterschied.

Die USV selbst gibt bei 50 % Last – also 2250 W – etwa 12 Minuten an. Meine Infrastruktur zieht im typischen Betrieb aber deutlich weniger, nämlich grob 600–700 W, also rund 15% der Nennleistung. Bei so niedriger Auslastung verlängert sich die Laufzeit erheblich, weit jenseits der Herstellerangaben für 50 % Last. Das Batterie-Modul kommt noch obendrauf. Ohne genaue Messung lässt sich keine exakte Zahl nennen, aber die Größenordnung liegt bei einer Stunde oder mehr – genug um bei einem echten Stromausfall in Ruhe zu entscheiden was als nächstes passiert und genug, um die Server sauber herunterzufahren wenn nötig.

## Was eine USV in diesem Kontext eigentlich tut

Ein Stromausfall ist das offensichtliche Szenario – und dafür ist eine USV gebaut. Aber es gibt noch etwas, das weniger offensichtlich ist, die sogenannte Double-Conversion (Dauerwandler).

Die SRT-Serie arbeitet mit dieser Technologie. Das bedeutet, dass die angeschlossenen Geräte nicht direkt am Stromnetz hängen. Die USV nimmt den eingehenden Strom, wandelt ihn in Gleichstrom um, lädt damit den Akku – und wandelt dann aus dem Akku wieder saubere 230-Volt-Wechselspannung für die angeschlossenen Geräte. Was auf der Eingangsseite passiert, spielt für die Geräte keine Rolle mehr.

Das schließt Spannungsschwankungen ein, Über- und Unterspannung – und auch einen N-Unterbruch. Was bei mir im Proberaum passiert ist, wäre für die Geräte im Netzwerkschrank schlicht unsichtbar geblieben, weil die USV dazwischen sitzt und permanent sauberen Strom liefert, unabhängig davon was am Eingang anliegt.

## Ärgerlich, aber aufschlussreich

Was bei mir im Proberaum passiert ist, war ärgerlich und teuer. Aber es hat auch gezeigt, dass das Konzept hinter dem Netzwerkschrank funktioniert – nicht weil ich es in dem Moment bewusst so geplant hatte, sondern weil eine USV mit Dauerwandler schlicht keinen Unterschied macht zwischen einem sauberen Stromnetz und einem mit 400 Volt an der Steckdose. Der Netzwerkschrank hat von dem Vorfall nichts mitbekommen. Der Proberaum schon. Dass die Automation bzw. Szene mit der Beleuchtung dabei einwandfrei funktioniert hat, war im Nachhinein auch eine positive Erkenntnis – wenn auch unter Umständen, die ich lieber nicht nochmal haben möchte.