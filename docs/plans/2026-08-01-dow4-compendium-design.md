# Dawn of War IV Compendium — Product Design

## Product direction

Build an independent, English-first reference site for players researching *Warhammer 40,000: Dawn of War IV*. The first release is a verified pre-launch compendium rather than a pretend hands-on guide. Its primary jobs are to answer high-intent questions about release timing, factions, modes, campaign scope, and post-launch plans, then give every claim a visible confidence label and source.

The visual direction is an industrial battlefield archive: near-black surfaces, warm bone text, warning-yellow signals, regiment-red accents, stamped labels, thin tactical grids, and condensed editorial typography. It should feel like a field dossier assembled under pressure, not a generic gaming blog. The memorable interaction is the faction index: four sharply differentiated dossiers that lead into scalable faction pages.

## Architecture and content model

Use standard Next.js App Router so the project deploys directly to Vercel. Content is stored as typed local data for the first release, making every factual page fast, indexable, and easy to review. Shared components render the header, source/status badges, faction cards, and footer. Dynamic faction routes are statically generated.

The first release contains:

- A high-impact home page with release information, faction index, feature summary, roadmap, editorial standards, and source links.
- Four faction dossier routes with verified overviews, play-style notes, confirmed highlights, and content that is still awaiting launch verification.
- An editorial standards page explaining sourcing, corrections, screenshots, and testing policy.
- Search metadata, structured data, sitemap, robots rules, responsive navigation, and accessible keyboard states.

No unverified unit statistics, best builds, or fabricated screenshots will be published. Future structured records can add units, buildings, commanders, maps, patches, and player-tested build orders without changing the route model.

## Validation

The implementation must pass a production Next.js build and lint. Core content should render without client-side JavaScript. Responsive styles must cover narrow mobile screens and wide desktop displays. Navigation, semantic headings, visible focus states, reduced-motion handling, descriptive links, and sufficient contrast are required.

