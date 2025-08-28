import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();

    // Validate required fields
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Log the contact request (for now)
    console.log('Contact form submission:', {
      firstName: firstName || 'Not provided',
      lastName: lastName || 'Not provided',
      email,
      subject: subject || 'General Inquiry',
      message,
      timestamp: new Date().toISOString(),
      targetEmail: 'r.kalimullin@atlantix.cc'
    });

    // TODO: Implement actual email sending
    // For now, we'll just log the data
    // In production, you would integrate with a service like:
    // - Nodemailer
    // - SendGrid
    // - Resend
    // - AWS SES

    // Example email content that would be sent:
    const emailContent = `
      New Contact Form Submission:
      
      Name: ${firstName || 'Not provided'} ${lastName || 'Not provided'}
      Email: ${email}
      Subject: ${subject || 'General Inquiry'}
      Message: ${message}
      Timestamp: ${new Date().toISOString()}
      
      This is a contact form submission from the AI Home Fix about page.
    `;

    console.log('Email content that would be sent:', emailContent);

    return NextResponse.json(
      { success: true, message: 'Contact request received' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
