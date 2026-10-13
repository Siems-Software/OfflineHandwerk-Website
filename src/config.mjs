export const site = {
  name: 'OfflineHandwerk',
  origin: 'https://siems-software.github.io',
  base: '/offlinehandwerk.github.io/',
  email: 'info@offlinehandwerk.de',
};
export const languages = ['de', 'en'];
export const routes = ['', 'privacy/', 'imprint/'];
export const privacyRedirects = [
  { from: 'privacy-app/', hash: 'app' },
  { from: 'privacy-website/', hash: 'website' },
];
export const pathFor = (lang, route = '') => `${site.base}${lang}/${route}`;
export const urlFor = (lang, route = '') => `${site.origin}${pathFor(lang, route)}`;
