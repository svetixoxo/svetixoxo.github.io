---
layout: default
title: "Über mich"
permalink: /ueber-mich/
---

<style>
    .abschnitt-kopf {
        border-top: none;
        padding-top: 0;
    }

    .abschnitt-kopf h2 {
        color: var(--tinte);
        background: var(--gelb);
        border: var(--rahmen);
        box-shadow: var(--schatten-gross);
        padding: 1rem;
    }

    .ueber-mich-raster {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    .ueber-mich-inhalt p {
        margin-bottom: 1em;
    }

    .ueber-mich-inhalt p:last-child {
        margin-bottom: 0;
    }
    
.ueber-mich-mit-bild-rechts,
.ueber-mich-mit-bild-links {
    display: grid;
    gap: 0;
    padding: 0 !important;
    overflow: hidden;
}

.ueber-mich-mit-bild-rechts {
    grid-template-columns: 3fr 1fr;
}

.ueber-mich-mit-bild-links {
    grid-template-columns: 1fr 3fr;
}

.ueber-mich-mit-bild-rechts .ueber-mich-text,
.ueber-mich-mit-bild-links .ueber-mich-text {
    padding: 1.3em 1.6em;
}

.ueber-mich-mit-bild-rechts .ueber-mich-bild,
.ueber-mich-mit-bild-links .ueber-mich-bild {
    background: var(--gelb);
}

.ueber-mich-mit-bild-rechts .ueber-mich-bild {
    border-left: var(--rahmen);
}

.ueber-mich-mit-bild-links .ueber-mich-bild {
    border-right: var(--rahmen);
}

.ueber-mich-mit-bild-rechts .ueber-mich-bild img,
.ueber-mich-mit-bild-links .ueber-mich-bild img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    padding: 1.3rem;
}

    @media (max-width: 992px) {
    .ueber-mich-mit-bild-rechts,
    .ueber-mich-mit-bild-links {
        grid-template-columns: 1fr;
    }

    .ueber-mich-mit-bild-rechts .ueber-mich-bild,
    .ueber-mich-mit-bild-links .ueber-mich-bild {
        height: 200px;
        border-left: none;
        border-right: none;
        border-top: var(--rahmen);
        order: -1;
    }
    }
</style>

<div class="artikel-rahmen" style="background: var(--gelb)">
    <h1>Über mich</h1>
    <p class="artikel-einleitung">Irgendwo zwischen neugierig und überfordert — aber meistens neugieriger als überfordert.</p>
</div>

<div class="artikel-rahmen ueber-mich-inhalt">
<p>Ich bin neugierig — das ist wahrscheinlich die ehrlichste Beschreibung. Wenn jemand für ein Thema brennt und davon erzählt, ist mein Interesse meist geweckt, bevor ich überhaupt weiß worum es geht. So ist vieles entstanden was auf diesem Blog landet. Manch einer würde sagen: „Begeisterungsfähig, aber manchmal wäre RTFM schneller gewesen.“ Vermutlich zurecht.</p>
</div>

<div class="abschnitt-kopf">
    <h2>Wie alles angefangen hat</h2>
</div>

<div class="artikel-rahmen ueber-mich-inhalt ueber-mich-mit-bild-links">
   <div class="ueber-mich-bild">
        <img src="/assets/img/svetixoxo-laptop.png">
    </div>
    <div class="ueber-mich-text">
    <p>Mit ein paar Fritz-Thermostaten in meiner alten Wohnung ging es los. Ein bisschen Spielerei, ein bisschen Komfort — mehr war das anfangs nicht. Dann kam ein Haus und damit auch der Wunsch, dass bestimmte Dinge <a href="/thema/smart-home-und-automatisierung/" class="link-gruen">automatisch</a> laufen sollen. Also wurde <a href="/mein-smart-home-und-die-infrastruktur-dahinter/">geplant, beraten, umgesetzt</a> — und aus einem kleinen Gedanken wurde ein ausgewachsenes Gesamtsystem. <br class="nur-mobil">→ <a href="/setup/">Meine IT-Infrastruktur</a></p>
    <p><a href="/thema/self-hosting-und-dienste/" class="link-magenta">Self-Hosting</a> kam fast zwangsläufig dazu: Ich wollte nicht, dass meine Kameras über eine Cloud laufen. <a href="/smart-home-und-datenschutz-was-nach-aussen-geht-und-was-nicht/">Also läuft alles lokal.</a> Das weitergehende Interesse an dieser Philosophie hat ein Bekannter ausgelöst: Nennen wir ihn Hackerman – einer der führenden Giga-Nerds unserer Zeit, aber einer von der Sorte, die trotzdem cool sind. Durch ihn wurde Arch Linux auch naturgemäß die Distribution meiner Wahl als Linux-Einsteigerin.</p>
</div>
</div>
<div class="artikel-rahmen ueber-mich-inhalt ueber-mich-mit-bild-rechts">
    <div class="ueber-mich-text">
    <p>Arch Linux bedeutet von Anfang an, alles selbst einzurichten… und weil sich da vieles über CSS anpassen lässt, wurde daraus schnell mehr als nur ein gelegentliches Interesse. HTML und CSS hatten mich schon vorher beschäftigt, aber hier wurde daraus etwas Ernsthafteres. Dieser Blog ist auch ein Ergebnis davon: Nicht nur inhaltlich, sondern auch gestalterisch.</p>
    <p>Dass ich Dinge gerne nach eigenen Vorstellungen gestalte, reicht jedoch noch weiter zurück: Seit 2003 mache ich <a href="/thema/proberaum-und-musikmachen/" class="link-lila">Musik</a> im Duo — auch dort geht es darum, einen eigenen Stil zu finden und den Klang so hinzubekommen, wie man ihn im Kopf hat. Daraus hat sich dann eine Band entwickelt, die seit rund 15 Jahren zusammen Musik macht. Unser Duo läuft parallel weiter. <br class="nur-mobil">→ <a href="/proberaum-duo/">Proberaum Duo</a> <span class="nur-desktop">/</span> <br class="nur-mobil"><span class="nur-mobil">→ </span><a href="/proberaum-band/">Proberaum Band</a></p>
    </div>
   <div class="ueber-mich-bild">
        <img src="/assets/img/svetixoxo-musik.png">
    </div>
</div>

<div class="abschnitt-kopf">
    <h2>Lokal, neugierig, unfertig</h2>
</div>

<div class="ueber-mich-raster">
    <div class="artikel-rahmen ueber-mich-inhalt">
        <p>Lokal statt Cloud, wo es geht. Nicht aus Prinzip, sondern weil ich Kontrolle darüber haben möchte, wo meine Daten sind und wer darauf Zugriff hat. Ein System, das nicht von externen Diensten abhängt, fällt nicht aus wenn ein Hersteller seinen Server abschaltet, seine AGBs ändert oder einfach aufhört zu existieren. Das ist mir mehr wert als Bequemlichkeit.</p>
    </div>
    <div class="artikel-rahmen ueber-mich-inhalt">
        <p>Ich bin kein Profi in dem was ich hier beschreibe. Vieles wurde von oder habe ich zusammen mit Leuten umgesetzt, die mehr davon verstehen als ich. Das steht hier auch so. Was noch fehlt und irgendwann kommen wird, steht meistens schon am Ende der jeweiligen Artikel. Mir geht es um die Dokumentation von Entscheidungen und Erfahrungen.</p>
    </div>
</div>