import { NextResponse } from "next/server";
import { Resend } from "resend";

// Use the verified Resend email for testing
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    // console.log('Received request:', { email, subject, message });

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Send to your email
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    // console.log('Email sent successfully:', data);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error sending email:', error.response?.data || error.message);
    return NextResponse.json({ error: error.message });
  }
}
