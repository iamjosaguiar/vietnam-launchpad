import { NextRequest, NextResponse } from 'next/server';
import { PHONE_DISPLAY } from '@/lib/site';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function oneLine(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, max);
}

function block(value: unknown, max: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(/\r/g, '').trim().slice(0, max);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function sendMail(params: {
  apiKey: string;
  to: string;
  from: string;
  fromName: string;
  subject: string;
  html: string;
  replyTo?: { email: string; name: string };
}): Promise<Response> {
  return fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: params.to }], subject: params.subject }],
      from: { email: params.from, name: params.fromName },
      ...(params.replyTo ? { reply_to: params.replyTo } : {}),
      content: [{ type: 'text/html', value: params.html }],
    }),
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // The live form sends companyType, situation, company, and investmentSize.
    // Older clients sent nationality and message. Accept both so a valid
    // submission is never rejected for a field the form does not collect.
    const name = oneLine(body.name, 200);
    const email = oneLine(body.email, 254).toLowerCase();
    const phone = oneLine(body.phone, 40);
    const company = oneLine(body.company, 200);
    const companyType = oneLine(body.companyType, 120);
    const investmentSize = oneLine(body.investmentSize, 80);
    const service = oneLine(body.service, 120);
    const timeline = oneLine(body.timeline, 80);
    const nationality = oneLine(body.nationality, 80);
    const message = block(body.situation || body.message, 5000);

    if (!name || !email || !service) {
      return NextResponse.json(
        { error: 'Name, email, and service are required.' },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
    }

    const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
    const TO_EMAIL = process.env.CONTACT_EMAIL || 'jos@iamjosaguiar.com';
    const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@vietnamlaunchpad.com';

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || 'Not provided'),
      company: escapeHtml(company || 'Not provided'),
      companyType: escapeHtml(companyType || 'Not provided'),
      investmentSize: escapeHtml(investmentSize || 'Not specified'),
      service: escapeHtml(service),
      timeline: escapeHtml(timeline || 'Not specified'),
      nationality: escapeHtml(nationality || 'Not provided'),
      message: escapeHtml(message || 'No message provided').replace(/\n/g, '<br>'),
    };

    const emailSubject = `New Lead: ${service} - ${name}`;
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${safe.name}</p>
      <p><strong>Email:</strong> ${safe.email}</p>
      <p><strong>Phone:</strong> ${safe.phone}</p>
      <p><strong>Company:</strong> ${safe.company}</p>
      <p><strong>Organization type:</strong> ${safe.companyType}</p>
      <p><strong>Investment / budget:</strong> ${safe.investmentSize}</p>
      <p><strong>Nationality:</strong> ${safe.nationality}</p>
      <p><strong>Service Interest:</strong> ${safe.service}</p>
      <p><strong>Timeline:</strong> ${safe.timeline}</p>
      <p><strong>Message:</strong></p>
      <p>${safe.message}</p>
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Ho_Chi_Minh' })} ICT</em></p>
    `;

    const response = await sendMail({
      apiKey: SENDGRID_API_KEY,
      to: TO_EMAIL,
      from: FROM_EMAIL,
      fromName: 'Vietnam Launchpad Contact Form',
      subject: emailSubject,
      html: emailBody,
      replyTo: { email, name },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('SendGrid API error:', response.status, errorData);
      return NextResponse.json(
        { error: 'Failed to send your message. Please email us directly.' },
        { status: 502 }
      );
    }

    const autoResponderSubject = 'Thank You for Contacting Vietnam Launchpad';
    const autoResponderBody = `
      <h2>Thank you for reaching out, ${safe.name}!</h2>
      <p>We've received your inquiry about <strong>${safe.service}</strong> and will respond within 24 hours.</p>

      <h3>What happens next?</h3>
      <ol>
        <li>Our team will review your requirements</li>
        <li>We'll send you a detailed response via email</li>
        <li>If needed, we'll schedule a free consultation call</li>
      </ol>

      <p><strong>Need immediate assistance?</strong></p>
      <ul>
        <li>WhatsApp: ${PHONE_DISPLAY}</li>
        <li>Zalo: ${PHONE_DISPLAY}</li>
        <li>Email: jos@iamjosaguiar.com</li>
      </ul>

      <p>We're excited to help you with your Vietnam journey!</p>

      <p>Best regards,<br>
      The Vietnam Launchpad Team</p>
    `;

    try {
      const autoReply = await sendMail({
        apiKey: SENDGRID_API_KEY,
        to: email,
        from: FROM_EMAIL,
        fromName: 'Vietnam Launchpad',
        subject: autoResponderSubject,
        html: autoResponderBody,
      });
      if (!autoReply.ok) {
        console.error('SendGrid auto-reply error:', autoReply.status, await autoReply.text());
      }
    } catch (autoReplyError) {
      console.error('SendGrid auto-reply failed:', autoReplyError);
    }

    return NextResponse.json(
      { message: 'Form submitted successfully', success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
