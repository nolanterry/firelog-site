"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Clock, CheckCircle, Play, HelpCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with FireLog | Quick Setup Guide",
  description: "Get started with FireLogAI digital fire inspection platform in under 15 minutes. Step-by-step setup guide for NFPA-compliant inspections.",
  canonical: "https://firelogai.com/getting-started",
  openGraph: {
    title: "Getting Started with FireLog | Quick Setup Guide",
    description: "Get started with FireLogAI digital fire inspection platform in under 15 minutes. Step-by-step setup guide for NFPA-compliant inspections.",
    url: "https://firelogai.com/getting-started",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://firelogai.com"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Getting Started",
      "item": "https://firelogai.com/getting-started"
    }
  ]
};

const steps = [
  {
    number: 1,
    title: "Create your account",
    description: "Sign up with your company email and verify your account. No credit card required for the 14-day free trial.",
    time: "2 min",
    tip: "Use your fire department or contractor domain to automatically configure NFPA requirements for your jurisdiction."
  },
  {
    number: 2, 
    title: "Add your buildings/properties",
    description: "Register the buildings you inspect with addresses, occupancy types, and fire protection systems installed.",
    time: "5 min",
    tip: "Import from existing inspection routes or add buildings as you visit them—FireLog works with any workflow."
  },
  {
    number: 3,
    title: "Set up inspection checklists", 
    description: "Choose from pre-loaded NFPA 25/72/96 templates or customize checklists based on local AHJ requirements.",
    time: "3 min",
    tip: "NFPA templates include all required inspection points and frequencies—just select your applicable standards."
  },
  {
    number: 4,
    title: "Assign technicians to routes",
    description: "Set up inspection routes and assign qualified technicians. Each gets mobile access to complete inspections on schedule.",
    time: "3 min",
    tip: "Create recurring routes to automatically schedule quarterly, semi-annual, and annual inspections."
  },
  {
    number: 5,
    title: "Complete your first digital inspection", 
    description: "Use the mobile app to perform a test inspection. Document deficiencies, take photos, and see the digital workflow.",
    time: "4 min",
    tip: "Test the deficiency workflow by creating a sample issue—this shows property owners how transparent the process is."
  },
  {
    number: 6,
    title: "Generate NFPA-compliant reports",
    description: "Export inspection reports for AHJ submission. Reports include all required documentation and technician certifications.",
    time: "1 min",
    tip: "Reports auto-generate with proper NFPA formatting and can be submitted directly to the Authority Having Jurisdiction."
  }
];

const faqs = [
  {
    question: "Can I import existing inspection schedules?",
    answer: "Yes! FireLog can import building databases and inspection schedules from CSV files or other fire inspection software. Our team helps with data migration and route setup."
  },
  {
    question: "How long does setup actually take?",
    answer: "Most fire departments and contractors are inspecting within 15 minutes. Building inventory import varies by route size, but you can start with key properties and expand."
  },
  {
    question: "Do I need NFPA certification knowledge?",
    answer: "Basic fire protection knowledge is helpful, but FireLog is designed for working technicians and inspectors, not engineers. The app guides users through required inspection points."
  },
  {
    question: "What if I need help during setup?",
    answer: "Our fire protection specialists provide live support and can conduct training sessions for your inspection team. Phone and chat support is available during business hours."
  }
];

const SIGNUP_URL = "https://app.firelogai.com/sign-up";

export default function GettingStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
              <Clock size={16} />
              Up and running in under 15 minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started with FireLog in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this step-by-step guide to set up your digital fire inspection system and complete your first NFPA-compliant inspection.
            </p>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Your Setup Checklist
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded">
                        <Clock size={14} />
                        ~{step.time}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    
                    {step.tip && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                        <p className="text-red-800 text-sm">
                          <span className="font-medium">Pro tip:</span> {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You'll Need
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Basic Requirements</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Company email address</li>
                  <li>• Web browser (Chrome, Safari, Firefox)</li>
                  <li>• Mobile device for inspections</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Building Information</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Building addresses</li>
                  <li>• Occupancy classifications</li>
                  <li>• Fire protection systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Optional (But Helpful)</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Existing inspection records</li>
                  <li>• Building floor plans</li>
                  <li>• Technician certifications</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Placeholder */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Watch the Setup Walkthrough
            </h2>
            
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Setup Walkthrough</h3>
                  <p className="text-gray-600">Follow along as we configure digital fire inspections from start to finish</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Setup Questions & Answers
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Inline */}
        <section className="py-20 bg-gradient-to-br from-red-600 via-red-500 to-red-400 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to digitize your fire inspections?
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Join fire departments and contractors using FireLog for faster, more thorough NFPA-compliant inspections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SIGNUP_URL}
                className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
              >
                Book a Demo
              </a>
            </div>
            <p className="text-sm text-red-100 mt-4">14 days free · No credit card · Full feature access</p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}