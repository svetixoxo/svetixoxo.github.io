---
layout: default
title: "Über mich"
permalink: /ueber-mich/
---

<style>
  .aufmacher:first-of-type {
    display: block;
    grid-template-columns: 1fr;
  }
  .ueber-raster {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 0;
  }
  .ueber-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.82rem;
  }
  .ueber-tabelle td {
    padding: 0.5em 0.8em;
    border-bottom: 1px solid var(--linie);
    vertical-align: top;
  }
  .ueber-tabelle tr:last-child td {
    border-bottom: none;
  }
  .ueber-tabelle td:first-child {
    color: var(--gedimmt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
    white-space: nowrap;
  }
  .abschnitt-kopf {
    border-top: none;
    padding-top: 0;
  }
  .abschnitt-kopf h2 {
    color: var(--weiss);
    border: var(--rahmen);
    box-shadow: var(--schatten-gross);
    padding: 1rem;
  }
  .link-liste {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.8em;
  }
  .link-liste li {
    display: flex;
    align-items: baseline;
    gap: 0.7em;
    font-size: 0.9rem;
  }
  .link-liste a {
    font-weight: 700;
    text-decoration: none;
  }
  .link-liste a:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
  .link-beschreibung {
    color: var(--gedimmt);
    font-size: 0.8rem;
    font-family: "IBM Plex Mono", monospace;
    display: block;
    margin-top: 0.1em;
  }
  .artikel-rahmen ul, .artikel-rahmen ol {
    padding-left: 0;
    text-align: left;
  }
  .stats-raster {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 0;
  }
  .stats-kachel {
    background: var(--hintergrund-karte);
    border: var(--rahmen);
    box-shadow: var(--schatten);
    padding: 1.5rem;
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
    font-size: 0.95rem;
    line-height: 1.5;
  }
  @media (max-width: 992px) {
    .ueber-raster {
      grid-template-columns: 1fr;
      gap: 0;
    }
    .stats-raster {
      grid-template-columns: 1fr 1fr !important;
    }
    .ueber-tabelle tr {
      display: flex;
      flex-direction: column;
      padding: 0.5em 0;
      border-bottom: 1px solid var(--linie);
    }
    .ueber-tabelle tr:last-child {
      border-bottom: none;
    }
    .ueber-tabelle td {
      border-bottom: none;
      padding: 0.1em 0.8em;
      width: 100% !important;
      white-space: normal !important;
    }
    .ueber-tabelle td:first-child {
      padding-bottom: 0;
      font-size: 0.68rem;
    }
  }
</style>

<div class="aufmacher">
  <div class="aufmacher-haupt">
  <h1>Über mich</h1>
  <p class="artikel-einleitung">Svetlana. Irgendwo zwischen neugierig und überfordert – auf Arch Linux unterwegs. Das hier ist mein Blog über Self-Hosting, Netzwerk, Smart Home, Musikmachen und den ganzen Rest, der sich dabei so ansammelt.</p>
</div>
</div>


<!-- ══════════════════════════════════════════
     KURZPROFIL
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--tuerkis)">Kurzprofil</h2>
</div>

<div class="aufmacher aufmacher-profil-bild-rechts">
  <div class="aufmacher-haupt" style="border-right: var(--rahmen-gross)">
    <table class="ueber-tabelle">
      <tr><td>Name</td><td>Svetlana</td></tr>
      <tr><td>Lieblings-OS</td><td>Arch Linux (und ja, ich sage es)</td></tr>
      <tr><td>Bloggt über</td><td>Self-Hosting &amp; Dienste<br>Netzwerk &amp; Infrastruktur<br>Smart Home &amp; Automatisierung<br>Proberaum &amp; Musik</td></tr>
      <tr><td>Bloggt seit</td><td>{% assign erster_post = site.posts | last %}{{ erster_post.date | date: "%Y" }}</td></tr>
      <tr><td>Beiträge</td><td>{{ site.posts.size }}</td></tr>
      <tr><td>Übersichtsseiten</td><td><a href="/it-infrastruktur/" class="link-tuerkis">Meine IT-Infrastruktur</a><br>
          <a href="/mein-smart-home-und-die-infrastruktur-dahinter/" class="link-tuerkis">Mein Smart Home und die Infrastruktur dahinter</a><br>
    <a href="/duo-proberaum-aufnehmen-proben-und-remote-sessions-zu-zweit/" class="link-tuerkis">Duo-Proberaum: Aufnehmen, Proben und Remote-Sessions zu zweit</a><br>
    <a href="/band-proberaum-pa-und-recording-auf-getrennten-wegen/" class="link-tuerkis">Band-Proberaum: PA und Recording auf getrennten Wegen</a></td></tr>
    </table>
  </div>
  <div style="background:var(--tuerkis)">
    <img src="/assets/img/svetixoxo-ueber-mich.png" class="bild" style="padding: 1.3rem;">
  </div>
