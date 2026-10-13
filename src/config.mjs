export const site = {
  name: 'OfflineHandwerk',
  origin: 'https://siems-software.github.io',
  base: '/offlinehandwerk.github.io/',
  email: 'info@offlinehandwerk.de',
};
export const languages = ['de', 'en'];
export const routes = ['', 'privacy-app/', 'privacy-website/', 'imprint/'];
export const pathFor = (lang, route = '') => `${site.base}${lang}/${route}`;
export const urlFor = (lang, route = '') => `${site.origin}${pathFor(lang, route)}`;
