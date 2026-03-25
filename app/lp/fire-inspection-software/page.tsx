import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Shield, AlertTriangle, Clock, FileText, Smartphone, WifiOff, Camera } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Fire Inspection Software | FireLog",
  description: "Replace paper inspection checklists with mobile-first NFPA forms. Branded PDF reports, deficiency tracking, and compliance documentation. $79/mo, unlimited users.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/fire-inspection-software" },
};

const PAIN_POINTS = [
  { icon: Clock, text: "Spending hours transcribing handwritten inspection notes?" },
  { icon: AlertTriangle, text: "Paper records failing during fire marshal audits?" },
  { icon: FileText, text: "No way to track open deficiencies across buildings?" },
];

const FEATURES = [
  "NFPA 10, 13, 25, 72 & 80 inspection templates",
  "Mobile-first — inspect from any phone or tablet",
  "Offline mode for basements and mechanical rooms",
  "Photo evidence with GPS & timestamp",
  "Deficiency tracking with auto-notifications",
  "Branded PDF reports in one tap",
  "Equipment registry with service history",
  "Multi-inspector team management",
];

const SIGNUP_URL = "https://app.firelogai.com";

export default function LPFireInspectionSoftware() {
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
            <Smartphone size={14} /> Mobile-First Fire Inspection
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Paper Inspection Forms Belong in the{" "}
            <span className="text-red-500">Past.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            FireLog replaces clipboards, carbon copies, and filing cabinets with NFPA-compliant
            digital inspections on any device. Reports generate automatically.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-10 py-5 rounded-xl hover:bg-red-600 transition-colors text-lg shadow-lg shadow-red-500/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </Link>
          <p className="mt-4 text-sm text-gray-400">No credit card required · Set up in 10 minutes</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p) => (
              <div key={p.text} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <p.icon className="text-amber-500 mb-3" size={28} />
                <p className="text-sm text-gray-600 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-6xl md:text-7xl font-bold text-red-500 mb-4">65%</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            of fire protection contractors still use paper forms — losing hours per inspection on manual data entry and report creation.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Everything You Need to Inspect, Document & Report
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100">
                <Check className="text-red-500 shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-600">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Fire protection contractors across the country are replacing paper forms
            with mobile inspections. Start your free trial and see the difference.
          </p>
          <Link
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors text-base shadow-lg shadow-red-500/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">$79/mo. Unlimited Users. No Per-Inspector Fees.</h2>
          <p className="text-gray-500 mb-8">
            Enterprise competitors charge <span className="text-gray-900 font-semibold">$150+/user/month</span>.
            FireLog gives you everything for a flat <span className="text-gray-900 font-semibold">$79</span>.
          </p>
          <div className="bg-white border-2 border-red-500 rounded-2xl p-8">
            <p className="text-sm text-red-500 font-semibold mb-2">ALL-IN-ONE</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">$79<span className="text-lg text-gray-400">/mo</span></p>
            <p className="text-sm text-gray-400 mb-1">Unlimited users & inspectors</p>
            <p className="text-xs text-red-500 mb-6">$59/mo billed annually</p>
            <ul className="text-left space-y-2 mb-8">
              {["All NFPA inspection templates", "Unlimited inspections & reports", "Offline mobile inspections", "Photo evidence & GPS", "Deficiency tracking & alerts", "Branded PDF reports"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-red-500 shrink-0" />{f}
                </li>
              ))}
            </ul>
            <Link
              href={SIGNUP_URL}
              className="block w-full bg-red-500 text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-colors text-center"
            >
              Start Free 14-Day Trial
            </Link>
            <p className="text-xs text-gray-400 mt-3">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Next Inspection Is Tomorrow. Be Ready.
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Professional reports, complete compliance records, zero paper. That&apos;s FireLog.
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