</div>


<!-- ══════════════════════════════════════════
     WIE DIESER BLOG ENTSTAND
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--magenta)">Wie dieser Blog entstand</h2>
</div>

<div class="ueber-raster">
  <div class="artikel-rahmen">
    <p>HTML und CSS habe ich selbst gemacht – und dabei gemerkt, dass mir das mehr Spaß macht als erwartet. Das Design, die Layouts, die Farbsysteme, die Komponenten: Alles von Hand geschrieben. Dass das auch für meine Text gilt, brauche ich hier nicht zu erwähnen.</p>
  </div>
  <div class="artikel-rahmen">
    <p>In zwei Bereichen kommt hier KI zum Einsatz: Von JavaScript habe ich keine Ahnung, also kam das von Anthropic Claude. Die Grafiken basieren auf einem Foto von mir und kommen von OpenAI ChatGPT, müssen aber fast immer noch angepasst werden.</p>
  </div>
</div>

<div class="artikel-rahmen">
  <p>Dieser Blog ist keine Tutorial-Seite und kein Showcase – er ist ein Ort, wo ich aufschreibe, was ich einsetze, warum ich mich so entschieden habe und was dabei schiefgelaufen ist. An wen er sich richtet, weiß ich ehrlich gesagt nicht genau. Vielleicht an mich selbst. Wer ähnliche Interessen hat und gerne liest, wie jemand anderes das alles zusammenbaut, wird hier vielleicht etwas finden.</p>
</div>


<!-- ══════════════════════════════════════════
     BLOG IN ZAHLEN
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--lila)">Blog in Zahlen</h2>
</div>

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
{% assign erster_post = site.posts | last %}
{% assign letzter_post = site.posts | first %}

<div class="stats-raster" style="grid-template-columns: repeat(4, 1fr)">
  <div class="stats-kachel">
    <div class="stats-kachel-label">Beiträge gesamt</div>
    <div class="stats-kachel-wert" style="color:var(--tuerkis)">{{ site.posts.size }}</div>
  </div>
  <div class="stats-kachel">
    <div class="stats-kachel-label">Wörter gesamt</div>
    <div class="stats-kachel-wert" style="color:var(--gruen)">{{ woerter_gesamt }}</div>
  </div>
  <div class="stats-kachel">
    <div class="stats-kachel-label">Ø Wörter / Beitrag</div>
    <div class="stats-kachel-wert" style="color:var(--lila)">{{ woerter_schnitt }}</div>
  </div>
  <div class="stats-kachel">
    <div class="stats-kachel-label">Letzter/Erster<span class="nur-desktop"> Beitrag</span></div>
    <div class="stats-kachel-wert klein">{{ erster_post.date | date: "%Y-%m-%d" }}<span class="nur-desktop"> / </span><br class="nur-mobil">{{ letzter_post.date | date: "%Y-%m-%d" }}</div>
  </div>
</div>

