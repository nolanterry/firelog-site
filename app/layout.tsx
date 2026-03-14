import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FireLog — Digital Fire Inspection Reports (NFPA Compliant)",
  description:
    "Replace paper inspection checklists with mobile-first NFPA forms. Branded PDF reports, deficiency tracking, and compliance documentation. $79/mo, unlimited users.",
  openGraph: {
    title: "FireLog — Digital Fire Inspection Reports",
    description:
      "NFPA-compliant inspection software for fire protection contractors. Mobile forms, branded PDFs, deficiency tracking. $79/mo.",
    type: "website",
  },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
