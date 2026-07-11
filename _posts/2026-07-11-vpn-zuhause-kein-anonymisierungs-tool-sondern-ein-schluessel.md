---
layout: post
title: "VPN Zuhause: Kein Anonymisierungs-Tool, sondern ein Schlüssel"
date: 2026-07-11
category: "Netzwerk & Infrastruktur"
tags: [netzwerk, vpn, wireguard, sicherheit, datenschutz, smart-home, self-hosting]
excerpt: "VPN heißt für die meisten: NordVPN, Anonymität, Netflix entsperren. Das hier ist etwas völlig anderes – nämlich ein sicherer Weg ins eigene Heimnetz, ohne es dafür öffnen zu müssen."
---

Wenn jemand VPN hört, denkt er an die allgegenwärtige NordVPN-Werbung auf YouTube. An «sicher surfen im öffentlichen WLAN» und «anonym im Internet unterwegs sein». Das ist VPN als Produkt, als Dienstleistung, als Versprechen von Anonymität im Internet. Darum geht es hier nicht.

Das hier geht um etwas viel Unspektakuläreres: Einen sicheren Weg nach Hause.

## Das Problem, das VPN löst

[Mein Smart Home läuft lokal.](/smart-home-und-datenschutz-was-nach-aussen-geht-und-was-nicht/) Keine Cloud, keine externen Server, kein Hersteller der mitliest – das war von Anfang an das Ziel und ist bis heute der Stand. Alles, was im Haus passiert, bleibt im Haus. Jalousien, Klima/Heizung, Beleuchtung und, und, und – das läuft im eigenen Netzwerk und nirgendwo sonst.

Das funktioniert hervorragend, solange man Zuhause ist.

Sobald man unterwegs ist, entsteht eine Frage: Wie kommt man ran? Wie prüft man, ob die Jalousien oben sind bevor ein Sturm aufzieht? Wie schaut man kurz nach, ob die Heizung noch läuft? Wie greift man auf [Nextcloud](/von-icloud-zu-nextcloud-1-jahr-spaeter/) zu, auf [Navidrome](/tschuess-spotify-hallo-navidrome-die-eigene-musiksammlung-selbst-streamen/) oder auf irgendeinen anderen der selbst gehosteten Dienste?

Die naheliegende Antwort wäre: Ports öffnen, also den Dienst von außen erreichbar machen – eine Portweiterleitung in der Firewall und fertig. Das ist die falsche Antwort.

Jeder Dienst, der von außen erreichbar ist, ist eine Angriffsfläche. Nicht theoretisch, nicht paranoid gedacht – praktisch. Automatisierte Scanner suchen rund um die Uhr nach offenen Ports. Bekannte Schwachstellen werden ausgenutzt, bevor Updates erscheinen. Ein falsch konfigurierter Dienst, eine vergessene Portweiterleitung, ein veraltetes Zertifikat – das reicht. Wer Nextcloud auf Port 443 nach außen stellt, macht sich angreifbar. Wer die Homebridge-Oberfläche erreichbar macht, auch. Wer die Kameraverwaltung öffnet, erst recht.

VPN löst das anders: Nicht der Dienst wird nach außen gestellt, sondern der Zugang zum Netzwerk. Man verbindet sich zuerst mit dem eigenen Netzwerk – authentifiziert, verschlüsselt – und ist danach so, als säße man Zuhause. Nextcloud, Navidrome, HomeKit, Kameras: Alles erreichbar, über denselben Weg, ohne dass irgendetwas davon von außen sichtbar ist. Von außen ist das Netzwerk unsichtbar. So soll es sein.

## Warum das mit Smart Home besonders wichtig ist

Ein Smart Home ohne Fernzugriff ist nur halb durchgedacht. Man baut ein System, das reagiert, automatisiert, Daten sammelt – und dann ist man unterwegs und kann nichts machen. Das ist kein Komfortproblem, das ist ein Konzeptproblem.

Die Alternative, die viele wählen, ist die Herstellercloud. HomeKit über iCloud, Hue über die Philips-Cloud, Kameras über irgendeinen externen Server. Das funktioniert meistens, hat aber einen Preis: Man gibt die Kontrolle ab. Der Hersteller weiß, wann man welche Geräte steuert. Man ist abhängig davon, dass der Dienst verfügbar ist und man hat keine Ahnung, was tatsächlich mit diesen Daten passiert.

Bei mir läuft das Smart Home über Apple HomeKit, mit iPads und Apple TVs als Home Hubs. HomeKit bringt von sich aus einen Fernzugriff mit – über iCloud als Relais, vermittelt durch die Home-Hubs. Das funktioniert und ich nutze es auch: Die Home-App auf dem iPhone zeigt unterwegs alle Geräte, weil Apple das im Hintergrund über iCloud abwickelt. Das ist eine Abhängigkeit, die ich derzeit in Kauf nehme – und ein Grund, warum ich irgendwann auf Home Assistant wechseln möchte, wo sich das vollständig lokal lösen lässt. Bisher ist es dazu noch nicht gekommen.

Für alles andere greift dieses Prinzip aber nicht. Nextcloud, Navidrome etc. – das hat keinen eigenen Cloud-Kanal. Wer die sehen möchte, muss entweder Ports öffnen oder VPN nutzen. Und Ports öffnen ist, wie gesagt, die falsche Antwort. VPN ist der einzige Weg, der die Kontrolle behält: Kein Dienst nach außen gestellt, kein fremder Server dazwischen, keine Abhängigkeit von der Verfügbarkeit eines Hersteller-Backends.

