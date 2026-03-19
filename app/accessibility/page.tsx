import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — FireLog",
  description: "FireLog is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Accessibility Statement</h1>
          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              FireLog is committed to ensuring digital accessibility for people with disabilities.
              We are continually improving the user experience for everyone and applying the relevant
              accessibility standards.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Conformance Status</h2>
            <p className="text-muted-foreground leading-relaxed">
              We aim to conform to the{" "}
              <a href="https://www.w3.org/TR/WCAG21/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                Web Content Accessibility Guidelines (WCAG) 2.1
              </a>{" "}
              at Level AA. These guidelines explain how to make web content more accessible to people
              with a wide array of disabilities.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Measures Taken</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Skip navigation links for keyboard users</li>
              <li>Visible focus indicators on all interactive elements</li>
              <li>Proper heading hierarchy throughout all pages</li>
              <li>ARIA landmarks and labels for screen reader navigation</li>
              <li>Semantic HTML elements (nav, main, footer, article)</li>
              <li>Form fields with associated labels and required field indicators</li>
              <li>Sufficient color contrast ratios (4.5:1 minimum for text)</li>
              <li>Reduced motion support for users who prefer less animation</li>
              <li>Responsive design that works across all screen sizes</li>
              <li>Alt text on all informative images</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Feedback</h2>
            <p className="text-muted-foreground leading-relaxed">
              We welcome your feedback on the accessibility of FireLog. If you encounter
              accessibility barriers, please let us know:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Email: <a href="mailto:support@firelog.pro" className="text-primary hover:underline">support@firelog.pro</a></li>
              <li>Contact form: <a href="/contact" className="text-primary hover:underline">firelog.pro/contact</a></li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              We try to respond to accessibility feedback within 2 business days.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8">Compatibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              FireLog is designed to be compatible with the following assistive technologies:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Screen readers (VoiceOver, NVDA, JAWS)</li>
              <li>Screen magnification software</li>
              <li>Speech recognition software</li>
              <li>Keyboard-only navigation</li>
            </ul>

            <p className="text-sm text-gray-400 mt-12">
              This statement was last updated on March 19, 2026.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
