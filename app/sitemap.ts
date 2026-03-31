import type { MetadataRoute } from "next";
import { BLOG_POSTS, getAllTags } from "@/lib/blog";
import { AUTHORS } from "@/lib/authors";
import { GLOSSARY_TERMS } from "@/lib/glossary-data";
import { WEBINARS } from "@/lib/webinar-data";
import { REPORTS } from "@/lib/report-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://firelogai.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/getting-started`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/customers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/status`, lastModified: now, changeFrequency: "daily" as const, priority: 0.5 },
    { url: `${base}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/fire-sprinkler-companies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/fire-alarm-contractors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/fire-extinguisher-services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const changelogPages: MetadataRoute.Sitemap = [
    { url: `${base}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const comparePages: MetadataRoute.Sitemap = [
    { url: `${base}/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/careers`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/migrate-from`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/paper-forms`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/servicetrade`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/migrate-from/zenfire`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/zenfire`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/servicetrade`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/paper`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/security`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${base}/developers`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const authorPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog/authors`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ...AUTHORS.map((author) => ({
      url: `${base}/blog/authors/${author.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const tagPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog/tag`, lastModified: now, changeFrequency: "weekly", priority: 0.5 },
    ...getAllTags().map(({ tag }) => ({
      url: `${base}/blog/tag/${tag}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    })),
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const glossaryPages: MetadataRoute.Sitemap = [
    { url: `${base}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...GLOSSARY_TERMS.map((term) => ({
      url: `${base}/glossary/${term.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  const webinarPages: MetadataRoute.Sitemap = [
    { url: `${base}/webinars`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...WEBINARS.map((w) => ({
      url: `${base}/webinars/${w.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/reports`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...REPORTS.map((r) => ({ url: `${base}/reports/${r.slug}`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];

  return [...staticPages, ...blogPages, ...authorPages, ...changelogPages, ...comparePages, ...legalPages, ...tagPages, ...glossaryPages, ...webinarPages];
}
