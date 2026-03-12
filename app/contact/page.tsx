"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ContactForm } from "./contact-form";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function ContactPage() {
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
            Get in touch
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-muted-foreground"
          >
            Have questions about FireLog? We&apos;d love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8"
          >
            {/* Contact Form */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-8">
                  <h2 className="text-xl font-bold mb-6">Send us a message</h2>
                  <ContactForm />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-6">
                  <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Mail className="size-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Email us</h3>
                  <a
                    href="mailto:hello@firelog.pro"
                    className="text-red-600 text-sm hover:underline"
                  >
                    hello@firelog.pro
                  </a>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/50">
                <CardContent className="p-6">
                  <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                    <Clock className="size-5 text-red-600" />
                  </div>
                  <h3 className="font-semibold mb-1">Response time</h3>
                  <p className="text-muted-foreground text-sm">
                    We respond to every message within one business day.
                  </p>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-2 border-red-200 bg-red-50/50">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Want to try FireLog instead?</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Skip the conversation — start your 14-day free trial and see for yourself.
                  </p>
                  <Button asChild size="sm" className="w-full">
                    <Link href="https://app.firelog.pro">
                      Start Free Trial
                      <ArrowRight className="size-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
