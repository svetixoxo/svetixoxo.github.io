---
layout: seite
title: "Themen"
permalink: /themen/
excerpt: "Was hier steht, kommt aus dem Alltag: Self-Hosting, Infrastruktur, Smart Home und Sicherheit – vier Bereiche, die sich bei mir gegenseitig bedingen. Ich schreibe, was ich einsetze und was ich dabei mitnehme. Nicht immer geradlinig, aber immer ehrlich."
zweispaltig: true
---

<div class="etiketten-zeile" id="tag-liste">
  {% assign alle-tags = site.pages | where_exp: "seite", "seite.path contains 'tags/'" | sort: "title" %}
  {% for tag in alle-tags %}
    <a href="{{ tag.url }}" class="etikett etikett-{{ tag.title | downcase | replace: ' ', '-' }}">{{ tag.title }}</a>
  {% endfor %}
</div>

## Self-Hosting & Dienste
**Eigene Services statt irgendwelcher Abos.** Nextcloud, Container, Medienserver, Apps und digitale Organisation. Hier geht es darum, Dienste selbst zu betreiben und zu verstehen, statt sie nur zu konsumieren. **Self-Hosting ist kein Selbstzweck.** Es geht nicht darum, möglichst viel selbst zu machen. Saubere Container-Strukturen spielen dabei eine größere Rolle als das reine „es läuft bei mir“. **Komfort ist nett, Kontrolle ist besser.**

## Infrastruktur & Technik
**Das Fundament hinter allem.** Hardware, Netzwerk und Speicher bilden die Basis für alles andere. Es geht um Planung, sinnvolle Dimensionierung und die Frage, wie viel Technik wirklich nötig ist. Eine saubere Infrastruktur entscheidet darüber, ob Dienste stabil laufen oder bei der ersten Lastspitze einknicken. Netzwerkdesign und ein solides Host-System sind keine Nebensache. **Wer hier sauber arbeitet, hat später deutlich weniger Probleme.**

## Smart Home & Automatisierung
**Technik, die nicht nur läuft, sondern reagiert.** Einzelne Geräte und Automationen ergeben zusammen ein Gesamtsystem, ob durch einfache Zeitpläne oder komplexe Abhängigkeiten zwischen Diensten und Geräten. Dabei geht es weniger um bunte Dashboards, sondern um sinnvolle Abläufe. **Automatisierung sollte den Alltag vereinfachen.** Wenn ein Prozess stabil im Hintergrund funktioniert, ohne ständig Aufmerksamkeit zu brauchen, ist das Ziel erreicht.

## Sicherheit & Daten
**Ohne Backup ist alles nur eine Leihgabe.** Datensicherung, Redundanz, Zugriffskontrolle und Netzwerksegmentierung gehören von Anfang an ins Konzept. Sicherheit entsteht nicht durch ein einzelnes Tool, sondern durch eine durchdachte Struktur. Welche Daten sind wirklich kritisch, welche Systeme müssen abgesichert werden und was passiert, wenn doch etwas schiefgeht? **Wer das durchdacht hat, muss im Ernstfall nicht improvisieren.**
