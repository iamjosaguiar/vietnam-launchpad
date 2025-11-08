import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      companyType,
      capital,
      shareholders,
      location,
      nationalities,
      businessModel,
      visaOption,
      timeline
    } = body;

    // Validate required fields
    if (!name || !email || !companyType || !businessModel) {
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
    const emailSubject = `New Business Setup Lead: ${name} - ${location}`;
    const emailBody = `
      <h2>New Business Setup Questionnaire Submission</h2>
      <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      <hr>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>

      <hr>
      <h3>Business Details</h3>

      <p><strong>1. Company Type & Activities:</strong></p>
      <p>${companyType}</p>

      <p><strong>2. Proposed Capital:</strong></p>
      <p>${capital || 'Not specified'}</p>

      <p><strong>3. Number of Shareholders:</strong></p>
      <p>${shareholders || 'Not specified'}</p>

      <p><strong>4. Location:</strong></p>
      <p>${location || 'Not specified'}</p>

      <p><strong>5. Shareholder Nationalities:</strong></p>
      <p>${nationalities || 'Not specified'}</p>

      <p><strong>6. Business Model & Revenue:</strong></p>
      <p>${businessModel}</p>

      <p><strong>7. Visa Requirements:</strong></p>
      <p>${visaOption || 'Not specified'}</p>

      <hr>
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Review the information provided</li>
        <li>Schedule a free 1:1 consultation call</li>
        <li>Prepare custom quotation based on requirements</li>
      </ul>
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
          name: 'Vietnam Launchpad - Business Setup',
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
    const autoResponderSubject = 'Your Business Setup Questionnaire - Vietnam Launchpad';
    const autoResponderBody = `
      <h2>Thank you for your interest in setting up a business in Vietnam, ${name}!</h2>

      <p>We've received your detailed questionnaire and are excited to help you establish your business in Vietnam.</p>

      <h3>What happens next?</h3>
      <ol>
        <li><strong>Review (Within 24 hours):</strong> Our team will carefully review your business requirements and prepare for your consultation</li>
        <li><strong>Free Consultation Call:</strong> We'll schedule a 1:1 consultation to discuss your specific needs, answer questions, and provide expert guidance</li>
        <li><strong>Custom Quotation:</strong> Based on your requirements, we'll provide a detailed quotation and timeline for your business setup</li>
      </ol>

      <div style="background-color: #f3f4f6; padding: 20px; border-left: 4px solid #2563eb; margin: 20px 0;">
        <h3 style="margin-top: 0;">Free 1:1 Consultation Included</h3>
        <p>As a business setup client, your initial consultation is completely free. We'll discuss:</p>
        <ul>
          <li>Optimal company structure for your business</li>
          <li>Capital planning and recommendations</li>
          <li>Visa options (investment visa vs. work permit)</li>
          <li>Timeline and next steps</li>
          <li>Any questions you have about doing business in Vietnam</li>
        </ul>
      </div>

      <h3>Your Submission Summary</h3>
      <ul>
        <li><strong>Proposed Capital:</strong> ${capital || 'To be discussed'}</li>
        <li><strong>Location:</strong> ${location || 'To be determined'}</li>
        <li><strong>Timeline:</strong> ${timeline || 'Flexible'}</li>
        <li><strong>Visa Needs:</strong> ${visaOption || 'To be discussed'}</li>
      </ul>

      <h3>Need immediate assistance?</h3>
      <ul>
        <li><strong>Email:</strong> jos@iamjosaguiar.com</li>
        <li><strong>WhatsApp:</strong> +84 (0)28 1234 5678</li>
        <li><strong>Zalo:</strong> +84 (0)28 1234 5678</li>
      </ul>

      <p>We look forward to helping you launch your business in Vietnam!</p>

      <p>Best regards,<br>
      The Vietnam Launchpad Team</p>

      <hr>
      <p style="font-size: 12px; color: #6b7280;">
        <em>Not ready for full business setup? We also offer paid 1:1 consultations at $100/hour for specific questions about tax, accounting, work permits, TRC, and living in Vietnam. Reply to this email if interested.</em>
      </p>
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
      { message: 'Questionnaire submitted successfully', success: true },
      { status: 200 }
    );

  } catch (error) {
    console.error('Get started form error:', error);
    return NextResponse.json(
      { error: 'Failed to process questionnaire submission' },
      { status: 500 }
    );
  }
}
