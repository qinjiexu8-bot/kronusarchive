import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TacticalSearch } from "@/components/tactical-search";
import {
  factions,
  facts,
  faqs,
  features,
  roadmap,
  site,
  sources,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Dawn of War 4 Guide, Factions & Release Date",
  description:
    "Explore the Dawn of War 4 release date, four factions, campaign, co-op, multiplayer modes and roadmap in this source-checked guide.",
  alternates: {
    canonical: "/",
  },
};

const releaseLabel = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(`${site.releaseDate}T00:00:00Z`));

export default function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    description: site.description,
    inLanguage: "en",
  };

  const videoGameJsonLd = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    name: "Warhammer 40,000: Dawn of War IV",
    alternateName: ["Dawn of War 4", "DoW4", "DoW IV"],
    description: site.description,
    genre: ["Real-time strategy", "RTS", "Warhammer 40,000"],
    gamePlatform: ["PC", "Windows"],
    publisher: {
      "@type": "Organization",
      name: "Deep Silver",
    },
    author: {
      "@type": "Organization",
      name: "KING Art Games",
    },
    releaseDate: site.releaseDate,
    url: site.steamUrl,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <div className="signal-line">
              <span className="live-dot" />
              COMMUNICATION LINK ONLINE
              <span style={{ color: "var(--ink-muted)", opacity: 0.8 }}>PRE-LAUNCH VERIFIED 0.1</span>
            </div>
            <p className="kicker">
              BATTLEFIELD INTELLIGENCE ARCHIVE <span aria-hidden="true">{"//"}</span> KRONUS SECTOR
            </p>
            <h1>
              Dawn of War IV
              <span>FIELD GUIDE &amp; MATRIX</span>
            </h1>
            <p className="hero-lede">
              An independent, source-led intelligence field guide tracking the September 17 launch,
              four confirmed factions, 70+ mission campaign, co-op tactics, and verified post-launch roadmaps.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/#factions">
                Open Faction Index ↗
              </Link>
              <a className="button button-quiet" href="#search">
                Intel Search Terminal ⌕
              </a>
            </div>
          </div>

          <aside className="release-card" aria-label="Release briefing dashboard">
            <div className="release-card-top">
              <span>Target Launch</span>
              <span className="verified">Verified Source</span>
            </div>
            <p className="release-date">
              <span>17</span>
              <strong>SEP</strong>
              <small>2026</small>
            </p>
            <dl>
              <div>
                <dt>Platform</dt>
                <dd>PC · Steam</dd>
              </div>
              <div>
                <dt>Developer</dt>
                <dd>KING Art Games</dd>
              </div>
              <div>
                <dt>Publisher</dt>
                <dd>Deep Silver</dd>
              </div>
              <div>
                <dt>Early Access</dt>
                <dd>14 Sep · Commander</dd>
              </div>
            </dl>
            <a href={site.steamUrl} target="_blank" rel="noreferrer">
              Official Steam Store Listing <span>↗</span>
            </a>
          </aside>
        </section>

        <section className="ticker" aria-label="Confirmed game features">
          <div>
            <span>⚡ 4 Playable Factions</span>
            <span>⚡ 70+ Campaign Missions</span>
            <span>⚡ Solo &amp; 2-Player Co-op</span>
            <span>⚡ Skirmish &amp; Competitive MP</span>
            <span>⚡ Last Stand Returns</span>
          </div>
        </section>

        <section className="section shell overview-section" id="overview">
          <div className="section-heading">
            <p className="kicker">
              Core Intelligence <span aria-hidden="true">{"//"}</span> Direct Briefing
            </p>
            <h2>Dawn of War IV Overview.</h2>
            <p>
              Verified pre-launch intelligence collected directly from Warhammer Community, Deep Silver, and Steam announcements.
            </p>
          </div>
          <dl className="fact-grid">
            {facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <p className="update-note">
            <span>Last Reviewed:</span> August 1, 2026
            <span style={{ marginLeft: "auto" }}><span>Evidence Protocol:</span> First-Party Verified</span>
          </p>
        </section>

        <section className="section shell" id="factions">
          <div className="section-heading">
            <p className="kicker">
              Faction Matrix <span aria-hidden="true">{"//"}</span> 04 Active Dossiers
            </p>
            <h2>Choose Your Doctrine.</h2>
            <p>
              Four mechanically distinct armies launching with authored campaigns, command trees, build mechanics, and squad dynamics.
            </p>
          </div>
          <div className="faction-grid">
            {factions.map((faction, index) => (
              <Link
                className="faction-card"
                href={`/factions/${faction.slug}`}
                key={faction.slug}
                style={{ "--faction": faction.accent } as React.CSSProperties}
              >
                <span className="card-index">DOSSIER 0{index + 1}</span>
                <div className="faction-sigil" aria-hidden="true">
                  {faction.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <p>{faction.designation}</p>
                <h3>{faction.name}</h3>
                <span className="doctrine">{faction.motto}</span>
                <span className="open-record">Access Record ↗</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="section campaign-section">
          <div className="shell">
            <div className="section-heading">
              <p className="kicker">Strategic Campaign Scope</p>
              <h2>70+ Missions of Unrelenting War.</h2>
              <p>
                A unified planetary campaign on Kronus offering deep narrative arcs and cooperative battlefronts.
              </p>
            </div>
            <div className="feature-list">
              {features.map((feature) => (
                <article key={feature.index}>
                  <span>{feature.index}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell roadmap-section" id="roadmap">
          <div className="section-heading">
            <p className="kicker">
              Deployment Clock <span aria-hidden="true">{"//"}</span> Confirmed Roadmap
            </p>
            <h2>Post-Launch Roadmap.</h2>
            <p>
              Primary milestones officially announced by Deep Silver. Dates and expansion content will be updated as new directives arrive.
            </p>
          </div>
          <ol className="roadmap">
            {roadmap.map((item, index) => (
              <li key={item.date}>
                <span className="roadmap-node">0{index + 1}</span>
                <time>{item.date}</time>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="section faq-section shell" id="faq">
          <div className="section-heading">
            <p className="kicker">
              Command Terminal <span aria-hidden="true">{"//"}</span> Instant Filter
            </p>
            <h2>Tactical Search &amp; FAQ.</h2>
            <p>
              Search verified intelligence, release facts, platform availability, and faction specifics.
            </p>
          </div>
          <TacticalSearch />
        </section>

        <section className="section shell intel-section">
          <div className="intel-panel">
            <span className="stamp">VERIFIED PROTOCOL</span>
            <p className="kicker" style={{ marginTop: "12px" }}>Editorial Integrity</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", textTransform: "uppercase", margin: "8px 0 16px" }}>
              Zero Fabricated Statistics.
            </h2>
            <p style={{ color: "var(--ink-muted)", fontSize: "16px", marginBottom: "24px" }}>
              Pre-launch facts are strictly linked to primary sources. After launch, all unit stats and build orders will be verified against specific game versions and patch notes.
            </p>
            <Link href="/standards" className="button button-quiet" style={{ display: "inline-flex" }}>
              Review Editorial Standards →
            </Link>
          </div>
          <div className="sources">
            <p className="kicker">Primary Source Register</p>
            {sources.map((source, index) => (
              <a
                href={source.href}
                key={source.href}
                target="_blank"
                rel="noreferrer"
              >
                <span>0{index + 1}</span>
                <div>
                  <strong style={{ display: "block", color: "var(--ink)" }}>{source.label}</strong>
                  <small style={{ color: "var(--ink-muted)" }}>{source.publisher}</small>
                </div>
                <i>↗</i>
              </a>
            ))}
          </div>
        </section>

        <section className="cta shell">
          <p className="kicker">Awaiting Transmission</p>
          <h2>War Arrives on Kronus.</h2>
          <p>
            {releaseLabel} · Four Playable Armies · Dedicated Tactical Archive
          </p>
          <Link className="button button-primary" href="/factions/space-marines">
            Enter Space Marines Archive
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
