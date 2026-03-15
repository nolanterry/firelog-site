import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://firelog.pro";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comparePages: MetadataRoute.Sitemap = [
    { url: `${base}/compare/zenfire`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/servicetrade`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return [...staticPages, ...blogPages, ...comparePages, ...legalPages];
}
