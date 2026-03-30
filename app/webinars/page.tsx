"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getUpcomingWebinars, getOnDemandWebinars } from "@/lib/webinar-data";
import Link from "next/link";
import { Calendar, Clock, Play, ArrowRight, Users, Video, CheckCircle, Mail } from "lucide-react";

export default function WebinarsPage() {
  const upcoming = getUpcomingWebinars();
  const onDemand = getOnDemandWebinars();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
      { "@type": "ListItem", position: 2, name: "Webinars", item: "https://firelogai.com/webinars" },
    ],
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 py-20 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Video size={16} /> Expert Webinars
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Fire Protection & Compliance Webinars</h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Free expert-led sessions on NFPA compliance, fire inspection best practices, and growing your fire protection business. Live Q&A included.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-red-400" /> 100% Free</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-red-400" /> Live Q&A</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-red-400" /> On-Demand Replays</span>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        {upcoming.length > 0 && (
          <section className="max-w-5xl mx-auto px-4 py-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Webinars</h2>
            </div>
            <div className="grid gap-6">
              {upcoming.map((webinar) => (
                <Link key={webinar.slug} href={`/webinars/${webinar.slug}`} className="block border border-gray-200 rounded-xl p-6 md:p-8 hover:border-red-500 hover:shadow-lg transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <span className="inline-block px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded mb-3">{webinar.category}</span>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">{webinar.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{webinar.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(webinar.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {webinar.time} · {webinar.duration}</span>
                        <span className="flex items-center gap-1.5"><Users size={14} /> {webinar.speaker.name}, {webinar.speaker.title}</span>
                      </div>
                    </div>
                    <div className="shrink-0">
                      <span className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2.5 rounded-lg font-medium text-sm group-hover:bg-red-700 transition-colors">Register Free <ArrowRight size={16} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* On-Demand Library */}
        {onDemand.length > 0 && (
          <section className="bg-gray-50 py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="flex items-center gap-3 mb-8">
                <Play size={20} className="text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">On-Demand Library</h2>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl">Missed a live session? Watch any of our past webinars on your schedule. All recordings include full Q&A and downloadable resources.</p>
              <div className="grid md:grid-cols-2 gap-6">
                {onDemand.map((webinar) => (
                  <Link key={webinar.slug} href={`/webinars/${webinar.slug}`} className="block bg-white border border-gray-200 rounded-xl p-6 hover:border-red-500 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">{webinar.category}</span>
                      <span className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded flex items-center gap-1"><Play size={10} /> On-Demand</span>
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">{webinar.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{webinar.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center gap-1.5"><Clock size={14} /> {webinar.duration}</span>
                      <span className="text-red-600 font-medium flex items-center gap-1 group-hover:underline">Watch Now <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Email Signup */}
        <section className="py-16">
          <div className="max-w-xl mx-auto px-4 text-center">
            <Mail size={32} className="text-red-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Never Miss a Webinar</h2>
            <p className="text-gray-600 mb-6">Get notified about upcoming fire protection and compliance webinars. No spam — just invites to free expert sessions.</p>
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-green-700 bg-green-50 rounded-lg p-4"><CheckCircle size={20} /> You&apos;re on the list! We&apos;ll email you before our next webinar.</div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) { setSubmitted(true); const existing = JSON.parse(localStorage.getItem("webinar-signups") || "[]"); existing.push({ email, source: "webinars-page", date: new Date().toISOString() }); localStorage.setItem("webinar-signups", JSON.stringify(existing)); } }} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" aria-label="Email address for webinar notifications" />
                <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors whitespace-nowrap">Notify Me</button>
              </form>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-gray-900 to-red-950 py-16 text-center px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Digitize Your Fire Inspections?</h2>
            <p className="text-gray-400 mb-8">FireLog replaces paper inspection forms with NFPA-compliant digital workflows. Mobile forms, branded PDFs, deficiency tracking. Start your free trial today.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/demo" className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">Start Free Trial</Link>
              <Link href="/pricing" className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors">View Pricing</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
