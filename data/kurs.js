/* Kommende kurs for Just Drive Trafikkskole – lastes som vanlig <script> slik at
   det fungerer både lokalt (file://) og på alle hoster, uten fetch/CORS.
   Kilde: TABS kursoversikt (skole-id 1535). Rediger denne fila for å oppdatere kurs.
   Booking/påmelding: https://justdrivetrafikkskole.tabs.no/kalender */
window.JD_KURS = {
  "_oppdatert": "2026-07-01",
  "avdelinger": {
    "kristiansand": {
      "navn": "Kristiansand",
      "sted": "Comfort Hotel, Skippergata 7",
      "kalender": "https://justdrivetrafikkskole.tabs.no/kalender",
      "kursoversikt": "https://justdrivetrafikkskole.tabs.no/kalender"
    }
  },
  "kurs": [
    { "avdeling": "kristiansand", "klasse": "BAut", "navn": "Sikkerhetskontroll (personbil automat)", "start": "2026-07-08T00:00", "pris": 1200, "plasser": 2 },
    { "avdeling": "kristiansand", "klasse": "B",    "navn": "Sikkerhetskontroll (personbil)",         "start": "2026-08-05T00:00", "pris": 1000, "plasser": 3 },
    { "avdeling": "kristiansand", "klasse": "BAut", "navn": "Sikkerhetskontroll (personbil automat)", "start": "2026-08-05T00:00", "pris": 1200, "plasser": 3 },
    { "avdeling": "kristiansand", "klasse": "BAut", "navn": "Sikkerhetskontroll (personbil automat)", "start": "2026-08-19T00:00", "pris": 1200, "plasser": 1 }
  ]
};
