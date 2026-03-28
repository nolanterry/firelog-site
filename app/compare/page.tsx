import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Flame, Users, FileText, ArrowRight, Shield, Clock, CheckCircle, Building } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare FireLog — See How We Stack Up",
  description: "Compare FireLog with alternatives like ZenFire, ServiceTrade, and paper logs. See why fire protection contractors choose our inspection software.",
  alternates: { canonical: "/compare" },
};

const COMPARISONS = [
  {
    name: "ZenFire",
    href: "/compare/zenfire",
    icon: Flame,
    description: "Modern fire protection software vs. legacy inspection platform",
    tagline: "Mobile-first design vs. outdated desktop-focused workflows"
  },
  {
    name: "ServiceTrade",
    href: "/compare/servicetrade",
    icon: Users,
    description: "Fire protection specialization vs. generic field service platform",
    tagline: "Purpose-built for fire protection vs. one-size-fits-all approach"
  },
  {
    name: "Paper Logs",
    href: "/compare/paper",
    icon: FileText,
    description: "Digital inspection software vs. traditional paper documentation",
    tagline: "Replace clipboards and filing cabinets with mobile inspections"
  }
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Complete NFPA Compliance",
    description: "Pre-built inspection templates for all NFPA standards: sprinklers (25), alarms (72), extinguishers (10), and emergency lighting (101). Every checklist maps to code requirements."
  },
  {
    icon: Clock,
    title: "14-Day Free Trial",
    description: "Start inspecting today. No credit card required, no setup fees. Download the mobile app and begin with industry-standard NFPA-compliant templates."
  },
  {
    icon: Building,
    title: "Built for Fire Protection",
    description: "Not a generic field service tool. Every feature designed specifically for fire protection contractors, inspectors, and facility maintenance teams."
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Simple pricing at $149/month per company. No per-inspector fees, no hidden costs, no enterprise sales process. Scale from 2 to 200 inspectors."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://firelog.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Compare",
      "item": "https://firelog.co/compare"
    }
  ]
};

const comparisonStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "FireLog Comparisons",
  "description": "Compare FireLog with other fire protection inspection solutions",
  "itemListElement": COMPARISONS.map((comparison, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `FireLog vs ${comparison.name}`,
    "description": comparison.tagline,
    "url": `https://firelog.co${comparison.href}`
  }))
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonStructuredData) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900 py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Compare FireLog.<br />
            <span className="text-red-500">See How We Stack Up.</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Honest comparisons with alternatives. See why fire protection contractors choose FireLog 
            for NFPA-compliant inspections and digital documentation.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Head-to-Head Comparisons</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                We've compared FireLog with the most common alternatives fire protection companies consider. 
                See the honest breakdown of features, pricing, and NFPA compliance capabilities.
              </p>
            </div>
            
            <div className="grid gap-6">
              {COMPARISONS.map((comparison) => (
                <Link
                  key={comparison.name}
                  href={comparison.href}
                  className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-red-500/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-colors">
                      <comparison.icon className="text-red-500" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-lg">FireLog</h3>
                        <span className="text-slate-400 font-bold">vs</span>
                        <h3 className="font-semibold text-lg text-slate-700">{comparison.name}</h3>
                      </div>
                      <p className="text-slate-600 text-sm mb-3">{comparison.description}</p>
                      <p className="text-red-500 font-medium text-sm">{comparison.tagline}</p>
                      <div className="flex items-center gap-2 mt-4 text-red-500 font-medium text-sm group-hover:gap-3 transition-all">
                        See full comparison <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose FireLog Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FireLog?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Purpose-built for fire protection contractors who need NFPA compliance without the complexity 
                of generic field service or legacy desktop software.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DIFFERENTIATORS.map((diff) => (
                <div key={diff.title} className="text-center">
                  <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="text-red-500" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-red-900">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              See why fire protection contractors choose FireLog for NFPA compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.firelog.co/sign-up"
                className="bg-red-500 text-white font-semibold px-8 py-4 rounded-lg hover:bg-red-600 transition-colors text-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="/demo"
                className="border border-red-500 text-red-500 font-semibold px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}