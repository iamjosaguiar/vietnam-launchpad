import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, nationality, service, message, timeline } = body;

    // Validate required fields
    if (!name || !email || !nationality || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // SendGrid API configuration
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

    // Prepare email content
    const emailSubject = `New Lead: ${service} - ${name}`;
    const emailBody = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Nationality:</strong> ${nationality}</p>
      <p><strong>Service Interest:</strong> ${service}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${message || 'No message provided'}</p>
      <hr>
      <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
    `;

    // Send email via SendGrid API
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: TO_EMAIL }],
            subject: emailSubject,
          },
        ],
        from: {
          email: FROM_EMAIL,
          name: 'Vietnam Launchpad Contact Form',
        },
        reply_to: {
          email: email,
          name: name,
        },
        content: [
          {
            type: 'text/html',
            value: emailBody,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('SendGrid API error:', errorData);
      throw new Error('Failed to send email');
    }

    // Send auto-responder to customer
    const autoResponderSubject = 'Thank You for Contacting Vietnam Launchpad';
    const autoResponderBody = `
      <h2>Thank you for reaching out, ${name}!</h2>
      <p>We've received your inquiry about <strong>${service}</strong> and will respond within 24 hours.</p>

      <h3>What happens next?</h3>
      <ol>
        <li>Our team will review your requirements</li>
        <li>We'll send you a detailed response via email</li>
        <li>If needed, we'll schedule a free consultation call</li>
      </ol>

      <p><strong>Need immediate assistance?</strong></p>
      <ul>
        <li>WhatsApp: +84 (0)28 1234 5678</li>
        <li>Zalo: +84 (0)28 1234 5678</li>
        <li>Email: jos@iamjosaguiar.com</li>
      </ul>

      <p>We're excited to help you with your Vietnam journey!</p>

      <p>Best regards,<br>
      The Vietnam Launchpad Team</p>
    `;

    await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: email }],
            subject: autoResponderSubject,
          },
        ],
        from: {
          email: FROM_EMAIL,
          name: 'Vietnam Launchpad',
        },
        content: [
          {
            type: 'text/html',
            value: autoResponderBody,
          },
        ],
      }),
    });

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
