---
layout: post
title: "Tailscale: Endlich wieder Fernzugriff"
date: 2026-09-27
category: "Netzwerk & Infrastruktur"
tags: [netzwerk, tailscale, wireguard, vpn, fernzugriff, datenschutz, self-hosting, smart-home]
excerpt: "Er ist der VPN, den ich eigentlich nie selbst hätte bauen wollen. Tailscale macht den Fernzugriff ohne Aufwand – und macht dafür einen Kompromiss, den ich mir nicht schönrede. Ein ehrliches Bild."
---

## Versprochenes gehalten

[Im VPN-Beitrag](/vpn-zuhause-kein-anonymisierungs-tool-sondern-ein-schluessel/) habe ich die Geschichte meines Fernzugriffs erzählt – von Fritz-VPN über WireGuard zu Tailscale. Und ich habe mit dem Satz aufgehört, dass Tailscale einen eigenen Artikel verdienen würde. Hier ist er.

Kurz zur Einordnung: Tailscale ersetzt bei mir nicht das VPN im Sinne des vorigen Beitrags, sondern es ist das VPN, das ich heute nutze. Der Artikel vorher hat das Konzept erklärt – warum ich mich lieber in mein eigenes Netzwerk einwähle statt Ports zu öffnen. Hier geht es um das konkrete Tool, das ich dafür verwende und warum.

## Was Tailscale ist

Tailscale baut ein virtuelles Netz aus meinen Geräten, egal wo sie gerade sind. Ich installiere die App, melde dich mit einem Account an und das Gerät bekommt eine feste IP aus dem privaten Bereich `100.x.x.x`. Alle meine Geräte tun das Gleiche und dann finden sie sich gegenseitig – über jeden beliebigen Anschluss, egal ich Zuhause bin oder nicht; Hauptsache das Gerät hat Internet.

Technisch steht darunter WireGuard, das VPN-Protokoll, das ich im vorigen Beitrag schon erwähnt habe. Tailscale ist also kein neues Protokoll, sondern eine Schicht darüber. WireGuard allein ist ein einzelner Tunnel zwischen zwei Enden. Tailscale macht aus einzelnen Tunneln ein Mesh: Jedes Gerät ist mit jedem anderen verbunden, nicht nur mit einem zentralen Server.

Der Clou ist sog. NAT-Traversal. Normale Internetanschlüsse sitzen hinter einem Router mit NAT, das aus dem Internet nicht einfach von außen angesprochen werden kann. Genau das war bei klassisch aufgesetzten VPN-Servern das Problem: Man brauchte einen festen Eingangsweg in ein Gerät, das sich hinter dem Router befindet. Tailscale umgeht das, indem die Geräte sich gegenseitig direkt finden und den NAT-Pfad (den Port, den die Verbindung im Router hinterlässt) nutzen. Für die meisten Setups ist das der entscheidende Moment, an dem es plötzlich das Öffnen eines Ports und ohne eine statische öffentliche IP-Adresse funktioniert.

Ergänzt wird das durch MagicDNS – einen internen DNS-Dienst, mit dem Geräte sich über Namen aufrufen, statt IPs auswendig zu lernen. `heimserver.tail123456.ts.net` statt `100.64.1.5`. Für Leute, die sich IP-Adressen nicht merken wollen, ein echter Segen. Zumal sich IP-Adresse unter Umständen ändern können, die MagicDNS bleibt jedoch.

## Früher FritzBox, heute Tailscale

Im VPN-Beitrag habe ich den Weg skizziert: Fritz-VPN, dann WireGuard. Wobei das Wichtigste, worüber ich dort nicht gesprochen habe: Beides lief auf der FritzBox. Auch WireGuard war kein selbst gehosteter Server, sondern die FritzBox unterstützt ihn seit Längerem nativ – so wie Fritz-VPN. Der zentrale Knoten, in dem der VPN-Zugriff saß, war also immer die FritzBox.

Und genau der Moment, an dem der Fernzugriff wegfällt, war der Wechsel auf [UniFi](/it-infrastruktur/). Das neue Netz hatte keine FritzBox mehr und damit keinen zentralen Knoten, an dem Fritz-VPN oder WireGuard saßen. Für eine Weile gab es schlicht keinen Fernzugriff.

