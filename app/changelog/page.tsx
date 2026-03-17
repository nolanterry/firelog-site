import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new in FireLog. Product updates, new features, and improvements to fire inspection and NFPA compliance software.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog | FireLog",
    description:
      "See what's new in FireLog. Product updates, new features, and improvements to fire inspection and NFPA compliance software.",
    url: "https://firelog.pro/changelog",
  },
};

type ChangeCategory = "new" | "improved" | "fixed";

interface Change {
  category: ChangeCategory;
  text: string;
}

interface Release {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
}

const RELEASES: Release[] = [
  {
    version: "1.2.0",
    date: "March 10, 2026",
    summary: "NFPA 25 water-based system inspections, scheduling improvements, and reporting upgrades",
    changes: [
      { category: "new", text: "NFPA 25 water-based fire protection system inspection checklists — sprinklers, standpipes, and fire pumps" },
      { category: "new", text: "Recurring inspection schedules with automatic assignment to inspectors based on territory and certification" },
      { category: "improved", text: "Report builder now supports custom cover pages with your company logo, license numbers, and certifications" },
      { category: "improved", text: "Photo uploads compressed 60% without visible quality loss — faster syncs on cellular connections" },
      { category: "fixed", text: "Resolved an issue where quarterly inspection due dates shifted by one day after timezone changes" },
      { category: "fixed", text: "Fixed deficiency status not updating in real-time when multiple inspectors worked the same building" },
    ],
  },
  {
    version: "1.1.0",
    date: "February 3, 2026",
    summary: "Deficiency tracking, customer portal, and AHJ reporting",
    changes: [
      { category: "new", text: "Deficiency lifecycle tracking — log, assign, schedule repairs, and verify corrections with photo evidence" },
      { category: "new", text: "Customer portal — building owners and property managers can view inspection history and outstanding deficiencies" },
      { category: "new", text: "AHJ report formatting — auto-generate inspection reports in formats required by local fire marshals" },
      { category: "improved", text: "Inspection checklist engine now supports conditional logic — show or hide items based on system type and building class" },
      { category: "improved", text: "Dashboard calendar view redesigned with drag-and-drop rescheduling for inspection appointments" },
      { category: "fixed", text: "Corrected NFPA 72 inspection frequency calculations for buildings with mixed occupancy classifications" },
      { category: "fixed", text: "Fixed an issue where PDF reports showed inspection photos in upload order instead of checklist order" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 6, 2026",
    summary: "FireLog launches — fire inspection software built for NFPA compliance",
    changes: [
      { category: "new", text: "Complete fire inspection platform with pre-built checklists for NFPA 72, NFPA 25, and NFPA 10" },
      { category: "new", text: "Offline-capable mobile app — complete inspections in basements and mechanical rooms without WiFi" },
      { category: "new", text: "Photo and video documentation linked directly to inspection checklist items and deficiencies" },
      { category: "new", text: "Automated inspection scheduling with email reminders for inspectors and building contacts" },
      { category: "new", text: "Professional PDF report generation with digital signatures, NFPA code references, and pass/fail summaries" },
      { category: "new", text: "Building and equipment inventory management with barcode/QR scanning for fast identification" },
    ],
  },
];

const CATEGORY_CONFIG: Record<ChangeCategory, { label: string; emoji: string; color: string }> = {
  new: { label: "New", emoji: "🆕", color: "bg-emerald-100 text-emerald-800" },
  improved: { label: "Improved", emoji: "✨", color: "bg-blue-100 text-blue-800" },
  fixed: { label: "Fixed", emoji: "🐛", color: "bg-amber-100 text-amber-800" },
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 text-center px-4 bg-gradient-to-b from-orange-50 to-white">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Changelog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything new in FireLog — features, improvements, and fixes shipped to make fire inspections easier and NFPA compliance effortless.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {RELEASES.map((release) => (
              <article key={release.version} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-600 border-2 border-white" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-mono text-sm font-semibold">
                    v{release.version}
                  </span>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>
                <p className="text-gray-700 font-medium mb-4">{release.summary}</p>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => {
                    const cfg = CATEGORY_CONFIG[change.category];
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium shrink-0 mt-0.5 ${cfg.color}`}>
                          {cfg.emoji} {cfg.label}
                        </span>
                        <span className="text-gray-600 text-sm">{change.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center px-4 bg-gradient-to-b from-white to-orange-50">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to modernize your fire inspections?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Start your free trial today — no credit card required.
          </p>
          <Button asChild size="lg">
            <Link href="https://app.firelog.pro">Start Free Trial</Link>
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
