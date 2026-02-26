---
layout: post
title: "Fritz DECT 302: Vom Fritz-Ökosystem zu Apple HomeKit"
date: 2025-04-02
category: "Smart Home & Automatisierung"
tags: [smart-home, heizung, fritz, homekit, homebridge, raspberry-pi, dect]
excerpt: "Drei Heizthermostate, eine Fritz-App die gut funktioniert hat und trotzdem der Wunsch nach HomeKit. Wie das gelaufen ist — und warum die Fritz-App am Ende trotzdem nicht ganz von der Rolle verschwunden ist."
---

## Der Ausgangspunkt

Das war noch in der Wohnung: Drei smart beheizte Räume, drei Thermostate vo Fritz (DECT 302) — Schlafzimmer, Wohnzimmer, Arbeitszimmer. Die Wahl fiel auf Fritz nicht aus besonderer Überzeugung, sondern weil die Fritzbox ohnehin als Router lief und die DECT-Thermostate sich nahtlos damit verbinden. Kein separates Gedöns, kein zusätzliches Protokoll — einfach anlernen und fertig.

## Ein Jahr mit der Fritz-App

Etwa ein Jahr lang habe ich die Thermostate ausschließlich über das Fritz-Ökosystem gesteuert und ich war damit insgesamt zufrieden. Die App (Fritz Smart Home) ist stabil, die Thermostate reagieren zuverlässig und im Alltag gibt es wenig zu meckern. Ein kleiner Umweg war, dass Zeitpläne nicht über die App selbst eingestellt werden konnten, sondern über die Browser-Oberfläche der Fritzbox — etwas umständlich, aber kein wirkliches Problem. Ob das heute immer noch so ist, entzieht sich meiner Kenntnis.

Was ich in dieser Zeit nicht ausprobiert hatte: Automationen. Nicht weil die Plattform das nicht hergegeben hätte, sondern weil es bei mir schlicht nichts gab, womit man die Thermostate hätte verknüpfen können. Die Thermostate waren die einzigen smarten Geräte in der Wohnung.

## Homebridge auf dem Raspberry Pi

Den Wechsel zu Apple HomeKit hat kein konkreter Mangel ausgelöst. Ich wollte HomeKit ausprobieren, hatte einen Raspberry Pi herumstehen und suchte nach einem Projekt, das sich damit umsetzen lässt. Die Fritz-Thermostate über Homebridge in HomeKit einzubinden bot sich daher an.

Die Einrichtung war der schwierigste Teil. Homebridge selbst ist nicht kompliziert zu installieren, aber für die Fritz-Geräte braucht es ein entsprechendes Plugin und die Konfiguration — also das Hinterlegen der Zugangsdaten, der Geräte, der Einstellungen usw. — fand ich nicht besonders übersichtlich. Die Eingabefelder und Optionen wirken auf den ersten Blick etwas unstrukturiert und bis alles sauber lief hat es etwas gedauert. Sobald es aber eingerichtet war, lief es stabil. Die Thermostate tauchten in der Home-App auf, Temperaturen ließen sich setzen und der Betrieb war soweit zuverlässig.

## HomeKit im Vergleich zur Fritz-App

Ein Unterschied fiel im Alltag auf: Änderungen, die über die Fritz-App vorgenommen wurden, kamen schneller am Thermostat an als der Weg über Homebridge und HomeKit. Die Fritz-App fühlte sich insgesamt etwas reaktiver an — was vermutlich daran liegt, dass die direkte DECT-Kommunikation über die Fritzbox schlicht kürzer ist als der Umweg über Homebridge. Das war kein gravierendes Problem, aber es war spürbar. Wer gewohnt ist, dass eine Temperaturänderung (fast) sofort umgesetzt wird, merkt den kleinen Unterschied.

## Was in HomeKit fehlte

Die Fritz-App hatte ich danach nicht deinstalliert — und das hatte einen konkreten Grund: In der Fritz-App gibt es eine Boost-Funktion: Darüber lässt isch einstellen, dass die Heizung ab sofort für eine bestimmte Zeit auf voller Leistung laufen soll, bevor sie automatisch wieder in den normalen Zeitplan zurückfällt. Das ist praktisch, wenn man kurz eingeheizt haben möchte (ansonsten würde die Änderung der Temperatur bis zum Beginn der nächsten Phase im Zeitplan geltenm).

Diese Möglichkeit gibt es in Apple HomeKit nicht — zumindest habe intuitiv nicht finden können. Für alles andere reichte HomeKit, aber für den Boost-Fall blieb die Fritz-App die schnellere Lösung. Am Ende lief beides parallel: HomeKit für den normalen Betrieb, die Fritz-App für den gelegentlichen Boost.

## Fazit

Die Thermostate Fritz DECT 302 sind solide Geräte, die im Fritz-Ökosystem reibungslos funktionieren. Der Wechsel zu HomeKit über Homebridge hat geklappt, war aber kein Selbstläufer — die Einrichtung erfordert etwas Geduld und die direkte Fritz-App bleibt in mancher Hinsicht reaktiver. Wer ohnehin eine Fritzbox betreibt und keine ambitionierten Automationen oder Integrationen plant, fährt mit der nativen Lösung wahrscheinlich unkomplizierter. Wer HomeKit als zentrale Plattform nutzen möchte, bekommt mit Homebridge eine funktionierende Brücke — muss aber wissen, dass ein paar Komfortfunktionen dabei auf der Strecke bleiben können.