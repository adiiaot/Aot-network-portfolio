import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="text-center max-w-md">
        <div
          className="text-[120px] md:text-[180px] font-black leading-none mb-4"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            background: "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </div>
        <h1
          className="text-2xl md:text-3xl font-black mb-4"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Page not found
        </h1>
        <p
          className="text-sm mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-xl transition-all"
          style={{
            fontFamily: "'Inter', sans-serif",
            background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))",
            color: "#fff",
            letterSpacing: "0.05em",
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}