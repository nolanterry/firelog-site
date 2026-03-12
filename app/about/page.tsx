"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  DollarSign,
  Users,
  Smartphone,
  Target,
  Heart,
  Zap,
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

export default function AboutPage() {
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
              for the other 90%
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Enterprise inspection tools are built for 50+ technician operations with six-figure budgets.
            FireLog is built for the 1–15 person fire protection shops that make up the majority of the industry.
          </motion.p>
        </motion.div>
      </section>

      {/* Problem */}
      <section className="py-24 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-4">
              The problem we solve
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
              Fire protection contractors face an impossible choice.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-8">
                  <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <DollarSign className="size-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Enterprise software is overpriced</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tools like Inspect Point, Uptick, and ZenFire charge $200+ per user, per month.
                    For a 5-person shop, that&apos;s over $12,000/year — just for inspection software.
                    These platforms are built for large operations with dedicated IT teams and training budgets.
                    Small shops are paying enterprise prices for features they&apos;ll never use.
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-8">
                  <div className="size-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <Target className="size-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Paper inspections are a liability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The alternative is paper checklists, clipboards, and filing cabinets. Forms get lost in trucks.
                    Handwriting is illegible. Reports take days to process. When the AHJ asks for records,
                    you&apos;re digging through boxes. One missing report can mean fines, failed audits,
                    or a building that doesn&apos;t get the fire protection it needs.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Our mission
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-4">
              Make professional fire inspection software accessible to every fire protection contractor —
              not just the ones with enterprise budgets.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              We believe that a 3-person fire extinguisher shop deserves the same digital tools as a 100-technician
              operation. Better inspections mean better fire safety for everyone. Cost shouldn&apos;t be the barrier.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#0f172a] text-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
              What we stand for
            </motion.h2>
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Simple pricing",
                  desc: "$79/mo. One price, every feature. No per-user fees, no hidden charges, no annual contracts. Your team of 1 or 15 pays the same.",
                },
                {
                  icon: Users,
                  title: "Unlimited users",
                  desc: "Add every inspector on your team. No calculating per-seat costs. No leaving technicians out because the budget doesn't stretch. Everyone gets access.",
                },
                {
                  icon: Smartphone,
                  title: "Built for the field",
                  desc: "Not the back office. Every screen, every button, every workflow is designed for inspectors on-site — wearing gloves, holding flashlights, working without signal.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="border border-white/10 rounded-2xl p-8 hover:border-red-500/30 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="size-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-5">
                    <value.icon className="size-6 text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Arcline */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="size-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6">
              <Heart className="size-8 text-red-600" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              An Arcline product
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed mb-4">
              FireLog is built by Arcline — we build vertical SaaS for compliance-heavy industries.
              We focus on trades and field services where regulatory requirements are complex but
              the available software is either too expensive or stuck in the past.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
              Fire protection is our first vertical because we saw the gap firsthand: an industry where
              86% of contractors still use paper checklists, and the digital alternatives cost more than
              most small shops can justify.
            </motion.p>
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
              Ready to go digital?
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
                <Link href="https://app.firelog.pro">
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
