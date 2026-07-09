import { NextResponse } from "next/server";
import { chatComplete } from "@/lib/nvidia";
import { buildSystemPrompt } from "@/lib/portfolio-context";

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required." },
        { status: 400 }
      );
    }

    const messages = [
      { role: "system" as const, content: buildSystemPrompt() },
      ...(history || []),
      { role: "user" as const, content: message },
    ];

    const reply = await chatComplete(messages);

    return NextResponse.json({ reply });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}