/* ═══════════════════════════════════════════════════════════
   svetixoxo.github.io — dunkler-modus.js
   /assets/dunkler-modus.js
═══════════════════════════════════════════════════════════ */

(function () {
    'use strict';

    /* ══════════════════════════════════════════
       MAPPING
       [property, hell-Wert, dunkel-Variable]
    ══════════════════════════════════════════ */

    var MAPPING = [
        /* ── Basis ── */
        ['--hintergrund',       '#f8f6f0',  '--hintergrund-dunkel'],
        ['--hintergrund-karte', '#ffffff',  '--hintergrund-karte-dunkel'],
        ['--tinte',             '#080810',  '--tinte-dunkel'],
        ['--text',              '#1a1a2a',  '--text-dunkel'],
        ['--gedimmt',           '#666680',  '--gedimmt-dunkel'],
        ['--linie',             '#d8d4cc',  '--linie-dunkel'],
        ['--weiss',             '#ffffff',  '--weiss-dunkel'],

        /* ── Akzentfarben ── */
        ['--tuerkis',  '#00b8d9',  '--tuerkis-dunkel'],
        ['--orange',   '#ff8700',  '--orange-dunkel'],
        ['--gelb',     '#fecc02',  '--gelb-dunkel'],
        ['--lila',     '#d36ff9',  '--lila-dunkel'],
        ['--magenta',  '#ff2b6b',  '--magenta-dunkel'],
        ['--gruen',    '#00a878',  '--gruen-dunkel'],
        ['--rot',      '#e53e3e',  '--rot-dunkel'],
    ];

    /* ══════════════════════════════════════════
       SWAP-FUNKTION
    ══════════════════════════════════════════ */

    function getCSSVar(name) {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(name).trim();
    }

    function swapProperties(dunkel) {
        var style = document.documentElement.style;
        MAPPING.forEach(function (eintrag) {
            var property  = eintrag[0];
            var hellWert  = eintrag[1];
            var dunkelVar = eintrag[2];

            if (dunkel) {
                var neuerWert = getCSSVar(dunkelVar);
                if (neuerWert) style.setProperty(property, neuerWert);
            } else {
                style.setProperty(property, hellWert);
            }
        });
    }

    /* ══════════════════════════════════════════
       URL-PARAMETER
    ══════════════════════════════════════════ */

    function getThemeFromURL() {
        return new URLSearchParams(window.location.search).get('theme');
    }

    function setThemeInURL(theme) {
        var url = new URL(window.location);
        if (theme === 'dunkel') {
            url.searchParams.set('theme', 'dunkel');
        } else {
            url.searchParams.delete('theme');
        }
        window.history.replaceState({}, '', url);
    }

    /* ══════════════════════════════════════════
       THEME ANWENDEN
    ══════════════════════════════════════════ */

    function applyTheme(theme) {
        var dunkel = (theme === 'dunkel');

        /* data-theme für body-Hintergrund und Footer (CSS) */
        if (dunkel) {
            document.documentElement.setAttribute('data-theme', 'dunkel');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        swapProperties(dunkel);
    }

    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 'hell';
    }

    /* ══════════════════════════════════════════
       LINK-ANPASSUNG (Theme-Parameter in URLs)
    ══════════════════════════════════════════ */

    function updateAllLinks() {
        var dunkel = (getCurrentTheme() === 'dunkel');
        document.querySelectorAll('a[href]').forEach(function (link) {
            var href = link.getAttribute('href');
            if (!href ||
                href.startsWith('http://') ||
                href.startsWith('https://') ||
                href.startsWith('mailto:') ||
                href.startsWith('tel:') ||
                href.startsWith('#')) return;

            try {
                var url = new URL(href, window.location.origin);
                if (url.origin !== window.location.origin) return;
                if (dunkel) {
                    url.searchParams.set('theme', 'dunkel');
                } else {
                    url.searchParams.delete('theme');
                }
                link.setAttribute('href', url.pathname + url.search + url.hash);
            } catch (e) {
                console.debug('Konnte Link nicht parsen:', href, e);
            }
        });
    }

    /* ══════════════════════════════════════════
       INIT
    ══════════════════════════════════════════ */

    function init() {
        /* Theme aus URL laden */
        if (getThemeFromURL() === 'dunkel') {
            applyTheme('dunkel');
        }
        updateAllLinks();

        /* Toggle-Button */
        var btn = document.getElementById('theme-toggle');
        if (!btn) {
            console.warn('Dunkler Modus: Button #theme-toggle nicht gefunden');
        } else {
            btn.addEventListener('click', function () {
                var neuesTheme = (getCurrentTheme() === 'dunkel') ? 'hell' : 'dunkel';
                applyTheme(neuesTheme);
                setThemeInURL(neuesTheme);
                updateAllLinks();
            });
        }

        /* Mutation Observer für dynamisch eingefügte Links */
        new MutationObserver(function (mutations) {
            var relevant = mutations.some(function (m) {
                return Array.from(m.addedNodes).some(function (n) {
                    return n.tagName === 'A' ||
                        (n.querySelectorAll && n.querySelectorAll('a').length > 0);
                });
            });
            if (relevant) updateAllLinks();
        }).observe(document.body, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();