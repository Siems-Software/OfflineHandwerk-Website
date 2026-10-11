import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { site } from '../src/config.mjs';
const root = resolve(fileURLToPath(new URL('../dist/', import.meta.url)));
const port = Number(process.env.PORT || 4311);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
};
const server = createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405).end();
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }
  if (pathname === '/') {
    response.writeHead(302, { Location: site.base }).end();
    return;
  }
  if (!pathname.startsWith(site.base)) {
    response.writeHead(404).end('Not found');
    return;
  }
  let file = resolve(root, pathname.slice(site.base.length));
  if (file !== root && !file.startsWith(root + sep)) {
    response.writeHead(403).end();
    return;
  }
  let status = 200;
  try {
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) {
        response.writeHead(301, { Location: pathname + '/' }).end();
        return;
      }
      file = resolve(file, 'index.html');
    }
    await stat(file);
  } catch {
    file = resolve(root, '404.html');
    status = 404;
  }
  try {
    const body = await readFile(file);
    response.writeHead(status, {
      'Content-Type': types[extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch {
    response.writeHead(503).end('Build the site first: npm run build');
  }
});
server.listen(port, '127.0.0.1', () =>
  console.log(`Website preview: http://127.0.0.1:${server.address().port}${site.base}`),
);
