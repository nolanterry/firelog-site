import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect FireLog with Your Business Tools",
  description:
    "FireLog integrates with QuickBooks, ServiceTitan, BuildOps, Salesforce, Google Workspace, DocuSign, Slack, NFPA LiNK, and more. Sync inspection data with the tools your fire protection business already uses.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations — Connect FireLog with Your Business Tools",
    description:
      "FireLog integrates with QuickBooks, ServiceTitan, BuildOps, Google Workspace, and more.",
    url: "https://firelogai.com/integrations",
  },
};

const INTEGRATIONS = [
  { emoji: "💰", name: "QuickBooks", description: "Sync inspection billing, service invoices, and customer records to QuickBooks automatically.", status: "available" as const },
  { emoji: "📊", name: "Xero", description: "Export inspection revenue and expense data to Xero for streamlined fire protection accounting.", status: "coming-soon" as const },
  { emoji: "🔧", name: "ServiceTitan", description: "Sync job schedules, customer data, and inspection records between FireLog and ServiceTitan.", status: "coming-soon" as const },
  { emoji: "🏢", name: "BuildOps", description: "Push inspection results and deficiency reports into BuildOps for commercial service management.", status: "coming-soon" as const },
  { emoji: "📈", name: "Salesforce", description: "Track inspection contracts, renewal pipelines, and customer relationships in Salesforce CRM.", status: "coming-soon" as const },
  { emoji: "📧", name: "Google Workspace", description: "Share inspection reports via Gmail, store PDFs in Drive, sync scheduling with Google Calendar.", status: "available" as const },
  { emoji: "💼", name: "Microsoft 365", description: "Integrate with Outlook, SharePoint, and Teams for seamless report distribution to building owners.", status: "coming-soon" as const },
  { emoji: "✍️", name: "DocuSign", description: "Collect e-signatures on inspection reports, service agreements, and deficiency acknowledgments.", status: "available" as const },
  { emoji: "💬", name: "Slack", description: "Get instant notifications for completed inspections, failed items, and upcoming schedule deadlines.", status: "coming-soon" as const },
  { emoji: "🔥", name: "NFPA LiNK", description: "Access NFPA codes and standards directly from FireLog to verify inspection requirements in the field.", status: "coming-soon" as const },
  { emoji: "🏛️", name: "AHJ Registry", description: "Look up Authority Having Jurisdiction requirements and submission processes for any location.", status: "coming-soon" as const },
  { emoji: "⚡", name: "Zapier", description: "Connect FireLog to 5,000+ apps with custom Zapier workflows and triggers.", status: "coming-soon" as const },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="py-20 text-center px-4 bg-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Integrations
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect FireLog with the tools your fire protection business already uses. Sync inspection data, automate billing, and eliminate double data entry.
          </p>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-red-200 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{integration.emoji}</span>
                  {integration.status === "available" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-red-600 py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t see your tool?
          </h2>
          <p className="text-red-100 mb-6 max-w-xl mx-auto">
            We&apos;re building new integrations all the time. Let us know what your business needs and we&apos;ll prioritize it.
          </p>
          <a
            href="mailto:support@firelogai.com?subject=Integration%20Request"
            className="inline-block bg-white text-red-600 font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Request an Integration
          </a>
        </section>

        {/* JSON-LD BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
                { "@type": "ListItem", position: 2, name: "Integrations", item: "https://firelogai.com/integrations" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
