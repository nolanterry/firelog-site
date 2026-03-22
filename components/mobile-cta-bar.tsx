"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://app.firelog.pro";
const STORAGE_KEY = "firelog_mobile_cta_dismissed";
const DISMISS_DAYS = 3;
const SCROLL_THRESHOLD = 300;

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts && Date.now() - Number(ts) < DISMISS_DAYS * 86400000) {
        setDismissed(true);
        return;
      }
    } catch {}

    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  };

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="complementary"
      aria-label="Start free trial"
    >
      <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between shadow-[0_-2px_10px_rgba(0,0,0,0.15)]">
        <div className="flex-1 min-w-0 mr-3">
          <p className="text-sm font-semibold truncate">Start Your Free Trial</p>
          <p className="text-xs text-red-100 truncate">14-day trial · No credit card</p>
        </div>
        <a
          href={SIGNUP_URL}
          className="inline-flex items-center gap-1.5 bg-white text-red-600 font-semibold text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors shrink-0"
        >
          Try Free
          <ArrowRight className="w-4 h-4" />
        </a>
        <button
          onClick={handleDismiss}
          className="ml-2 p-1 rounded hover:bg-white/20 transition-colors shrink-0"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
