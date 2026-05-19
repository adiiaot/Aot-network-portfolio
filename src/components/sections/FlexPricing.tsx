"use client";

import { useState } from "react";
import { AOTLogo } from "@/components/ui/AOTLogo";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FlexPricing() {
  const [form, setForm] = useState({ name: "", idea: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.idea && form.budget) setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10 border border-purple-900/30"
          style={{
            background: "linear-gradient(135deg,#0d0020 0%,#000 100%)",
          }}
        >
          <SectionLabel>Custom Scope</SectionLabel>
          <h2
            className="text-3xl font-black text-white mt-4 mb-3"
            style={{ fontFamily: "'Exo 2', sans-serif" }}
          >
            Have a different budget?
          </h2>
          <p className="text-zinc-400 mb-8 text-sm leading-relaxed">
            We work with selected clients on flexible budgets depending on scope
            and long-term potential. Tell us about your project—we&apos;ll find a
            structure that works.
          </p>
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <AOTLogo size={52} />
              </div>
              <p
                className="text-white font-black text-xl mb-2"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                Request Received.
              </p>
              <p className="text-zinc-500 text-sm">
                We&apos;ll reach out within 24 hours to discuss your project.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label
                  className="text-[10px] text-purple-500/50 uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
                  className="w-full bg-white/5 border border-purple-900/30 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500/50 text-sm transition-colors"
                />
              </div>
              <div>
                <label
                  className="text-[10px] text-purple-500/50 uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Project Idea
                </label>
                <textarea
                  placeholder="Describe what you're building..."
                  value={form.idea}
                  onChange={(e) =>
                    setForm({ ...form, idea: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-white/5 border border-purple-900/30 rounded-xl px-4 py-3 text-white placeholder-zinc-700 focus:outline-none focus:border-purple-500/50 text-sm transition-colors resize-none"
                />
              </div>
              <div>
                <label
                  className="text-[10px] text-purple-500/50 uppercase tracking-widest block mb-2"
                  style={{ fontFamily: "'Share Tech Mono', monospace" }}
                >
                  Budget Range
                </label>
                <select
                  value={form.budget}
                  onChange={(e) =>
                    setForm({ ...form, budget: e.target.value })
                  }
                  className="w-full bg-[#0d0020] border border-purple-900/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 text-sm transition-colors"
                >
                  <option value="" disabled>
                    Select your range
                  </option>
                  <option value="flexible">
                    Flexible — Let&apos;s talk on a call
                  </option>
                  <option value="1k-3k">$1,000 – $3,000</option>
                  <option value="3k-10k">$3,000 – $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full font-black py-4 rounded-xl text-white text-sm tracking-widest mt-2 transition-all hover:opacity-90"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  background:
                    "linear-gradient(135deg,#7c3aed,#a855f7)",
                  boxShadow: "0 0 35px rgba(168,85,247,0.35)",
                  letterSpacing: "0.18em",
                }}
              >
                SUBMIT REQUEST
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
