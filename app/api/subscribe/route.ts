import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.trim()) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Log the newsletter subscription (for now)
    console.log('Newsletter subscription:', {
      email,
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
    // - Mailchimp API

    // Example email content that would be sent:
    const emailContent = `
      New Newsletter Subscription:
      
      Email: ${email}
      Timestamp: ${new Date().toISOString()}
      Source: AI Home Fix Blog Page
      
      This is a new newsletter subscription from the AI Home Fix blog.
    `;

    console.log('Email content that would be sent:', emailContent);

    return NextResponse.json(
      { success: true, message: 'Subscription successful' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Newsletter subscription API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
