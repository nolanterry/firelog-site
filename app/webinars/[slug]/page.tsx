"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { WEBINARS, getWebinarBySlug } from "@/lib/webinar-data";
import Link from "next/link";
import { Calendar, Clock, Users, ArrowLeft, CheckCircle, Play, ArrowRight } from "lucide-react";

export default function WebinarDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const webinar = getWebinarBySlug(slug);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [registered, setRegistered] = useState(false);

  if (!webinar) {
    return (<><Header /><main id="main-content" className="min-h-[60vh] flex items-center justify-center"><div className="text-center"><h1 className="text-2xl font-bold text-gray-900 mb-2">Webinar Not Found</h1><p className="text-gray-600 mb-6">This webinar may have been removed or the link is incorrect.</p><Link href="/webinars" className="text-red-600 hover:underline font-medium">← Back to Webinars</Link></div></main><Footer /></>);
  }

  const isUpcoming = webinar.status === "upcoming";
  const relatedWebinars = WEBINARS.filter((w) => w.slug !== webinar.slug).slice(0, 2);

  const structuredData = [
    { "@context": "https://schema.org", "@type": "Event", name: webinar.title, description: webinar.description, startDate: webinar.date, eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode", eventStatus: isUpcoming ? "https://schema.org/EventScheduled" : "https://schema.org/EventMovedOnline", location: { "@type": "VirtualLocation", url: `https://firelogai.com/webinars/${webinar.slug}` }, organizer: { "@type": "Organization", name: "FireLog", url: "https://firelogai.com" }, performer: { "@type": "Person", name: webinar.speaker.name, jobTitle: webinar.speaker.title }, isAccessibleForFree: true, offers: { "@type": "Offer", price: "0", priceCurrency: "USD", availability: "https://schema.org/InStock" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
      { "@type": "ListItem", position: 2, name: "Webinars", item: "https://firelogai.com/webinars" },
      { "@type": "ListItem", position: 3, name: webinar.title, item: `https://firelogai.com/webinars/${webinar.slug}` },
    ] },
  ];

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link><span>/</span>
              <Link href="/webinars" className="hover:text-gray-700">Webinars</Link><span>/</span>
              <span className="text-gray-900 font-medium line-clamp-1">{webinar.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          <Link href="/webinars" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-red-600 mb-8 transition-colors"><ArrowLeft size={14} /> Back to Webinars</Link>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 bg-red-50 text-red-700 text-xs font-medium rounded">{webinar.category}</span>
                <span className={`px-2.5 py-1 text-xs font-medium rounded flex items-center gap-1 ${isUpcoming ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>
                  {isUpcoming ? <><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Upcoming</> : <><Play size={10} /> On-Demand</>}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{webinar.title}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(webinar.date).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {webinar.time} · {webinar.duration}</span>
              </div>
              <div className="prose prose-lg max-w-none mb-10"><h2>About This Webinar</h2><p>{webinar.longDescription}</p></div>
              <div className="mb-10">
                <h2 className="text-xl font-bold text-gray-900 mb-4">What You&apos;ll Learn</h2>
                <div className="space-y-3">
                  {webinar.topics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-3"><CheckCircle size={18} className="text-red-600 mt-0.5 shrink-0" /><span className="text-gray-700">{topic}</span></div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 mb-10">
                <h2 className="text-lg font-bold text-gray-900 mb-3">Your Speaker</h2>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center"><Users size={24} className="text-red-600" /></div>
                  <div><p className="font-semibold text-gray-900">{webinar.speaker.name}</p><p className="text-sm text-gray-600">{webinar.speaker.title}, {webinar.speaker.company}</p></div>
                </div>
              </div>
              {relatedWebinars.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">More Webinars</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {relatedWebinars.map((w) => (
                      <Link key={w.slug} href={`/webinars/${w.slug}`} className="block border border-gray-200 rounded-lg p-5 hover:border-red-500 hover:shadow-md transition-all group">
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-2 ${w.status === "upcoming" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"}`}>{w.status === "upcoming" ? "Upcoming" : "On-Demand"}</span>
                        <h3 className="font-medium text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 text-sm">{w.title}</h3>
                        <p className="text-xs text-gray-500 mt-2 flex items-center gap-1"><Clock size={12} /> {w.duration}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{isUpcoming ? "Register for Free" : "Watch On-Demand"}</h3>
                <p className="text-sm text-gray-600 mb-5">{isUpcoming ? "Save your spot — we'll send a reminder before the live session." : "Enter your email to access the full recording and resources."}</p>
                {registered ? (
                  <div className="text-center py-6"><CheckCircle size={40} className="text-green-600 mx-auto mb-3" /><p className="font-semibold text-gray-900 mb-1">{isUpcoming ? "You're Registered!" : "Check Your Email!"}</p><p className="text-sm text-gray-600">{isUpcoming ? "We'll email you a reminder and the join link before the session." : "We've sent you a link to watch the recording."}</p></div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); if (email) { setRegistered(true); const existing = JSON.parse(localStorage.getItem("webinar-registrations") || "[]"); existing.push({ email, name, company, webinar: webinar.slug, date: new Date().toISOString() }); localStorage.setItem("webinar-registrations", JSON.stringify(existing)); } }} className="space-y-3">
                    <div><label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label><input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" /></div>
                    <div><label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email *</label><input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@company.com" className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" /></div>
                    <div><label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label><input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder="National Fire Protection Co." className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" /></div>
                    <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">{isUpcoming ? <>Register Free <ArrowRight size={16} /></> : <>Watch Now <Play size={16} /></>}</button>
                    <p className="text-xs text-gray-400 text-center">No credit card required. We respect your privacy.</p>
                  </form>
                )}
                <div className="mt-6 pt-6 border-t border-gray-100 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Clock size={14} className="text-gray-400" /> {webinar.duration}</div>
                  <div className="flex items-center gap-2"><Users size={14} className="text-gray-400" /> {webinar.speaker.name}</div>
                  <div className="flex items-center gap-2"><CheckCircle size={14} className="text-gray-400" /> Includes Q&A + resources</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
