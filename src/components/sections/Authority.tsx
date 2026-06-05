import { testimonials } from "@/data/testimonials";

function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  const colors = [
    "linear-gradient(135deg,#a855f7,#7c3aed)",
    "linear-gradient(135deg,#c084fc,#a855f7)",
  ];
  const idx = name.length % colors.length;
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
      style={{ background: colors[idx] }}
    >
      {initials}
    </div>
  );
}

export function Authority() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span
            className="inline-flex items-center gap-1.5 text-[10px] px-3 py-1.5 rounded-full tracking-widest uppercase mb-6"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              border: "1px solid var(--border-color)",
              color: "var(--accent-primary)",
              background: "var(--card-bg)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            Verified LinkedIn Recommendations
          </span>
          <h2
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
          >
            Recommendations
          </h2>
          <p
            className="max-w-xl mx-auto text-sm leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-muted)" }}
          >
            Feedback from professionals and collaborators who have worked with me or reviewed my work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              style={{
                borderColor: "var(--border-color)",
                background: "var(--card-bg)",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <Avatar name={t.name} />
                <div className="min-w-0">
                  <div
                    className="font-bold text-sm truncate"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs truncate mt-0.5"
                    style={{ fontFamily: "'Inter', sans-serif", color: "var(--text-dim)" }}
                  >
                    {t.title}
                  </div>
                  <span
                    className="inline-block text-[9px] px-2 py-0.5 rounded mt-1.5 tracking-wider"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      background: "rgba(var(--accent-rgb), 0.1)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {t.relationship}
                  </span>
                </div>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {t.recommendation}
              </p>
              <div
                className="flex items-center gap-1.5 text-[9px] tracking-wider"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-very-dim)",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
                {t.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
