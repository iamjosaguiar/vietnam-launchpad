const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const DEFAULT_RECIPIENT = 'jos@iamjosaguiar.com';

/**
 * Lead notification recipients, read from CONTACT_EMAIL.
 * Accepts one address or several separated by commas, semicolons, or spaces,
 * for example "a@example.com,b@example.com". Invalid entries and duplicates
 * are dropped. Falls back to the default address when nothing valid is set.
 */
export function getLeadRecipients(): { email: string }[] {
  const raw = process.env.CONTACT_EMAIL || '';
  const seen = new Set<string>();
  const recipients: { email: string }[] = [];

  for (const part of raw.split(/[,;\s]+/)) {
    const email = part.trim();
    const key = email.toLowerCase();
    if (!email || !EMAIL_RE.test(email) || seen.has(key)) continue;
    seen.add(key);
    recipients.push({ email });
  }

  return recipients.length > 0 ? recipients : [{ email: DEFAULT_RECIPIENT }];
}
