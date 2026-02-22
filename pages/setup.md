---
layout: default
title: "Setup"
permalink: /setup/
---

<style>
  .setup-raster {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2em;
    margin-bottom: 2em;
  }
  .setup-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.82rem;
  }
  .setup-tabelle td {
    padding: 0.5em 0.8em;
    border-bottom: 1px solid var(--linie);
    vertical-align: top;
  }
  .setup-tabelle tr:last-child td {
    border-bottom: none;
  }
  .setup-tabelle td:first-child {
    color: var(--gedimmt);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.72rem;
    width: 35%;
    white-space: nowrap;
  }
  .setup-badge {
    display: inline-block;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    padding: 0.1em 0.5em;
    border: 1.5px solid var(--tinte);
    margin-right: 0.3em;
    margin-bottom: 0.2em;
  }
  .vlan-tabelle {
    width: 100%;
    border-collapse: collapse;
    font-family: "IBM Plex Mono", monospace;
    font-size: 0.78rem;
  }
  .vlan-tabelle th {
    background: var(--tinte);
    color: var(--weiss);
    padding: 0.4em 0.8em;
    text-align: left;
    font-size: 0.68rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }
  .vlan-tabelle td {
    padding: 0.4em 0.8em;
    border-bottom: 1px solid var(--linie);
  }
  .vlan-tabelle tr:last-child td {
    border-bottom: none;
  }
  .vlan-tabelle tr:hover td {
    background: var(--hintergrund);
  }
  .vlan-kategorie-kopf td {
    background: var(--hintergrund);
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--gedimmt);
    padding-top: 0.8em;
  }
  @media (max-width: 700px) {
    .setup-raster { grid-template-columns: 1fr; }
  }
</style>

<div class="artikel-rahmen">
  <p class="artikel-meta">Übersicht</p>
  <h1>Setup</h1>
  <p class="artikel-einleitung">Was bei mir läuft – Hardware, Software und Netzwerk. Stand: {{ site.time | date: "%B %Y" }}.</p>
</div>


<!-- ══════════════════════════════════════════
     NETZWERK
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--tuerkis)"/></svg>
  <h2>Netzwerk</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Router (Haupt)</td><td>AVM Fritz!Box 6690 Cable</td></tr>
      <tr><td>Router (Mesh)</td><td>5× AVM Fritz!Box 7590 AX</td></tr>
      <tr><td>Repeater</td><td>4× FRITZ!Repeater 6000<br>2× FRITZ!Repeater 3000</td></tr>
      <tr><td>Switches</td><td>2× Netgear 24-Port (managed)</td></tr>
      <tr><td>Firewall</td><td>WatchGuard Firebox</td></tr>
      <tr><td>VLANs</td><td>26 konfiguriert</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>VPN</td><td>VLAN 70 · 10.70.0.0/24</td></tr>
      <tr><td>Gäste-WLAN</td><td>VLAN 72 · 10.72.0.0/24</td></tr>
      <tr><td>IP-Schema</td><td>10.[VLAN-ID].0.0/24</td></tr>
      <tr><td>Nutzbare IPs</td><td>6.604 Adressen gesamt</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     VLAN-STRUKTUR
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--tuerkis)"/></svg>
  <h2>VLAN-Struktur</h2>
</div>

