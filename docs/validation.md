# Issue #1 implementation validation

## Scope

New static product website; there was no prior website UI to capture. The original empty repository was initialized with README/.gitignore only to make an implementation PR possible. Website code stays on a feature branch; owner approval and merge remain required.

## Verified implementation

- German default entry plus eight localized landing/app-privacy/website-privacy/imprint routes and a 404 page: ten generated HTML pages total.
- Full DE/EN source schemas and rendered content, reciprocal language/canonical metadata, legal-page-preserving language switch, main/skip navigation and local asset paths below the Pages project base.
- App-derived dark theme, system font, real product captures with web-preview/sample-data captions and full-size image links. No native-device/store-purchase verification is implied.
- Free domain limits and Solo/Business entitlements derived from app commit `ed9ef522e2701b2b38dad901e962a5064e26fb7b`; no unlimited Free catalog claim. Positionsvorlagen are reusable line-item templates, not PDF layouts.
- Monthly/yearly paid price placeholders appear together; store placeholders cannot trigger a fake download or purchase.
- German and English imprint and privacy pages render the October 2026 notices without a draft banner. App and GitHub Pages marketing-website processing remain separate.
- Escaped untrusted content, restrictive meta CSP, no runtime script, cookies, preference storage, external fonts/CDNs, analytics or tracking services in the generated site.
- GitHub Pages configured with `build_type=workflow`, HTTPS enforced, and a workflow that tests PRs but deploys only `main`.

## Executed checks

- `npm run check`: Prettier lint, production build, **17 passing Node tests**, zero failures. Covers HTML injection escaping, real HTTP serving (including Windows path-prefix regression), assets, language/SEO metadata, all internal links/anchors, legal scope, actual Free limits and entitlement cells, non-interactive store placeholders and sitemap completeness.
- `npm audit --audit-level=moderate`: zero vulnerabilities at the time of the check.
- Real Mullvad Browser via Selenium/geckodriver in a disposable profile: **22 passing page/language/viewport combinations**. Landing widths 320, 360, 430, 768 and 1280 px; all legal routes at 360 and 1280 px. No horizontal document overflow, broken eager images or foreign resource origins. Root defaults to German; landing language switch, legal switch, keyboard skip link and full-size product image navigation exercised.
- axe-core WCAG 2 A/AA and 2.1 AA rules run inside Mullvad: **zero detected violations**. Non-text arrow/check/infinity glyphs are marked incomplete by axe's text-contrast rule (non-text content); a separate check reads their real computed foreground and nearest opaque background, rejects translucent ancestors, and verifies at least 3:1 non-text contrast. This is not a Lighthouse score or a full accessibility certification.
- Direct-origin storage check: empty cookies, localStorage and sessionStorage. Actual preview HTTP responses set no cookies.
- Product/media evidence captured from real rendering, not generated mockups. Original review captures and `browser-report.json` remain outside the checkout under the local artifacts directory and are delivered as GitHub PR attachments, not committed review images. The screenshot source PNGs are distinct from intentional shipped WebP product artwork.

Browser configuration: installed Mullvad executable, new Selenium profile, loopback proxy disabled, resist-fingerprinting disabled for precise test fixtures. Mobile captures use an iframe containing the unchanged website, with dimensions measured inside the frame; they are responsive webpage evidence, not native phone execution. Desktop full-page capture is direct. Production-browser/network behavior is not inferred from these local checks.

## Outstanding acceptance/release gates

1. Owner review and merge, successful `main` Pages deployment, and real published HTTPS route/network verification. No live deployment is claimed by enabling Pages settings or building files.
2. Legal/provider/account/retention facts and legal approval in [legal review](legal-review.md). Draft warnings are not a substitute for lawful publication; do not treat this draft as an approved store policy.
3. Lighthouse green scores remain **unexecuted**. Lighthouse's Chromium/CDP runner is incompatible with the standing Mullvad-only browser requirement; no substitute browser or fabricated score was used. The owner must explicitly approve a Lighthouse exception or accept the documented alternative checks.
4. Real store URLs and verified store pricing remain intentionally pending; the issue explicitly allows store placeholders.

Issue #1 stays open (`Refs #1`, not `Closes #1`) because live deployment and performance/legal publication gates remain outstanding. The implementation PR is for review, not a production-release approval.
