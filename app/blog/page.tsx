import { NewsletterSignup } from "@/components/newsletter-signup";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";
import { Flame, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
        "item": "https://firelog.pro"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://firelog.pro/blog"
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
            <Link href="https://app.firelog.pro">Start Free Trial</Link>
          </Button>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog</h1>
        <p className="text-muted-foreground mb-12">
          Fire inspection guides, NFPA compliance tips, and business growth strategies.
        </p>
        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
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
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.description}</p>
                  <div className="flex items-center gap-1 text-red-600 text-sm font-medium mt-3">
                    Read more
                    <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="max-w-3xl mx-auto"><NewsletterSignup /></div>
      </div>
    </div>
  );
}
