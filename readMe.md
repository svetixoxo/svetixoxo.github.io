# svetis Blog

[![Jekyll](https://github.com/svetixoxo/svetixoxo.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/svetixoxo/svetixoxo.github.io/actions/workflows/jekyll-gh-pages.yml)

Persönlicher Blog über Self-Hosting, Netzwerk & Infrastruktur, Smart Home & Automatisierung sowie Proberaum & Musikmachen. Gebaut mit HTML und CSS, gehostet mit Jekyll und GitHub Pages.

Erreichbar unter: **[svetixoxo.github.io](https://svetixoxo.github.io)**

## Farben

| Farbe   | HEX       | Bereich                      |
|---------|-----------|------------------------------|
| Türkis  | `#00b8d9` | Primärfarbe                  |
| Gelb    | `#fecc02` | Sekundärfarbe                |
| Magenta | `#ff2b6b` | Self-Hosting & Dienste       |
| Orange  | `#ff8700` | Netzwerk & Infrastruktur     |
| Grün    | `#00a878` | Smart Home & Automatisierung |
| Lila    | `#d36ff9` | Proberaum & Musikmachen      |

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
tags: [tag1, tag2]
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
|                           | Lizenz                  | Text                                    | Link                                                                |
|---------------------------|-------------------------|-----------------------------------------|---------------------------------------------------------------------|
| Quellcode (HTML, CSS, JS) | alle Rechte vorbehalten | [Lizenz](LICENSE.md)                    |    |
| Inhalte (Texte, Bild)     | CC BY-NC-ND 4.0         | [Lizenz](LICENSE.md)                    | [Quelle](https://creativecommons.org/licenses/by-nc-nd/4.0/deed.de) |
| Schriftart (Plex)         | OFL 1.1                 | [Lizenz](assets/fonts/ibm-plex/LICENSE) | [Quelle](https://opensource.org/licenses/MIT)                       |

Svetlana / [svetixoxo.github.io](https://svetixoxo.github.io)
