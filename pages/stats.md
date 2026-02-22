---
layout: default
title: "Statistiken"
permalink: /stats/
---

<style>
  .artikel-rahmen p {
    margin-bottom: 0;
  }
  .stats-raster {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2em;
    margin-bottom: 2em;
  }
  .stats-kachel {
    background: var(--hintergrund-karte);
    border: var(--rahmen);
    box-shadow: var(--schatten);
    padding: 1.5em;
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
  @media (max-width: 700px) {
    .stats-raster {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<div class="artikel-rahmen">
  <h1>Statistiken</h1>
  <p class="artikel-einleitung">Statistiken und Infos über diesen Blog – automatisch aus dem Repository berechnet.</p>
</div>

{% assign alle_posts = site.posts %}
{% assign alle_tags = site.tags %}
{% assign erster_post = site.posts | last %}
{% assign letzter_post = site.posts | first %}

{% assign woerter_gesamt = 0 %}
{% for post in site.posts %}
  {% assign woerter = post.content | strip_html | number_of_words %}
  {% assign woerter_gesamt = woerter_gesamt | plus: woerter %}
{% endfor %}
{% if site.posts.size > 0 %}
  {% assign woerter_schnitt = woerter_gesamt | divided_by: site.posts.size %}
{% else %}
  {% assign woerter_schnitt = 0 %}
{% endif %}

<div class="stats-raster">
  <div class="stats-kachel">
    <div class="stats-kachel-label">Beiträge gesamt</div>
    <div class="stats-kachel-wert" style="color:var(--tuerkis)">{{ site.posts.size }}</div>
  </div>
  <div class="stats-kachel">
    <div class="stats-kachel-label">Ø Wörter pro Beitrag</div>
    <div class="stats-kachel-wert" style="color:var(--lila)">{{ woerter_schnitt }}</div>
  </div>
  <div class="stats-kachel">
    <div class="stats-kachel-label">Wörter gesamt</div>
    <div class="stats-kachel-wert" style="color:var(--gruen)">{{ woerter_gesamt }}</div>
  </div><!--
  <div class="stats-kachel">
    <div class="stats-kachel-label">Tags</div>
    <div class="stats-kachel-wert" style="color:var(--orange)">{{ site.tags.size }}</div>
  </div>-->
  <div class="stats-kachel">
    <div class="stats-kachel-label">Letzter/Erster Beitrag</div>
    <div class="stats-kachel-wert klein">{{ erster_post.date | date: "%Y-%m-%d" }}<br />{{ letzter_post.date | date: "%Y-%m-%d" }}</div>
  </div>
</div>
<!--
<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--orange)"/></svg>
  <h2>Beiträge pro Kategorie</h2>
</div>
--><!--
<div class="artikel-rahmen">
  <table class="stats-tabelle">
    {% assign kategorien = site.posts | map: "category" | uniq %}
    {% for kat in kategorien %}
      {% assign kat_posts = site.posts | where: "category", kat %}
      <tr>
        <td>{{ kat | default: "Sonstiges" }}</td>
        <td>{{ kat_posts.size }} Beiträge</td>
      </tr>
    {% endfor %}
  </table>
</div>
--><!--
<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--lila)"/></svg>
  <h2>Alle Tags</h2>
</div>
--><!--
<div class="artikel-rahmen">
  <table class="stats-tabelle">
    {% assign sortierte_tags = site.tags | sort %}
    {% for tag in sortierte_tags %}
      {% assign tag_name = tag | first %}
      {% assign tag_posts = tag | last %}
      <tr>
        <td><a href="/tags/{{ tag_name | downcase | replace: ' ', '-' }}/">{{ tag_name }}</a></td>
        <td>{{ tag_posts.size }} Beiträge</td>
      </tr>
    {% endfor %}
  </table>
</div>
-->

<div class="artikel-rahmen">
  <table class="stats-tabelle">
    <tr>
      <td>Generator</td>
      <td>Jekyll {{ jekyll.version }}</td>
    </tr>
    <tr>
      <td>GitHub Pages</td>
      <td><a href="https://svetixoxo.github.io">svetixoxo.github.io</a></td>
    </tr>
    <tr>
      <td>Plugins</td>
      <td>jekyll-feed, jekyll-sitemap, jekyll-seo-tag</td>
    </tr>
    <tr>
      <td>Schriftart</td>
      <td>IBM Plex Sans & IBM Plex Mono</td>
    </tr>
    <tr>
      <td>Repository-Größe</td>
      <td>
        <span id="repo-groesse">wird geladen…</span>
        <span id="repo-dateien"></span>
      </td>
    </tr>
    <tr>
      <td>Sprachen</td>
      <td id="repo-sprachen">wird geladen</td>
    </tr>
    <tr>
      <td>Commits</td>
      <td id="repo-commits-info">wird geladen…</td>
    </tr>
    <tr>
      <td>Quellcode</td>
      <td><a href="https://github.com/svetixoxo/svetixoxo.github.io">github.com/svetixoxo/svetixoxo.github.io</a></td>
    </tr>
  </table>
</div>

<script>
  setTimeout(function() {
    fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io')
      .then(r => r.json())
      .then(data => {
        if (data.size) {
          document.getElementById('repo-groesse').textContent = (data.size / 1024).toFixed(2) + ' MB';
        } else {
          document.getElementById('repo-groesse').textContent = 'Daten können nicht abgerufen werden (API-Limit erreicht)';
        }
      })
      .catch(() => {
        document.getElementById('repo-groesse').textContent = 'Daten können nicht abgerufen werden (API-Limit erreicht)';
      });

    fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/git/trees/main?recursive=1')
      .then(r => r.json())
      .then(data => {
        if (data.tree) {
          const anzahl = data.tree.filter(i => i.type === 'blob').length;
          document.getElementById('repo-dateien').textContent = '(' + anzahl + ' Dateien)';
        } else {
          document.getElementById('repo-dateien').textContent = '';
        }
      })
      .catch(() => {
        document.getElementById('repo-dateien').textContent = '';
      });
  });
</script>

<script>
  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/languages')
    .then(r => r.json())
    .then(data => {
      if (data.message || Object.keys(data).length === 0) {
        document.getElementById('repo-sprachen').textContent = 'Daten können nicht abgerufen werden (API-Limit erreicht)';
        return;
      }
      const gesamt = Object.values(data).reduce((a, b) => a + b, 0);
      const teile = Object.entries(data).map(([sprache, bytes]) => {
        const prozent = ((bytes / gesamt) * 100).toFixed(1);
        return `${sprache} (${prozent}%)`;
      });
      document.getElementById('repo-sprachen').textContent = teile.join(', ');
    })
    .catch(() => {
      document.getElementById('repo-sprachen').textContent = 'Daten können nicht abgerufen werden (API-Limit erreicht)';
    });
</script>

<script>
  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/commits?per_page=1')
    .then(r => {
      const linkHeader = r.headers.get('Link');
      const match = linkHeader && linkHeader.match(/page=(\d+)>; rel="last"/);
      const anzahl = match ? match[1] : '1';
      return r.json().then(data => {
        if (data[0] && data[0].commit) {
          const datum = new Date(data[0].commit.author.date);

          // yyyy-mm-dd Format
          const jahr = datum.getFullYear();
          const monat = String(datum.getMonth() + 1).padStart(2, '0');
          const tag = String(datum.getDate()).padStart(2, '0');
          const formatiert = `${jahr}-${monat}-${tag}`;

          document.getElementById('repo-commits-info').textContent =
            anzahl + ' (letzter Commit: ' + formatiert + ')';
        } else {
          document.getElementById('repo-commits-info').textContent =
            'Daten können nicht abgerufen werden (API-Limit erreicht)';
        }
      });
    })
    .catch(() => {
      document.getElementById('repo-commits-info').textContent =
        'Daten können nicht abgerufen werden (API-Limit erreicht)';
    });
</script>