"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/case-study-data";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  FileCheck,
  Smartphone,
  ClipboardCheck,
  Zap,
  BarChart3,
  Calendar,
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

const metrics = [
  { value: "65%", label: "Faster inspections", icon: Clock },
  { value: "100%", label: "NFPA compliance documentation", icon: ShieldCheck },
  { value: "0", label: "Missed inspection deadlines", icon: FileCheck },
];

const benefits = [
  {
    icon: ClipboardCheck,
    title: "NFPA-Mapped Digital Checklists",
    description:
      "Pre-built inspection checklists aligned to NFPA 25, 72, and 96. Every item maps to the code requirement so nothing gets missed.",
  },
  {
    icon: Zap,
    title: "Auto-Proposal Generation",
    description:
      "Every deficiency logged on-site automatically generates a branded repair proposal with photos, pricing, and code references.",
  },
  {
    icon: Calendar,
    title: "Automated Scheduling",
    description:
      "Equipment registry tracks NFPA inspection frequencies. Automated reminders ensure zero missed inspections across your portfolio.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Dashboard",
    description:
      "See inspection completion, open deficiencies, and compliance status across all technicians and locations at a glance.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Complete inspections from any phone or tablet. Works offline — data syncs when you're back in range.",
  },
  {
    icon: ShieldCheck,
    title: "AHJ-Ready Reports",
    description:
      "Generate polished, code-compliant reports formatted for your Authority Having Jurisdiction. Print or share digitally.",
  },
];

export default function CustomersPage() {
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
            Built for Fire Protection Contractors{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              Who Don&apos;t Cut Corners
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            From 5-person shops to national service companies, FireLog helps
            fire protection contractors stay NFPA-compliant, win more contracts,
            and eliminate paperwork chaos.
          </motion.p>
        </motion.div>
      </section>

      {/* Metrics */}
      <section className="py-16 border-y border-border">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {metrics.map((m) => (
              <motion.div key={m.label} variants={fadeInUp} className="text-center">
                <m.icon size={32} className="mx-auto mb-3 text-red-500" />
                <p className="text-4xl font-bold">{m.value}</p>
                <p className="text-muted-foreground mt-1">{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-4">
              Customer Success Stories
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how fire protection contractors are using FireLog to catch more deficiencies, stay compliant, and grow revenue.
            </motion.p>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {CASE_STUDIES.map((study) => (
                <motion.div key={study.slug} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{study.companyName}</h3>
                        <span className="bg-red-50 text-red-600 text-sm px-3 py-1 rounded-full border border-red-200">
                          {study.industry}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{study.hero.summary}</p>
                      <div className="flex items-center justify-between">
                        <div className="bg-slate-50 border border-border px-4 py-2 rounded-lg">
                          <div className="font-bold text-red-500 text-lg">{study.hero.keyMetric}</div>
                          <div className="text-sm text-muted-foreground">Key Result</div>
                        </div>
                        <Link
                          href={`/customers/${study.slug}`}
                          className="inline-flex items-center gap-1 text-red-500 font-semibold hover:text-red-600 transition-colors"
                        >
                          Read Story <ArrowRight size={16} />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div variants={fadeInUp} className="text-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="https://app.firelogai.com">
                  Start Your Free Trial <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                14 days free · No credit card · Cancel anytime
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold text-center mb-4">
              How FireLog Helps Fire Protection Contractors
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              From single-truck operations to multi-state service companies, FireLog helps you
              stay compliant, catch every deficiency, and grow your business.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((b) => (
                <motion.div key={b.title} variants={fadeInUp}>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                        <b.icon size={20} className="text-red-500" />
                      </div>
                      <h3 className="font-semibold mb-2">{b.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to ditch the clipboard?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Digital inspections, branded reports, deficiency tracking — all from your phone.
              Try FireLog free for 14 days.
            </p>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
              <Link href="https://app.firelogai.com">
                Start Your Free Trial <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-slate-400 mt-4">14 days free · No credit card · Cancel anytime</p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
