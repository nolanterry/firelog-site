import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Fire Inspection Tips & NFPA Compliance Guides | FireLog",
  description: "Expert guides on fire inspections, NFPA compliance, and growing your fire protection business.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold">FireLog</span>
          </Link>
          <Link
            href="https://app.firelog.pro"
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-500 mb-12">Fire inspection guides, NFPA compliance tips, and business growth strategies.</p>
        <div className="space-y-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <p className="text-sm text-gray-400 mb-1">{post.date}</p>
              <h2 className="text-xl font-semibold group-hover:text-[#dc2626] transition-colors mb-1">{post.title}</h2>
              <p className="text-gray-600 text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
