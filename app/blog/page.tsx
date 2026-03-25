import { NewsletterSignup } from "@/components/newsletter-signup";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogSearch } from "@/components/blog-search";

export const metadata: Metadata = {
  title: "Blog — Fire Inspection Tips & NFPA Compliance Guides | FireLog",
  description: "Expert guides on fire inspections, NFPA compliance, and growing your fire protection business.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://firelogai.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://firelogai.com/blog"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="size-6 text-red-600" />
            <span className="text-xl font-bold tracking-tight">FireLog</span>
          </Link>
          <Button asChild size="sm">
            <Link href="https://app.firelogai.com">Start Free Trial</Link>
          </Button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Fire inspection guides, NFPA compliance tips, and business growth strategies.
        </p>
        <BlogSearch posts={BLOG_POSTS.map(p => ({ slug: p.slug, title: p.title, description: p.description, date: p.date, tags: p.tags }))} />
        <div className="max-w-3xl mx-auto"><NewsletterSignup /></div>
      </div>
    </div>
  );
}
