// Quick sanity check for src/lib/lead-email.ts. Run with: node scripts/check-lead-email.mjs
// It makes no network calls. Requires a Node version that can import .ts files.
import assert from 'node:assert/strict';
import { escapeHtml, leadSubject, buildMailPayload } from '../src/lib/lead-email.ts';

const hostile = '<script>alert(1)</script> &quot; "x" \'y\'';
const escaped = escapeHtml(hostile);
assert.ok(!escaped.includes('<script>'), 'script tag must be escaped');
assert.ok(escaped.includes('&lt;script&gt;alert(1)&lt;/script&gt;'));
assert.ok(escaped.includes('&amp;quot;'), 'an existing entity must be escaped, not passed through');
assert.ok(escaped.includes('&quot;x&quot;') && escaped.includes('&#39;y&#39;'));
assert.equal(escapeHtml(undefined), '');
assert.equal(escapeHtml(42), '42');

assert.equal(
  leadSubject('enterprise-market-entry', 'Jane Doe'),
  '[Vietnam Launchpad] New lead: enterprise-market-entry - Jane Doe'
);
assert.equal(
  leadSubject('Business setup (hanoi)', 'Jane\r\nBcc: x@example.com'),
  '[Vietnam Launchpad] New lead: Business setup (hanoi) - Jane Bcc: x@example.com'
);

const payload = buildMailPayload({
  to: [{ email: 'to@example.com' }],
  from: 'contact@vietnamlaunchpad.com',
  fromName: 'Vietnam Launchpad',
  subject: 's',
  text: 'plain',
  html: '<p>html</p>',
  replyTo: { email: 'sub@example.com', name: 'Sub' },
});
assert.deepEqual(payload.content.map((c) => c.type), ['text/plain', 'text/html']);
assert.equal(payload.reply_to.email, 'sub@example.com');
assert.equal(payload.from.email, 'contact@vietnamlaunchpad.com');
assert.equal('reply_to' in buildMailPayload({ to: [], from: 'a@b.co', fromName: 'n', subject: 's', text: 't', html: 'h' }), false);

console.log('lead-email checks passed');
