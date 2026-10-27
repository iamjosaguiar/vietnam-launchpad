// Shared, verified copy for e-visa facts and trust lines (see visas.ts for sources).

export const EVISA_PORTAL_URL = 'https://evisa.gov.vn';

export const E_VISA_FACTS =
  'E-visa: US$25 single entry, US$50 multiple entry. Processing 3 working days. Valid up to 90 days. Available to citizens of all countries and territories. Apply on the official portal:';

export const E_VISA_LINE_TEXT = `${E_VISA_FACTS} evisa.gov.vn`;

export const PRIVATE_LINE = 'Vietnam Launchpad is a private company, not the Vietnamese Government.';

export const FEE_SPLIT_LINE =
  'The US$25 or US$50 government fee is paid to the Vietnamese Government on evisa.gov.vn. Our service fee is separate.';

export const INDONESIA_CHECK_LINE =
  'Check with the Indonesian or Vietnamese authorities, rules changed July 2026.';

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/** "2026-10-27" -> "27 October 2026" */
export function formatVerifiedDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function lastVerifiedLine(iso: string): string {
  return `Last verified: ${formatVerifiedDate(iso)}`;
}
