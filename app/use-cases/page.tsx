import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Droplets, Bell, FireExtinguisher } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — FireLog for Every Fire Protection Specialty",
  description:
    "See how FireLog helps fire sprinkler companies, fire alarm contractors, and fire extinguisher services manage NFPA inspections, ITM tracking, and compliance documentation.",
  openGraph: {
    title: "FireLog Use Cases — Fire Protection Inspection Software for Your Specialty",
    description:
      "From NFPA 25 sprinkler inspections to NFPA 72 alarm testing to NFPA 10 extinguisher services.",
  },
};

const USE_CASES = [
  {
    slug: "fire-sprinkler-companies",
    title: "FireLog for Fire Sprinkler Companies",
    subtitle: "NFPA 25 inspections, ITM tracking, and deficiency management for sprinkler system contractors.",
    icon: Droplets,
    color: "bg-red-500/10 text-red-600",
  },
  {
    slug: "fire-alarm-contractors",
    title: "FireLog for Fire Alarm Contractors",
    subtitle: "NFPA 72 inspections, device inventory management, and sensitivity testing documentation.",
    icon: Bell,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    slug: "fire-extinguisher-services",
    title: "FireLog for Fire Extinguisher Services",
    subtitle: "NFPA 10 annual inspections, 6-year maintenance, hydrostatic testing, and route management.",
    icon: FireExtinguisher,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fire Protection Compliance for Every Specialty
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you inspect sprinklers, alarms, or extinguishers, FireLog digitizes your NFPA inspections, tracks deficiencies, and generates compliant reports — so your team spends less time on paperwork and more time in the field.
            </p>
          </div>
        </section>

        {/* Use Case Grid */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                return (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-red-300 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${uc.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{uc.subtitle}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">See FireLog for Your Operation</h2>
            <p className="text-red-100 mb-8">
              Book a 15-minute walkthrough tailored to your fire protection specialty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.firelog.pro" className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors">
                Start Free Trial
              </a>
              <Link href="/demo" className="border border-white/30 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.pro" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://firelog.pro/use-cases" },
            ],
          }),
        }}
      />
    </>
  );
}
