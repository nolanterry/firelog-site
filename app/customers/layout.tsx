import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "See how fire protection contractors use FireLog to stay NFPA-compliant, pass AHJ inspections, and win more contracts.",
  alternates: { canonical: "/customers" },
};

export default function CustomersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
