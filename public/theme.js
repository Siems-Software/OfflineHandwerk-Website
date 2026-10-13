(() => {
  const key = 'theme';
  const root = document.documentElement;
  let stored = null;
  try {
    stored = localStorage.getItem(key);
  } catch {
    stored = null;
  }
  if (stored === 'light' || stored === 'dark') root.dataset.theme = stored;

  const active = () =>
    root.dataset.theme === 'light' || root.dataset.theme === 'dark'
      ? root.dataset.theme
      : window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

  const onReady = () => {
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    button.addEventListener('click', () => {
      const next = active() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem(key, next);
      } catch {
        stored = null;
      }
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', onReady);
  else onReady();
})();
