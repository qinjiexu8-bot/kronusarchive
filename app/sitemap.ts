import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { factions, site } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-02T00:00:00Z");
  
  const baseRoutes: MetadataRoute.Sitemap = [
    {
      url: site.url,
      lastModified: updated,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${site.url}/blog`,
      lastModified: updated,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${site.url}/standards`,
      lastModified: updated,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${site.url}/privacy`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/terms`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${site.url}/copyright`,
      lastModified: updated,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const factionRoutes: MetadataRoute.Sitemap = factions.map((faction) => ({
    url: `${site.url}/factions/${faction.slug}`,
    lastModified: updated,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.dateModified}T00:00:00Z`),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...baseRoutes, ...factionRoutes, ...blogRoutes];
}
