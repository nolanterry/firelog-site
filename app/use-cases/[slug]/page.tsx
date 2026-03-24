import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, ArrowRight, Quote } from "lucide-react";

interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string; feature: string }[];
  metrics: { stat: string; label: string }[];
  testimonial: { quote: string; name: string; role: string; company: string };
}

const USE_CASES: UseCase[] = [
  {
    slug: "fire-sprinkler-companies",
    title: "FireLog for Fire Sprinkler Companies",
    metaTitle: "FireLog for Fire Sprinkler Companies — NFPA 25 Inspections & ITM Tracking",
    metaDescription:
      "Fire sprinkler companies use FireLog to manage NFPA 25 inspections, track ITM schedules, document deficiencies, and generate compliant inspection reports that satisfy AHJs and property managers.",
    heroHeadline: "NFPA 25 Compliance — From Inspection to Report in Minutes",
    heroSub:
      "Fire sprinkler inspection is a volume business — your technicians need to move fast without cutting corners. FireLog digitizes your NFPA 25 inspections, automates ITM scheduling, and generates compliant reports that satisfy every AHJ. No more paper forms, no more missed inspections, no more report backlogs.",
    painPoints: [
      {
        title: "Paper inspection forms slow everything down",
        desc: "Your technicians spend 15–20 minutes per inspection filling out paper forms, and your office staff spends another 30 minutes transcribing each one into a report. At 8–12 inspections per day, that administrative overhead adds up to hours of lost productivity.",
      },
      {
        title: "ITM schedules are nearly impossible to track manually",
        desc: "NFPA 25 requires different inspection, testing, and maintenance frequencies for different components — weekly, monthly, quarterly, semi-annual, annual, 5-year, and 10-year. Tracking these schedules across hundreds of customer sites with spreadsheets means inspections get missed.",
      },
      {
        title: "Deficiency tracking falls through the cracks",
        desc: "Your technician finds a corroded pipe or a painted sprinkler head. They note it on the form, but who follows up? When does the customer schedule the repair? Was the deficiency resolved before the next inspection? Paper systems have no follow-up mechanism.",
      },
      {
        title: "AHJ report requirements vary by jurisdiction",
        desc: "Every Authority Having Jurisdiction has slightly different reporting preferences. Some want summary reports, others want component-level detail. Customizing reports for each AHJ adds time and creates opportunities for errors.",
      },
    ],
    solutions: [
      {
        title: "Mobile-first digital inspections",
        desc: "Your technicians complete NFPA 25 inspections on their phone or tablet — with pre-built checklists for every component type. Photo documentation, GPS verification, and digital signatures. Average inspection time drops from 20 minutes to 8.",
        feature: "Mobile Inspector",
      },
      {
        title: "Automated ITM scheduling",
        desc: "FireLog tracks every component's inspection, testing, and maintenance schedule automatically. Weekly valve inspections, quarterly flow tests, 5-year internal pipe inspections — every frequency is tracked and technicians are scheduled proactively.",
        feature: "ITM Scheduler",
      },
      {
        title: "Deficiency lifecycle management",
        desc: "Every deficiency is tracked from identification through resolution. Automated customer notifications, repair scheduling, re-inspection verification, and complete audit trails. Nothing gets forgotten.",
        feature: "Deficiency Tracker",
      },
      {
        title: "AHJ-ready report generation",
        desc: "Generate compliant inspection reports in seconds — formatted for your specific AHJ requirements. Include photos, deficiency lists, component inventories, and test results. PDF delivery to customers and AHJs automatically.",
        feature: "Report Builder",
      },
    ],
    metrics: [
      { stat: "60%", label: "faster inspection completion in the field" },
      { stat: "Zero", label: "missed ITM inspections with automated scheduling" },
      { stat: "85%", label: "reduction in report generation time" },
      { stat: "45%", label: "faster deficiency resolution cycle" },
    ],
    testimonial: {
      quote:
        "We inspect 1,200 sprinkler systems annually across three counties. Before FireLog, we had two full-time admin staff just processing inspection paperwork. Now our technicians complete everything on their tablets, reports generate automatically, and we reassigned one admin to sales. Our throughput is up 30% with the same field crew.",
      name: "Jason Piccirillo",
      role: "Operations Manager",
      company: "Guardian Fire Protection Services",
    },
  },
  {
    slug: "fire-alarm-contractors",
    title: "FireLog for Fire Alarm Contractors",
    metaTitle: "FireLog for Fire Alarm Contractors — NFPA 72 Inspections & Device Inventory",
    metaDescription:
      "Fire alarm contractors use FireLog to manage NFPA 72 inspections, maintain device inventories, track sensitivity testing, and generate compliant inspection reports with full device-level documentation.",
    heroHeadline: "NFPA 72 Inspections — Every Device, Every Test, Every Time",
    heroSub:
      "Fire alarm inspections demand device-level precision — every initiating device, notification appliance, and control panel component needs documented testing. FireLog gives your technicians a systematic workflow that ensures every device is tested, every result is recorded, and every report is NFPA 72 compliant.",
    painPoints: [
      {
        title: "Device inventories are outdated or nonexistent",
        desc: "NFPA 72 requires a complete device inventory for every system you inspect. But building and maintaining accurate inventories is time-consuming, and most contractors rely on outdated lists that don't reflect system modifications or additions.",
      },
      {
        title: "Sensitivity testing documentation is a compliance gap",
        desc: "Smoke detector sensitivity testing is required within the first year and every two years thereafter. Tracking which detectors are due for sensitivity testing, documenting results, and managing devices that fall outside acceptable ranges is a documentation nightmare.",
      },
      {
        title: "Large systems mean hundreds of devices to test and document",
        desc: "A single commercial fire alarm system can have 200–500+ devices. Testing and documenting every pull station, smoke detector, horn/strobe, duct detector, and waterflow switch — and recording pass/fail for each — is overwhelming on paper forms.",
      },
      {
        title: "Technician accountability is difficult to verify",
        desc: "How do you know every device was actually tested? Paper forms make it easy to check boxes without performing tests. Without verification mechanisms, quality assurance depends entirely on trust.",
      },
    ],
    solutions: [
      {
        title: "Digital device inventory management",
        desc: "Build and maintain complete device inventories digitally. Add devices during initial surveys, update during inspections, and maintain a living inventory that reflects every system modification. Barcode or QR code scanning for rapid device identification.",
        feature: "Device Inventory",
      },
      {
        title: "Sensitivity testing tracker",
        desc: "FireLog tracks sensitivity testing schedules, documents test results per device, and flags detectors outside acceptable drift ranges. Generate sensitivity test reports that satisfy NFPA 72 Chapter 14 requirements.",
        feature: "Sensitivity Tracker",
      },
      {
        title: "Device-level test documentation",
        desc: "Test every device and record results individually — pass, fail, or not tested. FireLog's mobile app guides technicians through each device in sequence, ensuring nothing is skipped. Photo documentation for failed devices.",
        feature: "Test Workflow",
      },
      {
        title: "GPS and timestamp verification",
        desc: "Every test is automatically timestamped and GPS-tagged. You can verify that your technician was on-site, how long the inspection took, and when each device was tested. Built-in quality assurance without micromanagement.",
        feature: "Verification Engine",
      },
    ],
    metrics: [
      { stat: "50%", label: "faster fire alarm inspection completion" },
      { stat: "100%", label: "device-level test documentation" },
      { stat: "Zero", label: "missed sensitivity testing schedules" },
      { stat: "72%", label: "reduction in report preparation time" },
    ],
    testimonial: {
      quote:
        "We service fire alarm systems in 40+ commercial buildings — some with 300+ devices each. Before FireLog, our annual inspections generated stacks of paper forms that took days to turn into reports. Now our technicians work through the device list on their tablet, results sync in real time, and the report is ready before they leave the building. Our AHJ loves the detail level.",
      name: "Carla Vasquez",
      role: "Service Manager",
      company: "Sentinel Alarm & Signal",
    },
  },
  {
    slug: "fire-extinguisher-services",
    title: "FireLog for Fire Extinguisher Services",
    metaTitle: "FireLog for Fire Extinguisher Services — NFPA 10 Inspections & 6-Year/Hydro Tracking",
    metaDescription:
      "Fire extinguisher service companies use FireLog to manage NFPA 10 annual inspections, 6-year maintenance, hydrostatic testing schedules, route optimization, and barcode-based extinguisher tracking.",
    heroHeadline: "NFPA 10 Compliance — Annual Inspections to Hydro Testing, All in One System",
    heroSub:
      "Fire extinguisher services is a high-volume, route-based business. Your technicians inspect hundreds of extinguishers per day across dozens of customer locations. FireLog replaces paper tags and handwritten logs with barcode scanning, digital inspection records, and automated scheduling for 6-year maintenance and hydrostatic testing — so nothing expires without your knowledge.",
    painPoints: [
      {
        title: "High volume means high error rates on paper",
        desc: "A single technician may inspect 80–120 extinguishers per day. At that volume, paper inspection tags and handwritten logs guarantee mistakes — missed extinguishers, wrong dates, illegible notes. Every error is a compliance gap.",
      },
      {
        title: "6-year and hydrostatic testing schedules are hard to track",
        desc: "NFPA 10 requires 6-year internal maintenance for stored-pressure extinguishers and 12-year hydrostatic testing. Tracking these schedules across thousands of extinguishers at hundreds of customer sites is a logistical challenge that spreadsheets can't handle.",
      },
      {
        title: "Route management is inefficient",
        desc: "Your technicians drive routes that hit multiple customer locations per day. Without route optimization and pre-loaded site information, they waste time figuring out what each location has, what's due, and what was found last time.",
      },
      {
        title: "Customer billing for replacements and services is delayed",
        desc: "Your technician replaces an extinguisher or performs a 6-year service in the field, but the paperwork doesn't reach the office for days. Delayed documentation means delayed billing means delayed revenue.",
      },
    ],
    solutions: [
      {
        title: "Barcode-based extinguisher tracking",
        desc: "Assign a unique barcode to every extinguisher. Technicians scan each unit during inspection — recording type, size, location, manufacture date, and service history. No more missed units or duplicate records.",
        feature: "Barcode Scanner",
      },
      {
        title: "Automated 6-year and hydro scheduling",
        desc: "FireLog calculates 6-year maintenance and 12-year hydrostatic test dates based on manufacture date and service history. Alerts fire before due dates, giving you time to schedule service and notify customers.",
        feature: "Service Scheduler",
      },
      {
        title: "Route optimization with pre-loaded site data",
        desc: "Build efficient routes for your technicians with pre-loaded customer information — number of units, locations within the building, last inspection results, and any pending 6-year or hydro services.",
        feature: "Route Manager",
      },
      {
        title: "Real-time field-to-office sync",
        desc: "Every inspection, replacement, and service is synced to the office in real time. Your admin team can invoice same-day, track inventory usage, and monitor technician progress across all active routes.",
        feature: "Live Sync",
      },
    ],
    metrics: [
      { stat: "40%", label: "more extinguishers inspected per day" },
      { stat: "Zero", label: "expired 6-year or hydro tests with automated alerts" },
      { stat: "Same-day", label: "invoicing with real-time field sync" },
      { stat: "99.8%", label: "extinguisher tracking accuracy with barcode scanning" },
    ],
    testimonial: {
      quote:
        "We service 18,000 extinguishers across 400+ customer sites. Tracking 6-year and hydro dates on spreadsheets was a full-time job — and we still missed some. FireLog's automated scheduling eliminated that problem entirely. Our technicians scan, inspect, and move on. The office gets real-time data and invoices go out the same day. We're billing 15% more just from capturing services we used to miss.",
      name: "Derek Stanton",
      role: "Owner",
      company: "FireShield Extinguisher Services",
    },
  },
];

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ slug: uc.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) return {};
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    openGraph: { title: uc.metaTitle, description: uc.metaDescription },
  };
}

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) notFound();

  const otherCases = USE_CASES.filter((u) => u.slug !== uc.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-4">Use Case</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{uc.heroHeadline}</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">{uc.heroSub}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.firelog.pro"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Challenges You Face</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Without the right tools, these problems cost you time, revenue, and compliance standing.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {uc.painPoints.map((pp, i) => (
                <div key={i} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900">{pp.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How FireLog Solves It</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Purpose-built features for fire protection inspection businesses.
            </p>
            <div className="space-y-8">
              {uc.solutions.map((sol, i) => (
                <div key={i} className="flex gap-5 items-start bg-white rounded-xl p-6 border border-gray-100">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-semibold text-gray-900 text-lg">{sol.title}</h3>
                      <span className="text-xs font-medium bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full">
                        {sol.feature}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Results That Matter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {uc.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-white">{m.stat}</p>
                  <p className="text-sm text-red-200 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Quote className="w-10 h-10 text-red-400 mx-auto mb-6" />
            <blockquote className="text-xl text-gray-800 leading-relaxed italic mb-6">
              &ldquo;{uc.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <p className="font-semibold text-gray-900">{uc.testimonial.name}</p>
              <p className="text-sm text-gray-500">
                {uc.testimonial.role}, {uc.testimonial.company}
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-red-600 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Modernize Fire Protection Inspections?</h2>
            <p className="text-red-100 mb-8">
              Join fire protection companies that have eliminated paper inspections and streamlined compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.firelog.pro"
                className="bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/use-cases/${other.slug}`}
                  className="group flex items-center justify-between bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-xl p-6 transition-all"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{other.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{other.metaDescription.slice(0, 80)}…</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors flex-shrink-0 ml-4" />
                </Link>
              ))}
            </div>
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.pro" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://firelog.pro/use-cases" },
              { "@type": "ListItem", position: 3, name: uc.title, item: `https://firelog.pro/use-cases/${uc.slug}` },
            ],
          }),
        }}
      />
    </>
  );
}
