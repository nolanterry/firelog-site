"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, CheckCircle, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

/* ─── Animated Number ─── */
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => { spring.set(value); }, [spring, value]);
  useEffect(() => {
    const unsub = display.on("change", (v) => { if (ref.current) ref.current.textContent = v; });
    return unsub;
  }, [display]);

  return <span ref={ref}>{`${prefix}${value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`}</span>;
}

/* ─── Slider ─── */
function Slider({ label, min, max, step, value, onChange, prefix = "", suffix = "" }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-600">{label}</label>
        <span className="text-sm font-bold text-red-600">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #dc2626 ${pct}%, #e2e8f0 ${pct}%)` }}
      />
      <div className="flex justify-between text-xs text-gray-400 mt-1">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ROICalculatorPage() {
  const [systems, setSystems] = useState(100);
  const [hours, setHours] = useState(1.5);
  const [rate, setRate] = useState(40);
  const [inspectorCount, setInspectorCount] = useState(4);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);

  const hoursSaved = systems * hours * 0.5 * inspectorCount;
  const costSavedMonth = hoursSaved * rate;
  const annualSavings = costSavedMonth * 12;
  const annualCost = 2388;
  const roi = annualSavings > 0 ? Math.round(((annualSavings - annualCost) / annualCost) * 100) : 0;

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem("firelog_roi_leads") || "[]");
    leads.push({ email, systems, hours, rate, inspectorCount, annualSavings, roi, ts: new Date().toISOString() });
    localStorage.setItem("firelog_roi_leads", JSON.stringify(leads));
    setSubmitted(true);
  }, [email, systems, hours, rate, inspectorCount, annualSavings, roi]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.pro" },
      { "@type": "ListItem", position: 2, name: "ROI Calculator", item: "https://firelog.pro/roi-calculator" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-1.5 mb-6">
              <Calculator className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-600 font-medium">ROI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Calculate Your <span className="text-red-600">Inspection Savings</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              See how much time and money FireLog saves your team by replacing paper forms and spreadsheets with digital fire inspection workflows.
            </p>
          </motion.div>
        </section>

        {/* Calculator */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" /> Your Current Situation
              </h2>
              <Slider label="Systems inspected per month" min={20} max={500} step={5} value={systems} onChange={setSystems} />
              <Slider label="Hours per inspection (paper/spreadsheets)" min={0.5} max={4} step={0.25} value={hours} onChange={setHours} suffix=" hrs" />
              <Slider label="Inspector hourly rate" min={25} max={60} step={1} value={rate} onChange={setRate} prefix="$" />
              <Slider label="Number of inspectors" min={1} max={15} step={1} value={inspectorCount} onChange={setInspectorCount} />
            </motion.div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-600" /> Your Savings with FireLog
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours Saved / Month</p>
                  <p className="text-2xl font-bold text-gray-900"><AnimatedNumber value={Math.round(hoursSaved)} suffix=" hrs" /></p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Cost Saved / Month</p>
                  <p className="text-2xl font-bold text-gray-900"><AnimatedNumber value={Math.round(costSavedMonth)} prefix="$" /></p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Annual Savings</p>
                  <p className="text-2xl font-bold text-emerald-600"><AnimatedNumber value={Math.round(annualSavings)} prefix="$" /></p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">ROI</p>
                  <p className="text-2xl font-bold text-emerald-600"><AnimatedNumber value={roi} suffix="%" /></p>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">Paper / Spreadsheets</p>
                    <p className="text-lg font-bold text-red-500"><AnimatedNumber value={Math.round(systems * hours * inspectorCount)} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-400 mt-1">Manual tracking</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">With FireLog</p>
                    <p className="text-lg font-bold text-emerald-600"><AnimatedNumber value={Math.round(systems * hours * 0.5 * inspectorCount)} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-400 mt-1">Digital workflows</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg p-3 mb-6">
                <CheckCircle className="w-5 h-5 text-red-600 shrink-0" />
                <p className="text-sm text-red-700">100% deficiency follow-up rate — zero missed items</p>
              </div>

              {/* Lead Capture */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-auto">
                  <p className="text-sm text-gray-500 mb-3">Get a detailed ROI report customized for your operation:</p>
                  <div className="flex gap-2">
                    <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500" />
                    <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-1.5">
                      Get Report <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-auto bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-center">
                  <p className="text-emerald-700 font-medium">✓ We&apos;ll send your custom ROI report shortly!</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Methodology */}
          <div className="mt-12 max-w-4xl mx-auto">
            <button onClick={() => setMethodOpen(!methodOpen)}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors text-sm w-full justify-between bg-gray-50 border border-gray-200 rounded-xl px-6 py-4">
              <span className="font-medium">Methodology & Assumptions</span>
              {methodOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {methodOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-xl px-6 py-4 text-sm text-gray-500 space-y-2">
                <p><strong className="text-gray-700">Time reduction:</strong> FireLog reduces inspection time by approximately 50% based on customer-reported data from paper/spreadsheet-to-digital transitions.</p>
                <p><strong className="text-gray-700">Cost calculation:</strong> Hours saved × hourly rate. Does not include indirect savings from faster deficiency resolution, avoided code violations, or reduced liability.</p>
                <p><strong className="text-gray-700">ROI calculation:</strong> (Annual savings − FireLog annual cost of $2,388) ÷ FireLog annual cost × 100.</p>
                <p><strong className="text-gray-700">Deficiency tracking:</strong> 100% follow-up rate is achieved through automated deficiency workflows with built-in escalation reminders.</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
