"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "We used to lose paper inspection forms constantly. Now my techs tap through the checklist on their phone and the branded PDF hits the building owner's inbox before they leave the parking lot.",
    name: "Steve Brennan",
    title: "Owner",
    company: "Brennan Fire Protection",
  },
  {
    quote: "The AHJ asked for 18 months of sprinkler inspection records. I exported them in two clicks. Before FireLog, that would've been a week of digging through filing cabinets.",
    name: "Lisa Nakamura",
    title: "Compliance Manager",
    company: "Pacific Fire Services",
  },
  {
    quote: "At $79/month for unlimited users, FireLog costs less than what I was paying per tech with our old software. The savings across my 8-person team are insane.",
    name: "Ray Delgado",
    title: "Operations Manager",
    company: "Delgado Fire & Safety",
  },
  {
    quote: "Offline mode is a lifesaver. Half my inspections are in basements and mechanical rooms with zero signal. FireLog works perfectly and syncs when I'm back in range.",
    name: "Karen Whitfield",
    title: "Fire Protection Inspector",
    company: "Guardian Compliance Group",
  },
  {
    quote: "Deficiency tracking changed our business. We used to lose follow-ups constantly. Now every failed item is tracked, assigned, and resolved — nothing falls through the cracks.",
    name: "Anthony Russo",
    title: "Service Manager",
    company: "Northeast Fire Solutions",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Customer testimonials"
      className="bg-gray-50 py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Trusted by fire protection contractors
        </h2>
        <p className="text-muted-foreground mb-12">
          Hear from inspectors who ditched paper and never looked back.
        </p>

        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              aria-live="polite"
              className="w-full"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-red-600 fill-red-600" size={20} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute -top-6 -left-2 text-6xl leading-none text-red-600/15 font-serif select-none">&ldquo;</span>
                <p className="text-lg md:text-xl text-foreground leading-relaxed italic px-6">
                  {TESTIMONIALS[current].quote}
                </p>
                <span className="absolute -bottom-4 -right-2 text-6xl leading-none text-red-600/15 font-serif select-none">&rdquo;</span>
              </div>

              {/* Attribution */}
              <div className="mt-8">
                <p className="font-semibold text-foreground">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-muted-foreground">
                  {TESTIMONIALS[current].title}, {TESTIMONIALS[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-red-600 w-7" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
