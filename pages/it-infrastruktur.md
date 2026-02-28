---
layout: default
title: "Meine IT-Infrastruktur"
permalink: /it-infrastruktur/
---

<style>
  .artikel-rahmen {
    margin-bottom: 0;
  }
    #einleitung {
        margin-bottom: 2rem;
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
  .setup-raster {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
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
    margin-right: 0.3rem;
    margin-bottom: 0.2rem;
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
    border-bottom: 1px solid var(--tinte);
  }
  .vlan-tabelle tr:last-child td {
    border-bottom: none;
  }
  .vlan-tabelle tr:not(.vlan-kategorie-kopf):hover td {
    background: var(--orange-hell);
    color: var(--tinte);
  }
  .vlan-kategorie-kopf td {
    background: var(--orange);
    font-weight: 700;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--weiss);
  }
  @media (max-width: 992px) {
  .artikel-rahmen {
    margin-bottom: 2rem;
  }
    .setup-raster {
        grid-template-columns: 1fr;
        gap: 0;
        margin-bottom: 0;
    }
    .setup-tabelle tr {
        display: flex;
        flex-direction: column;
        padding: 0.5em 0;
        border-bottom: 1px solid var(--linie);
    }
    .setup-tabelle tr:last-child {
        border-bottom: none;
    }
    .setup-tabelle td {
        border-bottom: none;
        padding: 0.1em 0.8em;
        width: 100% !important;
        white-space: normal !important;
    }
    .setup-tabelle td:first-child {
        padding-bottom: 0;
        font-size: 0.68rem;
    }
    .vlan-tabelle th:nth-child(2),
    .vlan-tabelle td:nth-child(2) {
        display: none;
    }
  }
</style>

<div class="artikel-rahmen" id="einleitung">
  <h1>Meine IT-Infrastruktur</h1>
  <p class="artikel-einleitung">Was bei mir läuft und wie es aufgebaut ist. Diese Seite gibt einen Überblick über Hardware, Netzwerk und Software, ohne dass ich in jedem Beitrag von vorne anfangen muss. Kein Anspruch auf Vollständigkeit, aber nah dran. Was sich ändert, wird hier aktualisiert.</p>
</div>


<!-- ══════════════════════════════════════════
     NETZWERK
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--orange)">Netzwerk</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Firewall</td><td>WatchGuard Firebox M390</td></tr>
      <tr><td>Router</td><td>UniFi Cable Internet</td></tr>
      <tr><td>Repeater</td><td>4× UniFi U7 Pro XGS<br>2× UniFi U7 Pro Outdoor</td></tr>
      <tr><td>Switches</td><td>2× Netgear 24-Port (managed)<br>5× Netgear 16-Port (managed)</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>VLANs</td><td>28 konfiguriert</td></tr>
      <tr><td>IP-Schema</td><td>10.[VLAN-ID].0.0/24</td></tr>
      <tr><td>Nutzbare IPs</td><td>7.112 Adressen gesamt</td></tr>
      <tr><td>Netzwerkgeräte</td><td>ca. 320 angebunden</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     SERVER & SPEICHER
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--magenta)">Server &amp; Speicher</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Heimserver</td><td>QNAP TS-873AeU-RP</td></tr>
      <tr><td>RAM</td><td>64 GB</td></tr>
      <tr><td>Festplatten</td><td>8× 12 TB Seagate Exos HDD (RAID 6)<br>2× &nbsp;2 TB Samsung SSD (OS/Cache)</td></tr>
      <tr><td>Erweiterungskarte</td><td>QNAP QXG-10G2T-X710</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Überwachungs-NAS</td><td>QNAP TS-1273AU-RP</td></tr>
      <tr><td>RAM</td><td>64 GB</td></tr>
      <tr><td>Festplatten</td><td>12× 24 TB Seagate Exos HDD (RAID 6)<br>&nbsp;2× &nbsp;4 TB Samsung SSD (OS/Cache)</td></tr>
      <tr><td>Erweiterungskarten</td><td>QNAP QXG-10G2T-X710<br>NVIDIA Quadro P1000</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Backup-NAS #1</td><td>Raspberry Pi 5 + QNAP TR-004<br>4× &nbsp;12 TB Seagate Exos HDD (RAID 10)<br>1× 512 GB SSD (OS/Cache)</td></tr>
      <tr><td>Backup-NAS #2</td><td>WD EX2 Ultra<br>2× 4 TB WD Red HDD (RAID 1)</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Heimserver</td><td>Nextcloud, Navidrome, Homebridge</td></tr>
      <tr><td>Überwachungs-NAS</td><td>QVR Pro, 26 Kameras</td></tr>
      <tr><td>Backup-NAS</td><td>QNAP HBS (Raspberry Pi)<br>rsync (WD)</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     SMART HOME
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--gruen)">Smart Home</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Plattform</td><td>Apple HomeKit via Homebridge</td></tr>
      <tr><td>Protokolle</td><td>WLAN, Zigbee, Matter/Thread</td></tr>
      <tr><td>Klimaanlage</td><td>8× Mitsubishi Electric, Multi-Split</td></tr>
      <tr><td>Lüftung</td><td>Viessmann Vitovent 300-W</td></tr>
      <tr><td>Heizung</td><td>Fußbodenheizung, 9 Räume</td></tr>
      <tr><td>Außenjalousien</td><td>44× elektrisch</td></tr>
      <tr><td>Steckdosen</td><td>83× smart</td></tr>
      <tr><td>Lichtschalter</td><td>25× smart (Dimmer)</td></tr>
    </table>
  </div>
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Wetterstation</td><td>Gira Wetterstation Plus</td></tr>
      <tr><td>Audio</td><td>KEF Einbaulautsprecher, 9 Räume<br>3× Yamaha Multiroom-Verstärker</td></tr>
      <tr><td>Alarmanlage</td><td>16× Bewegungsmelder<br>50× Tür-/Fensterkontakt<br>15× Rauchmelder<br>&nbsp;4× Gasmelder</td></tr>
      <tr><td>Kameras</td><td>12× bispektral Tube<br>&nbsp;8× bispektral Dome<br>&nbsp;6× Fisheye 360°</td></tr>
    </table>
  </div>
