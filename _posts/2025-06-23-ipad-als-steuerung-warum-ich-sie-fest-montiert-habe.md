---
layout: post
title: "iPad als Steuerung: Warum ich sie fest montiert habe"
date: 2025-06-23
category: "Smart Home & Automatisierung"
bild: /assets/img/posts/250623-ipad-als-steuerung.png
tags: [smart-home, homekit, ipad, steuerung, hardware]
excerpt: "Drei iPads, fest in der Wand, immer an, immer bereit. Kein Herumtragen, kein Suchen, kein leerer Akku. Warum ich mich für dedicated Control-Panels entschieden habe – und was dabei schiefgegangen ist."
---

## Die Idee: Steuerung an jedem Stockwerk

Als das Smart Home lief, wurde schnell klar: Die Steuerung über iPhone und Mac funktioniert, aber sie ist nicht optimal. Wenn ich im Obergeschoss bin und eine Lampe im Erdgeschoss steuern will, geht das. Aber wenn ich schnell etwas im gleichen Stockwerk anpassen will, ist es umständlich, erst das iPhone zu entsperren, die Home-App zu öffnen und zur richtigen Stelle zu navigieren.

Die Lösung: Fest montierte iPads an zentralen Stellen – eines pro Stockwerk, immer verfügbar, immer eingeloggt, immer bereit. Kein Herumtragen, kein Suchen, kein leerer Akku. Einfach ans iPad gehen, antippen, fertig.

## Was im Einsatz ist

Drei iPad Air mit M1-Chip, montiert in Einbau-Wandhalterungen an den Treppenaufgängen. Jedes ist dauerhaft am Strom, läuft mit der Home-App als Standard-Screen und zeigt den Status des jeweiligen Stockwerks. Die iPads sind nicht alt – ich habe bewusst aktuelle Modelle genommen, weil ich will, dass sie für die nächsten Jahre laufen, ohne durch Software-Updates zu langsam zu werden.

Die Wandhalterungen sind keine einfachen Ständer, sondern fest verbaute Rahmen, in denen das iPad sitzt. Das sieht sauberer aus als ein iPad, das auf einem Tisch liegt. Das Kabel läuft hinter der Wand.

## Warum iPad und nicht ein Tablet-Display

Es gibt günstigere Lösungen: Android-Tablets, spezialisierte Smart-Home-Displays, sogar Raspberry Pi mit Touchscreen. Warum also iPads?

### Ich bin im Apple-Ökosystem

Mein Smart Home läuft über HomeKit, meine persönlichen Geräte sind Apple, und die Integration ist nahtlos. Ein iPad zeigt die Home-App genauso an wie auf meinem iPhone: Gleiche Szenen, gleiche Layouts, gleiche Bedienung. Kein Umlernen, keine separate Software. Dass ich langfristig zu Home Assistant wechseln möchte, ist ein Thema für einen eigenen Beitrag.

### Langlebigkeit und Updates

Apple unterstützt iPads mit Software-Updates deutlich länger als die meisten Android-Hersteller. Ein iPad Air von 2022 bekommt voraussichtlich bis 2028 oder länger Updates. Das bedeutet: Die Geräte bleiben sicher, schnell und kompatibel. Im Zweifel kann man sie auch einfach austauschen.

### Performance und Stabilität

Ich habe in der Vergangenheit mit Android-Tablets und Smart-Home-Displays experimentiert. Die Performance war durchwachsen – Apps stürzten ab, Touchscreens reagierten träge, Updates kamen sporadisch oder gar nicht. iPads laufen einfach, ohne dass ich mich damit beschäftigen muss. Ich weiß, dass sich hier die Geister scheiden, aber für mich war es eben so.

## Wie sie konfiguriert sind

Jedes iPad hat eine eigene Apple-ID, die nur für diesen Zweck existiert. Die iPads sind Teil meines Home-Setups, haben aber eingeschränkte Rechte. Sie können Szenen starten, Geräte steuern, Status abfragen, aber sie können keine Geräte hinzufügen oder entfernen, keine Automatisierungen ändern und haben keinen Zugriff auf sensible Bereiche wie die Kameraüberwachung.

