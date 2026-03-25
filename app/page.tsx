"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  WifiOff,
  FileText,
  Camera,
  Search,
  Building2,
  PenTool,
  BarChart3,
  Zap,
  Check,
  X,
  ArrowRight,
  AlertTriangle,
  DollarSign,
  ClipboardList,
  Droplets,
  Bell,
  DoorOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TestimonialCarousel } from "@/components/testimonial-carousel";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const NFPA_TEMPLATES = [
  { code: "NFPA 10", name: "Fire Extinguishers", items: "16 inspection points", icon: Shield },
  { code: "NFPA 25", name: "Sprinkler Systems", items: "28 inspection points", icon: Droplets },
  { code: "NFPA 72", name: "Fire Alarm Systems", items: "22 inspection points", icon: Bell },
  { code: "NFPA 80", name: "Fire Doors", items: "20 inspection points", icon: DoorOpen },
];

const FEATURES = [
  {
    icon: Smartphone,
    title: "Mobile-first",
    desc: "Works on any phone. Large pass/fail buttons you can tap with work gloves. No tablet required.",
  },
  {
    icon: WifiOff,
    title: "Offline mode",
    desc: "Mechanical rooms and basements have no signal. FireLog works offline and syncs when you're back in range.",
  },
  {
    icon: FileText,
    title: "Branded PDF reports",
    desc: "Professional inspection reports with your company logo. Auto-generated, emailed to building owners in one tap.",
  },
  {
    icon: Camera,
    title: "Photo documentation",
    desc: "Snap deficiency photos right from the checklist. They're attached to the report automatically.",
  },
  {
    icon: Search,
    title: "Deficiency tracking",
    desc: "Every failed item becomes a trackable deficiency. Assign, prioritize, set due dates, resolve. Nothing falls through the cracks.",
  },
  {
    icon: Building2,
    title: "Building management",
    desc: "Every building's inspection history in one place. Know when the next inspection is due. No more spreadsheets.",
  },
  {
    icon: PenTool,
    title: "E-signatures",
    desc: "Building managers sign on your phone. No more printing, signing, scanning, filing. Done on-site.",
  },
  {
    icon: BarChart3,
    title: "Compliance reports",
    desc: "Pass/fail rates, deficiency trends, inspections per month. Export for audits or AHJ requests.",
  },
  {
    icon: Zap,
    title: "5-minute inspections",
    desc: "Pre-built NFPA checklists mean you tap through the inspection. No hand-writing 28 line items per sprinkler system.",
  },
];

const COMPARISONS = [
  { feature: "Monthly price", us: "$79/mo", them: "$200+/user/mo", isHighlight: true },
  { feature: "Users included", us: "Unlimited", them: "Per-user pricing", isHighlight: false },
  { feature: "Setup time", us: "5 minutes", them: "Weeks of onboarding", isHighlight: false },
  { feature: "Contract required", us: "No — cancel anytime", them: "Annual contracts", isHighlight: false },
  { feature: "Mobile-first", us: true, them: false, isHighlight: false },
  { feature: "Offline mode", us: true, them: false, isHighlight: false },
  { feature: "Branded PDF reports", us: true, them: true, isHighlight: false },
  { feature: "Deficiency tracking", us: true, them: true, isHighlight: false },
  { feature: "NFPA templates", us: true, them: true, isHighlight: false },
  { feature: "Custom checklists", us: true, them: true, isHighlight: false },
  { feature: "Best for", us: "1-15 tech shops", them: "50+ tech enterprises", isHighlight: true },
];

const FAQS = [
  {
    q: "Does FireLog work offline?",
    a: "Yes. Mechanical rooms, basements, and rural properties often have no signal. FireLog works offline and syncs your inspections when you reconnect.",
  },
  {
    q: "Can I customize the NFPA checklists?",
    a: "Yes. We include pre-built templates for NFPA 10, 25, 72, and 80. You can modify them or create completely custom checklists for any inspection type.",
  },
  {
    q: "How do branded PDF reports work?",
    a: "Add your company logo and info in Settings. Every inspection report is automatically generated as a professional PDF with your branding. Email it to the building owner in one tap.",
  },
  {
    q: "Is there a contract?",
    a: "No. Month-to-month, cancel anytime. We also offer an annual plan at $59/mo (save $240/year).",
  },
  {
    q: "How many inspectors can I add?",
    a: "Unlimited. $79/mo covers your entire team — 1 inspector or 50. No per-user fees.",
  },
  {
    q: "Can building owners access their reports?",
    a: "Yes. You can email reports directly from the app or share a link. Building owners see a professional branded report with your company info.",
  },
  {
    q: "What about deficiency tracking?",
    a: "Every failed checklist item automatically creates a trackable deficiency. Assign it to a tech, set a priority and due date, track resolution. Nothing gets lost.",
  },
  {
    q: "Do you integrate with other software?",
    a: "QuickBooks integration is available for invoicing. Additional integrations (ServiceTitan, scheduling tools) are on the roadmap.",
  },
];

