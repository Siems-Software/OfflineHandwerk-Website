import test from 'node:test';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { escapeHtml, renderLegalText } from '../src/lib/html.mjs';

test('untrusted strings cannot inject HTML, attributes or executable handlers', () => {
  const input = '<script>alert("secret")</script>&\' onerror="alert(1)"';
  const escaped = escapeHtml(input);
  const $ = load(`<p>${escaped}</p><img alt="${escaped}" src="/local.png">`);
  assert.equal($('script').length, 0);
  assert.equal($('[onerror]').length, 0);
  assert.equal($('p').text(), input);
  assert.equal($('img').attr('alt'), input);
  assert.ok(escaped.includes('&lt;script&gt;'));
  assert.ok(escaped.includes('&amp;'));
  assert.ok(escaped.includes('&quot;'));
  assert.ok(escaped.includes('&#39;'));
});
test('the contact address becomes one mailto link and an existing mailto is not doubled', () => {
  const email = 'info@offlinehandwerk.de';
  const link = `<a href="mailto:${email}">${email}</a>`;
  const bare = renderLegalText(`E-Mail: ${email}`);
  assert.equal(bare, `E-Mail: ${link}`);
  const marked = renderLegalText(`Email: [${email}](mailto:${email})`);
  assert.equal(marked, `Email: ${link}`);
  assert.equal(marked.split(link).length - 1, 1);
  const tel = renderLegalText('[+49 176 84328001](tel:+4917684328001)');
  assert.equal(tel, '<a href="tel:+4917684328001">+49 176 84328001</a>');
});
