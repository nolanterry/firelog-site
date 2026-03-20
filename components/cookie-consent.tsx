"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react";

const STORAGE_KEY = "firelog_cookie_consent";
const SITE_NAME = "FireLog";
const PRIVACY_URL = "/privacy";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        const timer = setTimeout(() => setVisible(true), 1500);
        return () => clearTimeout(timer);
      }
    } catch {}
  }, []);

  const saveConsent = useCallback((consent: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    } catch {}
    setVisible(false);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() });
  }, [saveConsent]);

  const rejectNonEssential = useCallback(() => {
    saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() });
  }, [saveConsent]);

  const savePreferences = useCallback(() => {
    saveConsent({ necessary: true, analytics, marketing, timestamp: Date.now() });
  }, [saveConsent, analytics, marketing]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9998] p-4 sm:p-6"
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
    >
      <div className="mx-auto max-w-4xl rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden animate-[slideUp_0.4s_ease-out]">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Cookie className="text-primary" size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-base font-semibold text-gray-900">We value your privacy</h2>
              <p className="text-sm text-gray-600 mt-1">
                {SITE_NAME} uses cookies to improve your experience, analyze site traffic, and personalize content.
                You can choose which cookies to allow. See our{" "}
                <a href={PRIVACY_URL} className="text-primary hover:underline font-medium">
                  Privacy Policy
                </a>{" "}
                for details.
              </p>
            </div>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mt-3 transition-colors"
            aria-expanded={expanded}
            aria-controls="cookie-preferences"
          >
            Manage preferences {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {expanded && (
            <div id="cookie-preferences" className="mt-4 space-y-3 border-t border-gray-100 pt-4">
              <label className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-medium text-gray-900">Strictly Necessary</span>
                  <p className="text-xs text-gray-500">Required for the site to function. Cannot be disabled.</p>
                </div>
                <input type="checkbox" checked disabled className="h-4 w-4 rounded accent-primary cursor-not-allowed" aria-label="Strictly necessary cookies (always on)" />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-gray-900">Analytics</span>
                  <p className="text-xs text-gray-500">Help us understand how visitors use the site.</p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="h-4 w-4 rounded accent-primary cursor-pointer"
                  aria-label="Analytics cookies"
                />
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <span className="text-sm font-medium text-gray-900">Marketing</span>
                  <p className="text-xs text-gray-500">Used to show relevant ads and measure campaign effectiveness.</p>
                </div>
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="h-4 w-4 rounded accent-primary cursor-pointer"
                  aria-label="Marketing cookies"
                />
              </label>

              <button
                onClick={savePreferences}
                className="w-full text-sm font-medium text-primary border border-primary rounded-lg px-4 py-2 hover:bg-primary/5 transition-colors mt-2"
              >
                Save Preferences
              </button>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <button
              onClick={acceptAll}
              className="flex-1 bg-primary text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={rejectNonEssential}
              className="flex-1 border border-gray-300 text-gray-700 font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reject Non-Essential
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
