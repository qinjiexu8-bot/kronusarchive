import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Dawn of War 4 Intel Briefings & Guides",
  description:
    "Explore in-depth Dawn of War IV field guides, PC system requirements, mechanics breakdowns, and strategic analysis.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link>
              <span>/</span>
              <span>Intel Briefings</span>
            </div>
            <div className="subpage-hero-grid">
              <div>
                <p className="kicker">
                  Field Analysis <span aria-hidden="true">{"//"}</span> Strategic Insights
                </p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "56px", textTransform: "uppercase", margin: "8px 0 16px" }}>
                  Intel Briefings Archive.
                </h1>
                <p style={{ color: "var(--ink-muted)", fontSize: "18px", maxWidth: "680px" }}>
                  Deep-dive articles targeting confirmed gameplay systems, system requirement forecasts, and tactical breakdowns for Warhammer 40,000: Dawn of War IV.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="shell" style={{ paddingBlock: "60px 100px" }}>
          <div className="faction-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="faction-card" style={{ "--faction": "var(--accent-gold)" } as React.CSSProperties}>
                <span className="card-index">{post.category}</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "16px 0 10px", lineHeight: 1.2 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--ink)" }}>
                    {post.title}
                  </Link>
                </h2>
                <p style={{ color: "var(--ink-muted)", fontSize: "14px", textTransform: "none", letterSpacing: "normal", fontWeight: 400, marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
                <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "20px", borderTop: "1px dashed var(--border-dim)" }}>
                  <small style={{ color: "var(--ink-subtle)", fontSize: "12px" }}>{post.readTime} · {post.date}</small>
                  <Link href={`/blog/${post.slug}`} className="open-record" style={{ paddingTop: 0 }}>
                    Read Briefing ↗
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
