import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Explicitly force Node.js runtime for Vercel Serverless Function
export const runtime = "nodejs";

interface ContactRequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  botField?: string; // Honeypot field
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, email, subject, message, botField } = body;

    // 1. Honeypot check (anti-spam)
    if (botField) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Strict Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length < 3) {
      return NextResponse.json(
        { error: "Please provide a subject line (at least 3 characters)." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a detailed message (at least 10 characters)." },
        { status: 400 }
      );
    }

    // Sanitize values
    const safeName = name.trim();
    const safeEmail = email.trim();
    const safeSubject = subject.trim();
    const safeMessage = message.trim();

    // 3. SMTP Environment Variables Check
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail =
      process.env.CONTACT_RECEIVER || "junaidislam441@gmail.com";

    // If SMTP credentials are missing, provide clean graceful development fallback
    if (!smtpUser || !smtpPass) {
      console.warn(
        "[Contact API Warning] SMTP credentials (SMTP_USER / SMTP_PASS) not configured in environment. Operating in mock mode."
      );
      return NextResponse.json({
        success: true,
        mock: true,
        message:
          "Message accepted in development test mode. Please configure SMTP_USER and SMTP_PASS in .env.local or Vercel environment variables for live delivery.",
      });
    }

    // 4. Create Nodemailer Transporter
    const isSecure = smtpPort === 465;
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure, // true for 465, false for 587
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // 5. Construct HTML & Plain Text Email
    const mailOptions = {
      from: `"${safeName}" <${smtpUser}>`,
      replyTo: safeEmail,
      to: recipientEmail,
      subject: `[Portfolio Inquiry] ${safeSubject}`,
      text: `New message from ${safeName} (${safeEmail}):\n\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 12px; background-color: #ffffff;">
          <div style="border-bottom: 2px solid #09090b; padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #09090b; font-size: 20px; font-weight: 700;">New Portfolio Client Inquiry</h2>
            <p style="margin: 4px 0 0 0; color: #71717a; font-size: 13px;">Sent via Muhammad Junaid's Portfolio</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; width: 90px; font-weight: 600;">Sender:</td>
              <td style="padding: 8px 0; color: #09090b; font-weight: 600;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: 600;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${safeEmail}" style="color: #09090b; text-decoration: underline;">${safeEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: 600;">Subject:</td>
              <td style="padding: 8px 0; color: #09090b;">${safeSubject}</td>
            </tr>
          </table>

          <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #71717a;">Message:</h4>
            <p style="margin: 0; color: #18181b; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
          </div>

          <div style="border-top: 1px solid #e4e4e7; padding-top: 16px; text-align: center; color: #a1a1aa; font-size: 12px;">
            Portfolio Contact System · Sabzazar, Lahore, Pakistan
          </div>
        </div>
      `,
    };

    // 6. CRITICAL: Await transporter.sendMail inside try/catch before returning response
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. I will get back to you shortly!",
    });
  } catch (error: unknown) {
    console.error("[Contact API Error]:", error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to send email message. Please try again or reach out directly.";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
