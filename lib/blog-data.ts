export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: "System Specs" | "Faction Mechanics" | "Campaign & Co-op";
  readTime: string;
  keywords: string[];
  content: {
    heading: string;
    text: string;
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
        heading: "Official Release Hardware Baseline",
        text: "Deep Silver and KING Art Games have confirmed that Dawn of War IV is built from the ground up for modern Windows PC platforms. While final store listings are pending publisher sign-off, official campaign gameplay showcases massive unit counts and complex destructible environments that require modern multi-core processors.",
      },
      {
        heading: "Estimated Minimum Specs (1080p / 30 FPS)",
        text: "Based on comparable RTS titles utilizing large-scale squad rendering, minimum specs are estimated at an Intel Core i5-8400 / AMD Ryzen 5 2600 processor, 16 GB RAM, and an NVIDIA GeForce GTX 1060 (6GB) or AMD Radeon RX 580. An SSD will be strongly required for fast map generation.",
      },
      {
        heading: "Estimated Recommended Specs (1080p / 60 FPS High)",
        text: "For smooth high-fidelity battlefields during full Waaagh! rushes or Canoptek reanimation waves, expect to need an Intel Core i7-12700K / AMD Ryzen 7 5800X3D with an RTX 3070 / Radeon RX 6800 XT and 32 GB of high-speed DDR4/DDR5 system memory.",
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
        text: "When production structures and power generators are placed within connection radius of one another, they form a unified Noosphere grid. Increased grid connectivity grants passive bonuses, including reduced requisition costs for Skitarii squads and faster vehicle assembly times.",
      },
      {
        heading: "Defensive Synergy & Turret Overcharges",
        text: "Noosphere nodes don't just optimize production; defensive turrets wired into a high-density network gain enhanced tracking speed and energy weapon overcharge abilities, turning base perimeters into formidable kill-zones.",
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
        text: "The entire campaign can be tackled solo or with a partner in 2-player co-op. Co-op players can command complementary armies or divide front-line responsibilities, sharing commander abilities and sector objectives in real time.",
      },
      {
        heading: "Replayability & Skirmish Integration",
        text: "Alongside the narrative campaign, classic Skirmish, competitive multiplayer, and the beloved Last Stand mode return, ensuring deep replayability beyond the story missions.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
