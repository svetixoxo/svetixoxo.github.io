/* ─────────────────────────────────────────────
   svetixoxo.github.io — tooltips.js
   /assets/tooltips.js
───────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {

    var rahmen = document.querySelectorAll('.artikel-rahmen');
    if (rahmen.length > 0) {
        fetch('/assets/begriffe.json')
            .then(function (r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.text();
            })
            .then(function (text) {
                var begriffe = JSON.parse(text);

                function escapeFuerRegex(str) {
                    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                }

                rahmen.forEach(function (rahmen) {
                    var bereitsMarkiert = new Set();

                    function verarbeiteKnoten(knoten) {
                        if (knoten.nodeType === 3) {
                            var eltern = knoten.parentNode;
                            if (!eltern || eltern.classList.contains('erklaerung')) return;

                            var text = knoten.textContent;
                            var geaendert = false;
                            var neuerHTML = text;

                            for (var begriff in begriffe) {
                                if (bereitsMarkiert.has(begriff)) continue;
                                var regex = new RegExp(escapeFuerRegex(begriff));
                                if (regex.test(neuerHTML)) {
                                    neuerHTML = neuerHTML.replace(
                                        new RegExp(escapeFuerRegex(begriff)),
                                        '<span class="erklaerung" data-tip="' + begriffe[begriff] + '">' + begriff + '</span>'
                                    );
                                    bereitsMarkiert.add(begriff);
                                    geaendert = true;
                                }
                            }

                            if (geaendert) {
                                var temp = document.createElement('span');
                                temp.innerHTML = neuerHTML;
                                while (temp.firstChild) {
                                    eltern.insertBefore(temp.firstChild, knoten);
                                }
                                eltern.removeChild(knoten);
                            }
                        } else if (knoten.nodeType === 1 && knoten.tagName !== 'CODE' && knoten.tagName !== 'PRE') {
                            Array.from(knoten.childNodes).forEach(verarbeiteKnoten);
                        }
                    }

                    Array.from(rahmen.childNodes).forEach(verarbeiteKnoten);
                });
            });
    }

});
