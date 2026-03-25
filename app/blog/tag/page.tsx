import { getAllTags, TAG_LABELS } from "@/lib/blog";
import Link from "next/link";
import { Flame } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Topics — FireLog",
  description:
    "Browse fire inspection articles by topic. NFPA compliance, sprinkler inspections, business growth, and more.",
  alternates: { canonical: "/blog/tag" },
};

export default function TagIndexPage() {
  const tags = getAllTags();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://firelogai.com/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://firelogai.com/blog/tag" },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-gray-900">FireLog</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/blog" className="text-sm text-gray-600 hover:text-gray-900">Blog</Link>
            <Link href="/pricing" className="text-sm text-gray-600 hover:text-gray-900">Pricing</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog Topics</h1>
        <p className="text-gray-500 mb-12">Browse fire inspection articles by topic.</p>

        <div className="flex flex-wrap gap-3">
          {tags.map(({ tag, count }) => (
            <Link key={tag} href={`/blog/tag/${tag}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white hover:border-red-300 hover:shadow-md transition-all group">
              <span className="text-sm font-medium text-gray-800 group-hover:text-red-600 transition-colors">
                {TAG_LABELS[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ")}
              </span>
              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-red-50 group-hover:text-red-600 transition-colors">{count}</span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/blog" className="text-sm font-medium text-red-600 hover:underline">← Back to all articles</Link>
        </div>
      </main>
    </div>
  );
}
