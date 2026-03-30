export interface Migration {
  slug: string;
  name: string;
  tagline: string;
  steps: { title: string; description: string; time: string }[];
  featureMap: { feature: string; them: string; us: string }[];
  faqs: { q: string; a: string }[];
}

export const MIGRATIONS: Migration[] = [
  {
    slug: "paper-forms",
    name: "Paper Forms & Spreadsheets",
    tagline:
      "Replace your paper inspection forms and Excel tracking sheets with digital inspections that auto-generate NFPA-compliant reports and keep your team audit-ready.",
    steps: [
      {
        title: "Gather your current forms",
        description:
          "Collect your paper inspection forms, Excel spreadsheets, deficiency logs, and any building/system records. Take photos of paper records you want to preserve.",
        time: "15 min",
      },
      {
        title: "Create your FireLog account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Set up your company profile and select your inspection specialties (sprinkler, alarm, suppression, etc.).",
        time: "3 min",
      },
      {
        title: "Add your buildings and systems",
        description:
          "Enter your customer buildings with addresses and system details. FireLog creates a digital asset registry for all fire protection systems you service.",
        time: "15 min",
      },
      {
        title: "Choose inspection templates",
        description:
          "Select from pre-built NFPA 25, NFPA 72, and NFPA 96 templates that match your paper forms. No need to recreate checklists — they're already code-compliant.",
        time: "5 min",
      },
      {
        title: "Set up your technician routes",
        description:
          "Assign buildings to technicians and configure inspection schedules. FireLog sends automatic reminders so nothing falls through the cracks.",
        time: "10 min",
      },
      {
        title: "Run your first digital inspection",
        description:
          "Complete an inspection on FireLog. Photo capture, deficiency flagging, and tap-to-complete checklists make it faster than paper.",
        time: "10 min",
      },
    ],
    featureMap: [
      { feature: "Inspection records", them: "Paper forms / filing cabinets", us: "Searchable digital archive" },
      { feature: "NFPA compliance", them: "Manual code reference", us: "Pre-built code-compliant templates" },
      { feature: "Deficiency tracking", them: "Handwritten notes / memory", us: "Automated alerts + photo evidence" },
      { feature: "Report generation", them: "Hours of manual typing", us: "1-click PDF generation" },
      { feature: "Scheduling", them: "Calendar / whiteboard", us: "Automated scheduling + reminders" },
      { feature: "Photo documentation", them: "Separate camera + printing", us: "In-app capture + annotation" },
      { feature: "Customer portal", them: "Phone calls for status", us: "Self-service compliance dashboard" },
      { feature: "AHJ reporting", them: "Manual assembly", us: "Pre-formatted for authority submission" },
    ],
    faqs: [
      {
        q: "My technicians aren't comfortable with technology. Will they adapt?",
        a: "FireLog is designed for field technicians, not IT people. Large buttons, photo capture, and simple checklists. If they can use a smartphone, they can use FireLog. Most techs prefer it over paper within a week.",
      },
      {
        q: "What about our years of paper inspection records?",
        a: "You can photograph and attach paper records to building profiles in FireLog. For large archives, our team helps with bulk digitization at no extra cost.",
      },
      {
        q: "Do I need internet access at every building?",
        a: "FireLog works offline. Complete inspections in basements, mechanical rooms, or anywhere without WiFi. Everything syncs when you reconnect.",
      },
      {
        q: "Will fire marshals accept digital reports?",
        a: "Yes. FireLog generates NFPA-compliant inspection reports in the format AHJs expect. Many fire marshals prefer digital reports because they're more complete and legible than handwritten ones.",
      },
    ],
  },
  {
    slug: "servicetrade",
    name: "ServiceTrade",
    tagline:
      "Move from ServiceTrade's general field service platform to FireLog's purpose-built fire protection inspection software — with NFPA templates, deficiency tracking, and unlimited users.",
    steps: [
      {
        title: "Export your ServiceTrade data",
        description:
          "Go to ServiceTrade Settings and export your customer records, service history, and asset data. Download as CSV for bulk import.",
        time: "10 min",
      },
      {
        title: "Create your FireLog account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Select your fire protection specialties during onboarding.",
        time: "3 min",
      },
      {
        title: "Import customer buildings",
        description:
          "Upload your ServiceTrade CSV export. FireLog maps customer names, building addresses, system types, and service history automatically.",
        time: "5 min",
      },
      {
        title: "Configure NFPA templates",
        description:
          "ServiceTrade uses generic service checklists. FireLog includes pre-built NFPA 25 (sprinkler), NFPA 72 (fire alarm), and NFPA 96 (kitchen hood) templates.",
        time: "5 min",
      },
      {
        title: "Set up inspection schedules",
        description:
          "Configure quarterly, semi-annual, and annual inspection schedules per NFPA code requirements. FireLog auto-generates the schedule based on system types.",
        time: "10 min",
      },
      {
        title: "Invite your team",
        description:
          "Add technicians, office staff, and managers. Unlike ServiceTrade's per-user pricing, FireLog includes unlimited users on every plan.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Industry focus", them: "General field service", us: "Purpose-built for fire protection" },
      { feature: "NFPA templates", them: "Generic checklists", us: "NFPA 25/72/96 pre-configured" },
      { feature: "Deficiency management", them: "Basic service notes", us: "Photo-documented with compliance tracking" },
      { feature: "Pricing model", them: "Per-user monthly", us: "Flat rate, unlimited users" },
      { feature: "Code compliance", them: "Manual tracking", us: "Automated NFPA frequency enforcement" },
      { feature: "AHJ reporting", them: "Manual report creation", us: "Pre-formatted authority reports" },
      { feature: "Customer portal", them: "Limited portal", us: "Full compliance dashboard" },
      { feature: "Proposal generation", them: "Built-in proposals", us: "Deficiency-to-proposal pipeline" },
    ],
    faqs: [
      {
        q: "ServiceTrade handles more than fire protection. Will I need another tool?",
        a: "FireLog is purpose-built for fire protection inspections. If you also do HVAC, plumbing, or other trades, you may keep ServiceTrade for those — but for fire inspection compliance, FireLog is more thorough.",
      },
      {
        q: "ServiceTrade's proposal features are important to us. Does FireLog have that?",
        a: "Yes. FireLog generates repair proposals directly from deficiency findings — with photos, code references, and pricing. It's a deficiency-to-proposal pipeline that ServiceTrade can't match for fire-specific work.",
      },
      {
        q: "Is FireLog cheaper than ServiceTrade?",
        a: "For fire protection teams, typically yes. ServiceTrade charges per user and adds up quickly. FireLog is a flat monthly rate with unlimited users, unlimited buildings, and unlimited inspections.",
      },
      {
        q: "Can I migrate mid-contract with ServiceTrade?",
        a: "Yes. Start your 14-day trial and run both systems in parallel. Switch fully to FireLog at your next ServiceTrade renewal.",
      },
    ],
  },
  {
    slug: "zenfire",
    name: "ZenFire",
    tagline:
      "Upgrade from ZenFire to FireLog for deeper NFPA compliance, automated scheduling, and a modern mobile experience — at a competitive price point.",
    steps: [
      {
        title: "Export your ZenFire data",
        description:
          "Download your building records, inspection history, and deficiency logs from ZenFire. Export as CSV or request a data dump from their support.",
        time: "10 min",
      },
      {
        title: "Create your FireLog account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Import your NFPA inspection specialties during setup.",
        time: "3 min",
      },
      {
        title: "Import buildings and systems",
        description:
          "Upload your ZenFire export. FireLog maps building profiles, system inventories, and inspection history automatically.",
        time: "5 min",
      },
      {
        title: "Review NFPA templates",
        description:
          "Compare FireLog's pre-built NFPA templates against your ZenFire checklists. FireLog includes deeper code references and inspection frequency tracking.",
        time: "10 min",
      },
      {
        title: "Configure team and routes",
        description:
          "Add your technicians and configure service routes. FireLog's scheduling engine accounts for NFPA-required inspection frequencies per system type.",
        time: "10 min",
      },
      {
        title: "Run a parallel inspection",
        description:
          "Complete one building inspection in both systems to verify your data migrated correctly. Most teams decommission ZenFire within two weeks.",
        time: "15 min",
      },
    ],
    featureMap: [
      { feature: "Mobile experience", them: "Basic mobile access", us: "Modern mobile app with offline" },
      { feature: "NFPA coverage", them: "NFPA 25 focused", us: "NFPA 25 + 72 + 96 + custom codes" },
      { feature: "Scheduling", them: "Manual scheduling", us: "AI-optimized route planning" },
      { feature: "Deficiency photos", them: "Basic photo upload", us: "Annotated photos with deficiency tagging" },
      { feature: "Report formatting", them: "Standard PDF", us: "AHJ-formatted + customer-branded" },
      { feature: "Customer portal", them: "Limited", us: "Full self-service compliance dashboard" },
      { feature: "API access", them: "Not available", us: "REST API on all plans" },
      { feature: "Integrations", them: "Limited", us: "QuickBooks, Xero, ServiceTitan, and more" },
    ],
    faqs: [
      {
        q: "Will my ZenFire inspection history transfer?",
        a: "Yes. FireLog's CSV import preserves your complete inspection history, including dates, findings, deficiencies, and corrective actions. Your compliance timeline stays intact.",
      },
      {
        q: "How does FireLog's mobile app compare to ZenFire?",
        a: "FireLog's mobile app is built for field technicians: large tap targets, photo annotation, voice notes, and full offline capability. It's noticeably faster and more intuitive than ZenFire's mobile experience.",
      },
      {
        q: "Does FireLog cost more than ZenFire?",
        a: "FireLog is competitively priced with ZenFire, but includes unlimited users on every plan. For growing teams, the cost per technician drops significantly compared to per-seat alternatives.",
      },
      {
        q: "Can our office staff and technicians transition gradually?",
        a: "Absolutely. Start with one team or one service area on FireLog while maintaining ZenFire for the rest. Migrate at your own pace.",
      },
    ],
  },
];
