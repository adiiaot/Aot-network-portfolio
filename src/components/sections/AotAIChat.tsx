"use client";

import { useState, useRef, useEffect } from "react";
import { marked } from "marked";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const STORAGE_KEY = "aot-ai-chat";

function loadChat(): ChatMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [];
}

function saveChat(msgs: ChatMessage[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
  } catch {}
}

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm AOT AI. I can tell you about past projects, explain how things are built, and help you figure out the best approach for yours.\n\nTry asking:\n\n- **\"How much to build an AI Native Business Website?\"**\n- **\"I want to build a fitness app like CalFit\"**\n- **\"What do you build and how much does it cost?\"**\n- **\"Break down how you'd build a dashboard for me\"**",
};

const SUGGESTIONS = [
  "I want to build an AI Native Business Website",
  "How much for a fitness app like CalFit?",
  "What tech stack do you use and how much?",
  "Break down how you'd build a dashboard for me",
];

export function AotAIChat({ id }: { id?: string }) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = loadChat();
    return saved.length > 0 ? saved : [WELCOME];
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 || messages[0]?.content !== WELCOME.content) {
      saveChat(messages);
    }
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const pkg = params.get("package");
      if (pkg && messages.length === 1 && messages[0]?.role === "assistant") {
        const msg = `I'm interested in the ${pkg} package. Can you help me figure out what I need and what it would cost?`;
        setTimeout(() => send(msg), 300);
      }
    }
  }, []);

  async function send(msg: string) {
    if (!msg.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", content: msg.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const history = updated
        .slice(0, -1)
        .filter((m) => m.content !== WELCOME.content)
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
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I hit an error: ${msg}`,
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

  function clearChat() {
    localStorage.removeItem(STORAGE_KEY);
    setMessages([WELCOME]);
  }

  function renderContent(text: string) {
    const html = marked.parse(text, { async: false }) as string;
    return (
      <div
        className="prose prose-sm max-w-none"
        style={
          {
            ["--prose-headings-color" as string]: "var(--text-primary)",
            ["--prose-body-color" as string]: "var(--text-muted)",
            ["--prose-bold-color" as string]: "var(--text-primary)",
            ["--prose-code-color" as string]: "var(--accent-primary)",
            ["--prose-code-bg" as string]: "var(--bg-code-tag)",
            ["--prose-link-color" as string]: "var(--accent-primary)",
            ["--prose-list-marker-color" as string]: "var(--text-dim)",
          } as React.CSSProperties
        }
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  return (
    <div id={id} className="flex flex-col" style={{ minHeight: "500px" }}>
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}
        >
          {messages.length > 1
            ? `${messages.filter((m) => m.role === "user").length} messages`
            : "New conversation"}
        </span>
        {messages.length > 1 && (
          <button
            onClick={clearChat}
            className="text-[10px] tracking-widest uppercase transition-colors hover:opacity-70"
            style={{
              color: "var(--text-dim)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Clear
          </button>
        )}
      </div>

      <div
        className="flex-1 overflow-y-auto space-y-4 scrollbar-thin pr-2 mb-4"
        style={{ maxHeight: "60vh" }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[88%] md:max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed`}
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
              {m.role === "user" ? (
                <p className="whitespace-pre-wrap">{m.content}</p>
              ) : (
                renderContent(m.content)
              )}
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
        <div className="flex flex-wrap gap-2 mb-4">
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
        className="flex items-end gap-2 p-2 rounded-2xl"
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
  );
}