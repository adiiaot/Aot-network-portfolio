const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

interface Message {
  role: "system" | "user" | "assistant";
  content: string;
}

export async function chatComplete(messages: Message[], signal?: AbortSignal) {
  const apiKey = process.env.NVIDIA_API_KEY;

  if (!apiKey) {
    throw new Error(
      "NVIDIA_API_KEY is not set. Add it to your Vercel environment variables."
    );
  }

  const res = await fetch(NVIDIA_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "meta/llama-3.3-70b-instruct",
      messages,
      temperature: 0.65,
      max_tokens: 2048,
      top_p: 0.9,
    }),
    signal,
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`NVIDIA API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "";
}