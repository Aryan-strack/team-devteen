import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // ensure Node runtime for nodemailer

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  service?: string | null;
  price?: string | null;
  honey?: string; // honeypot (anti-bot)
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body: Body = await req.json();

    // Simple anti-bot: agar hidden field filled ho, pretend success
    if (body.honey) {
      return NextResponse.json({ success: true });
    }

    const {
      name = "",
      email = "",
      subject = "",
      message = "",
      service = null,
      price = null,
    } = body;

    // Server-side validation
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!isValidEmail(email)) errors.email = "Valid email is required";
    if (!subject.trim()) errors.subject = "Subject is required";
    if (!message.trim() || message.trim().length < 10)
      errors.message = "Message must be at least 10 characters";

    if (Object.keys(errors).length) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // SMTP config
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    const to = process.env.TO_EMAIL || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // 465 true, 587 false
      auth: { user, pass },
    });

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${service ? `<p><strong>Service:</strong> ${service}${price ? ` (${price})` : ""}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <pre style="white-space:pre-wrap;font-family:inherit">${message}</pre>
    `;

    await transporter.sendMail({
      from: `"${name}" <${user}>`, // Gmail often enforces your SMTP user here
      replyTo: email,               // replies go to the client's address
      to,
      subject: subject || "New Contact Form Submission",
      text:
        `Name: ${name}\nEmail: ${email}\n` +
        (service ? `Service: ${service}${price ? ` (${price})` : ""}\n` : "") +
        `Subject: ${subject}\n\n${message}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
