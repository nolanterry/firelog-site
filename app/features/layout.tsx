import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features — FireLog",
  description:
    "Explore FireLog's fire inspection software features: mobile-first inspections, offline mode, NFPA templates (10, 25, 72, 80), branded PDF reports, photo documentation, deficiency tracking, e-signatures, and more. $79/mo, unlimited users.",
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
