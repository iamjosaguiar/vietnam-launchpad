import { NextRequest, NextResponse } from 'next/server';
import { CONTACT_EMAIL_DISPLAY, PHONE_DISPLAY } from '@/lib/site';
import { getLeadRecipients } from '@/lib/lead-recipients';
import { escapeHtml, leadSubject, sendAutoReply, sendMail } from '@/lib/lead-email';

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
    const TO_EMAILS = getLeadRecipients();
    const FROM_EMAIL = process.env.FROM_EMAIL || 'contact@vietnamlaunchpad.com';

    if (!SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare email content. Every submitted field is escaped before it is
    // placed in the HTML body; the plain-text part carries the raw values.
    const multiline = (value: unknown) => escapeHtml(value).replace(/\r?\n/g, '<br>');
    const submittedAt = new Date().toLocaleString();
    const emailSubject = leadSubject(
      location ? `Business setup (${location})` : 'Business setup',
      name
    );
    const emailText = [
      'New Business Setup Questionnaire Submission',
      `Submitted at: ${submittedAt}`,
      '',
      'Contact Information',
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Timeline: ${timeline || 'Not specified'}`,
      '',
      'Business Details',
      '',
      '1. Company Type & Activities:',
      `${companyType}`,
      '',
      '2. Proposed Capital:',
      `${capital || 'Not specified'}`,
      '',
      '3. Number of Shareholders:',
      `${shareholders || 'Not specified'}`,
      '',
      '4. Location:',
      `${location || 'Not specified'}`,
      '',
      '5. Shareholder Nationalities:',
      `${nationalities || 'Not specified'}`,
      '',
      '6. Business Model & Revenue:',
      `${businessModel}`,
      '',
      '7. Visa Requirements:',
      `${visaOption || 'Not specified'}`,
      '',
      'Next Steps:',
      '- Review the information provided',
      '- Schedule a free 1:1 consultation call',
      '- Prepare custom quotation based on requirements',
    ].join('\n');
    const emailBody = `
      <h2>New Business Setup Questionnaire Submission</h2>
      <p><strong>Submitted at:</strong> ${escapeHtml(submittedAt)}</p>
      <hr>

      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline || 'Not specified')}</p>

      <hr>
      <h3>Business Details</h3>

      <p><strong>1. Company Type & Activities:</strong></p>
      <p>${multiline(companyType)}</p>

      <p><strong>2. Proposed Capital:</strong></p>
      <p>${escapeHtml(capital || 'Not specified')}</p>

      <p><strong>3. Number of Shareholders:</strong></p>
      <p>${escapeHtml(shareholders || 'Not specified')}</p>

      <p><strong>4. Location:</strong></p>
      <p>${escapeHtml(location || 'Not specified')}</p>

      <p><strong>5. Shareholder Nationalities:</strong></p>
      <p>${multiline(nationalities || 'Not specified')}</p>

      <p><strong>6. Business Model & Revenue:</strong></p>
      <p>${multiline(businessModel)}</p>

      <p><strong>7. Visa Requirements:</strong></p>
      <p>${escapeHtml(visaOption || 'Not specified')}</p>

      <hr>
      <p><strong>Next Steps:</strong></p>
      <ul>
        <li>Review the information provided</li>
        <li>Schedule a free 1:1 consultation call</li>
        <li>Prepare custom quotation based on requirements</li>
      </ul>
    `;

    // Send the lead notification. A failure here must be reported to the user.
    const response = await sendMail({
      apiKey: SENDGRID_API_KEY,
      to: TO_EMAILS,
      from: FROM_EMAIL,
      fromName: 'Vietnam Launchpad - Business Setup',
      subject: emailSubject,
      text: emailText,
      html: emailBody,
      replyTo: { email, name },
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('SendGrid API error:', errorData);
      throw new Error('Failed to send email');
    }

    // Send auto-responder to customer
    const autoResponderSubject = 'Your Business Setup Questionnaire - Vietnam Launchpad';
    const autoResponderText = [
      `Thank you for your interest in setting up a business in Vietnam, ${name}!`,
      '',
      "We've received your detailed questionnaire and are excited to help you establish your business in Vietnam.",
      '',
      'What happens next?',
      '1. Review (Within 24 hours): Our team will carefully review your business requirements and prepare for your consultation',
      "2. Free Consultation Call: We'll schedule a 1:1 consultation to discuss your specific needs, answer questions, and provide expert guidance",
      "3. Custom Quotation: Based on your requirements, we'll provide a detailed quotation and timeline for your business setup",
      '',
      'Free 1:1 Consultation Included',
      "As a business setup client, your initial consultation is completely free. We'll discuss:",
      '- Optimal company structure for your business',
      '- Capital planning and recommendations',
      '- Visa options (investment visa vs. work permit)',
      '- Timeline and next steps',
      '- Any questions you have about doing business in Vietnam',
      '',
      'Your Submission Summary',
      `- Proposed Capital: ${capital || 'To be discussed'}`,
      `- Location: ${location || 'To be determined'}`,
      `- Timeline: ${timeline || 'Flexible'}`,
      `- Visa Needs: ${visaOption || 'To be discussed'}`,
      '',
      'Need immediate assistance?',
      `- Email: ${CONTACT_EMAIL_DISPLAY}`,
      `- WhatsApp: ${PHONE_DISPLAY}`,
      `- Zalo: ${PHONE_DISPLAY}`,
      '',
      'We look forward to helping you launch your business in Vietnam!',
      '',
      'Best regards,',
      'The Vietnam Launchpad Team',
      '',
      'Not ready for full business setup? We also offer paid 1:1 consultations at $100/hour for specific questions about tax, accounting, work permits, TRC, and living in Vietnam. Reply to this email if interested.',
    ].join('\n');
    const autoResponderBody = `
      <h2>Thank you for your interest in setting up a business in Vietnam, ${escapeHtml(name)}!</h2>

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
        <li><strong>Proposed Capital:</strong> ${escapeHtml(capital || 'To be discussed')}</li>
        <li><strong>Location:</strong> ${escapeHtml(location || 'To be determined')}</li>
        <li><strong>Timeline:</strong> ${escapeHtml(timeline || 'Flexible')}</li>
        <li><strong>Visa Needs:</strong> ${escapeHtml(visaOption || 'To be discussed')}</li>
      </ul>

      <h3>Need immediate assistance?</h3>
      <ul>
        <li><strong>Email:</strong> ${CONTACT_EMAIL_DISPLAY}</li>
        <li><strong>WhatsApp:</strong> ${PHONE_DISPLAY}</li>
        <li><strong>Zalo:</strong> ${PHONE_DISPLAY}</li>
      </ul>

      <p>We look forward to helping you launch your business in Vietnam!</p>

      <p>Best regards,<br>
      The Vietnam Launchpad Team</p>

      <hr>
      <p style="font-size: 12px; color: #6b7280;">
        <em>Not ready for full business setup? We also offer paid 1:1 consultations at $100/hour for specific questions about tax, accounting, work permits, TRC, and living in Vietnam. Reply to this email if interested.</em>
      </p>
    `;

    // The auto-reply is best effort: a failure is logged and never fails the request.
    await sendAutoReply({
      apiKey: SENDGRID_API_KEY,
      to: [{ email }],
      from: FROM_EMAIL,
      fromName: 'Vietnam Launchpad',
      subject: autoResponderSubject,
      text: autoResponderText,
      html: autoResponderBody,
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
