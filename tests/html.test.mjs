import test from 'node:test';
import assert from 'node:assert/strict';
import { load } from 'cheerio';
import { escapeHtml } from '../src/lib/html.mjs';

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
