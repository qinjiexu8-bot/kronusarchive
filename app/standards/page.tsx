import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { sources } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Editorial Standards",
  description:
    "How Kronus Archive sources, verifies, corrects, and labels Dawn of War IV information.",
  alternates: {
    canonical: "/standards",
  },
};

export default function StandardsPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <span>Editorial Standards</span>
            </div>
            <div className="subpage-hero-grid">
              <div>
                <p className="kicker">
                  Protocol Integrity <span aria-hidden="true">{"//"}</span> Public Standard
                </p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "56px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                  Trust Is a Battlefield Asset.
                </h1>
                <p style={{ color: "var(--ink-muted)", fontSize: "18px", maxWidth: "680px" }}>
                  We strictly separate developer-confirmed intelligence, observed video mechanics, and player-tested results so readers always know the exact foundation of every claim.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Archive Status</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "8px 0 16px" }}>Pre-Launch Edition 0.1</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "14px" }}>
              The current archive contains first-party confirmed records and clearly identified analysis. Hands-on strategy records begin only after launch verification.
            </p>
          </aside>

          <div>
            <article className="record-block">
              <p className="kicker">01 // Source Hierarchy</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Primary Sources First.
              </h2>
              <p style={{ color: "var(--ink-muted)", marginBottom: "20px" }}>
                Official developer (KING Art Games), publisher (Deep Silver), Warhammer Community, and Steam store records take priority. Reputable reporting provides context, but never overrides a primary announcement.
              </p>
              <ul className="record-list">
                {sources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)", fontWeight: 700 }}>
                      {source.label} — {source.publisher} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="record-block">
              <p className="kicker">02 // Evidence Labels</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Confirmed, Observed, or Tested.
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                <strong>“Confirmed”</strong> means a primary source explicitly supports the claim.
                <strong>“Observed”</strong> means a mechanic is visible in official gameplay footage but lacks published rules.
                <strong>“Tested”</strong> requires a live game version, repeatable method, and verification date.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">03 // Strategy Claims</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                No Fabricated Data.
              </h2>
              <p style={{ color: "var(--ink-muted)" }}>
                We do not publish “best units”, optimal build orders, or damage values before those claims can be measured in the released game.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
