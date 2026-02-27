/* ─────────────────────────────────────────────
   svetixoxo.github.io — script.js
   /assets/skript.js
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

    /* ══════════════════════════════════════════
       H2 → ARTIKEL-RAHMEN (post.html)
    ══════════════════════════════════════════ */

    var postInhalt = document.querySelector('.artikel-inhalt:not(.seite):not(.themen)');
    if (postInhalt && document.querySelector('.artikel-meta')) {
        var kinder = Array.from(postInhalt.childNodes);
        var aktuellerRahmen = null;
        var zaehler = 0;

        kinder.forEach(function (kind) {
            if (kind.nodeType === 1 && kind.tagName === 'H2') {
                zaehler++;
                aktuellerRahmen = document.createElement('div');
                aktuellerRahmen.className = 'artikel-rahmen rahmen-mit-sticker';
                aktuellerRahmen.style.position = 'relative';

                var ankerId = 'abschnitt-' + zaehler;
                aktuellerRahmen.id = ankerId;

                // Sticker erstellen
                var sticker = document.createElement('div');
                var navFarben = {
                    'nav-self-hosting': 'sticker-magenta',
                    'nav-netzwerk': 'sticker-orange',
                    'nav-smart-home': 'sticker-gruen',
                    'nav-musikmachen': 'sticker-lila',
                    'nav-archiv': 'sticker-tuerkis'
                };
                var farbe = 'sticker-tuerkis';
                var aktivLink = document.querySelector('nav a.aktiv');
                if (aktivLink) {
                    for (var klasse in navFarben) {
                        if (aktivLink.classList.contains(klasse)) {
                            farbe = navFarben[klasse];
                            break;
                        }
                    }
                }
                sticker.className = 'rahmen-sticker ' + farbe;
                sticker.textContent = kind.textContent;
                aktuellerRahmen.appendChild(sticker);

                // Nummer erstellen
                var nummer = document.createElement('span');
                nummer.className = 'artikel-rahmen-nummer';
                nummer.textContent = zaehler;
                nummer.dataset.zahl = zaehler;
                nummer.title = 'Link kopieren';
                nummer.style.cursor = 'pointer';
                nummer.addEventListener('click', function () {
                    var aktuelleZahl = parseInt(nummer.dataset.zahl);
                    var url = window.location.origin + window.location.pathname + '#' + ankerId;
                    navigator.clipboard.writeText(url).then(function () {
                        nummer.textContent = '¶';
                        setTimeout(function () {
                            nummer.textContent = aktuelleZahl;
                        }, 1500);
                    });
                });

                aktuellerRahmen.appendChild(nummer);
                postInhalt.insertBefore(aktuellerRahmen, kind);

                kind.remove();
                return;
            }

            if (aktuellerRahmen) {
                aktuellerRahmen.appendChild(kind);
            }
        });
    }

    /* ══════════════════════════════════════════
       H2 → ARTIKEL-RAHMEN OHNE NUMMER (seite.html)
    ══════════════════════════════════════════ */

    var seiteInhalt = document.querySelector('.js-seite');
    if (seiteInhalt) {
        var tagListe = document.getElementById('tag-liste');
        var kopf = document.querySelector('.artikel-kopf');
        if (tagListe && kopf) {
            kopf.appendChild(tagListe);
        }

        var kinder = Array.from(seiteInhalt.childNodes);
        var aktuellerRahmen = null;
        var zaehler = 0;

        kinder.forEach(function (kind) {
            if (kind.nodeType === 1 && kind.tagName === 'H2') {
                zaehler++;
                aktuellerRahmen = document.createElement('div');
                aktuellerRahmen.className = 'artikel-rahmen';
                aktuellerRahmen.style.position = 'relative';

                var nummer = document.createElement('span');
                nummer.className = 'artikel-rahmen-nummer';
                nummer.textContent = zaehler;
                aktuellerRahmen.appendChild(nummer);

                seiteInhalt.insertBefore(aktuellerRahmen, kind);
            }
            if (aktuellerRahmen) {
                aktuellerRahmen.appendChild(kind);
            }
        });
    }

    /* ══════════════════════════════════════════
       H2 → FARBIGE KATEGORIE-LINKS (themen.html)
    ══════════════════════════════════════════ */

    var themenInhalt = document.querySelector('.js-themen');
    if (themenInhalt) {
        var kinder = Array.from(themenInhalt.childNodes);
        var aktuellerRahmen = null;

        var farben = {
            'Self-Hosting': {
                farbe: 'var(--magenta)',
                link: '/thema/self-hosting-und-dienste/'
            },
            'Netzwerk': {
                farbe: 'var(--orange)',
                link: '/thema/netzwerk-und-infrastruktur/'
            },
            'Smart Home': {
                farbe: 'var(--gruen)',
                link: '/thema/smart-home-und-automatisierung/'
            },
            'Proberaum': {
                farbe: 'var(--lila)',
                link: '/thema/proberaum-und-musikmachen/'
            },
            'Musik': {
                farbe: 'var(--lila)',
                link: '/thema/proberaum-und-musikmachen/'
            }
        };

        kinder.forEach(function (kind) {
            if (kind.nodeType === 1 && kind.tagName === 'H2') {
                aktuellerRahmen = document.createElement('div');
                aktuellerRahmen.className = 'artikel-rahmen';
                themenInhalt.insertBefore(aktuellerRahmen, kind);

                var text = kind.textContent.trim();
                var treffer = null;
                for (var schluessel in farben) {
                    if (text.includes(schluessel)) {
                        treffer = farben[schluessel];
                        break;
                    }
                }

                if (treffer) {
                    kind.style.borderLeft = '4px solid ' + treffer.farbe;
                    kind.style.paddingLeft = '0.6em';
                    kind.style.cursor = 'pointer';

                    var link = document.createElement('a');
                    link.href = treffer.link;
                    link.style.color = 'inherit';
                    link.style.textDecoration = 'none';
                    link.textContent = kind.textContent;
                    kind.textContent = '';
                    kind.appendChild(link);

                    link.addEventListener('mouseover', function () {
                        link.style.color = treffer.farbe;
                    });
                    link.addEventListener('mouseout', function () {
                        link.style.color = 'inherit';
                    });
                }
            }
            if (aktuellerRahmen) {
                aktuellerRahmen.appendChild(kind);
            }
        });
    }

});
