import { ImageResponse } from "next/og";
import { BLOG_POSTS } from "@/lib/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const title = post?.title ?? "FireLog Blog";

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
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "#EF4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              fontWeight: 800,
              color: "white",
            }}
          >
            FL
          </div>
          <span style={{ color: "#EF4444", fontSize: "24px", fontWeight: 700 }}>
            FireLog Blog
          </span>
        </div>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.2,
            maxWidth: "1000px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "auto",
            paddingTop: "32px",
          }}
        >
          <span style={{ color: "#64748b", fontSize: "20px" }}>
            firelog.pro
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
