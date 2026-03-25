import Link from "next/link";
import type { Metadata } from "next";
import { AUTHORS } from "@/lib/authors";
import { BLOG_POSTS } from "@/lib/blog";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Blog Authors | FireLog",
  description: "Meet the authors behind FireLog's fire inspection guides, NFPA compliance content, and fire protection industry insights.",
  alternates: { canonical: "/blog/authors" },
};

export default function AuthorsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Blog Authors",
    "description": metadata.description,
    "url": "https://firelogai.com/blog/authors",
    "isPartOf": {
      "@type": "WebSite",
      "name": "FireLog",
      "url": "https://firelogai.com",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-2">Blog Authors</h1>
        <p className="text-muted-foreground mb-12">
          Meet the team behind FireLog&apos;s fire protection content.
        </p>
        <div className="grid gap-8">
          {AUTHORS.map((author) => {
            const postCount = BLOG_POSTS.filter((p) => p.author === author.slug).length;
            return (
              <Link
                key={author.slug}
                href={`/blog/authors/${author.slug}`}
                className="block border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-sm transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">{author.name}</h2>
                    <p className="text-sm text-red-600 font-medium mb-2">{author.role}</p>
                    <p className="text-muted-foreground text-sm line-clamp-2">{author.bio}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {author.expertise.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-700 rounded-full px-2.5 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap">
                    {postCount} {postCount === 1 ? "post" : "posts"}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}
