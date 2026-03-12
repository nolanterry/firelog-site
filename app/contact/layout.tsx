import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — FireLog",
  description:
    "Contact FireLog for questions about our fire inspection software. Email hello@firelog.pro or fill out the form. We respond within one business day. Start your 14-day free trial today.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
