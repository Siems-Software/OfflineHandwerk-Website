import { createHash } from 'node:crypto';

// Locale, issue-derived and legal strings are data, never trusted HTML.
export const escapeHtml = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char],
  );

const contactEmail = 'info@offlinehandwerk.de';
const mailtoLink = `<a href="mailto:${contactEmail}">${contactEmail}</a>`;

// A paragraph may contain [label](tel:+digits) or [label](mailto:address) tokens.
// A bare contact address in the remaining text becomes the same mailto link.
export const renderLegalText = (text) =>
  String(text)
    .split(/(\[[^\]]+\]\((?:tel:\+\d+|mailto:[^)\s]+)\))/g)
    .map((part) => {
      const link = /^\[([^\]]+)\]\((tel:\+\d+|mailto:[^)\s]+)\)$/.exec(part);
      if (link) return `<a href="${escapeHtml(link[2])}">${escapeHtml(link[1])}</a>`;
      return escapeHtml(part).replace(/\n/g, '<br>').replaceAll(contactEmail, mailtoLink);
    })
    .join('');

export const hashRedirect = (target) => {
  const script = `location.replace(${JSON.stringify(target)}+location.hash)`;
  const csp = `script-src 'self' 'sha256-${createHash('sha256').update(script).digest('base64')}';`;
  return { script, csp };
};