<div class="artikel-rahmen">
  <table class="vlan-tabelle">
    <thead>
      <tr>
        <th>VLAN</th>
        <th>Subnetz</th>
        <th>Beschreibung</th>
      </tr>
    </thead>
    <tbody>
      <tr class="vlan-kategorie-kopf"><td colspan="3">Management & Infrastruktur</td></tr>
      <tr><td>10</td><td>10.10.0.0/24</td><td>Netzwerk-Management</td></tr>
      <tr><td>11</td><td>10.11.0.0/24</td><td>WLAN-Infrastruktur</td></tr>
      <tr><td>19</td><td>10.19.0.0/24</td><td>Onboarding</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Smart Home</td></tr>
      <tr><td>20</td><td>10.20.0.0/24</td><td>Klimatisierung</td></tr>
      <tr><td>21</td><td>10.21.0.0/24</td><td>Heizung</td></tr>
      <tr><td>22</td><td>10.22.0.0/24</td><td>Beleuchtung innen</td></tr>
      <tr><td>23</td><td>10.23.0.0/24</td><td>Beleuchtung außen</td></tr>
      <tr><td>24</td><td>10.24.0.0/24</td><td>Jalousien / Beschattung</td></tr>
      <tr><td>25</td><td>10.25.0.0/24</td><td>Steckdosen</td></tr>
      <tr><td>26</td><td>10.26.0.0/24</td><td>Audio / Entertainment</td></tr>
      <tr><td>27</td><td>10.27.0.0/24</td><td>Sensoren</td></tr>
      <tr><td>28</td><td>10.28.0.0/24</td><td>Smart-Home-Control</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Client-Geräte</td></tr>
      <tr><td>40</td><td>10.40.0.0/24</td><td>Feste Geräte</td></tr>
      <tr><td>41</td><td>10.41.0.0/24</td><td>Mobile Geräte</td></tr>
      <tr><td>42</td><td>10.42.0.0/24</td><td>Sonstiges</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Sicherheit & Überwachung</td></tr>
      <tr><td>50</td><td>10.50.0.0/24</td><td>Kameras außen</td></tr>
      <tr><td>51</td><td>10.51.0.0/24</td><td>Kameras innen</td></tr>
      <tr><td>52</td><td>10.52.0.0/24</td><td>Aufnahme</td></tr>
      <tr><td>53</td><td>10.53.0.0/24</td><td>Alarmanlage</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Services</td></tr>
      <tr><td>60</td><td>10.60.0.0/24</td><td>Haupt-NAS</td></tr>
      <tr><td>61</td><td>10.61.0.0/24</td><td>DMZ</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Fernzugriff & Gäste</td></tr>
      <tr><td>70</td><td>10.70.0.0/24</td><td>VPN</td></tr>
      <tr><td>71</td><td>10.71.0.0/24</td><td>Remote-Management</td></tr>
      <tr><td>72</td><td>10.72.0.0/24</td><td>Gäste-WLAN</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Sonstiges / Reserve</td></tr>
      <tr><td>80</td><td>10.80.0.0/24</td><td>Reserve 1</td></tr>
      <tr><td>90</td><td>10.90.0.0/24</td><td>Reserve 2</td></tr>
    </tbody>
  </table>
</div>


<!-- ══════════════════════════════════════════
     SERVER & SPEICHER
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--orange)"/></svg>
  <h2>Server & Speicher</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Heimserver</td><td>QNAP TS-873AeU-RP</td></tr>
      <tr><td>RAM</td><td>64 GB</td></tr>
      <tr><td>Festplatten</td><td>8× 12 TB (Seagate Exos X14)</td></tr>
      <tr><td>SSD-Cache</td><td>2× Samsung 980 Pro 2 TB</td></tr>
      <tr><td>VLAN</td><td>60 · 10.60.0.10</td></tr>
      <tr><td>Dienste</td><td>Nextcloud, Homebridge, Docker</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Überwachungs-NAS</td><td>QNAP TS-1273AU-RP</td></tr>
      <tr><td>RAM</td><td>64 GB</td></tr>
      <tr><td>Festplatten</td><td>12× 24 TB (Seagate Exos X24)</td></tr>
      <tr><td>SSD-Cache</td><td>2× Samsung 990 Pro 4 TB</td></tr>
      <tr><td>GPU</td><td>NVIDIA Quadro P1000</td></tr>
      <tr><td>VLAN</td><td>52 · 10.52.0.20</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Backup-NAS</td><td>WD EX2 Ultra</td></tr>
      <tr><td>VLAN</td><td>60 · 10.60.0.20</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>NVR #1</td><td>16-Kanal · 10.52.0.10</td></tr>
      <tr><td>NVR #2</td><td>16-Kanal · 10.52.0.11</td></tr>
      <tr><td>Kameras gesamt</td><td>26</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     CLIENT-GERÄTE
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--lila)"/></svg>
  <h2>Client-Geräte</h2>
