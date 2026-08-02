export type BlogPost = {
  slug: string;
  title: string;
  shortTitle: string;
  excerpt: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: "System Specs" | "Faction Mechanics" | "Campaign & Co-op" | "Pre-order & Editions";
  readTime: string;
  keywords: string[];
  officialStatus?: string;
  contentHtml: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dawn-of-war-4-system-requirements-speculations",
    title: "Dawn of War 4 System Requirements: Official & Estimated",
    shortTitle: "Dawn of War 4 System Requirements",
    excerpt: "Comprehensive breakdown of official announcements and hardware estimates for Warhammer 40,000: Dawn of War IV on PC, featuring CPU, GPU, and RAM benchmarks.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tech Desk",
    category: "System Specs",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 system requirements", "Dawn of War IV PC specs", "Dawn of War 4 hardware"],
    officialStatus: "Official Status: Not Announced by Publisher",
    contentHtml: `
<div class="official-notice-box">
  <strong>⚠️ Official Publisher Status:</strong> Final system requirements have not yet been published on Steam by Deep Silver or KING Art Games. The benchmarks below combine confirmed 64-bit platform requirements with technical estimates based on campaign squad rendering size.
</div>

<h2>1. Official vs. Estimated Hardware Baseline</h2>
<p>
  <em>Warhammer 40,000: Dawn of War IV</em> is developed exclusively for modern 64-bit Windows PC architectures. While the store listing currently reads <em>"Coming Soon"</em> for precise clock speeds, official campaign footage demonstrates battlefield engine demands including real-time destructible cover, simultaneous squad calculations, and lighting effects during night sieges on Kronus.
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
      <td>64-bit Windows 10 / 11 (Confirmed)</td>
      <td>Windows 10 64-bit (v22H2)</td>
      <td>Windows 11 64-bit</td>
    </tr>
    <tr>
      <td><strong>Processor (CPU)</strong></td>
      <td>64-bit Processor Required (Confirmed)</td>
      <td>Intel Core i5-8400 / AMD Ryzen 5 2600</td>
      <td>Intel Core i7-12700K / AMD Ryzen 7 5800X3D</td>
    </tr>
    <tr>
      <td><strong>Memory (RAM)</strong></td>
      <td>TBA by Publisher</td>
      <td>16 GB RAM</td>
      <td>32 GB High-Speed DDR4 / DDR5</td>
    </tr>
    <tr>
      <td><strong>Graphics Card (GPU)</strong></td>
      <td>TBA by Publisher</td>
      <td>NVIDIA GTX 1060 (6GB) / AMD Radeon RX 580</td>
      <td>NVIDIA RTX 3070 (8GB) / AMD Radeon RX 6800 XT</td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>TBA by Publisher</td>
      <td>70 GB Available Space (SSD Recommended)</td>
      <td>70 GB NVMe M.2 SSD Required</td>
    </tr>
  </tbody>
</table>

<h2>2. Engine Architecture & Performance Drivers</h2>
<p>
  The proprietary RTS engine powering Dawn of War IV prioritizes high-density squad combat. Unlike small-scale skirmish engines, massive engagements featuring <a href="/factions/orks">Orks Waaagh! hordes</a> or extensive <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus Noosphere grids</a> place significant load on multi-threaded CPU pipeline passes.
</p>
<ul>
  <li><strong>CPU Bound Processing:</strong> Squad AI pathfinding and cover calculations execute across multiple core threads. Processors with high L3 cache architecture (such as AMD 3D V-Cache) will offer notable stability during 8-player battles.</li>
  <li><strong>VRAM Allocations:</strong> High-resolution texture packs for detailed <a href="/factions/space-marines">Space Marines armor Chapter relics</a> and <a href="/factions/necrons">Necrons Monolith energy shaders</a> require at least 8 GB of VRAM for Ultra settings.</li>
  <li><strong>Solid State Drive Necessity:</strong> High-speed solid-state drives reduce map load times and eliminate micro-stutter when stream-loading reinforcement drop pods into combat zones.</li>
</ul>

<h2>3. Recommended Hardware Upgrade Priorities</h2>
<p>
  If you are preparing your rig ahead of the September 17 launch, focus your upgrade budget in the following order:
</p>
<ol>
  <li><strong>Upgrade System RAM to 32 GB:</strong> Large-scale RTS campaigns heavily utilize system memory for background squad states and map asset buffering.</li>
  <li><strong>Install on an NVMe SSD:</strong> Moving from a traditional mechanical HDD to a modern M.2 drive provides the single largest improvement in load performance.</li>
  <li><strong>Target CPU Core Count:</strong> Ensure your processor possesses at least 6 performance cores and 12 threads to prevent framerate dips during endgame clashes.</li>
</ol>
`,
  },
  {
    slug: "dawn-of-war-4-pre-order-editions-comparison",
    title: "Dawn of War 4 Release Date & Editions",
    shortTitle: "Dawn of War 4 Release Date & Editions",
    excerpt: "Detailed breakdown of Dawn of War IV launch dates, Commander Edition 3-day early unlock on September 14, pre-order bonuses, and edition price comparisons.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Commercial Desk",
    category: "Pre-order & Editions",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 release date", "Dawn of War 4 Commander Edition", "Dawn of War 4 pre-order bonus"],
    officialStatus: "Publisher Confirmed: September 17, 2026 Launch",
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
      <td>Commander Edition ($79.99 / €79.99)</td>
      <td>3-Day Early Access to Full Campaign, Skirmish &amp; Multiplayer Progression</td>
    </tr>
    <tr>
      <td><strong>17 SEP 2026</strong></td>
      <td>Standard Edition ($59.99 / €59.99)</td>
      <td>Global Steam Unlock for Standard Digital Pre-orders</td>
    </tr>
    <tr>
      <td><strong>FALL 2026</strong></td>
      <td>All Game Owners</td>
      <td>Free Operation 1: Crusade Game Mode &amp; Map Expansion Pack</td>
    </tr>
  </tbody>
</table>

<h2>2. Standard vs. Commander Edition Feature Comparison</h2>
<p>
  Choosing the correct digital edition depends on whether you intend to participate in early competitive ladder matches or prioritize campaign progression for <a href="/factions/space-marines">Space Marines</a> and <a href="/factions/orks">Orks</a>.
</p>

<table class="data-table">
  <thead>
    <tr>
      <th>Included Feature / Content</th>
      <th>Standard Edition ($59.99)</th>
      <th>Commander Edition ($79.99)</th>
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
      <td>Pre-Order Cosmetic Armor Packs</td>
      <td>✅ Pre-order Bonus Only</td>
      <td>✅ Included Automatically</td>
    </tr>
    <tr>
      <td>Post-Launch Operations &amp; Crusade Pass</td>
      <td>❌ Separate DLC Purchase</td>
      <td><strong>✅ Included (Season Pass Access)</strong></td>
    </tr>
  </tbody>
</table>

<h2>3. Buyer Recommendation & Verdict</h2>
<div class="recommendation-box">
  <h3>Which Edition Should You Buy?</h3>
  <ul>
    <li><strong>Buy Standard Edition ($59.99) if:</strong> You plan to play solo campaign missions at your own pace and do not mind waiting until September 17.</li>
    <li><strong>Buy Commander Edition ($79.99) if:</strong> You want to jump onto the competitive multiplayer ladder 3 days early (Sep 14) and desire all post-launch Crusade operations bundled at a discount.</li>
  </ul>
</div>
`,
  },
  {
    slug: "necrons-reanimation-monolith-late-game-guide",
    title: "Dawn of War 4 Factions: Which Army Should You Pick?",
    shortTitle: "Dawn of War 4 Factions & Army Comparison Guide",
    excerpt: "Complete beginner and strategic guide comparing all 4 launch factions: Space Marines, Orks, Necrons, and Adeptus Mechanicus in Dawn of War IV.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Faction Mechanics",
    readTime: "9 min read",
    keywords: ["Dawn of War 4 factions comparison", "Dawn of War 4 best faction", "Dawn of War 4 army pick guide"],
    officialStatus: "Developer Confirmed Faction Roster",
    contentHtml: `
<h2>1. Four Launch Armies: Side-by-Side Comparison</h2>
<p>
  Selecting your main faction in <em>Dawn of War IV</em> determines your economic expansion, commander tech tree, and combat pacing. Below is the comprehensive comparison matrix across all four launch armies.
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
    slug: "campaign-co-op-modes-breakdown",
    title: "Dawn of War 4 Multiplayer Modes Explained",
    shortTitle: "Dawn of War 4 Multiplayer Modes Explained",
    excerpt: "Detailed breakdown of Dawn of War IV game modes: Annihilation, Domination, 2-Player Campaign Co-op, Skirmish, and the returning Last Stand.",
    datePublished: "2026-08-01",
    dateModified: "2026-08-02",
    author: "Kronus Archive Tactical Desk",
    category: "Campaign & Co-op",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 multiplayer modes", "Dawn of War 4 Last Stand mode", "Dawn of War 4 co-op campaign"],
    officialStatus: "Developer Confirmed Game Modes",
    contentHtml: `
<h2>1. Overview of Game Modes & Player Capacities</h2>
<p>
  <em>Warhammer 40,000: Dawn of War IV</em> features a comprehensive suite of game modes catering to solo narrative players, cooperative team commanders, and competitive ladder players.
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
      <td>1 - 2 Players (Co-op)</td>
      <td>70+ Mission planetary conquest of Kronus</td>
      <td>Narrative &amp; Co-op players</td>
    </tr>
    <tr>
      <td><strong>Annihilation Mode</strong></td>
      <td>1v1, 2v2, 3v3, 4v4</td>
      <td>Destroy all enemy headquarters &amp; production bases</td>
      <td>Hardcore RTS purists</td>
    </tr>
    <tr>
      <td><strong>Domination Mode</strong></td>
      <td>1v1, 2v2, 3v3</td>
      <td>Capture &amp; hold Strategic Victory Points for score</td>
      <td>Competitive Ranked Ladder</td>
    </tr>
    <tr>
      <td><strong>Last Stand Mode</strong></td>
      <td>3 Players (Co-op Arena)</td>
      <td>Survive escalating enemy horde waves with hero units</td>
      <td>Co-op arena &amp; hero progression fans</td>
    </tr>
    <tr>
      <td><strong>Skirmish Mode</strong></td>
      <td>1 Player vs AI (Custom)</td>
      <td>Customizable match parameters &amp; AI difficulty tests</td>
      <td>Build order practice &amp; casual play</td>
    </tr>
  </tbody>
</table>

<h2>2. 2-Player Cooperative Campaign Integration</h2>
<p>
  The full 70+ mission campaign can be played in two-player co-op. Co-op partners can pick complementary factions (e.g. <a href="/factions/space-marines">Space Marines</a> providing frontline defense while <a href="/factions/adeptus-mechanicus">Adeptus Mechanicus</a> builds networked artillery), sharing tactical commander cooldowns across the front.
</p>
`,
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
