"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, ShieldCheck, FileCheck, MessageSquarePlus } from "lucide-react";
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

      {/* Customer Stories Coming Soon */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <MessageSquarePlus size={48} className="mx-auto mb-6 text-red-500/60" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-4">
              Customer Stories Coming Soon
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-muted-foreground mb-8 max-w-xl mx-auto">
              We&apos;re collecting stories from real fire protection contractors
              who use FireLog every day. Check back soon — or be the first to share yours.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white" asChild>
                <Link href="/demo">
                  Share Your Story <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to ditch the clipboard?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Digital inspections, branded reports, deficiency tracking — all from your phone.
              Try FireLog free for 14 days.
            </p>
            <Button
              size="lg"
              className="bg-red-500 hover:bg-red-600 text-white"
              asChild
            >
              <Link href="https://app.firelog.pro">
                Start Your Free Trial <ArrowRight size={18} className="ml-2" />
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
