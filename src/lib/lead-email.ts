const SENDGRID_SEND_URL = 'https://api.sendgrid.com/v3/mail/send';

/**
 * Escapes a value for safe interpolation into an HTML email body.
 * Non-string values are converted to strings first.
 */
export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Collapses a value to a single trimmed line so it is safe inside an email
 * subject, and caps its length.
 */
export function subjectPart(value: unknown, max = 80): string {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);
}

/** Builds the notification subject: "[Vietnam Launchpad] New lead: <what> - <name>". */
export function leadSubject(what: unknown, name: unknown): string {
  return `[Vietnam Launchpad] New lead: ${subjectPart(what, 100)} - ${subjectPart(name, 80)}`;
}

export type MailParams = {
  apiKey: string;
  to: { email: string }[];
  from: string;
  fromName: string;
  subject: string;
  text: string;
  html: string;
  replyTo?: { email: string; name: string };
};

/** SendGrid v3 payload with the plain-text part first, then the HTML part. */
export function buildMailPayload(params: Omit<MailParams, 'apiKey'>) {
  return {
    personalizations: [{ to: params.to, subject: params.subject }],
    from: { email: params.from, name: params.fromName },
    ...(params.replyTo ? { reply_to: params.replyTo } : {}),
    content: [
      { type: 'text/plain', value: params.text },
      { type: 'text/html', value: params.html },
    ],
  };
}

export async function sendMail(params: MailParams): Promise<Response> {
  const { apiKey, ...message } = params;
  return fetch(SENDGRID_SEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(buildMailPayload(message)),
  });
}

/**
 * Sends the auto-reply to the submitter. Never throws: a failed auto-reply must
 * not fail the request or hide the result of the lead notification. Only the
 * HTTP status or error name is logged, never addresses, bodies or secrets.
 */
export async function sendAutoReply(params: MailParams): Promise<boolean> {
  try {
    const response = await sendMail(params);
    if (!response.ok) {
      console.error('Auto-reply send failed with SendGrid status', response.status);
      return false;
    }
    return true;
  } catch (error) {
    const kind = error instanceof Error ? error.name : 'UnknownError';
    console.error('Auto-reply send failed with error', kind);
    return false;
  }
}
