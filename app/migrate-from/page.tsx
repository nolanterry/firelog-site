import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MIGRATIONS } from "@/lib/migrations";
import { ArrowRightLeft, ArrowRight, Clock, Shield, Users } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Migrate to FireLog | Switch from Any Fire Inspection Tool",
  description:
    "Step-by-step migration guides to switch to FireLog from ServiceTrade, ZenFire, paper forms, or spreadsheets. Zero data loss. Free onboarding support.",
  openGraph: {
    title: "Migrate to FireLog | Switch from Any Fire Inspection Tool",
    description:
      "Step-by-step migration guides to switch to FireLog. Zero data loss. Free onboarding support.",
    url: "https://firelog.app/migrate-from",
  },
  alternates: { canonical: "/migrate-from" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.app" },
    { "@type": "ListItem", position: 2, name: "Migration Guides", item: "https://firelog.app/migrate-from" },
  ],
};

const benefits = [
  {
    icon: Clock,
    title: "Under 1 Hour",
    description: "Most teams complete the full migration in under 60 minutes, including building data, templates, and team setup.",
  },
  {
    icon: Shield,
    title: "Zero Data Loss",
    description: "Your inspection history, building records, deficiency logs, and compliance documentation transfer completely.",
  },
  {
    icon: Users,
    title: "Free Onboarding",
    description: "Our team helps with data migration, NFPA template configuration, and technician training at no extra cost.",
  },
];

export default function MigrateFromIndex() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <ArrowRightLeft className="w-4 h-4" />
              Migration Center
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Switch to FireLog — Your Inspection Data, Preserved
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Step-by-step guides to migrate from your current fire inspection system. Import your data, keep your compliance history, and be operational in under an hour.
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <b.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Migration Cards */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">Choose Your Migration Path</h2>
            <p className="text-gray-600 text-center mb-12">
              Select where you&apos;re migrating from and follow the step-by-step guide.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {MIGRATIONS.map((m) => {
                const totalTime = m.steps.reduce((sum, s) => {
                  const mins = parseInt(s.time);
                  return sum + (isNaN(mins) ? 0 : mins);
                }, 0);
                return (
                  <Link
                    key={m.slug}
                    href={`/migrate-from/${m.slug}`}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-red-600 transition-colors">
                      From {m.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{m.tagline}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">{m.steps.length} steps · ~{totalTime} min</span>
                      <ArrowRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t See Your Tool?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We can help you migrate from any fire inspection system. Contact our team for a custom migration plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.firelog.app/signup"
                className="inline-flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
