import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

const TO_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "aotayom34@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(req: Request) {
  try {
    const { name, email, idea, budget } = await req.json();

    if (!name || !email || !idea || !budget) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: `AOT Network <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `Custom Scope Request from ${name}`,
      html: `
        <h2>Custom Scope Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Idea:</strong></p>
        <p>${idea.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