## Der eigene Weg: Von Fritz-VPN zu WireGuard zu Tailscale

Mein erster VPN-Zugang war denkbar einfach: Fritz-VPN, direkt über die Fritzbox konfiguriert. Kein separates Tool, keine zusätzliche Software – die Fritzbox bringt das von Haus aus mit, die Einrichtung war in wenigen Minuten erledigt. Herstellerspezifisch, proprietär, aber es hat funktioniert. Für den Anwendungsfall – gelegentlich von unterwegs ins Heimnetz – war es völlig ausreichend.

Irgendwann bin ich auf WireGuard gewechselt. WireGuard ist ein modernes VPN-Protokoll, das gegenüber älteren Lösungen wie OpenVPN oder IPsec einige Vorteile hat: Der Code ist deutlich schlanker. Weniger Code bedeutet weniger potenzielle Angriffsfläche – die Verbindungsaufbauzeiten sind kürzer und die Performance ist besser, weil WireGuard direkt im Linux-Kernel läuft, statt im Anwenderbereich. Auch die Fritzbox unterstützt WireGuard inzwischen nativ. Der Wechsel war keine Notwendigkeit, sondern eher der Wunsch nach einer offeneren, herstellerunabhängigen Lösung – Fritz-VPN ist und bleibt proprietär. Die Einrichtung war etwas mehr Aufwand als Fritz-VPN und ich erinnere mich an Schwierigkeiten auf einzelnen Geräten beim Einrichten – irgendetwas mit einer Konfigurationsdatei, die auf manchen Clients nicht so wollte, wie sie sollte. Was genau, weiß ich nicht mehr, am Ende hat es aber geklappt.

Dann kam der Wechsel auf UniFi. Das Netzwerk wurde komplett neu aufgebaut – neue Hardware, neue Konfiguration, neue Struktur und dabei ist VPN zunächst weggefallen. Das war keine bewusste Entscheidung, eher eine Lücke: Das neue Setup lief, alles andere war wichtiger, VPN kam auf die Liste der Dinge, die noch erledigt werden müssen. Eine Weile lang gab es schlicht keinen Fernzugriff.

Diese Lücke hat mich Tailscale schließen lassen. Tailscale basiert auf WireGuard, übernimmt aber die gesamte Schlüsselverwaltung und Gerätekonfiguration – man installiert einen Client, meldet sich an, und die Geräte finden sich gegenseitig. Auf meinem iPhone läuft Tailscale etwa dauerhaft. Kein bewusstes Einwählen, kein Ausschalten wenn man es gerade nicht braucht – das Heimnetz ist einfach immer erreichbar.

Das ist komfortabel, bringt aber einen kleinen Gedanken mit: Tailscale selbst sieht den Traffic nicht, aber die Koordinationsserver von Tailscale vermitteln die Verbindungen zwischen den Geräten. Das ist ein winziger Kontrollverlust gegenüber einem selbst betriebenen WireGuard-Server – wer das stört, kann auf Headscale ausweichen, eine selbst gehostete Alternative zur Tailscale-Koordinationsschicht, die ansonsten denselben WireGuard-Unterbau nutzt. Was mich ebenfalls stört, ist der Umstand, dass man für Tailscale einen Drittanbieter-Account wie GitHub oÄ benötigt, um da überhaupt ein Benutzerkonto anlegen zu können; bei Headscale ist das hoffentlich anders. Was den Akkuverbrauch betrifft: WireGuard-basierte Protokolle sind effizient, im Dauerbetrieb aber dennoch dauerhaft aktiv. In der Praxis fällt es kaum auf, aber es ist nicht nichts.

Dazu werde ich aber irgendwann bestimmt einen eigenen Artikel schreiben – Tailscale hat das verdient.

## Was VPN nicht ist

Noch einmal, weil es wichtig ist: Das hier ist kein NordVPN. Kein Tunneln des gesamten Internettraffics durch einen fremden Server. Keine Anonymisierung, keine andere IP-Adresse nach außen, kein «sicher surfen».

Wenn ich mich per VPN einwähle, geht mein Internettraffic weiterhin direkt raus und nicht durch mein Heimnetz. Nur der Traffic, der ins Heimnetz soll, läuft durch den Tunnel. Split-Tunneling nennt sich das und ist für diesen Anwendungsfall die richtige Konfiguration. Ich will nicht, dass jede Website, die ich unterwegs aufrufe, über meinen Heimanschluss läuft. Ich will nur, dass mein Smart Home und meine selbst gehosteten Dienste so erreichbar sind, als wäre ich Zuhause.

## Fazit

VPN Zuhause ist für mich die logische Konsequenz aus dem Anspruch, die Kontrolle zu behalten. Wer ein [lokales Smart Home](/smart-home-und-datenschutz-was-nach-aussen-geht-und-was-nicht/) betreibt, selbst hostet und keine Herstellercloud will – und dann trotzdem von unterwegs ran muss – hat ohne VPN das Konzept nur halb zu Ende gedacht. Ports öffnen ist die bequeme Lösung. VPN ist die richtige. Jedenfalls für mich.
