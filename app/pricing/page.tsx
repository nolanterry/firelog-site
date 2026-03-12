"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator } from "lucide-react";
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

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

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

const PRICING_FAQS = [
  {
    q: "Is there a contract?",
    a: "No. FireLog is month-to-month — cancel anytime with no penalties. We also offer an annual plan at $59/mo (save $240/year) but even that has no long-term lock-in.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes. If you're not satisfied within the first 30 days after your trial ends, we'll refund your payment in full. No questions asked.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, Mastercard, American Express) and ACH bank transfers for annual plans. All payments are processed securely through Stripe.",
  },
  {
    q: "How does the 14-day free trial work?",
    a: "Sign up with just your email — no credit card required. You get full access to every feature for 14 days. At the end of the trial, choose monthly or annual billing to continue.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your inspection data is yours. You can export all reports, building records, and inspection history before canceling. After cancellation, your data is retained for 90 days in case you decide to come back.",
  },
  {
    q: "Do you offer discounts for multiple companies?",
    a: "If you manage multiple fire protection companies, contact us for volume pricing. We offer discounts for organizations running 3+ separate FireLog accounts.",
  },
  {
    q: "Is there a per-inspection or per-report fee?",
    a: "No. $79/mo covers unlimited inspections, unlimited reports, and unlimited users. There are no hidden fees, overage charges, or per-transaction costs.",
  },
];

export default function PricingPage() {
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
            Simple pricing.{" "}
            <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
              No per-user fees.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            One plan. Every feature. Unlimited inspectors. $79/mo.
          </motion.p>
        </motion.div>
      </section>

      {/* Pricing Card */}
      <section className="pb-16">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Card className="border-2 border-red-600 rounded-2xl relative overflow-visible shadow-xl shadow-red-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-red-600 text-white hover:bg-red-600 border-0 px-4 py-1 text-xs font-bold">
                  14-DAY FREE TRIAL
                </Badge>
              </div>
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mt-2">FireLog Pro</h2>
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
                  <Link href="https://app.firelog.pro">
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
        </div>
      </section>

      {/* Cost Comparison Table */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-2xl font-bold text-center mb-2">
              Compare the cost
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-muted-foreground mb-8">
              Competitors charge $200+/user/month. FireLog is $79/mo for your entire team.
            </motion.p>
            <motion.div variants={fadeInUp} className="rounded-2xl border overflow-hidden">
              <div className="grid grid-cols-3 text-sm font-bold bg-muted/50">
                <div className="p-4">Team size</div>
                <div className="p-4 text-center text-red-600">FireLog</div>
                <div className="p-4 text-center text-muted-foreground">Competitors</div>
              </div>
              {[
                { size: "1 inspector", us: "$79/mo", them: "$200+/mo", saving: "$1,452/yr" },
                { size: "3 inspectors", us: "$79/mo", them: "$600+/mo", saving: "$6,252/yr" },
                { size: "5 inspectors", us: "$79/mo", them: "$1,000+/mo", saving: "$11,052/yr" },
                { size: "10 inspectors", us: "$79/mo", them: "$2,000+/mo", saving: "$23,052/yr" },
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="bg-muted/50 py-24">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="size-16 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-6">
              <Calculator className="size-8 text-red-600" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              A 5-person shop saves $11,052/year
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Enterprise inspection tools charge $200+ per user, per month. For a 5-inspector team, that&apos;s
              $12,000/year — minimum. FireLog is $948/year. Same features, fraction of the cost.
            </motion.p>
            <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { label: "Enterprise tools", value: "$12,000+/yr", sublabel: "5 users × $200/mo" },
                { label: "FireLog", value: "$948/yr", sublabel: "$79/mo × 12 months" },
                { label: "You save", value: "$11,052/yr", sublabel: "Reinvest in your business" },
              ].map((item) => (
                <Card key={item.label} className="rounded-2xl border-border/50">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-3xl font-bold tracking-tight">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.sublabel}</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

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
            Pricing FAQ
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Accordion type="single" collapsible className="w-full">
              {PRICING_FAQS.map((faq, i) => (
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
              Start your free trial today
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-red-100 mb-8">
              14 days free. No credit card required. Unlimited users from day one.
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