Ein selbst betriebener WireGuard-Server hätte das gelöst – man stellt ihn auf einem dauernd erreichbaren Gerät auf, etwa auf dem Heimserver, auf dem ohnehin schon [Nextcloud](/von-icloud-zu-nextcloud-1-jahr-spaeter/) oder [Navidrome](/tschuess-spotify-hallo-navidrome-die-eigene-musiksammlung-selbst-streamen/) laufen. Der Weg wäre keine  unbekannte Strecke… ich hatte ja schon ein Mal gesehen, wie er läuft. Allerdings würde das das Problem neu erzeugen, statt es zu vermeiden. Der zentrale Server müsste für die Anmeldung der Geräte aus dem Internet erreichbar sein und bei mir sitzt das Netz hinter einer WatchGuard-Firebox mit Default-Deny. Ein dauerhaft offener Eingangsweg wäre genau die Ausnahme, die ich aus [Datenschutzgründen](/smart-home-und-datenschutz-was-nach-aussen-geht-und-was-nicht/) nicht will.

Tailscale umgeht genau das. Es braucht gar keinen zentralen Knoten, den ich an einer bestimmten Stelle im Netz unterbringe. Ich installiere, melde mich an und die anderen Geräte sind da – ohne dass ich einen Dienst aufbaue, der erreichbar sein muss. Und der einzige eigentliche Dauerkanal, den Tailscale braucht, sind seine eigenen Koordinations-Server (mehr dazu gleich).

## Was ich damit mache

Auf meinem Smartphone läuft Tailscale dauerhaft, ebenso auf meinem Tablet oder Laptop. Kein bewusstes Einwählen, kein Ausschalten, wenn ich es nicht brauche. Das Heimnetz ist einfach erreichbar, jederzeit. Auf den Computern ist es ebenfalls installiert, da jedoch eher dafür, dass ich diese Geräte über SSH erreichen kann.

Dann kann ich von überall Navidrome öffnen, wenn ich unterwegs Musik hören möchte, Nextcloud erreichen und mein mein Smart Home steuern.

Das ist der Kern eines VPNs, das ich im vorigen Artikel erklärt hatte: Nicht ein Dienst wird nach außen gestellt, sondern der Zugang zum Netz. Von Tailscale aus sieht alles so aus, als säße ich vor Ort. Und von außen ist weiterhin *nichts* erreichbar. Die WatchGuard-Firebox muss für Tailscale keine einzige Port-Weiterleitung kennen.

## Serve und Funnel: Wenn ein Service doch nach außen will

Es gibt eine Ausnahme, um die ich trotzdem wissen will: Tailscale kann einen einzelnen lokalen Service tatsächlich nach außen bringen, und zwar ohne einen Port in meiner Firewall zu öffnen. Das ist Serve und Funnel, und das ist für mich der wichtigste Grundsatz, mit dem ich hier breche.

`tailscale serve` stellt einen Dienst, der auf einem meiner Geräte läuft, allen Geräten im Tailscale-Netz gegenüber. Nicht ins Internet, sondern nur innerhalb des Netzes. Nextcloud etwa, die ich nur von eigenen Geräten aus erreichen kann. Ich gebe an, welchen Port des Geräts ich zeigen will und Tailscale legt ein HTTPS-Ende davor. Technisch gesehen ist das im Kern ein Reverse-Proxy, den Tailscale selbst betreibt – ich bin da nicht ganz sicher, wie genau die interne Implementierung aussieht, aber das Verhalten ist das eines Reverse-Proxys: Der Zugriff kommt über Tailscale, nicht über einen offenen Port am Router.

`tailscale funnel` macht dsa auch, aber ein Level weiter: Da wird der Service dann für jeden im Internet erreichbar. Für Dienste, die wirklich öffentlich sein sollen – bspw. ein Webserver, der online sein sollte, ohne dass man einen Port durch die Firewall bringt, ohne einen eigenen TLS-Server zu betreiben. Tailscale stellt davor ein Zertifikat und leitet sauber weiter.

Funnel ist genau das, was ich grds. nicht aktiviere. Mein Konzept seit dem [VPN-Artikel](/vpn-zuhause-kein-anonymisierungs-tool-sondern-ein-schluessel/) ist: Nichts ist von außen sichtbar. Funnel wäre ein bewusster Bruch damit. Der Moment, an dem ich überlegen würde, ihn einzusetzen, ist nicht absehbar – aber dass es ihn gibt, ist beruhigend. Wenn ich mal einen Dienst wirklich öffentlich betreiben will, brauche ich weder eine Port-Weiterleitung noch einen eigenen TLS-Stack. Es reicht, den Schalter (in dem Fall Funnel) umzulegen.

