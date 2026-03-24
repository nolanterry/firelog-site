"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Smartphone, WifiOff, FileText, Camera, Search } from "lucide-react";

const BENEFITS = [
  {
    icon: Smartphone,
    title: "Mobile-first inspections",
    desc: "Complete NFPA checklists on any phone or tablet. Large pass/fail buttons designed for field use with work gloves.",
  },
  {
    icon: WifiOff,
    title: "Works offline",
    desc: "Basements, mechanical rooms, rural sites — no signal required. Syncs automatically when you reconnect.",
  },
  {
    icon: FileText,
    title: "Instant branded reports",
    desc: "Professional PDF reports with your company logo, generated in one tap and emailed to building owners on-site.",
  },
  {
    icon: Camera,
    title: "Photo documentation",
    desc: "Snap deficiency photos directly from the checklist. GPS-tagged and timestamped, attached to the report automatically.",
  },
  {
    icon: Search,
    title: "Deficiency tracking",
    desc: "Every failed item becomes a trackable deficiency with assignments, due dates, and resolution workflows.",
  },
];

export function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Key benefits"
      className="bg-gray-50 py-24"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-2">
          Built for fire protection contractors
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Every feature designed for inspectors who work on-site, not behind a desk.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="size-10 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                <b.icon className="size-5 text-red-600" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
