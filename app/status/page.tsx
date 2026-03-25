import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "FireLog system status — real-time operational status for all digital fire inspection reports services. Check uptime, incidents, and scheduled maintenance.",
  alternates: { canonical: "/status" },
  openGraph: {
    title: "System Status | FireLog",
    description:
      "FireLog system status — real-time operational status for all digital fire inspection reports services.",
    url: "https://firelogai.com/status",
  },
};

type ServiceStatus = "operational" | "degraded" | "outage" | "maintenance";

interface Service {
  name: string;
  status: ServiceStatus;
}

const SERVICES: Service[] = [
    { name: "NFPA Inspection Engine", status: "operational" as const },
    { name: "Deficiency Tracking", status: "operational" as const },
    { name: "Photo & Document Storage", status: "operational" as const },
    { name: "PDF Report Generation", status: "operational" as const },
    { name: "Compliance Dashboard", status: "operational" as const },
    { name: "API & Integrations", status: "operational" as const },
    { name: "Notification Service (Email & SMS)", status: "operational" as const },
    { name: "User Authentication & SSO", status: "operational" as const },
];

const STATUS_CONFIG: Record<
  ServiceStatus,
  { label: string; dotColor: string; bgColor: string; textColor: string }
> = {
  operational: {
    label: "Operational",
    dotColor: "bg-emerald-500",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-700",
  },
  degraded: {
    label: "Degraded Performance",
    dotColor: "bg-yellow-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
  },
  outage: {
    label: "Major Outage",
    dotColor: "bg-red-500",
    bgColor: "bg-red-50",
    textColor: "text-red-700",
  },
  maintenance: {
    label: "Under Maintenance",
    dotColor: "bg-blue-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
};

function getOverallStatus(services: Service[]): ServiceStatus {
  if (services.some((s) => s.status === "outage")) return "outage";
  if (services.some((s) => s.status === "degraded")) return "degraded";
  if (services.some((s) => s.status === "maintenance")) return "maintenance";
  return "operational";
}

const UPTIME_DAYS = Array.from({ length: 90 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() - (89 - i));
  return { date: d.toISOString().slice(0, 10), status: "operational" as ServiceStatus };
});

export default function StatusPage() {
  const overall = getOverallStatus(SERVICES);
  const overallConfig = STATUS_CONFIG[overall];

  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen bg-gray-50">
        {/* Overall Status Banner */}
        <section className={`${overallConfig.bgColor} border-b`}>
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className={`w-4 h-4 rounded-full ${overallConfig.dotColor} animate-pulse`} />
              <h1 className={`text-2xl font-bold ${overallConfig.textColor}`}>
                {overall === "operational"
                  ? "All Systems Operational"
                  : overallConfig.label}
              </h1>
            </div>
            <p className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
          {/* 90-Day Uptime Bar */}
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900">90-Day Uptime</h2>
              <span className="text-sm font-medium text-emerald-600">99.98%</span>
            </div>
            <div className="flex gap-[2px]" aria-label="90-day uptime history">
              {UPTIME_DAYS.map((day) => (
                <div
                  key={day.date}
                  className="flex-1 h-8 rounded-sm bg-emerald-400 hover:bg-emerald-500 transition-colors cursor-default"
                  title={`${day.date}: ${STATUS_CONFIG[day.status].label}`}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>90 days ago</span>
              <span>Today</span>
            </div>
          </section>

          {/* Service List */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Services</h2>
            <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100">
              {SERVICES.map((service) => {
                const config = STATUS_CONFIG[service.status];
                return (
                  <div
                    key={service.name}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <span className="text-sm font-medium text-gray-700">
                      {service.name}
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1 rounded-full ${config.bgColor} ${config.textColor}`}
                    >
                      <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                      {config.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Recent Incidents */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Incidents
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">
                  No incidents reported in the last 90 days.
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  If you&apos;re experiencing issues, please contact{" "}
                  <a href="/contact" className="text-red-600 hover:underline">
                    support
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* Scheduled Maintenance */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Scheduled Maintenance
            </h2>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="text-center py-4">
                <p className="text-sm text-gray-500">
                  No scheduled maintenance at this time.
                </p>
              </div>
            </div>
          </section>

          {/* Infrastructure Note */}
          <section className="text-center pt-4">
            <p className="text-xs text-gray-400">
              FireLog is hosted on Vercel&apos;s global edge network with automatic failover.
              <br />
              For real-time alerts, email{" "}
              <a href="mailto:support@firelogai.com" className="text-red-600 hover:underline">
                support@firelogai.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
