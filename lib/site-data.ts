export const site = {
  name: "Kronus Archive",
  shortName: "KA//IV",
  description:
    "An independent, source-led field guide to Warhammer 40,000: Dawn of War IV.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kronusarchive.com",
  releaseDate: "2026-09-17",
  earlyUnlockDate: "2026-09-14",
  steamUrl:
    "https://store.steampowered.com/app/2272360/Warhammer_40000_Dawn_of_War_IV/",
} as const;

export const editorial = {
  name: "Kronus Archive Editorial Desk",
  published: "2026-08-01",
  modified: "2026-08-01",
} as const;

export type Faction = {
  slug: string;
  name: string;
  designation: string;
  motto: string;
  summary: string;
  doctrine: string;
  accent: string;
  confirmed: string[];
  verifyAtLaunch: string[];
};

export const factions: Faction[] = [
  {
    slug: "space-marines",
    name: "Space Marines",
    designation: "Adeptus Astartes",
    motto: "Elite pressure. Tactical control.",
    summary:
      "The iconic transhuman warriors of the Imperium return as an elite force built around durable squads, flexible commanders, and decisive battlefield intervention.",
    doctrine:
      "A smaller, hard-hitting force intended to reward positioning, squad preservation, and timely use of powerful support abilities.",
    accent: "#b21f2d",
    confirmed: [
      "Blood Ravens headline the faction campaign",
      "Dark Angels appear as a playable sub-faction",
      "Dedicated faction campaign within the wider Kronus narrative",
      "Unique commanders, units, buildings, and mechanics",
    ],
    verifyAtLaunch: [
      "Opening build orders",
      "Squad upgrade breakpoints",
      "Commander matchups",
      "Dark Angels roster differences",
    ],
  },
  {
    slug: "orks",
    name: "Orks",
    designation: "Da Green Tide",
    motto: "More bodies. More noise. More war.",
    summary:
      "Orks overwhelm the field with ramshackle industry, brutal momentum, and mobs that turn raw numbers into a weapon.",
    doctrine:
      "A pressure-focused army expected to thrive on expansion, aggression, and the escalating strength of a growing Waaagh!",
    accent: "#8c9b3d",
    confirmed: [
      "Large-scale Ork armies and classic base construction",
      "Dedicated faction campaign",
      "Faction-specific commanders and economy",
      "Expanded cinematic Sync Kill system",
    ],
    verifyAtLaunch: [
      "Waaagh! thresholds",
      "Economy scaling",
      "Early rush timings",
      "Vehicle transition routes",
    ],
  },
  {
    slug: "necrons",
    name: "Necrons",
    designation: "The Infinite Empire",
    motto: "Reclaim. Reanimate. Eradicate.",
    summary:
      "Ancient machine dynasties rise beneath Kronus, fielding relentless infantry, self-repairing war engines, and structures built to outlast mortal resistance.",
    doctrine:
      "A methodical force centered on durability, reanimation, and a technological climb toward oppressive late-game units.",
    accent: "#69c7a0",
    confirmed: [
      "Reanimation-focused faction identity",
      "Structures that support fallen-unit revival",
      "Dedicated campaign and commander roster",
      "Monolith and Canoptek units shown in official gameplay",
    ],
    verifyAtLaunch: [
      "Reanimation rules",
      "Power curve by tech tier",
      "Optimal structure placement",
      "Anti-vehicle counters",
    ],
  },
  {
    slug: "adeptus-mechanicus",
    name: "Adeptus Mechanicus",
    designation: "Priesthood of Mars",
    motto: "The machine is truth.",
    summary:
      "The tech-priests of Mars make their Dawn of War debut with linked infrastructure, arcane weapons, and a battlefield economy governed by the Noosphere.",
    doctrine:
      "A network-building faction whose production and defenses become more efficient as structures connect into a stronger Noosphere.",
    accent: "#d45a42",
    confirmed: [
      "First full appearance as a Dawn of War faction",
      "Noosphere Network links production buildings",
      "Linked structures can reduce unit production costs",
      "Network strength can improve defensive turrets",
    ],
    verifyAtLaunch: [
      "Network efficiency formula",
      "Building connection radius",
      "Best expansion patterns",
      "Unit production breakpoints",
    ],
  },
];

