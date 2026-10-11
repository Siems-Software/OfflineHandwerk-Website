import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve } from 'node:path';
import { load } from 'cheerio';
import { site, languages, routes, pathFor, urlFor } from '../src/config.mjs';
import { legal } from '../src/content/legal.mjs';
const root = process.cwd();
const out = resolve(root, 'dist');
const json = async (name) => JSON.parse(await readFile(resolve(root, name), 'utf8'));
const locales = Object.fromEntries(
  await Promise.all(languages.map(async (lang) => [lang, await json(`src/locales/${lang}.json`)])),
);
const product = await json('src/content/product.json');
const pages = await Promise.all(
  languages.flatMap((lang) =>
    routes.map(async (route) => ({
      lang,
      route,
      $: load(await readFile(resolve(out, lang, route, 'index.html'), 'utf8')),
    })),
  ),
);
const flatten = (value, prefix = '') =>
  Object.entries(value)
    .flatMap(([key, entry]) =>
      typeof entry === 'object' && entry !== null
        ? flatten(entry, `${prefix}${key}.`)
        : [`${prefix}${key}`],
    )
    .sort();

test('DE and EN have matching, non-empty translation and legal schemas', () => {
  assert.deepEqual(flatten(locales.de), flatten(locales.en));
  assert.deepEqual(flatten(legal.de), flatten(legal.en));
  for (const locale of [...Object.values(locales), ...Object.values(legal)]) {
    const check = (value) =>
      Object.values(value).forEach((entry) =>
        typeof entry === 'object' && entry !== null
          ? check(entry)
          : assert.equal(typeof entry === 'string' && entry.trim().length > 0, true),
      );
    check(locale);
  }
});
test('eight localized pages have correct language, canonical and reciprocal hreflang', () => {
  assert.equal(pages.length, 8);
  for (const { lang, route, $ } of pages) {
    assert.equal($('html').attr('lang'), lang);
    assert.equal($('link[rel="canonical"]').attr('href'), urlFor(lang, route));
    for (const code of languages)
      assert.equal($(`link[hreflang="${code}"]`).attr('href'), urlFor(code, route));
    assert.equal($('link[hreflang="x-default"]').attr('href'), urlFor('de', route));
    const other = languages.find((code) => code !== lang);
    assert.equal($('a.language').attr('href'), pathFor(other, route));
    assert.equal($('h1').length, 1);
    assert.equal($('main#main').length, 1);
    assert.ok($('title').text().length > 10);
    assert.ok($('meta[name="description"]').attr('content').length > 20);
  }
});
test('root defaults to German without client-side script or forced redirect', async () => {
  const $ = load(await readFile(resolve(out, 'index.html'), 'utf8'));
  assert.equal($('html').attr('lang'), 'de');
  assert.equal(
    $('h1').text(),
    `${locales.de.heroTitle}${locales.de.heroAccent}${locales.de.heroEnd}`,
  );
  assert.equal($('meta[http-equiv="refresh"]').length, 0);
});
test('all internal links and fragments resolve below the GitHub project base', async () => {
  for (const { $ } of pages) {
    for (const element of $('a[href],img[src],link[rel="stylesheet"],link[rel="icon"]').toArray()) {
      const ref = $(element).attr('href') || $(element).attr('src');
      if (/^(mailto:|https:)/.test(ref)) continue;
      const [pathname, hash] = ref.split('#');
      if (pathname) {
        assert.ok(pathname.startsWith(site.base), `Incorrect project base: ${ref}`);
        let file = resolve(out, pathname.slice(site.base.length));
        if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
        await stat(file);
        if (hash) assert.ok(load(await readFile(file, 'utf8'))(`[id="${hash}"]`).length, ref);
      } else if (hash) assert.ok($(`[id="${hash}"]`).length, ref);
    }
  }
});
test('every page is script-free and loads only same-origin resources', async () => {
  for (const { $ } of pages) {
    assert.equal($('script,iframe,embed,object,form').length, 0);
    assert.equal($('[style]').length, 0);
    assert.ok(
      $('meta[http-equiv="Content-Security-Policy"]')
        .attr('content')
        .includes("default-src 'none'"),
    );
    for (const element of $('*').toArray()) {
      for (const [key, value] of Object.entries(element.attribs || {})) {
        assert.ok(!key.startsWith('on'), `Inline event ${key}`);
        if (['src', 'srcset', 'poster'].includes(key))
          assert.ok(value.startsWith(site.base), `External resource ${value}`);
      }
    }
    for (const element of $('link').toArray()) {
      if (
        ['stylesheet', 'preload', 'preconnect', 'dns-prefetch', 'icon'].includes(
          $(element).attr('rel'),
        )
      )
        assert.ok($(element).attr('href').startsWith(site.base));
    }
  }
  const css = await readFile(
    resolve(
      out,
      'assets',
      (await readdir(resolve(out, 'assets'))).find((file) => file.endsWith('.css')),
    ),
    'utf8',
  );
  assert.ok(!/@import|url\(/i.test(css));
});
test('theme colors are the actual pinned ui-core dark tokens', async () => {
  assert.match(product.source.commit, /^[a-f0-9]{40}$/);
  const css = await readFile(
    resolve(
      out,
      'assets',
      (await readdir(resolve(out, 'assets'))).find((file) => file.endsWith('.css')),
    ),
    'utf8',
  );
  for (const [key, value] of Object.entries(product.themes.dark))
    assert.ok(css.includes(`--${key}:${value};`));
  assert.equal(product.themes.dark.actionPrimary, '#FFAA76');
});
test('comparison renders real Free limits, not unlimited catalog claims', () => {
  assert.deepEqual(product.limits, {
    calculations: 5,
    customers: 5,
    employees: 5,
    materials: 25,
    services: 25,
    taxes: 3,
    surcharges: 3,
  });
  for (const { lang, route, $ } of pages.filter((page) => page.route === '')) {
    for (const [key, count] of Object.entries(product.limits)) {
      const row = $(`tr[data-feature="${key}"]`);
      assert.equal(row.find('td').eq(0).text(), locales[lang].limited.replace('{count}', count));
      for (const index of [1, 2])
        assert.equal(row.find('td').eq(index).find('.sr-only').text(), locales[lang].unlimited);
    }
  }
});
test('every entitlement cell matches the source plan, including Business-only backups', () => {
  assert.equal(product.entitlements.free.canExportWithoutWatermark, false);
  assert.equal(product.entitlements.solo.canCreateInternalPdf, true);
  assert.equal(product.entitlements.solo.canSendOfficeEmail, true);
  assert.equal(product.entitlements.solo.canBackupRestore, false);
  assert.equal(product.entitlements.business.canBackupRestore, true);
  for (const { lang, $ } of pages.filter((page) => page.route === '')) {
    for (const key of Object.keys(locales[lang].features).filter((key) => key.startsWith('can'))) {
      const row = $(`tr[data-feature="${key}"]`);
      ['free', 'solo', 'business'].forEach((plan, index) =>
        assert.equal(
          row.find('td').eq(index).find('.sr-only').text(),
          product.entitlements[plan][key] ? locales[lang].included : locales[lang].notIncluded,
        ),
      );
    }
  }
});
test('both billing periods are explicit, with no invented paid prices or checkout', () => {
  for (const { lang, $ } of pages.filter((page) => page.route === '')) {
    assert.equal($('.prices').length, 2);
    $('.prices').each((_, element) => {
      assert.deepEqual(
        $(element)
          .find('dt')
          .map((_, node) => $(node).text())
          .get(),
        [locales[lang].monthly, locales[lang].yearly],
      );
      assert.deepEqual(
        $(element)
          .find('dd')
          .map((_, node) => $(node).text())
          .get(),
        [locales[lang].pricePending, locales[lang].pricePending],
      );
    });
    assert.equal($('a[href*="play.google"],a[href*="apps.apple"],button').length, 0);
    assert.equal($('.store-placeholder[aria-disabled="true"]').length, 2);
    assert.equal($('.store-placeholder a').length, 0);
  }
});
test('legal notices stay visible and the correct app/website scopes remain separate', () => {
  for (const { lang, route, $ } of pages.filter((page) => page.route !== '')) {
    assert.equal($('.legal-notice strong').text(), legal[lang].notice);
    assert.ok($('main').text().includes(locales[lang].legalAuthority));
    assert.ok($('main').text().includes(site.email));
    assert.ok($('main').text().includes('Jan Siems'));
  }
  for (const lang of languages) {
    const website = pages
      .find((page) => page.lang === lang && page.route === 'privacy-website/')
      .$('main')
      .text();
    assert.ok(website.includes('GitHub'));
    assert.ok(!website.includes('OPFS'));
    const app = pages
      .find((page) => page.lang === lang && page.route === 'privacy-app/')
      .$('main')
      .text();
    assert.ok(app.includes('RevenueCat'));
  }
});
test('every page links all legal routes and accessible main content', () => {
  for (const { lang, $ } of pages) {
    for (const route of routes.filter(Boolean))
      assert.ok($(`footer a[href="${pathFor(lang, route)}"]`).length);
    assert.equal($('a.skip-link').attr('href'), '#main');
    assert.equal($('img:not([alt])').length, 0);
    assert.equal($('table th:not([scope])').length, 0);
  }
});
test('sitemap has every localized canonical URL and not duplicate root/404 URLs', async () => {
  const xml = await readFile(resolve(out, 'sitemap.xml'), 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.deepEqual(
    urls.sort(),
    languages.flatMap((lang) => routes.map((route) => urlFor(lang, route))).sort(),
  );
  await stat(resolve(out, '404.html'));
  await stat(resolve(out, '.nojekyll'));
});
