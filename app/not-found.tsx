import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — FireLog",
  description: "The page you're looking for doesn't exist. Explore our NFPA-compliant fire inspection software.",
};

const suggestions = [
  { href: "/", label: "Home", desc: "Back to the homepage" },
  { href: "/features", label: "Features", desc: "NFPA inspection forms & reporting" },
  { href: "/pricing", label: "Pricing", desc: "Simple, transparent plans" },
  { href: "/blog", label: "Blog", desc: "Fire inspection tips & compliance guides" },
  { href: "/demo", label: "Book a Demo", desc: "See FireLog in action" },
  { href: "/help", label: "Help Center", desc: "Find answers to common questions" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-6xl font-bold text-red-500">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border border-gray-200 p-4 hover:border-red-300 hover:bg-red-50 transition-colors"
            >
              <p className="font-semibold text-gray-900 group-hover:text-red-600">
                {s.label} →
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-500 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
