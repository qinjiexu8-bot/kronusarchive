import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} — How we handle data, cookies, and user privacy.`,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <span>Privacy Policy</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "52px", textTransform: "uppercase", margin: "12px 0 16px" }}>
              Privacy Policy.
            </h1>
            <p style={{ color: "var(--ink-muted)", fontSize: "18px" }}>
              Last updated: August 13, 2026. Transparency regarding user privacy and data processing.
            </p>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Compliance</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 12px" }}>Privacy Controls</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "14px" }}>
              Kronus Archive does not sell personal data. Optional analytics storage is disabled until a visitor accepts it.
            </p>
          </aside>

          <div>
            <article className="record-block">
              <p className="kicker">01 // Data Collection Overview</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Information We Process
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                {site.name} is a static, source-checked reference field guide. We do not require account registration, login credentials, or user passwords. We do not collect Personally Identifiable Information (PII) such as full names, residential addresses, or billing data.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">02 // Web Analytics &amp; Cookies</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Analytics &amp; Technical Log Data
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                We use Google Analytics 4 to understand aggregate traffic, popular pages, referral sources, device categories, countries, and engagement. Google Analytics is configured with advertising signals and ad personalization disabled. Analytics storage is denied by default and enabled only after a visitor selects “Accept analytics.” Visitors may reject optional analytics or reopen Cookie settings from the footer at any time.
              </p>
              <p style={{ color: "var(--ink-muted)" }}>
                Google may process online identifiers, device and browser information, approximate location, page URLs, referral information, and interaction events when analytics is accepted. Consent preferences are stored in the visitor&apos;s browser. Our hosting provider, Vercel, may separately process standard security and delivery logs needed to operate the site.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">03 // Retention &amp; User Choices</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Control Your Analytics Preference
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                Rejecting analytics does not restrict access to any guide or site feature. Visitors can change their preference through the Cookie settings control in the footer. They may also clear site data in their browser to remove the saved preference and any analytics cookies previously created after consent.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">04 // External Links</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Third-Party Websites
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                Our field guide includes direct citations and outbound links to official publishers (Deep Silver, Warhammer Community, Steam). We are not responsible for the privacy practices or content of third-party external domains.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
