# svetis Blog

[![Jekyll](https://github.com/svetixoxo/svetixoxo.github.io/actions/workflows/jekyll-gh-pages.yml/badge.svg)](https://github.com/svetixoxo/svetixoxo.github.io/actions/workflows/jekyll-gh-pages.yml)

Persönlicher Blog über Self-Hosting, Netzwerk & Infrastruktur, Smart Home & Automatisierung sowie Proberaum & Musikmachen. Gebaut mit HTML und CSS, gehostet mit Jekyll und GitHub Pages.

Erreichbar unter: **[svetixoxo.github.io](https://svetixoxo.github.io)**

## Farben

Jede Farbe hat drei Varianten: Vollton, Pastell (heller Shade) und Dunkel (für den dunklen Modus).

| Farbe   | Variable    | Hell `--x` | Pastell `--x-pastell` | Dunkel `--x-dunkel` | Bereich                      |
|---------|-------------|------------|-----------------------|---------------------|------------------------------|
| Türkis  | `--tuerkis` | `#00b8d9`  | `#e0f8ff`             | `#00799b`           | Primärfarbe                  |
| Gelb    | `--gelb`    | `#fecc02`  | `#fef4cc`             | `#ffc107`           | Sekundärfarbe                |
| Magenta | `--magenta` | `#ff2b6b`  | `#ffe0ec`             | `#d00062`           | Self-Hosting & Dienste       |
| Orange  | `--orange`  | `#ff8700`  | `#fff1eb`             | `#f97e00`           | Netzwerk & Infrastruktur     |
| Grün    | `--gruen`   | `#00a878`  | `#e0fff6`             | `#00a651`           | Smart Home & Automatisierung |
| Lila    | `--lila`    | `#d36ff9`  | `#f0ebff`             | `#9b51e0`           | Proberaum & Musikmachen      |

## Struktur

```
├── _layouts/          # Layout-Templates
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