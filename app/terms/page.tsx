import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service and Usage Policy for ${site.name}.`,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <span>Terms of Service</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "52px", textTransform: "uppercase", margin: "12px 0 16px" }}>
              Terms of Service.
            </h1>
            <p style={{ color: "var(--ink-muted)", fontSize: "18px" }}>
              Usage terms and conditions for accessing {site.name}.
            </p>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Legal Terms</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 12px" }}>Acceptance</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "14px" }}>
              By accessing this website, you agree to comply with these Terms of Service.
            </p>
          </aside>

          <div>
            <article className="record-block">
              <p className="kicker">01 // Independent Project Scope</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Non-Commercial Reference Archive
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                {site.name} is an independent, non-commercial player reference and field guide created to track announced details for *Warhammer 40,000: Dawn of War IV*. Content is provided for informational and educational purposes only.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">02 // Disclaimer of Warranties</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Pre-Launch Information Accuracy
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                While we strive for 100% verification against primary sources, pre-launch video game details, release dates, and mechanical specs are subject to change by game developers (KING Art Games) and publishers (Deep Silver). All information is provided &quot;as is&quot; without warranty of any kind.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">03 // Intellectual Property Notice</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Third-Party Trademarks
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                All game titles, trademarks, logos, and game assets belong strictly to their respective owners. For full copyright attributions, visit our <Link href="/copyright" style={{ color: "var(--accent-gold)", textDecoration: "underline" }}>Copyright &amp; IP Disclaimer</Link> page.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
