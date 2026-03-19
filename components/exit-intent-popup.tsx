"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ArrowRight, Flame } from "lucide-react";

const SIGNUP_URL = "https://app.firelog.pro";
const STORAGE_KEY = "firelog_exit_popup_dismissed";
const DISMISS_DAYS = 7;

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts && Date.now() - Number(ts) < DISMISS_DAYS * 86400000) return;
    } catch {}

    let fired = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        fired = true;
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    const mobileTimer = setTimeout(() => {
      if (fired) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct < 0.6) {
        fired = true;
        setVisible(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free trial offer"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[popup_0.3s_ease-out]">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
            <Flame className="text-red-500" size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-red-500 uppercase tracking-wide">Before you go</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-2">
          Paper inspection logs won&apos;t survive your next NFPA audit.
        </h2>
        <p className="text-muted-foreground mb-6">
          Go digital in 5 minutes. Start your 14-day free trial — NFPA-compliant checklists, photo documentation, and instant PDF reports. No credit card required.
        </p>

        <a
          href={SIGNUP_URL}
          className="flex items-center justify-center gap-2 w-full bg-red-600 text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-red-700 transition-colors"
          onClick={dismiss}
        >
          Start Free Trial <ArrowRight size={16} />
        </a>

        <button
          onClick={dismiss}
          className="w-full text-sm text-muted-foreground hover:text-foreground mt-3 transition-colors"
        >
          No thanks, I&apos;ll keep the paper binders
        </button>
      </div>

      <style jsx>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
