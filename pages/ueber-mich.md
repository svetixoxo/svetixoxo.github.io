---
layout: default
title: "Über mich"
permalink: /ueber-mich/
---

<style>
  .artikel-rahmen h1 {
    margin-bottom: 0;
  }
  .artikel-rahmen p {
    margin-bottom: 0;
  }
  .stats-raster {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .stats-kachel {
    background: var(--hintergrund-karte);
    border: var(--rahmen);
    box-shadow: var(--schatten);
    padding: 2rem;
  }
  .stats-kachel-label {
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gedimmt);
    margin-bottom: 0.4em;
  }
  .stats-kachel-wert {
    font-family: "IBM Plex Mono", monospace;
    font-size: 2rem;
    font-weight: 700;
    color: var(--tinte);
    line-height: 1;
  }
  .stats-kachel-wert.klein {
    font-size: 1rem;
  }
  .stats-kachel-akzent {
    width: 4px;
    height: 2rem;
    display: inline-block;
    margin-right: 0.5em;
    vertical-align: middle;
  }
  .stats-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.82rem;
  }
  .stats-tabelle td {
    padding: 0.6em 0.8em;
    border-bottom: 1px solid var(--linie);
  }
  .stats-tabelle tr:last-child td {
    padding-bottom: 0;
    border-bottom: none;
  }
  .stats-tabelle td:first-child {
    color: var(--gedimmt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
    width: 40%;
  }
  @media (max-width: 992px) {
    .stats-raster {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<div class="artikel-rahmen">
  <h1>Über mich</h1>
</div>

<div class="artikel-rahmen">
    <p>
        <strong>Svetlana Sibirjakowa</strong><br>
        Västra Varvsgatan 20D<br>
        972 36 Luleå<br>
        Schweden 🇸🇪
    </p>
</div>