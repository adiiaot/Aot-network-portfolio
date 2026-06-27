import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase mb-12 transition-colors"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-dim)",
          }}
        >
          ← Back to home
        </Link>

        <h1
          className="text-4xl md:text-5xl font-black mb-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "var(--text-primary)",
          }}
        >
          Privacy Policy
        </h1>
        <p
          className="text-xs mb-12"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-very-dim)",
          }}
        >
          Last updated: June 2026
        </p>

        <div
          className="prose-sm max-w-none space-y-8"
          style={{ color: "var(--text-muted)" }}
        >
          <Section title="1. Introduction">
            <p>
              I am committed to protecting your privacy. This Privacy Policy
              explains how I collect, use, disclose, and safeguard your
              information when you visit my website or use my services.
            </p>
            <p>
              By using my website and services, you agree to the collection and
              use of information in accordance with this policy.
            </p>
          </Section>

          <Section title="2. Information I Collect">
            <p>I may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Personal Information:
                </strong>{" "}
                Name, email address, and contact details when you fill out my
                contact form or request services.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Project Information:
                </strong>{" "}
                Details about your project, budget, and requirements shared
                through my contact or consultation forms.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Usage Data:
                </strong>{" "}
                Information about how you interact with my website, including
                pages visited, time spent, and referral sources.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Technical Data:
                </strong>{" "}
                IP address, browser type, device information, and operating
                system.
              </li>
            </ul>
          </Section>

          <Section title="3. How I Use Your Information">
            <p>I use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>To respond to your inquiries and provide quotes</li>
              <li>To deliver development and consulting services</li>
              <li>To improve my website and service offerings</li>
              <li>To communicate project updates and technical information</li>
              <li>To comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <p>
              I do not sell, trade, or rent your personal information to third
              parties. I may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                With service providers who assist me in operating my website
                (e.g., hosting providers, analytics)
              </li>
              <li>To comply with applicable laws and legal processes</li>
              <li>To protect my rights, privacy, safety, or property</li>
              <li>With your explicit consent</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            <p>
              I implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction. These include
              encryption, secure servers, and access controls.
            </p>
            <p>
              However, no method of transmission over the Internet or electronic
              storage is 100% secure. While I strive to protect your data, I
              cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              I retain your personal information only as long as necessary to
              fulfill the purposes outlined in this policy, or as required by
              law. When no longer needed, your data will be securely deleted or
              anonymized.
            </p>
          </Section>

          <Section title="7. Your Rights">
            <p>
              Depending on your jurisdiction, you may have the following rights
              regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Access:
                </strong>{" "}
                Request a copy of the data I hold about you.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Rectification:
                </strong>{" "}
                Request correction of inaccurate data.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Deletion:
                </strong>{" "}
                Request deletion of your data where applicable.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Portability:
                </strong>{" "}
                Request transfer of your data to another service.
              </li>
              <li>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Objection:
                </strong>{" "}
                Object to processing of your data for certain purposes.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact me at{" "}
              <strong style={{ color: "var(--accent-primary)" }}>
                aotnetworklabs@gmail.com
              </strong>
              .
            </p>
          </Section>

          <Section title="8. Third-Party Services">
            <p>
              My website may use third-party services that collect, monitor, and
              analyze data to improve the service. These include:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Vercel Analytics — for website usage statistics</li>
              <li>Google Fonts — for typography rendering</li>
            </ul>
            <p className="mt-3">
              These third parties have their own privacy policies governing the
              use of your information.
            </p>
          </Section>

          <Section title="9. Cookies">
            <p>
              My website uses minimal cookies, primarily for analytics purposes.
              You can control cookie preferences through your browser settings.
              Disabling cookies may affect certain features of my website.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              I may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated revision date. I encourage
              you to review this policy periodically.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or my data practices, please contact me:
            </p>
            <div
              className="mt-4 p-5 rounded-xl text-sm"
              style={{
                background: "var(--bg-code-tag)",
                border: "1px solid var(--border-color)",
              }}
            >
              <p>
                <strong style={{ color: "var(--text-secondary)" }}>
                  Email:
                </strong>{" "}
                aotnetworklabs@gmail.com
              </p>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-lg md:text-xl font-black mb-3"
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>
      <div
        className="text-sm leading-relaxed space-y-3"
        style={{ color: "var(--text-muted)" }}
      >
        {children}
      </div>
    </section>
  );
}
