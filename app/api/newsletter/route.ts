import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const normalized = email.trim().toLowerCase();

    // Store in a JSON file — replace with Loops/Resend/Postmark when email platform is connected
    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "newsletter-subscribers.json");

    try {
      await fs.mkdir(dataDir, { recursive: true });
    } catch {}

    let subscribers: { email: string; subscribedAt: string; source: string }[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf-8");
      subscribers = JSON.parse(existing);
    } catch {}

    // Deduplicate
    if (subscribers.some((s) => s.email === normalized)) {
      return NextResponse.json({ ok: true, message: "Already subscribed" });
    }

    subscribers.push({
      email: normalized,
      subscribedAt: new Date().toISOString(),
      source: "blog-newsletter",
    });

    await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
