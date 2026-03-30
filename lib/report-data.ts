export interface Report {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  readTime: string;
  publishDate: string;
  category: string;
  highlights: string[];
  sections: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const REPORTS: Report[] = [
  {
    slug: "2026-fire-protection-inspection-technology-report",
    title: "2026 State of Fire Protection Inspection Technology",
    subtitle: "How fire protection contractors are adopting digital tools to manage NFPA compliance, deficiency tracking, and business growth",
    description: "A comprehensive analysis of technology adoption in the fire protection inspection industry. Based on surveys of 140+ fire protection contractors and AHJ interviews. Covers NFPA 25/72/96 compliance workflows, deficiency-to-proposal conversion, and the business impact of digital inspection tools.",
    pages: 28,
    readTime: "15 min read",
    publishDate: "March 2026",
    category: "Industry Report",
    highlights: [
      "71% of fire protection contractors still use paper or basic spreadsheets for inspection tracking",
      "Digital inspection tools increase deficiency-to-proposal conversion by 35%",
      "Average fire protection company spends 22 hours/week on inspection documentation and reporting",
      "AHJ rejection rates are 3.4x higher for paper-submitted inspection reports",
      "Contractors using mobile inspection tools complete 40% more inspections per technician per day",
    ],
    sections: [
      { title: "NFPA Compliance Landscape", description: "Overview of NFPA 25, 72, and 96 inspection requirements and how enforcement is changing across jurisdictions." },
      { title: "Technology Adoption by Company Size", description: "Survey results showing tool usage patterns for 1-5, 6-20, and 20+ technician companies." },
      { title: "The Deficiency Revenue Opportunity", description: "How digital deficiency tracking and automated proposal generation creates a new profit center." },
      { title: "AHJ Reporting Trends", description: "What authorities having jurisdiction expect from inspection reports and how digital formats are becoming preferred." },
      { title: "2026-2028 Technology Outlook", description: "Emerging trends: IoT-connected fire systems, predictive maintenance, and integrated business platforms." },
    ],
    stats: [
      { value: "140+", label: "Contractors Surveyed" },
      { value: "3 NFPA Codes", label: "Analyzed" },
      { value: "28 Pages", label: "Full Report" },
    ],
  },
  {
    slug: "digital-fire-inspection-roi-guide",
    title: "The ROI of Digital Fire Inspections",
    subtitle: "Quantifying time savings, revenue gains, and competitive advantages from mobile fire inspection tools",
    description: "A detailed ROI analysis for fire protection contractors evaluating digital inspection platforms. Includes time-per-inspection comparisons, deficiency revenue calculations, customer retention impacts, and a step-by-step business case framework.",
    pages: 20,
    readTime: "11 min read",
    publishDate: "February 2026",
    category: "Whitepaper",
    highlights: [
      "Average fire inspection completion time drops from 47 minutes (paper) to 18 minutes (digital)",
      "Digital deficiency documentation increases proposal acceptance by 52%",
      "Technicians using mobile tools generate 68% faster inspection reports",
      "Customer retention rates improve 23% when contractors provide digital inspection portals",
      "Payback period for digital inspection tools averages 2.1 months for companies doing 200+ inspections/month",
    ],
    sections: [
      { title: "The Paper Problem", description: "Time studies comparing paper-based and digital inspection workflows across NFPA 25, 72, and 96 inspections." },
      { title: "Revenue Impact", description: "How digital tools unlock deficiency revenue, reduce missed follow-ups, and improve proposal conversion rates." },
      { title: "Operational Efficiency", description: "Technician productivity gains, route optimization, and administrative overhead reduction." },
      { title: "Customer Experience", description: "How digital reports, portals, and automated scheduling improve customer retention and referral rates." },
    ],
    stats: [
      { value: "62%", label: "Time Savings" },
      { value: "52%", label: "Better Conversion" },
      { value: "2.1 mo", label: "ROI Payback" },
    ],
  },
  {
    slug: "nfpa-25-compliance-best-practices",
    title: "NFPA 25 Compliance Best Practices for Inspection Contractors",
    subtitle: "Documentation standards, ITM frequencies, and common deficiency patterns that every fire protection contractor should know",
    description: "A practical reference guide for fire protection contractors managing NFPA 25 (Standard for the Inspection, Testing, and Maintenance of Water-Based Fire Protection Systems) compliance. Covers ITM frequency requirements, documentation standards, common deficiency categories, and AHJ reporting best practices.",
    pages: 24,
    readTime: "13 min read",
    publishDate: "January 2026",
    category: "Best Practice Guide",
    highlights: [
      "43% of NFPA 25 deficiencies are related to valve supervision — the most common category",
      "Proper documentation of impairment procedures reduces liability exposure by 67%",
      "AHJs increasingly require digital submission — 38% of jurisdictions now mandate electronic reports",
      "Quarterly vs annual inspection frequency misunderstandings cause 29% of compliance gaps",
      "Contractors with automated ITM scheduling have 94% on-time completion rates vs 71% for manual tracking",
    ],
    sections: [
      { title: "NFPA 25 ITM Frequency Reference", description: "Complete inspection, testing, and maintenance frequency requirements organized by system type and component." },
      { title: "Documentation Standards", description: "What every inspection report must contain per NFPA 25, including deficiency classification and corrective action timelines." },
      { title: "Common Deficiency Patterns", description: "Analysis of the most frequently cited deficiencies by system type, with prevention strategies." },
      { title: "AHJ Reporting Requirements", description: "Jurisdiction-specific reporting requirements and best practices for electronic submission." },
    ],
    stats: [
      { value: "43%", label: "Valve Deficiencies" },
      { value: "94%", label: "On-Time w/ Digital" },
      { value: "38%", label: "AHJs Want Digital" },
    ],
  },
];
