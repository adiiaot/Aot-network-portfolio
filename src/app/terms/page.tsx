import Link from "next/link";

export default function TermsPage() {
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
          Terms &amp; Conditions
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
          <Section title="1. Acceptance of Terms">
            <p>
              By accessing or using the AOT Network website and services, you
              agree to be bound by these Terms &amp; Conditions. If you do not
              agree with any part of these terms, you must not use our website
              or services.
            </p>
            <p>
              These terms apply to all visitors, users, and clients who access
              or use our services.
            </p>
          </Section>

          <Section title="2. Services Description">
            <p>
              AOT Network provides software development, AI systems engineering,
              mobile and web application development, and technology consulting
              services. The specific scope, deliverables, timelines, and fees
              for each project are defined in a separate agreement or statement
              of work.
            </p>
            <p>
              All project estimates, quotes, and proposals provided through our
              website or communications are subject to a formal written
              agreement before work commences.
            </p>
          </Section>

          <Section title="3. Intellectual Property">
            <h3
              className="text-sm font-bold mt-5 mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              Client IP
            </h3>
            <p>
              Upon full payment for services, the client retains full ownership
              of the final deliverables, including source code, design assets,
              and documentation specifically created for their project, unless
              otherwise agreed in writing.
            </p>

            <h3
              className="text-sm font-bold mt-5 mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              AOT Network IP
            </h3>
            <p>
              AOT Network retains the right to use any general-purpose tools,
              libraries, frameworks, and methodologies developed during the
              course of a project, provided that client-specific business logic
              and confidential information are excluded.
            </p>

            <h3
              className="text-sm font-bold mt-5 mb-2"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "var(--text-secondary)",
              }}
            >
              Portfolio Rights
            </h3>
            <p>
              We reserve the right to display completed projects in our
              portfolio and case studies, unless a non-disclosure agreement
              expressly prohibits such display.
            </p>
          </Section>

          <Section title="4. Client Responsibilities">
            <p>As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Provide accurate and complete project requirements in a timely
                manner
              </li>
              <li>
                Review and provide feedback within agreed-upon review periods
              </li>
              <li>
                Ensure you have the legal right to any third-party assets,
                APIs, or content provided for the project
              </li>
              <li>
                Make timely payments as specified in the project agreement
              </li>
              <li>
                Obtain any necessary licenses, permits, or approvals required
                for the project
              </li>
            </ul>
          </Section>

          <Section title="5. Payment Terms">
            <p>
              Payment terms are defined in the project proposal or service
              agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                A deposit or milestone payment structure may be required
              </li>
              <li>
                Invoices are due within the timeframe specified in the
                agreement
              </li>
              <li>
                Late payments may result in project delays or suspension of
                work
              </li>
              <li>
                All fees are quoted in USD and exclude applicable taxes unless
                otherwise noted
              </li>
            </ul>
          </Section>

          <Section title="6. Revisions and Change Orders">
            <p>
              Minor revisions within the agreed scope are included as specified
              in the project agreement. Significant changes to the original
              scope, including new features, design overhauls, or extended
              functionality, may require a change order with associated
              additional costs and timeline adjustments.
            </p>
          </Section>

          <Section title="7. Confidentiality">
            <p>
              Both parties agree to maintain the confidentiality of proprietary
              information shared during the course of a project. This includes
              business strategies, technical specifications, source code, and
              any other information designated as confidential.
            </p>
            <p>
              This confidentiality obligation survives the termination of the
              business relationship.
            </p>
          </Section>

          <Section title="8. Limitation of Liability">
            <p>
              AOT Network shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages arising out of or
              related to our services, including but not limited to loss of
              profits, data, or business opportunities.
            </p>
            <p>
              Our total liability for any claim arising from our services is
              limited to the amount paid by the client for the specific service
              giving rise to the claim.
            </p>
          </Section>

          <Section title="9. Warranty Disclaimer">
            <p>
              Our services are provided "as is" and "as available" without
              warranty of any kind, either express or implied. We strive to
              deliver high-quality work but do not guarantee that our services
              will be error-free, uninterrupted, or meet all specific
              requirements.
            </p>
            <p>
              We provide a 30-day warranty period after project delivery to
              address any bugs or issues that arise from our work, excluding
              issues caused by third-party services, client modifications, or
              hosting environment changes.
            </p>
          </Section>

          <Section title="10. Termination">
            <p>
              Either party may terminate a project agreement by providing
              written notice as specified in the agreement. In the event of
              termination:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The client shall pay for all work completed up to the
                termination date
              </li>
              <li>
                Deliverables produced up to the point of termination will be
                provided to the client upon payment
              </li>
              <li>
                Termination does not relieve either party of obligations
                related to confidentiality or intellectual property
              </li>
            </ul>
          </Section>

          <Section title="11. Third-Party Services">
            <p>
              Our projects may integrate with third-party services, APIs, or
              platforms. We are not responsible for the availability, changes,
              or terms of these third-party services. Clients are responsible
              for maintaining accounts and subscriptions for third-party
              services used in their projects.
            </p>
          </Section>

          <Section title="12. Governing Law">
            <p>
              These terms shall be governed by and construed in accordance with
              the laws of Nigeria. Any disputes arising from these terms shall
              be resolved through good-faith negotiation, and if unresolved,
              through binding arbitration or the courts of Nigeria.
            </p>
          </Section>

          <Section title="13. Changes to Terms">
            <p>
              We reserve the right to modify these Terms &amp; Conditions at any
              time. Changes will be effective immediately upon posting to this
              page. Continued use of our website or services after changes
              constitutes acceptance of the modified terms.
            </p>
          </Section>

          <Section title="14. Contact">
            <p>
              For questions about these Terms &amp; Conditions, please contact
              us:
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
