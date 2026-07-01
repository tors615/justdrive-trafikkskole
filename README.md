# Just Drive Trafikkskole – nettside (utkast)

High-end statisk nettside for **Just Drive Trafikkskole AS** (Kristiansand), bygget ved å rebrande STEP-/Elite-malen til Just Drive sin merkevare og innhold.

## Forhåndsvisning
Fra prosjektmappen:

```
node scripts/serve.mjs        # http://localhost:5500
```

## Designgrunnlag
- **Mal:** samme komponentbibliotek som STEP/Elite Trafikkskole (selvhostede fonter – Space Grotesk + Plus Jakarta Sans).
- **Farger:** rebrandet til Just Drive sin palett fra logoen: nær-sort (`--bg-deep #0E0F13`, `--ink #14151A`) + **magenta aksent (`--accent #E6007E`)** og lys magenta (`--accent-bright #FF4FB0`).
- **Logo:** `img/logo.png` (sort, vises på lys nav) og `img/logo-hvit.png` (hvit m/magenta, i footer og over hero).
- **Hero:** `img/jd-hero.jpg` – Just Drive sin egen hvite Porsche Taycan.
- Ingen falske Google-score, garantier eller anmeldelser – kun Just Drive sitt eget innhold.

## Sider
| Fil | Innhold |
|---|---|
| `index.html` | Hjem – hero, klasser (B, BE, TG), pakketilbud, sted, kommende kurs, «Derfor Just Drive», FAQ |
| `klasse-b.html` | Klasse B – bil (automat og manuell) |
| `klasse-be.html` | Klasse BE – bil med tilhenger |
| `trafikalt-grunnkurs.html` | Trafikalt grunnkurs (inkl. mørkekjøring og førstehjelp) |
| `priser.html` | Prisliste per klasse + gebyrer + pakker (Starttilbud / Superpakke) |
| `booking.html` | Booking-hub – TABS-kalender for Kristiansand |
| `om-oss.html` | Om oss – de tre trafikklærerne |
| `kontakt.html` | Kontakt – adresse, telefon, e-post, påmeldingsskjema |
| `vilkar.html` | Vilkår (foreløpige) |

## Just Drive-info (verifisert mot deres sider + Brønnøysund)
- **Org.nr** 926 680 641 · JUST DRIVE TRAFIKKSKOLE AS · stiftet 2021
- Adresse: **Skinnerheia 42, 4634 Kristiansand S**
- Tlf **415 79 087** · post@justdrive.no
- Trafikklærere: Karoline Udø (415 79 087), Tom Christian Udø (94 27 64 38), Andreas Amundsen (90 23 63 14)
- Teorikurs holdes på **Comfort Hotel, Skippergata 7**
- Booking: `justdrivetrafikkskole.tabs.no/kalender` · elevinnlogging `tabs.no/start`
- Instagram @justdrivetrafikkskole · Facebook /justdrivetrafikkskole
- Klasser: **B (automat + manuell), BE (tilhenger), trafikalt grunnkurs** (ingen MC)

### Pakker (klasse B)
| Pakke | Innhold | Pris |
|---|---|---|
| Starttilbud | 2 kjøretimer + rødt L-skilt + speil | 990 kr (spar 450 kr) |
| Superpakke | All obligatorisk opplæring (trinn 4, trinnvurdering 2/3, sikkerhetskurs bane, 2 kjøretimer, forbikjøring) | 23 200 kr |

Baneleie og gebyrer hos Statens vegvesen kommer i tillegg. Kjøretimer tilpasses elevens nivå.

## Må gjøres før lansering
- **Kontaktskjema:** bruker demo-handler (viser takk-melding). Koble til ekte endepunkt (f.eks. Web3Forms) – markert med TODO i `kontakt.html`.
- **Kommende kurs:** forsiden/booking leser kursene fra `data/kurs.js` (`window.JD_KURS`, lastet som `<script>` slik at det virker både på `file://` og alle hoster). Rediger den fila for å oppdatere kurs. Kilde: TABS kursoversikt (skole-id **1535**); live-APIet `api.tabs.no/api/v2/courses?...` krever Referer-header og tillater ikke CORS fra annet domene, så data bakes inn manuelt.
- **Domene:** canonical/OG bruker `justdrive.no`. Bekreft endelig domene før publisering.
- **Vilkår:** foreløpige – gjennomgå før publisering.
- **Priser:** hentet direkte fra justdrivetrafikkskole.tabs.no (per 2026-07-01). Kontroller mot deres side før lansering.

## Kilde
Research mot justdrivetrafikkskole.tabs.no (alle undersider) og Brønnøysund Enhetsregisteret. Levert av Larsen Digital Solutions, 2026-07-01.
