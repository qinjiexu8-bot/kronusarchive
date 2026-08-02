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
                *Warhammer 40,000*, *Dawn of War*, *Space Marine*, *Blood Ravens*, *Dark Angels*, *Orks*, *Necrons*, *Adeptus Mechanicus*, and all associated marks, names, races, vehicles, weapons, and campaign lore are trademarks or registered trademarks of <strong>Games Workshop Limited</strong>, variable registered around the world, and used under non-commercial community reference context.
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
                Non-Commercial Community Compliance
              </h2>
              <p style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
                {site.name} adheres to the Games Workshop Fan Content Guidelines. This archive is maintained strictly for community discussion, player assistance, news tracking, and educational field guide purposes. No financial paywalls or commercial selling of IP assets occurs on this site.
              </p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
