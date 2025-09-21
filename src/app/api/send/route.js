import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL || "debar.bhatt10@gmail.com";

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log("Sending email to:", email, "Subject:", subject, "Message:", message);
  
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["debar.bhatt10@gmail.com"], // Your email where messages will be received
      cc: [email], // Send a copy to the person who contacted you
      subject: `Portfolio Contact: ${subject}`,
      react: (
        <>
          <h1>New Portfolio Contact Message</h1>
          <h2>Subject: {subject}</h2>
          <p><strong>From:</strong> {email}</p>
          <p><strong>Message:</strong></p>
          <p>{message}</p>
          <hr />
          <p>This message was sent through your portfolio website contact form.</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}