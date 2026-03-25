import { NewsletterSignup } from "@/components/newsletter-signup";
import { BLOG_POSTS, getAllTags, getPostsByTag, TAG_LABELS } from "@/lib/blog";
import Link from "next/link";
import { Flame } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label = TAG_LABELS[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ");
  const posts = getPostsByTag(tag);
  return {
    title: `${label} Articles — FireLog Blog`,
    description: `${posts.length} article${posts.length !== 1 ? "s" : ""} about ${label.toLowerCase()} for fire protection professionals.`,
    alternates: { canonical: `/blog/tag/${tag}` },
  };
}

export default async function TagArchivePage({ params }: { params: Promise<{ tag: string }> }) {
  const { tag: tagParam } = await params;
  const posts = getPostsByTag(tagParam);
  if (posts.length === 0) notFound();

  const label = TAG_LABELS[tagParam] || tagParam.charAt(0).toUpperCase() + tagParam.slice(1).replace(/-/g, " ");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://firelogai.com/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://firelogai.com/blog/tag" },
      { "@type": "ListItem", position: 4, name: label, item: `https://firelogai.com/blog/tag/${tagParam}` },
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
        <Link href="/blog/tag" className="text-xs font-medium text-gray-400 hover:text-red-600 mb-4 inline-block">← All Topics</Link>
        <h1 className="text-4xl font-bold tracking-tight mb-2">{label}</h1>
        <p className="text-gray-500 mb-12">{posts.length} article{posts.length !== 1 ? "s" : ""}</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-100 rounded-xl p-6 hover:border-red-200 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs text-gray-400">{post.date}</span>
                <div className="flex gap-1.5">
                  {post.tags.filter((t) => t !== tagParam).slice(0, 3).map((t) => (
                    <Link key={t} href={`/blog/tag/${t}`} className="text-xs text-gray-400 hover:text-red-600 bg-gray-50 px-2 py-0.5 rounded-full transition-colors">
                      {TAG_LABELS[t] || t.replace(/-/g, " ")}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-xl font-bold mb-2 hover:text-red-600 transition-colors">{post.title}</h2>
              </Link>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-red-600 hover:underline">Read more →</Link>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-lg font-semibold mb-4">Explore More Topics</h2>
          <div className="flex flex-wrap justify-center gap-2">
            {getAllTags().filter(({ tag }) => tag !== tagParam).slice(0, 10).map(({ tag, count }) => (
              <Link key={tag} href={`/blog/tag/${tag}`} className="text-xs font-medium text-gray-600 bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-red-200 hover:text-red-600 transition-colors">
                {TAG_LABELS[tag] || tag.replace(/-/g, " ")} ({count})
              </Link>
            ))}
          </div>
        </div>
      </main>
      <div className="max-w-3xl mx-auto px-4"><NewsletterSignup /></div>
    </div>
  );
}
