"use client";

import { useState } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FlexPricing() {
  const [form, setForm] = useState({ name: "", email: "", idea: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.idea || !form.budget) return;
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/custom-scope", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send");
      setSubmitted(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      className="py-20 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10 border"
          style={{
            borderColor: "var(--border-color)",
            background: "var(--card-bg)",
          }}
        >
          <SectionLabel>Custom Scope</SectionLabel>
          <h2
            className="text-3xl font-black mt-4 mb-3"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Have a different budget?
          </h2>
          <p
            className="mb-8 text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            I work with selected clients on flexible budgets depending on scope
            and long-term potential. Tell me about your project—I&apos;ll find a
            structure that works.
          </p>
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <AOTLogo size={52} />
              </div>
              <p
                className="font-black text-xl mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                Request Received.
              </p>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                I&apos;ll reach out within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  className="text-[10px] uppercase tracking-widest block mb-2"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "var(--accent-primary)",
                    opacity: 0.7,
                  }}
                >
                  Name
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
                  placeholder="Describe what you're building..."
                  value={form.idea}
                  onChange={(e) =>
                    setForm({ ...form, idea: e.target.value })
                  }
                  rows={3}
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
                  <option value="" disabled>
                    Select your range
                  </option>
                  <option value="flexible">
                    Flexible — Let&apos;s talk on a call
                  </option>
                  <option value="1k-5k">$1,000 – $5,000</option>
                  <option value="5k-10k+">$5,000 – $10,000+</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email || !form.idea || !form.budget || sending}
                className="w-full font-black py-4 rounded-xl text-sm tracking-widest mt-2 transition-all hover:opacity-90 disabled:opacity-40"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  background:
                    "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
                  boxShadow: "0 0 35px rgba(var(--accent-rgb), 0.35)",
                  letterSpacing: "0.18em",
                  color: "#fff",
                }}
              >
                {sending ? "SENDING..." : "SUBMIT REQUEST"}
              </button>
              {error && (
                <p className="text-xs text-center" style={{ color: "var(--accent-primary)" }}>
                  {error}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
