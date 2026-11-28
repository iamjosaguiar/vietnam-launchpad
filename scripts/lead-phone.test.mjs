import assert from 'node:assert/strict';
import { test } from 'node:test';
import { countryName, flagEmoji, formatLeadPhone } from '../src/lib/lead-phone.ts';

test('flagEmoji builds regional indicator pairs and rejects bad codes', () => {
  assert.equal(flagEmoji('VN'), '🇻🇳');
  assert.equal(flagEmoji('GB'), '🇬🇧');
  assert.equal(flagEmoji('vn'), '');
  assert.equal(flagEmoji('VNM'), '');
});

test('countryName returns English names', () => {
  assert.equal(countryName('VN'), 'Vietnam');
  assert.equal(countryName('AU'), 'Australia');
  assert.equal(countryName('US'), 'United States');
  assert.equal(countryName('GB'), 'United Kingdom');
});

test('VN mobile in E.164 is shown with flag, international format and country', () => {
  const phone = formatLeadPhone('+84901234567');
  assert.equal(phone.e164, '+84901234567');
  assert.equal(phone.text, '🇻🇳 +84 901 234 567 (Vietnam)');
  assert.equal(phone.html, '<a href="tel:+84901234567">🇻🇳 +84 901 234 567 (Vietnam)</a>');
});

test('AU, US and GB numbers are formatted for their country', () => {
  assert.equal(formatLeadPhone('+61412345678').text, '🇦🇺 +61 412 345 678 (Australia)');
  assert.equal(formatLeadPhone('+12015550123').text, '🇺🇸 +1 201 555 0123 (United States)');
  assert.equal(formatLeadPhone('+447400123456').text, '🇬🇧 +44 7400 123456 (United Kingdom)');
  assert.equal(formatLeadPhone('+61412345678').e164, '+61412345678');
});

test('spaced or punctuated international input normalises to E.164', () => {
  const phone = formatLeadPhone(' +84 90-123-4567 ');
  assert.equal(phone.e164, '+84901234567');
  assert.equal(phone.raw, '+84 90-123-4567');
});

test('national-looking input uses the default country hint', () => {
  const vn = formatLeadPhone('0901234567', 'VN');
  assert.equal(vn.e164, '+84901234567');
  assert.equal(vn.text, '🇻🇳 +84 901 234 567 (Vietnam)');

  const au = formatLeadPhone('0412 345 678', 'AU');
  assert.equal(au.e164, '+61412345678');

  // A leading + wins over the hint.
  assert.equal(formatLeadPhone('+61412345678', 'VN').e164, '+61412345678');
});

test('a number that does not parse is shown raw with country unknown', () => {
  const noHint = formatLeadPhone('6047163738');
  assert.equal(noHint.e164, null);
  assert.equal(noHint.text, '6047163738 (country unknown)');
  assert.ok(noHint.html.includes('6047163738'));
  assert.ok(!noHint.html.includes('tel:'));

  // Not a valid VN number either, so the hint must not invent a country.
  const wrongHint = formatLeadPhone('6047163738', 'VN');
  assert.equal(wrongHint.e164, null);
  assert.equal(wrongHint.text, '6047163738 (country unknown)');

  assert.equal(formatLeadPhone('call me maybe').text, 'call me maybe (country unknown)');
});

test('empty or missing values show Not provided', () => {
  for (const value of ['', '   ', undefined, null, 42, {}]) {
    const phone = formatLeadPhone(value);
    assert.equal(phone.text, 'Not provided');
    assert.equal(phone.html, 'Not provided');
    assert.equal(phone.e164, null);
  }
});

test('hostile input is escaped in HTML and collapsed to one line', () => {
  const phone = formatLeadPhone('<img src=x onerror=alert(1)>\r\n"x"');
  assert.equal(phone.e164, null);
  assert.ok(!phone.html.includes('<img'));
  assert.ok(phone.html.includes('&lt;img src=x onerror=alert(1)&gt;'));
  assert.ok(phone.html.includes('&quot;x&quot;'));
  assert.ok(!phone.text.includes('\n') && !phone.text.includes('\r'));
  assert.ok(phone.text.endsWith('(country unknown)'));
});

test('long input is capped before parsing', () => {
  const phone = formatLeadPhone('1'.repeat(500));
  assert.equal(phone.raw.length, 40);
  assert.equal(phone.e164, null);
});
