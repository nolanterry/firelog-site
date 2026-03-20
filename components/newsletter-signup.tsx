"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "firelog-newsletter-subscribed";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
      setHidden(false);
    } catch {
      setHidden(false);
    }
  }, []);

  if (hidden || status === "success") {
    if (status === "success") {
      return (
        <div className="my-12 rounded-xl border border-red-200 bg-red-50 p-8 text-center">
          <p className="text-lg font-semibold text-gray-900">✅ You&apos;re subscribed!</p>
          <p className="text-sm text-gray-600 mt-1">We&apos;ll send you NFPA compliance tips and inspection updates.</p>
        </div>
      );
    }
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="my-12 rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50 to-white p-8" role="region" aria-label="Newsletter signup">
      <div className="text-center">
        <p className="text-2xl font-bold text-gray-900">🔥 Fire Safety Compliance Updates</p>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Get NFPA code changes, inspection best practices, and fire protection industry news — delivered weekly. No spam, unsubscribe anytime.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-red-500 focus:ring-2 focus:ring-red-500/20 outline-none transition-all"
          aria-required="true"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors disabled:opacity-50 whitespace-nowrap"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {status === "error" && (
        <p className="text-red-600 text-sm text-center mt-3">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
