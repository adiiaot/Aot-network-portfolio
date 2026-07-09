import { NextResponse } from "next/server";
import { chatStream } from "@/lib/openai";
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

    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          await chatStream(messages, (chunk) => {
            controller.enqueue(encoder.encode(chunk));
          });
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : "Stream failed.";
          controller.enqueue(encoder.encode(`\n\n[Error: ${msg}]`));
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Something went wrong.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}