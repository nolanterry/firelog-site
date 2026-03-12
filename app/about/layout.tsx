import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FireLog",
  description:
    "FireLog makes fire inspection software accessible to small fire protection shops. An Arcline product — building vertical SaaS for compliance-heavy industries. $79/mo, unlimited users, built for the field.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
