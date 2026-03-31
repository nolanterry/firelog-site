import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-study-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Users, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: `${study.companyName} — Customer Story | FireLog`,
    description: study.hero.summary,
    alternates: { canonical: `/customers/${slug}` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
              { "@type": "ListItem", position: 2, name: "Customers", item: "https://firelogai.com/customers" },
              { "@type": "ListItem", position: 3, name: caseStudy.companyName, item: `https://firelogai.com/customers/${slug}` },
            ],
          }),
        }}
      />
      <Header />

      {/* Breadcrumbs */}
      <div className="bg-slate-50 py-4 px-6 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-red-500 transition-colors">Home</Link>
            <ChevronRight size={16} />
            <Link href="/customers" className="hover:text-red-500 transition-colors">Customers</Link>
            <ChevronRight size={16} />
            <span className="text-foreground font-medium">{caseStudy.companyName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{caseStudy.companyName}</h1>
              <div className="text-red-500 font-semibold text-lg mb-4">{caseStudy.industry}</div>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">{caseStudy.hero.summary}</p>
              <div className="bg-slate-50 border border-border rounded-xl p-6">
                <div className="text-3xl font-bold text-red-500 mb-1">{caseStudy.hero.keyMetric}</div>
                <div className="text-muted-foreground">Key Achievement</div>
              </div>
            </div>
            {/* At a Glance */}
            <div className="bg-slate-50 border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                <Building2 size={20} className="text-red-500" />
                At a Glance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Company Size</div>
                  <div>{caseStudy.atAGlance.companySize}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Industry</div>
                  <div>{caseStudy.atAGlance.industry}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Products Used</div>
                  <div>{caseStudy.atAGlance.products.join(", ")}</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Key Results</div>
                  <ul className="space-y-1">
                    {caseStudy.atAGlance.keyResults.map((result, i) => (
                      <li key={i} className="text-sm">• {result}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.challenge.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.challenge.description}</p>
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-semibold text-red-700 mb-4">Key Challenges:</h3>
            <ul className="space-y-2">
              {caseStudy.challenge.painPoints.map((point, i) => (
                <li key={i} className="text-red-800 flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.solution.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.solution.description}</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-800 mb-4">Implementation:</h3>
            <ul className="space-y-2">
              {caseStudy.solution.implementation.map((point, i) => (
                <li key={i} className="text-green-900 flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">{caseStudy.results.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{caseStudy.results.description}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {caseStudy.results.metrics.map((metric, i) => (
              <div key={i} className="bg-white border border-border rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-500 mb-2">{metric.value}</div>
                <div className="text-muted-foreground text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
          {/* Quote */}
          <div className="bg-white border border-border rounded-xl p-8">
            <blockquote className="text-lg italic mb-4 leading-relaxed text-muted-foreground">
              &ldquo;{caseStudy.quote.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white">
                <Users size={20} />
              </div>
              <div>
                <div className="font-semibold">{caseStudy.quote.author}</div>
                <div className="text-muted-foreground text-sm">{caseStudy.quote.title}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Digitize Your Inspections?</h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the fire protection contractors who never miss an inspection or a deficiency again. Try FireLog free for 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.firelogai.com"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Start Your Free Trial <ArrowRight size={20} />
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 border border-slate-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
          <p className="text-sm text-slate-400 mt-4">14 days free · No credit card · Cancel anytime</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
