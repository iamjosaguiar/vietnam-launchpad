/**
 * Settings the lead form endpoints read from the Worker environment.
 * Set them as secrets: `npx wrangler secret put SENDGRID_API_KEY` (and CONTACT_EMAIL,
 * FROM_EMAIL), or in the Cloudflare dashboard. For `npm run dev`, put them in .dev.vars.
 */
export interface LeadEnv {
  SENDGRID_API_KEY?: string;
  /** One or more addresses that receive leads, separated by commas. */
  CONTACT_EMAIL?: string;
  /** Sender address. Defaults to contact@vietnamlaunchpad.com. */
  FROM_EMAIL?: string;
}
