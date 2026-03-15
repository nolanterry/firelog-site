"use client";

import { useState } from "react";
import {
  ChevronDown,
  Rocket,
  Flame,
  Users,
  FileText,
  CreditCard,
  Search,
  HelpCircle,
  ClipboardCheck,
  AlertTriangle,
  Building2,
} from "lucide-react";

interface Article { q: string; a: string }
interface Category { title: string; icon: React.ReactNode; description: string; articles: Article[] }

const CATEGORIES: Category[] = [
  {
    title: "Getting Started",
    icon: <Rocket size={22} />,
    description: "Set up your account, add buildings, and run your first inspection.",
    articles: [
      {
        q: "How do I create my FireLog account?",
        a: "Visit app.firelog.app/sign-up and enter your email. You'll get a 14-day free trial with full access — no credit card required. The setup wizard walks you through adding your company, creating your first building, and running a sample inspection.",
      },
      {
        q: "How do I add a building?",
        a: "Go to Buildings → Add Building. Enter the address, building type (commercial, residential, healthcare, education, etc.), occupancy class, and number of floors. FireLog automatically suggests the correct NFPA inspection checklists based on occupancy type and fire protection systems installed.",
      },
      {
        q: "How do I add fire protection systems?",
        a: "Within a building, go to Systems → Add System. Choose the system type: sprinkler (wet, dry, pre-action, deluge), fire alarm, standpipe, fire extinguisher, fire pump, kitchen hood, clean agent, or smoke control. Enter the make/model, installation date, and coverage area. FireLog creates the correct NFPA inspection schedule for each system.",
      },
      {
        q: "How do I invite my team?",
        a: "Go to Settings → Team → Invite. Roles: Admin (full access including billing), Inspector (run inspections, log deficiencies), Office Manager (schedule inspections, generate reports, manage clients), and Viewer (read-only for building owners or AHJ officials).",
      },
      {
        q: "What devices does FireLog work on?",
        a: "FireLog works on any device with a modern web browser — phone, tablet, or desktop. The inspection interface is optimized for mobile so your inspectors can work on-site. The app works offline too — inspections sync when you're back in range.",
      },
    ],
  },
  {
    title: "Running Inspections",
    icon: <ClipboardCheck size={22} />,
    description: "NFPA-compliant inspection workflows for all fire protection systems.",
    articles: [
      {
        q: "How do I start an inspection?",
        a: "Go to Inspections → New Inspection, select the building and system. FireLog loads the correct NFPA checklist (25, 72, 10, etc.) with the right frequency items. Walk through each item, mark pass/fail, add photos of issues, and sign off. The entire workflow is designed to take 50% less time than paper.",
      },
      {
        q: "What NFPA standards does FireLog support?",
        a: "NFPA 25 (water-based fire protection systems — sprinklers, standpipes, fire pumps), NFPA 72 (fire alarm systems), NFPA 10 (portable fire extinguishers), NFPA 96 (kitchen hood exhaust systems), NFPA 2001 (clean agent systems), and NFPA 92 (smoke control). Each standard includes the correct inspection frequency and checklist items.",
      },
      {
        q: "How does the inspection frequency work?",
        a: "FireLog tracks inspection frequencies per NFPA requirements: weekly, monthly, quarterly, semi-annual, annual, and 5-year. The dashboard shows upcoming inspections color-coded by urgency. Overdue inspections are flagged red. You can also set custom frequencies for client-specific requirements.",
      },
      {
        q: "How do I add photos to an inspection?",
        a: "At any checklist item, tap the camera icon to capture or upload a photo. Photos are timestamped and permanently linked to the inspection record. We strongly recommend photos for all deficiencies, valve positions, gauge readings, and system condition documentation.",
      },
      {
        q: "How does offline mode work?",
        a: "Start an inspection normally — if you lose signal (common in basements, riser rooms, mechanical spaces), FireLog caches your progress locally. When connectivity returns, everything syncs automatically including photos. You'll see a sync indicator in the header.",
      },
      {
        q: "Can I customize inspection checklists?",
        a: "Yes. Go to Settings → Checklists to add custom items beyond NFPA requirements. Many contractors add items for AHJ-specific requirements, manufacturer recommendations, or client contract terms. NFPA-required items can't be removed (that protects you and your clients).",
      },
    ],
  },
  {
    title: "Deficiency Tracking",
    icon: <AlertTriangle size={22} />,
    description: "Track, prioritize, and resolve fire protection deficiencies.",
    articles: [
      {
        q: "How do I track deficiencies?",
        a: "When you mark an inspection item as 'Fail,' FireLog automatically creates a deficiency record with severity (Critical — impairment, system out of service; or Non-Critical — needs attention but system is operational), photos, and a description. All deficiencies appear in the Deficiencies dashboard, filterable by building, system, severity, and age.",
      },
      {
        q: "What's the difference between Critical and Non-Critical?",
        a: "Critical deficiencies mean the fire protection system is impaired or out of service — this requires immediate notification to the building owner and often the AHJ per NFPA requirements. Examples: closed control valve, failed fire pump, non-functional alarm panel. Non-Critical deficiencies need correction but the system is still operational. Examples: corroded pipe fitting, missing escutcheon, dirty sprinkler head.",
      },
      {
        q: "How do I resolve a deficiency?",
        a: "Open the deficiency, describe the corrective action, add photos of the repair, and mark resolved. FireLog logs who resolved it, when, and the documentation — creating the audit trail AHJs require. For impairments, resolving clears the impairment flag and can auto-notify the building owner.",
      },
      {
        q: "Can I send deficiency reports to building owners?",
        a: "Yes. Generate a deficiency report with a share link or PDF. The report includes photos, severity levels, NFPA references, and recommended corrective actions. Many contractors use this as a sales tool for repair work — the documentation sells itself.",
      },
    ],
  },
  {
    title: "Building & Client Management",
    icon: <Building2 size={22} />,
    description: "Manage buildings, clients, and inspection contracts.",
    articles: [
      {
        q: "How do I organize multiple buildings for one client?",
        a: "Create a client under Clients → Add Client, then assign buildings to that client. The client dashboard shows all their buildings, upcoming inspections, open deficiencies, and compliance status at a glance. Share read-only access with the client so they can see their own compliance status.",
      },
      {
        q: "Can I track inspection contracts?",
        a: "Yes. Under each client, add contract details: inspection scope, frequency, pricing, and renewal date. FireLog alerts you before contracts expire and shows which inspections are covered. This helps with scheduling and ensures you're inspecting everything you're contracted for.",
      },
      {
        q: "How do I schedule inspections across multiple buildings?",
        a: "The Calendar view shows all upcoming inspections across all buildings, color-coded by type and urgency. Drag-and-drop to reschedule. Assign inspectors to routes — FireLog helps you batch nearby buildings to minimize drive time.",
      },
    ],
  },
  {
    title: "Reports & Compliance",
    icon: <FileText size={22} />,
    description: "Generate professional reports, prepare for AHJ reviews, and maintain compliance records.",
    articles: [
      {
        q: "What reports can I generate?",
        a: "Inspection Report (NFPA-compliant format with photos, checklist results, and inspector signature), Deficiency Report (open items with severity, photos, and NFPA references), Compliance Summary (per-building or portfolio-wide compliance status), Impairment Log (history of system impairments and resolutions), and Annual Summary (year-in-review for client meetings).",
      },
      {
        q: "How do I prepare for an AHJ review?",
        a: "Go to Reports → AHJ Package. Select the building and date range. FireLog generates a complete compliance package: inspection history, deficiency logs with resolutions, system inventory, and impairment records. Export as PDF or share a read-only link with the fire marshal.",
      },
      {
        q: "How long are records retained?",
        a: "FireLog retains all inspection records indefinitely. NFPA 25 requires records for at least 1 year (with many AHJs requiring longer). Most fire protection contractors keep records permanently for liability protection. Your data is backed up daily and encrypted at rest.",
      },
      {
        q: "Can I white-label reports with my company branding?",
        a: "Yes. Under Settings → Branding, upload your logo, set colors, and customize report headers/footers. Every generated report features your company branding. This is especially important for client-facing deficiency reports and annual summaries.",
      },
    ],
  },
  {
    title: "Team Management",
    icon: <Users size={22} />,
    description: "Roles, permissions, and inspector coordination.",
    articles: [
      {
        q: "What roles are available?",
        a: "Admin: Full access including billing, settings, and all buildings. Inspector: Run inspections, log deficiencies, and view assigned buildings. Office Manager: Schedule inspections, generate reports, manage clients (no field access needed). Viewer: Read-only for building owners, property managers, or AHJ officials.",
      },
      {
        q: "Can I track inspector certifications?",
        a: "Yes. Under Team → Certifications, log each inspector's NICET level, state licenses, backflow certifications, and other credentials. FireLog alerts you before certifications expire so you can schedule renewals.",
      },
    ],
  },
  {
    title: "Billing & Account",
    icon: <CreditCard size={22} />,
    description: "Plans, payments, and account management.",
    articles: [
      {
        q: "How much does FireLog cost?",
        a: "FireLog pricing is based on the number of buildings under management. Visit our pricing page for current plans. All plans include unlimited inspections, full NFPA compliance tracking, and team access. Enterprise plans include SSO, custom SLAs, and dedicated onboarding.",
      },
      {
        q: "How does the free trial work?",
        a: "Sign up and get 14 days of full access — no credit card required. Add buildings, run real inspections, and test the full workflow. At the end of the trial, choose a plan to continue or your account pauses (data retained for 90 days).",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Cancel under Settings → Billing. Access continues through your current billing period. Data is retained for 90 days after cancellation. Export everything before canceling.",
      },
    ],
  },
];

function ArticleAccordion({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left group">
        <span className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors">{article.q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 pr-8 text-sm text-muted-foreground leading-relaxed">{article.a}</div>}
    </div>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState("");

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    articles: cat.articles.filter(
      (a) => !search || a.q.toLowerCase().includes(search.toLowerCase()) || a.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.articles.length > 0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative mb-12">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500"
          />
        </div>

        <div className="space-y-10">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-orange-600">{cat.icon}</div>
                <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4 ml-[34px]">{cat.description}</p>
              <div className="bg-gray-50 rounded-xl p-4">
                {cat.articles.map((a) => <ArticleAccordion key={a.q} article={a} />)}
              </div>
            </div>
          ))}
        </div>

        {search && filtered.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No articles match &ldquo;{search}&rdquo;</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different search or email <a href="mailto:support@firelog.app" className="text-orange-600 hover:underline">support@firelog.app</a>
            </p>
          </div>
        )}

        <div className="mt-12 bg-orange-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Still need help?</h3>
          <p className="text-sm text-muted-foreground mb-4">Our support team responds within 2 hours during business hours.</p>
          <a href="mailto:support@firelog.app" className="inline-flex items-center gap-2 bg-orange-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-orange-700 transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
