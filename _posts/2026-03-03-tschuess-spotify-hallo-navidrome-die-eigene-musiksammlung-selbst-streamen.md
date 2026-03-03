---
layout: post
title: "Tschüss Spotify, hallo Navidrome: Die eigene Musiksammlung selbst streamen"
date: 2026-03-03
category: "Self-Hosting & Dienste"
bild: /assets/img/posts/260303-tschuess-spotify-hallo-navidrome.png
tags: [self-hosting, musik, navidrome, nas, docker, streaming]
excerpt: "Spotify seit zehn Jahren, Apple Music für lossless und trotzdem fehlte immer etwas. Also habe ich meine CD-Sammlung überspielt, digitale Käufe sortiert und alles in Navidrome geworfen. Sechs Monate später: Ein kurzer Bericht dazu."
---

## Wie es angefangen hat

Ich höre viel Musik, sehr viel – wirklich. Spotify nutze ich seit rund zehn Jahren und der Algorithmus funktioniert für mich erstaunlich gut – gefühlt in neun von zehn Fällen passen die Vorschläge. Das liegt vermutlich daran, dass sich über die Jahre einiges angesammelt hat: Playlists, Hörgewohnheiten, Bibliothek. Spotify weiß inzwischen ganz gut, was ich mag und was nicht.

Trotzdem fehlten Lieder. Demo-Versionen, Aufnahmen von Bands aus dem Bekanntenkreis, Sachen die einfach nicht auf Streaming-Plattformen sind. Und Qualität ist für mich kein Nebenpunkt – ich hatte Apple Music parallel abonniert, weil ich im Haus lossless hören wollte. Spotify hat das inzwischen auch eingeführt, aber deutlich zu spät, nachdem andere Anbieter das längst hatten. Außerdem ging es mir ja auch irgendwo um Self-Hosting und ich wollte nicht, dass die ganzen CDs nur noch in Kisten oder Regalen rumliegen.

Irgendwann habe ich mich hingesetzt und über Wochen meine CD-Sammlung digitalisiert – rund 450 CDs, etwa 400 von mir, den Rest von meiner Mitbewohnerin. Wobei digitalisiert ist dabei eigentlich das falsche Wort, CDs sind ja schon digital – ich habe sie überspielt. Dazu habe ich den Audiograbber <span class="erklaerung" data-tip="&laquo;A Better CD Encoder&raquo;">abcde</span> sowie ein externes CD-Laufwerk genutzt. Hinzu kamen Alben, die ich bei Qobuz und ähnlichen Diensten gekauft hatte. Am Ende war da eine Bibliothek, die ich gerne auf allen Geräten nutzen wollte.

## Die Suche nach dem richtigen Tool

Als erstes habe ich Nextcloud Music ausprobiert. An sich schön gehalten, gefällt mir – aber ich wollte meine Musik über eine native App hören, nicht zuletzt damit ich mein Audio-Routing vernünftig steuern kann. Jellyfin hatte ich auch kurz auf dem Schirm, fühlt sich aber eher auf Videos ausgelegt an. Laravel/Koel habe ich mir ebenfalls angeschaut, haben mich aber nicht so überzeugt. Vielleicht irre ich mich da und gebe dem  ganzenirgendwann eine zweite Chance. Am Ende war es jedenfalls Navidrome – und da bin ich seitdem geblieben.

## Die Bibliothek in Ordnung bringen

Bevor Navidrome ins Spiel kam, musste die Bibliothek erstmal in Form gebracht werden. Vorher war vieles lose in Ordnern, Tags unvollständig oder inkonsistent. Die Verwaltung läuft über Quod Libet in Kombination mit MusicBrainz Picard. Wenn ein Release bei MusicBrainz noch nicht vorhanden war, habe ich es selbst angelegt. Für Genres habe ich kurz auch Beets ausprobiert, das war aber schnell wieder draußen, weil es mehr Chaos erzeugt hat als vorher da war.

Die Ordnerstruktur ist klar: Zwei Hauptordner, «Friends» und «Pros» – der Name ist selbsterklärend. Darin alles nach Albumkünstler sortiert, darunter die Alben im Format «YYYY – Albumtitel». Habe ich von einem Künstler viele Veröffentlichungen, kommt da eine weitere Ebene mit Unterordnern nach Art der Veröffentlichung zwischen (bspw. Alben, Singles und Compilations). Gibt es von einem Album noch eine Sonderedition oder ähnliches, liegt diese als Unterordner im Albumordner.

Die Musik ist physisch auf der NAS, technisch gesehen aber eigentlich auf meinem Laptop, der die Quelle ist. Verwaltet und getaggt wird alles über Quod Libet, per <span class="erklaerung" data-tip="CLI-Tool zum Synchronisieren von Dateien">rsync</span> kommt es dann auf die NAS. Die Bibliothek umfasst inzwischen fast 15.000 Lieder über 1.000 Veröffentlichungen, überwiegend <span class="erklaerung" data-tip="{{ site.data.begriffe.flac }}">FLAC</span>, und über 500 GB groß. Ungefähr die Hälfte kommt von CDs, die andere Hälfte von digitalen Käufen.

## Das Setup

Navidrome läuft auf meiner NAS in einem Docker-Container – kein großes Setup, kein großes Geheimnis. Der Zugriff von unterwegs läuft über VPN.

Beim ersten Einrichten hatte ich kurz keine Verbindung herstellen können. Am Ende war es ein Anwenderfehler: Irgendetwas mit dem Port oder dem richtigen Link für die Subsonic-API. Ich weiß es nicht mehr genau, weil es so banal zu lösen war, dass ich mich hauptsächlich über mich selbst gewundert habe.

