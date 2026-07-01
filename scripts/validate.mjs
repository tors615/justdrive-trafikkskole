// Sanity-check: no Elite leftovers, and every local href/src/iframe target exists.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pages = readdirSync(root).filter(f => f.endsWith('.html'));
const BAD = ['Elite', 'STEP', 'Drammen', 'Røyken', 'Spikkestad', 'Hotvet', 'steptrafikkskole', 'klasse-mc', 'motorsykkel', 'universitetsutdann', 'minside.tabs', 'logo-white', 'hero2', 'ntsf-logo'];
let errors = 0;

for (const page of pages) {
  const html = readFileSync(join(root, page), 'utf8');
  for (const b of BAD) if (html.includes(b)) { console.log(`LEFTOVER  ${page}: "${b}"`); errors++; }

  // local href/src targets
  const refs = [...html.matchAll(/(?:href|src)="([^"#:?]+)"/g)].map(m => m[1])
    .filter(u => !u.startsWith('http') && !u.startsWith('mailto') && !u.startsWith('tel') && !u.startsWith('//') && !u.startsWith('data:'));
  for (const r of refs) {
    const clean = r.split('#')[0].split('?')[0];
    if (!clean) continue;
    if (!existsSync(join(root, clean))) { console.log(`MISSING   ${page}: ${r}`); errors++; }
  }
}
console.log(errors === 0 ? `OK – ${pages.length} sider, ingen leftovers eller brukne lokale lenker.` : `\n${errors} problem(er) funnet.`);
process.exit(errors ? 1 : 0);
