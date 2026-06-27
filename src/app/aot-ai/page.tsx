"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { AOTLogo } from "@/components/ui/AOTLogo";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm AOT AI. Ask me anything about my projects, services, or pricing. For example:\n\n• \"Tell me about your projects\"\n• \"How much for a website like CalFit?\"\n• \"What tech stack do you use?\"\n• \"What's your development process?\"",
};

const SUGGESTIONS = [
  "Tell me about your projects",
  "How much for a website?",
  "What's your development process?",
  "What services do you offer?",
];

export default function AotAIPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(msg: string) {
    if (!msg.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", content: msg.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const history = updated
        .filter((m) => m !== WELCOME)
        .slice(0, -1)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/aot-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg.trim(), history }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, I hit an error. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send(input);
    }
  }

  return (
    <main className="min-h-screen flex flex-col" style={{ background: "var(--bg-primary)" }}>
      <header
        className="px-6 py-4 flex items-center justify-between"
        style={{
          borderBottom: "1px solid var(--border-color)",
          background: "var(--bg-nav)",
        }}
      >
        <Link href="/" className="flex items-center gap-3">
          <AOTLogo size={30} />
          <span
            className="font-black text-sm tracking-[0.25em]"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            AOT AI
          </span>
        </Link>
        <Link
          href="/"
          className="text-[10px] tracking-widest uppercase transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
          }}
        >
          ← Back
        </Link>
      </header>

      <div className="flex-1 max-w-3xl w-full mx-auto px-4 py-6 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto space-y-4 scrollbar-thin pr-2">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? ""
                    : ""
                }`}
                style={
                  m.role === "user"
                    ? {
                        background: "var(--accent-primary)",
                        color: "#fff",
                        borderBottomRightRadius: "4px",
                      }
                    : {
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-muted)",
                        borderBottomLeftRadius: "4px",
                      }
                }
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div
                className="rounded-2xl rounded-bl-sm px-4 py-3 text-sm"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                }}
              >
                <span className="inline-flex gap-1">
                  <span className="animate-bounce" style={{ animationDelay: "0ms" }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: "150ms" }}>●</span>
                  <span className="animate-bounce" style={{ animationDelay: "300ms" }}>●</span>
                </span>
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>

        {messages.length === 1 && !loading && (
          <div className="flex flex-wrap gap-2 mt-4 mb-2">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                className="text-[11px] px-3 py-1.5 rounded-full transition-all"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  border: "1px solid var(--border-color)",
                  color: "var(--text-dim)",
                  background: "var(--bg-card)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.color = "var(--accent-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-color)";
                  e.currentTarget.style.color = "var(--text-dim)";
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <div
          className="flex items-end gap-2 mt-4 p-2 rounded-2xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-color)",
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about projects, pricing, or services..."
            rows={1}
            className="flex-1 bg-transparent text-sm outline-none resize-none px-2 py-1.5"
            style={{ color: "var(--text-primary)", fontFamily: "'Inter', sans-serif" }}
          />
          <button
            onClick={() => send(input)}
            disabled={!input.trim() || loading}
            className="px-4 py-2 rounded-xl text-xs font-bold transition-all disabled:opacity-30"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: input.trim() && !loading ? "var(--accent-primary)" : "var(--bg-code-tag)",
              color: input.trim() && !loading ? "#fff" : "var(--text-dim)",
            }}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
