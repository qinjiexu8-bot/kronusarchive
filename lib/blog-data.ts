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
  sources?: { label: string; publisher: string; href: string }[];
  faqs?: { question: string; answer: string }[];
  contentHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dawn-of-war-4-system-requirements-speculations",
    title: "Dawn of War 4 System Requirements: What Is Confirmed?",
    seoTitle: "Dawn of War 4 PC Requirements",
    shortTitle: "Dawn of War 4 System Requirements",
    excerpt: "See the confirmed Dawn of War 4 PC requirements, what remains unannounced, and how to prepare without relying on invented CPU, GPU, RAM, or storage specs.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tech Desk",
    category: "System Specs",
    readTime: "4 min read",
    keywords: ["Dawn of War 4 system requirements", "Dawn of War IV PC specs", "Dawn of War 4 hardware"],
    officialStatus: "Official specs: not yet announced",
    sources: [
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
      { label: "Dawn of War IV official FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
    ],
    faqs: [
      { question: "Are the Dawn of War 4 system requirements official?", answer: "Not yet. Steam currently confirms only that a 64-bit processor and operating system are required; detailed minimum and recommended specifications remain unannounced." },
      { question: "Will Dawn of War 4 require Windows?", answer: "Yes. Deep Silver lists the game for Windows PC through Steam, but the supported Windows version has not yet been specified." },
      { question: "Should I upgrade my PC before launch?", answer: "Wait for the official specifications unless your PC already needs a general upgrade. Any specific CPU, GPU, RAM, or storage target published before then is an estimate." },
    ],
    contentHtml: `
<div class="official-notice-box">
  <strong>Current official status:</strong> Steam confirms only a 64-bit processor and operating system. Every named CPU, GPU, memory, storage, OS-version, and performance target remains unannounced.
</div>

<h2>1. Official vs. Estimated Hardware Baseline</h2>
<p>
  <em>Warhammer 40,000: Dawn of War IV</em> is confirmed for Windows PC through Steam. The store page currently says <em>"Coming soon"</em> for the minimum OS and provides no detailed recommended specification. The estimates below are intentionally left blank until official figures are published.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Hardware Component</th>
      <th>Official Status</th>
      <th>Estimated Minimum (1080p / 30 FPS)</th>
      <th>Estimated Recommended (1080p / 60 FPS High)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Operating System</strong></td>
      <td>64-bit OS required; Windows version TBA</td>
      <td>Not announced</td>
      <td>Not announced</td>
    </tr>
    <tr>
      <td><strong>Processor (CPU)</strong></td>
      <td>64-bit Processor Required (Confirmed)</td>
      <td>Not announced</td>
      <td>Not announced</td>
    </tr>
    <tr>
      <td><strong>Memory (RAM)</strong></td>
      <td>TBA by Publisher</td>
      <td>Not announced</td>
      <td>Not announced</td>
    </tr>
    <tr>
      <td><strong>Graphics Card (GPU)</strong></td>
      <td>TBA by Publisher</td>
      <td>Not announced</td>
      <td>Not announced</td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>TBA by Publisher</td>
      <td>Not announced</td>
      <td>Not announced</td>
    </tr>
  </tbody>
</table>

<h2>2. What Official Material Shows — and What It Does Not Prove</h2>
<p>
  Official material shows large armies, base building, cover, and mechanically distinct factions such as the <a href="/factions/orks">Orks</a> and <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus</a>. It does not confirm a proprietary engine, a player-count ceiling, or how the game distributes work across CPU cores.
</p>
<ul>
  <li><strong>CPU:</strong> No model, core count, or clock-speed target is official.</li>
  <li><strong>GPU and VRAM:</strong> No graphics card, VRAM figure, preset, resolution, or frame-rate target is official.</li>
  <li><strong>Storage:</strong> No capacity or SSD requirement is official.</li>
</ul>

<h2>3. Should You Upgrade Before Launch?</h2>
<p>
  For most players, the safest choice is to wait for the official table. Upgrading against guessed requirements can mean spending money in the wrong area. Wishlist the game on Steam and compare your PC only after minimum and recommended targets are published.
</p>
<ol>
  <li><strong>Wait for official minimum and recommended specs.</strong></li>
  <li><strong>Check whether the official targets name a resolution and frame rate.</strong></li>
  <li><strong>Treat all pre-release hardware calculators as estimates, not requirements.</strong></li>
</ol>
`,
  },
  {
    slug: "dawn-of-war-4-release-date-editions-early-access",
    title: "Dawn of War 4 Release Date & Editions",
    seoTitle: "Dawn of War 4 Release Date & Editions",
    shortTitle: "Dawn of War 4 Release Date & Editions",
    excerpt: "Dawn of War 4 launches September 17, 2026. Compare Standard and Commander Editions, US Steam prices, three-day early unlock, and confirmed DLC.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Commercial Desk",
    category: "Pre-order & Editions",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 release date", "Dawn of War 4 Commander Edition", "Dawn of War 4 pre-order bonus"],
    officialStatus: "Publisher Confirmed: September 17, 2026 Launch",
    sources: [
      { label: "Release date, editions and DLC plans", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
    ],
    faqs: [
      { question: "When does Dawn of War 4 release?", answer: "Dawn of War IV releases for Windows PC on September 17, 2026. Commander Edition pre-purchases include a three-day early unlock beginning September 14." },
      { question: "How much is the Commander Edition?", answer: "The US Steam list price is $89.99, with a 10% pre-purchase price of $80.99 as checked on August 2, 2026. Regional prices can differ." },
      { question: "What is included in the Commander Edition?", answer: "It includes the base game, Blood Ravens Story Prologue, Aftermath campaign expansion with a new faction, digital soundtrack, and the announced Year One expansion content." },
    ],
    contentHtml: `
<h2>1. Launch Timeline & Early Unlock Access</h2>
<p>
  Publisher Deep Silver has confirmed that <em>Warhammer 40,000: Dawn of War IV</em> launches worldwide on <strong>September 17, 2026</strong> for Windows PC via Steam. However, players who acquire the digital <em>Commander Edition</em> receive a 72-hour early unlock starting <strong>September 14, 2026</strong>.
</p>

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
      <td><strong>14 SEP 2026</strong></td>
      <td>Commander Edition ($89.99 US list price)</td>
      <td>3-day early unlock; Steam lists access from September 14</td>
    </tr>
    <tr>
      <td><strong>17 SEP 2026</strong></td>
      <td>Standard Edition ($59.99 US list price)</td>
      <td>Global Steam Unlock for Standard Digital Pre-orders</td>
    </tr>
    <tr>
      <td><strong>FALL 2026</strong></td>
      <td>All Game Owners</td>
      <td>Crusade mode and new map packs begin in the announced free-DLC window</td>
    </tr>
  </tbody>
</table>

<h2>2. Standard vs. Commander Edition Feature Comparison</h2>
<p>
  The practical choice is between the base game and a larger Year One bundle. US prices below are Steam list prices checked on August 2, 2026; the 10% pre-purchase discount and regional pricing can change what you pay.
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
      <td>3-Day Early Access Unlock (Sep 14)</td>
      <td>❌ Standard Unlock (Sep 17)</td>
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

<h2>3. Buyer Recommendation & Verdict</h2>
<div class="recommendation-box">
  <h3>Which Edition Should You Buy?</h3>
  <ul>
    <li><strong>Buy Standard Edition ($59.99) if:</strong> You plan to play solo campaign missions at your own pace and do not mind waiting until September 17.</li>
    <li><strong>Buy Commander Edition ($89.99 US list price) if:</strong> You value the three-day early unlock, both announced premium DLCs, and the digital soundtrack enough to pay the higher price.</li>
  </ul>
</div>
`,
  },
  {
    slug: "dawn-of-war-4-factions-compared",
    title: "Dawn of War 4 Factions: Which Army Should You Pick?",
    seoTitle: "Dawn of War 4 Factions Compared",
    shortTitle: "Dawn of War 4 Factions & Army Comparison Guide",
    excerpt: "Compare all four confirmed Dawn of War 4 factions—Space Marines, Orks, Necrons, and Adeptus Mechanicus—and find the army that fits your RTS style.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "9 min read",
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
<h2>1. Four Launch Armies: Side-by-Side Comparison</h2>
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
      <td><a href="/factions/space-marines"><strong>Space Marines</strong></a></td>
      <td>⭐ Low (Beginner Friendly)</td>
      <td>⭐⭐ Mid (Drop-Pod Support)</td>
      <td>Elite durable squads, flexible commanders</td>
      <td>Players who prefer disciplined, low-attrition tactical play</td>
    </tr>
    <tr>
      <td><a href="/factions/orks"><strong>Orks</strong></a></td>
      <td>⭐⭐ Mid (Horde Management)</td>
      <td>⭐⭐⭐ High (Waaagh! Charges)</td>
      <td>Mass numbers, ramshackle tech, aggressive rushes</td>
      <td>Players who enjoy swarm tactics, constant pressure &amp; aggression</td>
    </tr>
    <tr>
      <td><a href="/factions/necrons"><strong>Necrons</strong></a></td>
      <td>⭐⭐⭐ High (Macro Tech Tree)</td>
      <td>⭐ Low (Methodical Push)</td>
      <td>Reanimation protocols, immortal war engines</td>
      <td>Players who favor defensive scaling &amp; crushing late-game war engines</td>
    </tr>
    <tr>
      <td><a href="/factions/adeptus-mechanicus"><strong>Adeptus Mechanicus</strong></a></td>
      <td>⭐⭐⭐ High (Network Micro)</td>
      <td>⭐⭐ Mid (Linked Nodes)</td>
      <td>Noosphere building links, turret overcharges</td>
      <td>Players who love base building synergy &amp; defensive choke-points</td>
    </tr>
  </tbody>
</table>

<h2>2. Summary & Army Recommendation Verdict</h2>
<div class="recommendation-box">
  <h3>Which Army Should You Pick First?</h3>
  <ul>
    <li><strong>Pick Space Marines if:</strong> You are new to RTS games or want strong, durable units that are easy to manage.</li>
    <li><strong>Pick Orks if:</strong> You love non-stop aggression and swarming enemy resource points from minute one.</li>
    <li><strong>Pick Necrons if:</strong> You enjoy slow, unstoppable late-game technological pushes.</li>
    <li><strong>Pick Adeptus Mechanicus if:</strong> You enjoy intricate base building and networked defense systems.</li>
  </ul>
</div>
`,
  },
  {
    slug: "space-marines-dark-angels-sub-faction-differences",
    title: "Blood Ravens vs Dark Angels: Space Marines Sub-Faction Guide",
    shortTitle: "Blood Ravens vs Dark Angels Sub-Faction Guide",
    excerpt: "Detailed tactical breakdown comparing the Blood Ravens campaign roster against the Dark Angels playable sub-faction in Dawn of War IV.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "8 min read",
    keywords: ["Dawn of War 4 Dark Angels", "Blood Ravens vs Dark Angels Dawn of War IV", "Space Marines sub-factions"],
    officialStatus: "Developer Confirmed Sub-Faction Feature",
    contentHtml: `
<h2>1. Sub-Faction Overview & Tactical Roles</h2>
<p>
  In <em>Dawn of War IV</em>, the <a href="/factions/space-marines">Adeptus Astartes (Space Marines)</a> serve as an elite, resilient army designed around squad preservation and tactical abilities. While the main campaign follows the Blood Ravens, players can select the legendary <strong>Dark Angels</strong> sub-faction in skirmish and multiplayer engagements.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Tactical Metric</th>
      <th>Blood Ravens (Standard Roster)</th>
      <th>Dark Angels (Sub-Faction Variant)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Play-style Focus</strong></td>
      <td>Methodical versatility, drop-pod reinforcements</td>
      <td>Fast recon flanking &amp; heavy armor siege shock</td>
    </tr>
    <tr>
      <td><strong>Unique Specialty</strong></td>
      <td>Relic wargear buffs &amp; tactical flexibility</td>
      <td>Ravenwing speed &amp; Deathwing Terminator armor</td>
    </tr>
    <tr>
      <td><strong>Learning Curve</strong></td>
      <td>Low / Moderate (Ideal for beginners)</td>
      <td>Moderate / High (Requires micro-management)</td>
    </tr>
    <tr>
      <td><strong>Micro-Management</strong></td>
      <td>Squad ability timing &amp; position holding</td>
      <td>Hit-and-run maneuvers &amp; teleport placement</td>
    </tr>
  </tbody>
</table>

<h2>2. Dark Angels Pros & Cons Matrix</h2>
<table class="data-table">
  <thead>
    <tr>
      <th>Sub-Faction</th>
      <th>Core Pros / Strengths</th>
      <th>Core Cons / Weaknesses</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Blood Ravens</strong></td>
      <td>High durability, forgiving for beginners, versatile squad loadouts</td>
      <td>Slower movement speed, reliant on drop-pod cooldown timers</td>
    </tr>
    <tr>
      <td><strong>Dark Angels</strong></td>
      <td>Devastating flank attacks, elite Terminator power spikes</td>
      <td>Higher requisition cost per unit, vulnerable to anti-armor counter-picks</td>
    </tr>
  </tbody>
</table>
`,
  },
  {
    slug: "dawn-of-war-4-space-marines-build-orders-drop-pod-tactics",
    title: "Space Marines Build Orders & Drop Pod Tactics",
    shortTitle: "Space Marines Build Orders & Drop Pod Tactics",
    excerpt: "Opening build order step-by-step table, Scout Squad map control, and frontline Drop Pod reinforcement maneuvers for Space Marines in Dawn of War IV.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "8 min read",
    keywords: ["Space Marines build order Dawn of War 4", "Blood Ravens opening guide", "Drop pod tactics Dawn of War IV"],
    officialStatus: "Tactical Guide & Opening Build Order",
    contentHtml: `
<h2>1. Standard Opening Build Order Flow (First 5 Minutes)</h2>
<p>
  Executing a clean opening build order as <a href="/factions/space-marines">Space Marines</a> ensures immediate requisition control while unlocking Tier 1 Tactical Squad upgrades before <a href="/factions/orks">Orks</a> or <a href="/factions/necrons">Necrons</a> can expand their perimeters.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Game Time</th>
      <th>Production &amp; Queue Action</th>
      <th>Strategic Resource Focus</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>00:00 - 00:30</strong></td>
      <td>Queue Scout Squad #1 at Fortress HQ; Send Servitor to nearest Requisition Point</td>
      <td>Capture Primary Requisition Node</td>
    </tr>
    <tr>
      <td><strong>00:30 - 01:15</strong></td>
      <td>Build Generator Shrine; Queue Scout Squad #2 for vision perimeter</td>
      <td>Establish Energy Resource Flow</td>
    </tr>
    <tr>
      <td><strong>01:15 - 02:30</strong></td>
      <td>Construct Armory Structure; Queue Tactical Squad #1</td>
      <td>Prepare Tier 1 Infantry Core</td>
    </tr>
    <tr>
      <td><strong>02:30 - 04:00</strong></td>
      <td>Upgrade Tactical Squad Heavy Bolter wargear; Deploy Commander Unit</td>
      <td>Secure Mid-Map Strategic Points</td>
    </tr>
    <tr>
      <td><strong>04:00 - 05:00</strong></td>
      <td>Research Orbital Relay Upgrade; Prepare Drop Pod Cooldowns</td>
      <td>Transition to Tier 2 Vehicle Tech</td>
    </tr>
  </tbody>
</table>

<h2>2. Drop Pod Deployment Maneuvers</h2>
<p>
  Drop Pods are not just spawn points—they are dynamic tactical weapons. When deployed directly onto enemy squad positions, the impact dealing area-of-effect knockback disrupts enemy channels while instantly spawning reinforced Tactical Space Marines into heavy cover.
</p>

<div class="recommendation-box">
  <h3>Drop Pod Tactical Checklist</h3>
  <ul>
    <li><strong>Disrupt Enemy Channels:</strong> Launch Drop Pods directly on enemy heavy weapon teams (e.g. Ork Lootaz or Looted Wagons) to interrupt their firing arc.</li>
    <li><strong>Instant Field Replenishment:</strong> Position Drop Pods slightly behind your frontline Dreadnoughts to replenish squad models without retreating to HQ.</li>
  </ul>
</div>
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
    slug: "dawn-of-war-4-last-stand-hero-commanders-guide",
    title: "Last Stand Mode Hero Commanders & Survival Guide",
    shortTitle: "Last Stand Mode Hero Commanders & Survival Guide",
    excerpt: "Wave 1-20 survival tactics, 3-player team hero compositions, and relic wargear level progression for Last Stand mode in Dawn of War IV.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 Last Stand", "Last Stand hero commanders", "Dawn of War 4 Last Stand wave guide"],
    officialStatus: "Developer Confirmed Co-op Arena Mode",
    contentHtml: `
<h2>1. Last Stand Hero Commander Roles & Team Compositions</h2>
<p>
  Returning in <em>Dawn of War IV</em>, <strong>Last Stand</strong> is a 3-player cooperative arena mode where players command a single Hero unit against 20 escalating waves of enemy assault. Balancing crowd control, single-target damage, and revive utility is critical for surviving Wave 15+.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Hero Commander Unit</th>
      <th>Primary Arena Role</th>
      <th>Key Wargear Ability</th>
      <th>Recommended Team Partner</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Space Marine Captain</strong></td>
      <td>Tank / Frontline Taunt</td>
      <td>Iron Halo Shields &amp; Jump Pack Stun</td>
      <td>Pair with AdMech Tech-Priest or Ork Mek</td>
    </tr>
    <tr>
      <td><strong>Ork Warboss</strong></td>
      <td>Melee Crowd Control</td>
      <td>Power Klaw Cleave &amp; Waaagh! Morale Shout</td>
      <td>Pair with Space Marine Captain &amp; Necron Lord</td>
    </tr>
    <tr>
      <td><strong>Necron Overlord</strong></td>
      <td>Resurrection &amp; AoE Blast</td>
      <td>Resurrection Orb &amp; Tachyon Arrow</td>
      <td>Essential for Wave 15+ Emergency Revives</td>
    </tr>
    <tr>
      <td><strong>Tech-Priest Dominus</strong></td>
      <td>Turret Support &amp; Ranged DPS</td>
      <td>Omnissiah Turret Deployment &amp; Plasma Arc</td>
      <td>Pairs with frontline tanks for choke defense</td>
    </tr>
  </tbody>
</table>

<h2>2. Key Survival Milestones (Waves 1 - 20)</h2>
<div class="recommendation-box">
  <h3>Wave Survival Roadmap</h3>
  <ul>
    <li><strong>Waves 1 - 5 (Early Waves):</strong> Conserve ability energy. Focus on basic melee attacks and capture point score multipliers.</li>
    <li><strong>Waves 6 - 12 (Mid-Game Swarms):</strong> Large <a href="/factions/orks">Ork mobs</a> and armored transport waves spawn. Use crowd-control stuns to prevent hero isolation.</li>
    <li><strong>Waves 13 - 20 (Endgame Bosses):</strong> Boss units including Monoliths and Greater Daemons spawn. Save Necron Resurrection Orbs for simultaneous down events.</li>
  </ul>
</div>
`,
  },
  {
    slug: "dawn-of-war-4-multiplayer-modes-guide",
    title: "Dawn of War 4 Multiplayer Modes Explained",
    seoTitle: "Dawn of War 4 Multiplayer Modes",
    shortTitle: "Dawn of War 4 Multiplayer Modes Explained",
    excerpt: "See every confirmed Dawn of War 4 multiplayer mode, including Annihilation, Domination, Maelstrom, campaign co-op, Skirmish, and Last Stand.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 multiplayer modes", "Dawn of War 4 Last Stand mode", "Dawn of War 4 co-op campaign"],
    officialStatus: "Developer Confirmed Game Modes",
    sources: [
      { label: "Multiplayer developer AMA", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer" },
      { label: "Dawn of War IV official overview and FAQ", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv" },
    ],
    faqs: [
      { question: "What multiplayer modes are confirmed for Dawn of War 4?", answer: "Quick Match supports Annihilation, Domination, and Maelstrom. The official site also confirms competitive multiplayer, Skirmish, Last Stand, and campaign co-op." },
      { question: "Does Dawn of War 4 have co-op?", answer: "Yes. The 70-plus-mission campaign supports solo or two-player co-op, and official material says several other modes support cooperative play." },
      { question: "Does Dawn of War 4 have 4v4 multiplayer?", answer: "The developer has discussed team games but has not published a final player-cap table confirming 4v4. This guide will update when that information is official." },
    ],
    contentHtml: `
<h2>1. Overview of Game Modes & Player Capacities</h2>
<p>
  <em>Warhammer 40,000: Dawn of War IV</em> includes modes for solo narrative players, cooperative commanders, and competitive multiplayer players. Where the developer has not published player limits or detailed rules, this guide marks them as unannounced.
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
      <td>Quick Match; final team-size limits not published</td>
      <td>Destroy all enemy headquarters &amp; production bases</td>
      <td>Hardcore RTS purists</td>
    </tr>
    <tr>
      <td><strong>Domination Mode</strong></td>
      <td>Quick Match; final team-size limits not published</td>
      <td>Capture &amp; hold Strategic Victory Points for score</td>
      <td>Objective-focused multiplayer players</td>
    </tr>
    <tr><td><strong>Maelstrom</strong></td><td>Quick Match; final team-size limits not published</td><td>Secure dynamically appearing objectives for Victory Points</td><td>Players who prefer shifting objectives</td></tr>
    <tr><td><strong>Last Stand</strong></td><td>Co-op support confirmed; capacity TBA</td><td>Returning mode; detailed rules still to be showcased</td><td>Co-op and hero-mode fans</td></tr>
    <tr>
      <td><strong>Skirmish Mode</strong></td>
      <td>Player capacity TBA</td>
      <td>Offline/custom rules not yet fully detailed</td>
      <td>Practice and custom-match players</td>
    </tr>
  </tbody>
</table>

<h2>2. Campaign Co-op: What Is Confirmed</h2>
<p>
  The 70-plus-mission campaign can be played solo or with one friend. The publisher has not confirmed that partners can freely mix factions inside a campaign, nor has it documented shared Commander cooldowns, so those details remain open until a co-op showcase or launch documentation appears.
</p>
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
    excerpt: "See the confirmed Dawn of War 4 Year One roadmap: free Crusade mode, maps, mission editor, Commander scenarios, and two premium campaign DLC releases.",
    datePublished: "2026-08-02",
    dateModified: "2026-08-02",
    author: "Kronus Archive Commercial Desk",
    category: "Pre-order & Editions",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 DLC roadmap", "Dawn of War 4 Year One expansion", "Dawn of War 4 Crusade mode"],
    officialStatus: "Year One plan confirmed by publisher",
    sources: [
      { label: "Release date, editions and DLC plans", publisher: "Deep Silver", href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed" },
      { label: "Dawn of War IV Steam listing", publisher: "Steam", href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/" },
    ],
    faqs: [
      { question: "What free DLC is planned for Dawn of War 4?", answer: "Deep Silver plans free Crusade mode, new map packs, a mission editor, and additional Commander scenarios for Last Stand and Crusade between fall 2026 and spring 2027." },
      { question: "What paid DLC is in the Year One expansion?", answer: "The two announced premium releases are the Blood Ravens Story Prologue and Aftermath, a campaign expansion that introduces an additional faction." },
      { question: "Does the Commander Edition include the Year One DLC?", answer: "Yes. The publisher says Commander Edition owners receive the announced free and paid DLC, alongside the base game and digital soundtrack." },
    ],
    contentHtml: `
<div class="official-notice-box"><strong>Roadmap summary:</strong> From fall 2026 through spring 2027, Dawn of War IV is scheduled to receive free modes, maps, editing tools, and scenarios plus two premium story releases. Exact dates and finer details remain unannounced.</div>

<h2>Confirmed Dawn of War 4 DLC roadmap</h2>
<p>Deep Silver describes the post-launch plan as the Year One Expansion. The roadmap separates free updates available to game owners from two premium story packages that are included with the Commander Edition or sold separately. This page records only announced content and does not assign dates the publisher has not given.</p>
<table class="data-table">
  <thead><tr><th>Content</th><th>Type</th><th>Confirmed window or status</th><th>What the publisher says</th></tr></thead>
  <tbody>
    <tr><td><strong>Crusade mode</strong></td><td>Free</td><td>Fall 2026–Spring 2027 window</td><td>Post-launch game mode</td></tr>
    <tr><td><strong>Map packs</strong></td><td>Free</td><td>Fall 2026–Spring 2027 window</td><td>New maps</td></tr>
    <tr><td><strong>Mission editor</strong></td><td>Free</td><td>Fall 2026–Spring 2027 window</td><td>Player-facing mission creation tool</td></tr>
    <tr><td><strong>Commander scenarios</strong></td><td>Free</td><td>Fall 2026–Spring 2027 window</td><td>New scenarios for Last Stand and Crusade</td></tr>
    <tr><td><strong>Blood Ravens Story Prologue</strong></td><td>Premium</td><td>Date TBA</td><td>Story leading into the main campaign</td></tr>
    <tr><td><strong>Aftermath</strong></td><td>Premium</td><td>Date TBA</td><td>Campaign expansion plus an additional faction</td></tr>
  </tbody>
</table>

<h2>What is free for all game owners?</h2>
<p>The publisher groups Crusade, maps, the mission editor, and Commander scenarios under free DLC. “Free” does not mean every feature arrives on launch day: the announced release window runs from fall 2026 through spring 2027. The order and individual dates are not yet public.</p>
<p>Crusade is separate from the launch campaign and from the three Quick Match win conditions described in our <a href="/blog/dawn-of-war-4-multiplayer-modes-guide">multiplayer modes guide</a>. Until a dedicated feature reveal appears, rules such as progression, map structure, and co-op capacity remain TBA.</p>

<h2>What are the two premium expansions?</h2>
<h3>Blood Ravens Story Prologue</h3>
<p>The prologue follows a Blood Ravens strike force travelling to Aurelia and expands on events before the main campaign. It is included with Commander Edition and will also be sold separately.</p>
<h3>Aftermath</h3>
<p>Aftermath continues the campaign and adds a new playable faction. The faction identity, roster, campaign length, and release date have not been announced. Any named-faction prediction should therefore be treated as speculation.</p>

<h2>Standard or Commander Edition for DLC?</h2>
<p>Standard Edition includes the base game, while Commander Edition packages the base game, both premium releases, the digital soundtrack, and the three-day early unlock offered to pre-purchasers. Use our <a href="/blog/dawn-of-war-4-release-date-editions-early-access">edition comparison</a> for current US Steam pricing and the exact inclusions.</p>

<h2>What the roadmap does not promise</h2>
<p>A roadmap describes current plans, not a guarantee that every feature will ship on the first possible date. Deep Silver has provided a broad fall 2026 to spring 2027 window for the free content and has said that finer details are not ready to share. It has not assigned a public release date to either premium DLC.</p>
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
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
