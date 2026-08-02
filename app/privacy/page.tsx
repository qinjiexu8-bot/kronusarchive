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
              Last updated: August 1, 2026. Transparency regarding user privacy and data processing.
            </p>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Compliance</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 12px" }}>Zero PII Collection</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "14px" }}>
              Kronus Archive does not sell, trade, or monetize personal user data.
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
                To optimize website performance and ensure search indexing, server hosting providers (e.g. Vercel) may collect standard technical logs, including IP address, browser type, operating system, and page view metrics. These analytics are aggregated anonymously.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">03 // External Links</p>
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
