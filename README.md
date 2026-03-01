# svetis Blog

Persönlicher Blog über Self-Hosting, Netzwerk & Infrastruktur, Smart Home & Automatisierung sowie Proberaum & Musikmachen. Gebaut mit HTML und CSS, gehostet mit Jekyll und GitHub Pages. Erreichbar unter: **[svetixoxo.github.io](https://svetixoxo.github.io)**

## Farben

| Farbe   | HEX     | Bereich                      |
|---------|---------|------------------------------|
| Türkis  | #00b8d9 | Primärfarbe                  |
| Gelb    | #fecc02 | Sekundärfarbe                |
| Magenta | #ff2b6b | Self-Hosting & Dienste       |
| Orange  | #ff8700 | Netzwerk & Infrastruktur     |
| Grün    | #00a878 | Smart Home & Automatisierung |
| Lila    | #d36ff9 | Proberaum & Musikmachen      |

## Technik

- **Generator:** Jekyll
- **Hosting:** GitHub Pages
- **Schriftarten:** IBM Plex Sans & IBM Plex Mono
- **Plugins:** jekyll-feed, jekyll-sitemap, jekyll-seo-tag

Das Design – HTML, CSS und Layout – ist vollständig von Hand geschrieben. JavaScript stammt von Anthropic Claude. Die Grafiken wurden mit OpenAI ChatGPT generiert und in Photoshop nachbearbeitet.

## Struktur

```
├── _layouts/          # Layout-Templates (default, post, thema, archiv …)
├── _posts/            # Blogbeiträge als Markdown
├── assets/
│   └── cursors/       # Cursor
│   ├── fonts/         # Schriftarten
│   ├── img/           # Bilder
│   ├── skript.js      # JavaScript
│   ├── style.css      # CSS
├── pages/             # Statische Seiten
├── thema/             # Themen-Seiten
├── tags/              # Tag-Seiten
└── _config.yml        # Jekyll-Konfiguration
└── index.html         # Startseite
```

## Beiträge

Beiträge liegen als Markdown-Dateien in `_posts/` mit folgendem Format:

```
YYYY-MM-DD-titel-des-beitrags.md
```

Front Matter:

```yaml
---
layout: post
title: "Titel des Beitrags"
date: YYYY-MM-DD
category: "Kategorie des Beitrags"
bild: /assets/img/posts/yymmdd-bildname.png
tags: [tag1, tag2, …]
excerpt: "Kurze Beschreibung für Vorschau"
---
```

## Lokal ausführen

```bash
bundle exec jekyll serve
bundle exec jekyll serve --livereload
```

Erreichbar unter: `http://localhost:4000`

## Lizenz

| | Lizenz |
|---|---|
| Inhalte (Texte, Bild)     | [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de) |
| Quellcode (HTML, CSS, JS) | [MIT](https://opensource.org/licenses/MIT) |

Copyright © Svetlana / [svetixoxo.github.io](https://svetixoxo.github.io)