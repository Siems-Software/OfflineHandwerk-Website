# OfflineHandwerk Website (`offlinehandwerk.github.io`)

Static DE/EN product website with one privacy page and an imprint page. Older app and website privacy URLs redirect to the matching section. Astro builds plain HTML and CSS with its built-in i18n routing: no runtime JavaScript, cookies, browser storage, analytics, external fonts or CDN assets.

## Website / target URLs

**GitHub Pages:** [https://siems-software.github.io/offlinehandwerk.github.io/](https://siems-software.github.io/offlinehandwerk.github.io/)

- [Deutsch](https://siems-software.github.io/offlinehandwerk.github.io/de/) (default)
- [English](https://siems-software.github.io/offlinehandwerk.github.io/en/)

### Repository name

This repository is named `offlinehandwerk.github.io`. Because it belongs to the `Siems-Software` organization, GitHub serves it as a **project site** below the repository name, so `site.base` in `src/config.mjs` is `/offlinehandwerk.github.io/`. Astro's `base` is that path without a trailing slash. The former URL `https://siems-software.github.io/OfflineHandwerk-Website/` is not redirected.

The root domain `https://offlinehandwerk.github.io/` would require a GitHub organization named `offlinehandwerk`. A custom domain (e.g. `offlinehandwerk.de`) is also possible; both require `site.base` to become `/` and a matching `site.origin`. See [GitHub's site types](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

## Run locally

Requires Node.js 24 or newer.

```sh
npm ci
npm run check
npm run preview
```

Open `http://127.0.0.1:4311/offlinehandwerk.github.io/de/`. `PORT` changes the preview port. The configured base path is preserved locally to catch broken GitHub Pages links.

## Structure

- `src/i18n/`: typed UI dictionaries, one file per language.
- `src/content/legal/`: Impressum and Datenschutz as Markdown content collections. German is authoritative.
- `src/content/product.json`: pinned app tokens, entitlements and Free limits.
- `src/pages/`: Astro routes. `/de/` and `/en/` stay as the locale prefixes. German legal pages are `/de/datenschutz/` and `/de/impressum/`; English legal pages are `/en/privacy/` and `/en/imprint/`. Slugs live in `src/config.mjs`. `index.astro` repeats the German home page at the project root. `/de/privacy/`, `/de/imprint/`, and the old `privacy-app` and `privacy-website` routes redirect to the current pages, keeping `#app` and `#website`.
- `src/styles.css`: token-based responsive styles. The build prepends the pinned dark-theme variables.
- `scripts/serve.mjs`: loopback-only production preview.
- `tests/site.test.mjs`: localization, route, legal scope, resource and feature checks.

## Deployment and approval

Settings → Pages should select **GitHub Actions** for this generated-site workflow. The workflow builds/tests PRs and deploys **only main**; the website links are listed above.

Changes are delivered through pull requests for owner review and merge; no automatic merge is enabled. Configure github-pages environment approval if legal signoff must gate deployment after merge.

The imprint and privacy pages are the public notices. See [legal review](docs/legal-review.md) for checks that are still open. Monthly/yearly prices and store destinations are unavailable placeholders: no invented prices, savings or QR destinations. Do not describe this website build as a store-listing release.

## Update app facts

Builds neither download nor execute the app. Refresh the checked-in data from an existing app checkout explicitly:

```sh
git -C <app-checkout> fetch origin main
node scripts/sync-app.mjs <app-checkout> origin/main
npm run check
```

Review copy, limits and test expectations with every update. The sync reads declarative data and icon artwork, records the exact app commit and never contacts a store SDK/API.

## Languages and evidence

Add a complete typed dictionary and matching legal Markdown, extend `languages` and `slugs` in `src/config.mjs` (Astro reads that language list as its i18n locales), and update schema/count tests. Astro creates the locale routes; the layout emits reciprocal hreflang. Switching languages preserves legal-page context without storing a preference. German legal text remains authoritative.

Product images in `public/assets/` are intentional shipped artwork of the real German-language web application, not native Android/iOS captures. See [asset sources](docs/asset-sources.md). Review screenshots belong in PR attachments, outside Git history.

Use Mullvad Browser for browser checks, including accessibility tooling in an isolated profile. Never substitute Chromium for a Lighthouse score. Keep unexecuted Lighthouse, legal-review and published-URL gates explicit.
