import Link from "next/link";
import type { Metadata } from "next";
import { Flame, Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FireLog vs ServiceTrade — Fire Inspection Software Comparison | FireLog",
  description: "Compare FireLog and ServiceTrade for fire inspection software. Features, pricing, and which is better for small fire protection companies.",
  alternates: { canonical: "/compare/servicetrade" },
};

export default function CompareServiceTrade() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/80">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Flame className="size-6 text-red-600" />
            <span className="text-xl font-bold tracking-tight">FireLog</span>
          </Link>
          <Button asChild size="sm">
            <Link href="https://app.firelogai.com">Start Free Trial</Link>
          </Button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">FireLog vs ServiceTrade</h1>
        <p className="text-lg text-muted-foreground mb-12">
          ServiceTrade is the market leader in commercial fire protection software. But is it the right fit for your shop? Here's how it compares to FireLog.
        </p>

        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">FireLog</th>
                <th className="text-center py-3 pl-4 font-semibold">ServiceTrade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["NFPA Inspection Templates", true, true],
                ["Mobile App", true, true],
                ["Offline Mode", true, false],
                ["Branded PDF Reports", true, true],
                ["Deficiency Tracking", true, true],
                ["E-Signatures", true, true],
                ["Customer Portal", false, true],
                ["Quote & Invoice Management", false, true],
                ["Dispatching & Routing", false, true],
                ["Equipment Asset Tracking", true, true],
                ["Photo Documentation", true, true],
                ["Transparent Pricing", true, false],
                ["No Long-Term Contract", true, false],
                ["Self-Serve Signup", true, false],
              ].map(([feature, firelog, competitor], i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 pr-4">{feature as string}</td>
                  <td className="text-center py-3 px-4">
                    {firelog ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
                  </td>
                  <td className="text-center py-3 pl-4">
                    {competitor ? <Check className="size-5 text-green-600 mx-auto" /> : <X className="size-5 text-gray-300 mx-auto" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-red-200 rounded-2xl p-6 bg-red-50/30">
              <h3 className="font-bold text-lg mb-2 text-red-600">FireLog</h3>
              <p className="text-3xl font-bold mb-1">$49<span className="text-base font-normal text-muted-foreground">/mo</span></p>
              <p className="text-sm text-muted-foreground mb-3">Flat rate. Unlimited inspections. No per-user fees.</p>
              <ul className="space-y-1 text-sm">
                <li>• 14-day free trial</li>
                <li>• No credit card required</li>
                <li>• Month-to-month</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">ServiceTrade</h3>
              <p className="text-3xl font-bold mb-1">$89+<span className="text-base font-normal text-muted-foreground">/user/mo</span></p>
              <p className="text-sm text-muted-foreground mb-3">Per-user pricing. Scales with team size.</p>
              <ul className="space-y-1 text-sm">
                <li>• Select ($89/user), Premium ($139/user), Enterprise (custom)</li>
                <li>• Annual contracts standard</li>
                <li>• Implementation fees apply</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            For a 5-person team: FireLog = $49/mo total. ServiceTrade Select = $445/mo. That's $4,752/year in savings.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When to Choose Each</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-red-600">Choose FireLog if:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ You're a 1-15 tech operation focused on inspections</li>
                <li>✅ You need NFPA compliance without paying enterprise prices</li>
                <li>✅ You want to start in minutes, not weeks</li>
                <li>✅ Your techs work in basements and signal-dead zones (offline mode)</li>
                <li>✅ You don't need dispatching or customer portals yet</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Choose ServiceTrade if:</h3>
              <ul className="space-y-2 text-sm">
                <li>• You're a 15+ tech operation with complex routing needs</li>
                <li>• You need customer-facing portals and online quote approval</li>
                <li>• You do service + inspections and need one platform for both</li>
                <li>• You want deep integrations with accounting software</li>
                <li>• You have budget for implementation and per-user pricing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-3">The Bottom Line</h2>
          <p className="text-muted-foreground mb-4">
            ServiceTrade is the gold standard for large commercial fire protection companies. But most of its features — dispatching, customer portals, complex routing — are overkill for shops under 15 techs. If your core need is NFPA-compliant inspection documentation at a price that doesn't eat your margins, FireLog delivers that for a fraction of the cost.
          </p>
          <Button asChild>
            <Link href="https://app.firelogai.com" className="inline-flex items-center gap-2">
              Try FireLog Free for 14 Days <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
