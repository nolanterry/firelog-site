import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — FireLog",
  description: "FireLog privacy policy — how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="py-20 bg-white">
        <article className="max-w-3xl mx-auto px-4 prose prose-gray">
          <h1>Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: March 15, 2026</p>

          <p>
            FireLog (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the FireLog
            fire inspection compliance platform. This Privacy Policy explains how we collect, use,
            disclose, and safeguard your information when you use our website and application.
          </p>

          <h2>1. Information We Collect</h2>
          <h3>Information You Provide</h3>
          <ul>
            <li><strong>Account information:</strong> Name, email address, company name, phone number, and job title when you create an account or request a demo.</li>
            <li><strong>Inspection data:</strong> Fire and life safety inspection records, photos, deficiency notes, sprinkler/alarm/extinguisher data, building details, and compliance documentation you enter into the platform.</li>
            <li><strong>Payment information:</strong> Billing address and payment method details, processed securely by our payment processor (Stripe). We do not store full credit card numbers.</li>
            <li><strong>Communications:</strong> Messages you send through our contact form, support tickets, or email correspondence.</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li><strong>Usage data:</strong> Pages visited, features used, inspection completion patterns, and session duration.</li>
            <li><strong>Device information:</strong> Browser type, operating system, device type, screen resolution, and IP address.</li>
            <li><strong>Cookies and similar technologies:</strong> We use essential cookies for authentication and optional analytics cookies to improve our service.</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <ul>
            <li>Provide, maintain, and improve the FireLog platform</li>
            <li>Process transactions and send related information (receipts, invoices)</li>
            <li>Send technical notices, updates, security alerts, and support messages</li>
            <li>Send inspection due-date reminders and deficiency follow-up alerts</li>
            <li>Respond to your comments, questions, and support requests</li>
            <li>Monitor and analyze usage trends to improve user experience</li>
            <li>Detect, prevent, and address technical issues and fraud</li>
            <li>Send marketing communications (with your consent; you can opt out anytime)</li>
          </ul>

          <h2>3. Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service providers:</strong> Third-party vendors who assist in operating our platform (hosting, payment processing, email delivery, analytics).</li>
            <li><strong>Legal compliance:</strong> When required by law, regulation, or legal process.</li>
            <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>With your consent:</strong> When you explicitly authorize sharing.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit (TLS 1.2+),
            encryption at rest, access controls, and regular security assessments. Inspection data and
            compliance records are stored in SOC 2-compliant infrastructure.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your account information and inspection data for as long as your account is active
            or as needed to provide services. Inspection records may be retained longer to support NFPA
            compliance documentation requirements. You may request deletion of your data at any time,
            subject to legal retention requirements.
          </p>

          <h2>6. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Export your data in a portable format</li>
            <li>Withdraw consent for marketing communications</li>
          </ul>

          <h2>7. Children&apos;s Privacy</h2>
          <p>
            FireLog is not intended for use by individuals under 18 years of age. We do not
            knowingly collect personal information from children.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of material changes
            by posting the updated policy on this page and updating the &quot;Last updated&quot; date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or your data, contact us at:{" "}
            <a href="mailto:support@firelog.pro">support@firelog.pro</a>
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
