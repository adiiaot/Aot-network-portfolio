"use client";

import { useState } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import {
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  TELEGRAM_HANDLE,
} from "@/data/social";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    idea: "",
    budget: "",
  });
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (!form.name || !form.email || !form.idea) return;
    const subject = encodeURIComponent(
      `Project Request from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${
        form.budget || "Not specified"
      }\n\nProject Idea:\n${form.idea}`
    );
    window.open(
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
      "_blank"
    );
    setSent(true);
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
                Email client opened.
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
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full border rounded-xl px-4 py-3 text-sm transition-colors"
                  style={{
                    background: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  <option value="">Select range (optional)</option>
                  <option value="Flexible — Let's discuss on a call">
                    Flexible — Let&apos;s discuss on a call
                  </option>
                  <option value="$1,000 – $3,000">
                    $1,000 – $3,000
                  </option>
                  <option value="$3,000 – $10,000">
                    $3,000 – $10,000
                  </option>
                  <option value="$10,000+">$10,000+</option>
                </select>
              </div>
              <button
                onClick={handleSend}
                disabled={!form.name || !form.email || !form.idea}
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
                SEND REQUEST →
              </button>
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
            href={`mailto:${CONTACT_EMAIL}`}
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
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
}
