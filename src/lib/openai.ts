import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function chatStream(
  messages: Message[],
  onChunk: (text: string) => void,
  signal?: AbortSignal
) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error(
      "OPENAI_API_KEY is not set. Add it to your Vercel environment variables."
    );
  }

  const stream = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
    temperature: 0.65,
    max_tokens: 2048,
    top_p: 0.9,
    stream: true,
  }, { signal });

  let full = "";
  for await (const chunk of stream) {
    const delta = chunk.choices?.[0]?.delta?.content;
    if (delta) {
      full += delta;
      onChunk(delta);
    }
  }

  return full;
}