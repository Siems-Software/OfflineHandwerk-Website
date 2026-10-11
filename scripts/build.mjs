import { readFile, mkdir, rm, cp, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeHtml } from '../src/html.mjs';
import { legal } from '../src/content/legal.mjs';
import { site, languages, routes, pathFor, urlFor } from '../src/config.mjs';
const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, 'dist');
const locales = Object.fromEntries(
  await Promise.all(
    languages.map(async (lang) => [
      lang,
      JSON.parse(await readFile(resolve(root, `src/locales/${lang}.json`), 'utf8')),
    ]),
  ),
);
const product = JSON.parse(await readFile(resolve(root, 'src/content/product.json'), 'utf8'));
const e = escapeHtml;
const html = String.raw;
const asset = (name) => `${site.base}assets/${name}`;
const style = await readFile(resolve(root, 'src/styles.css'), 'utf8');
const vars = Object.entries(product.themes.dark)
  .map(([key, value]) => `--${key}:${value};`)
  .join('');
const css = `/* App tokens: ${product.source.commit} */\n:root{${vars}}\n${style}`;
const cssName = `site.${createHash('sha256').update(css).digest('hex').slice(0, 12)}.css`;
const footer = (lang, t) =>
  html`<footer class="footer">
    <div class="container footer-grid">
      <div>
        <a class="brand" href="${pathFor(lang)}">${e(site.name)}</a>
        <p>${e(t.footerClaim)}</p>
        <p class="small">${e(t.footerResources)}</p>
      </div>
      <nav aria-label="${e(t.footerLegal)}">
        <h2>${e(t.footerLegal)}</h2>
        <a href="${pathFor(lang, 'privacy-app/')}">${e(t.appPrivacy)}</a
        ><a href="${pathFor(lang, 'privacy-website/')}">${e(t.websitePrivacy)}</a
        ><a href="${pathFor(lang, 'imprint/')}">${e(t.imprint)}</a
        ><a href="mailto:${e(site.email)}">${e(t.contact)}</a>
      </nav>
    </div>
  </footer>`;
