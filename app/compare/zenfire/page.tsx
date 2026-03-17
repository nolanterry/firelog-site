import Link from "next/link";
import type { Metadata } from "next";
import { Flame, Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FireLog vs ZenFire — Fire Inspection Software Comparison | FireLog",
  description: "Compare FireLog and ZenFire (ZenTrades) for fire inspection software. Features, pricing, and which is better for small fire protection companies.",
  alternates: { canonical: "/compare/zenfire" },
};

export default function CompareZenFire() {
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
        <h1 className="text-4xl font-bold tracking-tight mb-4">FireLog vs ZenFire</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Both platforms handle fire inspections — but they're built for very different companies. Here's an honest comparison.
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold">Feature</th>
                <th className="text-center py-3 px-4 font-semibold text-red-600">FireLog</th>
                <th className="text-center py-3 pl-4 font-semibold">ZenFire</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["NFPA Inspection Templates", true, true],
                ["Mobile-First Design", true, true],
                ["Offline Mode", true, false],
                ["Branded PDF Reports", true, true],
                ["Deficiency Tracking", true, true],
                ["E-Signatures On-Site", true, false],
                ["Transparent Pricing", true, false],
                ["AI Features", false, true],
                ["Inventory Management", false, true],
                ["Dispatching & Scheduling", false, true],
                ["No Demo Required to Start", true, false],
                ["14-Day Free Trial", true, false],
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

        {/* Pricing */}
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
                <li>• Cancel anytime</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-2">ZenFire</h3>
              <p className="text-3xl font-bold mb-1">Custom<span className="text-base font-normal text-muted-foreground"> quote</span></p>
              <p className="text-sm text-muted-foreground mb-3">No public pricing. Requires a demo call.</p>
              <ul className="space-y-1 text-sm">
                <li>• Estimated $100-300+/mo</li>
                <li>• Pricing varies by company size</li>
                <li>• Annual contracts likely</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to Choose */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">When to Choose Each</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3 text-red-600">Choose FireLog if:</h3>
              <ul className="space-y-2 text-sm">
                <li>✅ You're a 1-15 tech operation</li>
                <li>✅ You need NFPA compliance without the complexity</li>
                <li>✅ You want transparent, affordable pricing</li>
                <li>✅ Your techs work in basements and mechanical rooms (offline mode)</li>
                <li>✅ You want to start today, not after a sales demo</li>
              </ul>
            </div>
            <div className="border rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-3">Choose ZenFire if:</h3>
              <ul className="space-y-2 text-sm">
                <li>• You need full field service management (dispatching, inventory)</li>
                <li>• You're a larger operation (15+ techs)</li>
                <li>• You want AI-powered inspection features</li>
                <li>• You need multi-trade support (electrical, HVAC, etc.)</li>
                <li>• Budget isn't a primary concern</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-3">The Bottom Line</h2>
          <p className="text-muted-foreground mb-4">
            ZenFire is a full field service platform that happens to do fire inspections. FireLog is purpose-built for fire inspection compliance — and nothing else. If fire inspections are your core business and you want something simple, affordable, and NFPA-compliant, FireLog is the better fit. If you need dispatching, inventory, and multi-trade support, ZenFire offers more breadth.
          </p>
          <Button asChild>
            <Link href="https://app.firelog.pro" className="inline-flex items-center gap-2">
              Try FireLog Free for 14 Days <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
