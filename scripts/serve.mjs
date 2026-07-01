// Minimal static file server for local preview of the Just Drive Trafikkskole site.
// Run from the project folder:  node scripts/serve.mjs   ->  http://localhost:5500
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = process.env.PORT || 5500;

const TYPES = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.woff2': 'font/woff2',
  '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8',
};

createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    if (p === '/' ) p = '/index.html';
    let file = join(root, normalize(p).replace(/^(\.\.[\/\\])+/, ''));
    try { if ((await stat(file)).isDirectory()) file = join(file, 'index.html'); }
    catch { if (!extname(file)) file += '.html'; }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': TYPES[extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>404</h1>');
  }
}).listen(PORT, () => console.log(`Just Drive Trafikkskole på http://localhost:${PORT}`));
