# OfflineHandwerk Website

Static DE/EN product website with separate app privacy, website privacy and imprint pages. Node.js generates plain HTML and CSS: no runtime JavaScript, cookies, browser storage, analytics, external fonts or CDN assets.

## Website / target URLs

**GitHub Pages:** [https://siems-software.github.io/OfflineHandwerk-Website/](https://siems-software.github.io/OfflineHandwerk-Website/)

- [Deutsch](https://siems-software.github.io/OfflineHandwerk-Website/de/) (default)
- [English](https://siems-software.github.io/OfflineHandwerk-Website/en/)

### Repository name

No rename is required: this is a **project site**, whose default URL contains the repository name. `OfflineHandwerk-Website` is therefore valid.

An organization-wide site at `https://siems-software.github.io/` instead requires a repository named `Siems-Software.github.io`. That is a different site scope, not a prerequisite for this product website. See [GitHub's site types](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages).

Renaming this project would change its Pages path. Update `site.base` in `src/config.mjs`, documented URLs and route expectations, then rebuild and verify deployment. A custom domain is also possible, but requires a separate domain/Pages configuration and consistent `site.origin`/`site.base`; renaming alone does not configure it.

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

Settings → Pages should select **GitHub Actions** for this generated-site workflow. The workflow builds/tests PRs and deploys **only main**; the website links are listed above.

Changes are delivered through pull requests for owner review and merge; no automatic merge is enabled. Configure github-pages environment approval if legal signoff must gate deployment after merge.

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
