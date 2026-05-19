"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  SYSTEM_PROMPT,
  AI_MODEL,
  AI_MAX_TOKENS,
  AI_WELCOME_MESSAGE,
  quickQuestions,
} from "@/data/aiConfig";

export function AOTAIChat() {
  const [messages, setMessages] = useState([
    { role: "assistant" as const, content: AI_WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = useCallback(async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user" as const, content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: AI_MODEL,
          max_tokens: AI_MAX_TOKENS,
          system: SYSTEM_PROMPT,
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });
      const data = await res.json();
      const text =
        data.content?.[0]?.text ||
        "Something went wrong. Please try again.";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: text },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Connection error. Please try again.",
        },
      ]);
    }
    setLoading(false);
  }, [input, loading, messages]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <section
      id="aot-ai"
      className="py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg,#000 0%,#07001e 50%,#000 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <SectionLabel>AOT AI</SectionLabel>
        <h2
          className="text-4xl md:text-5xl font-black text-white mt-4 mb-3"
          style={{ fontFamily: "'Exo 2', sans-serif" }}
        >
          Ask AOT AI
          <span
            style={{
              color: "#a855f7",
              filter: "drop-shadow(0 0 12px rgba(168,85,247,0.8))",
            }}
          >
            .
          </span>
        </h2>
        <p
          className="text-zinc-500 mb-8 text-sm"
          style={{ fontFamily: "'Rajdhani', sans-serif" }}
        >
          Get instant answers about our services, pricing, and how to bring your
          idea to life.
        </p>

        <div
          className="border border-purple-900/40 rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#0d0020 0%,#000 100%)",
            boxShadow: "0 0 100px -30px rgba(168,85,247,0.4)",
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-purple-900/30">
            <div className="flex items-center gap-3">
              <div className="relative">
                <AOTLogo size={28} />
                <div
                  className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-400 border-2 border-black"
                  style={{
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }}
                />
              </div>
              <div>
                <div
                  className="text-white text-sm font-black"
                  style={{ fontFamily: "'Exo 2', sans-serif" }}
                >
                  AOT AI
                </div>
                <div
                  className="text-[10px] text-green-400"
                  style={{
                    fontFamily: "'Share Tech Mono', monospace",
                  }}
                >
                  Online · Powered by Claude
                </div>
              </div>
            </div>
            <div
              className="text-[10px] text-purple-500/50 tracking-widest"
              style={{ fontFamily: "'Share Tech Mono', monospace" }}
            >
              LIVE
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-5 space-y-4 scrollbar-thin">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end gap-2 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="shrink-0 mb-1">
                    <AOTLogo size={22} />
                  </div>
                )}
                <div
                  className={`max-w-[82%] text-sm rounded-2xl px-4 py-3 leading-relaxed ${
                    m.role === "user"
                      ? "rounded-br-sm text-white"
                      : "rounded-bl-sm text-zinc-300 border border-purple-900/30"
                  }`}
                  style={
                    m.role === "user"
                      ? {
                          background:
                            "linear-gradient(135deg,#7c3aed,#a855f7)",
                          fontFamily: "'Rajdhani', sans-serif",
                        }
                      : {
                          background: "#0a0018",
                          fontFamily: "'Rajdhani', sans-serif",
                        }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex items-end gap-2 justify-start">
                <div className="shrink-0 mb-1">
                  <AOTLogo size={22} />
                </div>
                <div
                  className="border border-purple-900/30 rounded-2xl rounded-bl-sm px-4 py-3"
                  style={{ background: "#0a0018" }}
                >
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={() => setInput(q)}
                className="text-[10px] border border-purple-900/40 text-purple-400/60 hover:border-purple-500/60 hover:text-purple-300 px-3 py-1.5 rounded-full transition-all"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex gap-3 px-5 pb-5">
            <input
              type="text"
              placeholder="Ask anything about AOT Network..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              className="flex-1 bg-white/5 border border-purple-900/30 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500/40 text-sm transition-colors"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="px-5 py-3 rounded-xl text-white font-black text-base transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:opacity-90"
              style={{
                background: "linear-gradient(135deg,#7c3aed,#a855f7)",
                fontFamily: "'Rajdhani', sans-serif",
              }}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
