import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, AlertTriangle, Droplets, DoorOpen, Bell, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "NFPA Compliance Inspection Software | FireLog",
  description: "Built-in NFPA 10, 13, 25, 72, and 80 inspection checklists. Digital forms, deficiency tracking, and audit-ready reports for fire protection contractors.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/nfpa-compliance-software" },
};

const NFPA_CODES = [
  { code: "NFPA 10", name: "Fire Extinguishers", points: "16 inspection points", icon: Shield },
  { code: "NFPA 13", name: "Sprinkler Installation", points: "22 inspection points", icon: Droplets },
  { code: "NFPA 25", name: "Water-Based Systems", points: "28 inspection points", icon: Droplets },
  { code: "NFPA 72", name: "Fire Alarm Systems", points: "34 inspection points", icon: Bell },
  { code: "NFPA 80", name: "Fire Doors", points: "12 inspection points", icon: DoorOpen },
];

const COMPLIANCE_STATS = [
  { stat: "$10,000+", text: "average fine for fire code violations with inadequate documentation" },
  { stat: "28%", text: "of fire inspection failures stem from incomplete or missing records" },
  { stat: "3x", text: "faster report generation with digital checklists vs. handwritten forms" },
];

const FEATURES = [
  { title: "NFPA-Compliant Templates", desc: "Pre-built inspection checklists for NFPA 10, 13, 25, 72, and 80 — every required point, every required frequency." },
  { title: "Deficiency Tracking", desc: "Flag deficiencies during inspection. Track remediation status, set due dates, and auto-notify building owners." },
  { title: "Inspection Scheduling", desc: "Set monthly, quarterly, semi-annual, and annual inspection schedules per NFPA requirements. Never miss a cycle." },
  { title: "Equipment Registry", desc: "Track every extinguisher, sprinkler riser, alarm panel, and fire door across all your buildings. Full service history." },
  { title: "Audit-Ready Reports", desc: "One-tap PDF reports with inspection results, photos, deficiency lists, and compliance status. AHJ-ready format." },
  { title: "Offline Inspections", desc: "Full functionality without internet. Sync automatically when you reconnect — critical for basements and mechanical rooms." },
  { title: "Inspector Assignment", desc: "Assign inspectors to buildings and routes. Track who inspected what, when, with digital signatures." },
  { title: "Building Owner Portal", desc: "Give building owners read-only access to their inspection records and deficiency status. Reduces phone calls by 80%." },
];

const SIGNUP_URL = "https://app.firelog.pro";

export default function LPNFPAComplianceSoftware() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-gray-700">
      {/* Minimal header */}
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Shield className="text-red-500" size={20} strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Fire<span className="text-red-500">Log</span>
            </span>
          </div>
          <Link href={SIGNUP_URL} className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors">
            Sign In →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-50 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-red-200">
            <AlertTriangle size={14} /> NFPA Requires Documented Inspection Records
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            NFPA Compliance Is Not Optional.{" "}
            <span className="text-red-500">Your Documentation Shouldn&apos;t Be Either.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            FireLog has every NFPA inspection checklist built in — 10, 13, 25, 72, and 80.
            Inspect on your phone, track deficiencies, and generate audit-ready reports automatically.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-10 py-5 rounded-xl hover:bg-red-600 transition-colors text-lg shadow-lg shadow-red-500/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </Link>
          <p className="mt-4 text-sm text-gray-400">No credit card required · All NFPA codes included</p>
        </div>
      </section>

      {/* NFPA Codes */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-8">Built-In NFPA Inspection Templates</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {NFPA_CODES.map((c) => (
              <div key={c.code} className="text-center p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-red-50 text-red-500 mb-2">
                  <c.icon size={18} />
                </div>
                <p className="text-sm font-bold text-gray-900">{c.code}</p>
                <p className="text-xs text-gray-500">{c.name}</p>
                <p className="text-xs text-red-500 mt-1">{c.points}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {COMPLIANCE_STATS.map((s) => (
              <div key={s.stat} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-red-500 mb-3">{s.stat}</p>
                <p className="text-sm text-gray-500">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Compliance Features Built for Fire Protection
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-5 rounded-lg bg-white border border-gray-100">
                <Check className="text-red-500 shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Compliant Without the Paperwork
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Every NFPA code. Every inspection point. Every report — generated automatically.
            Try FireLog free for 14 days.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors text-base shadow-lg shadow-red-500/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">One Code Violation Costs More Than 10 Years of FireLog</h2>
          <p className="text-gray-500 mb-8">
            Average fire code fine: <span className="text-gray-900 font-semibold">$10,000+</span>.
            FireLog: <span className="text-gray-900 font-semibold">$79/month</span>. Do the math.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex-1 min-w-[200px] max-w-[250px]">
              <p className="text-xs text-gray-400 font-semibold mb-2">ENTERPRISE COMPETITORS</p>
              <p className="text-3xl font-bold text-red-500">$150+</p>
              <p className="text-xs text-gray-400 mt-1">per user per month</p>
            </div>
            <div className="bg-white border-2 border-red-500 rounded-xl p-6 flex-1 min-w-[200px] max-w-[250px]">
              <p className="text-xs text-red-500 font-semibold mb-2">FIRELOG</p>
              <p className="text-3xl font-bold text-gray-900">$79<span className="text-sm text-gray-400">/mo</span></p>
              <p className="text-xs text-red-500 mt-1">unlimited users & inspectors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Fire Marshal Won&apos;t Accept &ldquo;We Lost the Paperwork&rdquo;
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Digital records. Automatic reports. Complete compliance. That&apos;s what FireLog delivers.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-10 py-5 rounded-xl hover:bg-red-600 transition-colors text-lg shadow-lg shadow-red-500/25"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <p>© 2026 FireLog. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gray-500">Privacy</Link>
            <Link href="/terms" className="hover:text-gray-500">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