Serve nütze ich tatsächlich: Nicht, dass ich es bewusst aktiviere, aber es ist da, wenn ich einen Service für ein spezifisches Gerät sichtbar machen will, ohne dass er im Netz herumliegt.

## Warum sich an der Firebox nichts ändern muss

Der Punkt, dem bisher wenig Aufmerksamkeit geschenkt wurde, ist die Firewall: Ich habe nicht eine einzige Regel in der WatchGuard Firebox geändert: Kein Port, keine Weiterleitung, kein neuer Dienst, der von außen angesprochen werden kann. Die Firebox weiß von Tailscale nichts und muss nichts wissen.

Die Erklärung ist kurz und gut. Tailscale-Verkehr geht in eine einzige Richtung, nämlich raus. Es gibt im Grunde zwei Verbindungsarten und beide laufen aus dem Haus heraus.

Die eine ist die Koordination: Ein Gerät ruft die Koordinations-Server von Tailscale auf, um sich anzumelden und zu erfahren, wo die anderen Geräte gerade sind. Das ist eine Ausgangsverbindung über 443, also der Port Port, über den ohnehin Websites aufgerufen werden. Eine Firewall mit Default-Deny sperrt einkommenden Verkehr; den ausgehenden Traffic lässt sie durch. Die Koordinationsverbindung läuft also einfach mit, ohne je als eigene Regel erfasst zu werden.

Die andere ist das Mesh selbst zwischen meinen Geräten. Das läuft auf dem Standard-WireGuard-UDP-Port (41641), der ebenfalls ausgehend ist: Jedes Gerät öffnet eine Verbindung nach außen, sodass sich zwei Geräte hinter zwei Routern gegenseitig mit NAT-Traversal finden – dem Trick, bei dem beide Seiten ihre Ausgangsverbindung aufeinander zurichten, was man Hole-Punching nennt. Kein Paket kommt vom Internet ins Netz. Es gibt nur Paketströme, die vom Haus aus gehen und im Gegenüber enden.

Und genau das macht die Sache mit einer Default-Deny-Firewall so sauber: Default-Deny sperrt, was von außen reinkommen will. Tailscale macht nichts, was von außen reinkommt. Die Firebox hat also gar nichts, was sie sperren müsste. Sie braucht keine Regel, die eine Ausnahme erlaubt, weil es keine Ausnahme gibt. Der Fernzugriff läuft durch, ohne dass die Firewall überhaupt merkt, dass er läuft.

## Was ist mit der DMZ?

Und damit sind wir bei der DMZ. Das ist der Gedanke, den ich hatte, als es hieß, einen Dienst von außen erreichbar zu machen. Also muss der Dienst in die DMZ, den halb-exponierten Bereich hinter der Firewall, der weder ganz drinnen noch draußen ist? Der Idee nach wird kein Port nach außen geöffnet, sondern der Dienst wird in eine Zone gelegt, die so exponiert ist, wie man möchte.

Tailscale macht genau dies überflüssig. Von meinen Diensten muss nichts in die DMZ, weil nichts davon exponiert werden muss. Die DMZ kann in Ruhe tun, wofür sie da ist – bei mir ist das nicht viel (eigentlich gar nichts), aber der Gedanke steht: Ein Gerät, das in die DMZ wandert, ist ein Gerät, das für die Welt sichtbar ist. Tailscale bedeutet, dass man gar nicht erst dorthin greifen muss. Das ist der ganze Trick: Kein Dienst in die DMZ, kein Port offen, nichts sichtbar – und trotzdem von überall erreichbar.

## Der eine Ausnahmefall…

Den Punkt, an dem sich an der Firebox irgendwas ändern würde, gibt es technisch, nämlich wenn man hinter einem besonders strengen NAT sitzt – etwa CGNAT, wie man es bei den meisten Mobilfunk- und ISP-Anschlüssen findet oder ein symmetrisches NAT, das man nicht öffnen kann – scheitert das Hole-Punching: Die beiden Geräte finden sich nicht direkt. Tailscale hat für diesen Fall aber genau die Antwort, die mir wichtig ist: Es leitet den Traffic über einen seiner Server zwischen. Erneut eine ausgehende Verbindung, also wieder kein Port an der eigenen Firewall. Der Unterschied ist nur, dass der Verkehr dann nicht Peer-to-Peer, sondern über Tailscale verläuft. Für den Datenschutz ist das der eine Moment, in dem Tailscale tatsächlich den Inhalt sieht. Aber selbst in dieser Ausnahme kostet mich das keinen Port in meinem Netzwerk.

