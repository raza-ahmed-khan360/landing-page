import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER, // dummy Gmail
      pass: process.env.MAIL_PASS, // app password, not Gmail password!
    },
  });

  const mailOptions = {
    from: `"Website Bot" <${process.env.MAIL_USER}>`, // Set dummy as sender
    to: process.env.MAIL_RECEIVER, // Your main/personal email
    subject: `📬 New Inquiry from ${body.name}`,
    html: `
      <h2>📩 New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>WhatsApp:</strong> ${body.whatsapp}</p>
      <p><strong>Plan:</strong> ${body.plan}</p>
      <p><strong>Add-ons:</strong> ${body.addons?.join(", ") || "None"}</p>
      <p><strong>Meeting Time:</strong> ${body.meeting}</p>
      <p><strong>Message:</strong><br/>${body.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail send error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
