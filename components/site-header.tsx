import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${site.name} home`}>
        <span className="brand-mark" aria-hidden="true">
          IV
        </span>
        <span>
          <strong>{site.name}</strong>
          <small>Command Intelligence Matrix</small>
        </span>
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/#overview">Overview</Link>
        <Link href="/#factions">Factions</Link>
        <Link href="/blog">Intel Briefings</Link>
        <Link href="/#faq">Intel Search</Link>
        <Link href="/standards">Standards</Link>
      </nav>
      <a
        className="header-action"
        href={site.steamUrl}
        target="_blank"
        rel="noreferrer"
      >
        Steam Dossier ↗
      </a>
    </header>
  );
}