const shell = (lang, route, title, description, body) => {
  const t = locales[lang];
  const other = languages.find((value) => value !== lang);
  return html`<!doctype html>
    <html lang="${lang}">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="${e(description)}" />
        <meta name="color-scheme" content="dark" />
        <meta
          http-equiv="Content-Security-Policy"
          content="default-src 'none'; style-src 'self'; img-src 'self'; font-src 'self'; base-uri 'none'; form-action 'none'"
        />
        <title>${e(title)}</title>
        <link rel="canonical" href="${urlFor(lang, route)}" />
        ${languages.map((code) => `<link rel="alternate" hreflang="${code}" href="${urlFor(code, route)}">`).join('')}
        <link rel="alternate" hreflang="x-default" href="${urlFor('de', route)}" />
        <link rel="icon" href="${asset('app-icon.png')}" type="image/png" />
        <link rel="stylesheet" href="${asset(cssName)}" />
      </head>
      <body>
        <a class="skip-link" href="#main">${e(t.skip)}</a>
        <header class="header">
          <div class="container header-inner">
            <a class="brand" href="${pathFor(lang)}"
              ><img
                src="${asset('app-icon.png')}"
                alt=""
                width="40"
                height="40"
              />${e(site.name)}</a
            >
            <nav class="main-nav" aria-label="${e(t.navLabel)}">
              ${[
                ['concept', t.navConcept],
                ['features', t.navFeatures],
                ['plans', t.navPlans],
              ]
                .map(([id, label]) => `<a href="${pathFor(lang)}#${id}">${e(label)}</a>`)
                .join('')}
            </nav>
            <a
              class="language"
              href="${pathFor(other, route)}"
              lang="${other}"
              hreflang="${other}"
              aria-label="${e(t.switchLabel)}"
              >${other.toUpperCase()} <span aria-hidden="true">↗</span></a
            >
          </div>
        </header>
        ${body}${footer(lang, t)}
      </body>
    </html>`;
};
const featureRows = (t) => {
  const limitRows = Object.entries(product.limits).map(
    ([key, count]) =>
      `<tr data-feature="${key}"><th scope="row">${e(t.features[key])}</th><td>${e(t.limited.replace('{count}', count))}</td><td><span class="limit-icon" aria-hidden="true">∞</span><span class="sr-only">${e(t.unlimited)}</span></td><td><span class="limit-icon" aria-hidden="true">∞</span><span class="sr-only">${e(t.unlimited)}</span></td></tr>`,
  );
  const permissionRows = Object.keys(t.features)
    .filter((key) => key.startsWith('can'))
    .map(
      (key) =>
        `<tr data-feature="${key}"><th scope="row">${e(t.features[key])}</th>${['free', 'solo', 'business'].map((plan) => `<td><span class="${product.entitlements[plan][key] ? 'yes' : 'no'}"><span aria-hidden="true">${product.entitlements[plan][key] ? '✓' : '—'}</span><span class="sr-only">${e(product.entitlements[plan][key] ? t.included : t.notIncluded)}</span></span></td>`).join('')}</tr>`,
    );
  return [...limitRows, ...permissionRows].join('');
};
const landing = (lang) => {
  const t = locales[lang];
  return shell(
    lang,
    '',
    t.metaTitle,
    t.metaDescription,
    html`<main id="main">
      <section class="hero container">
        <div class="hero-copy">
          <p class="eyebrow">${e(t.heroEyebrow)}</p>
          <h1>${e(t.heroTitle)}<br /><span>${e(t.heroAccent)}</span><br />${e(t.heroEnd)}</h1>
          <p class="lead">${e(t.heroBody)}</p>
          <div class="actions">
            <a class="button" href="#features"
              >${e(t.heroPrimary)} <span aria-hidden="true">↗</span></a
            ><a class="text-link" href="#concept"
              >${e(t.heroSecondary)} <span aria-hidden="true">↓</span></a
            >
          </div>
          <p class="hero-note small">${e(t.heroNote)}</p>
        </div>
        <figure class="product-shot">
          <img
            src="${asset('app-home.webp')}"
            alt="${e(t.screenshotAlt)}"
            width="450"
            height="700"
            fetchpriority="high"
          />
          <figcaption>
            ${e(t.screenshotCaption)}<br /><a
              href="${asset('app-home.webp')}"
              aria-label="${e(t.screenshotOpen)}: ${e(t.screenshotAlt)}"
              >${e(t.screenshotOpen)}</a
            >
          </figcaption>
        </figure>
      </section>
      <section id="concept" class="section section-surface">
        <div class="container">
          <p class="eyebrow">${e(t.conceptEyebrow)}</p>
          <div class="section-heading">
            <h2>${e(t.conceptTitle)}</h2>
            <p class="lead">${e(t.conceptBody)}</p>
          </div>
          <div class="concept-grid">
            ${t.conceptItems.map((item, i) => `<article><span class="number" aria-hidden="true">0${i + 1}</span><h3>${e(item.title)}</h3><p>${e(item.body)}</p></article>`).join('')}
          </div>
          <aside class="privacy-note">
            <p>${e(t.conceptCaveat)}</p>
            <a href="${pathFor(lang, 'privacy-app/')}"
              >${e(t.conceptPrivacy)} <span aria-hidden="true">↗</span></a
            >
          </aside>
        </div>
      </section>
      <section id="features" class="section container">
        <p class="eyebrow">${e(t.featuresEyebrow)}</p>
        <h2>${e(t.featuresTitle)}</h2>
        <div class="workflow-layout">
          <ol class="workflow">
            ${t.featureSteps.map((item, i) => `<li><span class="step-number" aria-hidden="true">0${i + 1}</span><div><h3>${e(item.title)}</h3><p>${e(item.body)}</p></div></li>`).join('')}
          </ol>
          <figure class="product-shot">
            <img
              src="${asset('app-calculations.webp')}"
              alt="${e(t.screenshotSecondAlt)}"
              width="450"
              height="700"
              loading="lazy"
            />
            <figcaption>
              ${e(t.screenshotSecondCaption)}<br /><a
                href="${asset('app-calculations.webp')}"
                aria-label="${e(t.screenshotOpen)}: ${e(t.screenshotSecondAlt)}"
                >${e(t.screenshotOpen)}</a
              >
            </figcaption>
          </figure>
        </div>
      </section>
      <section id="plans" class="section section-surface">
        <div class="container">
          <p class="eyebrow">${e(t.plansEyebrow)}</p>
          <h2>${e(t.plansTitle)}</h2>
          <p class="lead plan-intro">${e(t.plansBody)}</p>
          <div class="plan-grid">
            ${['free', 'solo', 'business'].map((plan) => `<article class="plan-card"><h3>${e(t[`${plan}Name`])}</h3><p>${e(t[`${plan}Description`])}</p>${plan === 'free' ? `<p class="price-free">${e(t.freePrice)}</p>` : `<dl class="prices"><div><dt>${e(t.monthly)}</dt><dd>${e(t.pricePending)}</dd></div><div><dt>${e(t.yearly)}</dt><dd>${e(t.pricePending)}</dd></div></dl>`}</article>`).join('')}
          </div>
          <p class="small pricing-note">${e(t.pricingNote)}</p>
          <div class="table-wrap">
            <table>
              <caption>
                ${e(t.tableCaption)}
              </caption>
              <thead>
                <tr>
                  <th scope="col">${e(t.tableFeature)}</th>
                  ${['free', 'solo', 'business'].map((plan) => `<th scope="col">${e(t[`${plan}Name`])}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${featureRows(t)}
              </tbody>
            </table>
          </div>
          <p class="small table-legend"><span aria-hidden="true">∞ = </span>${e(t.unlimited)}</p>
          <p class="small">${e(t.backupNote)}</p>
        </div>
      </section>
      <section id="download" class="section container download">
        <p class="eyebrow">${e(t.downloadEyebrow)}</p>
        <h2>${e(t.downloadTitle)}</h2>
        <p class="lead">${e(t.downloadBody)}</p>
        <div class="store-grid">
          ${[
            ['googlePlay', '▶'],
            ['appStore', '↗'],
          ]
            .map(
              ([key, icon]) =>
                `<div class="store-placeholder" aria-disabled="true"><span class="store-icon" aria-hidden="true">${icon}</span><div><strong>${e(t[key])}</strong><span>${e(t.storePending)}</span></div></div>`,
            )
            .join('')}
        </div>
        <p class="small">${e(t.downloadNote)}</p>
      </section>
    </main>`,
  );
};
const legalKeys = { 'privacy-app/': 'app', 'privacy-website/': 'website', 'imprint/': 'imprint' };
const legalPage = (lang, route) => {
  const t = locales[lang];
  const all = legal[lang];
  const page = all[legalKeys[route]];
  return shell(
    lang,
    route,
    `${page.title} | ${site.name}`,
    page.intro,
    html`<main id="main" class="container legal-page">
      <a class="back-link" href="${pathFor(lang)}">← ${e(t.backHome)}</a>
      <h1>${e(page.title)}</h1>
      <p class="lead">${e(page.intro)}</p>
      <aside class="legal-notice"><strong>${e(all.notice)}</strong></aside>
      <p class="small">${e(all.updated)}</p>
      <p>${e(t.legalAuthority)}</p>
      <nav class="legal-toc" aria-label="${e(t.legalNavigation)}">
        <a href="${pathFor(lang, 'privacy-app/')}">${e(t.appPrivacy)}</a
        ><a href="${pathFor(lang, 'privacy-website/')}">${e(t.websitePrivacy)}</a
        ><a href="${pathFor(lang, 'imprint/')}">${e(t.imprint)}</a>
      </nav>
      ${page.sections.map((section, i) => `<section aria-labelledby="legal-${i}"><h2 id="legal-${i}">${e(section.title)}</h2>${section.paragraphs.map((text) => `<p>${e(text)}</p>`).join('')}</section>`).join('')}
    </main>`,
  );
};
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
await cp(resolve(root, 'public'), out, { recursive: true });
await writeFile(resolve(out, 'assets', cssName), css);
for (const lang of languages) {
  if (!locales[lang] || !legal[lang]) throw new Error(`Missing language ${lang}`);
  for (const route of routes) {
    const dir = resolve(out, lang, route);
    await mkdir(dir, { recursive: true });
    await writeFile(resolve(dir, 'index.html'), route ? legalPage(lang, route) : landing(lang));
  }
}
await writeFile(resolve(out, 'index.html'), landing('de'));
await writeFile(
  resolve(out, '404.html'),
  shell(
    'de',
    '',
    locales.de.notFoundTitle,
    locales.de.notFoundBody,
    html`<main id="main" class="container legal-page">
      <h1>${e(locales.de.notFoundTitle)}</h1>
      <p>${e(locales.de.notFoundBody)}</p>
      <a class="button" href="${pathFor('de')}">${e(locales.de.language)}</a>
      <a class="text-link" lang="en" href="${pathFor('en')}">${e(locales.en.language)}</a>
    </main>`,
  ),
);
const urls = languages.flatMap((lang) =>
  routes.map((route) => `<url><loc>${urlFor(lang, route)}</loc></url>`),
);
await writeFile(
  resolve(out, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>`,
);
await writeFile(
  resolve(out, 'robots.txt'),
  `User-agent: *\nAllow: /\nSitemap: ${site.origin}${site.base}sitemap.xml\n`,
);
await writeFile(resolve(out, '.nojekyll'), '');
console.log(
  `Built ${languages.length * routes.length + 2} static HTML pages; no runtime JavaScript. App snapshot: ${product.source.commit}`,
);
