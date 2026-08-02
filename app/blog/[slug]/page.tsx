import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { site, sources as defaultSources } from "@/lib/site-data";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle ?? post.title,
      description: post.excerpt,
      type: "article",
      url: `${site.url}/blog/${post.slug}`,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
      images: [
        {
          url: `${site.url}/og.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [`${site.url}/og.png`],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: post.author,
      url: `${site.url}/standards`,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

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
        name: "Intel Briefings",
        item: `${site.url}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.shortTitle,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  const faqJsonLd = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const verificationSources = post.sources ?? defaultSources.slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <Link href="/blog">Intel Briefings</Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>
            <div style={{ maxWidth: "860px" }}>
              {post.officialStatus && (
                <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(245, 192, 57, 0.12)", color: "var(--accent-gold)", border: "1px solid rgba(245, 192, 57, 0.3)", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px", borderRadius: "3px" }}>
                  {post.officialStatus}
                </div>
              )}
              <p className="kicker">
                {post.category} <span aria-hidden="true">{"//"}</span> Intel Briefing
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4.5vw, 56px)", textTransform: "uppercase", margin: "8px 0 16px", lineHeight: 1.05 }}>
                {post.title}
              </h1>
              <p style={{ color: "var(--ink-muted)", fontSize: "18px", lineHeight: 1.6 }}>
                {post.excerpt}
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "24px", color: "var(--ink-subtle)", fontSize: "14px", borderTop: "1px dashed var(--border-dim)", paddingTop: "16px" }}>
                <span>Published by <strong>{post.author}</strong></span>
                <span>•</span>
                <span>Last Updated: <strong style={{ color: "var(--accent-gold)" }}>{post.dateModified}</strong></span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Briefing Meta</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 12px" }}>Keywords &amp; Topic</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {post.keywords.map((kw) => (
                <span key={kw} style={{ padding: "4px 10px", background: "rgba(245, 192, 57, 0.1)", color: "var(--accent-gold)", border: "1px solid rgba(245, 192, 57, 0.2)", fontSize: "12px", borderRadius: "3px" }}>
                  #{kw}
                </span>
              ))}
            </div>
            <div className="status-row">
              <span>Record Status</span>
              <span>Source Checked</span>
            </div>
            <div className="status-row">
              <span>Date Modified</span>
              <span>{post.dateModified}</span>
            </div>
          </aside>

          <div>
            <article className="record-block blog-post-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            {post.faqs?.length ? (
              <article className="record-block blog-post-content">
                <p className="kicker">Quick Answers</p>
                <h2>Frequently Asked Questions</h2>
                {post.faqs.map((faq) => (
                  <section key={faq.question}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </section>
                ))}
              </article>
            ) : null}

            <article className="record-block">
              <p className="kicker">Primary Sources</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "8px 0 16px" }}>
                Verification Links
              </h2>
              <p style={{ color: "var(--ink-muted)", marginBottom: "20px" }}>
                This briefing separates publisher-confirmed information from editorial estimates. Check the official records below for the latest changes.
              </p>
              <ul className="record-list">
                {verificationSources.map((source) => (
                  <li key={source.href}>
                    <a href={source.href} target="_blank" rel="noreferrer" style={{ color: "var(--accent-gold)", fontWeight: 700 }}>
                      {source.label} — {source.publisher} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            <article className="record-block">
              <p className="kicker">Archive Navigation</p>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "8px 0 16px" }}>
                Return to Intel Index
              </h2>
              <p style={{ color: "var(--ink-muted)", marginBottom: "20px" }}>
                Explore more Dawn of War IV field guides, faction breakdowns, and roadmap updates in the central archive.
              </p>
              <div className="hero-actions">
                <Link href="/blog" className="button button-primary">
                  All Intel Briefings ↗
                </Link>
                <Link href="/#factions" className="button button-quiet">
                  Faction Matrix
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
