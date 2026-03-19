import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { HelpCenter } from "./help-center";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Help Center — FireLog Knowledge Base",
  description:
    "Get answers to common questions about FireLog fire inspection software. Setup guides, NFPA inspection workflows, deficiency tracking, AHJ compliance, and team management.",
  openGraph: {
    title: "FireLog Help Center",
    description: "Everything you need to run compliant fire inspections with FireLog.",
  },
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section className="py-20 text-center px-4 bg-gradient-to-b from-orange-50 to-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Help Center
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to run compliant fire inspections with FireLog.
            Can&apos;t find what you need? Email{" "}
            <a href="mailto:support@firelog.app" className="text-orange-600 hover:underline">
              support@firelog.app
            </a>
          </p>
        </section>
        <HelpCenter />
        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-white to-orange-50 text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to go digital?</h2>
            <p className="text-muted-foreground mb-8">Replace paper checklists with NFPA-compliant digital inspections. Start your 14-day free trial.</p>
            <Button asChild size="lg">
              <Link href="https://app.firelog.app/sign-up">Start Free Trial</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">No credit card required</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
