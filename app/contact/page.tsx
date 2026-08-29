import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const issuesUrl = "https://github.com/qinjiexu8-bot/kronusarchive/issues";

export const metadata: Metadata = {
  title: "Contact & Corrections",
  description:
    "Contact Kronus Archive, report an inaccurate Dawn of War 4 claim, request a correction, or raise a copyright and privacy concern.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="subpage-hero">
          <div className="shell">
            <div className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Archive Index</Link><span>/</span><span>Contact &amp; Corrections</span>
            </div>
            <div className="subpage-hero-grid">
              <div>
                <p className="kicker">Open Channel <span aria-hidden="true">{"//"}</span> Editorial Accountability</p>
                <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 64px)", textTransform: "uppercase", margin: "8px 0 16px" }}>
                  Contact &amp; Corrections.
                </h1>
                <p style={{ color: "var(--ink-muted)", fontSize: "18px", maxWidth: "760px" }}>
                  Found an outdated date, unsupported claim, broken source, privacy issue, or rights concern? Send the exact page and evidence so the record can be reviewed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="dossier-body shell">
          <aside className="dossier-summary">
            <p className="kicker">Response Protocol</p>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", margin: "8px 0 16px" }}>Evidence first.</h2>
            <p style={{ color: "var(--ink-muted)" }}>
              Clear reports with a page URL and primary source are the fastest to verify. Do not include passwords, payment data, or other sensitive personal information.
            </p>
          </aside>

          <div>
            <article className="record-block blog-post-content">
              <p className="kicker">01 // Submit a Report</p>
              <h2>Public issue tracker</h2>
              <p>Corrections and site problems can be submitted through the project&apos;s public GitHub issue tracker. Reports are public, so include only information that can safely appear on the open web.</p>
              <p>A useful report includes the affected Kronus Archive URL, the sentence or feature in question, the proposed correction, and a publisher, developer, store, or other reliable source.</p>
              <a className="button button-primary" href={issuesUrl} target="_blank" rel="noreferrer">
                Open GitHub Issues ↗
              </a>
            </article>

            <article className="record-block blog-post-content">
              <p className="kicker">02 // What to Report</p>
              <h2>Editorial, technical, and rights concerns</h2>
              <ul>
                <li><strong>Editorial correction:</strong> an outdated date, inaccurate quotation, unsupported inference, or missing uncertainty label.</li>
                <li><strong>Technical issue:</strong> a broken link, inaccessible control, display problem, or page that does not load correctly.</li>
                <li><strong>Privacy request:</strong> a question about analytics consent or information published on the site.</li>
                <li><strong>Copyright or trademark concern:</strong> identify the protected work, rights holder, affected URL, and requested action.</li>
              </ul>
            </article>

            <article className="record-block blog-post-content">
              <p className="kicker">03 // Review Process</p>
              <h2>What happens next</h2>
              <p>Reports are checked against the cited evidence. Confirmed errors are corrected in the relevant page, and materially changed articles receive an updated modification date. Disagreement with an editorial estimate does not automatically make it false, but the comparison basis and confidence label will be reviewed.</p>
              <p>For more detail, see the <Link href="/standards">Editorial Standards</Link>, <Link href="/privacy">Privacy Policy</Link>, and <Link href="/copyright">Copyright &amp; IP Notice</Link>.</p>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