## Der Datenschutz-Frage: Was Tailscale sieht und was nicht

Das ist der Punkt, der bei mir immer wieder aufkommt – und der im vorigen Beitrag noch kurz gestreift wurde.

Tailscale sieht meinen Traffic nicht, also was ich im Netzwerk mache oder welche Dienste ich anspreche. Die Verbindung zwischen zwei Geräten läuft Ende-zu-Ende-verschlüsselt über WireGuard.

Die Koordinations-Server von Tailscale vermitteln aber die Verbindung. Sie merken sich, welche Geräte existieren, wie sie sich gegenseitig finden und welche IPs hinter welchen Geräten stehen – anders wäre das ja auch nicht möglich. Das ist ein kleiner Kontrollverlust gegenüber einem komplett selbst betriebenen Setup. Im Regelfall wird das irrelevant sein; bei Apple, Google oder jedem andren Login-Provider werden deutlich mehr Daten und Kontrolle abgegeben. Aber auch bei Tailscale ist es – technisch bedingt - eben auch nicht auf null.

Wer sich damit wirklich nicht anfreunden kann, hat mit Headscale eine Alternative: Das ist die selbst gehostete Version der Koordinations-Schicht. Also die gleiche WireGuard-Technik, aber mit dem Unterschied, dass die Koordinations-Server bei einem selbst laufen statt bei Tailscale. Dann ist wirklich nichts mehr bei Dritten. Ich habe das bisher nicht gemacht – der Aufwand steht dem Nutzen bei mir (noch) nicht gegenüber. Aber der Weg ist offen und das ist beruhigend: Ich bin nicht in eine Entscheidung gefahren, aus der ich nicht mehr zurückkomme.

Ein zweiter Punkt, der mich stört, hat nicht mit Datenschutz zu tun, sondern mit dem Zugang selbst: Für Tailscale brauche ich ein Konto bei einem Drittanbieter, bspw. bei GitHub. Das ist kein Problem der Technik, sondern der Zugangsvoraussetzung – ich hänge für einen Dienst, den ich theoretisch selbst betreiben könnte, an fremder Infrastruktur. Bei Headscale wäre das anders, da man den Login selbst definiert.

## Wo die Sicherheit hakt

Und jetzt der Punkt, der mir beim Schreiben am meisten nicht gut tut. Tailscale ist bequemer als ein selbst gebautes VPN, aber es hats seinen Preis.

**Account-Takeover:** Tailscale authentifiziert über einen Login-Provider, in meinem Fall GitHub. Das heißt konkret: Wer sich in mein GitHub-Konto einloggt, ist im Tailscale-Netz – in meinem nächsten Cloud-Konto, in meinen Kameras, an meiner Homebridge, auf meiner NAS – die sind natürlich alle auch mit Passwörtern gesichert, aber die Dienste und Geräte wären an sich halt sichtbar. Das ist kein hypothetisches Szenario, sondern der Moment, wo Sicherheit nicht mehr bei Tailscale liegt, sondern beim Provider.

Die Antwort, mit der ich das absichere, ist dieselbe, die ich für jedes (kritische) Konto habe: Zwei-Faktor-Authentifizierung, regelmäßige Kontrolle der Sessions und das Wissen, dass sich über Tailscale in der App jederzeit ein Gerät entfernen lässt – falls etwas kompromittiert ist, ist der Weg aus dem Netz ein kurzer. Das klingt banal, ist es nicht: Für ein Setup bei dem ich etliche VLANs konfiguriert habe, um Geräte voneinander zu trennen, ist es ein kleiner Schreck, dass die ganze Trennung an ein einziges Konto geknüpft ist.

**Ein flaches Mesh statt Segmentierung:** Das ist bei mir der eigentliche Punkt. Bei mir laufen im physikalischen Heimnetz fast 30 VLANs – ich trenne Kameras von der NAS, IoT von Client-Geräten und ähnliches. Das war ein bewusster Grundsatz; ein [Sicherheits-Audit](/sicherheits-audit-nach-netzwerk-installation/) hat das bestätigt.

