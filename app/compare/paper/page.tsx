import Link from "next/link";
import type { Metadata } from "next";
import { Flame, Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FireLog vs Paper Inspection Logs — Why Go Digital | FireLog",
  description: "Still using paper for fire inspection reports? Here's what it's costing you in time, compliance risk, and lost revenue.",
};

export default function ComparePaper() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="size-6 text-red-600" />
            <span className="text-xl font-bold tracking-tight">FireLog</span>
          </Link>
          <Button asChild size="sm">
            <Link href="https://app.firelog.pro">Start Free Trial</Link>
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">FireLog vs Paper Inspection Logs</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Paper inspection forms have worked for decades. But they're costing you more than you think — in time, compliance risk, and missed deficiency revenue.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Capability</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">FireLog</th>
                <th className="text-center py-3 pl-4 font-semibold">Paper</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["NFPA-compliant templates", true, false],
                ["Photo documentation", true, false],
                ["Searchable inspection history", true, false],
                ["Instant PDF report delivery", true, false],
                ["Deficiency tracking & follow-up", true, false],
                ["Works without internet", true, true],
                ["E-signatures on-site", true, false],
                ["Audit-ready records", true, false],
                ["Zero technology required", false, true],
                ["Branded professional reports", true, false],
                ["Time per inspection", "15-20 min", "30-45 min"],
              ].map(([feature, firelog, paper], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 pr-4">{feature as string}</td>
                  <td className="text-center py-3 px-4">
                    {firelog === true ? <Check className="size-5 text-green-600 mx-auto" /> : firelog === false ? <X className="size-5 text-gray-300 mx-auto" /> : <span className="text-green-600 font-medium">{firelog as string}</span>}
                  </td>
                  <td className="text-center py-3 pl-4">
                    {paper === true ? <Check className="size-5 text-green-600 mx-auto" /> : paper === false ? <X className="size-5 text-gray-300 mx-auto" /> : <span className="text-muted-foreground">{paper as string}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Real Cost of Paper</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">15-20 min</p>
              <p className="text-sm text-muted-foreground">Extra time per inspection on paper vs. digital</p>
            </div>
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">23%</p>
              <p className="text-sm text-muted-foreground">Of paper inspection records have missing or incomplete fields</p>
            </div>
            <div className="border rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-red-600 mb-2">$0</p>
              <p className="text-sm text-muted-foreground">Revenue from deficiencies you forgot to follow up on</p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">What Happens During an AHJ Audit</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-red-600">With FireLog</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>AHJ requests inspection records for Building X</li>
                <li>Search by address — every inspection appears instantly</li>
                <li>PDF reports with photos, signatures, timestamps, NFPA references</li>
                <li>Deficiency history with resolution dates</li>
                <li>Audit complete in minutes</li>
              </ol>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">With Paper</h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>AHJ requests inspection records for Building X</li>
                <li>Dig through filing cabinets (or boxes in the truck)</li>
                <li>Find 3 of 5 reports — two are missing</li>
                <li>Handwriting is illegible on one form</li>
                <li>No photos, no proof of deficiency follow-up</li>
                <li>AHJ flags multiple compliance gaps</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">The Math: Paper vs. FireLog</h2>
          <div className="border rounded-2xl p-6">
            <p className="text-sm mb-4">Assume 20 inspections/week, 1 tech:</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Paper (hidden costs):</p>
                <ul className="space-y-1">
                  <li>• Forms + printing: ~$50/mo</li>
                  <li>• Extra time (15 min × 20 inspections × 4 weeks): 20 hours/mo</li>
                  <li>• At $50/hr loaded cost: $1,000/mo in lost productivity</li>
                  <li>• Missed deficiency follow-ups: $500-2,000/mo in lost revenue</li>
                  <li className="font-bold pt-2">Hidden cost: $1,550-3,050/mo</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">FireLog:</p>
                <ul className="space-y-1">
                  <li>• Subscription: $49/mo</li>
                  <li>• Time saved: 20 hours/mo</li>
                  <li>• Deficiency tracking catches missed revenue</li>
                  <li>• Audit-ready records (no scrambling)</li>
                  <li className="font-bold pt-2">Total cost: $49/mo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-3">Ready to Ditch Paper?</h2>
          <p className="text-muted-foreground mb-4">
            FireLog is built for fire protection companies making the switch from paper. Pre-built NFPA templates, offline mode (works in basements), and branded PDF reports — all for $49/mo.
          </p>
          <Button asChild>
            <Link href="https://app.firelog.pro" className="inline-flex items-center gap-2">
              Start Your Free Trial <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
