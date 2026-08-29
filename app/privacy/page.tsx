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
              Last updated: August 29, 2026. Transparency regarding analytics, advertising, cookies, and data processing.
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
              <p className="kicker">04 // Advertising</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Google AdSense &amp; Advertising Cookies
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                Kronus Archive may use Google AdSense to display advertising. Where required, advertising cookies and related storage remain disabled until the visitor makes a choice through a consent interface. Google and its advertising partners may process device identifiers, browser information, approximate location, page activity, and ad interactions to deliver, measure, and prevent fraud in advertising.
              </p>
              <p style={{ color: "var(--ink-muted)" }}>
                Visitors may receive non-personalized ads when consent for personalized advertising is unavailable or declined, subject to Google&apos;s regional controls and applicable law. Advertising partners operate under their own privacy policies. Learn more in <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)" }}>Google&apos;s advertising privacy information</a>.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">05 // External Links</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Third-Party Websites
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                Our field guide includes direct citations and outbound links to official publishers (Deep Silver, Warhammer Community, Steam). We are not responsible for the privacy practices or content of third-party external domains.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">06 // Contact</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Privacy Questions &amp; Requests
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                To raise a privacy question or report information that should not appear on this site, use the public process described on our <Link href="/contact" style={{ color: "var(--accent-gold)" }}>Contact &amp; Corrections</Link> page. Do not post sensitive personal information in a public issue.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
