import { AOTLogo } from "@/components/ui/AOTLogo";
import { SOCIAL_LINKS } from "@/data/social";

export function Footer() {
  return (
    <footer
      className="py-12 px-6"
      style={{
        borderTop: "1px solid var(--border-color)",
        background: "var(--bg-primary)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <AOTLogo size={38} />
            <div>
              <div
                className="font-black text-xl tracking-wider"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
              >
                AOT Network
              </div>
              <div
                className="text-[9px] tracking-[0.35em]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--accent-primary)",
                  opacity: 0.5,
                }}
              >
                Build. Ship. Scale.
              </div>
            </div>
          </div>
          <div className="flex items-center gap-8">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                className="text-[10px] transition-colors hover:text-[var(--accent-primary)]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-dim)",
                }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: "1px solid var(--border-color-light)" }}
        >
          <p
            className="text-[10px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              color: "var(--text-very-dim)",
            }}
          >
            © {new Date().getFullYear()} AOT Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "About", href: "/about" },
              { label: "AOT AI", href: "/aot-ai" },
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[10px] transition-colors hover:text-[var(--text-dim)]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "var(--text-very-dim)",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
