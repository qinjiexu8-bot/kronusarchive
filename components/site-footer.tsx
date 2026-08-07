import Link from "next/link";
import { site, sources } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <span className="kicker" style={{ color: "var(--accent-gold)" }}>
          KA<span aria-hidden="true">{"//"}</span>IV COMMAND MATRIX
        </span>
        <p style={{ marginTop: "8px", maxWidth: "440px" }}>
          {site.name} is an independent reference field guide. It is not affiliated
          with Games Workshop, Deep Silver, KING Art Games, or Valve.
        </p>
      </div>
      <div className="footer-links">
        <strong style={{ color: "var(--ink)", marginBottom: "4px" }}>Protocol &amp; Directives</strong>
        <Link href="/blog">Intel Briefings (Blog)</Link>
        <Link href="/standards">Editorial Standards</Link>
        {sources.slice(0, 2).map((source) => (
          <a
            key={source.href}
            href={source.href}
            target="_blank"
            rel="noreferrer"
          >
            {source.label} ↗
          </a>
        ))}
      </div>
      <div className="footer-links">
        <strong style={{ color: "var(--ink)", marginBottom: "4px" }}>Legal &amp; Compliance</strong>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/copyright">Copyright &amp; IP Notice</Link>
      </div>
      <div style={{ gridColumn: "1 / -1", borderTop: "1px dashed var(--border-dim)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", fontSize: "13px" }}>
        <span>© {new Date().getFullYear()} {site.name}. Non-commercial community reference.</span>
        <span>Warhammer 40,000 trademarks belong strictly to Games Workshop Limited.</span>
      </div>
    </footer>
  );
}
