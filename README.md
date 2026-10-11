# OfflineHandwerk Website

Static DE/EN product website with separate app privacy, website privacy and imprint pages. Node.js generates plain HTML and CSS: no runtime JavaScript, cookies, browser storage, analytics, external fonts or CDN assets.

## Run locally

Requires Node.js 24 or newer.

```sh
npm ci
npm run check
npm run preview
```

Open `http://127.0.0.1:4311/OfflineHandwerk-Website/de/`. `PORT` changes the preview port. The project base path is preserved locally to catch broken GitHub Pages links.

## Structure

- `src/locales/`: complete marketing/UI copy in German and English.
- `src/content/legal.mjs`: legal drafts; never remove warnings without confirmed facts and approval.
- `src/content/product.json`: pinned app tokens, entitlements and Free limits.
- `src/styles.css`: token-based responsive styles.
- `scripts/build.mjs`: escaped HTML, reciprocal hreflang, sitemap and local assets.
- `scripts/serve.mjs`: loopback-only production preview.
- `tests/site.test.mjs`: localization, route, legal scope, resource and feature checks.

## Deployment and approval

Settings → Pages must use **GitHub Actions**. The workflow builds/tests PRs and deploys **only main**. After owner review and merge, verify the published routes at:

`https://siems-software.github.io/OfflineHandwerk-Website/`

The previously empty repository needed a README-only main initialization to permit a PR. The implementation remains on its feature branch; no automatic merge. Configure github-pages environment approval if legal signoff must gate deployment after merge.

These are **draft notices, not legally approved policies**. See [legal review](docs/legal-review.md). Monthly/yearly prices and store destinations are unavailable placeholders: no invented prices, savings or QR destinations. Do not use draft policy URLs in store listings without legal approval.

## Update app facts

Builds neither download nor execute the app. Refresh the checked-in data from an existing app checkout explicitly:

```sh
git -C <app-checkout> fetch origin main
node scripts/sync-app.mjs <app-checkout> origin/main
npm run check
```

Review copy, limits and test expectations with every update. The sync reads declarative data and icon artwork, records the exact app commit and never contacts a store SDK/API.

## Languages and evidence

Add a complete locale JSON and matching legal text, extend `languages` in `src/config.mjs`, and update schema/count tests. The builder creates all routes and reciprocal hreflang. Switching languages preserves legal-page context without storing a preference. German legal text remains authoritative.

Product images in `public/assets/` are intentional shipped artwork of the real German-language web application, not native Android/iOS captures. See [asset sources](docs/asset-sources.md). Review screenshots belong in PR attachments, outside Git history.

Use Mullvad Browser for browser checks, including accessibility tooling in an isolated profile. Never substitute Chromium for a Lighthouse score. Keep unexecuted Lighthouse, legal-review and published-URL gates explicit.
