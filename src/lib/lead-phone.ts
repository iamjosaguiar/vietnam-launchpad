import { parsePhoneNumberFromString, type CountryCode } from 'libphonenumber-js';
import { escapeHtml } from './lead-email.ts';

const NOT_PROVIDED = 'Not provided';
const MAX_LENGTH = 40;

export type LeadPhone = {
  /** The submitted value collapsed to one trimmed line, or '' when missing. */
  raw: string;
  /** E.164 form (e.g. +84901234567) when the number parses as valid, otherwise null. */
  e164: string | null;
  /** Plain-text display line for the lead email. */
  text: string;
  /** HTML display for the lead email. User text is escaped. */
  html: string;
};

/** Turns an ISO 3166-1 alpha-2 code into its flag emoji (regional indicator pair). */
export function flagEmoji(country: string): string {
  if (!/^[A-Z]{2}$/.test(country)) return '';
  return String.fromCodePoint(...[...country].map((c) => 0x1f1e6 + c.charCodeAt(0) - 65));
}

let regionNames: Intl.DisplayNames | null | undefined;

/** English country name for an ISO code, falling back to the code itself. */
export function countryName(country: string): string {
  if (regionNames === undefined) {
    try {
      regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
    } catch {
      regionNames = null;
    }
  }
  try {
    return regionNames?.of(country) || country;
  } catch {
    return country;
  }
}

/**
 * Normalises a submitted phone number for a lead notification. The value is
 * collapsed to one line and capped. If it parses as a valid number it is shown
 * as "<flag> <international format> (<country>)" and linked with tel:<E.164>
 * in HTML. A value that does not parse is shown raw with "country unknown".
 * The defaultCountry hint is used only for numbers without a leading +.
 */
export function formatLeadPhone(value: unknown, defaultCountry?: CountryCode): LeadPhone {
  const raw =
    typeof value === 'string' ? value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, MAX_LENGTH) : '';

  if (!raw) {
    return { raw, e164: null, text: NOT_PROVIDED, html: NOT_PROVIDED };
  }

  const parsed = parsePhoneNumberFromString(raw, defaultCountry);
  if (!parsed || !parsed.isValid()) {
    const text = `${raw} (country unknown)`;
    return { raw, e164: null, text, html: escapeHtml(text) };
  }

  const e164 = parsed.number;
  const international = parsed.formatInternational();
  const text = parsed.country
    ? `${flagEmoji(parsed.country)} ${international} (${countryName(parsed.country)})`
    : `${international} (non-geographic)`;
  return {
    raw,
    e164,
    text,
    html: `<a href="tel:${escapeHtml(e164)}">${escapeHtml(text)}</a>`,
  };
}