</div>

<div class="artikel-rahmen">
  <table class="setup-tabelle">
    <tr><td>Desktop</td><td>Mac Studio · VLAN 40 · 10.40.0.10 (Ethernet) / 10.40.0.40 (WLAN)</td></tr>
    <tr><td>Laptop</td><td>MacBook · VLAN 41 · 10.41.0.10</td></tr>
    <tr><td>Linux</td><td>Lenovo ThinkPad · Arch Linux · Hyprland · VLAN 41 · 10.41.0.11</td></tr>
    <tr><td>Gaming</td><td>Gaming-Server · VLAN 40 · 10.40.0.11</td></tr>
    <tr><td>Mobil</td><td>iPhone · VLAN 41 · 10.41.0.20</td></tr>
    <tr><td>Tablet</td><td>iPad · VLAN 41 · 10.41.0.30</td></tr>
    <tr><td>Steuerung</td><td>3× iPad (EG, OG, Souterrain) · VLAN 28</td></tr>
    <tr><td>Sonstiges</td><td>iMac · VLAN 52 · 10.52.0.30</td></tr>
    <tr><td>Raspberry Pi</td><td>Pi Zero · Pi Zero 2 · Pi 5 · VLAN 42</td></tr>
  </table>
</div>


<!-- ══════════════════════════════════════════
     SMART HOME
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--gruen)"/></svg>
  <h2>Smart Home</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Plattform</td><td>Apple HomeKit via Homebridge</td></tr>
      <tr><td>Protokolle</td><td>WLAN, Zigbee, Matter/Thread</td></tr>
      <tr><td>Klimaanlage</td><td>8× Mitsubishi Electric Multi-Split</td></tr>
      <tr><td>Lüftung</td><td>Viessmann Vitovent 300-W</td></tr>
      <tr><td>Heizung</td><td>Fußbodenheizung 9 Räume</td></tr>
      <tr><td>Jalousien</td><td>44× elektrisch</td></tr>
      <tr><td>Steckdosen</td><td>83× smart</td></tr>
      <tr><td>Lichtschalter</td><td>25× smart (Dimmer)</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Audio</td><td>Einbaulautsprecher KEF, 9 Räume<br>3× Yamaha Multiroom-Verstärker</td></tr>
      <tr><td>Alarmanlage</td><td>16× Bewegungsmelder<br>50× Tür-/Fensterkontakt<br>15× Rauchmelder<br>4× Gasmelder</td></tr>
      <tr><td>Wetterstation</td><td>VLAN 27 · 10.27.0.10</td></tr>
      <tr><td>Kameras außen</td><td>12× bispektral Tube<br>4× bispektral Dome</td></tr>
      <tr><td>Kameras innen</td><td>4× bispektral Dome<br>6× Fisheye 360°</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     SOFTWARE
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <svg class="abschnitt-akzent" viewBox="0 0 14 14"><rect width="14" height="14" fill="var(--magenta)"/></svg>
  <h2>Software & Dienste</h2>
</div>

<div class="artikel-rahmen">
  <table class="setup-tabelle">
    <tr><td>OS (Desktop)</td><td>macOS</td></tr>
    <tr><td>OS (Laptop)</td><td>Arch Linux · Hyprland</td></tr>
    <tr><td>Cloud</td><td>Nextcloud (self-hosted, Docker)</td></tr>
    <tr><td>Smart Home</td><td>Homebridge · Apple HomeKit</td></tr>
    <tr><td>Container</td><td>Docker</td></tr>
    <tr><td>Blog</td><td>Jekyll · GitHub Pages</td></tr>
  </table>
</div>