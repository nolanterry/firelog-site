import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "FireLog — Digital Fire Inspection Reports";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #EF4444 0%, #F97316 100%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#EF4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 800,
              color: "white",
            }}
          >
            FL
          </div>
          <span style={{ color: "#EF4444", fontSize: "28px", fontWeight: 700 }}>
            FireLog
          </span>
        </div>
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.15,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          NFPA-Compliant Fire Inspection Software
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#94a3b8",
            lineHeight: 1.5,
            maxWidth: "800px",
          }}
        >
          Mobile inspection forms, branded PDF reports, deficiency tracking. Built for fire protection contractors.
        </div>
        <div style={{ display: "flex", marginTop: "32px" }}>
          <div
            style={{
              background: "#EF4444",
              color: "white",
              padding: "12px 32px",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            Try Free for 14 Days → firelogai.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
