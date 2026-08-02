import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="subpage">
        <section className="hero shell" style={{ minHeight: "560px", gap: "40px" }}>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy" style={{ maxWidth: "680px" }}>
            <div className="signal-line" style={{ background: "rgba(157, 40, 48, 0.2)", borderColor: "var(--red)" }}>
              <span className="live-dot" style={{ background: "var(--red)" }} />
              Signal Lost
              <span style={{ color: "var(--red)" }}>ErrorCode: 404 // CLASSIFIED</span>
            </div>
            <p className="kicker">
              Battlefield record missing <span aria-hidden="true">{"//"}</span> Kronus Sector
            </p>
            <h1 style={{ fontSize: "clamp(36px, 5vw, 64px)" }}>
              Target dossier <span>does not exist.</span>
            </h1>
            <p className="hero-lede">
              The requested transmission path was not found or has been redacted by the Imperial Inquisition.
              Please re-establish connection from the main archive index.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/">
                Return to Archive Index ↗
              </Link>
              <Link className="button button-quiet" href="/#factions">
                View Faction Dossiers
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
