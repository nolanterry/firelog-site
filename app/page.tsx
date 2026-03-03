import Link from "next/link";

const NFPA_TEMPLATES = [
  {
    code: "NFPA 10",
    name: "Fire Extinguishers",
    items: "16 inspection points",
    icon: "🧯",
  },
  {
    code: "NFPA 25",
    name: "Sprinkler Systems",
    items: "28 inspection points",
    icon: "💧",
  },
  {
    code: "NFPA 72",
    name: "Fire Alarm Systems",
    items: "22 inspection points",
    icon: "🔔",
  },
  {
    code: "NFPA 80",
    name: "Fire Doors",
    items: "20 inspection points",
    icon: "🚪",
  },
];

const COMPARISONS = [
  { feature: "Monthly price", us: "$79/mo", them: "$200+/user/mo" },
  { feature: "Users included", us: "Unlimited", them: "Per-user pricing" },
  { feature: "Setup time", us: "5 minutes", them: "Weeks of onboarding" },
  { feature: "Contract required", us: "No — cancel anytime", them: "Annual contracts" },
  { feature: "Mobile-first", us: "✅ Built for phones", them: "⚠️ Tablet/desktop" },
  { feature: "Offline mode", us: "✅ Works in basements", them: "❌ Cloud-only" },
  { feature: "Branded PDF reports", us: "✅ Your logo", them: "✅ Yes" },
  { feature: "Deficiency tracking", us: "✅ Built-in", them: "✅ Yes" },
  { feature: "NFPA templates", us: "✅ Pre-built", them: "✅ Yes" },
  { feature: "Custom checklists", us: "✅ Yes", them: "✅ Yes" },
  { feature: "Best for", us: "1-15 tech shops", them: "50+ tech enterprises" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            <span className="text-xl font-bold text-[#1a1a1a]">FireLog</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            <a href="#features" className="hover:text-[#1a1a1a] transition-colors">Features</a>
            <a href="#templates" className="hover:text-[#1a1a1a] transition-colors">NFPA Templates</a>
            <a href="#pricing" className="hover:text-[#1a1a1a] transition-colors">Pricing</a>
            <a href="#compare" className="hover:text-[#1a1a1a] transition-colors">Compare</a>
          </div>
          <Link
            href="https://app.firelog.pro"
            className="bg-[#dc2626] hover:bg-[#b91c1c] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-50 text-red-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            NFPA 10 · 25 · 72 · 80 — Pre-built templates included
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Ditch the clipboard.<br />
            <span className="text-[#dc2626]">Digital fire inspections</span><br />
            in under 5 minutes.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-xl">
            FireLog replaces paper checklists with mobile-first NFPA inspection forms.
            Tap pass/fail, snap photos, generate branded PDF reports, track deficiencies.
            All from your phone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="https://app.firelog.pro"
              className="bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              Start 14-Day Free Trial →
            </Link>
            <a
              href="#features"
              className="border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition-colors text-center"
            >
              See How It Works
            </a>
          </div>
          <p className="text-sm text-gray-400 mt-4">$79/mo after trial · Unlimited users · No contract</p>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-[#1a1a1a]">19,845</p>
              <p className="text-sm text-gray-500">Fire protection businesses in US</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a1a1a]">$25.9B</p>
              <p className="text-sm text-gray-500">Industry size</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a1a1a]">86%</p>
              <p className="text-sm text-gray-500">Still use paper checklists</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#1a1a1a]">$79/mo</p>
              <p className="text-sm text-gray-500">vs $200+/user competitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Paper inspections are a liability</h2>
          <p className="text-lg text-gray-600">
            Handwritten checklists get lost. Photocopied reports are illegible.
            When the AHJ asks for records, you&apos;re scrambling through filing cabinets.
            One missing report can mean fines, failed audits, or worse.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "📋",
              title: "Paper gets lost",
              desc: "Inspectors lose forms. Office staff can't read handwriting. Reports sit in trucks for weeks before getting filed.",
            },
            {
              icon: "⚠️",
              title: "Compliance risk",
              desc: "Missing documentation means failed audits. AHJs are cracking down. One missing report can shut down a building.",
            },
            {
              icon: "💸",
              title: "Software is overpriced",
              desc: "Inspect Point, Uptick, and ZenFire charge $200+/user/month. That's $2,400/year per tech. Insane for a 5-person shop.",
            },
          ].map((item) => (
            <div key={item.title} className="border border-gray-100 rounded-xl p-6">
              <span className="text-3xl">{item.icon}</span>
              <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[#1a1a1a] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for the field, not the office</h2>
            <p className="text-lg text-gray-400">Every feature designed for inspectors who work on-site, in basements, on rooftops.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "📱",
                title: "Mobile-first",
                desc: "Works on any phone. Large pass/fail buttons you can tap with work gloves. No tablet required.",
              },
              {
                icon: "📡",
                title: "Offline mode",
                desc: "Mechanical rooms and basements have no signal. FireLog works offline and syncs when you're back in range.",
              },
              {
                icon: "📄",
                title: "Branded PDF reports",
                desc: "Professional inspection reports with your company logo. Auto-generated, emailed to building owners in one tap.",
              },
              {
                icon: "📸",
                title: "Photo documentation",
                desc: "Snap deficiency photos right from the checklist. They're attached to the report automatically.",
              },
              {
                icon: "🔍",
                title: "Deficiency tracking",
                desc: "Every failed item becomes a trackable deficiency. Assign, prioritize, set due dates, resolve. Nothing falls through the cracks.",
              },
              {
                icon: "🏢",
                title: "Building management",
                desc: "Every building's inspection history in one place. Know when the next inspection is due. No more spreadsheets.",
              },
              {
                icon: "✍️",
                title: "E-signatures",
                desc: "Building managers sign on your phone. No more printing, signing, scanning, filing. Done on-site.",
              },
              {
                icon: "📊",
                title: "Compliance reports",
                desc: "Pass/fail rates, deficiency trends, inspections per month. Export for audits or AHJ requests.",
              },
              {
                icon: "⚡",
                title: "5-minute inspections",
                desc: "Pre-built NFPA checklists mean you tap through the inspection. No hand-writing 28 line items per sprinkler system.",
              },
            ].map((f) => (
              <div key={f.title} className="border border-white/10 rounded-xl p-6 hover:bg-white/5 transition-colors">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="text-lg font-bold mt-3 mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFPA Templates */}
      <section id="templates" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-built NFPA inspection templates</h2>
          <p className="text-lg text-gray-600">
            Don&apos;t build checklists from scratch. FireLog includes the most common NFPA inspection forms ready to go.
            Customize them or create your own.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NFPA_TEMPLATES.map((t) => (
            <div key={t.code} className="border-2 border-gray-100 rounded-xl p-6 text-center hover:border-red-200 transition-colors">
              <span className="text-4xl">{t.icon}</span>
              <h3 className="text-lg font-bold mt-4">{t.code}</h3>
              <p className="text-gray-600 text-sm mt-1">{t.name}</p>
              <p className="text-red-600 text-xs font-semibold mt-3">{t.items}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-400 mt-8">
          Plus: NFPA 96 (Hood Suppression) · Standpipe · Fire Pump — coming soon.
          Or create your own custom templates.
        </p>
      </section>

      {/* How It Works */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How it works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Select building",
                desc: "Pick the building from your list or add a new one. All inspection history is tied to the building.",
              },
              {
                step: "02",
                title: "Choose inspection type",
                desc: "Fire extinguisher, sprinkler, alarm, door — select the type and the NFPA checklist loads automatically.",
              },
              {
                step: "03",
                title: "Tap through the checklist",
                desc: "Pass, fail, or N/A for each item. Add notes and photos on failures. Large buttons for field use.",
              },
              {
                step: "04",
                title: "Generate report",
                desc: "One tap: branded PDF report generated, deficiencies tracked, emailed to building owner. Done.",
              },
            ].map((s) => (
              <div key={s.step}>
                <span className="text-sm font-mono text-red-500 font-bold">{s.step}</span>
                <h3 className="text-lg font-bold mt-2 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. No per-user fees.</h2>
          <p className="text-lg text-gray-600">
            One plan. Every feature. Unlimited inspectors.
          </p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="border-2 border-[#dc2626] rounded-2xl p-8 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#dc2626] text-white text-xs font-bold px-4 py-1 rounded-full">
              14-DAY FREE TRIAL
            </div>
            <h3 className="text-2xl font-bold mt-4">FireLog Pro</h3>
            <div className="mt-4">
              <span className="text-5xl font-bold">$79</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">or $59/mo billed annually (save $240/yr)</p>
            <ul className="text-left space-y-3 mt-8 text-sm">
              {[
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
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="text-[#dc2626] font-bold mt-0.5">✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href="https://app.firelog.pro"
              className="block mt-8 bg-[#dc2626] hover:bg-[#b91c1c] text-white font-semibold py-4 rounded-lg text-lg transition-colors"
            >
              Start Free Trial →
            </Link>
            <p className="text-xs text-gray-400 mt-3">No credit card required · Cancel anytime</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
          <h3 className="text-lg font-bold text-center mb-4">Compare the cost</h3>
          <div className="grid grid-cols-3 text-sm">
            <div className="font-bold py-3 border-b-2">Team size</div>
            <div className="font-bold py-3 border-b-2 text-center text-[#dc2626]">FireLog</div>
            <div className="font-bold py-3 border-b-2 text-center text-gray-400">Competitors</div>
            {[
              { size: "1 inspector", us: "$79/mo", them: "$200+/mo" },
              { size: "3 inspectors", us: "$79/mo", them: "$600+/mo" },
              { size: "5 inspectors", us: "$79/mo", them: "$1,000+/mo" },
              { size: "10 inspectors", us: "$79/mo", them: "$2,000+/mo" },
            ].map((r) => (
              <>
                <div key={r.size} className="py-3 border-b border-gray-100">{r.size}</div>
                <div className="py-3 border-b border-gray-100 text-center font-bold text-[#dc2626]">{r.us}</div>
                <div className="py-3 border-b border-gray-100 text-center text-gray-400">{r.them}</div>
              </>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            A 5-person shop saves <span className="font-bold text-[#1a1a1a]">$11,052/year</span> switching to FireLog.
          </p>
        </div>
      </section>

      {/* Comparison */}
      <section id="compare" className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            FireLog vs enterprise inspection software
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Inspect Point, Uptick, and ZenFire are built for 50+ tech operations. FireLog is built for the other 90%.
          </p>
          <div className="bg-white rounded-xl border overflow-hidden">
            <div className="grid grid-cols-3 text-sm font-bold border-b">
              <div className="p-4">Feature</div>
              <div className="p-4 text-center text-[#dc2626]">FireLog</div>
              <div className="p-4 text-center text-gray-400">Enterprise Tools</div>
            </div>
            {COMPARISONS.map((c) => (
              <div key={c.feature} className="grid grid-cols-3 text-sm border-b last:border-0">
                <div className="p-4 text-gray-700">{c.feature}</div>
                <div className="p-4 text-center font-medium">{c.us}</div>
                <div className="p-4 text-center text-gray-400">{c.them}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently asked questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Does FireLog work offline?",
              a: "Yes. Mechanical rooms, basements, and rural properties often have no signal. FireLog works offline and syncs your inspections when you reconnect.",
            },
            {
              q: "Can I customize the NFPA checklists?",
              a: "Yes. We include pre-built templates for NFPA 10, 25, 72, and 80. You can modify them or create completely custom checklists for any inspection type.",
            },
            {
              q: "How do branded PDF reports work?",
              a: "Add your company logo and info in Settings. Every inspection report is automatically generated as a professional PDF with your branding. Email it to the building owner in one tap.",
            },
            {
              q: "Is there a contract?",
              a: "No. Month-to-month, cancel anytime. We also offer an annual plan at $59/mo (save $240/year).",
            },
            {
              q: "How many inspectors can I add?",
              a: "Unlimited. $79/mo covers your entire team — 1 inspector or 50. No per-user fees.",
            },
            {
              q: "Can building owners access their reports?",
              a: "Yes. You can email reports directly from the app or share a link. Building owners see a professional branded report with your company info.",
            },
            {
              q: "What about deficiency tracking?",
              a: "Every failed checklist item automatically creates a trackable deficiency. Assign it to a tech, set a priority and due date, track resolution. Nothing gets lost.",
            },
            {
              q: "Do you integrate with other software?",
              a: "QuickBooks integration is available for invoicing. Additional integrations (ServiceTitan, scheduling tools) are on the roadmap.",
            },
          ].map((faq) => (
            <div key={faq.q} className="border-b border-gray-100 pb-6">
              <h3 className="font-bold text-lg mb-2">{faq.q}</h3>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#dc2626] text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stop handwriting inspection reports
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join fire protection contractors who switched from paper to FireLog.
            14-day free trial, no credit card required.
          </p>
          <Link
            href="https://app.firelog.pro"
            className="inline-block bg-white text-[#dc2626] font-bold px-10 py-4 rounded-lg text-lg hover:bg-red-50 transition-colors"
          >
            Start Free Trial →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔥</span>
              <span className="font-bold">FireLog</span>
            </div>
            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#features" className="hover:text-gray-900">Features</a>
              <a href="#templates" className="hover:text-gray-900">Templates</a>
              <a href="#pricing" className="hover:text-gray-900">Pricing</a>
              <a href="mailto:hello@firelog.pro" className="hover:text-gray-900">Contact</a>
            </div>
            <p className="text-sm text-gray-400">© 2026 FireLog. An Arcline product.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
