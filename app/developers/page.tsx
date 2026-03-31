import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API — FireLog REST API Documentation",
  description:
    "Integrate fire inspection data into your systems with the FireLog REST API. Endpoints for inspections, deficiencies, equipment registries, NFPA compliance reports, and proposal generation.",
  alternates: { canonical: "/developers" },
  openGraph: {
    title: "Developer API — FireLog REST API Documentation",
    description:
      "RESTful API for fire inspection management. Programmatic access to inspections, deficiency tracking, NFPA compliance, and service proposals.",
    url: "https://firelogai.com/developers",
  },
};

const ENDPOINTS = [
  {
    category: "Inspections",
    icon: "🔥",
    description: "Create, retrieve, and manage fire protection inspection records",
    endpoints: [
      { method: "GET", path: "/api/v1/inspections", desc: "List inspections with status, type, and date filtering" },
      { method: "GET", path: "/api/v1/inspections/:id", desc: "Retrieve full inspection with checklist results" },
      { method: "POST", path: "/api/v1/inspections", desc: "Create a new inspection record" },
      { method: "PATCH", path: "/api/v1/inspections/:id", desc: "Update inspection details or checklist items" },
      { method: "GET", path: "/api/v1/inspections/:id/pdf", desc: "Download branded PDF inspection report" },
    ],
  },
  {
    category: "Deficiencies & Proposals",
    icon: "⚠️",
    description: "Track deficiencies and auto-generate service proposals",
    endpoints: [
      { method: "GET", path: "/api/v1/deficiencies", desc: "List all open and resolved deficiencies" },
      { method: "POST", path: "/api/v1/deficiencies/:id/resolve", desc: "Mark deficiency as resolved with evidence" },
      { method: "POST", path: "/api/v1/deficiencies/:id/proposal", desc: "Auto-generate service proposal from deficiency" },
      { method: "GET", path: "/api/v1/proposals", desc: "List all generated proposals" },
    ],
  },
  {
    category: "Equipment Registry",
    icon: "🧯",
    description: "Manage fire protection systems and equipment inventory",
    endpoints: [
      { method: "GET", path: "/api/v1/equipment", desc: "List all registered fire protection systems" },
      { method: "POST", path: "/api/v1/equipment", desc: "Register a new system (sprinkler, alarm, extinguisher, etc.)" },
      { method: "GET", path: "/api/v1/equipment/:id/history", desc: "Full inspection history for a system" },
      { method: "GET", path: "/api/v1/equipment/:id/schedule", desc: "Upcoming inspection schedule (NFPA frequency)" },
    ],
  },
  {
    category: "NFPA Compliance",
    icon: "📊",
    description: "Generate compliance reports aligned to NFPA 25, 72, and 96",
    endpoints: [
      { method: "GET", path: "/api/v1/reports/compliance", desc: "Facility-wide NFPA compliance status report" },
      { method: "GET", path: "/api/v1/reports/ahj", desc: "AHJ-formatted inspection documentation" },
      { method: "GET", path: "/api/v1/reports/due", desc: "Equipment due for inspection by NFPA schedule" },
      { method: "GET", path: "/api/v1/audit-logs", desc: "Immutable change log for all inspection records" },
    ],
  },
  {
    category: "Webhooks",
    icon: "🔔",
    description: "Real-time notifications for inspection events",
    endpoints: [
      { method: "POST", path: "/api/v1/webhooks", desc: "Register a webhook endpoint" },
      { method: "GET", path: "/api/v1/webhooks", desc: "List registered webhooks" },
      { method: "DELETE", path: "/api/v1/webhooks/:id", desc: "Remove a webhook subscription" },
    ],
  },
];

const WEBHOOK_EVENTS = [
  { event: "inspection.completed", desc: "Fired when a technician submits a completed inspection" },
  { event: "inspection.deficiency_found", desc: "Fired when a deficiency is logged during inspection" },
  { event: "deficiency.resolved", desc: "Fired when a deficiency is marked resolved" },
  { event: "proposal.generated", desc: "Fired when a service proposal is auto-generated from deficiencies" },
  { event: "equipment.inspection_due", desc: "Fired when equipment reaches its NFPA inspection due date" },
  { event: "equipment.overdue", desc: "Fired when equipment is past its NFPA inspection deadline" },
  { event: "report.ahj_submitted", desc: "Fired when an AHJ compliance report is generated" },
];

