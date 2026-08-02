export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category:
    | "System Specs"
    | "Faction Mechanics"
    | "Campaign & Co-op"
    | "Release & Editions"
    | "Faction Guide"
    | "Multiplayer";
  readTime: string;
  keywords: string[];
  content: {
    heading: string;
    text: string;
  }[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "dawn-of-war-4-system-requirements-speculations",
    title: "Dawn of War IV System Requirements & PC Specs Guide",
    excerpt: "What PC hardware will you need to run Dawn of War IV? Detailed breakdown of minimum & recommended spec predictions, engine tech, and performance expectations.",
    date: "2026-08-01",
    author: "Kronus Archive Tech Desk",
    category: "System Specs",
    readTime: "4 min read",
    keywords: ["Dawn of War 4 system requirements", "Dawn of War IV PC specs", "Dawn of War 4 performance"],
    content: [
      {
        heading: "What Is Officially Confirmed",
        text: "The Steam listing currently confirms only that Dawn of War IV requires a 64-bit processor and operating system. Its detailed minimum and recommended CPU, GPU, memory, storage and OS requirements remain marked as coming soon. Treat every specific hardware target below as an editorial estimate, not a publisher requirement.",
      },
      {
        heading: "Estimated Minimum Specs (1080p / 30 FPS)",
        text: "Our provisional baseline is an Intel Core i5-8400 or AMD Ryzen 5 2600, 16 GB RAM, and a GeForce GTX 1060 6 GB or Radeon RX 580-class GPU. This is a planning estimate based on the scale shown in official footage; it must not be used as a purchase guarantee until KING Art and Deep Silver publish final specifications.",
      },
      {
        heading: "Estimated Recommended Specs (1080p / 60 FPS High)",
        text: "For a cautious 1080p/60 planning target, we would budget for a recent eight-core CPU, 32 GB RAM, an RTX 3070 or RX 6800-class GPU, and SSD storage. This deliberately conservative estimate will be replaced as soon as the official Steam requirements are updated.",
      },
    ],
    sources: [
      {
        label: "Steam — Dawn of War IV system requirements",
        href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/",
      },
    ],
  },
  {
    slug: "adeptus-mechanicus-noosphere-network-guide",
    title: "Adeptus Mechanicus Noosphere Network Mechanics Breakdown",
    excerpt: "Discover how the Tech-Priests of Mars utilize the linked Noosphere Network in Dawn of War IV to reduce unit costs and supercharge battlefield defenses.",
    date: "2026-08-01",
    author: "Kronus Archive Strategic Desk",
    category: "Faction Mechanics",
    readTime: "5 min read",
    keywords: ["Adeptus Mechanicus Dawn of War 4", "Noosphere network mechanic", "AdMech Dawn of War IV"],
    content: [
      {
        heading: "The Debut of Mars on Kronus",
        text: "For the first time in Dawn of War history, the Adeptus Mechanicus arrives as a fully realized launch faction. Rather than relying solely on traditional resource nodes, AdMech economy and production efficiency rely on building connected Noosphere Networks.",
      },
      {
        heading: "How Noosphere Linking Works",
        text: "Adeptus Mechanicus structures link back to headquarters to form a Noosphere Network. Expanding the network raises its level, unlocks stronger units, upgrades and research, and makes units operating inside its influence stronger and cheaper to produce.",
      },
      {
        heading: "How Opponents Break the Network",
        text: "The network creates both power and vulnerability. Enemies can target key Cogitator Relays to disconnect sections of the grid, while Adeptus Mechanicus players can combine ranged units, static weapons, Auger Vision and the Void Shield to protect important territory.",
      },
    ],
    sources: [
      {
        label: "Deep Silver — Introducing the Adeptus Mechanicus",
        href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/introducing-warhammer-40-000-dawn-of-war-iv-s-adeptus-mechanicus",
      },
      {
        label: "Deep Silver — Multiplayer developer AMA",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer",
      },
    ],
  },
  {
    slug: "campaign-co-op-modes-breakdown",
    title: "Dawn of War IV 70+ Mission Campaign & Co-Op Breakdown",
    excerpt: "Everything known about the massive 70+ mission campaign on Kronus. Learn how two-player co-op, shared objectives, and solo progression operate.",
    date: "2026-08-01",
    author: "Kronus Archive Campaign Desk",
    category: "Campaign & Co-op",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 campaign co-op", "Dawn of War IV missions", "Dawn of War 4 co-op multiplayer"],
    content: [
      {
        heading: "The Largest Campaign in Dawn of War History",
        text: "Dawn of War IV features over 70 authored campaign missions across four distinct faction perspectives. Rather than isolated scenarios, every victory feeds into an interconnected narrative determining the fate of the Kronus sector.",
      },
      {
        heading: "Full Two-Player Cooperative Campaign",
        text: "Deep Silver confirms that the campaign supports solo and cooperative play. The publisher has not yet documented every co-op rule, such as army ownership, progression sharing or drop-in behavior, so those details remain pending rather than assumed.",
      },
      {
        heading: "Replayability & Skirmish Integration",
        text: "Alongside the narrative campaign, classic Skirmish, competitive multiplayer, and the beloved Last Stand mode return, ensuring deep replayability beyond the story missions.",
      },
    ],
    sources: [
      {
        label: "Deep Silver — Official Dawn of War IV FAQ",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv",
      },
      {
        label: "Steam — Dawn of War IV store listing",
        href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/",
      },
    ],
  },
  {
    slug: "dawn-of-war-4-release-date-editions-early-access",
    title: "Dawn of War 4 Release Date, Editions & Early Access",
    excerpt: "Dawn of War IV launches September 17, 2026 on Windows PC. Compare the Standard and Commander Editions, early unlock date, DLC and pre-order details.",
    date: "2026-08-02",
    author: "Kronus Archive Release Desk",
    category: "Release & Editions",
    readTime: "6 min read",
    keywords: ["Dawn of War 4 release date", "Dawn of War IV editions", "Dawn of War 4 early access"],
    content: [
      {
        heading: "Release Date and Platform",
        text: "Warhammer 40,000: Dawn of War IV launches on September 17, 2026 for Windows PC through Steam. Deep Silver has not announced console, macOS or Linux versions. KING Art Games is developing the game and Deep Silver is publishing it.",
      },
      {
        heading: "Standard Edition",
        text: "The Standard Edition contains the base game. The official launch announcement also lists a 10% pre-order discount. It does not include the three-day early unlock or the two premium Year One content drops bundled with the Commander Edition.",
      },
      {
        heading: "Commander Edition",
        text: "The Commander Edition includes the base game, Blood Ravens Story Prologue, the Aftermath campaign expansion with a new faction, and the digital soundtrack. Pre-purchasers receive a three-day early unlock beginning September 14, 2026.",
      },
      {
        heading: "Free Year One Updates",
        text: "Deep Silver plans free updates from fall 2026 through spring 2027, including Crusade mode, new map packs, a mission editor and additional Commander scenarios for Last Stand and Crusade. Release timing may change, so this roadmap should be checked against future publisher updates.",
      },
      {
        heading: "Which Edition Makes Sense?",
        text: "Choose Standard if you only want the launch game and prefer to decide on expansions later. Commander is the bundled option for players who already want both premium story drops, the soundtrack and the three-day early unlock. Regional Steam prices and promotions can change.",
      },
    ],
    sources: [
      {
        label: "Deep Silver — Release date, pre-order and DLC plans",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed",
      },
      {
        label: "Steam — Editions and release date",
        href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/",
      },
    ],
  },
  {
    slug: "dawn-of-war-4-factions-compared",
    title: "Dawn of War 4 Factions Compared: Which Army Fits You?",
    excerpt: "Compare Space Marines, Orks, Necrons and Adeptus Mechanicus by playstyle, learning curve and battlefield priorities before choosing a Dawn of War IV faction.",
    date: "2026-08-02",
    author: "Kronus Archive Strategic Desk",
    category: "Faction Guide",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 factions", "best Dawn of War IV faction", "Dawn of War 4 armies"],
    content: [
      {
        heading: "The Four Launch Factions",
        text: "Dawn of War IV launches with Space Marines, Orks, Necrons and Adeptus Mechanicus. Each has a dedicated campaign and mechanically distinct economy, production and combat identity. There is no confirmed universal best faction; the useful choice is the one matching how you prefer to control territory and manage pressure.",
      },
      {
        heading: "Space Marines: Flexible and Direct",
        text: "Space Marines use comparatively straightforward tech structures and can deploy buildings from orbit inside visible territory. Their durable combined-arms roster and familiar structure make them the clearest starting point for players who want flexibility without managing a specialized map-wide network.",
      },
      {
        heading: "Orks: Aggression and Expansion",
        text: "Orks reward constant pressure, large numbers and forward construction. Many infantry units can erect cheap armed buildings, shortening reinforcement routes. Their Waaagh! resource grows through fielded Orks and enemy kills, then converts momentum into a temporary combat surge.",
      },
      {
        heading: "Necrons: Power Matrix Control",
        text: "Necron buildings spread a Power Matrix tied to their economy and empower units fighting on it. They are slower and do not use conventional cover, but compensate with reanimation, translocation and relentless scaling. Choose them if you prefer deliberate territory control and attrition.",
      },
      {
        heading: "Adeptus Mechanicus: Network Synergy",
        text: "Adeptus Mechanicus links structures into a Noosphere Network that unlocks research and stronger weaponry while improving units inside its influence. Their ranged tools and layered base planning suit players who enjoy building a connected system and protecting critical nodes.",
      },
    ],
    sources: [
      {
        label: "Deep Silver — Official factions and how-to-play summaries",
        href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv",
      },
      {
        label: "Deep Silver — Multiplayer developer AMA",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer",
      },
      {
        label: "Deep Silver — Faction Deep Dive: Orks",
        href: "https://www.deepsilver.com/gb/games/dawn-of-war-iv/news/faction-deep-dive-orks",
      },
    ],
  },
  {
    slug: "dawn-of-war-4-multiplayer-modes-guide",
    title: "Dawn of War 4 Multiplayer Modes & Win Conditions",
    excerpt: "A source-checked guide to Dawn of War IV multiplayer, including Quick Match, Annihilation, Domination, Maelstrom, commanders, cover and team-game balance.",
    date: "2026-08-02",
    author: "Kronus Archive Multiplayer Desk",
    category: "Multiplayer",
    readTime: "7 min read",
    keywords: ["Dawn of War 4 multiplayer", "Dawn of War IV game modes", "Dawn of War 4 PvP"],
    content: [
      {
        heading: "Confirmed Online Modes",
        text: "Steam lists Online PvP and Online Co-op, while Deep Silver confirms competitive multiplayer, Skirmish and Last Stand alongside the cooperative campaign. Exact player-count support should be taken from the in-game matchmaking menu at launch because the current official pages do not present one complete matrix.",
      },
      {
        heading: "Annihilation",
        text: "Annihilation is the default Quick Match win condition. The objective is direct: destroy every enemy headquarters while protecting your own. It rewards base pressure and finishing power, but expanding too aggressively can expose the production chain behind your army.",
      },
      {
        heading: "Domination",
        text: "Domination awards Victory Points for capturing and holding more Strategic Positions than the opposing side. The mode shifts attention from a single base assault toward map presence, rotation timing and the ability to contest several locations.",
      },
      {
        heading: "Maelstrom",
        text: "Maelstrom generates objectives dynamically across the battlefield and awards Victory Points for securing them. Because the active objective changes, mobility, scouting and the ability to disengage matter more than building one permanent defensive line.",
      },
      {
        heading: "Commanders, Cover and Retreat",
        text: "Commanders are selected before the match and normally produced from headquarters after unlocks, although custom settings can make them starting units or disable them. Directional cover, garrisonable structures, retreat and on-field reinforcement all help preserve veteran squads, with faction-specific exceptions such as Necrons not using cover.",
      },
    ],
    sources: [
      {
        label: "Deep Silver — Multiplayer developer AMA",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/ama-developer-blog-multiplayer",
      },
      {
        label: "Deep Silver — 1v1 Necrons vs Adeptus Mechanicus",
        href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/battlefield-report-1v1-multiplayer-necrons-vs-adeptus-mechanicus",
      },
      {
        label: "Steam — Online features",
        href: "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
