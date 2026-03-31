export interface CaseStudy {
  slug: string;
  companyName: string;
  industry: string;
  companySize: string;
  products: string[];
  hero: {
    summary: string;
    keyMetric: string;
  };
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    implementation: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: Array<{ value: string; label: string }>;
  };
  quote: {
    text: string;
    author: string;
    title: string;
  };
  atAGlance: {
    companySize: string;
    industry: string;
    products: string[];
    keyResults: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "national-fire-protection-services",
    companyName: "National Fire Protection Services",
    industry: "Fire Protection Inspection",
    companySize: "22 technicians, 3 states",
    products: ["FireLog Enterprise"],
    hero: {
      summary:
        "Multi-state fire protection inspection company catches 40% more deficiencies and generates instant proposals after switching from paper inspection forms to FireLog digital checklists.",
      keyMetric: "40% more deficiencies caught",
    },
    challenge: {
      title: "Paper Forms Causing Compliance Gaps",
      description:
        "National Fire Protection Services had 22 technicians across three states filling out paper inspection forms. Inconsistent documentation quality meant deficiencies were being missed, and NFPA 25 compliance gaps were showing up during AHJ reviews.",
      painPoints: [
        "Paper inspection forms causing missed deficiencies across 22 technicians",
        "No standardized NFPA 25 checklists — each technician documented differently",
        "Deficiency proposals took 3-5 days to reach customers after inspection",
        "AHJ inspectors flagging incomplete documentation during reviews",
      ],
    },
    solution: {
      title: "Digital Checklists with Auto-Proposal Generation",
      description:
        "FireLog Enterprise replaced all paper forms with NFPA-mapped digital checklists. Every deficiency logged on-site automatically generates a branded proposal with pricing, photos, and code references — ready to send before the technician leaves the building.",
      implementation: [
        "Deployed FireLog across all 22 technicians with NFPA 25, 72, and 96 checklists",
        "Configured auto-proposal generation for all deficiency types with standard pricing",
        "Set up AHJ-formatted report templates for each state's requirements",
        "Established management dashboards for fleet-wide compliance visibility",
      ],
    },
    results: {
      title: "More Deficiencies, Faster Proposals, Full Compliance",
      description:
        "National FPS saw immediate improvements in deficiency capture rates and proposal turnaround, with zero AHJ compliance findings since deployment.",
      metrics: [
        { value: "40%", label: "More Deficiencies Caught" },
        { value: "Instant", label: "Proposal Generation" },
        { value: "0", label: "AHJ Compliance Findings" },
        { value: "3 States", label: "Standardized Process" },
      ],
    },
    quote: {
      text: "FireLog caught what our paper forms were missing. We went from getting flagged by AHJ inspectors to having the cleanest documentation they'd seen. And the instant proposals? That alone paid for the platform in the first month.",
      author: "David Chen",
      title: "VP of Operations, National Fire Protection Services",
    },
    atAGlance: {
      companySize: "22 technicians, 3 states",
      industry: "Fire Protection Inspection",
      products: ["FireLog Enterprise"],
      keyResults: [
        "40% increase in deficiency capture",
        "Instant proposal generation (was 3-5 days)",
        "Zero AHJ compliance findings",
        "Standardized process across 3 states",
      ],
    },
  },
  {
    slug: "metro-fire-and-safety",
    companyName: "Metro Fire & Safety",
    industry: "Kitchen Hood Suppression",
    companySize: "8 technicians, single market",
    products: ["FireLog Pro"],
    hero: {
      summary:
        "Kitchen hood suppression specialist eliminates missed inspections and increases revenue 30% through automated NFPA 96 scheduling and deficiency-driven proposals.",
      keyMetric: "30% revenue increase",
    },
    challenge: {
      title: "Scheduling Chaos for Semi-Annual Inspections",
      description:
        "Metro Fire & Safety specialized in NFPA 96 kitchen hood suppression systems for restaurants and commercial kitchens. With hundreds of systems on semi-annual inspection cycles, their spreadsheet-based scheduling was causing missed inspections, angry customers, and lost contracts.",
      painPoints: [
        "Spreadsheet scheduling causing missed NFPA 96 semi-annual inspections",
        "No automated reminders — relying on technicians to remember follow-ups",
        "Restaurant customers losing patience with scheduling errors",
        "Revenue leakage from deficiencies identified but never proposed for repair",
      ],
    },
    solution: {
      title: "Automated Scheduling with Equipment Registry",
      description:
        "FireLog Pro's equipment registry tracked every kitchen hood system with its NFPA 96 inspection frequency. Automated scheduling ensured nothing slipped through the cracks, while deficiency proposals converted findings into revenue.",
      implementation: [
        "Registered all customer kitchen hood systems in FireLog equipment registry",
        "Configured NFPA 96 semi-annual inspection schedules with auto-reminders",
        "Set up deficiency-to-proposal workflow with standard repair pricing",
        "Created customer portal for inspection history and compliance records",
      ],
    },
    results: {
      title: "Zero Missed Inspections, 30% Revenue Growth",
      description:
        "Metro Fire & Safety eliminated scheduling chaos and discovered that consistently proposing deficiency repairs created a significant new revenue stream they'd been leaving on the table.",
      metrics: [
        { value: "0", label: "Missed Inspections" },
        { value: "30%", label: "Revenue Increase" },
        { value: "100%", label: "On-Time Scheduling" },
        { value: "Full", label: "Compliance History per System" },
      ],
    },
    quote: {
      text: "We were losing contracts because we'd miss a semi-annual inspection and the restaurant would find someone else. FireLog fixed that overnight. But the real surprise was the revenue from deficiency proposals — we'd been finding issues and never following up. Now it's automatic.",
      author: "Sarah Thompson",
      title: "Owner, Metro Fire & Safety",
    },
    atAGlance: {
      companySize: "8 technicians, single market",
      industry: "Kitchen Hood Suppression",
      products: ["FireLog Pro"],
      keyResults: [
        "Zero missed inspections",
        "30% revenue increase from deficiency proposals",
        "100% on-time NFPA 96 scheduling",
        "Complete compliance history per system",
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((s) => s.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((s) => s.slug);
}
