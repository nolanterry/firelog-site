import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { AUTHORS, getAuthorBySlug } from "@/lib/authors";
import { BLOG_POSTS } from "@/lib/blog";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar } from "lucide-react";

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return {};
  return {
    title: `${author.name} — Author | FireLog`,
    description: author.bio,
    alternates: { canonical: `/blog/authors/${slug}` },
  };
}

export default async function AuthorDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const posts = BLOG_POSTS.filter((p) => p.author === slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": author.slug === "firelog-team" ? "Organization" : "Person",
    "name": author.name,
    "description": author.bio,
    "url": `https://firelogai.com/blog/authors/${slug}`,
    "jobTitle": author.role,
    "worksFor": {
      "@type": "Organization",
      "name": "FireLog",
      "url": "https://firelogai.com",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/blog/authors"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; All Authors
        </Link>

        <section className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight mb-1">{author.name}</h1>
          <p className="text-red-600 font-medium mb-4">{author.role}</p>
          <p className="text-muted-foreground leading-relaxed">{author.bio}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {author.expertise.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-700 rounded-full px-2.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-6">
            Articles by {author.name} ({posts.length})
          </h2>
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No articles yet.</p>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-gray-200 rounded-lg p-5 hover:border-red-300 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold mb-1">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                    {post.description}
                  </p>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="size-3" />
                    {post.date}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
