"use client";

import { useState } from "react";
import Link from "next/link";
import { factions, faqs } from "@/lib/site-data";

export function TacticalSearch() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "factions" | "faqs">("all");

  const filteredFactions = factions.filter((f) => {
    if (activeCategory === "faqs") return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      f.name.toLowerCase().includes(q) ||
      f.designation.toLowerCase().includes(q) ||
      f.summary.toLowerCase().includes(q) ||
      f.motto.toLowerCase().includes(q)
    );
  });

  const filteredFaqs = faqs.filter((faq) => {
    if (activeCategory === "factions") return false;
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return (
      faq.question.toLowerCase().includes(q) ||
      faq.answer.toLowerCase().includes(q)
    );
  });

  const totalResults = filteredFactions.length + filteredFaqs.length;

  return (
    <div className="search-widget" id="search">
      <div className="search-bar-wrapper">
        <div className="search-input-box">
          <span className="search-icon" aria-hidden="true">⌕</span>
          <input
            type="text"
            className="search-input"
            placeholder="Search intel (e.g. Space Marines, Co-op, Reanimation, Release date)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search intelligence archive"
          />
          {query && (
            <button
              type="button"
              className="search-clear"
              onClick={() => setQuery("")}
              aria-label="Clear search query"
            >
              ✕
            </button>
          )}
        </div>
        <div className="search-filters" role="tablist" aria-label="Filter intelligence category">
          <button
            type="button"
            className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            All Intel
          </button>
          <button
            type="button"
            className={`filter-pill ${activeCategory === "factions" ? "active" : ""}`}
            onClick={() => setActiveCategory("factions")}
          >
            Factions ({factions.length})
          </button>
          <button
            type="button"
            className={`filter-pill ${activeCategory === "faqs" ? "active" : ""}`}
            onClick={() => setActiveCategory("faqs")}
          >
            Field FAQ ({faqs.length})
          </button>
        </div>
      </div>

      {query.trim() && (
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", color: "var(--ink-muted)", fontSize: "14px" }}>
          <span>Search query: <strong style={{ color: "var(--accent-gold)" }}>&quot;{query}&quot;</strong></span>
          <span>Matched records: <strong style={{ color: "var(--accent-gold)" }}>{totalResults}</strong></span>
        </div>
      )}

      {query.trim() && totalResults === 0 && (
        <div style={{ marginTop: "24px", padding: "24px", background: "rgba(255, 55, 71, 0.1)", border: "1px solid var(--accent-red)", color: "var(--ink)" }}>
          <p className="kicker" style={{ color: "var(--accent-red)", margin: 0 }}>No matching records found</p>
          <p style={{ margin: "8px 0 0", fontSize: "14px", color: "var(--ink-muted)" }}>
            Try searching for broader keywords such as <em>Space Marines, Campaign, Steam, Launch</em> or <em>Dark Angels</em>.
          </p>
        </div>
      )}

      {filteredFactions.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)", fontSize: "20px", textTransform: "uppercase", marginBottom: "16px" }}>
            Matched Faction Intel ({filteredFactions.length})
          </h3>
          <div className="faction-grid">
            {filteredFactions.map((faction) => (
              <Link
                className="faction-card"
                href={`/factions/${faction.slug}`}
                key={faction.slug}
                style={{ "--faction": faction.accent } as React.CSSProperties}
              >
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
                <span className="open-record">Open record ↗</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {filteredFaqs.length > 0 && activeCategory !== "factions" && (
        <div style={{ marginTop: "32px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-gold)", fontSize: "20px", textTransform: "uppercase", marginBottom: "16px" }}>
            Verified FAQ Records ({filteredFaqs.length})
          </h3>
          <div className="faq-list">
            {filteredFaqs.map((faq, index) => (
              <details key={faq.question} open={query.length > 0 || index === 0}>
                <summary>
                  <span>0{index + 1}</span>
                  {faq.question}
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
