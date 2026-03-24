"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FileText, Download, CheckCircle, BookOpen, ClipboardList, FileSpreadsheet } from "lucide-react";

const RESOURCES = [
  {
    title: "NFPA 25 Sprinkler Inspection Checklist",
    description: "Complete quarterly and annual sprinkler system inspection checklist aligned with NFPA 25. Covers wet, dry, deluge, and pre-action systems with all required test points.",
    type: "Checklist" as const,
    pages: "5 pages",
    slug: "nfpa-25-sprinkler-checklist",
  },
  {
    title: "NFPA 72 Fire Alarm Testing Template",
    description: "Device-by-device fire alarm inspection and testing template per NFPA 72. Includes initiating devices, notification appliances, and control panel functional tests.",
    type: "Template" as const,
    pages: "6 pages",
    slug: "nfpa-72-alarm-template",
  },
  {
    title: "Fire Extinguisher Monthly Inspection Log",
    description: "Monthly visual inspection log for portable fire extinguishers per NFPA 10. Tracks location, pressure, condition, access, and signage for each unit.",
    type: "Template" as const,
    pages: "2 pages",
    slug: "extinguisher-monthly-log",
  },
  {
    title: "NFPA 80 Fire Door Inspection Checklist",
    description: "Annual fire door assembly inspection checklist per NFPA 80. Covers labels, clearances, hardware, closers, glazing, and frame integrity for each opening.",
    type: "Checklist" as const,
    pages: "3 pages",
    slug: "nfpa-80-fire-door-checklist",
  },
  {
    title: "AHJ Inspection Preparation Guide",
    description: "Step-by-step guide to preparing for Authority Having Jurisdiction inspections. Covers document readiness, common deficiency areas, correction timelines, and communication best practices.",
    type: "Guide" as const,
    pages: "8 pages",
    slug: "ahj-inspection-guide",
  },
  {
    title: "Fire Protection Deficiency Codes Reference",
    description: "Quick reference for common deficiency codes and findings across NFPA 10, 25, 72, and 80. Includes severity classifications, correction deadlines, and re-inspection triggers.",
    type: "Guide" as const,
    pages: "4 pages",
    slug: "deficiency-codes-reference",
  },
  {
    title: "Annual Backflow Testing Template",
    description: "Backflow prevention assembly testing template for fire sprinkler systems. Covers double check, RPZ, and DCDA valves with pass/fail criteria and certification fields.",
    type: "Template" as const,
    pages: "2 pages",
    slug: "backflow-testing-template",
  },
  {
    title: "Fire Protection Contractor Insurance Checklist",
    description: "Checklist of required insurance coverages for fire protection contractors — GL, E&O, workers' comp, auto, and umbrella — with minimum limits per common AHJ and GC requirements.",
    type: "Checklist" as const,
    pages: "3 pages",
    slug: "contractor-insurance-checklist",
  },
];

const TYPE_CONFIG = {
  Checklist: { icon: ClipboardList, color: "bg-green-100 text-green-700" },
  Template: { icon: FileSpreadsheet, color: "bg-blue-100 text-blue-700" },
  Guide: { icon: BookOpen, color: "bg-amber-100 text-amber-700" },
  Whitepaper: { icon: FileText, color: "bg-purple-100 text-purple-700" },
};

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [globalUnlocked, setGlobalUnlocked] = useState(false);

  const handleDownload = async (slug: string) => {
    if (globalUnlocked || submitted.has(slug)) {
      setSubmitted((prev) => new Set(prev).add(slug));
      return;
    }
    setActiveResource(slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !activeResource) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `resource-${activeResource}` }),
      });
    } catch {
      // Best-effort
    }

    const newSubmitted = new Set(submitted);
    newSubmitted.add(activeResource);
    setSubmitted(newSubmitted);
    setGlobalUnlocked(true);
    setActiveResource(null);
    localStorage.setItem("firelog-resources-email", email);
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.app" },
                { "@type": "ListItem", position: 2, name: "Resources", item: "https://firelog.app/resources" },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="py-20 text-center px-4 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Free Fire Inspection Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Checklists, templates, and guides built by fire protection professionals. Download what you need to keep systems compliant and inspections efficient.
          </p>
        </section>

        {/* Resource Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => {
              const config = TYPE_CONFIG[resource.type];
              const Icon = config.icon;
              const isUnlocked = globalUnlocked || submitted.has(resource.slug);

              return (
                <div
                  key={resource.slug}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-300/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                      <Icon size={14} />
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-400">{resource.pages}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => handleDownload(resource.slug)}
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      isUnlocked
                        ? "bg-green-50 text-green-700 hover:bg-green-100"
                        : "bg-red-600 text-white hover:bg-red-700"
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle size={16} />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Get Free Download
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Email Capture Modal */}
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true" aria-label="Download resource">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Get Your Free Download
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Enter your email to unlock all resources instantly. No spam — just fire protection industry content.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  aria-label="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white font-medium py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Unlock All Resources
                </button>
              </form>
              <button
                onClick={() => setActiveResource(null)}
                className="mt-4 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="bg-red-600 py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            FireLog replaces paper inspection forms with NFPA-compliant digital inspections. Start your 14-day free trial — no credit card required.
          </p>
          <a
            href="https://app.firelog.app/sign-up"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Start Free Trial
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
