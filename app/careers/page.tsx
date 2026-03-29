import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, Users, Shield, Zap, Heart, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — FireLog",
  description: "Join FireLog and help fire protection contractors go digital. We're building NFPA-compliant inspection software that replaces paper checklists. See open positions.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Life Safety Matters",
    description: "Fire protection saves lives. We build software that ensures inspections are done right, documented properly, and never missed.",
  },
  {
    icon: Zap,
    title: "Replace the Clipboard",
    description: "Fire protection technicians still carry paper checklists. We're building the mobile-first tools they actually want to use in the field.",
  },
  {
    icon: Users,
    title: "Built for Technicians",
    description: "Our users inspect sprinkler systems, fire alarms, and suppression equipment. We design for their workflows, not for a boardroom.",
  },
  {
    icon: Heart,
    title: "Code Compliance, Made Simple",
    description: "NFPA 25, NFPA 72, NFPA 96 — fire codes are complex. We turn regulatory requirements into intuitive digital checklists.",
  },
];

const BENEFITS = [
  "Competitive salary + equity",
  "Remote-first (US time zones)",
  "Unlimited PTO",
  "Health, dental, and vision",
  "$1,000/year learning budget",
  "Latest MacBook + home office stipend",
  "Annual team retreat",
  "401(k) match",
];

const POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build the core inspection platform for fire protection contractors. Next.js, TypeScript, PostgreSQL, offline-capable mobile workflows, PDF report generation.",
  },
  {
    title: "Mobile Engineer (React Native)",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build mobile experiences for fire protection technicians working in basements, rooftops, and mechanical rooms — often without cell service. Offline-first is essential.",
  },
  {
    title: "Account Executive — Fire Protection",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Sell to fire protection company owners and operations managers. You'll demo FireLog to contractors tired of paper checklists and manual scheduling.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Onboard fire protection companies, manage data migrations from paper/spreadsheet systems, and ensure inspection compliance. NFPA knowledge a plus.",
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote (US)",
    type: "Full-time",
    description: "Create content that fire protection professionals actually read — NFPA compliance guides, inspection best practices, code change analysis. Own the content engine.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block text-sm font-medium text-red-400 mb-4 tracking-wide uppercase">
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Modernize Fire Protection<br />Inspection Software
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Fire protection contractors inspect millions of sprinkler systems, fire alarms, and suppression systems every year — mostly on paper.
              FireLog is changing that, and we need great people to help.
            </p>
            <div className="mt-8">
              <a href="#positions" className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why FireLog */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why FireLog?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Fire protection is a $70B industry with paper-based workflows.
                We&apos;re building the compliance platform that contractors have been waiting for.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-red-100 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We take care of our team so they can focus on building great fire protection tech.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <TrendingUp className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t see the right role? Email us at <a href="mailto:careers@firelog.co" className="text-red-600 hover:underline">careers@firelog.co</a> — we&apos;re always looking for talented people.
              </p>
            </div>
            <div className="space-y-4">
              {POSITIONS.map((position) => (
                <div key={position.title} className="p-6 rounded-xl border border-gray-200 hover:border-red-200 hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {position.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{position.description}</p>
                    </div>
                    <a
                      href={`mailto:careers@firelog.co?subject=Application: ${position.title}`}
                      className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap self-start"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🔥 Life Safety Tech</h3>
                <p className="text-sm text-gray-600">We build software that directly impacts fire safety. Every feature helps ensure buildings are properly inspected and people are protected.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🌎 Remote First</h3>
                <p className="text-sm text-gray-600">Work from anywhere in the US. Async-first communication, weekly syncs, and trust-based autonomy.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">📈 Greenfield Opportunity</h3>
                <p className="text-sm text-gray-600">Early-stage with a massive addressable market. No dominant incumbent — just paper. You&apos;ll help define the category.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-red-500/10 to-transparent border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Join Us?</h2>
            <p className="text-gray-600 mb-6">Send your resume and a note about why you&apos;re interested to careers@firelog.co</p>
            <a
              href="mailto:careers@firelog.co"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </a>
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.co" },
              { "@type": "ListItem", position: 2, name: "Careers", item: "https://firelog.co/careers" },
            ],
          }),
        }}
      />
    </>
  );
}
