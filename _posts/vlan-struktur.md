# VLAN-Struktur

## IP-Adressierung
- **Schema:** `10.[VLAN-ID].0.0/24`  
- **Gateway:** immer `.1` in jedem VLAN
- **Konfigurierte VLANs:** 26
- **Nutzbare IPs pro VLAN:** 254 (10.x.0.1 – 10.x.0.254)  
- **Nutzbare IPs gesamt:** 6.604 Adressen

## Übersicht
| Kategorie | VLANs |
|-----------|-------|
| Management & Infrastruktur | 10, 11, 19 |
| Smart Home | 20–28 |
| Client-Geräte | 40–42 |
| Sicherheit & Überwachung | 50–53 |
| Services | 60–61 |
| Fernzugriff & Gäste | 70–72 |
| Sonstiges / Reserve | 80, 90 |

## Liste
| Kategorie | VLAN | Subnetz | IP-Adresse(n) | Beschreibung |
|------------|------|----------|----------------|---------------|
| **Management & Infrastruktur** |  |  |  |  |
| Netzwerk-Management | 10 | 10.10.0.0/24 |  |  |
|  |  |  | 10.10.0.1 | Gateway |
|  |  |  | 10.10.0.10 | WatchGuard Firebox (NGFW) |
|  |  |  | 10.10.0.20 | Netgear-Switch 1 |
|  |  |  | 10.10.0.21 | Netgear-Switch 2 |
| WLAN-Infrastruktur | 11 | 10.11.0.0/24 |  |  |
|  |  |  | 10.11.0.1 | Gateway |
|  |  |  | 10.11.0.10 | Fritz!Box 6690 Cable |
|  |  |  | 10.11.0.20–29 | 5x Fritz!Box 7590 AX |
|  |  |  | 10.11.0.30–39 | 6x FRITZ!Repeater 3000 & 6000 |
| Onboarding | 19 | 10.19.0.0/24 |  |  |
|  |  |  | 10.19.0.1 | Gateway |
|  |  |  | 10.19.0.10 | DHCP/DNS |
|  |  |  | 10.19.0.20–199 | dynamischer DHCP-Bereich |
|  |  |  | 10.19.0.200–254 | statische Reserve |
| **Smart Home** |  |  |  |  |
| Klimatisierung | 20 | 10.20.0.0/24 |  |  |
|  |  |  | 10.20.0.1 | Gateway |
|  |  |  | 10.20.0.10–19 | 8x Mitsubishi-Electric-Klimaanlage |
|  |  |  | 10.20.0.30–39 | WLAN-Brücken für Klimaanlagen |
|  |  |  | 10.20.0.40 | Viessmann-Lüftungsanlage |
| Heizung | 21 | 10.21.0.0/24 |  |  |
|  |  |  | 10.21.0.1 | Gateway |
|  |  |  | 10.21.0.10 | Fußbodenheizungs-Gateway |
|  |  |  | 10.21.0.11–19 | 9x Steuermodule |
| Beleuchtung innen | 22 | 10.22.0.0/24 |  |  |
|  |  |  | 10.22.0.1 | Gateway |
|  |  |  | 10.22.0.10–39 | Erdgeschoss |
|  |  |  | 10.22.0.40–69 | Obergeschoss |
|  |  |  | 10.22.0.70–99 | Souterrain |
|  |  |  | 10.22.0.100–129 | Lichtschalter |
| Beleuchtung außen | 23 | 10.23.0.0/24 |  |  |
|  |  |  | 10.23.0.1 | Gateway |
|  |  |  | 10.23.0.10–29 | Haus |
|  |  |  | 10.23.0.30–59 | Garten |
|  |  |  | 10.23.0.60–69 | Pool |
|  |  |  | 10.23.0.70–79 | Tor/Einfahrt |
| Jalousien / Beschattung | 24 | 10.24.0.0/24 |  |  |
|  |  |  | 10.24.0.1 | Gateway |
|  |  |  | 10.24.0.10–19 | Jalousien-Gateways |
|  |  |  | 10.24.0.20–69 | 44x Jalousien |
| Steckdosen | 25 | 10.25.0.0/24 |  |  |
|  |  |  | 10.25.0.1 | Gateway |
|  |  |  | 10.25.0.10–39 | Erdgeschoss |
|  |  |  | 10.25.0.40–69 | Obergeschoss |
|  |  |  | 10.25.0.70–99 | Souterrain |
|  |  |  | 10.25.0.100–119 | Außenbereich |
| Audio / Entertainment | 26 | 10.26.0.0/24 |  |  |
|  |  |  | 10.26.0.1 | Gateway |
|  |  |  | 10.26.0.10-19 | 3x Yamaha-Multiroom-Verstärker |
|  |  |  | 10.26.0.20–109 | Einbaulautsprecher, 9 Räume |
| Sensoren | 27 | 10.27.0.0/24 |  |  |
|  |  |  | 10.27.0.1 | Gateway |
|  |  |  | 10.27.0.10 | Wetterstation |
|  |  |  | 10.27.0.20–69 | Bewegungsmelder |
| Smart-Home-Control | 28 | 10.28.0.0/24 |  |  |
|  |  |  | 10.28.0.1 | Gateway |
|  |  |  | 10.28.0.20–29 | Smart-Home-Gateways |
|  |  |  | 10.28.0.30–32 | iPads (EG, OG, Souterrain) |
| **Client-Geräte** |  |  |  |  |
| Feste Geräte | 40 | 10.40.0.0/24 |  |  |
|  |  |  | 10.40.0.1 | Gateway |
|  |  |  | 10.40.0.10 | Mac Studio (Ethernet) |
|  |  |  | 10.40.0.11 | Gaming-Server (WLAN) |
|  |  |  | 10.40.0.40 | Mac Studio (WLAN) |
|  |  |  | 10.40.0.60–61 | Peer-to-Peer |
| Mobile Geräte | 41 | 10.41.0.0/24 |  |  |
|  |  |  | 10.41.0.1 | Gateway |
|  |  |  | 10.41.0.10 | MacBook |
|  |  |  | 10.41.0.11 | ThinkPad |
|  |  |  | 10.41.0.20 | iPhone |
|  |  |  | 10.41.0.30 | iPad |
| Sonstiges | 42 | 10.42.0.0/24 |  |  |
|  |  |  | 10.42.0.1 | Gateway |
|  |  |  | 10.42.0.10 | Raspberry Pi Zero |
|  |  |  | 10.42.0.11 | Raspberry Pi Zero 2 |
|  |  |  | 10.42.0.12 | Raspberry Pi 5 |
| **Sicherheit & Überwachung** |  |  |  |  |
| Kameras außen | 50 | 10.50.0.0/24 |  |  |
|  |  |  | 10.50.0.1 | Gateway |
|  |  |  | 10.50.0.10–29 | 12x Tube-Kameras |
|  |  |  | 10.50.0.30–39 | 4x Dome-Kameras |
| Kameras innen | 51 | 10.51.0.0/24 |  |  |
|  |  |  | 10.51.0.1 | Gateway |
|  |  |  | 10.51.0.10–19 | 4x Dome-Kameras |
|  |  |  | 10.51.0.20–29 | 6x Fisheye-Kameras |
| Aufnahme | 52 | 10.52.0.0/24 |  |  |
|  |  |  | 10.52.0.1 | Gateway |
|  |  |  | 10.52.0.10 | NVR-System #1 |
|  |  |  | 10.52.0.11 | NVR-System #2 |
|  |  |  | 10.52.0.20 | QNAP TS-1273AU-RP |
|  |  |  | 10.52.0.30 | iMac |
| Alarmanlage | 53 | 10.53.0.0/24 |  |  |
|  |  |  | 10.53.0.1 | Gateway |
|  |  |  | 10.53.0.10 | Alarmzentrale |
|  |  |  | 10.53.0.20–39 | 16x Bewegungsmelder |
|  |  |  | 10.53.0.40–89 | 50x Tür- und Fensterkontakte |
|  |  |  | 10.53.0.90–109 | 15x Rauchmelder |
|  |  |  | 10.53.0.110–119 | 4x Gasmelder |
| **Services** |  |  |  |  |
| Haupt-NAS | 60 | 10.60.0.0/24 |  |  |
|  |  |  | 10.60.0.1 | Gateway |
|  |  |  | 10.60.0.10 | QNAP TS-873AeU-RP |
|  |  |  | 10.60.0.20 | WD EX2 Ultra |
| DMZ | 61 | 10.61.0.0/24 |  |  |
|  |  |  | 10.61.0.1 | Gateway |
| **Fernzugriff & Gäste** |  |  |  |  |
| VPN | 70 | 10.70.0.0/24 |  |  |
|  |  |  | 10.70.0.1 | Gateway |
|  |  |  | 10.70.0.10 | VPN-Gateway |
|  |  |  | 10.70.0.20–39 | VPN-Client-Bereich |
| Remote-Management | 71 | 10.71.0.0/24 |  |  |
|  |  |  | 10.71.0.1 | Gateway |
| Gäste-WLAN | 72 | 10.72.0.0/24 |  |  |
|  |  |  | 10.72.0.1 | Gateway |
|  |  |  | 10.72.0.100–200 | Gäste-Geräte (DHCP-Bereich) |
| **Sonstiges** |  |  |  |  |
| Reserve 1 | 80 | 10.80.0.0/24 |  |  |
|  |  |  | 10.80.0.1 | Gateway |
| Reserve 2 | 90 | 10.90.0.0/24 |  |  |
|  |  |  | 10.90.0.1 | Gateway |
