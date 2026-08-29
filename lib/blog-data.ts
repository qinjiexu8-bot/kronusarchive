export type BlogPost = {
  slug: string;
  title: string;
  seoTitle?: string;
  shortTitle: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: "System Specs" | "Faction Mechanics" | "Campaign & Co-op" | "Pre-order & Editions";
  readTime: string;
  keywords: string[];
  officialStatus?: string;
  indexable?: boolean;
  sources?: { label: string; publisher: string; href: string }[];
  faqs?: { question: string; answer: string }[];
  contentHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dawn-of-war-4-system-requirements-speculations",
    title: "Dawn of War 4 System Requirements: Estimated PC Specs",
    seoTitle: "Dawn of War 4 System Requirements Estimate",
    shortTitle: "Dawn of War 4 System Requirements",
    excerpt: "See our estimated Dawn of War 4 PC requirements, built from Iron Harvest, Company of Heroes 3, and Tempest Rising, plus practical upgrade advice.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-29",
    author: "Kronus Archive Tech Desk",
    category: "System Specs",
    readTime: "8 min read",
    keywords: ["Dawn of War 4 system requirements", "Dawn of War IV PC specs", "Dawn of War 4 hardware"],
    officialStatus: "Editorial estimate — official specs not yet announced",
    sources: [
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
      { label: "Dawn of War IV official FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
      { label: "Release date update and optimization note", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/release-date-update" },
      { label: "Iron Harvest system requirements", publisher: "Steam", href: "https://store.steampowered.com/app/826630/Iron_Harvest/" },
      { label: "Company of Heroes 3 system requirements", publisher: "Steam", href: "https://store.steampowered.com/app/1677280/Company_of_Heroes_3/" },
      { label: "Tempest Rising PC system requirements", publisher: "Saber Support", href: "https://support.saber.games/hc/en/tempest-rising/articles/pc-system-requirements-2" },
    ],
    faqs: [
      { question: "What are the estimated Dawn of War 4 system requirements?", answer: "Our working minimum is a Ryzen 5 1600 or Core i5-8600, GTX 1060 6GB or RX 580 8GB, 8 GB RAM, and roughly 60 GB of SSD space. For 1080p high settings, we would target a Ryzen 5 5600X or Core i5-11600K, RTX 3060 Ti or RX 6700 XT, and 16 GB RAM. These are estimates, not official requirements." },
      { question: "Are the Dawn of War 4 system requirements official?", answer: "No. Steam currently confirms only a 64-bit processor and operating system. The named hardware on this page is an editorial estimate based on comparable RTS games and may change when Deep Silver publishes final specifications." },
      { question: "Will Dawn of War 4 require Windows 11?", answer: "Probably not. Comparable modern RTS games support 64-bit Windows 10 and Windows 11, so Windows 10 is our medium-confidence minimum estimate. Deep Silver has not yet confirmed the exact version." },
      { question: "Should I upgrade my PC before launch?", answer: "A system near the estimated recommended tier should be a sensible target for modern 1080p RTS gaming, but avoid buying a new GPU solely for Dawn of War 4 until official performance targets appear. An SSD and 16 GB RAM are lower-risk upgrades." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Best current estimate:</strong> plan around a Core i5-8600 or Ryzen 5 1600, GTX 1060 6GB or RX 580 8GB, 8 GB RAM, and about 60 GB of SSD space as a likely minimum. For a safer 1080p high-settings target, aim for a Core i5-11600K or Ryzen 5 5600X, RTX 3060 Ti or RX 6700 XT, and 16 GB RAM. <strong>Confidence: medium-low.</strong> These are editorial estimates, not requirements published by Deep Silver.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#estimated-specs">estimated specs</a> · <a href="#comparison-method">comparison games</a> · <a href="#upgrade-advice">upgrade advice</a> · <a href="#estimate-limits">uncertainty</a></nav>

<h2 id="estimated-specs">Estimated Dawn of War 4 PC requirements</h2>
<p><em>Warhammer 40,000: Dawn of War IV</em> is confirmed for Windows PC through Steam. As checked on August 29, Steam still lists only a 64-bit processor and operating system; the minimum OS says “Coming soon.” Deep Silver's August delay announcement specifically mentions further polish and optimization, but it does not provide hardware specifications. The table therefore gives a practical planning range inferred from three relevant RTS references rather than leaving readers without an answer.</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Hardware Component</th>
      <th>Official status</th>
      <th>Our estimated minimum</th>
      <th>Our safer 1080p target</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Operating System</strong></td>
      <td>64-bit OS required</td>
      <td>Windows 10 64-bit</td>
      <td>Windows 10 or 11 64-bit</td>
    </tr>
    <tr>
      <td><strong>Processor (CPU)</strong></td>
      <td>64-bit processor required</td>
      <td>Core i5-8600 / Ryzen 5 1600</td>
      <td>Core i5-11600K / Ryzen 5 5600X</td>
    </tr>
    <tr>
      <td><strong>Memory (RAM)</strong></td>
      <td>Not announced</td>
      <td>8 GB</td>
      <td>16 GB</td>
    </tr>
    <tr>
      <td><strong>Graphics Card (GPU)</strong></td>
      <td>Not announced</td>
      <td>GTX 1060 6GB / RX 580 8GB</td>
      <td>RTX 3060 Ti / RX 6700 XT-class</td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>Not announced</td>
      <td>60 GB available; SSD recommended</td>
      <td>60–80 GB available on SSD</td>
    </tr>
  </tbody>
</table>

<p>The “minimum” column should be read as a plausible low-settings entry point, not a promise of 1080p/60 FPS. The safer target deliberately leaves headroom for large battles, effects, later campaign missions, and multiplayer maps.</p>

<h2 id="comparison-method">How we produced the estimate</h2>
<p>We used games that overlap with Dawn of War IV in developer history, genre, battlefield scale, or release period. None is a perfect benchmark, so the estimate weights the newer, more demanding reference more heavily.</p>
<table class="data-table">
  <thead><tr><th>Reference game</th><th>Why it is relevant</th><th>Minimum</th><th>Recommended</th></tr></thead>
  <tbody>
    <tr><td><strong>Iron Harvest</strong></td><td>Previous large-scale RTS from KING Art Games</td><td>i5-4460, GTX 960 4GB, 8 GB RAM</td><td>i7-8700K, RTX 2060, 16 GB RAM</td></tr>
    <tr><td><strong>Company of Heroes 3</strong></td><td>Modern squad RTS with cover, destruction, and large tactical battles</td><td>6th-gen 4-core i5, GTX 950, 8 GB RAM</td><td>8th-gen 8-core i7, GTX 1660, 16 GB RAM</td></tr>
    <tr><td><strong>Tempest Rising</strong></td><td>Recent cinematic base-building RTS with armies and modern effects</td><td>i5-8600, GTX 1060/RX 580, 8 GB RAM</td><td>i5-11600K, RTX 3060 Ti, 16 GB RAM</td></tr>
  </tbody>
</table>
<p>Our estimate begins near Tempest Rising because Dawn of War IV launches in 2026 and advertises large armies, detailed Sync Kills, base construction, four asymmetric factions, and a campaign exceeding 70 missions. We do not assume identical engines or optimization; the comparison only provides a defensible planning band.</p>

<h2 id="upgrade-advice">Can your PC probably run Dawn of War 4?</h2>
<ul>
  <li><strong>GTX 1060 / RX 580 with 8 GB RAM:</strong> likely in minimum territory. Expect compromises and wait for official targets before buying the game for this PC.</li>
  <li><strong>GTX 1660 Super / RTX 2060 with 16 GB RAM:</strong> likely playable at 1080p with adjusted settings, but large-battle performance is uncertain.</li>
  <li><strong>RTX 3060 Ti / RX 6700 XT with a Ryzen 5 5600X-class CPU:</strong> our current safer 1080p target.</li>
  <li><strong>Integrated graphics:</strong> possible only if official optimization is unusually broad; do not plan around it yet.</li>
  <li><strong>Steam Deck:</strong> no verified compatibility or performance target has been announced.</li>
</ul>
<p>RTS performance can become CPU-limited when unit counts, pathfinding, AI, and simulation load increase. A newer six-core processor may matter as much as moving one GPU tier higher. An SSD and 16 GB RAM are relatively safe general upgrades; buying a high-end graphics card solely for this game is harder to justify before official testing.</p>

<h2 id="estimate-limits">What could make this estimate wrong?</h2>
<p>The final engine, graphics presets, resolution targets, upscaling support, campaign scale, and optimization are unknown. Official “minimum” labels also vary: one publisher may target 720p/30 FPS while another expects 1080p. Our confidence is therefore <strong>medium-low</strong> for individual parts but <strong>medium</strong> for the broader conclusion that 16 GB RAM, an SSD, and an RTX 2060-to-3060-class GPU form a sensible pre-launch planning range.</p>
<p>When Deep Silver publishes the real table, this article will replace estimated rows with official specifications while retaining the comparison for context.</p>
`,
  },
  {
    slug: "dawn-of-war-4-release-date-editions-early-access",
    title: "Dawn of War 4 Release Date Delayed to December 3",
    seoTitle: "Dawn of War 4 Release Date: Dec 3 Delay",
    shortTitle: "Dawn of War 4 Release Date & Editions",
    excerpt: "Dawn of War 4 was delayed to December 3, 2026. See the new November 30 Commander unlock, why the date moved, editions, and roadmap impact.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-29",
    author: "Kronus Archive Commercial Desk",
    category: "Pre-order & Editions",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 release date", "Dawn of War 4 Commander Edition", "Dawn of War 4 pre-order bonus"],
    officialStatus: "Publisher Confirmed: December 3, 2026 Launch",
    sources: [
      { label: "Release date update", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/release-date-update" },
      { label: "Editions and DLC plans", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
    ],
    faqs: [
      { question: "When does Dawn of War 4 release?", answer: "Dawn of War IV now releases for Windows PC on December 3, 2026. Deep Silver delayed the game from its previous September 17 date." },
      { question: "When does Commander Edition advance access begin?", answer: "The revised three-day advance-access date is November 30, 2026 for eligible Commander Edition purchases." },
      { question: "How much is the Commander Edition?", answer: "The US Steam list price is $89.99, with a 10% pre-purchase price of $80.99 as checked on August 12, 2026. Regional prices can differ." },
      { question: "What is included in the Commander Edition?", answer: "It includes the base game, Blood Ravens Story Prologue, Aftermath campaign expansion with a new faction, digital soundtrack, and the announced Year One expansion content." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Updated August 29:</strong> Deep Silver delayed Dawn of War IV from September 17 to <strong>December 3, 2026</strong>. Commander Edition advance access now begins <strong>November 30</strong>. The publisher says the extra development time will be used for additional polish and optimization.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#release-timeline">release timeline</a> · <a href="#edition-comparison">edition comparison</a> · <a href="#unlock-questions">preload and unlock</a> · <a href="#buying-advice">buying advice</a></nav>
<h2 id="release-timeline">1. Launch Timeline & Early Unlock Access</h2>
<p>
  Publisher Deep Silver has confirmed that <em>Warhammer 40,000: Dawn of War IV</em> now launches worldwide on <strong>December 3, 2026</strong> for Windows PC via Steam. Players who acquire the eligible digital <em>Commander Edition</em> retain a three-day advance-access benefit, now beginning <strong>November 30, 2026</strong>.
</p>
<p>The game was previously scheduled for September 17, with advance access on September 14. Those dates are no longer current. This page keeps the old dates only as historical context so players can distinguish outdated store copy, videos, and search snippets from the revised schedule.</p>

<h2>Why was Dawn of War 4 delayed?</h2>
<p>Deep Silver says the additional development time gives KING Art Games an opportunity to further enhance the game and deliver the intended quality. The publisher specifically points to extra polish and optimization rather than announcing a change in platforms, factions, or campaign scope.</p>
<p>That explanation is broad, so it should not be turned into an unsupported claim about a particular bug, performance target, or unfinished mode. The confirmed takeaway is simply that the release moved by eleven weeks and the team will use that time on quality improvements. New hardware requirements, beta dates, or feature cuts have not been announced with the delay.</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Milestone Date</th>
      <th>Edition Required</th>
      <th>Unlocked Content &amp; Access</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>30 NOV 2026</strong></td>
      <td>Commander Edition ($89.99 US list price)</td>
      <td>Revised three-day advance-access date</td>
    </tr>
    <tr>
      <td><strong>03 DEC 2026</strong></td>
      <td>Standard Edition ($59.99 US list price)</td>
      <td>Revised worldwide Windows PC release</td>
    </tr>
    <tr>
      <td><strong>2027 · DATES TBA</strong></td>
      <td>All Game Owners</td>
      <td>Revised Year One rollout; individual content dates remain unannounced</td>
    </tr>
  </tbody>
</table>

<h2 id="edition-comparison">2. Standard vs. Commander Edition Feature Comparison</h2>
<p>
  The practical choice is between the base game and a larger Year One bundle. US prices below are Steam list prices checked on August 12, 2026; the 10% pre-purchase discount and regional pricing can change what you pay.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Included Feature / Content</th>
      <th>Standard Edition ($59.99)</th>
      <th>Commander Edition ($89.99)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Full Base Game (70+ Missions)</td>
      <td>✅ Included</td>
      <td>✅ Included</td>
    </tr>
    <tr>
      <td>4 Launch Factions (Marines, Orks, Necrons, AdMech)</td>
      <td>✅ Included</td>
      <td>✅ Included</td>
    </tr>
    <tr>
      <td>3-Day Advance Access (Nov 30)</td>
      <td>❌ Standard Unlock (Dec 3)</td>
      <td><strong>✅ Included (72h Early Unlock)</strong></td>
    </tr>
    <tr>
      <td>Blood Ravens Story Prologue</td>
      <td>❌ Not included</td>
      <td>✅ Included</td>
    </tr>
    <tr>
      <td>Aftermath campaign expansion + new faction</td>
      <td>❌ Separate premium DLC</td>
      <td><strong>✅ Included</strong></td>
    </tr>
  </tbody>
</table>

<h2 id="unlock-questions">Preload, exact unlock time, and advance access</h2>
<p>The publisher confirms the November 30 advance-access date and December 3 standard release date, but an exact global unlock hour and preload schedule are not included in the cited announcement. Players should treat countdowns from third-party stores as estimates until Steam displays a download or unlock timer.</p>
<p>The three-day benefit is advance access to the release build, not a public beta and not Steam Early Access. That distinction matters: the game has a fixed full-release date, and the Commander Edition simply opens it earlier. Balance updates or technical fixes can still arrive during and after that window.</p>
<table class="data-table">
  <thead><tr><th>Question</th><th>Best current answer</th><th>Confidence</th></tr></thead>
  <tbody>
    <tr><td><strong>Will there be a preload?</strong></td><td>Likely for a major Steam release, but not officially listed</td><td>Medium-low</td></tr>
    <tr><td><strong>When is the exact unlock hour?</strong></td><td>Not yet published; check the Steam countdown close to release</td><td>Officially unknown</td></tr>
    <tr><td><strong>Is November 30 a beta?</strong></td><td>No; it is advance access to the purchased release edition</td><td>High</td></tr>
    <tr><td><strong>Is a console version included?</strong></td><td>No; only Windows PC via Steam is currently confirmed</td><td>High</td></tr>
  </tbody>
</table>

<h2>What the base game includes at launch</h2>
<p>Both editions include the same base game: four mechanically distinct factions, four connected campaigns totaling more than 70 missions, competitive multiplayer, Skirmish, and the returning Last Stand mode. Campaign missions support solo play or two-player co-op. Paying for Commander Edition does not unlock a stronger launch army or exclusive competitive statistics.</p>
<p>The four launch factions are Space Marines, Orks, Necrons, and Adeptus Mechanicus. Before choosing an edition for a preferred army, compare their confirmed systems in our <a href="/blog/dawn-of-war-4-factions-compared">Dawn of War 4 factions guide</a>.</p>

<h2>What the Commander Edition adds</h2>
<p>The higher-priced edition bundles the Blood Ravens Story Prologue, the Aftermath campaign expansion with an additional faction, the digital soundtrack, and announced Year One expansion content. The delay also shifts the post-launch calendar: the revised roadmap moves the Year One rollout into 2027, while individual content dates remain subject to later announcements.</p>
<p>The price difference is $30 at US list prices. That premium should be evaluated as a content bundle, not only as payment for three early days. Players who want both campaign expansions are the clearest audience; players focused on the launch campaign or competitive multiplayer can begin with Standard without losing a confirmed launch faction.</p>

<h2 id="buying-advice">3. Buyer Recommendation & Verdict</h2>
<div class="recommendation-box">
  <h3>Which Edition Should You Buy?</h3>
  <ul>
    <li><strong>Buy Standard Edition ($59.99) if:</strong> You plan to play solo campaign missions at your own pace and do not mind waiting until December 3.</li>
    <li><strong>Buy Commander Edition ($89.99 US list price) if:</strong> You value the three-day early unlock, both announced premium DLCs, and the digital soundtrack enough to pay the higher price.</li>
  </ul>
</div>
<h2>Refund and purchase considerations</h2>
<p>Steam's normal refund eligibility depends on purchase timing and recorded playtime, and advance-access play may count toward that playtime. Buyers should read the current Steam refund terms in their own region before using most of the three-day window. Kronus Archive does not treat a preorder discount as evidence that the game will run well on a particular PC.</p>
<p>If hardware compatibility is the deciding factor, compare our clearly labeled <a href="/blog/dawn-of-war-4-system-requirements-speculations">estimated PC requirements</a> and wait for Deep Silver's official specification table. If post-launch content is the deciding factor, review the <a href="/blog/dawn-of-war-4-year-one-roadmap-dlc">Year One roadmap tracker</a>.</p>
<p><strong>Bottom line:</strong> Standard is the lower-risk purchase for most players. Commander Edition makes sense when the two announced campaign additions and soundtrack already justify the $30 list-price difference; advance access alone is a weak reason to upgrade.</p>
`,
  },
  {
    slug: "dawn-of-war-4-factions-compared",
    title: "Dawn of War 4 Factions: Which Army Should You Pick?",
    seoTitle: "Dawn of War 4 Factions Compared",
    shortTitle: "Dawn of War 4 Factions & Army Comparison Guide",
    excerpt: "Compare all four confirmed Dawn of War 4 factions—Space Marines, Orks, Necrons, and Adeptus Mechanicus—and find the army that fits your RTS style.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-12",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "12 min read",
    keywords: ["Dawn of War 4 factions comparison", "Dawn of War 4 best faction", "Dawn of War 4 army pick guide"],
    officialStatus: "Developer Confirmed Faction Roster",
    sources: [
      { label: "Dawn of War IV official overview and FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
    ],
    faqs: [
      { question: "What factions are in Dawn of War 4?", answer: "The four confirmed launch factions are Space Marines, Orks, Necrons, and Adeptus Mechanicus. Each has its own campaign and distinct mechanics." },
      { question: "Which Dawn of War 4 faction is best for beginners?", answer: "The publisher has not issued an official difficulty ranking. Because the developers describe Space Marine structures as the most straightforward, Space Marines are the clearest starting point to watch." },
      { question: "Is there a confirmed best faction?", answer: "No. Balance is still being refined before release, and the developers plan to use launch data and player feedback for further changes." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Space Marines are the clearest beginner choice; Orks suit aggressive expansion; Necrons reward slow territorial snowballing; and Adeptus Mechanicus offer the deepest network-based base planning. This is a playstyle recommendation, not a pre-launch tier list.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#faction-matrix">comparison matrix</a> · <a href="#space-marines-choice">Space Marines</a> · <a href="#orks-choice">Orks</a> · <a href="#necrons-choice">Necrons</a> · <a href="#admech-choice">Adeptus Mechanicus</a> · <a href="#faction-verdict">recommendation</a></nav>
<h2 id="faction-matrix">1. Four Launch Armies: Side-by-Side Comparison</h2>
<p>
  Selecting a faction changes buildings, economy, commanders, units, and battlefield mechanics. The roster and faction identities below are developer-confirmed; difficulty and mobility labels are editorial guidance based on current official descriptions, not launch balance data.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Faction Name</th>
      <th>Difficulty Rating</th>
      <th>Mobility Score</th>
      <th>Core Faction Identity</th>
      <th>Best Fit Player Profile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/blog/dawn-of-war-4-space-marines-faction-guide"><strong>Space Marines</strong></a></td>
      <td>⭐ Low (Beginner Friendly)</td>
      <td>⭐⭐ Mid (Drop-Pod Support)</td>
      <td>Elite durable squads, flexible commanders</td>
      <td>Players who prefer disciplined, low-attrition tactical play</td>
    </tr>
    <tr>
      <td><a href="/blog/dawn-of-war-4-orks-faction-guide"><strong>Orks</strong></a></td>
      <td>⭐⭐ Mid (Horde Management)</td>
      <td>⭐⭐⭐ High (Waaagh! Charges)</td>
      <td>Mass numbers, ramshackle tech, aggressive rushes</td>
      <td>Players who enjoy swarm tactics, constant pressure &amp; aggression</td>
    </tr>
    <tr>
      <td><a href="/blog/dawn-of-war-4-necrons-faction-guide"><strong>Necrons</strong></a></td>
      <td>⭐⭐⭐ High (Macro Tech Tree)</td>
      <td>⭐ Low (Methodical Push)</td>
      <td>Reanimation protocols, immortal war engines</td>
      <td>Players who favor defensive scaling &amp; crushing late-game war engines</td>
    </tr>
    <tr>
      <td><a href="/blog/dawn-of-war-4-adeptus-mechanicus-faction-guide"><strong>Adeptus Mechanicus</strong></a></td>
      <td>⭐⭐⭐ High (Network Micro)</td>
      <td>⭐⭐ Mid (Linked Nodes)</td>
      <td>Noosphere building links, turret overcharges</td>
      <td>Players who love base building synergy &amp; defensive choke-points</td>
    </tr>
  </tbody>
</table>

<p>The difficulty and mobility labels are editorial assessments with medium confidence. They are derived from the official faction previews and multiplayer AMA, not from a playable review build. Exact balance, economy efficiency, and matchup strength can change before and after launch.</p>

<h2 id="space-marines-choice">Choose Space Marines for elite squad preservation</h2>
<p>Space Marines field expensive, powerful squads and are expected to win many equal early engagements. Their structures can deploy from orbit anywhere within vision, with longer deployment times farther from headquarters and a visible warning for opponents. Fortifications, Reserves, and the Thunderhawk Relay help compensate for an elite army that cannot occupy every part of a large map.</p>
<p>They are our best beginner recommendation because KING Art Games calls their building progression the most straightforward. Beginner-friendly does not mean mechanically shallow: upgrades, veterancy, retreat timing, on-field reinforcement, and the choice between Blood Ravens and Dark Angels create meaningful decisions. Read the full <a href="/blog/dawn-of-war-4-space-marines-faction-guide">Space Marines faction guide</a>.</p>

<h2 id="orks-choice">Choose Orks for numbers and forward pressure</h2>
<p>Orks combine relatively inexpensive units and buildings with a Waaagh! meter charged by fielding more Orks and killing enemies. Almost any Ork infantry can construct structures; those structures are armed and can bring production closer to contested ground. Orks can also construct their own cover.</p>
<p>This makes them attractive to players who prefer initiative over perfect efficiency. The main risk is overextension: forward infrastructure is relatively easy to destroy, and replacing models can consume the same economy needed for technology. Our <a href="/blog/dawn-of-war-4-orks-faction-guide">Orks guide</a> explains the confirmed units, Gorgutz, Guzcutta, and Waaagh! framework.</p>

<h2 id="necrons-choice">Choose Necrons for resilience and territorial snowballing</h2>
<p>Necrons expand a Power Matrix from their Tomb Citadel. Many structures require this field, a larger Matrix produces Dominion, and friendly units on it heal faster and become tougher. Resurrection Galleries can return a selected fallen unit type for free, although cooldowns and limitations remain unpublished.</p>
<p>The faction is deliberately slow, but Tomb Pylons, Translocation Science, and the Monolith provide later mobility. Choose Necrons if you enjoy establishing favorable territory and forcing opponents to dismantle a growing system. See the updated <a href="/blog/dawn-of-war-4-necrons-faction-guide">Necrons guide</a> for confirmed teleportation and unit roles.</p>

<h2 id="admech-choice">Choose Adeptus Mechanicus for connected infrastructure</h2>
<p>The Adeptus Mechanicus link buildings to headquarters through a Noosphere Network. Adding connected structures increases network level, unlocks stronger technology, and benefits production and units within its influence. Auger Vision provides imperfect intelligence under fog of war, while the Void Shield changes ranged firing lines without preventing enemies from walking through it.</p>
<p>This is the strongest fit for players who enjoy base topology, information tools, ranged combined arms, and protecting critical connections. The same dependencies create a higher expected learning curve. The <a href="/blog/dawn-of-war-4-adeptus-mechanicus-faction-guide">Adeptus Mechanicus guide</a> separates confirmed mechanics from unsupported build orders.</p>

<h2>How to choose without a pre-launch tier list</h2>
<ol>
  <li><strong>Choose the economy you want to manage:</strong> elite preservation, aggressive expansion, Matrix snowball, or connected Noosphere.</li>
  <li><strong>Choose the map-control style:</strong> selective rapid response, forward pressure, fortified territory, or network reach.</li>
  <li><strong>Choose the acceptable complexity:</strong> Space Marines appear clearest to start, while AdMech adds more infrastructure dependencies.</li>
  <li><strong>Ignore “best faction” claims without a version and test method:</strong> no reliable competitive sample exists before release.</li>
  <li><strong>Reassess after launch:</strong> maps, mode, Commander selection, and balance patches may matter more than a general ranking.</li>
</ol>

<h2 id="faction-verdict">2. Summary & Army Recommendation Verdict</h2>
<div class="recommendation-box">
  <h3>Which Army Should You Pick First?</h3>
  <ul>
    <li><strong>Pick Space Marines if:</strong> You are new to RTS games or want strong, durable units that are easy to manage.</li>
    <li><strong>Pick Orks if:</strong> You love non-stop aggression and swarming enemy resource points from minute one.</li>
    <li><strong>Pick Necrons if:</strong> You enjoy slow, unstoppable late-game technological pushes.</li>
    <li><strong>Pick Adeptus Mechanicus if:</strong> You enjoy intricate base building and networked defense systems.</li>
  </ul>
</div>
<p><strong>Final recommendation:</strong> start with Space Marines if you are uncertain, choose Orks for relentless initiative, choose Necrons for methodical scaling, and choose Adeptus Mechanicus when base-network planning is the main appeal. These recommendations describe learning style and faction fantasy, not expected win rate.</p>
`,
  },
  {
    slug: "space-marines-dark-angels-sub-faction-differences",
    title: "Blood Ravens vs Dark Angels in Dawn of War 4",
    seoTitle: "Dawn of War 4: Blood Ravens vs Dark Angels",
    shortTitle: "Blood Ravens vs Dark Angels",
    excerpt: "Compare Dawn of War 4's Blood Ravens and Dark Angels, including their campaign roles, commanders, Deathwing, Ravenwing, and confirmed differences.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-12",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 Dark Angels", "Blood Ravens vs Dark Angels Dawn of War IV", "Space Marines sub-factions"],
    officialStatus: "Based on official story and faction material",
    sources: [
      { label: "Dawn of War IV official faction overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
      { label: "Meet the new faces from the Story Trailer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/meet-the-new-faces-from-our-epic-story-trailer" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
    ],
    faqs: [
      { question: "Are Blood Ravens and Dark Angels both playable in Dawn of War 4?", answer: "Yes. Official material says both Chapters appear in the Space Marines campaign, while the Dark Angels are also a playable sub-faction." },
      { question: "What is the confirmed difference between Blood Ravens and Dark Angels?", answer: "The Blood Ravens are described as flexible strategic fighters. The Dark Angels emphasize shock-and-awe, with Deathwing and Ravenwing elite units supporting different battlefield roles." },
      { question: "Do Blood Ravens and Dark Angels have different commanders?", answer: "Yes. Developers identify Commander choice as the largest sub-faction difference, but complete commander rosters, abilities, and balance values have not yet been published." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> The Blood Ravens and Dark Angels share the Space Marines faction foundation, but official material gives them distinct identities. Blood Ravens favor flexible strategic combat; Dark Angels bring shock-and-awe through Deathwing and Ravenwing formations. Commander selection is the clearest confirmed gameplay difference.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#shared-foundation">shared units</a> · <a href="#chapter-differences">confirmed differences</a> · <a href="#dark-angels-units">Deathwing and Ravenwing</a> · <a href="#chapter-choice">which Chapter fits you</a></nav>
<h2 id="shared-foundation">What Blood Ravens and Dark Angels share</h2>
<p>Both Chapters belong to the <a href="/factions/space-marines">Space Marines</a>, an elite army built around strong individual squads, upgrades, preservation, fortifications, and rapid redeployment. The official campaign includes both Chapters, so this is more than a cosmetic paint choice. However, the publisher has not released a complete side-by-side roster or balance sheet.</p>
<p>For faction-wide systems—including orbital structures, Reserves, the Thunderhawk Relay, and on-field reinforcement—see our <a href="/blog/dawn-of-war-4-space-marines-faction-guide">Space Marines faction guide</a>.</p>
<h2 id="chapter-differences">Confirmed Chapter differences</h2>
<table class="data-table">
  <thead><tr><th>Area</th><th>Blood Ravens</th><th>Dark Angels</th></tr></thead>
  <tbody>
    <tr><td><strong>Official identity</strong></td><td>Flexible strategic combat</td><td>Shock-and-awe warfare</td></tr>
    <tr><td><strong>Named characters</strong></td><td>Cyrus and Jonah Orion return in the story</td><td>Company Master Astoran, Chaplain Ezrael, and the Lion appear in the official cast</td></tr>
    <tr><td><strong>Named elite formations</strong></td><td>Complete Chapter-specific roster remains TBA</td><td>Deathwing and Ravenwing</td></tr>
    <tr><td><strong>Commander selection</strong></td><td>Distinct commander options are confirmed</td><td>Distinct commander options are confirmed</td></tr>
  </tbody>
</table>
<h2 id="dark-angels-units">How Deathwing and Ravenwing shape the Dark Angels</h2>
<p>Deep Silver describes the Deathwing as slow and punishing, while the Ravenwing uses hit-and-run tactics. Together, those formations suggest a choice between heavy battlefield presence and mobile pressure. That is a useful strategic frame, but it is not yet a verified build order: unit costs, tech requirements, availability, and exact counters remain unpublished.</p>
<p>Deathwing should appeal to players who want an elite unit to anchor an engagement or punish enemies that commit into its reach. Ravenwing offers the opposite battlefield idea: reach a vulnerable location, apply pressure, and reposition. This interpretation follows the publisher's role descriptions, but exact speed, durability, weapons, and production tiers still require testing.</p>
<p>The important distinction is that Dark Angels do not appear to be a wholly separate fifth launch faction. They are a playable Space Marine sub-faction and campaign Chapter, sharing many units with the Blood Ravens while gaining distinctive elite access and Commanders.</p>
<h2>Why commanders matter</h2>
<p>In the multiplayer developer AMA, KING Art Games says commanders are selected before a match and produced from headquarters. The developers also call commanders the biggest difference between sub-factions. That means Chapter selection should affect more than appearance, although the full set of abilities and matchups is still TBA.</p>
<p>Campaign names should not automatically be converted into a multiplayer roster. The official cast confirms story characters, while the AMA says multiplayer generally uses generic faction Commander units outside campaigns. Our <a href="/blog/dawn-of-war-4-commanders-guide">Commander guide</a> maintains that evidence boundary.</p>

<h2>Campaign role and story context</h2>
<p>The Blood Ravens travel to Kronus under Cyrus and Chief Librarian Jonah Orion to recruit aspirants and rebuild their Chapter. An Ork ambush disrupts that mission and leaves the Imperial forces under pressure. The Dark Angels answer a call for aid and make a critical intervention, allowing the Space Marines campaign to place both Chapters under player control.</p>
<p>Deep Silver also lists Alistair Petrie as the Lion in the English voice cast. That confirms the character's presence but not mission count, playable status, or the extent of his involvement. See the <a href="/blog/dawn-of-war-4-voice-cast-characters">voice cast and character guide</a> for the complete announced ensemble.</p>

<h2 id="chapter-choice">Which Chapter should you follow?</h2>
<div class="recommendation-box"><ul><li><strong>Follow Blood Ravens</strong> if you care most about the returning Dawn of War cast and a flexible Chapter identity.</li><li><strong>Follow Dark Angels</strong> if Deathwing resilience, Ravenwing mobility, and a more specialized shock-assault theme appeal to you.</li><li><strong>Wait for hands-on data</strong> before choosing based on competitive strength; no reliable tier list exists before launch.</li></ul></div>
<h2>Evidence-based pre-launch verdict</h2>
<p>Blood Ravens are the safer recommendation for players who want the main returning narrative and a broadly flexible identity. Dark Angels are the more distinctive choice for players already attracted to Deathwing, Ravenwing, and shock assaults. Confidence is medium because the high-level identities are official, while exact multiplayer rosters and balance remain unpublished.</p>
<h2>What remains unconfirmed</h2>
<ul><li>Complete Chapter-specific unit and Commander rosters.</li><li>Unit prices, statistics, production times, and tech requirements.</li><li>Whether every faction-wide unit is shared by both Chapters.</li><li>Matchup-specific strengths, counters, and competitive tier placement.</li></ul>
`,
  },
  {
    slug: "dawn-of-war-4-space-marines-faction-guide",
    title: "Dawn of War 4 Space Marines Guide: Units & Strategy",
    seoTitle: "Dawn of War 4 Space Marines Guide",
    shortTitle: "Space Marines Faction Guide",
    excerpt: "Learn how Dawn of War 4 Space Marines use elite squads, orbital structures, fortifications, Reserves, reinforcement, and two playable Chapters.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-29",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "10 min read",
    keywords: ["Dawn of War 4 Space Marines guide", "Dawn of War 4 Blood Ravens", "Dawn of War 4 Space Marine units"],
    officialStatus: "Based on official faction overview and developer AMA",
    sources: [
      { label: "Dawn of War IV official faction overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Meet the new faces from the Story Trailer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/meet-the-new-faces-from-our-epic-story-trailer" },
    ],
    faqs: [
      { question: "How do Space Marines play in Dawn of War 4?", answer: "Space Marines are an elite, expensive army built around favorable individual engagements, squad preservation, fortifications, on-field reinforcement, and rapid redeployment through Reserves and the Thunderhawk Relay." },
      { question: "Can Space Marine buildings deploy from orbit?", answer: "Yes. Developers say their structures can deploy anywhere within vision. Deployment takes longer farther from headquarters, and opponents can see the intended landing location." },
      { question: "Are Blood Ravens and Dark Angels both playable?", answer: "Yes. Both Chapters appear in the Space Marines campaign. Dark Angels are also described as a playable sub-faction with Deathwing and Ravenwing elite units." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Space Marines are elite fighters whose individual squads are powerful but expensive. Their confirmed toolkit emphasizes early harassment, upgrades, preservation, fortifications, orbital structure deployment, and rapid movement through Reserves and the Thunderhawk Relay.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#marine-playstyle">playstyle</a> · <a href="#orbital-buildings">orbital buildings</a> · <a href="#marine-economy">economy</a> · <a href="#marine-match-plan">match plan</a> · <a href="#marine-chapters">Chapters</a></nav>
<p>This guide is for players deciding whether Space Marines fit their first Dawn of War IV army. It uses Deep Silver's faction overview, story material, and KING Art Games' multiplayer AMA. Strategic recommendations are interpretations of confirmed systems, not claims from a review build.</p>
<h2 id="marine-playstyle">Space Marines playstyle at a glance</h2>
<p>The official faction overview says Space Marines will usually win equal one-on-one engagements, especially early. That strength is balanced by cost and limited map coverage: opponents are encouraged to stretch them across several fights and deny Power. Space Marine players therefore need to trade efficiently and keep experienced units alive.</p>
<table class="data-table">
  <thead><tr><th>Confirmed system</th><th>Purpose</th><th>Risk</th></tr></thead>
  <tbody>
    <tr><td><strong>Elite squads</strong></td><td>Win efficient local engagements</td><td>Losses are costly to replace</td></tr>
    <tr><td><strong>On-field reinforcement</strong></td><td>Preserve squads and veterancy</td><td>Continuous replacement drains resources</td></tr>
    <tr><td><strong>Orbital structures</strong></td><td>Build anywhere within vision</td><td>Longer distant deployment and visible warning</td></tr>
    <tr><td><strong>Fortifications</strong></td><td>Secure points the main army cannot hold</td><td>Static defenses cannot answer every attack</td></tr>
    <tr><td><strong>Reserves and Thunderhawk Relay</strong></td><td>Move troops to threatened areas</td><td>Exact rules and timings remain TBA</td></tr>
  </tbody>
</table>
<h2 id="orbital-buildings">Orbital construction and map presence</h2>
<p>Space Marine structures can drop from orbit anywhere the player has vision. Distance from headquarters increases deployment time, and enemies can see where a structure will arrive. This produces a clear trade-off: orbital placement can establish a forward position, but an ambitious landing gives the opponent time and information to react.</p>
<p>The official overview also names fortifications, Reserves, and the Thunderhawk Relay as tools for covering a wide map. Until costs and cooldowns are published, these should be treated as confirmed capabilities rather than a finished build order.</p>
<h3>How to evaluate an orbital deployment</h3>
<ol><li><strong>Confirm vision:</strong> a legal forward landing requires current sight of the location.</li><li><strong>Account for warning:</strong> opponents can see the intended landing point.</li><li><strong>Account for distance:</strong> farther structures take longer to arrive.</li><li><strong>Define the payoff:</strong> the building should secure production, research, reinforcement, or a valuable point.</li><li><strong>Plan a fallback:</strong> a visible landing may attract a counterattack before completion.</li></ol>

<h2 id="marine-economy">Squad preservation and Power economy</h2>
<p>Space Marines are encouraged to upgrade units, reinforce in the field, and retreat when necessary. Their expensive roster also depends heavily on Power. A good opponent can trade cheaper units, attack Resource Points, and force the elite army to respond in several places. Read the <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">preservation mechanics guide</a> for confirmed retreat and reinforcement rules.</p>
<p>On-field reinforcement can keep an upgraded squad in fighting condition, but the multiplayer developers warn that auto-reinforcing many units drains resources quickly. Space Marines therefore face a repeated choice between saving the current army and funding the next upgrade, structure, Commander, or territory expansion.</p>
<p>Veterancy raises the value of preservation. KING Art Games says faction units benefit from experience in different ways, including statistical improvements or new abilities. Exact thresholds remain unknown, but the strategic conclusion is strong: losing an upgraded veteran squad costs more than its replacement price alone.</p>

<h2 id="marine-match-plan">A source-led Space Marine match plan</h2>
<p>This is a decision framework rather than a timed build order. Starting resources, prices, production times, and maps are not public.</p>
<ol><li><strong>Seek favorable local fights:</strong> use elite early strength to harass without exposing an expensive squad to isolation.</li><li><strong>Protect Power access:</strong> official counter-advice specifically tells opponents to deny Space Marine Power.</li><li><strong>Upgrade units you can preserve:</strong> retreat and reinforcement protect previous investment.</li><li><strong>Fortify selective locations:</strong> static defenses cover points while the smaller army operates elsewhere.</li><li><strong>Use mobility to answer pressure:</strong> Reserves and the Thunderhawk Relay are designed to move troops where needed.</li><li><strong>Avoid fighting everywhere:</strong> the faction's elite cost makes simultaneous coverage a structural weakness.</li></ol>

<h2>How opponents are expected to fight Space Marines</h2>
<p>The publisher advises opponents to deny Resource Points—especially Power—stretch the elite force across several locations, and punish costly losses. Ork buildings can chip away at map control, Necrons can make territorial fights increasingly difficult, and Adeptus Mechanicus can use networked information and ranged tools. These are faction-level pressures, not guaranteed counters.</p>

<h2 id="marine-chapters">Blood Ravens and Dark Angels</h2>
<p>The Space Marines campaign includes both Blood Ravens and Dark Angels. Official story material describes Blood Ravens as flexible strategic fighters, while Dark Angels favor shock-and-awe through Deathwing and Ravenwing elite units. The <a href="/blog/space-marines-dark-angels-sub-faction-differences">Chapter comparison</a> records only confirmed differences.</p>
<h2>What remains TBA</h2>
<ul><li>Opening production sequence and starting resources.</li><li>Unit prices, build times, and tech tiers.</li><li>Exact Reserves and Thunderhawk Relay rules.</li><li>Complete multiplayer roster and Commander loadouts.</li><li>Map-specific fortification and orbital deployment strategy.</li></ul>
<div class="recommendation-box"><h3>Who should choose Space Marines?</h3><ul><li>Players who prefer fewer, stronger squads.</li><li>Players who enjoy upgrades and unit preservation.</li><li>Players comfortable defending several locations with mobility and fortifications.</li></ul></div>
<p><strong>Pre-launch verdict:</strong> Space Marines are the clearest first faction for players learning the shared RTS systems, but their expensive squads make careless losses unusually punishing. Our beginner recommendation has medium confidence because the structure progression is officially described as straightforward; it is not a claim that Space Marines will be the strongest faction.</p>
`,
  },
  {
    slug: "dawn-of-war-4-necrons-faction-guide",
    title: "Dawn of War 4 Necrons Guide: Power Matrix & Strategy",
    seoTitle: "Dawn of War 4 Necrons Faction Guide",
    shortTitle: "Necrons Faction Guide",
    excerpt: "Learn how Dawn of War 4 Necrons use the Tomb Citadel, Power Matrix, Dominion, Resurrection Galleries, teleportation, and two confirmed Commanders.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-12",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "10 min read",
    keywords: ["Dawn of War 4 Necrons guide", "Dawn of War 4 Necrons", "Necron Power Matrix Dawn of War 4"],
    officialStatus: "Updated from the July 29 official faction deep dive",
    sources: [
      { label: "Dawn of War IV official faction overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
      { label: "Necron CGI trailer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/necron-cgi-trailer" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Battlefield Report: Necrons vs Adeptus Mechanicus", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/battlefield-report-1v1-multiplayer-necrons-vs-adeptus-mechanicus" },
      { label: "Faction Deep Dive — Necrons", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-necrons" },
    ],
    faqs: [
      { question: "How do Necrons play in Dawn of War 4?", answer: "Necrons expand slowly and snowball through a Tomb Citadel and Power Matrix. Matrix territory generates Dominion and improves the durability and healing of friendly units, while teleportation tools offset the army's low speed." },
      { question: "What is the Necron Power Matrix?", answer: "The Power Matrix is a field spread by Necron buildings. Many structures must be placed on it, its size increases Dominion income, and friendly units standing within it become tougher and heal faster." },
      { question: "Do Necrons use cover in Dawn of War 4?", answer: "No. The official faction overview says Necrons do not use cover, making positioning, reinforcement, and Power Matrix control especially important." },
      { question: "Can Necrons revive destroyed units?", answer: "Yes. Resurrection Galleries can be assigned a preferred unit type and return a fallen unit of that type for free. The publisher has not yet disclosed cooldowns, limits, or construction costs." },
      { question: "Who are the Necron Commanders?", answer: "Deep Silver identifies Chronomancer Thothmek and Ahmnok as the two playable Necron Commanders. Their complete abilities, costs, and multiplayer balance values remain unpublished." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Dawn of War IV Necrons are a slow, resilient snowball faction. Their upgradeable Tomb Citadel produces units, buildings spread a Power Matrix that generates Dominion, Matrix territory improves healing and toughness, and Resurrection Galleries can return selected fallen units for free. Tomb Pylons, Translocation Science, and the Monolith give this otherwise slow army late-game mobility.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#necron-core">core economy</a> · <a href="#necron-survival">healing and resurrection</a> · <a href="#necron-units">confirmed units</a> · <a href="#necron-mobility">teleportation</a> · <a href="#necron-commanders">Commanders</a> · <a href="#necron-tba">what remains unknown</a></nav>
<h2>Necrons playstyle at a glance</h2>
<p>Deep Silver's July 29 faction deep dive resolves several questions that were still open when this guide was first published. The Necron game plan is now officially described as slow, steady expansion that develops into a snowballing threat. Their army does not simply become stronger through conventional technology: base reach, resource generation, territorial durability, resurrection, and teleportation are connected parts of one system.</p>
<p>This guide is for players comparing factions before the revised December 3 launch. It explains confirmed rules and the decisions they create, but it does not pretend that final costs, cooldowns, build times, or competitive openings are public.</p>
<table class="data-table">
  <thead><tr><th>Confirmed system</th><th>Battlefield role</th><th>Evidence boundary</th></tr></thead>
  <tbody>
    <tr><td><strong>Tomb Citadel</strong></td><td>Upgradeable centre of operations and unit-production engine</td><td>Upgrade costs and production timings remain unpublished</td></tr>
    <tr><td><strong>Power Matrix</strong></td><td>Enables many buildings, generates Dominion, and buffs friendly units</td><td>Exact income and combat values remain unpublished</td></tr>
    <tr><td><strong>Resurrection Galleries</strong></td><td>Return a selected type of fallen unit for free</td><td>Cooldowns, capacity, and exclusions remain unpublished</td></tr>
    <tr><td><strong>Translocation Science</strong></td><td>Teleports up to five units between visible battlefield locations</td><td>Unlock cost and cooldown remain unpublished</td></tr>
    <tr><td><strong>Monolith</strong></td><td>Uses its Eternity Gate as an exit for Tomb Citadel reserves</td><td>Tech tier, cost, and reserve rules remain unpublished</td></tr>
  </tbody>
</table>
<h2 id="necron-core">Tomb Citadel, Power Matrix, and Dominion</h2>
<p>The Tomb Citadel is the strategic centre of the Necron base and the production engine for units. As the base expands, Necron buildings spread the Power Matrix. Many buildings can only be constructed on this field, and each new building can extend it farther. This makes construction placement an economic and territorial decision rather than a purely defensive one.</p>
<p>A larger Matrix generates more Dominion for the war effort. The official preview does not publish a Dominion-per-area formula, so the safe conclusion is qualitative: extending the Matrix supports the economy, but the final game will determine whether every extension is worth its cost and exposure.</p>
<p>The Matrix also affects combat. Friendly units standing on it heal faster, become tougher, and are more difficult to kill. Necron units already receive out-of-combat healing, so fighting on connected territory layers a positional advantage onto their inherent durability. Opponents have a reason to force battles away from the Matrix or attack the structures spreading it.</p>

<h2 id="necron-survival">Healing, cover, and Resurrection Galleries</h2>
<p>Necrons do not use conventional cover. Their survival model instead revolves around formation, healing, Matrix territory, and bringing back losses. The publisher confirms that Resurrection Galleries allow the player to select a preferred unit type; when a unit of that type falls, the Gallery can return it for free.</p>
<p>“Free” describes the returning unit, not the complete system. Building the Gallery may still require resources, and official material has not disclosed its cooldown, capacity, whether several Galleries can target the same type, or which units are excluded. Those details will decide how aggressively players can trade valuable units.</p>
<p>For opponents, Deep Silver's advice is to focus fire and kill Necron units outright. Damaging several targets without securing a kill gives healing systems more opportunity to erase that damage. For the Necron player, the inverse principle applies: keep the formation connected and withdraw a vulnerable unit before concentrated fire finishes it.</p>

<h2 id="necron-units">Confirmed Necron units and battlefield roles</h2>
<table class="data-table">
  <thead><tr><th>Unit</th><th>Confirmed role</th><th>Practical use to verify at launch</th></tr></thead>
  <tbody>
    <tr><td><strong>Scarabs</strong></td><td>Cheap, small, relatively fast swarms that can tie up ranged units in melee</td><td>Which ranged squads they can suppress cost-effectively</td></tr>
    <tr><td><strong>Deathmarks</strong></td><td>Snipers capable of outranging and eliminating Commanders and elite infantry</td><td>Range, detection, accuracy, and target breakpoints</td></tr>
    <tr><td><strong>Doomstalkers</strong></td><td>Large constructs armed with Doomsday Blasters</td><td>Damage profile, setup behavior, and counters</td></tr>
    <tr><td><strong>Canoptek Spyders</strong></td><td>Construct Tomb Pylons anywhere on the map</td><td>Build restrictions, vulnerability, and expansion timing</td></tr>
    <tr><td><strong>Monolith</strong></td><td>Heavy machine and reserve exit point through its Eternity Gate</td><td>Tech timing and whether teleporting it creates viable flanks</td></tr>
  </tbody>
</table>
<p>Scarabs are especially important to the faction's tempo. They give a mostly slow roster a low-cost, faster unit that can engage enemy ranged forces in melee, preventing those targets from using their strongest weapons while heavier Necrons close the distance. That role is confirmed; a universal Scarab opening is not.</p>

<h2 id="necron-mobility">Three confirmed teleportation tools</h2>
<p>The Necrons' low movement speed has deliberate counterplay, but it does not leave them immobile in the late game. Deep Silver has now confirmed three distinct movement systems:</p>
<ol>
  <li><strong>Tomb Pylons:</strong> Canoptek Spyders build them anywhere on the map. Each creates a new patch of Power Matrix and becomes a translocation target for units entering the Tomb Citadel.</li>
  <li><strong>Translocation Science:</strong> this unlockable Stratagem teleports up to <strong>five units</strong> from anywhere on the battlefield to any other visible location.</li>
  <li><strong>Monolith Eternity Gate:</strong> units placed in reserve at the Tomb Citadel can exit through a deployed Monolith, even after the vehicle moves behind enemy lines.</li>
</ol>
<p>These systems solve different problems. A Tomb Pylon establishes infrastructure, Translocation Science provides a limited group relocation, and the Monolith creates a mobile reserve exit. Their costs and cooldowns will determine whether they are emergency responses, planned attacks, or both.</p>

<h2 id="necron-commanders">Thothmek and Ahmnok</h2>
<p>The deep dive confirms two playable Necron Commanders. Chronomancer Thothmek uses chronomantic powers to manipulate time, empower his legions, and disrupt enemies. Ahmnok is positioned as the more direct alternative, favoring close violence over Thothmek's remote battlefield manipulation.</p>
<p>The contrast establishes two playstyle identities, but it does not reveal complete ability trees, Wargear, prices, or competitive roles. Our <a href="/blog/dawn-of-war-4-commanders-guide">Dawn of War 4 Commanders guide</a> explains how pre-match selection and headquarters production work across factions.</p>

<h2>Campaign premise</h2>
<p>Kronus is a dormant tomb world, and the Necrons return after receiving a mysterious signal from the planet. Thothmek wants to claim the source of that power for his dynasty's wider war effort. This story sits inside one of four faction campaigns that feed into Dawn of War IV's overarching narrative.</p>

<h2 id="necron-tba">What remains unconfirmed before launch</h2>
<ul><li>The complete unit, structure, research, and multiplayer Commander rosters.</li><li>Tomb Citadel upgrade costs, production times, and technology tiers.</li><li>Dominion income rates and exact Matrix healing or toughness bonuses.</li><li>Resurrection Gallery cooldowns, limits, targeting rules, and exclusions.</li><li>Teleportation costs, cooldowns, visibility rules, and counterplay.</li><li>Verified openings, matchups, counters, and late-game compositions.</li></ul>
<div class="recommendation-box"><h3>Who should choose Necrons?</h3><ul><li>Players who enjoy methodical pressure rather than constant early mobility.</li><li>Players who want territory and economy to reinforce battlefield strength.</li><li>Players comfortable protecting a formation while it advances.</li></ul></div>
<p>For a side-by-side view of every army, read the <a href="/blog/dawn-of-war-4-factions-compared">four-faction comparison</a>. For shared preservation rules, see the <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">cover, retreat, and reinforcement guide</a>.</p>
`,
  },
  {
    slug: "adeptus-mechanicus-build-orders-noosphere-patterns",
    title: "Adeptus Mechanicus Build Orders & Noosphere Patterns",
    shortTitle: "Adeptus Mechanicus Build Orders & Noosphere Guide",
    excerpt: "Optimal Noosphere building connection layouts, Skitarii opening build order, and turret overcharge node placement for Adeptus Mechanicus in Dawn of War IV.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "8 min read",
    keywords: ["Adeptus Mechanicus build order Dawn of War 4", "AdMech Noosphere layout", "Noosphere network patterns"],
    officialStatus: "Tactical Guide & Network Layout",
    indexable: false,
    contentHtml: `
<h2>1. Optimal Noosphere Connection Network Patterns</h2>
<p>
  The <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus (AdMech)</a> rely on spatial structure positioning. Buildings placed within the blue Noosphere grid aura form linked nodes, reducing unit production costs and boosting turret fire rates.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Noosphere Grid Pattern</th>
      <th>Optimal Building Array</th>
      <th>Network Benefit &amp; Synergy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Star Array (Base Defense)</strong></td>
      <td>Central Cog Generator surrounded by 3 Perimeter Turrets</td>
      <td>+35% Turret Tracking Speed &amp; Energy Weapon Overcharge</td>
    </tr>
    <tr>
      <td><strong>Chain Line (Expansion)</strong></td>
      <td>Linked Power Pylons stretching toward Forward Strategic Node</td>
      <td>Extends Noosphere aura to forward production structures</td>
    </tr>
    <tr>
      <td><strong>Industrial Cluster (Production)</strong></td>
      <td>Fabricator Forge connected to 2 Skitarii Manufactorums</td>
      <td>-15% Requisition &amp; Energy cost per Skitarii squad produced</td>
    </tr>
  </tbody>
</table>

<h2>2. Skitarii Opening Build Order (First 5 Minutes)</h2>
<p>
  Follow this optimized opening sequence to build a 3-node connected Noosphere before expanding to secondary power nodes.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Time</th>
      <th>Building / Production Task</th>
      <th>Noosphere Grid Alignment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>00:00</strong></td>
      <td>Queue Tech-Priest Enginseer; Send Servitor to build Power Node #1</td>
      <td>Initialize Core Generator Node</td>
    </tr>
    <tr>
      <td><strong>01:00</strong></td>
      <td>Construct Skitarii Vanguard Hut inside Node #1 Aura</td>
      <td>Establish 1st Connected Production Node (-10% cost)</td>
    </tr>
    <tr>
      <td><strong>02:15</strong></td>
      <td>Deploy Skitarii Ranger Squad; Build Perimeter Turret on choke-point</td>
      <td>Activate Linked Turret Overcharge Channel</td>
    </tr>
  </tbody>
</table>
`,
  },
  {
    slug: "dawn-of-war-4-last-stand-mode-guide",
    title: "Dawn of War 4 Last Stand Mode Explained",
    seoTitle: "Dawn of War 4 Last Stand Mode Guide",
    shortTitle: "Last Stand Mode Explained",
    excerpt: "Learn what is confirmed about Dawn of War 4's returning Last Stand mode: escalating enemy waves, co-op, progression, skills, and equipment.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-12",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 Last Stand", "Dawn of War 4 Last Stand mode", "Dawn of War 4 co-op"],
    officialStatus: "Confirmed mode; party size is an editorial estimate",
    sources: [
      { label: "What we're building with Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/what-we-re-building-with-warhammer-40-000-dawn-of-war-iv" },
      { label: "Release date, pre-order and DLC plans", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "Dawn of War II: The Last Stand reference", publisher: "Dawn of War Wiki", href: "https://dawnofwar2.wiki.gg/wiki/The_Last_Stand" },
    ],
    faqs: [
      { question: "Is Last Stand returning in Dawn of War 4?", answer: "Yes. Deep Silver has officially confirmed that Last Stand returns as a horde-like mode built around increasingly deadly waves." },
      { question: "How many players are in Dawn of War 4 Last Stand?", answer: "Three players is our best current estimate because the original Dawn of War II Last Stand used a three-hero team. Dawn of War 4 co-op is confirmed, but Deep Silver has not yet published its final Last Stand party size." },
      { question: "Does Last Stand have progression?", answer: "Yes. Players can level up characters and unlock skills and equipment. Exact progression trees, unlock rates, and launch equipment remain TBA." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Last Stand returns in <em>Dawn of War IV</em> as a co-op horde mode with increasingly deadly waves, character levels, skills, and equipment. <strong>Our best party-size estimate is three players</strong>, matching Dawn of War II's established three-hero format, but Deep Silver has not confirmed that number for Dawn of War IV.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#last-stand-basics">confirmed format</a> · <a href="#last-stand-progression">progression</a> · <a href="#last-stand-party">party size estimate</a> · <a href="#last-stand-prep">how to prepare</a></nav>
<p>This guide is for co-op players deciding what to expect before launch. Confirmed facts come from Deep Silver; the party-size estimate is based on the directly related Dawn of War II mode and is labeled separately.</p>
<h2 id="last-stand-basics">What is Last Stand?</h2>
<p>Last Stand is a survival-focused alternative to the game's army-scale campaign and competitive multiplayer. The official description centers on enduring waves that become progressively more dangerous. Rather than inventing a fixed wave count or boss schedule before release, this guide tracks the structure that Deep Silver and KING Art Games have actually announced.</p>
<table class="data-table">
  <thead><tr><th>Feature</th><th>Official status</th><th>What remains TBA</th></tr></thead>
  <tbody>
    <tr><td><strong>Escalating waves</strong></td><td>Confirmed</td><td>Total waves, enemy tables, and boss timing</td></tr>
    <tr><td><strong>Co-op support</strong></td><td>Confirmed</td><td>Three players estimated; final party size unconfirmed</td></tr>
    <tr><td><strong>Character levels</strong></td><td>Confirmed</td><td>Level cap and experience requirements</td></tr>
    <tr><td><strong>Skills and equipment</strong></td><td>Confirmed</td><td>Complete unlock lists, statistics, and builds</td></tr>
    <tr><td><strong>Post-launch scenarios</strong></td><td>Confirmed on the Year One roadmap</td><td>Scenario dates and objectives</td></tr>
  </tbody>
</table>
<h2 id="last-stand-progression">Progression between runs</h2>
<p>Official material says players level up characters and unlock skills and equipment. That creates a persistent progression layer, but the publisher has not yet shown enough data for a trustworthy leveling route or equipment tier list. Claims about optimal loadouts should wait until the launch build can be tested repeatedly.</p>
<h2 id="last-stand-party">Our best player-count estimate</h2>
<p>Dawn of War II's Last Stand was built for three players, each controlling one hero against escalating waves. Because Dawn of War IV explicitly revives that named mode and again emphasizes characters, skills, and equipment, a three-player team is the strongest working assumption. We rate this estimate <strong>medium confidence</strong>: the historical format is directly relevant, but KING Art Games could expand or redesign the lobby.</p>
<p>Players planning a group should provisionally expect a trio, while avoiding purchases or schedules that depend on the number until Deep Silver confirms it. A two-player fallback or larger custom lobby remains possible.</p>
<h2>How Dawn of War IV may differ from the original mode</h2>
<p>The Dawn of War II version used three heroes against 20 escalating waves. That history supports the estimated trio, but it does not establish a 20-wave limit for the sequel. Dawn of War IV can change arenas, objectives, enemy composition, revive rules, progression, or team size while retaining the Last Stand name.</p>
<p>Deep Silver's Year One roadmap promises additional Commander scenarios, abilities, loadouts, and playstyles. This indicates that the mode is intended as an evolving character-based activity rather than a one-off side mission. It does not prove that every campaign Commander will be playable in Last Stand.</p>
<h2 id="last-stand-prep">How players can prepare without invented builds</h2>
<ol><li><strong>Plan for complementary roles:</strong> a likely three-player team benefits from damage, control, and survival rather than three identical loadouts.</li><li><strong>Expect progression to matter:</strong> skills and equipment are confirmed, so early runs may focus on learning and unlocking options.</li><li><strong>Separate wave clearing from boss damage:</strong> escalating modes usually punish a team that can solve only one target type; this is planning guidance, not a confirmed enemy table.</li><li><strong>Track official Commander reveals:</strong> role descriptions will be more useful than unsupported tier lists.</li><li><strong>Rebuild advice after launch:</strong> every recommended loadout needs a game version, difficulty, and repeatable test.</li></ol>
<h2>How Last Stand fits the wider game</h2>
<p>The mode complements the story campaign, <a href="/blog/dawn-of-war-4-crusade-mode-guide">Crusade</a>, Skirmish, and competitive formats covered in our <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">modes guide</a>. Players who prefer small-team survival and character progression may find Last Stand more approachable than managing a full base and army.</p>
<h2>Year One support</h2>
<p>The official Year One roadmap includes free Commander scenarios for Last Stand and Crusade. This confirms planned post-launch support, but does not establish a fixed release month for every scenario. Our <a href="/blog/dawn-of-war-4-year-one-roadmap-dlc">roadmap tracker</a> will be updated when dates and scenario details are published.</p>
<h2>What a real survival guide still needs</h2>
<p>A dependable strategy guide requires the shipped hero roster, wave composition, maps, equipment effects, progression speed, difficulty settings, and revive rules. Once those can be tested, this page can expand into verified beginner builds and team strategies without replacing confirmed information with guesswork.</p>
<div class="recommendation-box">
  <h3>Who should watch Last Stand?</h3>
  <ul><li>Players who want co-op rather than competitive matches.</li><li>Players interested in character progression and equipment unlocks.</li><li>Returning Dawn of War II players curious about the revived mode.</li></ul>
</div>
<p><strong>Pre-launch verdict:</strong> expect a progression-driven co-op survival mode, probably for three players, with expanding post-launch Commander support. The format and progression are confirmed; the trio is a medium-confidence estimate; exact waves and builds remain genuinely unknown.</p>
`,
  },
  {
    slug: "dawn-of-war-4-multiplayer-modes-guide",
    title: "Dawn of War 4 Multiplayer Modes Explained",
    seoTitle: "Dawn of War 4 Multiplayer: 1v1, 2v2 & 3v3",
    shortTitle: "Dawn of War 4 Multiplayer Modes Explained",
    excerpt: "Dawn of War 4 supports 1v1, 2v2 and likely 3v3 battles. Compare Annihilation, Domination, Maelstrom, campaign co-op, Skirmish and Last Stand.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-29",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "10 min read",
    keywords: ["Dawn of War 4 multiplayer modes", "Dawn of War 4 Last Stand mode", "Dawn of War 4 co-op campaign"],
    officialStatus: "Developer Confirmed Game Modes",
    sources: [
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Dawn of War IV official overview and FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
      { label: "Dawn of War IV gameplay preview", publisher: "GamesRadar+", href: "https://www.gamesradar.com/games/real-time-strategy/dawn-of-war-4-has-its-sights-set-on-gameplay-that-feels-authentic-to-the-fantasy-of-each-faction-in-warhammer-40k-and-it-already-looks-like-my-most-wanted-rts-of-2026/" },
    ],
    faqs: [
      { question: "What multiplayer modes are confirmed for Dawn of War 4?", answer: "Quick Match supports Annihilation, Domination, and Maelstrom. The official site also confirms competitive multiplayer, Skirmish, Last Stand, and campaign co-op." },
      { question: "Does Dawn of War 4 have co-op?", answer: "Yes. The 70-plus-mission campaign supports solo or two-player co-op, and official material says several other modes support cooperative play." },
      { question: "Does Dawn of War 4 have 4v4 multiplayer?", answer: "Probably not at launch. Public previews consistently describe 1v1, 2v2, and 3v3 battles, making 3v3 the strongest current ceiling estimate. A 4v4 mode has not been confirmed." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Dawn of War IV Quick Match includes Annihilation, Domination, and Maelstrom. The 70-plus-mission campaign supports solo or two-player co-op, while Skirmish and Last Stand add non-competitive options. Public previews point to 1v1, 2v2, and 3v3 battles; 4v4 is not currently confirmed.</div>
<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#mode-table">all modes</a> · <a href="#quick-match">Quick Match</a> · <a href="#team-sizes">player counts</a> · <a href="#coop-options">co-op choices</a> · <a href="#mode-choice">which mode to play</a></nav>
<h2 id="mode-table">1. Overview of Game Modes & Player Capacities</h2>
<p>
  <em>Warhammer 40,000: Dawn of War IV</em> includes modes for solo narrative players, cooperative commanders, and competitive multiplayer players. Campaign capacity is official. For other modes, the table combines confirmed formats with clearly labeled estimates from public previews and series precedent.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Game Mode Name</th>
      <th>Player Capacity</th>
      <th>Primary Objective</th>
      <th>Target Player Base</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Authored Campaign</strong></td>
      <td>Solo or 2-player co-op</td>
      <td>70+ Mission planetary conquest of Kronus</td>
      <td>Narrative &amp; Co-op players</td>
    </tr>
    <tr>
      <td><strong>Annihilation Mode</strong></td>
      <td>Likely 1v1, 2v2, and 3v3; 3v3 estimated ceiling</td>
      <td>Destroy all enemy headquarters &amp; production bases</td>
      <td>Hardcore RTS purists</td>
    </tr>
    <tr>
      <td><strong>Domination Mode</strong></td>
      <td>Likely 1v1, 2v2, and 3v3; 3v3 estimated ceiling</td>
      <td>Capture &amp; hold Strategic Victory Points for score</td>
      <td>Objective-focused multiplayer players</td>
    </tr>
    <tr><td><strong>Maelstrom</strong></td><td>Likely 1v1, 2v2, and 3v3; 3v3 estimated ceiling</td><td>Secure dynamically appearing objectives for Victory Points</td><td>Players who prefer shifting objectives</td></tr>
    <tr><td><strong>Last Stand</strong></td><td>Co-op confirmed; 3-player party estimated</td><td>Survive escalating waves and progress characters</td><td>Co-op and hero-mode fans</td></tr>
    <tr>
      <td><strong>Skirmish Mode</strong></td>
      <td>Likely supports the same maps up to 3v3; unconfirmed</td>
      <td>Offline/custom rules not yet fully detailed</td>
      <td>Practice and custom-match players</td>
    </tr>
  </tbody>
</table>
<p><strong>Confidence note:</strong> 1v1, 2v2, and 3v3 are repeatedly reported from game previews, while 4v4 has not appeared in the publisher's current mode table. We therefore treat 3v3 as the likely launch ceiling rather than leaving the question unanswered. Last Stand's three-player estimate comes from the original mode's established format.</p>

<h2 id="quick-match">How the three Quick Match win conditions differ</h2>
<h3>Annihilation</h3>
<p>Annihilation is the default Quick Match selection. Victory requires destroying every enemy headquarters while protecting your own. Production, territory, and battles matter because they support the final base-destruction objective; they do not replace it.</p>
<h3>Domination</h3>
<p>Domination awards Victory Points to the side controlling more Strategic Positions than its opponent. The mode creates stable locations that both players can identify and contest. A force that wins fights but ignores the scoring condition can still lose.</p>
<h3>Maelstrom</h3>
<p>Maelstrom also uses Victory Points, but objectives appear dynamically around the map. The shifting target rewards mobility, scouting, and the ability to abandon one area for another. Read the dedicated <a href="/blog/dawn-of-war-4-maelstrom-mode-guide">Maelstrom guide</a> for the confirmed win condition and remaining unknowns.</p>

<h2 id="team-sizes">Does Dawn of War 4 support 1v1, 2v2, 3v3, or 4v4?</h2>
<p>The developer AMA explicitly discusses default 1v1 matchmaking and balance across 1v1 and team games. Reputable previews describe 1v1, 2v2, and 3v3 battles. We therefore rate support through 3v3 as a <strong>medium-confidence expectation</strong>, while 4v4 remains unsupported by current evidence.</p>
<p>This distinction is important for E-E-A-T: “team games exist” is developer-confirmed, while the complete queue-size table is not. The article gives the most likely answer without presenting preview reporting as a final platform specification.</p>

<h2>Custom match settings</h2>
<p>KING Art Games confirms that Commander rules can be changed in custom settings: Commanders may be produced normally, enabled as starting units, or disabled. This shows that custom matches support meaningful rule variation, but the complete lobby settings—resource rates, population, victory conditions, observers, AI slots, and map filters—have not been published.</p>
<p>Skirmish is the appropriate mode to watch for practice against AI and experimentation. The publisher says a dedicated Skirmish showcase is still planned, so capacity and customization should be updated when that presentation arrives.</p>

<h2 id="coop-options">2. Campaign Co-op: What Is Confirmed</h2>
<p>
  The 70-plus-mission campaign can be played solo or with one friend. The publisher has not confirmed that partners can freely mix factions inside a campaign, nor has it documented shared Commander cooldowns, so those details remain open until a co-op showcase or launch documentation appears. Our dedicated <a href="/blog/dawn-of-war-4-co-op-campaign-guide">Dawn of War 4 co-op campaign guide</a> separates those confirmed facts from the most reasonable launch expectations.
</p>
<p>Last Stand provides a second co-op path focused on characters, increasingly deadly waves, skills, and equipment rather than full base management. Three players is our current medium-confidence estimate based on Dawn of War II's established format. See the <a href="/blog/dawn-of-war-4-last-stand-mode-guide">Last Stand guide</a> for the evidence and uncertainty.</p>

<h2 id="mode-choice">Which Dawn of War 4 mode should you play?</h2>
<table class="data-table"><thead><tr><th>If you want…</th><th>Start with</th><th>Why</th></tr></thead><tbody><tr><td>A long story with a friend</td><td>Campaign co-op</td><td>70+ missions; two-player support confirmed</td></tr><tr><td>Classic base destruction</td><td>Annihilation</td><td>Default Quick Match condition</td></tr><tr><td>Predictable scoring locations</td><td>Domination</td><td>Control more Strategic Positions</td></tr><tr><td>Changing map objectives</td><td>Maelstrom</td><td>Dynamic objectives award Victory Points</td></tr><tr><td>AI practice and custom rules</td><td>Skirmish</td><td>Non-ranked environment; full settings pending</td></tr><tr><td>Character progression with teammates</td><td>Last Stand</td><td>Co-op waves, skills, and equipment</td></tr></tbody></table>
<p><strong>Bottom line:</strong> Dawn of War IV is not built around one multiplayer format. Quick Match serves competitive players through three objectives, campaign co-op serves narrative pairs, Skirmish supports practice, and Last Stand offers character-based survival. Player-count estimates will be replaced when Deep Silver publishes the final lobby table.</p>
`,
  },
  {
    slug: "dawn-of-war-4-co-op-campaign-guide",
    title: "Dawn of War 4 Co-op Campaign: Player Count & How It May Work",
    seoTitle: "Dawn of War 4 Co-op: 2-Player Campaign",
    shortTitle: "Dawn of War 4 Co-op Campaign Guide",
    excerpt: "Dawn of War 4 has a two-player online co-op campaign with 70+ missions. See what is confirmed, how shared play may work, and what remains unknown.",
    datePublished: "2026-08-13",
    dateModified: "2026-08-29",
    author: "Kronus Archive Campaign Desk",
    category: "Campaign & Co-op",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 co-op campaign", "Dawn of War 4 co-op", "Dawn of War 4 campaign multiplayer"],
    officialStatus: "Campaign co-op confirmed; detailed rules pending",
    sources: [
      { label: "Dawn of War IV official overview and FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
      { label: "What we're building with Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/what-we-re-building-with-warhammer-40-000-dawn-of-war-iv" },
      { label: "How the four campaigns form one story", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/crafting-an-epic-dawn-of-war-iv-story-fit-for-the-warhammer-40-000-universe" },
      { label: "Iron Harvest campaign co-op reference", publisher: "Steam", href: "https://store.steampowered.com/app/826630/Iron_Harvest/" },
    ],
    faqs: [
      { question: "Does Dawn of War 4 have a co-op campaign?", answer: "Yes. Deep Silver confirms that the Dawn of War IV campaign supports both solo and cooperative play. The campaign contains more than 70 missions across four faction storylines." },
      { question: "How many players can play the Dawn of War 4 campaign together?", answer: "The best current answer is two players. Official material confirms campaign co-op, while the site's existing publisher-confirmed summary identifies it as two-player co-op. No four-player campaign has been announced." },
      { question: "Can both players choose different factions in campaign co-op?", answer: "That has not been confirmed. Each campaign belongs to a specific faction storyline, so we expect mission-controlled armies rather than unrestricted cross-faction selection, but the final lobby and army-sharing rules remain unannounced." },
      { question: "Does Dawn of War 4 have co-op outside the campaign?", answer: "Yes. Deep Silver says Skirmish and Last Stand support cooperative play. Competitive team multiplayer also lets players fight alongside teammates, but it is not the same as PvE co-op." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Dawn of War IV has an online co-op campaign and the best confirmed player-count answer is <strong>two players</strong>. More than 70 campaign missions are spread across four connected faction storylines. Deep Silver has not yet explained army sharing, host saves, mission voting, drop-in play, or whether both players control separate bases.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#confirmed">confirmed co-op facts</a> · <a href="#player-count">player count</a> · <a href="#likely-structure">how it may work</a> · <a href="#other-coop">other co-op modes</a> · <a href="#open-questions">unconfirmed details</a></nav>

<h2 id="confirmed">Is the Dawn of War 4 campaign co-op?</h2>
<p>Yes. Deep Silver's official Dawn of War IV FAQ states that Campaign mode supports solo or co-op play, and Steam classifies the game as Online Co-op. This is a launch feature, not a post-release promise. The campaign itself contains more than 70 missions and tells four faction stories—Space Marines, Orks, Necrons, and Adeptus Mechanicus—that contribute to one larger narrative on Kronus.</p>
<p>That confirmation answers the main search question, but not every practical question a pair of players will have. The publisher has not yet shown the campaign lobby or documented how two commanders divide units, structures, resources, story decisions, or progress. We therefore separate facts from expectations instead of turning familiar RTS conventions into invented features.</p>

<table class="data-table">
  <thead><tr><th>Co-op question</th><th>Best current answer</th><th>Evidence status</th></tr></thead>
  <tbody>
    <tr><td><strong>Is campaign co-op available?</strong></td><td>Yes, alongside solo play</td><td>Publisher confirmed</td></tr>
    <tr><td><strong>Campaign party size</strong></td><td>Two players</td><td>Confirmed in current campaign summaries; no larger party announced</td></tr>
    <tr><td><strong>Campaign length</strong></td><td>70+ missions across four storylines</td><td>Publisher confirmed</td></tr>
    <tr><td><strong>Connection type</strong></td><td>Online co-op</td><td>Steam feature listing</td></tr>
    <tr><td><strong>Cross-platform co-op</strong></td><td>Not applicable at present; only Windows PC is announced</td><td>Publisher confirmed platform</td></tr>
    <tr><td><strong>Drop-in/drop-out</strong></td><td>Not announced</td><td>Unknown</td></tr>
  </tbody>
</table>

<h2 id="player-count">How many players does campaign co-op support?</h2>
<p>Plan for a two-player campaign rather than a four-player story mode. The official material confirms co-op, and the published campaign summary identifies it as a two-player experience. Deep Silver has separately announced 1v1, 2v2, and 3v3 support for competitive multiplayer; those team sizes should not be applied to the story campaign.</p>
<p>The distinction also prevents a common misunderstanding. “2v2” means four people divided into opposing competitive teams. “Two-player campaign co-op” means two people working through authored missions together against the mission's AI and scripted objectives. A Steam Online Co-op tag confirms networked cooperation but does not, by itself, prove a particular lobby capacity.</p>

<h2 id="likely-structure">How is Dawn of War 4 co-op likely to work?</h2>
<p>The safest expectation is that both players enter the same authored mission and cooperate with forces permitted by that mission. Dawn of War IV has four distinct faction campaigns rather than a free-form cooperative sandbox, so unrestricted faction mixing would be surprising unless a specific mission supports it. This is an inference from the announced campaign structure, not a confirmed restriction.</p>
<p>KING Art's previous major RTS, <em>Iron Harvest</em>, allowed a friend to master its campaigns side by side in co-op. That precedent makes shared mission play a reasonable comparison because the same studio built both games. It does <strong>not</strong> prove that Dawn of War IV will copy Iron Harvest's save ownership, unit allocation, difficulty scaling, or lobby rules.</p>

<table class="data-table">
  <thead><tr><th>Likely design question</th><th>Practical expectation</th><th>Confidence</th></tr></thead>
  <tbody>
    <tr><td><strong>Do players share one mission?</strong></td><td>Very likely; this is an authored campaign rather than a versus queue</td><td>High</td></tr>
    <tr><td><strong>Can players mix any two factions?</strong></td><td>Probably not by default; campaigns are faction-specific</td><td>Medium-low</td></tr>
    <tr><td><strong>Does each player control separate squads?</strong></td><td>Likely, but the exact unit and base split is unknown</td><td>Medium-low</td></tr>
    <tr><td><strong>Will enemy strength scale?</strong></td><td>Likely in some form, but no scaling rules are published</td><td>Low</td></tr>
    <tr><td><strong>Who owns campaign progress?</strong></td><td>Unknown; wait for the co-op UI or support documentation</td><td>Unknown</td></tr>
  </tbody>
</table>

<p>The campaign includes choices on a world map and missions that can have consequences for other locations. That makes host progression and decision authority especially important. Until KING Art shows the interface, players should not assume that both accounts receive identical story completion or that a guest can resume the same campaign independently.</p>

<h2>What will two players do during a mission?</h2>
<p>The confirmed core systems offer a useful picture even though the control split is unannounced. Players will build bases, capture and upgrade resource points, manage squads, use cover, reinforce units in the field, and protect experienced forces through retreat. A pair could naturally divide attention between economy and combat or operate on different fronts, but that is advice based on RTS structure—not evidence of a formal commander-role system.</p>
<p>Dawn of War IV also treats campaign balance separately from competitive balance. KING Art has said campaign units can remain unusually powerful when that serves the story, even if their multiplayer versions need adjustment. Co-op players should therefore expect authored scenarios and faction fantasy rather than a copy of ranked-match tuning.</p>

<h2 id="other-coop">What other co-op modes are confirmed?</h2>
<p>Campaign is not the only cooperative option. Deep Silver says the other announced modes support co-op as well, giving pairs and groups alternatives when they do not want to advance the story.</p>
<ul>
  <li><strong>Skirmish:</strong> configurable battles with choices such as map, factions, and difficulty. It should be the clearest place to practise with a friend against AI.</li>
  <li><strong>Last Stand:</strong> a returning survival mode built around increasingly dangerous waves, character levels, skills, and equipment. Co-op is confirmed, while the final party size remains unannounced.</li>
  <li><strong>Team multiplayer:</strong> 2v2 and 3v3 let friends join the same side against human opponents. This is cooperative teamwork, but it is PvP rather than campaign or Skirmish co-op.</li>
</ul>
<p>Compare all competitive objectives and capacities in the <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a>. Players who prefer hero progression over full army control can use the <a href="/blog/dawn-of-war-4-last-stand-mode-guide">Last Stand guide</a>.</p>

<h2 id="open-questions">What has not been confirmed?</h2>
<ul>
  <li>Whether campaign co-op supports drop-in/drop-out joining or requires a lobby before each mission.</li>
  <li>Whether both players receive achievements, unlocks, and independent campaign completion.</li>
  <li>How units, buildings, Commanders, resources, and population capacity are divided.</li>
  <li>Who selects world-map missions and makes narrative choices.</li>
  <li>Whether difficulty or enemy numbers scale for a second player.</li>
  <li>Whether pause, save, replay, and checkpoint behavior changes online.</li>
  <li>Whether campaign co-op requires both players to own the same premium story content.</li>
</ul>
<p>These omissions are not signs that the feature is missing; they are normal pre-launch details that usually appear in a dedicated showcase, review build, or support article. This guide will replace expectations with tested answers when that evidence becomes available.</p>

<h2>Should you buy Dawn of War 4 primarily for co-op?</h2>
<p>The confirmed foundation is substantial: a two-player campaign spanning a 70-plus-mission package, plus cooperative Skirmish and Last Stand. That is enough to treat co-op as a major part of the game rather than a small bonus. It is not enough to promise seamless guest progression or unrestricted faction combinations.</p>
<p><strong>Bottom line:</strong> two friends can plan to play the Dawn of War IV story together online. If shared saves, drop-in play, or DLC ownership rules are deal-breakers, wait for the co-op showcase or launch documentation before buying two copies.</p>
`,
  },
  {
    slug: "dawn-of-war-4-cover-retreat-reinforcement-guide",
    title: "Dawn of War 4 Cover, Retreat & Reinforcement Explained",
    seoTitle: "Dawn of War 4 Cover and Retreat Guide",
    shortTitle: "Cover, Retreat & Reinforcement Guide",
    excerpt: "Learn how Dawn of War 4 cover, retreat, and on-field reinforcement work, including faction exceptions and the tactical choices confirmed by developers.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 cover", "Dawn of War 4 retreat", "Dawn of War 4 reinforcement"],
    officialStatus: "Mechanics confirmed by developer AMA",
    sources: [
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Dawn of War IV official overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
    ],
    faqs: [
      { question: "How does cover work in Dawn of War 4?", answer: "Cover reduces incoming ranged damage. Maps include directional cover and garrisonable structures, while melee attacks and some Wargear can force units out of cover or negate its protection." },
      { question: "Can you cancel a retreat in Dawn of War 4?", answer: "Yes, but not immediately. The retreat icon changes from red to yellow after a period of time; once it is yellow, the retreat order can be cancelled." },
      { question: "Do Necrons use cover?", answer: "No. Developers say Necrons do not use the normal cover system. Their faction instead has a distinct approach to preservation and on-field reinforcement." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Cover reduces ranged damage, retreat trades temporary control for safer repositioning, and on-field reinforcement spends resources to keep squads combat-ready. These systems are confirmed, but exact damage reductions, timers, and resource costs have not been published.</div>

<h2>How the three preservation systems compare</h2>
<p>Dawn of War IV rewards keeping experienced squads alive. Cover, retreat, and on-field reinforcement all support that goal, but each solves a different battlefield problem. The comparison below uses the developer’s July 2026 multiplayer AMA and avoids assigning unannounced numerical values.</p>
<table class="data-table">
  <thead><tr><th>Mechanic</th><th>Primary use</th><th>Main trade-off</th><th>Confirmed exception</th></tr></thead>
  <tbody>
    <tr><td><strong>Cover</strong></td><td>Reduce ranged damage while holding a position</td><td>Melee and anti-cover Wargear can dislodge squads</td><td><a href="/factions/necrons">Necrons</a> do not use cover</td></tr>
    <tr><td><strong>Retreat</strong></td><td>Escape melee or reposition toward production</td><td>Temporary loss of unit control</td><td>Order becomes cancellable after the icon turns yellow</td></tr>
    <tr><td><strong>On-field reinforcement</strong></td><td>Replace squad models without leaving the field</td><td>Can drain the economy during prolonged fights</td><td>Necrons use a distinctive variant</td></tr>
  </tbody>
</table>

<h2>Directional cover and garrisonable structures</h2>
<p>Directional cover protects a squad from the relevant approach, so facing and flanking matter. Garrisonable structures provide protection from all directions. The developers describe cover as an optimization rather than an automatic win condition: it can swing an otherwise close engagement, but positioning, weapons, abilities, and matchups still matter.</p>
<p>Faction asymmetry changes how players create safe positions. <a href="/factions/orks">Orks</a> can construct their own cover, while the <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus</a> can build a garrisonable structure. Necrons sit outside this normal cover loop entirely.</p>

<h2>What breaks or bypasses cover?</h2>
<ul>
  <li><strong>Melee contact:</strong> engaging a ranged squad in melee forces it out of cover.</li>
  <li><strong>Specialized Wargear:</strong> developers specifically name Flamers and grenades as examples that can negate cover.</li>
  <li><strong>Flanking:</strong> directional protection makes the angle of attack important even before special weapons enter the fight.</li>
</ul>

<h2>When retreat becomes a tactical commitment</h2>
<p>Retreat moves units toward their closest production structure while reducing the damage they take. During the first stage, the retreat icon is red and the order is committed. After it changes to yellow, the player may cancel and regain control. This creates a choice between staying long enough to deal more damage and leaving early enough to preserve veterancy.</p>
<p>The opposing player also faces a decision: commit focus fire and abilities to chase the retreating unit, or stop the chase and use the opening to capture territory. See the broader <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a> for the objectives that can make territory more valuable than a risky pursuit.</p>

<h2>Why reinforcement is powerful but expensive</h2>
<p>On-field reinforcement lets players invest resources directly into an active engagement. Auto-reinforce can make squads significantly harder to remove, but placing too many units on automatic replacement can consume resources needed for production, upgrades, or tech. It is a battlefield advantage tied directly to economy management—not free healing.</p>

<h2>How faction asymmetry changes preservation</h2>
<p>The same preservation tool does not carry identical value for every army. <a href="/factions/space-marines">Space Marines</a> field elite squads whose veterancy may make a successful retreat especially valuable. Orks can push infrastructure forward and create cover, shortening the distance between production and battle. Adeptus Mechanicus units operate around a connected Noosphere that can reward holding prepared territory. Necrons skip normal cover and receive a distinct reinforcement implementation.</p>
<p>Those descriptions come from official previews, but the relative value is an editorial interpretation. Final unit prices, reinforcement rates, retreat paths, and veterancy bonuses will determine whether preservation-heavy play is economically optimal in a specific matchup.</p>

<h2>A practical decision framework</h2>
<ol>
  <li><strong>Before contact:</strong> identify directional cover, garrisons, the closest production structure, and the route an enemy melee unit could use.</li>
  <li><strong>During contact:</strong> compare the cost of reinforcing with the value of holding the position. Auto-reinforce should be an active economic decision.</li>
  <li><strong>At the retreat threshold:</strong> leave enough time for the squad to survive the forced movement period. Waiting for one more attack may trade veterancy for little gain.</li>
  <li><strong>After disengaging:</strong> decide whether to cancel once the icon turns yellow, continue to safety, or redirect fresh units to protect the route.</li>
</ol>
<p>This framework is designed for new RTS players who need a repeatable question sequence. It is not a substitute for matchup data, which will be added after public hands-on testing becomes available.</p>

<h2>Common mistakes to avoid</h2>
<ul>
  <li><strong>Treating cover as invulnerability:</strong> it reduces ranged damage but can be bypassed by angle, melee, and specialized Wargear.</li>
  <li><strong>Retreating every unit together:</strong> a total withdrawal may concede an objective even when only one damaged squad needs to leave.</li>
  <li><strong>Leaving auto-reinforce on by default:</strong> replacing models across several squads can consume the resources intended for tech progression.</li>
  <li><strong>Chasing every retreat:</strong> a failed pursuit can pull units away from Strategic Positions or a newly appearing Maelstrom objective.</li>
</ul>
<div class="recommendation-box"><h3>Launch-day verification checklist</h3><ul><li>Measure cover reduction by weapon class.</li><li>Record the red-to-yellow retreat timing.</li><li>Compare reinforcement cost in and out of combat.</li><li>Document the Necron-specific reinforcement rules.</li></ul></div>
`,
  },
  {
    slug: "dawn-of-war-4-maelstrom-mode-guide",
    title: "Dawn of War 4 Maelstrom Mode: Objectives Explained",
    seoTitle: "Dawn of War 4 Maelstrom Mode Guide",
    shortTitle: "Maelstrom Mode Guide",
    excerpt: "Dawn of War 4 Maelstrom mode uses dynamically appearing objectives. Learn its confirmed win condition, how it differs from Domination, and what remains TBA.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "5 min read",
    keywords: ["Dawn of War 4 Maelstrom mode", "Dawn of War IV Maelstrom", "Dawn of War 4 multiplayer objectives"],
    officialStatus: "Quick Match mode confirmed",
    sources: [
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Dawn of War IV official overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
    ],
    faqs: [
      { question: "What is Maelstrom mode in Dawn of War 4?", answer: "Maelstrom is a Quick Match win condition where players secure objectives that dynamically appear across the map to earn Victory Points." },
      { question: "How is Maelstrom different from Domination?", answer: "Domination is built around holding more Strategic Positions than the opponent. Maelstrom instead moves attention toward objectives that appear dynamically during the match." },
      { question: "Is Maelstrom available in ranked matchmaking?", answer: "The developer confirms it as a selectable Quick Match mode. A separate ranked rule set, map pool, team-size limit, and scoring values have not yet been detailed." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Maelstrom is one of three confirmed Dawn of War IV Quick Match modes. Players gain Victory Points by securing objectives that dynamically appear across the map, forcing armies to respond to changing priorities.</div>

<h2>Maelstrom win condition at a glance</h2>
<p>The developers list Maelstrom beside Annihilation and Domination in the Quick Match selector. Annihilation is the default, but players can choose any or all of the available conditions when matchmaking. The official description confirms dynamic objectives and Victory Points; it does not yet publish score thresholds, objective duration, spawn logic, or supported team sizes.</p>
<table class="data-table">
  <thead><tr><th>Quick Match mode</th><th>Confirmed objective</th><th>Likely source of pressure</th></tr></thead>
  <tbody>
    <tr><td><strong>Annihilation</strong></td><td>Destroy every enemy headquarters and protect your own</td><td>Base defense and finishing attacks</td></tr>
    <tr><td><strong>Domination</strong></td><td>Hold more Strategic Positions to gain Victory Points</td><td>Persistent territorial control</td></tr>
    <tr><td><strong>Maelstrom</strong></td><td>Secure dynamically appearing objectives for Victory Points</td><td>Rapid movement between changing locations</td></tr>
  </tbody>
</table>

<h2>Why dynamic objectives change an RTS match</h2>
<p>A fixed objective lets players build a plan around known terrain. A dynamic objective can pull armies away from established firing lines, expose an expansion, or create a short window in which mobility matters more than raw defensive strength. That conclusion is an editorial inference from the confirmed rule—not a published balance claim.</p>
<p>The four <a href="/blog/dawn-of-war-4-factions-compared">launch factions</a> approach map movement differently. Ork construction and pressure, Space Marine orbital deployment, Necron teleport infrastructure, and the Adeptus Mechanicus Noosphere could all shape how players respond. Exact Maelstrom strategies must wait for final maps and scoring rules.</p>

<h2>Three decisions players should expect</h2>
<ol>
  <li><strong>Contest or trade:</strong> decide whether the new objective is worth leaving a defended position.</li>
  <li><strong>Commit or delay:</strong> send the full army, a screening force, or abilities that buy time.</li>
  <li><strong>Score or punish:</strong> attack the objective itself or strike the opponent’s exposed base and economy.</li>
</ol>
<p>These are general RTS decision patterns, not tested Dawn of War IV build orders. Once the game launches, this archive will replace them with map-specific evidence and replay timing.</p>

<h2>What is still unconfirmed</h2>
<ul><li>Victory Point totals and scoring rate.</li><li>How long each dynamic objective remains active.</li><li>Whether objective locations can repeat.</li><li>Final player and team-size limits.</li><li>Ranked matchmaking and tournament rules.</li></ul>

<h2>How Maelstrom may affect each faction</h2>
<p>The following section is a source-based interpretation, not tested balance advice. Space Marine buildings can deploy from orbit within vision, with longer deployment times farther from headquarters. That could help establish infrastructure around a newly important area, but visible deployment markers can warn opponents. Ork infantry can construct inexpensive armed buildings, potentially supporting pressure across a wider map.</p>
<p>Necron Tomb Pylons allow forces to teleport from headquarters, while the Power Matrix is tied to their economy and unit empowerment. Adeptus Mechanicus structures form a Noosphere Network that unlocks stronger options and benefits units within its influence. A moving-objective mode may therefore create a tension between defending established networks and contesting points beyond them.</p>

<h2>Maelstrom preparation without inventing a build order</h2>
<p>Before official maps and numbers exist, players can still practice decision-making in other RTS games. The transferable skill is not memorizing an opening; it is reading the map, preserving a mobile reserve, and evaluating whether an objective is worth the opportunity cost.</p>
<ul>
  <li><strong>Keep reconnaissance active:</strong> a dynamic objective is more valuable when you also know which route the opponent is using.</li>
  <li><strong>Avoid one immobile army group:</strong> a small screening force may delay a capture while the main army protects production.</li>
  <li><strong>Track the win condition:</strong> an objective matters because of Victory Points, not merely because a fight is available there.</li>
  <li><strong>Preserve retreat routes:</strong> contesting a temporary location is less useful if the entire force becomes trapped afterward.</li>
</ul>

<h2>What to record during the first week</h2>
<table class="data-table">
  <thead><tr><th>Question</th><th>Why it matters</th><th>Evidence needed</th></tr></thead>
  <tbody>
    <tr><td>Where can objectives appear?</td><td>Determines scouting paths and defensive reach</td><td>Multiple replays on each map</td></tr>
    <tr><td>How are Victory Points awarded?</td><td>Sets the value of contesting versus trading</td><td>Score changes with timestamps</td></tr>
    <tr><td>How long does an objective persist?</td><td>Controls whether slow armies can respond</td><td>Spawn and expiry timing</td></tr>
    <tr><td>Can objectives overlap or repeat?</td><td>Affects long-term map control</td><td>Full-match objective sequence</td></tr>
  </tbody>
</table>
<p>For all announced formats, compare the complete <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">Dawn of War IV multiplayer modes</a>. For the mechanics used to preserve squads while rotating across the map, read the <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">cover and retreat guide</a>.</p>
`,
  },
  {
    slug: "dawn-of-war-4-year-one-roadmap-dlc",
    title: "Dawn of War 4 Year One Roadmap: Free & Paid DLC",
    seoTitle: "Dawn of War 4 Year One DLC Roadmap",
    shortTitle: "Year One DLC Roadmap",
    excerpt: "See the revised Dawn of War 4 Year One roadmap after the December delay, including free Crusade mode, maps, mission editor, scenarios and premium DLC.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-29",
    author: "Kronus Archive Commercial Desk",
    category: "Pre-order & Editions",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 DLC roadmap", "Dawn of War 4 Year One expansion", "Dawn of War 4 Crusade mode"],
    officialStatus: "Year One plan confirmed by publisher",
    sources: [
      { label: "Release date update and revised roadmap", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/release-date-update" },
      { label: "Original editions and DLC plan", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
    ],
    faqs: [
      { question: "What free DLC is planned for Dawn of War 4?", answer: "Deep Silver still plans free Crusade mode, new map packs, a mission editor, and additional Commander scenarios for Last Stand and Crusade. The August delay moved the post-launch rollout into 2027; individual dates remain TBA." },
      { question: "What paid DLC is in the Year One expansion?", answer: "The two announced premium releases are the Blood Ravens Story Prologue and Aftermath, a campaign expansion that introduces an additional faction." },
      { question: "Does the Commander Edition include the Year One DLC?", answer: "Yes. The publisher says Commander Edition owners receive the announced free and paid DLC, alongside the base game and digital soundtrack." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Updated roadmap:</strong> Dawn of War IV's move to December 3 also shifted its post-launch calendar. Free modes, maps, editing tools and scenarios plus two premium story releases remain planned, with the rollout now moving through 2027. Exact dates remain unannounced.</div>

<h2>Confirmed Dawn of War 4 DLC roadmap</h2>
<p>Deep Silver describes the post-launch plan as the Year One Expansion. After delaying the base game from September 17 to December 3, the publisher also issued a revised roadmap. It separates free updates available to game owners from two premium story packages included with the Commander Edition or sold separately. This page records announced content without inventing exact dates from the roadmap artwork.</p>
<table class="data-table">
  <thead><tr><th>Content</th><th>Type</th><th>Confirmed window or status</th><th>What the publisher says</th></tr></thead>
  <tbody>
    <tr><td><strong>Crusade mode</strong></td><td>Free</td><td>Revised 2027 rollout; exact date TBA</td><td>Post-launch game mode</td></tr>
    <tr><td><strong>Map packs</strong></td><td>Free</td><td>Revised 2027 rollout; exact dates TBA</td><td>New maps</td></tr>
    <tr><td><strong>Mission editor</strong></td><td>Free</td><td>Revised 2027 rollout; exact date TBA</td><td>Player-facing mission creation tool</td></tr>
    <tr><td><strong>Commander scenarios</strong></td><td>Free</td><td>Revised 2027 rollout; exact dates TBA</td><td>New scenarios for Last Stand and Crusade</td></tr>
    <tr><td><strong>Blood Ravens Story Prologue</strong></td><td>Premium</td><td>Date TBA</td><td>Story leading into the main campaign</td></tr>
    <tr><td><strong>Aftermath</strong></td><td>Premium</td><td>Date TBA</td><td>Campaign expansion plus an additional faction</td></tr>
  </tbody>
</table>

<h2>What is free for all game owners?</h2>
<p>The publisher groups Crusade, maps, the mission editor, and Commander scenarios under free DLC. “Free” does not mean every feature arrives on launch day: following the base-game delay, the revised schedule places this work in the 2027 post-launch period. The order and individual dates are not yet public.</p>
<p>Crusade is separate from the launch campaign and from the three Quick Match win conditions described in our <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a>. Until a dedicated feature reveal appears, rules such as progression, map structure, and co-op capacity remain TBA.</p>

<h2>What are the two premium expansions?</h2>
<h3>Blood Ravens Story Prologue</h3>
<p>The prologue follows a Blood Ravens strike force travelling to Aurelia and expands on events before the main campaign. It is included with Commander Edition and will also be sold separately.</p>
<h3>Aftermath</h3>
<p>Aftermath continues the campaign and adds a new playable faction. The faction identity, roster, campaign length, and release date have not been announced. Any named-faction prediction should therefore be treated as speculation.</p>

<h2>Standard or Commander Edition for DLC?</h2>
<p>Standard Edition includes the base game, while Commander Edition packages the base game, both premium releases, the digital soundtrack, and the three-day early unlock offered to pre-purchasers. Use our <a href="/blog/dawn-of-war-4-release-date-editions-early-access">edition comparison</a> for current US Steam pricing and the exact inclusions.</p>

<h2>What the roadmap does not promise</h2>
<p>A roadmap describes current plans, not a guarantee that every feature will ship on the first possible date. Deep Silver revised the schedule when it moved the base game to December, but has not assigned a precise public release date to each free update or either premium DLC.</p>
<ul>
  <li>No exact launch date for Crusade mode.</li>
  <li>No number or names for the free maps.</li>
  <li>No published specification for the mission editor.</li>
  <li>No scenario count for Last Stand or Crusade.</li>
  <li>No identity or roster for the Aftermath faction.</li>
  <li>No separate price for either premium DLC at the time of this update.</li>
</ul>

<h2>How to evaluate the Year One expansion</h2>
<p>Players interested mainly in the launch campaign can safely judge the Standard Edition on the base game alone. Players who already expect to play both story expansions can compare the Commander Edition premium with the eventual separate DLC prices. Until those standalone prices are public, claims that one option is definitively cheaper are premature.</p>
<p>The free content should not be counted as exclusive Commander Edition value because the publisher says it is free. Commander owners receive it, but so do other game owners. The commercial difference comes from the early unlock, digital soundtrack, Blood Ravens Story Prologue, Aftermath, and the new faction bundled with Aftermath.</p>

<h2>Roadmap tracking checklist</h2>
<table class="data-table">
  <thead><tr><th>Update to watch</th><th>What Kronus Archive will verify</th></tr></thead>
  <tbody>
    <tr><td>Crusade reveal</td><td>Rules, progression, player capacity, and launch date</td></tr>
    <tr><td>Mission editor showcase</td><td>Sharing, scripting, map support, and platform requirements</td></tr>
    <tr><td>Premium DLC store pages</td><td>Standalone prices, dates, and exact inclusions</td></tr>
    <tr><td>Aftermath faction reveal</td><td>Name, mechanics, commanders, units, and campaign scope</td></tr>
  </tbody>
</table>
<p>This page will change only when an official publisher announcement or store listing changes the record. Rumors and unnamed leaks will not be added to the confirmed roadmap table.</p>
<div class="recommendation-box"><h3>Before you buy</h3><ul><li>Compare the bundle price with buying the premium DLC separately once prices are announced.</li><li>Do not assume every roadmap item arrives at once.</li><li>Recheck Steam because regional pricing and the pre-purchase discount can change.</li></ul></div>
`,
  },
  {
    slug: "dawn-of-war-4-orks-faction-guide",
    title: "Dawn of War 4 Orks Guide: Waaagh!, Units & Commanders",
    seoTitle: "Dawn of War 4 Orks Faction Guide",
    shortTitle: "Orks Faction Guide",
    excerpt: "Learn how the Dawn of War 4 Orks faction works: Waaagh! momentum, low-cost expansion, early upgrades, Gorgutz, Guzcutta, and confirmed battlefield roles.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 Orks guide", "Dawn of War 4 Waaagh mechanic", "Dawn of War 4 Gorgutz"],
    officialStatus: "Based on official Orks faction deep dive",
    sources: [
      { label: "Faction Deep Dive — Orks", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-orks" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
    ],
    faqs: [
      { question: "How does the Ork Waaagh! work in Dawn of War 4?", answer: "The Waaagh! meter grows with the number of Orks fielded and enemies killed. Activating it makes fighting units more aggressive and stronger for a timed battlefield advantage." },
      { question: "Who are the Ork commanders in Dawn of War 4?", answer: "The official faction preview names returning Warboss Gorgutz and the new Beast Snagga Boss Guzcutta. Guzcutta later unlocks a Squigosaur mount during the campaign." },
      { question: "Can Orks build cover?", answer: "Yes. Developers confirm that Orks can construct their own cover, supporting their ability to expand and bring infrastructure closer to the front." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Faction summary:</strong> Dawn of War IV Orks are built around numbers, fast expansion, inexpensive structures, early upgrades, and a Waaagh! meter charged by fielded Orks and defeated enemies. Exact costs, bonuses, and build timings remain unannounced.</div>

<h2>How the Orks play in Dawn of War 4</h2>
<p>Orks are one of four confirmed <a href="/blog/dawn-of-war-4-factions-compared">launch factions</a>. Deep Silver’s faction preview positions them as an aggressive army that expands through fighting and looting. Their roster can add models and unlock weapons or upgrades early, while many units and structures sit among the game’s cheaper options.</p>
<table class="data-table">
  <thead><tr><th>Confirmed feature</th><th>Battlefield meaning</th><th>Still unknown</th></tr></thead>
  <tbody>
    <tr><td><strong>Waaagh! meter</strong></td><td>Build momentum through army size and kills, then activate a combat boost</td><td>Meter values, duration, and exact bonuses</td></tr>
    <tr><td><strong>Low-cost units and buildings</strong></td><td>Supports expansion and a larger battlefield presence</td><td>Costs and economic breakpoints</td></tr>
    <tr><td><strong>Infantry construction</strong></td><td>Almost any Ork infantry can build armed structures</td><td>Build times and structure-specific limits</td></tr>
    <tr><td><strong>Self-built cover</strong></td><td>Creates protection closer to the frontline</td><td>Durability and placement restrictions</td></tr>
  </tbody>
</table>

<h2>How the Waaagh! meter works</h2>
<p>The official preview compares Waaagh! to an energy bar. It fills through two confirmed inputs: putting more Orks on the battlefield and killing enemies. Activating it makes units already engaged in combat act like berserkers and become substantially stronger.</p>
<p>The strategic lesson is timing. Triggering Waaagh! without enough units in contact may waste part of its value; waiting too long risks losing the squads that charged it. Exact activation rules require launch testing, so this is a decision framework rather than a finished build order.</p>

<h2>Confirmed Ork units and roles</h2>
<ul>
  <li><strong>Flash Gitz:</strong> powerful ranged infantry using Snazzguns to pressure defensive lines.</li>
  <li><strong>Squighog Boyz:</strong> relatively fast mounted fighters designed to strike and create gaps in a frontline.</li>
  <li><strong>Lootas and Looted Wagons:</strong> examples named by developers when discussing ranged threats and anti-mass tools.</li>
  <li><strong>Slugga Boyz:</strong> can use a Burna that is particularly effective against clustered units.</li>
</ul>
<p>This list is not presented as the complete launch roster. Unit costs, production tiers, upgrades, and counters can change during final balancing.</p>

<h2>Gorgutz and Guzcutta</h2>
<p>Warboss Gorgutz returns from earlier Dawn of War games and appears at the start of Dawn of War IV. The campaign also introduces Guzcutta, a Beast Snagga Boss designed as an emerging rival. Guzcutta begins on foot and later unlocks a Squigosaur he can ride, effectively changing how the commander enters battle.</p>
<p>Outside campaigns, the developer says multiplayer commanders are generic faction units selected before a match and normally produced from headquarters after unlocks. Named campaign characters should therefore not automatically be treated as standard multiplayer commander options.</p>

<h2>Buildings, forward pressure, and economy</h2>
<p>The multiplayer developers say almost any Ork infantry can build structures. Those buildings are relatively cheap and always armed, making “base crawling” a natural part of the faction: production can move closer to the fighting while new structures also threaten nearby enemies. Forward production shortens reinforcement travel, but it also places economic assets where opponents can attack them.</p>
<p>Orks can additionally build their own cover. Combined with armed structures, that suggests a faction identity based on turning newly captured territory into a fighting position. The word “suggests” matters here; exact construction radius, weapon damage, cover durability, and refund rules have not been published.</p>

<h2>How Orks interact with core multiplayer systems</h2>
<ul>
  <li><strong>Cover:</strong> Orks can create cover rather than relying only on map placement.</li>
  <li><strong>Retreat:</strong> like other cover-using factions, Ork squads can preserve experience by disengaging toward production.</li>
  <li><strong>On-field reinforcement:</strong> adding models supports the faction’s numbers, but continuous replacement can pressure the economy.</li>
  <li><strong>Anti-mass tools:</strong> the developer names the Slugga Boyz’ Burna as a weapon suited to clustered enemies.</li>
  <li><strong>Faction Stratagem:</strong> every faction has a powerful Stratagem independent of its selected Commander; the Ork-specific details remain TBA.</li>
</ul>

<h2>Beginner questions to ask during a match</h2>
<ol>
  <li>Is the Waaagh! meter growing because the army is expanding, because enemies are dying, or both?</li>
  <li>Will another inexpensive unit create useful pressure, or delay a needed technology unlock?</li>
  <li>Can an infantry builder safely establish armed production closer to the objective?</li>
  <li>Is Waaagh! being activated with enough units already fighting to justify the timing?</li>
  <li>Should a damaged squad reinforce in the field, retreat, or hold behind constructed cover?</li>
</ol>
<p>These questions describe the faction’s confirmed systems without pretending that a universal five-minute sequence exists. Maps, opponents, balance patches, and selected Commanders will all affect the correct answer.</p>

<h2>Ork strengths, risks, and launch questions</h2>
<div class="recommendation-box"><h3>What to watch</h3><ul><li><strong>Strength:</strong> pressure from numerous affordable units and armed forward structures.</li><li><strong>Strength:</strong> Waaagh! converts existing momentum into a timed combat advantage.</li><li><strong>Risk:</strong> an economy spread across forward structures may be exposed to focused attacks.</li><li><strong>Verify at launch:</strong> Waaagh! thresholds, expansion timings, unit caps, reinforcement costs, and anti-vehicle options.</li></ul></div>
<p>Players comparing this aggressive style with defensive scaling should review the <a href="/factions/necrons">Necrons dossier</a> and <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus dossier</a>. For positioning fundamentals, see the <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">cover, retreat, and reinforcement guide</a>.</p>
`,
  },
  {
    slug: "dawn-of-war-4-adeptus-mechanicus-faction-guide",
    title: "Dawn of War 4 Adeptus Mechanicus Guide: Noosphere & Units",
    seoTitle: "Dawn of War 4 Adeptus Mechanicus Guide",
    shortTitle: "Adeptus Mechanicus Faction Guide",
    excerpt: "Learn how the Dawn of War 4 Adeptus Mechanicus use the Noosphere, Void Shield, Auger Vision, ranged units, Knights, and two distinct Commanders before launch.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "10 min read",
    keywords: ["Dawn of War 4 Adeptus Mechanicus guide", "Dawn of War 4 Noosphere", "Dawn of War 4 AdMech units"],
    officialStatus: "Based on official faction preview and developer AMA",
    sources: [
      { label: "Introducing Dawn of War IV’s Adeptus Mechanicus", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/introducing-warhammer-40-000-dawn-of-war-iv-s-adeptus-mechanicus" },
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Dawn of War IV official overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
    ],
    faqs: [
      { question: "How does the Adeptus Mechanicus Noosphere work in Dawn of War 4?", answer: "Adeptus Mechanicus structures link back to headquarters to form a Noosphere Network. Adding connected structures raises its level, unlocks stronger technology, and benefits units and production inside its sphere of influence." },
      { question: "What does the Void Shield do?", answer: "The Void Shield protects a large area containing buildings and units. Enemies can move through it, but enemy ranged fire cannot pass through the barrier, making its placement important around chokepoints." },
      { question: "Who are the Adeptus Mechanicus Commanders?", answer: "The two named campaign Commanders are Technoarcheologist Potentia Delta-9 and Skitarii Marshal Sek-Ix-23. Potentia offers scouting and flexible upgrades; Sek-Ix-23 buffs nearby units and is protected by multiple bodyguard models." },
      { question: "Is this an Adeptus Mechanicus build order?", answer: "No. Final costs, build times, upgrade requirements, and balance values are not public. This guide explains confirmed systems and provides a launch-day testing framework rather than inventing an opening sequence." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> The Dawn of War IV Adeptus Mechanicus are a fast, ranged-focused faction built around a connected Noosphere Network. Their strength grows as linked structures unlock technology and improve forces inside the network, while Auger Vision, the Void Shield, specialized units, and two contrasting Commanders reward planning and combined arms.</div>

<p>This guide is for players who want to understand the faction before choosing an army. It separates developer-confirmed mechanics from editorial interpretation. Exact costs, percentages, build times, network radii, and competitive build orders remain unannounced and will be added only after official documentation or repeatable launch testing.</p>

<h2>Adeptus Mechanicus playstyle at a glance</h2>
<p>The Adeptus Mechanicus make their first full appearance as a playable Dawn of War faction. KING Art Games describes them as relatively quick, strong at ranged combat, and equipped with technological tools that reveal information and amplify connected forces. They do field melee specialists, including Ruststalkers, but their close-combat units are designed to work with ranged synergies rather than turn the faction into an Ork-style brawler.</p>
<table class="data-table">
  <thead><tr><th>Confirmed system</th><th>What it does</th><th>Strategic question</th><th>Still unannounced</th></tr></thead>
  <tbody>
    <tr><td><strong>Noosphere Network</strong></td><td>Links structures, static weapons, and units back to headquarters</td><td>How far can the network expand without becoming fragile?</td><td>Connection radius, thresholds, and exact bonuses</td></tr>
    <tr><td><strong>Auger Vision</strong></td><td>Shows imperfect signs of enemy activity beneath fog of war</td><td>When is a warning strong enough to justify repositioning?</td><td>Duration, cooldown, range, and information detail</td></tr>
    <tr><td><strong>Void Shield</strong></td><td>Stops hostile ranged fire crossing a large protected area</td><td>Which buildings, units, or chokepoints deserve protection?</td><td>Cost, durability, size, and counterplay values</td></tr>
    <tr><td><strong>Combined arms</strong></td><td>Pairs mobile ranged units, support tools, melee threats, and heavy machines</td><td>Which unit covers the current weakness of the formation?</td><td>Complete roster and production tiers</td></tr>
  </tbody>
</table>

<h2>How the Noosphere Network works</h2>
<p>The Noosphere is the defining Adeptus Mechanicus mechanic. Buildings connect to headquarters, and the linked chain creates a sphere of influence that can include structures, static weapons, and units. As more structures join the network, its level increases and opens access to stronger units, upgrades, and research. The official faction preview also says units within the network can become stronger and cheaper to produce.</p>
<p>This creates a base-building problem with two competing goals. A compact network should be easier to defend, but it may surrender map reach and resources. A wide network can support forward units and production, but losing one critical connection may isolate part of the system. The developer explicitly frames disconnecting the Noosphere as an enemy objective, so network topology matters alongside army combat.</p>
<p>It is important not to convert that description into fictional percentage bonuses. An earlier version of this site presented unsupported cost and turret values; those figures have been removed. Until the final game exposes its rules, the correct preparation is learning how to evaluate connectivity, redundancy, and the value of territory.</p>

<h2>Building a resilient network without a fake build order</h2>
<p>A pre-release build order would require exact costs, build times, starting resources, map distances, and unlock requirements. Those inputs are not public. Players can still use a source-led planning framework when the game becomes available:</p>
<ol>
  <li><strong>Identify the network root:</strong> confirm which headquarters connection keeps each branch active.</li>
  <li><strong>Map critical links:</strong> note whether destroying one structure disconnects several valuable buildings.</li>
  <li><strong>Add redundancy:</strong> test whether alternative connections preserve the sphere after a flank or artillery strike.</li>
  <li><strong>Match expansion to information:</strong> use Auger Vision and scouting before extending expensive technology toward contested ground.</li>
  <li><strong>Protect the payoff:</strong> place defenses where they guard production, research, and the structures that maintain network level.</li>
</ol>
<p>This sequence is a launch-day testing method, not a claim about the optimal opening. Maps and balance patches may change the correct structure order, while different multiplayer objectives can make a forward branch more or less valuable.</p>

<h2>Auger Vision and battlefield information</h2>
<p>Auger Vision is a strategic ability that provides awareness beneath the fog of war. The developer compares it to a heatmap: it hints at enemy activity in an area without providing perfect information. That distinction matters. A hint can reveal that something is developing, but players must still scout or infer whether the threat is infantry, armor, a base expansion, or a diversion.</p>
<p>Used defensively, Auger Vision can warn of pressure against a vulnerable network link. Used offensively, it may identify lightly protected space for ranged units to exploit. Used around a changing objective, it can help decide whether to commit the main formation or preserve it for another location. These use cases are reasonable interpretations of the confirmed information tool; cooldown and coverage will determine how often they are practical.</p>

<h2>Void Shield rules and chokepoint use</h2>
<p>The Void Shield is an enormous defensive structure that can cover many buildings and units. Friendly and enemy units can move through the shield, and friendly forces can move out. Hostile ranged attacks cannot travel through it. The barrier therefore changes firing lines without creating a sealed wall.</p>
<p>That rule produces several immediate tactical consequences. A ranged opponent may need to enter the protected area, attack the shield or its support network, or reposition toward another angle. Melee attackers are not automatically stopped at the boundary, so a shielded formation still needs units capable of controlling enemies that cross it. The Void Shield is best understood as a tool that changes engagement geometry, not an invulnerability button.</p>
<ul>
  <li><strong>Protect production:</strong> cover buildings that are essential to maintaining the Noosphere.</li>
  <li><strong>Shape a chokepoint:</strong> deny comfortable ranged fire while forcing enemies to approach.</li>
  <li><strong>Support a firing line:</strong> let ranged units operate behind the shield while melee or durable units watch the boundary.</li>
  <li><strong>Avoid false safety:</strong> plan for enemies physically entering the protected area.</li>
</ul>

<h2>Confirmed Adeptus Mechanicus units and roles</h2>
<p>The official preview presents a faction that combines lower-cost mobile troops with advanced machines and Knight support from the Imperium’s House Raven. The complete launch roster and production tree are not public, so the table describes only units and battlefield identities specifically mentioned or shown by the publisher.</p>
<table class="data-table">
  <thead><tr><th>Unit or tool</th><th>Confirmed identity</th><th>How it fits the faction</th></tr></thead>
  <tbody>
    <tr><td><strong>Ruststalkers</strong></td><td>Close-combat specialists</td><td>Exploit openings created by ranged pressure rather than replacing it</td></tr>
    <tr><td><strong>Onager Dunecrawler</strong></td><td>Large, heavily armed war machine</td><td>Adds durable mechanized firepower</td></tr>
    <tr><td><strong>Skorpius Disintegrator</strong></td><td>Long-range vehicle</td><td>Supports the faction’s emphasis on ranged combat</td></tr>
    <tr><td><strong>Imperial Knights</strong></td><td>Colossal House Raven combat machines</td><td>Provide a high-impact heavy option tied to the faction’s Imperial alliance</td></tr>
    <tr><td><strong>Garrisonable structure</strong></td><td>Faction-built protection</td><td>Creates defensive positions alongside Noosphere infrastructure</td></tr>
  </tbody>
</table>
<p>Exact weapons, counters, upgrades, and tech tiers should be verified after launch. For example, knowing that a unit is long-ranged does not reveal its accuracy, minimum range, armor interaction, or resource efficiency. Those are the details that eventually turn a faction overview into a tested strategy guide.</p>

<h2>Potentia Delta-9 vs Sek-Ix-23</h2>
<p>The Adeptus Mechanicus campaign offers two named leaders with different purposes. Technoarcheologist Potentia Delta-9 can deploy a servo-skull to scout remote areas. Her upgrade paths are described as highly flexible, allowing development toward melee or ranged combat while retaining technological tricks. She fits players who value information and adapting a Commander to the match.</p>
<p>Skitarii Marshal Sek-Ix-23 focuses on improving units attached to him and other forces within range. The official preview encourages placing him close to the center of battle so more units receive his support. Bodyguards make him the only Commander described as a multi-model unit, and the publisher specifically imagines him leading a 20-strong Skitarii formation.</p>
<p>Those campaign identities should not be assumed to map directly onto every multiplayer rule. The multiplayer AMA says generic faction Commanders are selected before a match and normally produced from headquarters after unlocks. Named campaign characters and multiplayer Commander options may therefore differ.</p>

<h2>Who should choose Adeptus Mechanicus?</h2>
<div class="recommendation-box"><h3>Best fit player profile</h3><ul><li>Choose them if you enjoy spatial base planning and connected infrastructure.</li><li>Choose them if you prefer ranged combined arms over constant melee pressure.</li><li>Choose them if information tools and adaptable technology appeal to you.</li><li>Expect a learning curve: network placement creates more dependencies than the straightforward Space Marine structure system.</li></ul></div>
<p>Players who prefer relentless numbers may be happier with the <a href="/blog/dawn-of-war-4-orks-faction-guide">Orks faction guide</a>. Those comparing all four armies should use the <a href="/blog/dawn-of-war-4-factions-compared">faction comparison</a>. For the shared preservation systems surrounding cover and reinforcement, read the <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">cover, retreat, and reinforcement guide</a>.</p>

<h2>Launch-day Adeptus Mechanicus test checklist</h2>
<ul>
  <li>Measure every Noosphere connection radius and identify whether links require uninterrupted chains.</li>
  <li>Record network-level thresholds and the exact unlock or production benefit at each level.</li>
  <li>Test what happens to units, buildings, and research when a branch disconnects.</li>
  <li>Measure Auger Vision range, duration, cooldown, and the information shown for different enemy activities.</li>
  <li>Test which attacks the Void Shield blocks and how enemies can damage or bypass it.</li>
  <li>Compare Potentia and Sek-Ix-23 upgrades without assuming campaign and multiplayer loadouts are identical.</li>
</ul>
<p>The lasting answer to “how do Adeptus Mechanicus play in Dawn of War IV?” is that they convert connected territory and information into technological power. Build the Noosphere carefully, protect its critical links, and use ranged units and specialized tools as one system. Return after launch for measured values and replay-tested openings.</p>
`,
  },
  {
    slug: "dawn-of-war-4-crusade-mode-guide",
    title: "Dawn of War 4 Crusade Mode Guide: Map, Actions & Progression",
    seoTitle: "Dawn of War 4 Crusade Mode Guide",
    shortTitle: "Crusade Mode Guide",
    excerpt: "Learn how Dawn of War 4 Crusade mode works: the turn-based Kronus map, Action Points, Requisition, Strike Forces, Commander campaigns, and co-op before launch.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Campaign Desk",
    category: "Campaign & Co-op",
    readTime: "10 min read",
    keywords: ["Dawn of War 4 Crusade mode", "Dawn of War IV Crusade guide", "Dawn of War 4 turn-based map"],
    officialStatus: "Crusade systems confirmed by publisher",
    sources: [
      { label: "Crusade mode returns in Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/au/games/dawn-of-war-iv/news/crusade-mode-returns-in-warhammer-40-000-dawn-of-iv" },
      { label: "Release date, editions and DLC plans", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "What we’re building with Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/what-we-re-building-with-warhammer-40-000-dawn-of-war-iv" },
    ],
    faqs: [
      { question: "What is Crusade mode in Dawn of War 4?", answer: "Crusade is a replayable extended campaign built around a turn-based world map of Kronus. Players spend limited Action Points, move a Strike Force between territories, fight RTS battles, and pursue Commander-specific objectives." },
      { question: "How long is a Dawn of War 4 Crusade?", answer: "Deep Silver says a typical Crusade takes approximately eight to ten hours. Because the mode is designed to play differently across runs, actual completion time may vary." },
      { question: "How many Crusades are available?", answer: "Five Commanders are confirmed to receive dedicated Crusades. The publisher also plans additional Commander scenarios for Crusade and Last Stand as free post-launch content." },
      { question: "Does Crusade mode support co-op?", answer: "Deep Silver has stated that Crusade supports cooperative play. Final lobby rules, player responsibilities, saving behavior, and campaign ownership details still need clarification." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Dawn of War IV Crusade mode is a replayable extended campaign that combines a turn-based map of Kronus with real-time strategy battles. You spend limited Action Points, move and improve a Strike Force, capture territories, manage Requisition, and pursue objectives shaped by the selected Commander.</div>

<p>This guide explains what Deep Silver has confirmed, how the strategic layer connects to RTS missions, and which details remain unknown. It does not invent territory bonuses, Action Point costs, AI rules, or “best routes” before the final mode can be tested.</p>

<h2>Crusade mode at a glance</h2>
<p>Crusade takes inspiration from the strategic campaign associated with Dawn of War: Dark Crusade, but KING Art Games describes its Dawn of War IV version as an endless, replayable mode rather than a fixed story campaign. Each run takes place across a turn-based world map containing numerous territories on Kronus. The selected Commander brings a particular objective, starting conditions, advantages, and disadvantages.</p>
<table class="data-table">
  <thead><tr><th>Confirmed element</th><th>Role in the campaign</th><th>Decision it creates</th><th>Still unannounced</th></tr></thead>
  <tbody>
    <tr><td><strong>World map</strong></td><td>Organizes neutral and enemy territories across Kronus</td><td>Where should the Strike Force move or attack?</td><td>Territory count, layouts, and randomization rules</td></tr>
    <tr><td><strong>Action Points</strong></td><td>Limit what can be done during each turn</td><td>Move, fight, or invest within a finite turn budget?</td><td>Starting total and action costs</td></tr>
    <tr><td><strong>Strike Force</strong></td><td>Carries combat units through the extended campaign</td><td>How should damage, upgrades, and unit composition be managed?</td><td>Roster limits and replacement rules</td></tr>
    <tr><td><strong>Requisition</strong></td><td>Improves territories and heals or develops Strike Forces</td><td>Spend on map control or army recovery?</td><td>Income values and upgrade prices</td></tr>
    <tr><td><strong>Commander scenario</strong></td><td>Defines goals, starting conditions, advantages, and disadvantages</td><td>Which campaign style fits the player?</td><td>All five launch Commander identities and exact modifiers</td></tr>
  </tbody>
</table>

<h2>How the turn-based Kronus map works</h2>
<p>The strategic layer divides Kronus into territories held by neutral or hostile forces. On a turn, players spend a limited supply of Action Points to move their Strike Force and enter new territory. Battles resolve through Dawn of War IV’s real-time strategy gameplay, giving individual missions a larger purpose: the result changes position and control on the campaign map.</p>
<p>A territory is more than a marker. Requisition can strengthen its defenses and economy, making it harder for an opponent to capture. That creates a long-term trade-off between pushing forward and consolidating what has already been won. A player who expands too quickly may leave weak holdings behind, while excessive investment in safe territory may slow progress toward the Commander’s overall objective.</p>
<p>The publisher has not revealed whether the map is procedurally generated, assembled from variations, or fixed with randomized conditions. “Always play out differently” confirms replay variation, but not the system responsible for it. The archive will preserve that distinction until the game exposes its campaign rules.</p>

<h2>Action Points: the turn’s central constraint</h2>
<p>Action Points limit how many strategic choices can be made in a turn. The official preview explicitly mentions spending them to maneuver a Strike Force into neutral and enemy territories. It does not yet publish a complete action list or the price of each action, so movement, attacks, defense, and recovery should not be assigned imaginary costs.</p>
<p>Even without numbers, Action Points establish the mode’s core decision rhythm. Every choice consumes part of a finite turn budget and carries an opportunity cost. Moving toward an objective can mean delaying an economic improvement; attacking one territory can leave another uncontested; recovering a damaged force can surrender initiative.</p>
<ol>
  <li><strong>Define the immediate objective:</strong> identify what must change before the turn ends.</li>
  <li><strong>Check force condition:</strong> determine whether the Strike Force can survive the intended battle.</li>
  <li><strong>Protect the campaign economy:</strong> avoid an advance that exposes several valuable territories.</li>
  <li><strong>Reserve flexibility:</strong> when rules allow, avoid spending the entire budget before new information appears.</li>
</ol>
<p>These are general planning principles, not an optimal route. The right sequence will depend on the Commander, enemy behavior, map state, difficulty, and the final Action Point rules.</p>

<h2>Strike Force persistence and progression</h2>
<p>The Strike Force contains the combat units moved around the world map. Requisition can heal and improve this increasingly powerful force between battles, giving damage and development meaning beyond a single match. The description suggests persistence across encounters, but the publisher has not yet documented permadeath, replacement, unit caps, veterancy retention, or whether every battlefield unit appears on the strategic roster.</p>
<p>For players, persistence changes how a tactical victory should be judged. Winning while taking severe losses may create a weaker position for the next turn. Retreating or reinforcing an experienced unit could have strategic value beyond the current mission. Our <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">cover, retreat, and reinforcement guide</a> explains the confirmed preservation mechanics that may support this approach.</p>
<p>At launch, the first task is to separate what persists from what resets. Record unit veterancy, Wargear, injuries, reinforcement status, Commander progression, and territory bonuses before and after a battle. A reliable Crusade strategy depends on that evidence.</p>

<h2>Requisition: territory or army?</h2>
<p>Requisition connects the two layers of Crusade. It improves the defenses and economies of captured territories, and it also heals and develops Strike Forces between battles. Spending in one area may reduce what is available in the other, turning economic management into a choice between securing the map and maintaining combat readiness.</p>
<table class="data-table">
  <thead><tr><th>Possible Requisition use</th><th>Confirmed purpose</th><th>Reason to prioritize it</th><th>Risk of over-investment</th></tr></thead>
  <tbody>
    <tr><td><strong>Territory defense</strong></td><td>Make captured regions harder to seize</td><td>Protect routes, economy, or an exposed frontier</td><td>Resources are tied to areas that may not be attacked</td></tr>
    <tr><td><strong>Territory economy</strong></td><td>Improve the value of controlled land</td><td>Support a longer campaign and future spending</td><td>Delayed combat power may slow an urgent objective</td></tr>
    <tr><td><strong>Strike Force healing</strong></td><td>Restore campaign units between battles</td><td>Preserve a force needed for the next attack</td><td>Repeated recovery can stall expansion</td></tr>
    <tr><td><strong>Strike Force improvement</strong></td><td>Develop an increasingly powerful army</td><td>Prepare for stronger enemies or a Commander goal</td><td>Concentration in one force may leave territories weak</td></tr>
  </tbody>
</table>
<h2>Five Commander Crusades and replayability</h2>
<p>Deep Silver says five Commanders will have dedicated Crusades. Each brings its own goals and starting conditions plus combat advantages and disadvantages. These variables are intended to make runs feel different and give the strategic map a purpose beyond a sequence of unrelated Skirmish battles.</p>
<p>Five does not necessarily mean one campaign for every named story character, and it should not be interpreted as the complete Commander roster. The official announcement does not list all five scenarios. Additional Crusades are planned as free post-launch content, aligning with the broader <a href="/blog/dawn-of-war-4-year-one-roadmap-dlc">Year One roadmap</a>.</p>
<p>The faction choice should also alter the RTS layer. Space Marines, Orks, Necrons, and Adeptus Mechanicus have different economies, buildings, Commanders, and preservation systems. Review the <a href="/blog/dawn-of-war-4-factions-compared">four-faction comparison</a> before deciding which mechanics you want to manage across an extended campaign.</p>

<h2>How long does a Crusade take?</h2>
<p>The publisher estimates that a Crusade takes approximately eight to ten hours. “Typical” leaves room for variation by difficulty, map decisions, failed battles, co-op pacing, and player familiarity. It should not be presented as a guaranteed completion time.</p>
<h2>Crusade vs campaign, Skirmish, and multiplayer</h2>
<table class="data-table">
  <thead><tr><th>Mode</th><th>Primary structure</th><th>Best fit</th></tr></thead>
  <tbody>
    <tr><td><strong>Authored campaign</strong></td><td>Four faction storylines feeding one larger narrative across 70+ missions</td><td>Players seeking characters, cinematics, and a fixed story arc</td></tr>
    <tr><td><strong>Crusade</strong></td><td>Replayable turn-based world map plus persistent RTS battles</td><td>Players seeking strategic progression and varied extended runs</td></tr>
    <tr><td><strong>Skirmish</strong></td><td>Custom map, factions, difficulty, and match settings</td><td>Practice and self-directed one-off battles</td></tr>
    <tr><td><strong>Quick Match</strong></td><td>Annihilation, Domination, or Maelstrom matchmaking</td><td>Players seeking competitive objectives against other players</td></tr>
  </tbody>
</table>
<p>Crusade’s distinguishing feature is context. Territory, Requisition, persistent force development, and a Commander objective explain why the next RTS battle matters. For individual matchmaking win conditions, see the <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a>.</p>

<h2>What remains unconfirmed before launch</h2>
<ul>
  <li>The complete map, territory count, and how layouts vary between runs.</li>
  <li>The number of Action Points per turn and the cost of every action.</li>
  <li>All five launch Commander Crusades and their modifiers.</li>
  <li>Requisition income, prices, territory upgrades, and healing rules.</li>
  <li>Strike Force roster limits, losses, replacement, and veterancy persistence.</li>
  <li>Enemy strategic AI, counterattacks, diplomacy, and difficulty behavior.</li>
  <li>Detailed co-op control, saving, ownership, and matchmaking rules.</li>
</ul>
<p>The correct pre-launch conclusion is not that these systems are absent; it is that their details are not yet public. Once Crusade is playable, Kronus Archive will replace this list with measured values, screenshots, and repeatable campaign tests.</p>

<h2>Launch-day Crusade test checklist</h2>
<ol>
  <li>Record starting Action Points, every action cost, and whether unused points carry forward.</li>
  <li>Map all territory connections, income, defenses, and special bonuses.</li>
  <li>Track Requisition gained and spent after each strategic and tactical event.</li>
  <li>Compare the Strike Force before and after victories, defeats, retreat, healing, and upgrades.</li>
  <li>Run the same Commander scenario twice to identify which elements actually vary.</li>
  <li>Test co-op saving, control assignment, disconnect recovery, and campaign ownership.</li>
</ol>
<p>Dawn of War IV Crusade mode is designed to turn individual RTS battles into a longer war for Kronus. Its confirmed foundation—limited actions, territory control, Requisition, persistent Strike Forces, and Commander-specific goals—gives players meaningful strategic choices before combat begins. Start with the objective, protect the campaign economy, and treat every battle result as part of the next turn.</p>
`,
  },
  {
    slug: "dawn-of-war-4-commanders-guide",
    title: "Dawn of War 4 Commanders Explained",
    seoTitle: "Dawn of War 4 Commanders Guide",
    shortTitle: "Dawn of War 4 Commanders Explained",
    excerpt: "Learn how Dawn of War 4 Commanders work in multiplayer, including pre-match selection, headquarters production, custom settings, and confirmed characters.",
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "8 min read",
    keywords: ["Dawn of War 4 Commanders", "Dawn of War IV heroes", "Dawn of War 4 Commander system"],
    officialStatus: "Based on official multiplayer AMA and faction previews",
    sources: [
      { label: "AMA Developer Blog – Multiplayer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Faction Deep Dive – Necrons", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-necrons" },
      { label: "Meet the new faces from the Story Trailer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/meet-the-new-faces-from-our-epic-story-trailer" },
      { label: "Introducing the cast of Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/introducing-the-cast-of-warhammer-40-000-dawn-of-war-iv" },
    ],
    faqs: [
      { question: "How do Commanders work in Dawn of War 4 multiplayer?", answer: "Players select a generic faction Commander before the match alongside their faction and starting position. By default, the Commander is produced from headquarters for a cost, usually after mid-match unlocks." },
      { question: "Can a Dawn of War 4 Commander start on the battlefield?", answer: "Yes, if the match settings are changed. Developers say custom settings can make the Commander a starting unit or disable Commanders entirely." },
      { question: "Are multiplayer Commanders the same as campaign characters?", answer: "No. KING Art Games says multiplayer uses generic faction units outside the campaigns. Named characters still lead the story, but campaign identity should not be assumed to define every multiplayer Commander." },
      { question: "Which Dawn of War 4 Commanders are confirmed?", answer: "Official previews name several story and playable leaders, including Cyrus, Jonah Orion, Gorgutz, Guzcutta, Thothmek, Ahmnok, Company Master Astoran, and other faction figures. A complete launch multiplayer roster is still TBA." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> In standard <em>Dawn of War IV</em> multiplayer, a Commander is selected before the match alongside the faction and starting position. The chosen Commander is normally produced from headquarters for a cost after required unlocks, rather than appearing automatically at the opening. Custom settings can instead make Commanders starting units or disable them.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#commander-rules">confirmed rules</a> · <a href="#commander-impact">strategic impact</a> · <a href="#confirmed-commanders">confirmed characters</a> · <a href="#commander-tba">what remains TBA</a></nav>

<h2 id="commander-rules">How the Commander system works</h2>
<p>Dawn of War 4 Commanders are powerful faction units, but the official multiplayer AMA makes an important distinction between competitive matches and the authored campaign. Outside the campaigns, Commanders are described as generic faction units. Players choose one before a match, at the same stage as their faction and starting position. That gives the opponent and the map context a role in the decision before either army begins building.</p>
<p>The selected Commander does not normally arrive for free. KING Art Games says the default rule is to produce the unit from headquarters for a cost, usually during the middle of the match after unlocking it. The developer has not published the production price, exact tech requirement, build time, or whether those values differ by faction. Any pre-launch guide claiming precise timings is therefore speculation.</p>

<table class="data-table">
  <thead><tr><th>Commander rule</th><th>Official status</th><th>Practical meaning</th></tr></thead>
  <tbody>
    <tr><td><strong>Pre-match selection</strong></td><td>Confirmed</td><td>The Commander is part of army planning, not a random mid-match choice.</td></tr>
    <tr><td><strong>Headquarters production</strong></td><td>Default rule confirmed</td><td>A standard match requires resources and unlock progress before deployment.</td></tr>
    <tr><td><strong>Generic multiplayer unit</strong></td><td>Confirmed outside campaigns</td><td>Do not assume a named story hero has identical multiplayer rules.</td></tr>
    <tr><td><strong>Starting Commander option</strong></td><td>Confirmed custom setting</td><td>Custom games can change the opening economy and battlefield balance.</td></tr>
    <tr><td><strong>Disable Commanders</strong></td><td>Confirmed custom setting</td><td>Players can create matches focused on conventional faction units.</td></tr>
  </tbody>
</table>

<h2 id="commander-impact">What Commanders change strategically</h2>
<p>Because a Commander is chosen before the match but paid for during it, the system creates two separate decisions. First, the player selects a tool that fits the intended army plan. Later, the player decides when unlocking and producing that tool is more valuable than spending the same economy on squads, research, structures, reinforcement, or map expansion.</p>
<p>This distinction matters in an RTS. A powerful unit can influence a fight only after the economy supports it, and rushing toward that unlock may leave fewer resources for territory control. The official AMA also confirms that every faction has a powerful Stratagem regardless of Commander choice. A Commander therefore adds an option to the faction rather than replacing its core mechanics.</p>
<p>Commanders are also one of the clearest ways sub-factions differ. Official story material says the Blood Ravens and Dark Angels share many units, while Commanders make the biggest gameplay difference between them. Our <a href="/blog/space-marines-dark-angels-sub-faction-differences">Blood Ravens vs Dark Angels guide</a> explains the confirmed Chapter distinction without inventing costs or matchups.</p>

<h2>Campaign heroes versus multiplayer Commanders</h2>
<p>The campaign contains named characters with specific roles in the story. Multiplayer, by contrast, uses generic faction Commander units according to the developer AMA. That means a character being named in a trailer or voice-cast announcement does not automatically prove that the same character is selectable in competitive play with identical abilities.</p>
<p>This boundary protects players from a common pre-release mistake: turning story reveals into an unofficial multiplayer roster. Kronus Archive lists named characters below as confirmed campaign or faction figures and marks playable status only where the official source explicitly supports it.</p>

<h2 id="confirmed-commanders">Confirmed Dawn of War 4 leaders and Commanders</h2>
<table class="data-table">
  <thead><tr><th>Faction</th><th>Confirmed figures</th><th>What is officially established</th></tr></thead>
  <tbody>
    <tr><td><strong>Space Marines</strong></td><td>Cyrus, Jonah Orion, Company Master Astoran, Chaplain Ezrael</td><td>Named campaign leaders and characters; Dark Angels and Blood Ravens have distinct Commander identities.</td></tr>
    <tr><td><strong>Orks</strong></td><td>Gorgutz, Beastboss Guzcutta</td><td>Both are named Ork leaders in official story material; Guzcutta is identified as a second Ork Commander.</td></tr>
    <tr><td><strong>Necrons</strong></td><td>Chronomancer Thothmek, Ahmnok</td><td>The Necron deep dive explicitly describes Thothmek as the first Commander and Ahmnok as the second playable Necron Commander.</td></tr>
    <tr><td><strong>Adeptus Mechanicus</strong></td><td>Marshal Sek-Ix-23, Magos Dominus Nulpherus-1, Potentia-Delta-9</td><td>Named faction characters appear in official cast material; complete multiplayer classifications remain TBA.</td></tr>
  </tbody>
</table>

<h3>Necron Commander contrast</h3>
<p>The July 29 Necron deep dive provides the clearest official example of a faction Commander choice. Chronomancer Thothmek manipulates time to empower his legions and disrupt enemies. Ahmnok is described as a more direct alternative who is willing to let bloodied claws do the fighting. The preview establishes contrasting identities but does not publish ability values, cooldowns, costs, or a competitive ranking.</p>

<h3>Space Marine sub-factions</h3>
<p>For Space Marines, Commander identity carries additional weight because Blood Ravens and Dark Angels operate as related Chapters within the same broader faction. Shared units preserve the Space Marine foundation, while different leaders can push the army toward a different tactical emphasis. Read the <a href="/blog/dawn-of-war-4-space-marines-faction-guide">Space Marines faction guide</a> for the systems both Chapters share.</p>

<h2>How to choose before launch</h2>
<p>There is not enough public balance data to recommend a best Commander. A useful pre-launch choice starts with role and faction identity rather than a tier list. Decide whether you want a Commander that supports the army’s existing strengths, covers a weakness, pressures a particular type of target, or changes how you plan the middle of the match.</p>
<ol>
  <li><strong>Choose the faction first.</strong> Its economy, structures, mobility, and preservation systems affect every minute of play.</li>
  <li><strong>Identify the Commander’s confirmed role.</strong> Separate official descriptions from community assumptions.</li>
  <li><strong>Plan the unlock as an economic decision.</strong> Headquarters production competes with other spending.</li>
  <li><strong>Test the default rules before custom settings.</strong> Starting-unit matches will create different timings.</li>
  <li><strong>Re-evaluate after patches.</strong> Competitive value may change even when the character fantasy remains the same.</li>
</ol>

<h2 id="commander-tba">What remains unconfirmed</h2>
<ul>
  <li>The complete launch Commander roster for all four factions and both Space Marine Chapters.</li>
  <li>Commander prices, build times, prerequisites, statistics, veterancy, and population impact.</li>
  <li>Every weapon, Wargear option, active ability, passive effect, and Stratagem interaction.</li>
  <li>Whether every named campaign character has a separate multiplayer equivalent.</li>
  <li>Matchup rankings, best picks, counters, and tournament rules.</li>
</ul>
<p>The reliable pre-launch conclusion is simple: Dawn of War 4 Commanders are a planned strategic layer selected before battle and purchased during it. Their exact competitive value cannot be measured until the final build is available. Until then, use the <a href="/blog/dawn-of-war-4-factions-compared">faction comparison</a> and <a href="/blog/dawn-of-war-4-resources-map-control-guide">resource guide</a> to understand the army and economy around the Commander.</p>
`,
  },
  {
    slug: "dawn-of-war-4-base-building-guide",
    title: "Dawn of War 4 Base Building Guide",
    seoTitle: "Dawn of War 4 Base Building Guide",
    shortTitle: "Dawn of War 4 Base Building Guide",
    excerpt: "See how Dawn of War 4 base building works and compare Space Marine orbital drops, armed Ork outposts, the Necron Power Matrix, and the AdMech Noosphere.",
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 base building", "Dawn of War IV buildings", "Dawn of War 4 factions base mechanics"],
    officialStatus: "Based on official developer AMA and gameplay previews",
    sources: [
      { label: "AMA Developer Blog – Multiplayer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Back to War In-Engine Trailer breakdown", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/a-closer-look-at-dawn-of-war-iv-s-back-to-war-in-engine-trailer" },
      { label: "Dawn of War IV official overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
      { label: "Faction Deep Dive – Necrons", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-necrons" },
    ],
    faqs: [
      { question: "Does Dawn of War 4 have base building?", answer: "Yes. Base construction is a core part of Dawn of War 4. Buildings produce units, unlock research and upgrades, open additional structures, support faction mechanics, and can be destroyed." },
      { question: "Do all Dawn of War 4 factions build bases the same way?", answer: "No. Space Marines deploy structures from orbit, Orks spread armed buildings through infantry construction, Necrons expand a Power Matrix, and Adeptus Mechanicus connect structures into a Noosphere Network." },
      { question: "Can buildings be destroyed in Dawn of War 4?", answer: "Yes. Deep Silver says player-created buildings collapse when sufficiently damaged, while parts of the environment can also be reduced to rubble." },
      { question: "Are Dawn of War 4 build orders available?", answer: "Not reliably before launch. The publisher has not released starting resources, exact structure costs, build times, full prerequisites, or final balance values needed for a repeatable build order." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Base building is a core pillar of <em>Dawn of War IV</em>. Structures produce units, unlock research and upgrades, enable additional construction, and express each faction’s economy. Space Marines use orbital deployment, Orks spread cheap armed strongholds, Necrons expand the Power Matrix, and Adeptus Mechanicus build a connected Noosphere Network.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#building-basics">core rules</a> · <a href="#faction-bases">four faction systems</a> · <a href="#base-decisions">strategic decisions</a> · <a href="#base-tba">what remains TBA</a></nav>

<h2 id="building-basics">What base building does in Dawn of War 4</h2>
<p>Developer material describes Dawn of War 4 as a return to classic Dawn of War RTS foundations. Players construct a base, expand forces, capture territory, research technology, and unlock stronger units. The official trailer breakdown says the building system is similar to the first Dawn of War, while still giving all four launch factions distinct construction mechanics.</p>
<p>Buildings do more than produce squads. The multiplayer AMA confirms that structures and their upgrades often unlock units, research, other buildings, and further building upgrades. As a result, the base acts as the army’s production centre, technology path, reinforcement destination, economic network, defensive position, and visible record of strategic investment.</p>

<table class="data-table">
  <thead><tr><th>Base function</th><th>Confirmed role</th><th>Player decision</th></tr></thead>
  <tbody>
    <tr><td><strong>Production</strong></td><td>Creates units, including Commanders from headquarters by default</td><td>Which battlefield role should receive resources next?</td></tr>
    <tr><td><strong>Technology</strong></td><td>Unlocks units, research, structures, and upgrades</td><td>Invest in immediate army strength or later options?</td></tr>
    <tr><td><strong>Territory support</strong></td><td>Extends faction presence and can shorten reinforcement routes</td><td>Build safely at home or expose a forward position?</td></tr>
    <tr><td><strong>Faction economy</strong></td><td>Power Matrix and Noosphere systems tie buildings to wider bonuses</td><td>Where should the network expand first?</td></tr>
    <tr><td><strong>Defense</strong></td><td>Fortifications and armed structures help secure ground</td><td>How much economy should remain static?</td></tr>
  </tbody>
</table>

<h2 id="faction-bases">How the four faction bases differ</h2>
<p>The shared RTS loop—build, produce, research, expand—stays recognizable, but every faction changes how structures reach the map and what they contribute. These differences are confirmed at the system level. Exact costs, construction speeds, damage values, and optimal layouts remain unpublished.</p>

<h3>Space Marines: orbital structure deployment</h3>
<p>Space Marine buildings can be dropped from orbit anywhere within the player’s vision. The farther the destination is from headquarters, the longer deployment takes. Enemy players can see the planned landing position, which creates counterplay: a forward structure can establish pressure or support territory, but it announces its arrival and may be challenged before it becomes useful.</p>
<p>Their structures can be upgraded to unlock additional units and research. The official faction overview also points to fortifications, Reserves, and the Thunderhawk Relay as ways to compensate for an elite army that cannot be everywhere. This makes base placement part of a broader mobility system, not simply a protected production grid. See the <a href="/blog/dawn-of-war-4-space-marines-faction-guide">Space Marines guide</a> for the complete confirmed framework.</p>

<h3>Orks: armed expansion and base crawling</h3>
<p>Almost any Ork infantry can construct Ork structures. Developers describe those buildings as relatively cheap and always armed, making it natural for Orks to spread several strongholds and move production closer to the front. The official overview specifically encourages multiple bases and plenty of Waaagh! Banners.</p>
<p>This forward momentum has a weakness. Armed Ork buildings are described as relatively easy to destroy, so an opponent can chip away at an extended network. The Ork player gains shorter routes and territorial pressure, but every exposed stronghold becomes another target. Our <a href="/blog/dawn-of-war-4-orks-faction-guide">Orks faction guide</a> explains how fighting and expansion reinforce each other.</p>

<h3>Necrons: Tomb Citadel and Power Matrix</h3>
<p>The Necron base grows from an upgradeable Tomb Citadel, described in the July faction deep dive as both the strategic centre and the production engine. Many Necron buildings can only be placed on the Power Matrix, while those same structures extend the field farther. Expanding the base therefore enlarges the territory where construction can continue.</p>
<p>The Matrix is also tied to economy and combat. A larger Matrix generates more Dominion, and friendly units fighting on it gain additional durability and faster healing. Tomb Pylons can create remote patches of Matrix and serve as translocation destinations from the Tomb Citadel. The base is therefore production, territory, economy, sustain, and mobility in one connected system. Read the <a href="/blog/dawn-of-war-4-necrons-faction-guide">Necrons guide</a> for more detail.</p>

<h3>Adeptus Mechanicus: connected Noosphere Network</h3>
<p>Adeptus Mechanicus structures link back to headquarters to form a Noosphere Network. The official AMA says that network is crucial for unlocking more powerful weaponry and provides economic and combat boons to units and structures inside it. The official faction overview advises building a strong network early, then expanding it toward key Resource Points.</p>
<p>Cogitator Relays in important positions can become vulnerable links. An opponent who destroys them may weaken the network, so AdMech expansion is not only about reaching territory; it is also about maintaining connection. The <a href="/blog/dawn-of-war-4-adeptus-mechanicus-faction-guide">Adeptus Mechanicus guide</a> separates these confirmed mechanics from unsupported percentage bonuses and diagram claims.</p>

<h2>Base upgrades, units, and research</h2>
<p>The official in-engine trailer breakdown confirms that constructing buildings, performing research, and upgrading structures unlock new units. Stronger units require more Power and battlefield influence before they can be fielded. This establishes a tech progression but does not reveal a universal tier sequence or identical requirements across factions.</p>
<p>Players should expect base choices to communicate intent. A new production structure, network extension, or visible orbital landing may reveal where resources are going. Scouting those changes can matter as much as seeing the army itself. Until the final interface and tech trees are public, however, named counter-builds would be premature.</p>

<h2 id="base-decisions">Five base-building decisions that are already clear</h2>
<ol>
  <li><strong>Safety versus reach:</strong> distant structures support territory but face greater exposure.</li>
  <li><strong>Units versus technology:</strong> research and upgrades compete with immediate production.</li>
  <li><strong>Concentration versus coverage:</strong> one defensible base is harder to stretch, while multiple positions influence more of the map.</li>
  <li><strong>Network continuity:</strong> Necron and AdMech structures gain meaning through connected faction systems.</li>
  <li><strong>Information:</strong> visible construction and building choices reveal future capabilities to attentive opponents.</li>
</ol>

<h2>Can bases and terrain be destroyed?</h2>
<p>Yes. Deep Silver says buildings collapse once sufficiently damaged, and the destruction system also affects scenic structures and vehicle wrecks. Annihilation uses headquarters destruction as its win condition, making base defense directly relevant to at least one default multiplayer format. For the other objectives, see the <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a>.</p>

<h2 id="base-tba">What remains unconfirmed before launch</h2>
<ul>
  <li>Starting builders, resources, headquarters functions, and opening placement rules.</li>
  <li>Complete tech trees, building names, prices, construction times, health, armor, and weapons.</li>
  <li>Power and influence thresholds for every unit and upgrade.</li>
  <li>Repair rules, cancellation refunds, rebuilding, and structure veterancy.</li>
  <li>Map-specific building restrictions and every faction’s detection or stealth structures.</li>
  <li>Verified build orders for competitive patches and matchups.</li>
</ul>
<p>A trustworthy Dawn of War 4 base building guide can explain the architecture now, but optimized build orders must wait for repeatable testing. The confirmed picture is already distinct: orbital reach, armed expansion, a growing Power Matrix, and a connected Noosphere make faction choice visible in the shape of every base.</p>
`,
  },
  {
    slug: "dawn-of-war-4-resources-map-control-guide",
    title: "Dawn of War 4 Resources & Map Control Guide",
    seoTitle: "Dawn of War 4 Resources Guide",
    shortTitle: "Resources & Map Control Guide",
    excerpt: "Understand Dawn of War 4 resources, Resource Points, Power, Dominion, map control, reinforcement spending, and how faction economies shape expansion.",
    datePublished: "2026-08-07",
    dateModified: "2026-08-07",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 resources", "Dawn of War IV Resource Points", "Dawn of War 4 map control"],
    officialStatus: "Based on official overview, AMA, and faction previews",
    sources: [
      { label: "Dawn of War IV official overview", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv" },
      { label: "AMA Developer Blog – Multiplayer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Faction Deep Dive – Necrons", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-necrons" },
      { label: "What we're building with Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/what-we-re-building-with-warhammer-40-000-dawn-of-war-iv" },
    ],
    faqs: [
      { question: "What resources are in Dawn of War 4?", answer: "Official material confirms Resource Points, Power, the Necron Dominion resource, and faction-specific economic systems. Requisition is also used in Crusade, but campaign-layer Requisition should not automatically be treated as the complete multiplayer economy." },
      { question: "How do Resource Points work in Dawn of War 4?", answer: "Players capture, control, and upgrade Resource Points to support their economy and territory. Exact income rates, upgrade prices, capture times, and decapture rules have not yet been published." },
      { question: "Why is Power important in Dawn of War 4?", answer: "Power helps gate stronger units and upgrades. The official Space Marine counter-advice specifically recommends denying Power because their elite units are expensive and require a large amount of it." },
      { question: "Does reinforcement spend resources?", answer: "Yes. On-field reinforcement commits resources to replace losses and keep units fighting. Developers warn that enabling auto-reinforce across many units can drain the economy quickly." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Dawn of War 4 ties economy directly to territory and combat. Players capture, control, and upgrade Resource Points; Power helps unlock stronger units and technology; Necrons generate Dominion through the Power Matrix; and on-field reinforcement spends resources to keep squads active. Exact income rates and prices remain TBA.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#resource-points">Resource Points</a> · <a href="#power-resource">Power</a> · <a href="#faction-economies">faction economies</a> · <a href="#combat-spending">combat spending</a> · <a href="#resource-tba">what remains TBA</a></nav>

<h2 id="resource-points">How Resource Points connect economy and territory</h2>
<p>The official Dawn of War IV overview presents control as a core activity: players capture, hold, and upgrade Resource Points while fighting across large areas of the map. That means income is not isolated inside the starting base. Economic growth requires units to reach contested ground, secure it, and prevent opponents from doing the same.</p>
<p>Resource Points also influence where faction infrastructure expands. Adeptus Mechanicus players are advised to extend the Noosphere Network toward key points, while Space Marine opponents are told to deny Resource Points—especially Power. Capturing a point can therefore affect income, building placement, defensive planning, reinforcement routes, and the locations where future battles occur.</p>

<table class="data-table">
  <thead><tr><th>Economic element</th><th>Confirmed role</th><th>Unknown before launch</th></tr></thead>
  <tbody>
    <tr><td><strong>Resource Points</strong></td><td>Captured, controlled, and upgraded to support map-wide economy</td><td>Income, capture time, upgrade levels, and exact point types</td></tr>
    <tr><td><strong>Power</strong></td><td>Supports stronger units, research, and upgrades</td><td>Generator rules, rates, prices, and faction modifiers</td></tr>
    <tr><td><strong>Dominion</strong></td><td>Necron resource generated as the Power Matrix grows</td><td>Rate, cap, spending categories, and conversion rules</td></tr>
    <tr><td><strong>Requisition</strong></td><td>Confirmed currency in Crusade’s strategic layer</td><td>Whether the same name and rules define standard multiplayer income</td></tr>
    <tr><td><strong>Influence</strong></td><td>Needed alongside Power to reach stronger battlefield options</td><td>Acquisition, thresholds, interface, and exact terminology at launch</td></tr>
  </tbody>
</table>

<h2 id="power-resource">What Power is used for</h2>
<p>The in-engine trailer breakdown says stronger units require more Power and influence before they can be fielded. Building construction, research, and structure upgrades unlock those units, so Power sits inside the larger technology path rather than operating as a separate score. A player who controls territory but spends poorly may still reach important options later than an efficient opponent.</p>
<p>Space Marines provide the clearest official example of Power dependence. Their elite units are expensive, and the official counter-strategy explicitly tells opponents to deny their Resource Points, especially Power. This supports a practical conclusion without inventing numbers: attacking Power access can delay or constrain an elite army even when direct combat trades are difficult.</p>

<h2 id="faction-economies">How faction economies change map control</h2>
<p>All four factions need territory and production, but each turns map control into strength differently. The systems below are confirmed descriptions, not claims that the economies have identical efficiency or fixed competitive rankings.</p>

<h3>Space Marines: expensive force, selective coverage</h3>
<p>Space Marines field powerful individual squads but cannot cover every location. Fortifications can secure points while Reserves and the Thunderhawk Relay move troops toward pressure. Their replacement costs and Power needs reward preserving upgraded units instead of treating squads as disposable. Read the <a href="/blog/dawn-of-war-4-space-marines-faction-guide">Space Marines guide</a> for the complete faction context.</p>

<h3>Orks: expansion through pressure</h3>
<p>Orks can build relatively cheap armed structures through almost any infantry unit. Spreading bases moves production closer to captured territory and lets aggression support further aggression. The trade-off is exposure: official guidance says Ork buildings are relatively easy to destroy, so opponents can reduce their map presence without defeating the entire army in one engagement.</p>

<h3>Necrons: Dominion and the Power Matrix</h3>
<p>The July Necron deep dive names Dominion as a resource generated by the Power Matrix. Many Necron buildings require the Matrix for placement and extend it after construction. A larger field produces more Dominion and strengthens friendly units fighting on it, so economic growth, buildable territory, healing, durability, and battlefield control reinforce one another.</p>
<p>This snowball has spatial counterplay. Opponents are advised to fight Necrons outside the Matrix and strike vulnerable positions elsewhere. Necrons can answer distance later through Tomb Pylons, Translocation Science, and the Monolith. Our <a href="/blog/dawn-of-war-4-necrons-faction-guide">Necrons guide</a> records those confirmed mobility tools.</p>

<h3>Adeptus Mechanicus: Noosphere connections</h3>
<p>Adeptus Mechanicus buildings form a Noosphere Network linked to headquarters. The network unlocks technology and grants economic and combat boons within its reach. Expanding toward key Resource Points strengthens access, while the opponent can target Cogitator Relays in important positions to weaken the network. Map control is therefore valuable only while the connections survive.</p>

<h2 id="combat-spending">How combat can drain the economy</h2>
<p>On-field reinforcement makes resource management visible during a fight. Players can commit resources to replace squad members and extend a unit’s useful time at the front. According to the multiplayer AMA, auto-reinforced units become noticeably harder to eliminate, but using the setting across many squads can drain resources rapidly. Winning one engagement can still weaken the wider war if spending prevents production, technology, or expansion.</p>
<p>Retreat creates the opposite option: give up local control to preserve the unit and reduce replacement pressure. Cover can also reduce damage before reinforcement is needed, although Necrons do not use cover and have their own variant of on-field reinforcement. The <a href="/blog/dawn-of-war-4-cover-retreat-reinforcement-guide">preservation mechanics guide</a> explains these systems in detail.</p>

<h2>Map control in each multiplayer objective</h2>
<p>Economy is not the only reason to hold territory. Domination awards Victory Points for controlling more Strategic Positions than the opponent. Maelstrom creates changing objectives across the map, and Annihilation requires destroying enemy headquarters while protecting your own. The value of a location therefore depends on both its resources and the selected win condition.</p>
<ul>
  <li><strong>Annihilation:</strong> resources support the force and technology needed to attack or defend headquarters.</li>
  <li><strong>Domination:</strong> control of Strategic Positions directly drives the victory score.</li>
  <li><strong>Maelstrom:</strong> mobility and flexible territory coverage help answer objectives that appear dynamically.</li>
</ul>
<p>See the <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a> for the confirmed objective rules and the <a href="/blog/dawn-of-war-4-base-building-guide">base building guide</a> for how structures support that territory.</p>

<h2>A pre-launch economic decision framework</h2>
<ol>
  <li><strong>Identify the current win condition.</strong> A valuable location must help the actual objective.</li>
  <li><strong>Protect essential Power access.</strong> Stronger units and technology depend on it.</li>
  <li><strong>Count reinforcement as spending.</strong> Auto-reinforce is not free durability.</li>
  <li><strong>Preserve upgraded units when practical.</strong> Retreat can protect previous economic investment.</li>
  <li><strong>Attack the opponent’s system, not only the point.</strong> Noosphere links and the Power Matrix create faction-specific vulnerabilities.</li>
  <li><strong>Avoid unsupported timings.</strong> Reassess priorities after official rates and prices are available.</li>
</ol>

<h2 id="resource-tba">What remains unconfirmed</h2>
<ul>
  <li>The complete standard multiplayer resource list and interface.</li>
  <li>Starting resources, income rates, storage caps, generators, and upkeep.</li>
  <li>Capture, neutralization, upgrade, and recapture times for Resource Points.</li>
  <li>Prices for units, buildings, research, Commanders, reinforcement, and repairs.</li>
  <li>Dominion generation rates and every Power Matrix bonus.</li>
  <li>Faction modifiers, team-game sharing, comeback mechanics, and map-specific point layouts.</li>
</ul>
<p>Dawn of War 4 resources matter because they connect the base, army, territory, and active battles. The official material already supports sound principles—control and upgrade points, protect access to Power, treat reinforcement as a real cost, and attack faction networks intelligently. Exact build orders and economic benchmarks must wait for launch data.</p>
`,
  },
  {
    slug: "dawn-of-war-4-voice-cast-characters",
    title: "Dawn of War 4 Voice Cast & Characters",
    seoTitle: "Dawn of War 4 Voice Cast & Characters",
    shortTitle: "Dawn of War 4 Voice Cast",
    excerpt: "See the confirmed Dawn of War 4 voice cast, including Brian Drummond as Gorgutz, Steve Blum as Cyrus, Alistair Petrie as the Lion, and every named role.",
    datePublished: "2026-08-12",
    dateModified: "2026-08-29",
    author: "Kronus Archive Narrative Desk",
    category: "Campaign & Co-op",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 voice cast", "Dawn of War IV actors", "Dawn of War 4 characters"],
    officialStatus: "Official cast announced August 5, 2026",
    sources: [
      { label: "Introducing the cast of Warhammer 40,000: Dawn of War IV", publisher: "Deep Silver", href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/introducing-the-cast-of-warhammer-40-000-dawn-of-war-iv" },
      { label: "Meet the new faces from the Story Trailer", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/meet-the-new-faces-from-our-epic-story-trailer" },
      { label: "Crafting an epic Dawn of War IV story", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/crafting-an-epic-dawn-of-war-iv-story-fit-for-the-warhammer-40-000-universe" },
    ],
    faqs: [
      { question: "Who voices Gorgutz in Dawn of War 4?", answer: "Brian Drummond returns as Ork Warboss Gorgutz. Deep Silver identifies him as the actor behind the character's established Dawn of War voice." },
      { question: "Who voices Cyrus in Dawn of War 4?", answer: "Steve Blum voices Cyrus, the Blood Ravens leader who returns to Kronus with Chief Librarian Jonah Orion." },
      { question: "Is the Lion in Dawn of War 4?", answer: "Yes. Deep Silver's official cast announcement lists Alistair Petrie as the Lion. The publisher has not explained the full extent of the character's role, so story details beyond the casting remain unconfirmed." },
      { question: "Does Dawn of War 4 have returning voice actors?", answer: "Yes. Brian Drummond returns as Gorgutz, while the announced ensemble also includes veteran Warhammer and game performers. The official article does not state that every returning character keeps a previous actor." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Quick answer:</strong> Deep Silver announced the Dawn of War IV voice cast on August 5, 2026. Confirmed performers include Brian Drummond as Gorgutz, Steve Blum as Cyrus, Aaron Neil as Jonah Orion, Alistair Petrie as the Lion, James Alexander as Thothmek, Joshua Manning as Guzcutta, and actors representing the Dark Angels, Adeptus Mechanicus, Orks, and Imperial forces.</div>

<nav aria-label="Article contents"><strong>In this guide:</strong> <a href="#cast-list">complete cast list</a> · <a href="#returning-characters">returning characters</a> · <a href="#new-characters">new characters</a> · <a href="#story-clues">what the casting confirms</a> · <a href="#cast-tba">what remains unknown</a></nav>

<p>This article is for players looking for the confirmed Dawn of War 4 actors and the characters they portray. The table below follows Deep Silver's official announcement rather than fan databases or voice comparisons. Character descriptions use the publisher's story material and avoid revealing roles that have not been explained.</p>

<h2 id="cast-list">Confirmed Dawn of War 4 voice cast</h2>
<table class="data-table">
  <thead><tr><th>Actor</th><th>Confirmed role</th><th>Faction or group</th></tr></thead>
  <tbody>
    <tr><td><strong>Brian Drummond</strong></td><td>Warboss Gorgutz</td><td>Orks</td></tr>
    <tr><td><strong>Alex Jordan</strong></td><td>Chaplain Ezrael</td><td>Space Marines</td></tr>
    <tr><td><strong>Toby Longworth</strong></td><td>Various Space Marines, including the Redemptor Dreadnought</td><td>Space Marines</td></tr>
    <tr><td><strong>James Alexander</strong></td><td>Chronomancer Thothmek</td><td>Necrons</td></tr>
    <tr><td><strong>Alistair Petrie</strong></td><td>The Lion</td><td>Dark Angels</td></tr>
    <tr><td><strong>Steve Blum</strong></td><td>Cyrus</td><td>Blood Ravens</td></tr>
    <tr><td><strong>Chris Tester</strong></td><td>Ork voices</td><td>Orks</td></tr>
    <tr><td><strong>Richard Reed</strong></td><td>Marshal Sek-Ix-23</td><td>Adeptus Mechanicus</td></tr>
    <tr><td><strong>Trev Fleming</strong></td><td>Engram</td><td>Not specified in the cast announcement</td></tr>
    <tr><td><strong>Joseph Capp</strong></td><td>Buzzsnap</td><td>Not specified in the cast announcement</td></tr>
    <tr><td><strong>Ben Whitehead</strong></td><td>Magos Dominus Nulpherus-1</td><td>Adeptus Mechanicus</td></tr>
    <tr><td><strong>Jess Nesling</strong></td><td>Potentia-Delta-9</td><td>Adeptus Mechanicus</td></tr>
    <tr><td><strong>Joshua Manning</strong></td><td>Beastboss Guzcutta</td><td>Orks</td></tr>
    <tr><td><strong>Bethan Bixton Bate</strong></td><td>Governor Augusta Vorn</td><td>Imperial government</td></tr>
    <tr><td><strong>Ashley Zhangazha</strong></td><td>Company Master Astoran</td><td>Dark Angels</td></tr>
    <tr><td><strong>Aaron Neil</strong></td><td>Chief Librarian Jonah Orion</td><td>Blood Ravens</td></tr>
  </tbody>
</table>
<p>The announcement names 16 performers or role groups. It should not be treated as a guarantee that the list covers every campaign character, multiplayer unit voice, narrator, or localization cast. Deep Silver presents it as an introduction to the ensemble, not final credits.</p>

<h2 id="returning-characters">Returning Dawn of War characters</h2>
<h3>Brian Drummond as Gorgutz</h3>
<p>Brian Drummond returns as Warboss Gorgutz, one of the series' most recognizable Ork leaders. Gorgutz appears in the opening story setup as the Ork force that ambushes the Blood Ravens above Kronus. His presence connects the new campaign to earlier Dawn of War conflicts without making the story a direct continuation of every previous plot.</p>
<p>For players interested in how the character's army works rather than the performance, our <a href="/blog/dawn-of-war-4-orks-faction-guide">Dawn of War 4 Orks guide</a> covers the confirmed Waaagh! system, armed buildings, inexpensive expansion, and Guzcutta's role.</p>

<h3>Steve Blum as Cyrus</h3>
<p>Steve Blum voices Cyrus, who returns as a leader of the Blood Ravens. The official story material says Cyrus and Chief Librarian Jonah Orion travel to Kronus to recruit new aspirants and rebuild their Chapter. The Ork ambush interrupts that mission and brings both forces to the planet's surface.</p>

<h3>Aaron Neil as Jonah Orion</h3>
<p>Aaron Neil plays Chief Librarian Jonah Orion. Jonah's presence alongside Cyrus establishes the Blood Ravens leadership at the centre of the returning Chapter's campaign. Deep Silver has not published a mission-by-mission account of his abilities or playable appearances.</p>

<h2 id="new-characters">New and newly identified characters</h2>
<h3>Alistair Petrie as the Lion</h3>
<p>The cast announcement officially lists Alistair Petrie as the Lion. This is a major character confirmation for Dark Angels followers, but the casting alone does not establish how many missions feature him, whether he is directly playable, or how his appearance affects the larger Warhammer 40,000 timeline. Those questions should remain open until the publisher reveals more or the campaign launches.</p>

<h3>Dark Angels leadership</h3>
<p>Alex Jordan voices Chaplain Ezrael, while Ashley Zhangazha voices Company Master Astoran. The Dark Angels make a critical intervention when Imperial forces on Kronus call for aid, and players command both Dark Angels and Blood Ravens during the Space Marines campaign. For the gameplay distinction, see the <a href="/blog/space-marines-dark-angels-sub-faction-differences">Blood Ravens vs Dark Angels guide</a>.</p>

<h3>Adeptus Mechanicus ensemble</h3>
<p>Richard Reed voices Marshal Sek-Ix-23, Jess Nesling voices Potentia-Delta-9, and Ben Whitehead voices Magos Dominus Nulpherus-1. Their faction has discovered a Necron complex beneath Kronus and initially struggles to identify whether it is a tomb or a prison. The cast establishes all three as story figures, but it does not prove that every named character is a selectable multiplayer Commander.</p>
<p>The distinction matters because KING Art Games describes competitive Commanders as generic faction units outside the campaign. Our <a href="/blog/dawn-of-war-4-commanders-guide">Commander guide</a> separates named story roles from confirmed multiplayer rules.</p>

<h3>Necrons and Orks</h3>
<p>James Alexander voices Chronomancer Thothmek, the first confirmed Necron Commander, while the official Necron preview identifies Ahmnok as a second playable Commander. Joshua Manning plays Beastboss Guzcutta, a new Ork rival who begins on foot and later unlocks a Squigosaur mount. Chris Tester supplies additional Ork voices.</p>

<h2 id="story-clues">What the cast list confirms about the story</h2>
<p>The cast announcement reinforces several source-backed conclusions. The campaign includes returning Blood Ravens leaders, Gorgutz, a Dark Angels intervention, a substantial Adeptus Mechanicus expedition, and a Necron conflict centred on a hidden power beneath Kronus. The Lion's casting also confirms his presence even though the scope of that appearance remains undisclosed.</p>
<p>Dawn of War IV takes place roughly 200 years after Dawn of War: Dark Crusade. The Great Rift has divided the galaxy and left Kronus—and some Blood Ravens—stranded. KING Art Games and Black Library author John French built four separate faction campaigns that connect to one overarching story. The announced 70-plus missions can be played solo or with one friend.</p>
<p>Those facts provide context, not a complete plot summary. A character appearing in the cast does not reveal survival, allegiance, mission count, boss status, or multiplayer availability. Treating credits as spoilers would go beyond what Deep Silver has announced.</p>

<h2>Are all of these actors in every language?</h2>
<p>The announced list describes the English-language cast. Steam currently lists full audio only for English, while 13 languages receive interface and subtitle support. Localization availability can change, so players should verify the language table on Steam before purchase rather than assuming every subtitle language has a separate dub.</p>

<h2 id="cast-tba">What remains unconfirmed</h2>
<ul>
  <li>The complete end-credit cast and every minor or multiplayer unit role.</li>
  <li>Whether every previously known character is voiced by a returning performer.</li>
  <li>The full narrative role, mission count, and playable status of the Lion.</li>
  <li>How Engram and Buzzsnap fit into the four faction campaigns.</li>
  <li>Whether additional full-audio languages will be announced.</li>
  <li>Performance details that would reveal campaign spoilers.</li>
</ul>
<p>The reliable answer is the official roster above: Dawn of War 4 combines returning franchise voices with a large new ensemble. This page will be updated if Deep Silver publishes additional actors or final credits before the December 3 release.</p>
`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