Das ist wichtig: Die iPads sind immer entsperrt und für jeden zugänglich, der im Haus ist. Wenn ein Gast das iPad nutzt, kann er Licht einschalten, die Temperatur ändern oder Musik abspielen – aber er kann das Smart Home nicht umkonfigurieren. Die Rechte-Verwaltung in HomeKit macht das möglich.

### Geführter Zugriff für mehr Fokus und Sicherheit

Zusätzlich habe ich auf den iPads den sog. geführten Zugriff (guided access) aktiviert. Das ist eine iOS-Funktion, die das iPad auf eine einzelne App beschränkt. In meinem Fall: Die Home-App. Kein Wechsel zu anderen Apps, kein Öffnen von Safari, kein Zugriff auf Einstellungen.

Das bedeutet: Selbst wenn jemand versucht, das iPad für etwas anderes zu nutzen, geht es nicht. Die einzige Interaktion ist über die Home-App. Das macht die iPads zu reinen Smart-Home-Terminals, nichts weiter.

## Was gut funktioniert

### Immer verfügbar

Der größte Vorteil: Ich muss kein Gerät suchen. Wenn ich im Obergeschoss bin und das Licht oder die Temperatur in mehreren Räumen anpassen will, gehe ich zum iPad und mache es. Keine App öffnen, kein Entsperren, kein Überlegen, wo mein iPhone gerade liegt. Und ja, dieses Überlegen gehört bei mir zum Alltag. Wenn ich mich über Discord mit Freunden und Bekannten unterhalte, hört man eigentlich mindestens einmal die Woche: «Wo ist eigentlich mein Handy?» So ist jedenfalls die Idee. In der Praxis greife ich aber selten zu ihnen – die meisten Anpassungen mache ich über mein iPhone. Das Konzept funktioniert, wird bei mir aber kaum genutzt.

### Statusanzeige

Die iPads zeigen nicht nur Steuerungen, sondern auch Status. Welche Räume sind gerade geheizt? Welche Lampen sind an? Welche Jalousien sind wie eingestellt? Das ist besonders praktisch, wenn man schnell überprüfen will, ob man alles ausgeschaltet hat, bevor man das Haus verlässt.

## Was nicht so gut funktioniert

### Kamera-Zugriff eingeschränkt

Die iPads haben keinen Zugriff auf die Kameraüberwachung. Das ist bewusst so konfiguriert, weil die Kameras sensible Bereiche zeigen und nicht für jeden sichtbar sein sollen. Aber es bedeutet auch: Wenn ich schnell einen Kamera-Feed sehen will, muss ich zu einem Admin-Gerät greifen.

Das ist ein Kompromiss. Ich könnte den Kamera-Zugriff auf den iPads aktivieren, aber dann wären die Feeds für jeden im Haus sichtbar. Das will ich nicht. Da wäre es schön, könnte man bspw. bestimmte Funktionen in der Home-App mit einem Passwort hinterlegen. Ob man das überhaupt braucht, ist eine andere Frage.

### Manchmal zu weit weg

Drei iPads klingen nach viel, aber manchmal ist man trotzdem zu weit weg. Wenn ich im Garten bin und irgendwas im Haus steuern will, hilft mir das iPad im Erdgeschoss nicht. Dann greife ich doch zum iPhone – vorausgesetzt es ist in der Nähe. Das ist kein wirklicher Nachteil, sondern eher die Erkenntnis, dass fest montierte Steuerungen nicht überall sein können. Sie sind eine Ergänzung, kein Ersatz für mobile Geräte.

### Updates und Wartung

iPads brauchen Updates und die kommen nicht automatisch im Hintergrund, wenn das Gerät ständig in Benutzung ist. Ich muss gelegentlich zu jedem iPad gehen, den geführten Zugriff deaktivieren, ein Update starten, warten, bis es fertig ist. Das ist kein Drama, aber es ist Aufwand. Bei drei Geräten dauert ein Update-Zyklus schon mal eine Stunde.

## Mehr Show als tatsächlicher Nutzen

Fest montierte iPads als Smart-Home-Steuerung sind kein Muss. Sie sind immer da und einsatzbereit, werden bei mir aber kaum genutzt. Die Steuerung erfolgt in aller Regel über iPhone oder Mac. Sie sind eher eine optionale Ergänzung als ein zentraler Bestandteil des Alltags. Würde ich es wieder machen? Ich weiß es nicht. Vermutlich ja, dann aber eher für Monitoring- und nicht als Control-Panels.