<div class="ueber-raster" style="margin-top:2rem">
  <div class="artikel-rahmen">
    <table class="ueber-tabelle">
      <tr><td>Plattform</td><td>GitHub Pages</td></tr>
      <tr><td>Generator</td><td>Jekyll {{ jekyll.version }}</td></tr>
      <tr><td>Plugins</td><td>jekyll-feed, jekyll-sitemap, jekyll-seo-tag</td></tr>
      <tr><td>Schriftart</td><td>IBM Plex Sans &amp; IBM Plex Mono</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="ueber-tabelle">
      <tr>
        <td>Repo-Größe</td>
        <td><span id="repo-groesse">wird geladen…</span> <span id="repo-dateien"></span></td>
      </tr>
      <tr><td>Sprachen</td><td id="repo-sprachen">wird geladen…</td></tr>
      <tr><td>Commits</td><td id="repo-commits-info">wird geladen…</td></tr>
      <tr class="nur-desktop"><td>Quellcode</td><td><a href="https://github.com/svetixoxo/svetixoxo.github.io" target="_blank">github.com/svetixoxo/svetixoxo.github.io</a></td></tr>
      <tr class="nur-mobil"><td>Quellcode (GitHub)</td><td><a href="https://github.com/svetixoxo/svetixoxo.github.io" target="_blank">svetixoxo/svetixoxo.github.io</a></td></tr>
    </table>
  </div>
</div>

<script>
  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io')
    .then(r => r.json())
    .then(data => {
      document.getElementById('repo-groesse').textContent =
        data.size ? (data.size / 1024).toFixed(2) + ' MB' : 'nicht verfügbar (API-Limit erreicht)';
    }).catch(() => {
      document.getElementById('repo-groesse').textContent = 'nicht verfügbar (API-Limit erreicht)';
    });

  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/git/trees/main?recursive=1')
    .then(r => r.json())
    .then(data => {
      if (data.tree) {
        const n = data.tree.filter(i => i.type === 'blob').length;
        document.getElementById('repo-dateien').textContent = '(' + n + ' Dateien)';
      }
    }).catch(() => {});

  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/languages')
    .then(r => r.json())
    .then(data => {
      if (!data.message && Object.keys(data).length > 0) {
        const gesamt = Object.values(data).reduce((a, b) => a + b, 0);
        document.getElementById('repo-sprachen').textContent =
          Object.entries(data).map(([s, b]) => s + ' (' + ((b / gesamt) * 100).toFixed(1) + '%)').join(', ');
      } else {
        document.getElementById('repo-sprachen').textContent = 'nicht verfügbar (API-Limit erreicht)';
      }
    }).catch(() => {
      document.getElementById('repo-sprachen').textContent = 'nicht verfügbar (API-Limit erreicht)';
    });

  fetch('https://api.github.com/repos/svetixoxo/svetixoxo.github.io/commits?per_page=1')
    .then(r => {
      const link = r.headers.get('Link');
      const match = link && link.match(/page=(\d+)>; rel="last"/);
      const anzahl = match ? match[1] : '1';
      return r.json().then(data => {
        if (data[0] && data[0].commit) {
          const d = new Date(data[0].commit.author.date);
          const fmt = d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
          document.getElementById('repo-commits-info').textContent = anzahl + ' (letzter: ' + fmt + ')';
        } else {
          document.getElementById('repo-commits-info').textContent = 'nicht verfügbar (API-Limit erreicht)';
        }
      });
    }).catch(() => {
      document.getElementById('repo-commits-info').textContent = 'nicht verfügbar (API-Limit erreicht)';
    });
</script>


<!-- ══════════════════════════════════════════
     LIZENZ
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--gelb); color:var(--tinte)">Lizenz</h2>
</div>

<div class="artikel-rahmen">
    <table class="ueber-tabelle" style="margin-top:0.4em">
      <tr>
        <td>Inhalte</td>
        <td><a href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de" class="link-tuerkis" target="_blank">CC BY-NC-ND 4.0</a></td>
          <td>Teilen erlaubt / Quelle nennen / keine kommerzielle Nutzung / keine Bearbeitungen</td>
      </tr>
      <tr>
        <td>Quellcode</td>
        <td>alle Rechte vorbehalten</td>
      </tr>
        <tr>
            <td>Copyright &amp; Nennung</td>
            <td colspan="2">Svetlana / <a href="https://svetixoxo.github.io" class="link-tuerkis" target="_blank">svetixoxo.github.io</a></td>
        </tr>
    </table>
</div>