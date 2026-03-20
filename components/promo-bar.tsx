"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "firelog-promo-dismissed";
const PROMO_ID = "spring-2026-trial";

export function PromoBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed.id === PROMO_ID) return;
      }
      setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ id: PROMO_ID, dismissed: new Date().toISOString() })
      );
    } catch {}
  };

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Promotional announcement"
      className="relative bg-primary text-primary-foreground text-sm text-center py-2.5 px-10"
    >
      <p className="font-medium">
        🔥 NFPA-compliant inspections in under 5 minutes — $79/mo, unlimited users.{" "}
        <a
          href="https://app.firelog.pro/sign-up"
          className="underline underline-offset-2 font-semibold hover:opacity-90 transition-opacity"
        >
          Try FireLog free →
        </a>
      </p>
      <button
        onClick={dismiss}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-white/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
