import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Copyright & Fan Content Disclaimer",
  description: `Intellectual Property and Fan Content Notice for ${site.name}. Warhammer 40,000 copyright attribution.`,
  alternates: {
    canonical: "/copyright",
  },
};

export default function CopyrightPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <span>Copyright &amp; IP Disclaimer</span>
            </div>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "52px", textTransform: "uppercase", margin: "12px 0 16px" }}>
              Copyright &amp; IP Disclaimer.
            </h1>
            <p style={{ color: "var(--ink-muted)", fontSize: "18px" }}>
              Intellectual Property ownership notices and Games Workshop Fan Content Policy compliance.
            </p>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">IP Notice</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 12px" }}>Unofficial Fan Site</h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "14px" }}>
              This website is an independent community reference guide and is NOT affiliated with Games Workshop Limited.
            </p>
          </aside>

          <div>
            <article className="record-block">
              <p className="kicker">01 // Games Workshop Trademark Attribution</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Warhammer 40,000 Copyrights
              </h2>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
                <em>Warhammer 40,000</em>, <em>Dawn of War</em>, <em>Space Marine</em>, <em>Blood Ravens</em>, <em>Dark Angels</em>, <em>Orks</em>, <em>Necrons</em>, <em>Adeptus Mechanicus</em>, and associated marks, names, characters, vehicles, weapons, and lore belong to their respective rights holders. References on this site identify and discuss the game; they do not claim ownership or official status.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">02 // Developer &amp; Publisher Rights</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Deep Silver &amp; KING Art Games
              </h2>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
                *Warhammer 40,000: Dawn of War IV* is published by <strong>Deep Silver</strong> (a division of PLAION) and developed by <strong>KING Art Games</strong> under license from Games Workshop. PC digital distribution marks belong to Valve Corporation (Steam).
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">03 // Games Workshop Fan Content Policy Compliance</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Independent Commentary &amp; Advertising
              </h2>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
                {site.name} publishes original commentary, research summaries, comparisons, and player guidance. It does not sell third-party game assets or place editorial content behind a paywall. The site may display third-party advertising; advertisements are operational funding and do not indicate sponsorship, licensing, or endorsement by Games Workshop or any other rights holder.
              </p>
            </article>

            <article className="record-block">
              <p className="kicker">04 // Rights Contact</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                Report a Rights Concern
              </h2>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
                Rights holders can identify an affected URL and the material at issue through our <Link href="/contact" style={{ color: "var(--accent-gold)" }}>Contact &amp; Corrections</Link> process. Valid concerns will be reviewed promptly.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
