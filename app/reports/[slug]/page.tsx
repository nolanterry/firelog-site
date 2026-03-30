"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { REPORTS } from "@/lib/report-data";
import Link from "next/link";
import { FileText, Download, ArrowLeft, CheckCircle, Clock, BookOpen, Lock } from "lucide-react";

export default function ReportDetailPage() {
  const { slug } = useParams();
  const report = REPORTS.find((r) => r.slug === slug);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  if (!report) {
    return (<><Header /><main id="main-content" className="py-20 text-center"><h1 className="text-2xl font-bold text-gray-900 mb-4">Report Not Found</h1><Link href="/reports" className="text-red-700 hover:underline">← Back to Reports</Link></main><Footer /></>);
  }

  const structuredData = [
    { "@context": "https://schema.org", "@type": "Report", name: report.title, description: report.description, datePublished: report.publishDate, publisher: { "@type": "Organization", name: "FireLog", url: "https://firelog.app" }, url: `https://firelog.app/reports/${report.slug}` },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.app" },
      { "@type": "ListItem", position: 2, name: "Industry Reports", item: "https://firelog.app/reports" },
      { "@type": "ListItem", position: 3, name: report.title, item: `https://firelog.app/reports/${report.slug}` },
    ]},
  ];

  const otherReports = REPORTS.filter((r) => r.slug !== report.slug);

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="bg-gradient-to-b from-red-50 to-white py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/reports" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-red-700 mb-6"><ArrowLeft size={14} /> Back to Reports</Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-100 text-red-700 font-medium text-xs px-3 py-1 rounded-full">{report.category}</span>
              <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> {report.readTime}</span>
              <span className="flex items-center gap-1 text-sm text-gray-500"><BookOpen size={14} /> {report.pages} pages</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{report.title}</h1>
            <p className="text-xl text-gray-600">{report.subtitle}</p>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto md:flex gap-12">
            <div className="flex-1">
              <div className="grid grid-cols-3 gap-4 mb-10">
                {report.stats.map((stat, i) => (<div key={i} className="bg-red-50 rounded-lg p-4 text-center"><div className="text-2xl font-bold text-red-700">{stat.value}</div><div className="text-sm text-gray-600">{stat.label}</div></div>))}
              </div>
              <div className="mb-10"><h2 className="text-xl font-bold text-gray-900 mb-4">About This Report</h2><p className="text-gray-600 leading-relaxed">{report.description}</p></div>
              <div className="mb-10"><h2 className="text-xl font-bold text-gray-900 mb-4">Key Findings</h2><div className="space-y-3">{report.highlights.map((h, i) => (<div key={i} className="flex gap-3"><CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" /><p className="text-gray-700">{h}</p></div>))}</div></div>
              <div className="mb-10"><h2 className="text-xl font-bold text-gray-900 mb-4">What's Inside</h2><div className="space-y-4">{report.sections.map((s, i) => (<div key={i} className="border-l-2 border-red-300 pl-4"><h3 className="font-semibold text-gray-900">Chapter {i + 1}: {s.title}</h3><p className="text-sm text-gray-600 mt-1">{s.description}</p></div>))}</div></div>
              {otherReports.length > 0 && (<div><h2 className="text-xl font-bold text-gray-900 mb-4">More Reports</h2><div className="space-y-3">{otherReports.map((r) => (<Link key={r.slug} href={`/reports/${r.slug}`} className="block p-4 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors"><div className="flex items-center justify-between"><div><h3 className="font-semibold text-gray-900">{r.title}</h3><p className="text-sm text-gray-500 mt-1">{r.category} • {r.pages} pages</p></div><FileText size={20} className="text-gray-400" /></div></Link>))}</div></div>)}
            </div>

            <div className="md:w-80 mt-10 md:mt-0">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                {unlocked ? (
                  <div className="text-center"><CheckCircle size={48} className="mx-auto text-green-500 mb-4" /><h3 className="text-lg font-bold text-gray-900 mb-2">Report Unlocked!</h3><p className="text-sm text-gray-600 mb-4">The full report will be sent to your email shortly.</p><a href="https://app.firelog.app/sign-up" className="block mt-4 bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-lg transition-colors">Try FireLog Free</a></div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-4"><Lock size={18} className="text-red-600" /><h3 className="text-lg font-bold text-gray-900">Download Free Report</h3></div>
                    <p className="text-sm text-gray-600 mb-6">Enter your details for instant access to the full {report.pages}-page report.</p>
                    <form onSubmit={(e) => { e.preventDefault(); if (email && name) { const leads = JSON.parse(localStorage.getItem("firelog-report-leads") || "[]"); leads.push({ name, email, company, report: report.slug, date: new Date().toISOString() }); localStorage.setItem("firelog-report-leads", JSON.stringify(leads)); setUnlocked(true); } }} className="space-y-4">
                      <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label><input id="name" type="text" required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500" placeholder="Dave Wilson" /></div>
                      <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label><input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500" placeholder="dave@fireprotection.com" /></div>
                      <div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-500" placeholder="Metro Fire Protection" /></div>
                      <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"><Download size={16} /> Download Report</button>
                      <p className="text-xs text-gray-400 text-center">No spam. Unsubscribe anytime.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
