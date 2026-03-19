"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, ShieldCheck, FileCheck, Quote } from "lucide-react";
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

const testimonials = [
  {
    quote:
      "We inspect 400+ systems a month across 60 buildings. Before FireLog, we had binders in every building and no way to know if a deficiency from 6 months ago was actually fixed. Now everything is in one dashboard.",
    name: "Steve Donovan",
    title: "Operations Manager",
    company: "National Fire Protection Services",
    location: "Philadelphia, PA",
    metric: "400+ monthly inspections tracked digitally",
  },
  {
    quote:
      "The AHJ showed up for a spot check and asked to see our inspection records for the last 3 years. I pulled them up on my tablet in 30 seconds. He spent 5 minutes reviewing and said we were the most organized contractor he'd seen.",
    name: "Lisa Tran",
    title: "Compliance Manager",
    company: "Pacific Fire & Life Safety",
    location: "Los Angeles, CA",
    metric: "3 years of records accessible in 30 seconds",
  },
  {
    quote:
      "NFPA 25 requires tracking deficiencies and verifying corrections within specific timeframes. Doing that manually across 200 buildings was impossible. FireLog automates the follow-up and won't let anything slip through.",
    name: "Brian Kelley",
    title: "Owner",
    company: "Kelley Fire Protection",
    location: "Denver, CO",
    metric: "Zero missed deficiency follow-ups",
  },
  {
    quote:
      "My technicians used to spend 20 minutes per inspection on paperwork. With FireLog, they tap through the NFPA checklist, snap photos of deficiencies, and the report generates automatically. We added 3 inspections per tech per day.",
    name: "Maria Gonzalez",
    title: "Field Supervisor",
    company: "Guardian Life Safety",
    location: "Miami, FL",
    metric: "3 additional inspections per technician per day",
  },
  {
    quote:
      "We bid on a hospital system contract that required digital inspection records with photo evidence and deficiency tracking. FireLog was the reason we won it over two larger competitors who were still on paper.",
    name: "Robert Kim",
    title: "Business Development",
    company: "Tri-State Fire Systems",
    location: "Newark, NJ",
    metric: "Won hospital system contract over larger competitors",
  },
  {
    quote:
      "The client-facing reports alone are worth it. Our building managers get professional PDF reports with photos, deficiency status, and next inspection dates. We went from 'when was our last inspection?' calls to zero.",
    name: "Angela Martinez",
    title: "Account Manager",
    company: "Southwest Fire Inspection Co.",
    location: "Dallas, TX",
    metric: "Eliminated client follow-up calls about inspection status",
  },
];

const caseStudies = [
  {
    company: "National Fire Protection Services",
    industry: "Commercial Fire Protection",
    scale: "28 technicians, 60+ buildings, 400+ inspections/month",
    challenge:
      "High-volume inspection operation using a combination of paper forms, Excel spreadsheets, and a shared drive of scanned documents. Deficiency tracking was manual — the compliance manager spent 20+ hours per week chasing follow-ups. Two AHJ citations for incomplete records in the past year.",
    solution:
      "Deployed FireLog across all field teams with NFPA 25/72-compliant inspection templates. Configured automated deficiency workflows with deadline tracking and escalation alerts. Set up building-level dashboards for the compliance team and client-facing PDF reports.",
    results: [
      "Eliminated 20+ hours per week of manual deficiency tracking",
      "Zero AHJ citations since deployment",
      "Client retention improved — 3 accounts renewed early citing better documentation",
      "Technician productivity increased by 25% (less time on paperwork, more inspections)",
    ],
  },
  {
    company: "Kelley Fire Protection",
    industry: "Fire Sprinkler Inspection & Service",
    scale: "8 technicians, 200+ buildings across Colorado",
    challenge:
      "Owner-operated company that grew faster than its systems could handle. Building inspection schedules were tracked in a personal calendar. NFPA 25 quarterly and annual inspection requirements were frequently missed, leading to compliance gaps and strained client relationships.",
    solution:
      "Implemented FireLog with automated inspection scheduling tied to NFPA frequencies. Built inspection templates for each system type (wet, dry, pre-action, standpipe). Configured email reminders for upcoming inspections and automated overdue alerts.",
    results: [
      "Zero missed inspection deadlines in 12 months (previously missed 15-20 per quarter)",
      "Reduced inspection report delivery time from 1-2 weeks to same-day",
      "Won 12 new accounts — clients cited professional reports as the differentiator",
      "Owner reclaimed 10 hours per week previously spent on scheduling and follow-up",
    ],
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
            Trusted by Fire Protection Contractors{" "}
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              What Our Customers Say
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              Real feedback from fire protection contractors, compliance managers,
              and company owners who switched to FireLog.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeInUp}>
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote size={24} className="text-red-500/30 mb-3" />
                    <p className="text-muted-foreground flex-1 mb-4 leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="border-t pt-4 mt-auto">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-red-500 text-red-500"
                          />
                        ))}
                      </div>
                      <p className="font-semibold mt-2">{t.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {t.title}, {t.company}
                      </p>
                      <p className="text-sm text-muted-foreground/60">{t.location}</p>
                      <p className="text-xs text-red-500 font-medium mt-2">
                        {t.metric}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold text-center mb-4">
              Customer Stories
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              See how fire protection contractors transformed their inspection
              operations with FireLog.
            </p>
          </motion.div>
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <motion.div
                key={cs.company}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="bg-red-500/10 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                        {cs.industry}
                      </span>
                      <span className="bg-slate-100 text-slate-700 text-sm font-medium px-3 py-1 rounded-full">
                        {cs.scale}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{cs.company}</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-1">The Challenge</h4>
                        <p className="text-muted-foreground">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">The Solution</h4>
                        <p className="text-muted-foreground">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Results</h4>
                        <ul className="space-y-2">
                          {cs.results.map((r) => (
                            <li
                              key={r}
                              className="flex items-start gap-2 text-muted-foreground"
                            >
                              <ShieldCheck
                                size={16}
                                className="text-red-500 mt-1 shrink-0"
                              />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stop losing contracts to better-documented competitors.
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Building managers want professional, digital inspection records.
              FireLog helps you deliver them — and win more business.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
              <Link href="/demo">
                Book a Demo <ArrowRight size={18} className="ml-2" />
              </Link>
            </Button>
            <p className="text-sm text-slate-400 mt-4">
              14 days free · No credit card · Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
