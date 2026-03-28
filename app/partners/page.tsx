import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Handshake, DollarSign, Users, Megaphone, ArrowRight, Shield, BarChart3, CheckCircle, Zap, BookOpen } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner Program — FireLog",
  description: "Join the FireLog partner program. Earn recurring commissions referring fire protection contractors, or integrate your tools with our NFPA-compliant inspection platform.",
  alternates: { canonical: "/partners" },
};

const PARTNER_TYPES = [
  {
    icon: Handshake,
    title: "Referral Partners",
    description: "Know fire protection contractors still using paper inspection forms? Refer them to FireLog and earn 20% recurring commission for the life of the account.",
    benefits: [
      "20% recurring revenue share",
      "Dedicated partner dashboard",
      "Co-branded NFPA compliance guides",
      "Priority support for referred contractors",
    ],
    cta: "Become a Referral Partner",
    ideal: "AHJs, fire marshals, insurance inspectors, fire protection consultants",
  },
  {
    icon: Zap,
    title: "Technology Partners",
    description: "Integrate FireLog with your building management, fire alarm monitoring, or compliance tracking system. Seamless data flow for mutual customers.",
    benefits: [
      "Full API access and documentation",
      "Joint go-to-market campaigns",
      "Listed on our integrations page",
      "Co-development and roadmap input",
    ],
    cta: "Explore Technology Partnership",
    ideal: "Fire alarm monitoring companies, building management platforms, compliance software vendors",
  },
  {
    icon: BookOpen,
    title: "Distributor Partners",
    description: "Add FireLog to your fire protection product portfolio. Bundle digital inspection reports with equipment sales for a complete solution.",
    benefits: [
      "Volume discount pricing",
      "Sales training and certification",
      "Co-branded marketing collateral",
      "Dedicated channel manager",
    ],
    cta: "Apply as Distributor",
    ideal: "Fire protection equipment distributors, fire safety supply companies, system integrators",
  },
];

const WHY_PARTNER = [
  {
    icon: Shield,
    title: "NFPA Mandate",
    description: "NFPA 25, 72, and 96 require documented inspections. Jurisdictions are cracking down on paper records — digital is becoming the standard.",
  },
  {
    icon: DollarSign,
    title: "Recurring Revenue",
    description: "SaaS model means your commissions recur monthly. One introduction to a fire protection company generates years of passive income.",
  },
  {
    icon: BarChart3,
    title: "Easy Sell",
    description: "At $79/mo with unlimited users, FireLog pays for itself after one inspection. Contractors see immediate ROI — no hard sell needed.",
  },
  {
    icon: Users,
    title: "Partner Support",
    description: "Dedicated partner manager, co-branded materials, joint trade show presence, and a portal to track referrals and commissions.",
  },
];

const STEPS = [
  { step: "1", title: "Apply", description: "Submit your partner application. We review within 48 hours and schedule an onboarding call." },
  { step: "2", title: "Onboard", description: "Get your partner dashboard, referral links, and co-branded materials for fire protection outreach." },
  { step: "3", title: "Earn & Grow", description: "Refer contractors, close deals, and track your recurring commissions in the partner portal." },
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "FireLog Partner Program",
  description: "Join the FireLog partner program for fire protection inspection management.",
  url: "https://firelogai.com/partners",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
      { "@type": "ListItem", position: 2, name: "Partners", item: "https://firelogai.com/partners" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-red-50 via-white to-orange-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Business with FireLog
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Help fire protection contractors replace paper inspection forms with NFPA-compliant digital reports.
              Earn recurring revenue as a referral partner, technology integrator, or equipment distributor.
            </p>
            <a
              href="mailto:partners@firelogai.com?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-red-500 text-white font-medium px-8 py-3.5 rounded-lg hover:bg-red-600 transition-colors"
            >
              Apply to Partner Program <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Partnership Track</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Whether you&apos;re a fire marshal, alarm company, or equipment distributor — we have a model that fits.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {PARTNER_TYPES.map((type) => (
                <div key={type.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="text-red-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    <strong>Ideal for:</strong> {type.ideal}
                  </p>
                  <a
                    href="mailto:partners@firelogai.com?subject=Partner%20Program%20Application"
                    className="inline-flex items-center gap-1.5 text-red-500 font-medium text-sm hover:underline"
                  >
                    {type.cta} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Partner with FireLog?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_PARTNER.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                    <item.icon className="text-red-500" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-red-500 to-orange-500">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Partner?</h2>
            <p className="text-red-100 mb-8">
              Join our partner ecosystem and help fire protection contractors go digital with NFPA-compliant inspections.
            </p>
            <a
              href="mailto:partners@firelogai.com?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-white text-red-600 font-medium px-8 py-3.5 rounded-lg hover:bg-red-50 transition-colors"
            >
              Apply Now <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
