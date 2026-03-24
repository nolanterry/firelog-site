"use client";

import { Shield, Lock, Clock, CreditCard, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Lock,
    title: "SSL Encrypted",
    subtitle: "256-bit SSL encryption",
  },
  {
    icon: Shield,
    title: "Money-Back Guarantee",
    subtitle: "30-day full refund",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    subtitle: "Enterprise-grade SLA",
  },
  {
    icon: CreditCard,
    title: "No Card for Trial",
    subtitle: "14 days free, no strings",
  },
  {
    icon: CheckCircle,
    title: "NFPA Compliant",
    subtitle: "NFPA 10, 25, 72, 80 ready",
  },
  {
    icon: XCircle,
    title: "Cancel Anytime",
    subtitle: "No contracts or lock-in",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function TrustBadges() {
  return (
    <section
      aria-label="Security and compliance certifications"
      className="bg-gray-50 border-y border-gray-200 py-16"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center text-sm font-semibold uppercase tracking-wider text-red-600 mb-10"
        >
          Trusted by fire protection contractors nationwide
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {badges.map((badge) => (
            <motion.div
              key={badge.title}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="flex flex-col items-center text-center p-5 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <badge.icon className="h-7 w-7 text-red-600 mb-3" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-gray-900">{badge.title}</span>
              <span className="text-xs text-gray-500 mt-1">{badge.subtitle}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
