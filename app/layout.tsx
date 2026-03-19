import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://firelog.pro"),
  title: "FireLog — Digital Fire Inspection Reports (NFPA Compliant)",
  description:
    "Replace paper inspection checklists with mobile-first NFPA forms. Branded PDF reports, deficiency tracking, and compliance documentation. $79/mo, unlimited users.",
  openGraph: {
    title: "FireLog — Digital Fire Inspection Reports",
    description:
      "NFPA-compliant inspection software for fire protection contractors. Mobile forms, branded PDFs, deficiency tracking. $79/mo.",
    type: "website",
    siteName: "FireLog",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FireLog",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    url: "https://firelog.pro",
    description:
      "NFPA-compliant digital fire inspection software for fire protection contractors. Mobile forms, branded PDF reports, deficiency tracking, and compliance documentation.",
    offers: {
      "@type": "Offer",
      price: "79",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "93",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FireLog",
    url: "https://firelog.pro",
    logo: "https://firelog.pro/favicon-32.png",
    description:
      "Digital fire inspection software for fire protection contractors. NFPA 10, 25, 72, and 80 compliant.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://firelog.pro/demo",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does FireLog work offline?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Mechanical rooms, basements, and rural properties often have no signal. FireLog works offline and syncs your inspections when you reconnect.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the NFPA checklists?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We include pre-built templates for NFPA 10, 25, 72, and 80. You can modify them or create completely custom checklists for any inspection type.",
        },
      },
      {
        "@type": "Question",
        name: "How do branded PDF reports work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Add your company logo and info in Settings. Every inspection report is automatically generated as a professional PDF with your branding. Email it to the building owner in one tap.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a contract?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Month-to-month, cancel anytime. We also offer an annual plan at $59/mo (save $240/year).",
        },
      },
      {
        "@type": "Question",
        name: "How many inspectors can I add?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlimited. $79/mo covers your entire team — 1 inspector or 50. No per-user fees.",
        },
      },
      {
        "@type": "Question",
        name: "Can building owners access their reports?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can email reports directly from the app or share a link. Building owners see a professional branded report with your company info.",
        },
      },
      {
        "@type": "Question",
        name: "What about deficiency tracking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every failed checklist item automatically creates a trackable deficiency. Assign it to a tech, set a priority and due date, track resolution. Nothing gets lost.",
        },
      },
      {
        "@type": "Question",
        name: "Do you integrate with other software?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "QuickBooks integration is available for invoicing. Additional integrations (ServiceTitan, scheduling tools) are on the roadmap.",
        },
      },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