</div>


<!-- ══════════════════════════════════════════
     CLIENT-GERÄTE
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--gelb); color:var(--tinte)">Client-Geräte</h2>
</div>

<div class="setup-raster">
  <div class="artikel-rahmen">
    <table class="setup-tabelle">
      <tr><td>Desktop</td><td>Mac Studio M2<br>iMac M4</td></tr>
      <tr><td>Gaming-Server</td><td>Mini-ITX-Tower (Linux/AMD)</td></tr>
      <tr><td>Laptops</td><td>ThinkPad T14 Gen 3 (Linux/AMD)<br>MacBook Pro M4</td></tr>
    </table>
  </div>
<div class="artikel-rahmen">
  <table class="setup-tabelle">
      <tr><td>Mobil</td><td>iPhone 12 Pro<br>iPad Pro A10X</td></tr>
      <tr><td>Entertainment</td><td>3× Apple TV 4K</td></tr>
      <tr><td>Steuerung</td><td>3× iPad Air M1<br>iMac M1</td></tr>
  </table>
</div>
</div>


<!-- ══════════════════════════════════════════
     VLAN-STRUKTUR
══════════════════════════════════════════ -->

<div class="abschnitt-kopf">
  <h2 style="background:var(--orange)">VLAN-Struktur</h2>
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
      <tr class="vlan-kategorie-kopf"><td colspan="3">Management &amp; Infrastruktur</td></tr>
      <tr><td>10</td><td>10.10.0.0/24</td><td>Netzwerk-Management</td></tr>
      <tr><td>11</td><td>10.11.0.0/24</td><td>WLAN-Infrastruktur</td></tr>
      <tr><td>19</td><td>10.19.0.0/24</td><td>Onboarding</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Smart Home</td></tr>
      <tr><td>20</td><td>10.20.0.0/24</td><td>Klimatisierung / Heizung</td></tr>
      <tr><td>21</td><td>10.21.0.0/24</td><td>Beleuchtung innen</td></tr>
      <tr><td>22</td><td>10.22.0.0/24</td><td>Beleuchtung außen</td></tr>
      <tr><td>23</td><td>10.23.0.0/24</td><td>Außenjalousien / Beschattung</td></tr>
      <tr><td>24</td><td>10.24.0.0/24</td><td>Steckdosen</td></tr>
      <tr><td>25</td><td>10.25.0.0/24</td><td>Audio / Entertainment</td></tr>
      <tr><td>26</td><td>10.26.0.0/24</td><td>Sensoren</td></tr>
      <tr><td>27</td><td>10.27.0.0/24</td><td>Bewässerung / Garten</td></tr>
      <tr><td>28</td><td>10.28.0.0/24</td><td>Smart-Home-Control</td></tr>
      <tr><td>29</td><td>10.29.0.0/24</td><td>Sonstiges</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Client-Geräte</td></tr>
      <tr><td>40</td><td>10.40.0.0/24</td><td>Stationäre Geräte</td></tr>
      <tr><td>41</td><td>10.41.0.0/24</td><td>Mobile Geräte</td></tr>
      <tr><td>42</td><td>10.42.0.0/24</td><td>Sonstiges</td></tr>

      <tr class="vlan-kategorie-kopf"><td colspan="3">Sicherheit & Überwachung</td></tr>
      <tr><td>50</td><td>10.50.0.0/24</td><td>Überwachungs-NAS</td></tr>
      <tr><td>51</td><td>10.51.0.0/24</td><td>DMZ</td></tr>
      <tr><td>52</td><td>10.52.0.0/24</td><td>Kameras außen</td></tr>
      <tr><td>53</td><td>10.53.0.0/24</td><td>Kameras innen</td></tr>
      <tr><td>54</td><td>10.54.0.0/24</td><td>Alarmanlage</td></tr>

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