Einen Ausfall gab es auch: An einem Abend wurde mir in der Bibliothek nichts mehr angezeigt, ohne dass ich irgendetwas geändert hatte. Bibliothek mehrfach neu verbunden, Server neu gestartet, neu indiziert. Nach etwa einer halben Stunde lief es wieder. Was es war, weiß ich bis heute nicht.

## Clients: Was ich nutze und was ich ausprobiert habe

Auf dem Mac läuft Supersonic als Desktop-App. Ich hatte vorher einiges ausprobiert, da ich regelmäßig und viel Musik über meinen Mac höre.

Die Browser-App von Navidrome selbst ist tatsächlich sehr gut – ich hatte aber ja schon erwähnt, dass ich eine native App wollte. Feishin war das erste, was ich ausprobiert habe, weil ich zuerst darauf gestoßen bin. Es ist stark an Spotify angelehnt, was für manche ein Vorteil sein mag – mir hat es nicht so gefallen. Strawberry Music Player habe ich kurz angetestet, das UI hat mich aber nicht überzeugt.

Am Ende ist es Supersonic geworden. Nicht ohne Kritikpunkte: Es lädt Band-Fotos und Biografien aus dem Internet, was ich eigentlich nicht möchte. Eine Möglichkeit, eigene Fotos zu setzen, gibt es nicht – das fühlt sich nach einem Kontrollverlust an, der unnötig ist. Bei manchen Bands, wo kein Foto gefunden wird, steht dann ein Album-Cover oder gar nichts. Die Suchfunktion könnte in der Sortierung der Ergebnisse besser sein. Die Anzeige der aktuellen Wiedergabe ist gut gemeint, aber nicht ganz gelungen – die Liste der Lieder läuft nicht mit, sondern ist statisch. Potenzial zur Verbesserung ist da, aber insgesamt gefällt mir die App und ich bleibe erstmal dabei.

Auf dem iPhone nutze ich Amperfy, aber nur selten – über das iPhone höre ich meine lokale Sammlung kaum, sondern doch meist doch noch Spotify. Amperfy gibt es leider nur auf Englisch, was mich etwas stört. Zudem erinnert es stark an die App von Apple Music, was in dem Fall kein Kompliment ist. Apple Music und ich sind keine Freunde: Die App ist für meine Verhältnisse wenig intuitiv, Playlists haben mich gestört und der Gerätewechsel bei der Wiedergabe hat bei mir nie richtig funktioniert; iTunes fand ich damals eigentlich super – Apple Music hat das nie ganz eingeholt.

Auf dem Laptop höre ich Musik über Quod Libet, das direkt auf den lokalen Ordner zugreift. Das ist quasi die Wurzel des Ganzen. Quod Libet ist der Player, den ich tatsächlich am besten finde. Schade, dass er keine Navidrome/Subsonic-Unterstützung hat und es ihn nicht für macOS oder iOS gibt.

## Qualität

Fast die gesamte Bibliothek liegt in FLAC vor. Transcoding nutze ich bisher nicht – überall wird direkt die Originaldatei geladen und abgespielt. Ich habe überlegt, für das iPhone etwas einzurichten, aber noch nicht umgesetzt. In Skandinavien oder anderen Regionen, wo Mobilfunk einfach funktioniert, sicher kein Thema. In manchen Teilen Europas, wo das Netz gerne mal eine eigene Meinung hat, kann das aber durchaus zu einem Problem werden.

Der Qualitätsunterschied zu gestreamten Diensten ist hörbar. Kommt natürlich auf die Lautsprecher und ob Kabel oder Funk, aber man hört ihn. Qualität ist für mich ein sehr großes Thema – das war auch einer der Auslöser für das ganze Projekt.

## Was fehlt

Navidrome selbst tut, was es soll. Die Browser-App ist gut, der Server läuft stabil, Alben-Cover werden zuverlässig geladen. Bei Supersonic gibt es vereinzelt Anzeigeprobleme mit Covern – betrifft aber nur einen Bruchteil der Sammlung.

Was mich bei Supersonic und auch der Navidrome-Browser-App etwas stört: Die Auswahl an angezeigten Metadaten ist überschaubar. Manchmal möchte ich wissen, woher eine Band kommt oder nach Sprache sortieren. In Quod Libet geht das problemlos – über Navidrome und Supersonic nicht. Das ist kein Dealbreaker, aber es fällt auf, wenn man es gewohnt ist.

Der Algorithmus von Spotify fehlt mir. Das ist der ehrlichste Satz, den ich zu diesem Thema schreiben kann. Zehn Jahre Hörgewohnheiten, kuratierte Playlists, Playlist-Vervollständigungen, smarte Vorschläge – das alles fällt weg. Meine Bibliothek ist erstmal statisch. Darüber lerne ich keine neue Musik kennen. Das ist kein Problem von Navidrome, das ist das grundlegende Problem des Self-Hosting im Musikbereich. Navidrome verwaltet, was da ist. Was nicht da ist, gibt es nicht.

## Fazit nach sechs Monaten

Navidrome ist kein Ersatz für Spotify. Es ist etwas anderes: Ein Ort für die Musik, die ich bewusst gesammelt habe und die so sonst nirgendwo zu finden ist. Die CDs, die ich über mehrere Wochen überspielt habe. Die Alben, die ich bei Qobuz gekauft habe. Die Aufnahmen von befreundeten Bands.

Spotify bleibt, weil der Algorithmus und die Entdeckungsfunktionen nicht zu ersetzen sind. Aber für die eigene Sammlung funktioniert Navidrome – es tut, was es soll, ohne Umwege, ohne Cloud-Abhängigkeit, ohne Kompromisse bei der Qualität.

Und manchmal ist das genug.