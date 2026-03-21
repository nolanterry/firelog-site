"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const TAG_LABELS: Record<string, string> = {
  nfpa: "NFPA",
  checklist: "Checklists",
  extinguisher: "Extinguishers",
  sprinkler: "Sprinklers",
  alarm: "Alarms",
  inspection: "Inspection",
  compliance: "Compliance",
  documentation: "Documentation",
  templates: "Templates",
  business: "Business",
  marketing: "Marketing",
  growth: "Growth",
  pricing: "Pricing",
  software: "Software",
  roi: "ROI",
  comparison: "Comparison",
  "industry-trends": "Industry",
  startup: "Startup",
  contracts: "Contracts",
  insurance: "Insurance",
  audit: "Audit",
};

export function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tagSet.add(t)));
    return Array.from(tagSet).sort();
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((post) => {
      const matchesTag = !activeTag || post.tags.includes(activeTag);
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((t) => t.toLowerCase().includes(q));
      return matchesTag && matchesQuery;
    });
  }, [posts, query, activeTag]);

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-colors"
            aria-label="Search blog posts"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeTag
                ? "bg-red-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(activeTag === tag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeTag === tag
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {TAG_LABELS[tag] || tag}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="grid gap-6">
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No articles found. Try a different search term or topic.
          </p>
        )}
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <Card className="hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 rounded-2xl border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="size-3.5" />
                  {post.date}
                </div>
                <h2 className="text-xl font-semibold group-hover:text-red-600 transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center gap-1 text-red-600 text-sm font-medium mt-3">
                  Read more
                  <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Result count */}
      {(query || activeTag) && filtered.length > 0 && (
        <p className="text-xs text-muted-foreground mt-6 text-center">
          Showing {filtered.length} of {posts.length} articles
        </p>
      )}
    </>
  );
}
