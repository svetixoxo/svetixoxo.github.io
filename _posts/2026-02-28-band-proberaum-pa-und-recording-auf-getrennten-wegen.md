---
layout: post
title: "Band-Proberaum: PA und Recording auf getrennten Wegen"
date: 2026-02-28
category: "Proberaum & Musikmachen"
bild: /assets/img/posts/260228-band-proberaum-pa-und-recording-auf-getrennten-wegen.png
tags: [proberaum, recording, pa, signalkette, mischpult, interface, mikrofon]
excerpt: "95 qm, zwei Mischpulte, zwei Interfaces, zwei Signalsplitter – und ein Keyboarder, der das alles zusammenhält. Ein Überblick über unser Band-Setup: wie es gewachsen ist, wie es funktioniert und warum PA und Recording bei uns seit Jahren getrennte Wege gehen."
---

<style>
  .setup-raster {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1.2em;
    margin-bottom: 0;
  }
  .setup-raster-2 {
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
  .signal-karten {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 1em;
  }
  .signal-karte {
    border: var(--rahmen);
    background: var(--hintergrund);
    overflow: hidden;
  }
  .signal-karte-titel {
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 0.4em 0.8em;
    background: var(--tinte);
    color: var(--weiss);
  }
  .signal-karte-zeile {
    display: flex;
    align-items: baseline;
    gap: 0.6em;
    padding: 0.45em 0.8em;
    border-bottom: 1px solid var(--linie);
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.75rem;
  }
  .signal-karte-zeile:last-child { border-bottom: none; }
  .signal-badge {
    font-size: 0.62rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 0.15em 0.5em;
    border: 1.5px solid var(--tinte);
    flex-shrink: 0;
  }
  .badge-pa  { background: var(--lila-hell);  color: var(--lila); }
  .badge-rec { background: var(--tuerkis-hell); color: var(--tuerkis); }
  .signal-karte-pfad { color: var(--gedimmt); line-height: 1.4; }
  @media (max-width: 992px) {
    .setup-raster { grid-template-columns: 1fr; }
    .setup-raster-2 { grid-template-columns: 1fr; }
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
    .signal-karten { grid-template-columns: 1fr; }
  }
</style>

## Der Raum

Wir haben zwei Proberäume – <a href="/duo-proberaum-aufnehmen-proben-und-remote-sessions-zu-zweit" class="link-lila">einen kleinen bei mir Zuhause für Duo-Sessions</a> und diesen hier: Den Band-Proberaum im Souterrain eines Bungalows. Rund 95 qm groß, akustisch behandelt und schallisoliert. Eine halbhohe Mauer teilt den Raum in zwei Bereiche: Den eigentlichen Proberaum und einen separaten Technikbereich, wo Computer und Geräteracks stehen.

Das aktuelle Setup mit zwei Mischpulten und zwei Interfaces ist über die Zeit gewachsen — nicht nach einem großen Plan, sondern Stück für Stück mit jeder neuen Anforderung. Früher lief das Schlagzeug über ein Mischpult mit USB-Ausgang, der Rest der Band über ein kleines Interface. Das hat funktioniert, solange man nicht gleichzeitig aufnehmen und proben wollte. Die heutige Aufteilung gibt deutlich mehr Spielraum. Gemischt wird von unserem Keyboarder, sowohl bei Proben als auch bei Aufnahmen.

## Mikrofonierung

Das Schlagzeug wird vollständig abgenommen und hat seinen eigenen Submix über das Yamaha MG16. Die Keyboards kommen mit dem Allen & Heath ZED-10 ebenfalls über einen eigenen Submix. Gitarren laufen per Mikrofon am Amp, zusätzlich jeweils ein DI-Signal parallel — das gibt beim Reamping in der Nachbearbeitung mehr Flexibilität. Der Bass wird ebenfalls mit Mikrofon und DI kombiniert.

Für Gesang gibt es eine klare Trennung: Leadgesang und Backgrounds laufen über dynamische Mikrofone direkt in die PA. Für Aufnahmen kommen Großmembran-Kondensatoren zum Einsatz, die erst dann ins Interface gehen, wenn wirklich aufgenommen wird. Lediglich Gesang und Keys werden über die PA wiedergegeben; Gitarren und Bass laufen bei Proben über ihre Amps, das akustische Schlagzeug ist laut genug.

## Übersicht: Mikrofone

<div class="setup-raster">
  <div>
    <table class="setup-tabelle">
      <tr><td colspan="2" style="font-weight:700; color:var(--tinte); padding-bottom:0.3em;">Schlagzeug</td></tr>
      <tr><td>Kick</td><td>Shure PGA52</td></tr>
      <tr><td>Snare</td><td>Shure PGA57</td></tr>
      <tr><td>Toms</td><td>Shure PGA56 (3×)</td></tr>
      <tr><td>Overhead</td><td>Shure PGA81 (2×)</td></tr>
    </table>
  </div>
  <div>
    <table class="setup-tabelle">
      <tr><td colspan="2" style="font-weight:700; color:var(--tinte); padding-bottom:0.3em;">Gitarren &amp; Bass</td></tr>
      <tr><td>Gitarren</td><td>Shure SM57 (2×)<br>Radial J48 (2×)<br>Radial X-Amp (2×)</td></tr>
      <tr><td>Bass</td><td>Sennheiser e 906<br>Palmer PAN 01</td></tr>
    </table>
  </div>
  <div>
    <table class="setup-tabelle">
      <tr><td colspan="2" style="font-weight:700; color:var(--tinte); padding-bottom:0.3em;">Gesang</td></tr>
      <tr><td>Recording</td><td>Rode NTR<br>Lewitt LCT 440</td></tr>
      <tr><td>Lead PA</td><td>Sennheiser e 835</td></tr>
      <tr><td>BG PA</td><td>2× AKG D5 S<br>2× Shure SM58 S</td></tr>
    </table>
  </div>
</div>

## Signalkette

Herzstück des Setups sind zwei <a href="/was-ein-signalsplitter-im-proberaum-bringt/" class="link-lila">Signalsplitter Art S8</a> — einer für das Schlagzeug, einer für den Rest der Band. Das Signal wird direkt nach den Mikrofonen aufgeteilt, bevor irgendetwas damit passiert. So laufen PA und Recording von Anfang an komplett getrennt: Was am Mischpult eingestellt wird, beeinflusst das Recording nicht. Was beim Recording passiert, interessiert die PA nicht. Sofern etwas mit akustischen Gitarren gemacht wird, kommen diese entweder direkt ins Mischpult oder leihen sich eines der Mikrofone der Gitarrenverstärker.

Recording läuft nicht parallel zur Probe. Entweder werden Gesang und Instrumente über die beiden Steinberg UR816C aufgenommen oder es wird ein Probemitschnitt über die Stereo-Summe des Yamaha MG20XU per USB gemacht. Kein Umbauen, einfach Aufnahme starten.

## Schaubild: Signalkette
<div class="signal-karten">
  <div class="signal-karte">
    <div class="signal-karte-titel">Schlagzeug</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">Splitter → Submix → Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Splitter → Interface</span>
    </div>
  </div>
  <div class="signal-karte">
    <div class="signal-karte-titel">Gitarren</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">Splitter → Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Splitter → Interface</span>
    </div>
  </div>
  <div class="signal-karte">
    <div class="signal-karte-titel">Bass</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">Splitter → Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Splitter → Interface </span>
    </div>
  </div>
  <div class="signal-karte">
    <div class="signal-karte-titel">Keys</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">Submix → Splitter → Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Submix → Splitter → Interface</span>
    </div>
  </div>
  <div class="signal-karte">
    <div class="signal-karte-titel">Gesang Lead</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">EQ → COMP → AFS → Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Interface</span>
    </div>
  </div>
  <div class="signal-karte">
    <div class="signal-karte-titel">Gesang Background</div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-pa">Live</span>
      <span class="signal-karte-pfad">Mischpult</span>
    </div>
    <div class="signal-karte-zeile">
      <span class="signal-badge badge-rec">Rec</span>
      <span class="signal-karte-pfad">&nbsp;Interface</span>
    </div>
  </div>
</div>

## Monitoring & Mixing

Für Proben läuft nicht jeder im Raum über einen eigenen Monitor — nur Leadgesang und der Keyboarder haben je einen db Flexsys FM10 als Bühnenmonitor vor sich. Der Keyboarder nutzt wahlweise auch Kopfhörer. Gitarren und akustisches Schlagzeug klingen ohnehin laut genug und der Bass schwebt auch irgendwo im Raum.

Für Aufnahmen sitzt der Keyboarder im Technikbereich am Mac Studio. Das Monitoring läuft dann über den Mackie Big Knob Studio auf die Yamaha&nbsp;HS5 und den HS8S-Subwoofer. Was im Raum klingt, bestimmt das MX20XU — was auf den Monitoren läuft, kommt direkt aus dem Interface. Die beiden laufen nicht zwingend identisch.

## Übersicht: Geräte

<div class="setup-raster-2">
  <div>
    <table class="setup-tabelle">
      <tr><td>Mischpulte</td><td>Yamaha MG20XU<br>Yamaha MG16<br>Allen &amp; Heath ZED-10</td></tr>
      <tr><td>Interfaces</td><td>Steinberg UR816C (2×)</td></tr>
      <tr><td>Splitter</td><td>Art S8 (2×)</td></tr>
      <tr><td>DI-Boxen</td><td>Klark DI DN200<br>Palmer PAN 01</td></tr>
      <tr><td>Dynamik/FX</td><td>DBX 215S<br>DBX 266XS<br>Lexicon MX400 XL</td></tr>
    </table>
  </div>
  <div>
    <table class="setup-tabelle">
      <tr><td>PA</td><td>db Flexsys FM10 (2×)<br>db Opera 10 (2×)</td></tr>
      <tr><td>Monitoring</td><td>Mackie Big Knob Studio<br>Yamaha HS5 (2×)<br>Yamaha HS8S<br>Beyerdynamic DT 770 Pro (2×)<br>Beyerdynamic DT 990 Pro</td></tr>
      <tr><td>Computer</td><td>Mac Studio</td></tr>
      <tr><td>Sonstiges</td><td>DBX AFS2<br>Furman M-10x E</td></tr>
    </table>
  </div>
</div>

## Soweit so gewachsen
Das Setup ist nie fertig geworden, weil jemand einen Plan gemacht hat, sondern weil es irgendwann einfach an der Zeit war, etwas zu ändern. Zuerst der Wunsch, nicht jedes Mal Kabel umzustecken. Dann der Wunsch, Schlagzeug und Band getrennt aufnehmen zu können. Dann das zweite Interface. Jedes Gerät im Rack hat eine Geschichte und die meisten davon beginnen mit „das andere hat nicht mehr gereicht“.

Was dabei rausgekommen ist, funktioniert für uns – auch weil der Keyboarder einen guten Teil davon zusammenhält und weiß, was wann umzustecken ist. Ohne jemanden, der den Überblick behält, wäre ein Setup dieser Größe eher Chaos als Werkzeug.