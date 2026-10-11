# Shipped asset sources

These images are product artwork requested for the landing page, not PR review captures.

- `app-icon.png`: exact app icon from `Siems-Software/OfflineHandwerk`, commit `ed9ef522e2701b2b38dad901e962a5064e26fb7b`, `packages/handwerkoffline/assets/icon.png`.
- `app-home.webp`: real running OfflineHandwerk production web export, dark theme, German, captured in installed Mullvad Browser with Selenium/geckodriver and a disposable browser profile. Measured viewport 450 × 900 px; top-aligned crop removes only empty background, preserving 450 × 700 px. Converted to WebP; interface is not redrawn, composited or fabricated.
- `app-calculations.webp`: same session/export, dark calculations overview, top-aligned 450 × 700 px crop. The shown job is the app's built-in sample (`sampleTitle`, `sampleCustomer`, `sampleLabor` in `packages/handwerkoffline/src/data/projects.ts`), not a customer record. The caption explicitly identifies sample data.
- App export capture came from the existing local `feat/issue-81-onboarding` checkout at `37c4dff`, whose interface uses the shared ui-core design. Capture is explicitly labelled **web preview**, not Android/iOS native execution. It does not demonstrate store prices or purchase behavior.

The app preview needed isolated-profile proxy disabling, non-private browsing, SharedArrayBuffer/WebAssembly support and resist-fingerprinting disabled to initialize the local SQLite fixture. These changes were not applied to the user's browser profile. Website checks do not need app storage accommodations.

All website resources are bundled locally. Captions identify German-language app screenshots even on the English marketing page. No screenshots assert native-device behavior or unverified store availability.

Pinned app reference for theme and plan data: `src/content/product.json`. Colors come from `packages/ui-core/src/themes.ts`; typography uses the app system-font convention. The landing headline extends the app's text scale for desktop marketing, without substituting a different color palette or loading a font service.
