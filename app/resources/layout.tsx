import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — Fire Inspection Checklists & NFPA Templates | FireLog",
  description:
    "Download free NFPA inspection checklists, fire alarm testing templates, sprinkler system guides, and AHJ preparation resources. Built for fire protection contractors.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources — Fire Inspection Checklists & NFPA Templates",
    description:
      "Download free NFPA inspection checklists, fire alarm testing templates, and sprinkler system guides.",
    url: "https://firelog.app/resources",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
