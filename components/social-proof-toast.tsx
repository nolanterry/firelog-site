"use client";

import { useEffect, useState, useCallback } from "react";
import { X, CheckCircle } from "lucide-react";

const NOTIFICATIONS = [
  { name: "Jake Martinez", city: "Atlanta", action: "started a free trial", timeAgo: "1 minute ago" },
  { name: "Chris Johnson", city: "Chicago", action: "completed an NFPA 25 inspection", timeAgo: "5 minutes ago" },
  { name: "Steve Rodriguez", city: "Houston", action: "generated a branded PDF report", timeAgo: "9 minutes ago" },
  { name: "Mike Thompson", city: "Phoenix", action: "logged a sprinkler deficiency", timeAgo: "13 minutes ago" },
  { name: "Tony Brown", city: "Denver", action: "scheduled a quarterly inspection", timeAgo: "17 minutes ago" },
  { name: "David Wilson", city: "Las Vegas", action: "started a free trial", timeAgo: "20 minutes ago" },
  { name: "Joe Garcia", city: "Orlando", action: "completed an NFPA 25 inspection", timeAgo: "24 minutes ago" },
  { name: "Rick Davis", city: "Boston", action: "generated a branded PDF report", timeAgo: "28 minutes ago" },
  { name: "Frank Miller", city: "San Diego", action: "logged a sprinkler deficiency", timeAgo: "31 minutes ago" },
  { name: "Carlos White", city: "Portland", action: "scheduled a quarterly inspection", timeAgo: "35 minutes ago" },
];

export function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shownCount, setShownCount] = useState(0);
  const [isDismissed, setIsDismissed] = useState(false);

  // Check localStorage on mount
  useEffect(() => {
    const dismissed = localStorage.getItem('social-proof-dismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const now = Date.now();
      const twentyFourHours = 24 * 60 * 60 * 1000;
      
      if (now - dismissedTime < twentyFourHours) {
        setIsDismissed(true);
        return;
      } else {
        localStorage.removeItem('social-proof-dismissed');
      }
    }

    // Initial delay of 15 seconds
    const initialTimer = setTimeout(() => {
      if (shownCount < 6) {
        setVisible(true);
        setShownCount(prev => prev + 1);
      }
    }, 15000);

    return () => clearTimeout(initialTimer);
  }, []);

  // Auto-dismiss after 5 seconds
  useEffect(() => {
    if (visible) {
      const dismissTimer = setTimeout(() => {
        setVisible(false);
      }, 5000);

      return () => clearTimeout(dismissTimer);
    }
  }, [visible]);

  // Cycle notifications every 30-45 seconds
  useEffect(() => {
    if (!isDismissed && shownCount > 0 && shownCount < 6) {
      const randomDelay = 30000 + Math.random() * 15000; // 30-45 seconds
      
      const cycleTimer = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % NOTIFICATIONS.length);
        setVisible(true);
        setShownCount(prev => prev + 1);
      }, randomDelay);

      return () => clearTimeout(cycleTimer);
    }
  }, [visible, shownCount, isDismissed]);

  const handleDismiss = useCallback(() => {
    setVisible(false);
    setIsDismissed(true);
    localStorage.setItem('social-proof-dismissed', Date.now().toString());
  }, []);

  if (isDismissed || shownCount >= 6) {
    return null;
  }

  const notification = NOTIFICATIONS[currentIndex];
  const initial = notification.name.charAt(0).toUpperCase();

  return (
    <div
      className={`fixed bottom-4 left-4 z-40 transform transition-all duration-500 ease-out ${
        visible 
          ? 'translate-x-0 opacity-100' 
          : '-translate-x-full opacity-0 pointer-events-none'
      }`}
      role="status"
      aria-live="polite"
      aria-label={`${notification.name} from ${notification.city} ${notification.action} ${notification.timeAgo}`}
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm sm:max-w-md md:max-w-lg">
        <div className="flex items-start space-x-3">
          {/* Avatar */}
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0"
            style={{ backgroundColor: '#dc2626' }}
          >
            {initial}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <p className="text-sm text-gray-900 truncate">
                <span className="font-medium">{notification.name}</span> from{' '}
                <span className="font-medium">{notification.city}</span>
              </p>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {notification.action} • {notification.timeAgo}
            </p>
          </div>
          
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}