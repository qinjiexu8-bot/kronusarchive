import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { site } from "@/lib/site-data";

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
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
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
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
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
        name: post.title,
        item: `${site.url}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
            <div style={{ maxWidth: "800px" }}>
              <p className="kicker">
                {post.category} <span aria-hidden="true">{"//"}</span> Intel Briefing
              </p>
              <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", textTransform: "uppercase", margin: "12px 0 20px", lineHeight: 1.05 }}>
                {post.title}
              </h1>
              <p style={{ color: "var(--ink-muted)", fontSize: "18px" }}>
                {post.excerpt}
              </p>
              <div style={{ display: "flex", gap: "20px", marginTop: "24px", color: "var(--ink-subtle)", fontSize: "14px", borderTop: "1px dashed var(--border-dim)", paddingTop: "16px" }}>
                <span>Published by <strong>{post.author}</strong></span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Briefing Meta</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "24px", margin: "8px 0 16px" }}>Keywords &amp; Topic</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
              {post.keywords.map((kw) => (
                <span key={kw} style={{ padding: "4px 10px", background: "rgba(245, 192, 57, 0.1)", color: "var(--accent-gold)", border: "1px solid rgba(245, 192, 57, 0.2)", fontSize: "12px", borderRadius: "3px" }}>
                  #{kw}
                </span>
              ))}
            </div>
            <div className="status-row">
              <span>Status</span>
              <span>Source Checked</span>
            </div>
          </aside>

          <div>
            {post.content.map((sec, idx) => (
              <article key={idx} className="record-block">
                <p className="kicker">Section 0{idx + 1}</p>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                  {sec.heading}
                </h2>
                <p style={{ color: "var(--ink-muted)", fontSize: "17px", lineHeight: 1.7 }}>
                  {sec.text}
                </p>
              </article>
            ))}

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
