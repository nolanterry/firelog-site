import Link from "next/link";
import { getRelatedPosts } from "@/lib/blog";
import { ArrowRight } from "lucide-react";

export function RelatedPosts({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedPosts(currentSlug, 3);
  if (related.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-foreground mb-6">Related Articles</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-xl border border-gray-200 p-5 hover:border-red-400/40 hover:shadow-md transition-all duration-200"
          >
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-red-600 transition-colors line-clamp-3 leading-snug">
              {post.title}
            </h3>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
              Read article <ArrowRight className="size-3" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
