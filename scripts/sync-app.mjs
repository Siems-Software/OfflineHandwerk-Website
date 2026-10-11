// Refresh the checked-in website snapshot from an explicitly chosen local app checkout.
// Reads data only: never executes the app's TypeScript or contacts a service.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
const checkout = process.argv[2];
const revision = process.argv[3] || 'origin/main';
if (!checkout) throw new Error('Usage: node scripts/sync-app.mjs <local-app-checkout> [revision]');
const read = (path) =>
  execFileSync('git', ['-C', checkout, 'show', `${revision}:${path}`], { encoding: 'utf8' });
const commit = execFileSync('git', ['-C', checkout, 'rev-parse', revision], {
  encoding: 'utf8',
}).trim();
const plansFile = 'packages/handwerkoffline/src/access/plans.ts';
const plansText = read(plansFile);
const entitlements = {};
for (const name of ['free', 'solo', 'business']) {
  const block = plansText.match(new RegExp(`${name}: \\{([\\s\\S]*?)\\n  \\}`))?.[1];
  if (!block) throw new Error(`Missing plan: ${name}`);
  entitlements[name] = Object.fromEntries(
    [...block.matchAll(/(can\w+): (true|false)/g)].map(([, k, v]) => [k, v === 'true']),
  );
  if (Object.keys(entitlements[name]).length !== 9)
    throw new Error(`Unexpected entitlements: ${name}`);
}
const limitSources = {
  calculations: ['customers', 'PROJECT'],
  customers: ['customers', 'CUSTOMER'],
  employees: ['employees', 'EMPLOYEE'],
  materials: ['materials', 'MATERIAL'],
  services: ['services', 'SERVICE'],
  taxes: ['taxes', 'TAX'],
  surcharges: ['surchargePresets', 'SURCHARGE'],
};
const limits = {};
for (const [name, [file, constant]] of Object.entries(limitSources)) {
  const text = read(`packages/handwerkoffline-domain/src/${file}.ts`);
  const match = text.match(new RegExp(`export const FREE_${constant}_LIMIT = (\\d+);`));
  if (!match) throw new Error(`Missing limit: ${name}`);
  limits[name] = Number(match[1]);
}
const themeText = read('packages/ui-core/src/themes.ts');
const themes = {};
for (const name of ['light', 'dark']) {
  const block = themeText.match(new RegExp(`${name}: \\{([\\s\\S]*?)\\n  \\}`))?.[1];
  themes[name] = Object.fromEntries(
    [...block.matchAll(/(\w+): "(#[A-Fa-f0-9]{6})"/g)].map(([, k, v]) => [k, v]),
  );
  if (Object.keys(themes[name]).length !== 20) throw new Error(`Unexpected theme: ${name}`);
}
mkdirSync('src/content', { recursive: true });
writeFileSync(
  'src/content/product.json',
  JSON.stringify(
    {
      source: {
        repository: 'Siems-Software/OfflineHandwerk',
        commit,
        plansFile,
        themeFile: 'packages/ui-core/src/themes.ts',
      },
      entitlements,
      limits,
      themes,
    },
    null,
    2,
  ) + '\n',
);
mkdirSync('public/assets', { recursive: true });
const icon = execFileSync('git', [
  '-C',
  checkout,
  'show',
  `${revision}:packages/handwerkoffline/assets/icon.png`,
]);
writeFileSync(resolve('public/assets/app-icon.png'), icon);
console.log(`Synced app tokens, entitlements, Free limits and icon from ${commit}`);
