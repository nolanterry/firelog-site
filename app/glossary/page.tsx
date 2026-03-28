import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GLOSSARY_TERMS, GLOSSARY_CATEGORIES } from "@/lib/glossary-data";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Protection Glossary — Key Terms & Definitions",
  description:
    "Comprehensive glossary of fire protection inspection terminology. NFPA standards, sprinkler systems, fire alarms, suppression systems, and compliance definitions.",
  openGraph: {
    title: "Fire Protection Glossary — FireLog",
    description: "Essential fire protection terms every inspector, contractor, and building owner needs to know.",
  },
  alternates: { canonical: "/glossary" },
};

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryIndexPage() {
  const sortedTerms = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));

  const termsByLetter: Record<string, typeof GLOSSARY_TERMS> = {};
  for (const term of sortedTerms) {
    const firstChar = term.term.charAt(0).toUpperCase();
    const letter = /[A-Z]/.test(firstChar) ? firstChar : "#";
    if (!termsByLetter[letter]) termsByLetter[letter] = [];
    termsByLetter[letter].push(term);
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Fire Protection Inspection Glossary",
    description: "Comprehensive glossary of fire protection inspection and NFPA compliance terminology.",
    url: "https://firelogai.com/glossary",
    hasDefinedTerm: sortedTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `https://firelogai.com/glossary/${t.slug}`,
    })),
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="bg-gradient-to-b from-gray-950 to-gray-900 py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fire Protection Glossary</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {GLOSSARY_TERMS.length} essential terms every fire protection inspector, contractor, and building owner should know.
          </p>
        </section>

        <section className="border-b border-gray-200 sticky top-16 bg-white/95 backdrop-blur z-40">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap gap-1 justify-center">
            {alphabet.map((letter) => {
              const hasTerms = !!termsByLetter[letter];
              return hasTerms ? (
                <a key={letter} href={`#letter-${letter}`} className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded hover:bg-red-500 hover:text-white transition-colors text-gray-700">{letter}</a>
              ) : (
                <span key={letter} className="w-8 h-8 flex items-center justify-center text-sm text-gray-300">{letter}</span>
              );
            })}
            {termsByLetter["#"] && (
              <a href="#letter-num" className="w-8 h-8 flex items-center justify-center text-sm font-medium rounded hover:bg-red-500 hover:text-white transition-colors text-gray-700">#</a>
            )}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pt-10 pb-4">
          <div className="flex flex-wrap gap-2">
            {GLOSSARY_CATEGORIES.map((cat) => {
              const count = GLOSSARY_TERMS.filter((t) => t.category === cat).length;
              return (
                <span key={cat} className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full text-sm">
                  {cat} <span className="text-gray-400 ml-1">({count})</span>
                </span>
              );
            })}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 pb-20">
          {termsByLetter["#"] && (
            <div id="letter-num" className="mb-10 scroll-mt-32">
              <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">#</h2>
              <div className="grid gap-4">{termsByLetter["#"].map((term) => <TermCard key={term.slug} term={term} />)}</div>
            </div>
          )}
          {alphabet.map((letter) =>
            termsByLetter[letter] && (
              <div key={letter} id={`letter-${letter}`} className="mb-10 scroll-mt-32">
                <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-red-500 pb-2 mb-6">{letter}</h2>
                <div className="grid gap-4">{termsByLetter[letter].map((term) => <TermCard key={term.slug} term={term} />)}</div>
              </div>
            )
          )}
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to digitize your fire inspections?</h2>
            <p className="text-gray-400 mb-8">Start your 14-day free trial. No credit card required.</p>
            <a href="https://app.firelogai.com/sign-up" className="inline-flex items-center gap-2 bg-red-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-600 transition-colors">
              Start Free Trial
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function TermCard({ term }: { term: (typeof GLOSSARY_TERMS)[number] }) {
  return (
    <Link href={`/glossary/${term.slug}`} className="block p-5 rounded-lg border border-gray-200 hover:border-red-400 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-gray-900 group-hover:text-red-500 transition-colors">{term.term}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{term.definition}</p>
        </div>
        <span className="shrink-0 px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">{term.category}</span>
      </div>
    </Link>
  );
}
