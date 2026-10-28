/** Public phone number. Display form is for people; E.164 is for tel:, WhatsApp, and schema. */
export const PHONE_DISPLAY = '+84 39 326 6105';
export const PHONE_E164 = '+84393266105';
export const PHONE_TEL = `tel:${PHONE_E164}`;
export const PHONE_WHATSAPP = `https://wa.me/${PHONE_E164.replace('+', '')}`;

/** Public contact emails, shown on the site and in confirmation emails. */
export const CONTACT_EMAILS = ['voyennhi187@gmail.com', 'jos@profitgeeks.com.au'] as const;
export const CONTACT_EMAIL_DISPLAY = CONTACT_EMAILS.join(', ');

/**
 * Holafly Plans affiliate URL. The discount code is applied by the link.
 * Keep this as the only copy of the URL.
 */
export const HOLAFLY_PLANS_URL =
  'https://esim.holafly.com/plans/?ref=navbar&discount_code=VNLAUNCHPAD';

export const HOLAFLY_DISCOUNT_CODE = 'VNLAUNCHPAD';
export const HOLAFLY_GUIDE_PATH = '/guides/best-esim-vietnam' as const;
