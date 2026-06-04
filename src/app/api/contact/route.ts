import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "aotayom34@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, idea, budget } = await req.json();

    if (!name || !email || !idea) {
      return NextResponse.json(
        { error: "Name, email, and idea are required." },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      replyTo: email,
      to: TO_EMAIL,
      subject: `Project Request from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
        <p><strong>Idea:</strong></p>
        <p>${idea.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
