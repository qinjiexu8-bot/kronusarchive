import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About Kronus Archive",
  description:
    "Meet the independent editorial project behind Kronus Archive and learn how its Dawn of War 4 guides are researched, reviewed, and corrected.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: site.description,
    logo: `${site.url}/favicon.svg`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link><span>/</span><span>About</span>
            </div>
            <div className="subpage-hero-grid">
              <div>
                <p className="kicker">Archive Identity <span aria-hidden="true">{"//"}</span> Independent Editorial Project</p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", textTransform: "uppercase", margin: "8px 0 16px" }}>
                  About Kronus Archive.
                </h1>
                <p style={{ color: "var(--ink-muted)", fontSize: "18px", maxWidth: "760px" }}>
                  Kronus Archive is an independent, unofficial English-language reference site focused on helping players understand Warhammer 40,000: Dawn of War IV before and after launch.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Editorial Status</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "8px 0 16px" }}>Built for useful answers.</h2>
            <p style={{ color: "var(--ink-muted)" }}>
              The archive is maintained as a focused guide, not an official publisher channel. All trademarks remain the property of their respective owners.
            </p>
          </aside>

          <div>
            <article className="record-block blog-post-content">
              <p className="kicker">01 // Mission</p>
              <h2>Why this archive exists</h2>
              <p>Pre-launch game information is often scattered across publisher posts, store listings, interviews, trailers, and previews. Kronus Archive turns those records into direct answers about release timing, factions, campaign co-op, multiplayer, hardware planning, and post-launch content.</p>
              <p>Our goal is not to repeat announcements. Each guide explains what a confirmed fact means for a player, identifies what remains uncertain, and gives a defensible estimate when waiting for perfect information would leave the reader without a useful answer.</p>
            </article>

            <article className="record-block blog-post-content">
              <p className="kicker">02 // Editorial Responsibility</p>
              <h2>Research, review, and AI assistance</h2>
              <p>Kronus Archive uses human-directed research and editorial review. AI-assisted tools may help organize sources, compare claims, draft language, and identify inconsistencies. They do not replace source verification or authorize invented gameplay data.</p>
              <p>Before publication, factual claims are checked against the sources displayed on the article. Estimates must name their comparison basis and confidence level. Hands-on claims, benchmarks, damage values, and build orders will be labeled as tested only after a repeatable method and game version can be recorded.</p>
            </article>

            <article className="record-block blog-post-content">
              <p className="kicker">03 // Independence</p>
              <h2>Ownership and commercial disclosure</h2>
              <p>Kronus Archive is not affiliated with, sponsored by, or endorsed by Games Workshop, Deep Silver, PLAION, KING Art Games, or Valve. Editorial conclusions are not supplied by those companies.</p>
              <p>The site may display third-party advertising to support hosting, research, and maintenance. Advertising does not affect source rankings, factual conclusions, or whether a guide recommends a purchase. Sponsored editorial content is not currently published; any future commercial relationship would be labeled clearly.</p>
            </article>

            <article className="record-block blog-post-content">
              <p className="kicker">04 // Accountability</p>
              <h2>Corrections are part of the record</h2>
              <p>Pre-launch information changes. When a publisher revises a date, feature, or roadmap, we update the affected pages and preserve necessary historical context so old search snippets are not mistaken for current facts.</p>
              <p>Read the <Link href="/standards">Editorial Standards</Link> for the evidence system or use <Link href="/contact">Contact &amp; Corrections</Link> to report a problem.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
