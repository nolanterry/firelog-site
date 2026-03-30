"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { REPORTS } from "@/lib/report-data";
import Link from "next/link";
import { FileText, Download, ArrowRight, BarChart3, BookOpen, Shield, Mail, CheckCircle } from "lucide-react";

export default function ReportsPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelog.app" },
      { "@type": "ListItem", position: 2, name: "Industry Reports", item: "https://firelog.app/reports" },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <section className="bg-gradient-to-b from-red-50 to-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-red-100 text-red-700 font-medium text-sm px-4 py-1.5 rounded-full mb-6">
              Industry Research
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Fire Protection Industry Reports & Whitepapers</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Data-driven insights on fire inspection technology, NFPA compliance, and business growth for fire protection contractors. Free to download.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              {REPORTS.map((report, i) => (
                <Link key={report.slug} href={`/reports/${report.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-red-300 transition-all">
                  <div className="md:flex">
                    <div className="md:w-64 bg-gradient-to-br from-gray-900 to-gray-800 p-8 flex flex-col items-center justify-center text-white">
                      {i === 0 && <BarChart3 size={48} className="mb-4 opacity-80" />}
                      {i === 1 && <FileText size={48} className="mb-4 opacity-80" />}
                      {i === 2 && <Shield size={48} className="mb-4 opacity-80" />}
                      <span className="text-sm font-medium text-red-400">{report.category}</span>
                      <span className="text-xs text-gray-400 mt-1">{report.pages} pages • {report.readTime}</span>
                    </div>
                    <div className="flex-1 p-8">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2"><BookOpen size={14} /><span>{report.publishDate}</span></div>
                      <h2 className="text-xl font-bold text-gray-900 group-hover:text-red-700 transition-colors mb-3">{report.title}</h2>
                      <p className="text-gray-600 mb-4">{report.subtitle}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {report.highlights.slice(0, 3).map((h, j) => (
                          <span key={j} className="inline-flex items-center gap-1 text-xs bg-gray-50 text-gray-700 px-2.5 py-1 rounded-full">
                            <CheckCircle size={10} className="text-green-500" />{h.length > 60 ? h.slice(0, 60) + "…" : h}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-red-700 font-medium text-sm group-hover:gap-2 transition-all">Read Report <ArrowRight size={14} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-2xl mx-auto text-center">
            <Mail size={32} className="mx-auto mb-4 text-red-400" />
            <h2 className="text-2xl font-bold mb-3">Get New Reports First</h2>
            <p className="text-gray-400 mb-6">Subscribe for new fire protection industry research, NFPA compliance updates, and business growth insights.</p>
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-green-400"><CheckCircle size={20} /><span>You're subscribed!</span></div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) { const existing = JSON.parse(localStorage.getItem("firelog-report-subscribers") || "[]"); if (!existing.includes(email)) { existing.push(email); localStorage.setItem("firelog-report-subscribers", JSON.stringify(existing)); } setSubmitted(true); } }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500" aria-label="Email address" />
                <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-colors">Subscribe</button>
              </form>
            )}
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-b from-white to-red-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Modernize Fire Inspections?</h2>
            <p className="text-lg text-gray-600 mb-8">Join fire protection contractors using FireLog to streamline NFPA compliance, track deficiencies, and grow revenue. Start your free 14-day trial.</p>
            <a href="https://app.firelog.app/sign-up" className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">Start Free Trial <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