export const features = [
  {
    index: "01",
    title: "Four faction campaigns",
    text: "Each launch faction receives a dedicated campaign that feeds into one overarching conflict on Kronus.",
  },
  {
    index: "02",
    title: "70+ campaign missions",
    text: "The largest announced Dawn of War campaign can be played solo or cooperatively.",
  },
  {
    index: "03",
    title: "Classic RTS foundation",
    text: "Base construction, resource control, large armies, squad combat, and faction-specific economies return.",
  },
  {
    index: "04",
    title: "Replayable war modes",
    text: "Skirmish, multiplayer, and Last Stand sit alongside the cinematic campaign.",
  },
] as const;

export const roadmap = [
  {
    date: "14 SEP 2026",
    label: "Commander Edition",
    detail: "Three-day early unlock begins.",
  },
  {
    date: "17 SEP 2026",
    label: "Global PC launch",
    detail: "Standard release on Steam.",
  },
  {
    date: "FALL 2026 → SPRING 2027",
    label: "Free operations",
    detail: "Crusade mode, map packs, mission editor, and commander scenarios.",
  },
  {
    date: "POST-LAUNCH",
    label: "Aftermath expansion",
    detail: "A deeper campaign and an additional playable faction.",
  },
] as const;

export const facts = [
  ["Release date", "September 17, 2026"],
  ["Early unlock", "September 14 · Commander Edition"],
  ["Platform", "Windows PC via Steam"],
  ["Launch factions", "Space Marines, Orks, Necrons, Adeptus Mechanicus"],
  ["Campaign", "70+ missions · solo or two-player co-op"],
  ["Other modes", "Skirmish, multiplayer, and Last Stand"],
  ["Developer", "KING Art Games"],
  ["Publisher", "Deep Silver"],
] as const;

export const faqs = [
  {
    question: "When is Dawn of War 4 coming out?",
    answer:
      "Warhammer 40,000: Dawn of War IV launches on September 17, 2026 for Windows PC via Steam. The Commander Edition includes a three-day early unlock beginning September 14.",
  },
  {
    question: "What factions are in Dawn of War IV?",
    answer:
      "The four confirmed launch factions are the Space Marines, Orks, Necrons, and Adeptus Mechanicus. Each faction has distinct commanders, units, buildings, mechanics, and a dedicated campaign.",
  },
  {
    question: "Does Dawn of War 4 have co-op?",
    answer:
      "Yes. The official game overview says the 70-plus campaign missions can be played solo or with a friend.",
  },
  {
    question: "Does Dawn of War IV have multiplayer?",
    answer:
      "Yes. Dawn of War IV includes multiplayer combat as well as Skirmish and the returning Last Stand mode.",
  },
  {
    question: "Is Dawn of War IV coming to PlayStation or Xbox?",
    answer:
      "Only the Windows PC version has been officially confirmed. No PlayStation or Xbox release has been announced as of August 1, 2026.",
  },
  {
    question: "Are the Dawn of War 4 system requirements available?",
    answer:
      "The final PC system requirements are not yet included in this archive. We will publish them after they appear on an official store or publisher page.",
  },
] as const;

export const sources = [
  {
    label: "Official game site",
    publisher: "Deep Silver",
    href: "https://www.deepsilver.com/games/dawn-of-war-iv",
  },
  {
    label: "Release date & roadmap",
    publisher: "Deep Silver",
    href: "https://www.deepsilver.com/games/dawn-of-war-iv/news/warhammer-40-000-dawn-of-war-iv-s-release-date-pre-order-dlc-plans-confirmed",
  },
  {
    label: "Game overview",
    publisher: "Warhammer Community",
    href: "https://www.warhammer-community.com/en-gb/articles/l8pdgqps/warhammer-40000-dawn-of-war-iv/",
  },
  {
    label: "Store listing",
    publisher: "Steam",
    href: site.steamUrl,
  },
] as const;

export function getFaction(slug: string) {
  return factions.find((faction) => faction.slug === slug);
}