const PRICING_FEATURES = [
  "Unlimited users & inspectors",
  "Unlimited inspections & reports",
  "All NFPA templates (10, 25, 72, 80)",
  "Custom checklist builder",
  "Branded PDF reports",
  "Deficiency tracking & resolution",
  "Photo documentation",
  "E-signatures",
  "Building management",
  "Compliance reports & exports",
  "Offline mode",
  "Email support",
];

function ComparisonCell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-5 text-emerald-500 mx-auto" />
    ) : (
      <X className="size-5 text-gray-300 mx-auto" />
    );
  }
  return <span>{value}</span>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Header />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Badge variant="secondary" className="mb-6 text-red-700 bg-red-50 border-red-100 border px-3 py-1">
                NFPA 10 &middot; 25 &middot; 72 &middot; 80 — Templates Included
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-6"
            >
              Ditch the clipboard.{" "}
              <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                Digital fire inspections
              </span>{" "}
              in under 5 minutes.
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              FireLog replaces paper checklists with mobile-first NFPA inspection forms.
              Tap pass/fail, snap photos, generate branded PDF reports, track deficiencies.
              All from your phone.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base h-12 px-8">
                <Link href="https://app.firelogai.com">
                  Start 14-Day Free Trial
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="text-base h-12 px-8">
                <a href="#features">See How It Works</a>
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mt-4">
              $79/mo after trial &middot; Unlimited users &middot; No contract
            </motion.p>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-400/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-3 rounded-full bg-red-500" />
                  <div className="size-3 rounded-full bg-yellow-500" />
                  <div className="size-3 rounded-full bg-green-500" />
                  <span className="text-xs text-slate-400 ml-2">NFPA 10 — Fire Extinguisher Inspection</span>
                </div>
                <div className="space-y-3">
                  {[
                    { label: "Extinguisher in designated location", status: "pass" },
                    { label: "Accessible (no obstructions)", status: "pass" },
                    { label: "Pressure gauge in operable range", status: "pass" },
                    { label: "Pull pin in place", status: "fail" },
                    { label: "Tamper seal intact", status: "fail" },
                    { label: "Hose in good condition", status: "pass" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5">
                      <span className="text-sm text-slate-300">{item.label}</span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          item.status === "pass"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {item.status === "pass" ? "PASS" : "FAIL"}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">4/6 items passed</span>
                  <div className="flex items-center gap-2 text-xs text-red-400">
                    <Camera className="size-3.5" />
                    2 photos attached
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-[#0f172a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: "19,845", label: "Fire protection businesses in US" },
              { value: "$25.9B", label: "Industry size" },
              { value: "86%", label: "Still use paper checklists" },
              { value: "$79/mo", label: "vs $200+/user competitors" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className={`${i < 3 ? "md:border-r md:border-white/10" : ""}`}
              >
                <p className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Paper inspections are a liability
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              Handwritten checklists get lost. Photocopied reports are illegible.
              When the AHJ asks for records, you&apos;re scrambling through filing cabinets.
              One missing report can mean fines, failed audits, or worse.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: ClipboardList,
                title: "Paper gets lost",
                desc: "Inspectors lose forms. Office staff can't read handwriting. Reports sit in trucks for weeks before getting filed.",
              },
              {
                icon: AlertTriangle,
                title: "Compliance risk",
                desc: "Missing documentation means failed audits. AHJs are cracking down. One missing report can shut down a building.",
              },
              {
                icon: DollarSign,
                title: "Software is overpriced",
                desc: "Inspect Point, Uptick, and ZenFire charge $200+/user/month. That's $2,400/year per tech. Insane for a 5-person shop.",
              },
            ].map((item) => (
              <motion.div key={item.title} variants={fadeInUp}>
                <Card className="h-full border-border/50 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 rounded-2xl">
                  <CardContent className="p-6">
                    <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                      <item.icon className="size-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#0f172a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built for the field, not the office
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-slate-400">
              Every feature designed for inspectors who work on-site, in basements, on rooftops.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeInUp}
                className="group border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-300"
              >
                <div className="size-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 group-hover:bg-red-500/20 transition-colors">
                  <f.icon className="size-5 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NFPA Templates */}
      <section id="templates" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Pre-built NFPA inspection templates
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don&apos;t build checklists from scratch. FireLog includes the most common NFPA inspection forms ready to go.
              Customize them or create your own.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {NFPA_TEMPLATES.map((t) => (
              <motion.div key={t.code} variants={fadeInUp}>
                <Card className="text-center hover:border-red-300 transition-all duration-300 rounded-2xl h-full border-2 border-border/50 hover:-translate-y-0.5 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="size-14 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-4">
                      <t.icon className="size-7 text-red-600" />
                    </div>
                    <h3 className="text-lg font-bold">{t.code}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{t.name}</p>
                    <p className="text-red-600 text-xs font-semibold mt-3">{t.items}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center text-sm text-muted-foreground mt-8"
          >
            Plus: NFPA 96 (Hood Suppression) &middot; Standpipe &middot; Fire Pump — coming soon.
            Or create your own custom templates.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16"
          >
            How it works
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-red-200 via-red-300 to-red-200" />
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  icon: Building2,
                  title: "Select building",
                  desc: "Pick the building from your list or add a new one. All inspection history is tied to the building.",
                },
                {
                  step: "02",
                  icon: ClipboardList,
                  title: "Choose inspection type",
                  desc: "Fire extinguisher, sprinkler, alarm, door — select the type and the NFPA checklist loads automatically.",
                },
                {
                  step: "03",
                  icon: Smartphone,
                  title: "Tap through the checklist",
                  desc: "Pass, fail, or N/A for each item. Add notes and photos on failures. Large buttons for field use.",
                },
                {
                  step: "04",
                  icon: FileText,
                  title: "Generate report",
                  desc: "One tap: branded PDF report generated, deficiencies tracked, emailed to building owner. Done.",
                },
              ].map((s) => (
                <motion.div key={s.step} variants={fadeInUp} className="text-center relative">
                  <div className="size-16 rounded-2xl bg-white border-2 border-red-200 flex items-center justify-center mx-auto mb-4 shadow-sm relative z-10">
                    <s.icon className="size-7 text-red-600" />
                  </div>
                  <span className="inline-block text-xs font-mono text-red-500 font-bold bg-red-50 px-2 py-0.5 rounded mb-2">
                    {s.step}
                  </span>
                  <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Simple pricing. No per-user fees.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
              One plan. Every feature. Unlimited inspectors.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-md mx-auto"
          >
            <Card className="border-2 border-red-600 rounded-2xl relative overflow-visible shadow-xl shadow-red-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-red-600 text-white hover:bg-red-600 border-0 px-4 py-1 text-xs font-bold">
                  14-DAY FREE TRIAL
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mt-2">FireLog Pro</h3>
                <div className="mt-4">
                  <span className="text-5xl font-bold">$79</span>
                  <span className="text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  or $59/mo billed annually (save $240/yr)
                </p>
                <ul className="text-left space-y-3 mt-8 text-sm">
                  {PRICING_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="size-4 text-red-600 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg" className="w-full mt-8 h-12 text-base">
                  <Link href="https://app.firelogai.com">
                    Start Free Trial
                    <ArrowRight className="size-4 ml-1" />
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  No credit card required &middot; Cancel anytime
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cost comparison table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl mx-auto mt-16"
          >
            <h3 className="text-lg font-bold text-center mb-6">Compare the cost</h3>
            <div className="rounded-2xl border overflow-hidden">
              <div className="grid grid-cols-3 text-sm font-bold bg-muted/50">
                <div className="p-4">Team size</div>
                <div className="p-4 text-center text-red-600">FireLog</div>
                <div className="p-4 text-center text-muted-foreground">Competitors</div>
              </div>
              {[
                { size: "1 inspector", us: "$79/mo", them: "$200+/mo" },
                { size: "3 inspectors", us: "$79/mo", them: "$600+/mo" },
                { size: "5 inspectors", us: "$79/mo", them: "$1,000+/mo" },
                { size: "10 inspectors", us: "$79/mo", them: "$2,000+/mo" },
              ].map((r, i) => (
                <div
                  key={r.size}
                  className={`grid grid-cols-3 text-sm border-t ${i % 2 === 0 ? "bg-white" : "bg-muted/30"}`}
                >
                  <div className="p-4">{r.size}</div>
                  <div className="p-4 text-center font-bold text-red-600">{r.us}</div>
                  <div className="p-4 text-center text-muted-foreground">{r.them}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">
              A 5-person shop saves <span className="font-bold text-foreground">$11,052/year</span> switching to FireLog.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="bg-muted/50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
              FireLog vs enterprise inspection software
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-muted-foreground mb-12">
              Inspect Point, Uptick, and ZenFire are built for 50+ tech operations. FireLog is built for the other 90%.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white rounded-2xl border overflow-hidden shadow-sm">
              <div className="grid grid-cols-3 text-sm font-bold border-b bg-muted/30">
                <div className="p-4">Feature</div>
                <div className="p-4 text-center text-red-600">FireLog</div>
                <div className="p-4 text-center text-muted-foreground">Enterprise Tools</div>
              </div>
              {COMPARISONS.map((c, i) => (
                <div
                  key={c.feature}
                  className={`grid grid-cols-3 text-sm border-b last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}
                >
                  <div className="p-4 text-muted-foreground">{c.feature}</div>
                  <div className="p-4 text-center font-medium">
                    <ComparisonCell value={c.us} />
                  </div>
                  <div className="p-4 text-center text-muted-foreground">
                    <ComparisonCell value={c.them} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12"
          >
            Frequently asked questions
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-base font-semibold text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-red-600 to-red-700 text-white py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Stop handwriting inspection reports
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-red-100 mb-8">
              Join fire protection contractors who switched from paper to FireLog.
              14-day free trial, no credit card required.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-10 text-base font-bold text-red-600 bg-white hover:bg-red-50"
              >
                <Link href="https://app.firelogai.com">
                  Start Free Trial
                  <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
