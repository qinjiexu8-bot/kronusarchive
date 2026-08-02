import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/blog/dawn-of-war-4-pre-order-editions-comparison",
        destination: "/blog/dawn-of-war-4-release-date-editions-early-access",
        permanent: true,
      },
      {
        source: "/blog/necrons-reanimation-monolith-late-game-guide",
        destination: "/blog/dawn-of-war-4-factions-compared",
        permanent: true,
      },
      {
        source: "/blog/campaign-co-op-modes-breakdown",
        destination: "/blog/dawn-of-war-4-multiplayer-modes-guide",
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
