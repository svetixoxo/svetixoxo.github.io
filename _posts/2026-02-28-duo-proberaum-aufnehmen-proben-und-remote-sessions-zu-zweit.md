---
layout: post
title: "Duo-Proberaum: Aufnehmen, Proben und Remote-Sessions zu zweit"
date: 2026-02-28
category: "Proberaum & Musikmachen"
tags: [proberaum, recording, remote, sonobus, interface, heimstudio, mikrofon]
excerpt: "Ein Proberaum für zwei Personen, der gleichzeitig Aufnahmestudio und Remote-Basis ist — mit einem Steinberg-Interface, einem Yamaha MG10X, einer PA, sechs Mikrofonen und Sonobus als Verbindung zur Band."
---

<style>
  .setup-raster {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2em;
    margin-bottom: 0;
  }
  .setup-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.82rem;
  }
  .setup-tabelle td {
    padding: 0.5em 0.8em;
    border-bottom: 1px solid var(--linie);
    vertical-align: top;
  }
  .setup-tabelle tr:last-child td { border-bottom: none; }
  .setup-tabelle td:first-child {
    color: var(--gedimmt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
    width: 35%;
    white-space: nowrap;
  }
  @media (max-width: 992px) {
    .setup-raster { grid-template-columns: 1fr; }
    .setup-tabelle tr {
      display: flex;
      flex-direction: column;
      padding: 0.5em 0;
      border-bottom: 1px solid var(--linie);
    }
    .setup-tabelle tr:last-child { border-bottom: none; }
    .setup-tabelle td {
      border-bottom: none;
      padding: 0.1em 0.8em;
      width: 100% !important;
      white-space: normal !important;
    }
    .setup-tabelle td:first-child { padding-bottom: 0; font-size: 0.68rem; }
  }
</style>

## Der Raum

Der Duo-Proberaum liegt im Souterrain meines Hauses — kleiner als der <a href="/band-proberaum-wie-wir-gleichzeitiges-proben-und-aufnehmen-geloest-haben/" class="link-lila">Band-Proberaum</a>, aber deutlich näher. Wir sind auch als Duo außerhalb der Band aktiv das meiste, was für uns mit Musik zu tun hat, findet von hier aus statt. Der Raum muss deshalb mehrere Dinge gleichzeitig können: Als Aufnahmestudio für Duo-Sessions, als Proberaum für zwei Personen und als technische Basis für Remote-Proben mit der Band funktionieren.

Das setzt andere Prioritäten als der große Bandproberaum. Hier steht nicht die PA im Vordergrund, sondern das saubere Aufnehmen mehrerer Signale und das Routing eingehender Signale auf separate Boxen — so dass der Raum bei Remote-Proben räumlich klingt und nicht wie ein Stereo-Mix aus zwei Lautsprechern.

## Mikrofonierung

Sechs Mikrofone für zwei Personen klingt nach viel — ist aber auf zwei verschiedene Szenarien aufgeteilt, die unterschiedliche Signalwege nutzen.

Für Aufnahmen läuft alles über das <a href="/steinberg-ur44c-im-alltag/" class="link-lila">Steinberg UR44C</a>. Ein Neumann TLM 102 geht auf Eingang 1 und übernimmt Gesang in der Recording-Situation. Das Shure SM57 auf Eingang 2 wird für E-Gitarre (oder wahlweise akustische Gitarre) genutzt, sein Signal wird vorher per DI-Box gesplittet — so liegt es gleichzeitig am Interface und am Mischpult an. Zwei Rode M5 MP gehen auf die Eingänge 3 und 4 und werden für akustische Gitarren oder Percussion eingesetzt, je nachdem was gebraucht wird.

Für Remote-Proben und Live-Mitschnitte läuft der Signalweg über das Yamaha MG10X. Zwei Sennheiser-Mikrofone – ein e 865-S und ein e 835-S – übernehmen Gesang und Kommunikation. Das „S“ steht übrigens nicht für „Sport“, sondern für „mit Schalter“. Die akustische Gitarre kommt bei Remote-Proben über einen magnetischen Tonabnehmer direkt ins Mischpult. Das SM57 ist, wie oben beschrieben, über die DI-Box auf beiden Wegen gleichzeitig aktiv.

## Output-Routing

Am UR44C hängen die beiden Genelec 8020D — die laufen ausschließlich für das Monitoring beim Mixing. Die PA ist sowohl am MG10X als auch über einen Line-Ausgang des UR44C erreichbar; welcher Weg aktiv ist, hängt davon ab, was gerade gemacht wird.

Bei Remote-Proben läuft ein db Flexsys FM10 als Bühnenmonitor für den Gesang, damit man sich im Raum hört, ohne in die PA hören zu müssen. Über die PA kommt dann ausschließlich das eingehende Signal der Band als einfacher Stereo-Mix.

## Remote-Proben mit Sonobus

Seit dem Umzug finden Proben mit der Band hauptsächlich remote statt. Dafür nutzen wir Sonobus – eine Open-Source-Software, die Audio in Echtzeit über das Internet überträgt. Was einfach klingt, hat in der Praxis ein paar Kompromisse.

Der wichtigste: Latenz. Je mehr einzelne Kanäle übertragen werden, desto höher wird sie. Wir übertragen deshalb lediglich die Stereo-Summe, also kein Einzelkanal-Routing. Sonobus erlaubt zwar, jeden eingehenden Kanal separat zu regeln, aber in der Praxis hat sich gezeigt, dass die Summe die bessere Wahl ist: Die Latenz bleibt niedrig und das System bleibt stabil. Der Kompromiss dabei: Die Balance muss vor Ort am Mischpult stimmen, bevor das Signal rausgeht. Was unterwegs ist, ist unterwegs.

## Geräteübersicht

<div class="setup-raster">
  <div>
    <table class="setup-tabelle">
      <tr><td>Interface</td><td>Steinberg UR44C</td></tr>
      <tr><td>Mischpult</td><td>Yamaha MG10X</td></tr>
      <tr><td>Mikrofone Rec</td><td>Neumann TLM 102<br>Shure SM57<br>Rode M5 MP (2×)<br>Sennheiser e 865-S<br>Sennheiser e 835-S</td></tr>
      <tr><td>DI-Box</td><td>Radial ProMS2</td></tr>
    </table>
  </div>
  <div>
    <table class="setup-tabelle">
      <tr><td>PA</td><td>db Opera 10 (2×)<br>db Sub 612 (2×)<br>db Flexsys FM10</td></tr>
      <tr><td>Monitoring</td><td>Genelec 8020D (2×)<br>Shure SRH440</td></tr>
      <tr><td>Computer</td><td>iMac M4</td></tr>
    </table>
  </div>
</div>

## Einfach, aber durchdacht
Was diesen Raum von einer improvisierten Lösung unterscheidet, ist dass nichts umgebaut werden muss. Alles ist dauerhaft verkabelt, alles liegt bereit. Sicherlich hätte man einiges anders machen können, aber irgendwie funktioniert es dann doch. Ob Aufnahme, Probe zu zweit oder Remote-Session mit der Band: Es geht darum, so wenig Reibung wie möglich zwischen dem Wunsch zu spielen und dem tatsächlichen Spielen zu haben.

Remote-Proben mit Sonobus sind kein vollwertiger Ersatz für einen gemeinsamen Raum. Die Latenz ist teilweise spürbar, die Balance stimmt nie ganz so wie vor Ort und vereinzelt bricht die Verbindung einfach ab. Aber sie funktionieren gut genug, um Arrangements durchzuarbeiten, neue Songs zu besprechen und den Draht zur Band zu halten – und das zählt mehr als die technische Perfektion.