Tailscale macht genau diesen Grundsatz ungültig. Wenn ich mich per Tailscale in mein Netz einwähle, sitze ich in *einem* virtuellen Netz, in dem jedes meiner Geräte jedes andere Gerät sieht, also alle in einer Ebene. Ein kompromittiertes Gerät im Tailscale-Netz (etwa ein gestohlenes Gerät oder irgendein Client, den ich nicht sofort entfernt habe) kann sich in dem Netz bewegen wie ein Gerät, das in meinem eigenen LAN hängt.

Tailscale gibt mir dafür ein Werkzeug in die Hand, nämlich ACL (access control list). Damit kann man Regeln definieren, wie zwischen Gerät und Gerät im Mesh getrennt wird – etwa, dass ein iPad, das ich nur zur Steuerung habe, nicht auf Nextcloud zugreifen darf. Das nutze ich noch nicht. Der Grund ist ehrlich: Ich habe bisher kein Gerät im Tailscale-Netz, das ich trennen muss. Alle Geräte sind meine, ich kontrolliere sie, sie sind bekannt. Aber das ist ein bewusstes Risiko, das ich in Kauf nehme, nicht eine saubere Lösung. Die Frage ist, wie lange das so bleibt – je mehr Geräte kommen, desto schwerer wiegt ein flaches Netzwerk.

Und dann ist da noch der dritte Punkt, den ich am Anfang nur gestreift habe: **Ein einzelnes Konto steuert den ganzen Zugang.** Nicht nur die Tailscale-Login, sondern alle Geräte, die sich anmelden, hängen an derselben Identität. Die WatchGuard-Firebox trennt das physische Netz von der Welt. Tailscale bringt eine logische Ebene davor und diese logische Ebene ist ein einziger Account. Das ist kein Fehler von Tailscale, das ist die Eigenschaft des Systems. Aber es lohnt, sich das bewusst zu machen, bevor es eingesetzt wird.

## Akku und Dauerbetrieb

Ein Wort zum Akku. WireGuard-basierte Protokolle sind effizient, aber ein dauernd aktiver Tunnel braucht auch Strom. Es gibt einen Hintergrund-Prozess, der die Verbindung offen hält. In der Praxis ist der Verbrauch gering und ich habe nie ein Problem damit gehabt, aber es ist nicht null. Mir ist bisher jedoch keine Veränderung bei der Akkulaufzeit aufgefallen.

## Was ich aus dem Wechsel mitnehme

Der Wechsel von Fritz-VPN bzw. WireGuard zu Tailscale war nicht, weil ich mit der vorherigen Lösung unzufrieden war. Fritz-VPN hat seinen Job gemacht. WireGuard hat seinen Job gemacht. Tailscale macht einen anderen Job, den ich brauche, nachdem ich das Netzwerk umgestellt habe und der zentrale VPN-Server weggefallen ist.

Der Unterschied ist die Betreuung. Fritz-VPN war proprietär, aber einfach – die FritzBox bringt das mit. WireGuard war offener, herstellerunabhängig, aber an dieselbe Hardware gekoppelt. Tailscale ist beides dazu: Herstellerunabhängig und wenig Aufwand. Die Schlüsselverwaltung, die Geräteerkennung, der NAT-Traversal – all das Zeug, bei dem eine an die FritzBox gekoppelte VPN-Lösung auf einem neuen Netz zum blinden Fleck wird, tut Tailscale für mich.

Was ich dafür abgebe, ist die Frage nach den Koordinations-Servern. Und diese Abgabe ist bewusst: Ich weiß, dass es einen Hebel gibt (Headscale), sollte sich das je als unangenehm erweisen. Das ist kein Kontrollverlust, den ich nicht sehe – es ist eine Einsparung, den ich gewählt habe, weil er mir den größten Nutzen für den wenigsten Aufwand bringt.

## Fazit

Tailscale ist für mich das, was mein Fernzugriff sein soll: Ein Weg ins eigene Netzwerk, der so einfach ist, dass er immer läuft, ohne dass ich dran denke. Kein Port offen, kein Dienst sichtbar, kein eigenständiger Server, den ich betreibe (wobei letzteres evtl. irgendwann kommt). Und – das ist mir wichtig – die Datenschutzfrage ist nicht verschwunden, sie ist nur an anderer Stelle: Die Geräte finden sich über Tailscale, der Traffic selbst nicht. Das ist ein bewusster Kompromiss.

Und ja, ich schreibe bestimmt auch später noch einen über Headscale – falls ich so weit bin. Tailscale hat sein eigenes Kapitel verdient, das hier ist es.