const CODE_EXAMPLE = `curl -X GET "https://api.firelogai.com/v1/inspections?type=sprinkler&status=completed&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

const RESPONSE_EXAMPLE = `{
  "data": [
    {
      "id": "insp_5mK3pR7x",
      "type": "sprinkler_quarterly",
      "nfpa_standard": "NFPA 25",
      "status": "completed",
      "result": "deficiencies_found",
      "facility": {
        "name": "Riverside Office Complex",
        "address": "2100 River Rd, Suite 400, Atlanta, GA 30339"
      },
      "technician": {
        "name": "James Porter",
        "license": "FPE-GA-4821"
      },
      "checklist_items": 34,
      "pass": 31,
      "fail": 3,
      "deficiencies": [
        {
          "id": "def_8xR2nP",
          "item": "Spare sprinkler cabinet",
          "severity": "minor",
          "description": "Cabinet missing 2 spare heads (NFPA 25 §5.4.1.5)"
        }
      ],
      "completed_at": "2026-03-29T14:20:00Z",
      "pdf_url": "/v1/inspections/insp_5mK3pR7x/pdf"
    }
  ],
  "pagination": {
    "total": 847,
    "page": 1,
    "per_page": 10,
    "has_more": true
  }
}`;

const CREATE_EXAMPLE = `curl -X POST "https://api.firelogai.com/v1/inspections" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "equipment_id": "eq_7nR4vL",
    "type": "sprinkler_quarterly",
    "nfpa_standard": "nfpa_25",
    "technician_id": "usr_jP2x8r",
    "facility_id": "fac_3kT9mQ",
    "scheduled_date": "2026-04-01"
  }'`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "FireLog Developer API Documentation",
  description: "REST API documentation for integrating FireLog fire inspection data into your service management systems.",
  publisher: { "@type": "Organization", name: "FireLog", url: "https://firelogai.com" },
  url: "https://firelogai.com/developers",
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://firelogai.com" },
    { "@type": "ListItem", position: 2, name: "Developer API", item: "https://firelogai.com/developers" },
  ],
};

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-100 text-green-700",
    POST: "bg-blue-100 text-blue-700",
    PATCH: "bg-yellow-100 text-yellow-700",
    DELETE: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-block text-xs font-mono font-bold px-2 py-0.5 rounded ${colors[method] || "bg-gray-100 text-gray-700"}`}>
      {method}
    </span>
  );
}

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-red-400 bg-red-500/10 px-3 py-1 rounded-full mb-4">
            Developer API
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Build with FireLog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Integrate fire inspection data into your service management, dispatch, or facility management systems.
            RESTful API with NFPA-aligned data models, webhook events, and branded PDF generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/demo" className="bg-red-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
              Request API Access
            </a>
            <a href="#endpoints" className="border border-gray-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Endpoints
            </a>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🔑", title: "API Key Auth", desc: "Bearer token authentication scoped to your company. Separate read/write keys for office staff and field technicians." },
              { icon: "📦", title: "JSON REST API", desc: "Standard RESTful endpoints. Filter by inspection type (sprinkler, alarm, extinguisher, kitchen hood), NFPA standard, facility, and date." },
              { icon: "⚡", title: "Webhooks", desc: "Real-time notifications for completed inspections, deficiencies, overdue equipment, and auto-generated service proposals." },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Authentication */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API requests require a Bearer token. Generate API keys from your FireLog dashboard under{" "}
              <strong>Settings → API Keys</strong>. Keys are scoped to your company. We recommend read-only keys
              for reporting/BI integrations and write keys for field app or dispatch system connections.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre">
{`Authorization: Bearer fl_live_a1b2c3d4e5f6...`}
              </pre>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Keep API keys secure.</strong> Never expose keys in mobile app bundles.
                Rotate keys immediately if compromised. All API access is logged in the audit trail.
              </p>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Minute</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Day</th>
                    <th className="text-left px-4 py-3 font-semibold">Webhooks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">10,000</td>
                    <td className="px-4 py-3">5 endpoints</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Enterprise</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-3">100,000</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Endpoints */}
          <div id="endpoints" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">API Endpoints</h2>
            <div className="space-y-10">
              {ENDPOINTS.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{group.icon}</span>
                    <h3 className="text-xl font-semibold">{group.category}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    {group.endpoints.map((ep, i) => (
                      <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                        <MethodBadge method={ep.method} />
                        <code className="text-sm font-mono text-gray-800 shrink-0">{ep.path}</code>
                        <span className="text-sm text-gray-500 ml-auto hidden sm:block">{ep.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">List completed sprinkler inspections</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CODE_EXAMPLE}</pre>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Response</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-blue-300 font-mono whitespace-pre">{RESPONSE_EXAMPLE}</pre>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Schedule a new inspection</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CREATE_EXAMPLE}</pre>
              </div>
            </div>
          </div>

          {/* Webhook Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Webhook Events</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to inspection lifecycle events. Payloads are signed with HMAC-SHA256.
              Failed deliveries are retried with exponential backoff (3 attempts).
            </p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {WEBHOOK_EVENTS.map((ev, i) => (
                <div key={ev.event} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <code className="text-sm font-mono text-red-600 font-medium shrink-0">{ev.event}</code>
                  <span className="text-sm text-gray-500">{ev.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SDKs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">SDKs &amp; Libraries</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { lang: "Node.js / TypeScript", pkg: "npm install @firelog/sdk", status: "Coming Soon" },
                { lang: "Python", pkg: "pip install firelog", status: "Coming Soon" },
                { lang: "C# / .NET", pkg: "dotnet add package FireLog.SDK", status: "Coming Soon" },
              ].map((sdk) => (
                <div key={sdk.lang} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold mb-1">{sdk.lang}</h3>
                  <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded block mb-3">{sdk.pkg}</code>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {sdk.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to integrate?</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              API access is available on all paid plans. Connect your dispatch or facility management system to FireLog today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/demo" className="bg-red-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                Request API Access
              </a>
              <a href="/contact" className="border border-gray-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Talk to Engineering
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
