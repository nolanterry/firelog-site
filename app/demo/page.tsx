import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, Smartphone, FileText, Shield, BarChart3, ArrowRight, Flame, WifiOff } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book a Demo — See FireLog in Action",
  description: "Schedule a personalized demo of FireLog fire inspection software. See NFPA-compliant digital checklists, deficiency tracking, and branded PDF reports.",
};

const DEMO_INCLUDES = [
  { icon: Smartphone, title: "Mobile Inspection Flow", desc: "See how technicians complete NFPA inspections on a phone or tablet — including offline mode for basements and mechanical rooms." },
  { icon: Shield, title: "NFPA Compliance Templates", desc: "Walk through built-in templates for NFPA 10, 13, 25, 72, and 80 — pre-loaded with the right inspection points." },
  { icon: FileText, title: "Branded PDF Reports", desc: "Generate professional, branded inspection reports with photos, deficiency notes, and compliance status in one click." },
  { icon: BarChart3, title: "Deficiency Tracking", desc: "See how FireLog flags deficiencies, assigns follow-ups, and tracks resolution — so nothing falls through the cracks." },
];

const STATS = [
  { value: "65%", label: "Of fire protection contractors still use paper forms" },
  { value: "3x", label: "Faster inspection reports with FireLog" },
  { value: "$10K+", label: "Average NFPA compliance violation fine" },
];

const FAQS = [
  { q: "How long is the demo?", a: "About 20 minutes. We customize it based on your inspection types — fire extinguishers, sprinklers, alarms, or all of the above." },
  { q: "Who should attend?", a: "Your service manager, lead inspector, or whoever manages inspection workflows and compliance documentation." },
  { q: "Which NFPA codes does it cover?", a: "FireLog includes templates for NFPA 10 (extinguishers), 13 (sprinklers), 25 (water-based systems), 72 (fire alarms), and 80 (fire doors)." },
  { q: "Does it work offline?", a: "Yes — FireLog works in basements, mechanical rooms, and anywhere without signal. Data syncs when you reconnect." },
  { q: "Can I try it after the demo?", a: "Absolutely. Every demo includes a 14-day free trial with unlimited inspections." },
];

export default function DemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-white py-20 px-4 border-b border-gray-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar size={16} />
                  Free Personalized Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  Paper Inspection Forms Belong in the{" "}
                  <span className="text-red-500">Past</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  Get a personalized walkthrough of FireLog tailored to your fire protection business.
                  See how digital NFPA checklists, deficiency tracking, and branded reports
                  work for contractors like you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors text-lg shadow-lg shadow-red-500/25"
                  >
                    Book Your Demo <ArrowRight size={20} />
                  </a>
                  <Link
                    href="https://app.firelog.pro"
                    className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Or Start Free Trial
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                  <div className="space-y-4">
                    {STATS.map((s) => (
                      <div key={s.label} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
                        <span className="text-2xl font-bold text-red-500 min-w-[80px]">{s.value}</span>
                        <span className="text-gray-600 text-sm">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll see */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">What You&apos;ll See in Your Demo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every demo is customized to your NFPA codes and inspection workflow.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {DEMO_INCLUDES.map((item) => (
                <div key={item.title} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                    <item.icon className="text-red-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="book" className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">Book Your Demo</h2>
            <p className="text-center text-gray-600 mb-10">Fill out the form and we&apos;ll schedule a time that works for you.</p>
            <form
              action="https://formspree.io/f/xpwzgvkd"
              method="POST"
              className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10 space-y-6"
            >
              <input type="hidden" name="_subject" value="FireLog Demo Request" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Steve Martinez" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="steve@fireprotection.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all" placeholder="Patriot Fire Protection" />
                </div>
                <div>
                  <label htmlFor="inspectors" className="block text-sm font-medium text-gray-700 mb-2">Number of Inspectors</label>
                  <select id="inspectors" name="inspector_count" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all">
                    <option value="">Select range</option>
                    <option value="1-5">1–5 inspectors</option>
                    <option value="6-15">6–15 inspectors</option>
                    <option value="16-30">16–30 inspectors</option>
                    <option value="30+">30+ inspectors</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Inspection Types</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Fire Extinguishers (NFPA 10)", "Sprinklers (NFPA 13/25)", "Fire Alarms (NFPA 72)", "Fire Doors (NFPA 80)", "Kitchen Hoods (NFPA 96)"].map((type) => (
                    <label key={type} className="flex items-center gap-2 p-3 bg-white border border-gray-200 rounded-lg hover:border-red-300 cursor-pointer transition-colors">
                      <input type="checkbox" name="inspection_types" value={type} className="rounded border-gray-300 text-red-500 focus:ring-red-500" />
                      <span className="text-xs font-medium text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Anything specific you&apos;d like to see?</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all resize-none" placeholder="E.g., offline inspections, deficiency tracking, multi-location management..." />
              </div>
              <button type="submit" className="w-full bg-red-500 text-white font-bold py-4 rounded-xl hover:bg-red-600 transition-colors text-lg shadow-lg shadow-red-500/25">
                Request Demo
              </button>
              <p className="text-center text-sm text-gray-500">We&apos;ll respond within 1 business day. No spam, ever.</p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Demo FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gray-900 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Go Digital?</h2>
            <p className="text-gray-400 mb-8">20 minutes. Tailored to your NFPA codes and team. No pressure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="inline-flex items-center justify-center gap-2 bg-red-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-600 transition-colors">
                Book Your Demo <Calendar size={20} />
              </a>
              <Link href="https://app.firelog.pro" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Start Free Trial Instead
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
