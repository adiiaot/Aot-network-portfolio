import { SectionLabel } from "@/components/ui/SectionLabel";
import { UPWORK_URL } from "@/data/social";

export function Upwork() {
  return (
    <section
      id="upwork"
      className="py-32 px-6"
      style={{ background: "var(--section-work)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <SectionLabel>Upwork Portfolio</SectionLabel>
        </div>

        <h2
          className="text-4xl md:text-6xl font-black mb-6"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "var(--text-primary)" }}
        >
          Freelance work,
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg,var(--accent-soft),var(--accent-primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            delivered.
          </span>
        </h2>

        <p
          className="text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
        >
          Check out my Upwork profile to see my services, portfolio, and how I can help build your next project.
        </p>

        <div
          className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 rounded-2xl mb-10"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--border-color-strong)",
          }}
        >
          <a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-black px-8 py-4 rounded-full text-sm transition-all hover:opacity-90"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "#14a800",
              letterSpacing: "0.08em",
              boxShadow: "0 0 25px rgba(20,168,0,0.3)",
              color: "#fff",
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-.258c.456-.516.893-1.107 1.343-1.708.16-.217.407-.336.672-.336.125 0 .252.027.37.087 1.207.608 2.02.624 2.494.059.771-.919-.414-2.548-2.14-3.257-.504-.207-1.008-.318-1.504-.318-1.39 0-2.65.713-3.575 1.773l-1.026-.327.149-.628c.463-1.893 1.463-3.183 2.622-3.87.12-.071.254-.104.387-.104.177 0 .352.064.488.179.358.302.553.818.64 1.142.043.16.125.348.236.498.304.41.76.636 1.277.636.511 0 .973-.233 1.299-.655.65-.839.582-2.072-.263-2.994-.429-.469-1.055-.741-1.719-.741-.422 0-.852.108-1.241.318-.667.359-1.199.97-1.567 1.738-.489 1.019-.732 2.177-.732 3.456 0 .223.008.447.024.671 0 .008.003.016.003.024l-.491.177c-1.237.445-2.668 1.401-3.524 2.468-.281.349-.78.424-1.154.166-.373-.258-.483-.743-.245-1.13.163-.265.339-.528.505-.781.779-1.186 1.686-2.568 1.779-2.715.09-.144.201-.267.333-.359.75-.523 1.635-.799 2.552-.799.802 0 1.572.196 2.258.567-1.66.787-2.984 2.353-3.08 4.235-.006.099-.01.196-.01.293 0 1.373.619 2.642 1.698 3.497-1.348.606-2.482 1.511-3.032 2.675-.163.341-.062.743.243.966.165.121.36.181.558.181.17 0 .341-.047.493-.142.893-.562 1.729-.776 2.535-.776.243 0 .492.016.754.05 1.163.155 2.235.615 3.153 1.254.166.115.362.171.558.171.248 0 .49-.1.661-.28.118-.123.186-.285.186-.457 0-.053-.005-.107-.018-.16a5.356 5.356 0 00-.393-1.235c.555-.213 1.12-.291 1.678-.291.645 0 1.281.131 1.882.388.219.093.462.143.71.143.392 0 .758-.145 1.037-.408.29-.272.463-.647.489-1.058.041-.712-.415-1.387-1.144-1.694-.726-.307-1.87-.569-2.893-.569zm-4.867 4.963a4.054 4.054 0 01-.701.17c-.332.049-.651.074-.955.074-1.196 0-2.233-.357-3.094-1.017.857-.136 1.699-.428 2.482-.901.018-.01.035-.02.052-.03.214.095.437.17.668.217.332.07.653.106.963.106.544 0 1.059-.108 1.536-.314-.274.572-.612 1.143-.951 1.695z"/>
            </svg>
            View My Project Catalog
          </a>
        </div>

      </div>
    </section>
  );
}
