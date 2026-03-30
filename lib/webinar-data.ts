export interface Webinar {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  duration: string;
  speaker: { name: string; title: string; company: string };
  topics: string[];
  status: "upcoming" | "on-demand";
  category: string;
}

export const WEBINARS: Webinar[] = [
  {
    slug: "nfpa-25-inspection-compliance-2026",
    title: "NFPA 25 Inspection Compliance in 2026: ITM Requirements Every Contractor Must Know",
    description: "A comprehensive review of NFPA 25 inspection, testing, and maintenance requirements — with focus on the documentation standards AHJs are enforcing most aggressively.",
    longDescription: "AHJ enforcement of NFPA 25 documentation requirements has tightened significantly, with more jurisdictions requiring electronic records and real-time deficiency reporting. This webinar provides a complete walkthrough of current NFPA 25 ITM requirements — from weekly/monthly visual inspections through quarterly, semi-annual, and annual testing intervals — with specific focus on the documentation gaps that result in the most citations. We'll cover sprinkler system inspection frequencies by component, fire pump testing documentation requirements, standpipe and fire hose inspection records, and the emerging trend of AHJs requiring digital inspection reports. Whether you're a fire protection contractor, building owner, or AHJ inspector, you'll leave with a clear understanding of what compliant documentation looks like in 2026.",
    date: "2026-04-17",
    time: "1:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "FireLog" },
    topics: [
      "NFPA 25 ITM frequency requirements by component",
      "Documentation standards AHJs enforce most",
      "Fire pump testing documentation requirements",
      "Digital vs. paper reporting: what AHJs prefer",
      "Building an AHJ-ready inspection program",
    ],
    status: "upcoming",
    category: "Compliance",
  },
  {
    slug: "digital-fire-inspection-adoption",
    title: "Going Digital: How Fire Protection Contractors Are Eliminating Paper Inspections",
    description: "Learn how leading fire protection companies have transitioned from paper forms to digital inspection workflows — and the impact on efficiency, accuracy, and customer satisfaction.",
    longDescription: "The fire protection industry has been one of the last trades to digitize inspection workflows — but that's changing fast as AHJs increase documentation requirements and customers demand digital reports. This webinar features insights from fire protection contractors who've successfully made the transition from paper to digital. We'll cover the real-world ROI they're seeing (68% faster report delivery, 45% reduction in return visits for missing data, 3x faster AHJ approval), the change management challenges they overcame with field technicians, and how to evaluate inspection software for fire protection specifically. Includes a live demonstration of a typical sprinkler inspection, fire alarm inspection, and kitchen hood suppression inspection in a digital workflow.",
    date: "2026-05-08",
    time: "2:00 PM ET",
    duration: "50 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "FireLog" },
    topics: [
      "ROI metrics from digital adoption (speed, accuracy, approval rates)",
      "Change management for field technicians",
      "Evaluating fire inspection software",
      "Live demo: sprinkler, fire alarm, and kitchen hood inspections",
      "Customer satisfaction improvements with digital reports",
    ],
    status: "upcoming",
    category: "Technology",
  },
  {
    slug: "deficiency-tracking-proposal-conversion",
    title: "Turning Deficiencies Into Revenue: The Deficiency-to-Proposal Pipeline",
    description: "How top fire protection contractors convert inspection deficiency findings into repair/upgrade proposals — and the documentation workflow that makes it seamless.",
    longDescription: "Every fire inspection deficiency is a potential repair or upgrade job — but most fire protection contractors leave money on the table because their deficiency tracking and proposal processes are disconnected. This on-demand webinar shows how to build a seamless deficiency-to-proposal pipeline that converts inspection findings into billable work. We'll cover how to document deficiencies with the detail level that justifies repair pricing, how to generate professional proposals directly from inspection findings, follow-up cadence and communication strategies that maximize conversion, and how to price deficiency repairs profitably. Based on data from fire protection companies averaging 35%+ deficiency-to-proposal conversion rates (industry average: 12%).",
    date: "2026-03-04",
    time: "1:00 PM ET",
    duration: "40 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "FireLog" },
    topics: [
      "Documenting deficiencies for proposal justification",
      "Generating proposals directly from inspection findings",
      "Follow-up cadence that maximizes conversion",
      "Pricing deficiency repairs profitably",
      "Achieving 35%+ deficiency-to-proposal conversion",
    ],
    status: "on-demand",
    category: "Business",
  },
  {
    slug: "fire-protection-technician-training-guide",
    title: "Training Fire Protection Technicians: From Hire to NICET Certification",
    description: "A structured training framework for developing fire protection inspection technicians — from day-one onboarding through NICET Level II certification.",
    longDescription: "The fire protection industry faces a persistent technician shortage, and companies that can effectively train new hires have a significant competitive advantage. This on-demand webinar provides a structured training framework that takes new technicians from day-one orientation through independent inspection capability and NICET certification readiness. We cover the knowledge hierarchy (what to teach first vs. what can wait), field training ride-along structure, documentation training (the #1 area where new technicians struggle), NFPA code familiarity building, and NICET study preparation. Includes insights from companies that have reduced their new-technician time-to-productivity from 6+ months to under 90 days using structured training programs.",
    date: "2026-02-06",
    time: "2:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "FireLog" },
    topics: [
      "Knowledge hierarchy: what to teach first",
      "Field training ride-along structure",
      "Documentation training for new technicians",
      "NFPA code familiarity building",
      "NICET certification preparation timeline",
    ],
    status: "on-demand",
    category: "Training",
  },
];

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return WEBINARS.find((w) => w.slug === slug);
}

export function getUpcomingWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "upcoming");
}

export function getOnDemandWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "on-demand");
}
