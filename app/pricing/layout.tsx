import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — FireLog",
  description:
    "FireLog pricing: $79/mo for unlimited users and inspectors. All features included. 14-day free trial, no credit card required, no contract. Save $11,052/year vs enterprise competitors.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
