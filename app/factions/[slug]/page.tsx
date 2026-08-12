import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { factions, getFaction, site } from "@/lib/site-data";

type FactionPageProps = {
  params: Promise<{ slug: string }>;
};

const factionGuideRoutes: Record<string, string> = {
  "space-marines": "/blog/dawn-of-war-4-space-marines-faction-guide",
  orks: "/blog/dawn-of-war-4-orks-faction-guide",
  necrons: "/blog/dawn-of-war-4-necrons-faction-guide",
  "adeptus-mechanicus": "/blog/dawn-of-war-4-adeptus-mechanicus-faction-guide",
};

export function generateStaticParams() {
  return factions.map((faction) => ({ slug: faction.slug }));
}

export async function generateMetadata({
  params,
}: FactionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const faction = getFaction(slug);

  if (!faction) {
    return {};
  }

  return {
    title: `Dawn of War 4 ${faction.name} Faction Guide`,
    description: `Learn how the ${faction.name} faction plays in Dawn of War IV, including confirmed mechanics, campaign details and launch strategy topics.`,
    alternates: {
      canonical: `/factions/${faction.slug}`,
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function FactionPage({ params }: FactionPageProps) {
  const { slug } = await params;
  const faction = getFaction(slug);

  if (!faction) {
    notFound();
  }

  const currentIndex = factions.findIndex((f) => f.slug === slug);
  const prevFaction = factions[(currentIndex - 1 + factions.length) % factions.length];
  const nextFaction = factions[(currentIndex + 1) % factions.length];

  const initials = faction.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Factions",
        item: `${site.url}/#factions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: faction.name,
        item: `${site.url}/factions/${faction.slug}`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `Dawn of War 4 ${faction.name} Faction Guide`,
    description: faction.summary,
    datePublished: "2026-08-01",
    dateModified: "2026-08-01",
    author: {
      "@type": "Organization",
      name: "Kronus Archive Editorial Desk",
    },
    publisher: {
      "@type": "Organization",
      name: "Kronus Archive",
    },
    mainEntityOfPage: `${site.url}/factions/${faction.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />
      <main
        className="subpage"
        style={{ "--faction": faction.accent } as React.CSSProperties}
      >
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive</Link>
              <span>/</span>
              <Link href="/#factions">Factions</Link>
              <span>/</span>
              <span>{faction.name}</span>
            </div>
            <div className="subpage-hero-grid">
              <div>
                <p className="kicker">
                  {faction.designation} <span aria-hidden="true">{"//"}</span> faction
                  record
                </p>
                <h1>
                  {faction.name} <span>faction guide</span>
                </h1>
                <p>
                  This Dawn of War IV {faction.name} guide covers the faction’s
                  confirmed identity, campaign role and mechanics. {faction.summary}
                </p>
              </div>
              <div className="dossier-mark" aria-hidden="true">
                <span>{initials}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Doctrine assessment</p>
            <h2>{faction.motto}</h2>
            <p>{faction.doctrine}</p>
            <div className="status-row">
              <span>Record status</span>
              <span>Pre-launch verified</span>
            </div>
            <div className="status-row">
              <span>Last reviewed</span>
              <span>12 Aug 2026</span>
            </div>
          </aside>

          <div>
            <article className="record-block">
              <p className="kicker">Confirmed intelligence</p>
              <h2>What is known.</h2>
              <ol className="record-list">
                {faction.confirmed.map((item, index) => (
                  <li key={item}>
                    <span>0{index + 1}</span>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ol>
            </article>

            <article className="record-block">
              <p className="kicker">Launch verification queue</p>
              <h2>What we will test.</h2>
              <p>
                These topics need live-game data. They remain clearly marked as
                pending until a game version, method, and verification date can
                be attached.
              </p>
              <div className="pending-list">
                {faction.verifyAtLaunch.map((item) => (
                  <div key={item}>
                    ▧ Pending <span aria-hidden="true">{"//"}</span> {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="record-block">
              <p className="kicker">Primary briefing</p>
              <h2>Continue the record.</h2>
              <p>
                Continue to the complete source-checked faction guide for
                mechanics, units, strategic interpretation, FAQs, and launch
                verification priorities.
              </p>
              <div className="hero-actions">
                <Link
                  className="button button-primary"
                  href={factionGuideRoutes[faction.slug]}
                >
                  Read Complete Guide ↗
                </Link>
                <Link className="button button-quiet" href="/standards">
                  Editorial standards
                </Link>
              </div>
            </article>

            <article className="record-block faction-navigation-block">
              <p className="kicker">Cross-reference intel</p>
              <h2>Explore adjacent factions.</h2>
              <div className="faction-nav-grid">
                <Link
                  className="faction-nav-card"
                  href={`/factions/${prevFaction.slug}`}
                  style={{ "--faction": prevFaction.accent } as React.CSSProperties}
                >
                  <small>← Previous Record</small>
                  <strong>{prevFaction.name}</strong>
                  <span>{prevFaction.motto}</span>
                </Link>
                <Link
                  className="faction-nav-card"
                  href={`/factions/${nextFaction.slug}`}
                  style={{ "--faction": nextFaction.accent } as React.CSSProperties}
                >
                  <small>Next Record →</small>
                  <strong>{nextFaction.name}</strong>
                  <span>{nextFaction.motto}</span>
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
