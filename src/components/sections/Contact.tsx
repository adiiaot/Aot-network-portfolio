"use client";

import { useState, useEffect } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import {
  WHATSAPP_NUMBER,
  TELEGRAM_HANDLE,
  UPWORK_URL,
} from "@/data/social";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    budget: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split("?")[1] || "");
    const pkg = params.get("package");
    if (pkg) {
      setForm((prev) => ({
        ...prev,
        idea: prev.idea
          ? prev.idea
          : `I'm interested in the ${pkg} package. `,
      }));
    }
  }, []);

  const handleSend = async () => {
    if (!form.name || !form.email || !form.idea) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSent(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 px-6"
      style={{ background: "var(--section-contact)" }}
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="flex justify-center mb-8"
            style={{
              animation: "float-logo 7s ease-in-out infinite",
            }}
          >
            <div className="relative">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle, rgba(var(--accent-rgb), 0.3) 0%, transparent 70%)",
                  filter: "blur(35px)",
                  transform: "scale(2)",
                }}
              />
              <AOTLogo size={80} />
            </div>
          </div>
          <h2
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "var(--text-primary)",
              textShadow: "0 0 80px rgba(var(--accent-rgb), 0.3)",
            }}
          >
            Have an idea?
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Let&apos;s build it.
            </span>
          </h2>
          <p
            className="text-sm"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
          >
            Fill in the form or reach me directly. I respond fast.
          </p>
        </div>

        <div
          className="mb-6 p-5 rounded-xl text-sm leading-relaxed"
          style={{
            background: "rgba(var(--accent-rgb), 0.06)",
            border: "1px solid var(--border-color)",
            color: "var(--text-muted)",
            fontFamily: "'JetBrains Mono', monospace",
          }}
        >
          <strong style={{ color: "var(--text-primary)" }}>
            Want a faster response?
          </strong>{" "}
          Shoot me a DM on{" "}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#128C7E", fontWeight: 700 }}
          >
            WhatsApp
          </a>{" "}
          or{" "}
          <a
            href={`https://t.me/${TELEGRAM_HANDLE}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2AABEE", fontWeight: 700 }}
          >
            Telegram
          </a>{" "}
          — I respond much faster there. Include your project idea and budget
          and I&apos;ll get back to you ASAP.
        </div>

        <div
          className="border rounded-2xl p-8 mb-8"
          style={{
            borderColor: "var(--border-color-strong)",
            background: "var(--card-bg)",
            boxShadow: "0 0 80px -30px rgba(var(--accent-rgb), 0.3)",
          }}
        >
          {sent ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <AOTLogo size={56} />
              </div>
              <p
                className="font-black text-xl mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                Message sent!
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                I typically respond within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest block mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--accent-primary)",
                      opacity: 0.7,
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    className="w-full border rounded-xl px-4 py-3 text-sm transition-colors"
                    style={{
                      background: "var(--bg-input)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
                <div>
                  <label
                    className="text-[10px] uppercase tracking-widest block mb-2"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: "var(--accent-primary)",
                      opacity: 0.7,
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="w-full border rounded-xl px-4 py-3 text-sm transition-colors"
                    style={{
                      background: "var(--bg-input)",
                      borderColor: "var(--border-color)",
                      color: "var(--text-primary)",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="text-[10px] uppercase tracking-widest block mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent-primary)",
                    opacity: 0.7,
                  }}
                >
                  Project Idea *
                </label>
                <textarea
                  placeholder="What are you building? Be as specific as you'd like..."
                  value={form.idea}
                  onChange={(e) =>
                    setForm({ ...form, idea: e.target.value })
                  }
                  rows={4}
                  className="w-full border rounded-xl px-4 py-3 text-sm transition-colors resize-none"
                  style={{
                    background: "var(--bg-input)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <div>
                <label
                  className="text-[10px] uppercase tracking-widest block mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent-primary)",
                    opacity: 0.7,
                  }}
                >
                  Your Budget *
                </label>
                <input
                  type="text"
                  placeholder="e.g. $2,000, or tell me what you're looking to invest..."
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full border rounded-xl px-4 py-3 text-sm transition-colors"
                  style={{
                    background: "var(--bg-input)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                />
              </div>
              <button
                onClick={handleSend}
                disabled={!form.name || !form.email || !form.idea || !form.budget || sending}
                className="w-full font-black py-4 rounded-xl text-sm tracking-widest mt-2 transition-all hover:opacity-90 disabled:opacity-40"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background:
                    "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary),var(--accent-tertiary))",
                  boxShadow: "0 0 40px rgba(var(--accent-rgb), 0.4)",
                  letterSpacing: "0.18em",
                  color: "#fff",
                }}
              >
                {sending ? "SENDING..." : "SEND REQUEST →"}
              </button>
              {error && (
                <p className="text-xs text-center" style={{ color: "var(--accent-primary)" }}>
                  {error}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-full text-sm transition-all hover:opacity-90"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#128C7E",
              letterSpacing: "0.08em",
              boxShadow: "0 0 25px rgba(18,140,126,0.3)",
              color: "#fff",
            }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.859L.057 23.57a.5.5 0 00.613.613l5.761-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.96 0-3.8-.52-5.39-1.428l-.387-.226-3.893.998.993-3.822-.241-.396A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href={`https://t.me/${TELEGRAM_HANDLE}`}
            className="inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-full text-sm transition-all hover:opacity-90"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#2AABEE",
              letterSpacing: "0.08em",
              boxShadow: "0 0 25px rgba(42,171,238,0.3)",
              color: "#fff",
            }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 font-black px-8 py-4 rounded-full transition-all text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.08em",
              border: "1px solid var(--border-color-strong)",
              color: "var(--accent-primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(var(--accent-rgb), 0.1)";
              e.currentTarget.style.borderColor = "var(--accent-secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "var(--border-color-strong)";
            }}
          >
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.258c.456-.516.893-1.107 1.343-1.708.16-.217.407-.336.672-.336.125 0 .252.027.37.087 1.207.608 2.02.624 2.494.059.771-.919-.414-2.548-2.14-3.257-.504-.207-1.008-.318-1.504-.318-1.39 0-2.65.713-3.575 1.773l-1.026-.327.149-.628c.463-1.893 1.463-3.183 2.622-3.87.12-.071.254-.104.387-.104.177 0 .352.064.488.179.358.302.553.818.64 1.142.043.16.125.348.236.498.304.41.76.636 1.277.636.511 0 .973-.233 1.299-.655.65-.839.582-2.072-.263-2.994-.429-.469-1.055-.741-1.719-.741-.422 0-.852.108-1.241.318-.667.359-1.199.97-1.567 1.738-.489 1.019-.732 2.177-.732 3.456 0 .223.008.447.024.671 0 .008.003.016.003.024l-.491.177c-1.237.445-2.668 1.401-3.524 2.468-.281.349-.78.424-1.154.166-.373-.258-.483-.743-.245-1.13.163-.265.339-.528.505-.781.779-1.186 1.686-2.568 1.779-2.715.09-.144.201-.267.333-.359.75-.523 1.635-.799 2.552-.799.802 0 1.572.196 2.258.567-1.66.787-2.984 2.353-3.08 4.235-.006.099-.01.196-.01.293 0 1.373.619 2.642 1.698 3.497-1.348.606-2.482 1.511-3.032 2.675-.163.341-.062.743.243.966.165.121.36.181.558.181.17 0 .341-.047.493-.142.893-.562 1.729-.776 2.535-.776.243 0 .492.016.754.05 1.163.155 2.235.615 3.153 1.254.166.115.362.171.558.171.248 0 .49-.1.661-.28.118-.123.186-.285.186-.457 0-.053-.005-.107-.018-.16a5.356 5.356 0 00-.393-1.235c.555-.213 1.12-.291 1.678-.291.645 0 1.281.131 1.882.388.219.093.462.143.71.143.392 0 .758-.145 1.037-.408.29-.272.463-.647.489-1.058.041-.712-.415-1.387-1.144-1.694-.726-.307-1.87-.569-2.893-.569zm-4.867 4.963a4.054 4.054 0 01-.701.17c-.332.049-.651.074-.955.074-1.196 0-2.233-.357-3.094-1.017.857-.136 1.699-.428 2.482-.901.018-.01.035-.02.052-.03.214.095.437.17.668.217.332.07.653.106.963.106.544 0 1.059-.108 1.536-.314-.274.572-.612 1.143-.951 1.695z"/>
            </svg>
            Hire on Upwork
          </a>
        </div>
      </div>
    </section>
  );
}
