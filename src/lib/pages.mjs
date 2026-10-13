export const subpages = ['privacy', 'imprint', 'privacy-app', 'privacy-website'];

export const subpagePaths = () => subpages.map((page) => ({ params: { page } }));
