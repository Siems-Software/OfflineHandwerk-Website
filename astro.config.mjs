import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import product from './src/content/product.json' with { type: 'json' };
import { languages, legalPages, prefixDefaultLocale, site, urlFor } from './src/config.mjs';

const themeCss = `/* App tokens: ${product.source.commit} */\n:root{${Object.entries(
  product.themes.dark,
)
  .map(([key, value]) => `--${key}:${value};`)
  .join('')}}\n`;

export default defineConfig({
  site: site.origin,
  base: site.base.replace(/\/$/, ''),
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    assets: 'assets',
  },
  i18n: {
    defaultLocale: 'de',
    locales: [...languages],
    routing: {
      prefixDefaultLocale,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    build: { assetsInlineLimit: 0 },
    plugins: [
      {
        name: 'offlinehandwerk-theme-tokens',
        generateBundle(_options, bundle) {
          for (const item of Object.values(bundle)) {
            if (
              item.type === 'asset' &&
              item.fileName.endsWith('.css') &&
              typeof item.source === 'string'
            )
              item.source = themeCss + item.source;
          }
        },
      },
    ],
  },
  integrations: [
    icon(),
    {
      name: 'offlinehandwerk-sitemap',
      hooks: {
        'astro:build:done': ({ dir }) => {
          const urls = languages.flatMap((lang) =>
            ['', ...legalPages].map((page) => `<url><loc>${urlFor(lang, page)}</loc></url>`),
          );
          writeFileSync(
            resolve(fileURLToPath(dir), 'sitemap.xml'),
            `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
          );
        },
      },
    },
  ],
});
