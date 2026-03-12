"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone,
  WifiOff,
  FileText,
  Camera,
  Search,
  Building2,
  PenTool,
  BarChart3,
  Shield,
  Droplets,
  Bell,
  DoorOpen,
  ClipboardList,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile-First Inspections",
    description: [
      "FireLog is built for inspectors in the field, not office workers at desks. The entire interface is designed around large, glove-friendly pass/fail buttons that work on any smartphone — no tablet or special hardware required.",
      "Navigate checklists with one hand while holding a flashlight with the other. Every tap is deliberate, every screen is purposeful. No pinching, zooming, or squinting at tiny text in a dark mechanical room.",
      "Works on iPhone and Android. Your team can use the phones they already have.",
    ],
  },
  {
    icon: WifiOff,
    title: "Offline Mode",
    description: [
      "Mechanical rooms, basements, parking garages, and rural properties all have one thing in common: no cell signal. FireLog works completely offline so your inspections never stop.",
      "Complete the entire inspection — checklist, photos, notes, signatures — without any internet connection. When you're back in range, FireLog syncs everything automatically.",
      "No lost work. No \"please wait for connection\" screens. No excuses for incomplete inspections.",
    ],
  },
  {
    icon: Shield,
    title: "NFPA 10 — Fire Extinguisher Templates",
    description: [
      "Pre-built inspection checklists covering all 16 inspection points required by NFPA 10 for portable fire extinguishers. Every item is mapped to the standard so your inspections are compliant from day one.",
      "Covers monthly visual inspections, annual maintenance inspections, and 6-year internal examinations. Each checklist type includes the correct items for that inspection interval.",
      "Customize any template to match your local AHJ requirements or add company-specific inspection points.",
    ],
  },
  {
    icon: Droplets,
    title: "NFPA 25 — Sprinkler System Templates",
    description: [
      "28 inspection points covering wet, dry, pre-action, and deluge sprinkler systems. Quarterly, semi-annual, and annual inspection checklists are included and mapped to NFPA 25 requirements.",
      "Covers valve inspections, water flow tests, alarm device tests, and system component checks. Each item references the specific NFPA 25 section for easy reference during inspections.",
      "Track inspection history per system so you know exactly when the next quarterly or annual inspection is due.",
    ],
  },
  {
    icon: Bell,
    title: "NFPA 72 — Fire Alarm Templates",
    description: [
      "22 inspection points for fire alarm and signaling systems. Visual inspections, functional testing, and sensitivity testing checklists are pre-built and ready to use.",
      "Covers initiating devices, notification appliances, primary and secondary power supplies, and control equipment. Semi-annual and annual inspection intervals are tracked automatically.",
      "Document device locations, test results, and sensitivity readings right in the checklist. All data flows into the final inspection report.",
    ],
  },
  {
    icon: DoorOpen,
    title: "NFPA 80 — Fire Door Templates",
    description: [
      "20 inspection points for fire door assemblies as required by NFPA 80. Annual inspection checklists cover doors, frames, hardware, glazing, and signage.",
      "Large facilities can have hundreds of fire doors. FireLog lets you track each door individually with location tags, photos, and complete inspection history.",
      "Failed items automatically create deficiencies with photos attached, making it easy to communicate repair needs to building owners.",
    ],
  },
  {
    icon: FileText,
    title: "Branded PDF Reports",
    description: [
      "Every inspection automatically generates a professional PDF report with your company logo, contact information, and branding. No more Word templates or manual report formatting.",
      "Reports include the full checklist with pass/fail results, inspector notes, deficiency photos, and e-signatures — all formatted and ready to send to building owners or the AHJ.",
      "Email the report directly from FireLog in one tap. Building owners receive a professional document that reflects well on your business.",
    ],
  },
  {
    icon: Camera,
    title: "Photo Documentation",
    description: [
      "Snap photos directly from the inspection checklist. Each photo is automatically attached to the specific checklist item and included in the final report.",
      "Document deficiencies with visual evidence that building owners and AHJs can see. No more separate photo folders or manual report assembly.",
      "Photos are timestamped and geotagged, providing an additional layer of documentation for compliance purposes.",
    ],
  },
  {
    icon: Search,
    title: "Deficiency Tracking",
    description: [
      "Every failed checklist item automatically becomes a trackable deficiency. Assign it to a technician, set priority levels, add due dates, and track resolution — all from within FireLog.",
      "Nothing falls through the cracks. Open deficiencies are visible at the building level and the company level. Run reports on deficiency aging, resolution rates, and common failure types.",
      "When a deficiency is resolved, document the repair with photos and notes. The complete lifecycle is recorded for audit purposes.",
    ],
  },
  {
    icon: PenTool,
    title: "E-Signatures",
    description: [
      "Building managers sign directly on your phone screen at the end of the inspection. No more printing reports, getting a wet signature, scanning, and filing.",
      "Signatures are captured and embedded in the PDF report automatically. The signed report is available immediately — no office processing required.",
      "Reduce your inspection-to-report time from days to minutes. The report is generated, signed, and sent before you leave the building.",
    ],
  },
  {
    icon: Building2,
    title: "Building Management",
    description: [
      "Every building in your portfolio lives in one place. See the complete inspection history, upcoming due dates, open deficiencies, and building contact information at a glance.",
      "No more spreadsheets tracking which buildings need inspections this month. FireLog shows you what's due, what's overdue, and what's coming up.",
      "Add unlimited buildings with addresses, contacts, access notes, and system details. Your team always has the information they need before arriving on-site.",
    ],
  },
  {
    icon: BarChart3,
    title: "Compliance Reports",
    description: [
      "Generate reports on pass/fail rates, inspection volume, deficiency trends, and inspector productivity. Export data for audits, AHJ requests, or internal reviews.",
      "When the fire marshal asks for inspection records, you can pull them in seconds — not hours of digging through filing cabinets.",
      "Track compliance across your entire portfolio. Know which buildings are current and which need attention.",
    ],
  },
  {
    icon: ClipboardList,
    title: "Custom Checklists",
    description: [
      "While FireLog includes pre-built NFPA templates, you can create completely custom checklists for any inspection type — hood suppression systems, clean agent systems, or proprietary equipment.",
      "Build checklists with pass/fail items, text fields, numeric measurements, photo requirements, and dropdown selections. Match any inspection workflow.",
      "Share custom templates across your team so every inspector follows the same process.",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
          >
            Fire inspection software{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              built for the field
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Every feature in FireLog is designed for inspectors who work on-site — in basements,
            on rooftops, and in mechanical rooms with no signal. Here&apos;s what you get.
          </motion.p>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {FEATURES.map((feature) => (
              <motion.div key={feature.title} variants={fadeInUp}>
                <Card className="h-full border-border/50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                      <feature.icon className="size-6 text-red-600" />
                    </div>
                    <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
                    <div className="space-y-3">
                      {feature.description.map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              See every feature in action
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-red-100 mb-8">
              Start your 14-day free trial. No credit card required. Unlimited users included.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-10 text-base font-bold text-red-600 bg-white hover:bg-red-50"
              >
                <Link href="https://app.firelog.pro">
                  Start Free Trial
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 px-10 text-base text-white border border-white/30 hover:bg-white/10"
              >
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
