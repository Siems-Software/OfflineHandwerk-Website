import { createHash } from 'node:crypto';

// Locale, issue-derived and legal strings are data, never trusted HTML.
export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );

// A paragraph may contain one [label](tel:+digits) token. Everything else stays text.
export const renderLegalText = (text) =>
  String(text)
    .split(/(\[[^\]]+\]\(tel:\+\d+\))/g)
    .map((part) => {
      const link = /^\[([^\]]+)\]\((tel:\+\d+)\)$/.exec(part);
      if (!link) return escapeHtml(part).replace(/\n/g, '<br>');
      return `<a href="${escapeHtml(link[2])}">${escapeHtml(link[1])}</a>`;
    })
    .join('');

export const hashRedirect = (target) => {
  const script = `location.replace(${JSON.stringify(target)}+location.hash)`;
  const csp = `script-src 'sha256-${createHash('sha256').update(script).digest('base64')}';`;
  return { script, csp };
};
