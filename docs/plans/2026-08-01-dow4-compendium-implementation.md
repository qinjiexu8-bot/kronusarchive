# Dawn of War IV Compendium Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a polished, Vercel-ready, English-first Dawn of War IV reference site with a home page, four faction dossiers, and transparent sourcing.

**Architecture:** Standard Next.js App Router with static server components and typed local content. Shared layout and CSS provide the battlefield-archive design, while a dynamic faction route generates one indexable page per confirmed launch faction.

**Tech Stack:** Next.js 16, React 19, TypeScript, CSS, Vercel

---

### Task 1: Convert the starter to native Vercel Next.js

**Files:**
- Modify: `package.json`
- Modify: `next.config.ts`
- Remove: Cloudflare/Vinext starter files and preview components

**Steps:**
1. Replace Vinext scripts with `next dev`, `next build`, and `next start`.
2. Remove Cloudflare-only dependencies and generated examples.
3. Install the resulting dependency graph.
4. Confirm the standard Next development server starts.

### Task 2: Add verified content data

**Files:**
- Create: `lib/site-data.ts`

**Steps:**
1. Define typed faction, roadmap, feature, and source records.
2. Add only facts confirmed by official Warhammer, Deep Silver, and Steam pages.
3. Separate confirmed information from launch-dependent guide topics.

### Task 3: Build the shared identity and home page

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/globals.css`
- Modify: `public/favicon.svg`

**Steps:**
1. Add final metadata, fonts, and Organization/WebSite structured data.
2. Implement header, hero, faction index, features, roadmap, standards block, and footer.
3. Add the industrial field-dossier visual system and responsive states.
4. Verify all primary calls to action point to live routes or official sources.

### Task 4: Build faction dossiers and editorial standards

**Files:**
- Create: `app/factions/[slug]/page.tsx`
- Create: `app/standards/page.tsx`

**Steps:**
1. Statically generate all four faction routes.
2. Render verified details, confirmed highlights, and launch-verification queues.
3. Explain the site's evidence, corrections, screenshot, and player-testing policy.
4. Add route-specific metadata and breadcrumb structured data.

### Task 5: Add indexing and deployment readiness

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`
- Create: `vercel.json`
- Modify: `README.md`

**Steps:**
1. Generate sitemap entries for the home, standards, and faction routes.
2. Add crawl rules and deployment headers.
3. Document local development and Vercel deployment.
4. Run `npm run build` and `npm run lint`; fix all actionable failures.

