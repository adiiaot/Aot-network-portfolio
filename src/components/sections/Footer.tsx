import { AOTLogo } from "@/components/ui/AOTLogo";
import { SOCIAL_LINKS } from "@/data/social";

export function Footer() {
  return (
    <footer className="border-t border-purple-900/20 bg-black py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-4">
            <AOTLogo size={38} />
            <div>
              <div
                className="text-white font-black text-xl tracking-wider"
                style={{ fontFamily: "'Exo 2', sans-serif" }}
              >
                AOT Network
              </div>
              <div
                className="text-purple-400/50 text-[9px] tracking-[0.35em]"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
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
                className="text-[10px] text-zinc-700 hover:text-purple-400 transition-colors"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-purple-900/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[10px] text-zinc-800"
            style={{ fontFamily: "'Share Tech Mono', monospace" }}
          >
            © {new Date().getFullYear()} AOT Network. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-[10px] text-zinc-800 hover:text-zinc-600 transition-colors"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
