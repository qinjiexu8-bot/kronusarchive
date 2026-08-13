"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type AnalyticsConsent = "granted" | "denied";

const CONSENT_STORAGE_KEY = "kronus-analytics-consent";
const OPEN_SETTINGS_EVENT = "kronus-open-cookie-settings";
const PRODUCTION_HOSTNAME = "kronusarchive.com";

export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  useEffect(() => {
    if (window.location.hostname !== PRODUCTION_HOSTNAME) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function gtag(...args: unknown[]) {
        window.dataLayer?.push(args);
      };

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    return () => script.remove();
  }, [measurementId]);

  return null;
}

function updateGoogleConsent(consent: AnalyticsConsent) {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "update", {
    analytics_storage: consent,
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

export function AnalyticsConsentBanner() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(
      CONSENT_STORAGE_KEY,
    ) as AnalyticsConsent | null;

    if (savedConsent === "granted" || savedConsent === "denied") {
      updateGoogleConsent(savedConsent);
    } else {
      queueMicrotask(() => setIsOpen(true));
    }

    const openSettings = () => setIsOpen(true);
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);

    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, []);

  function saveConsent(consent: AnalyticsConsent) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
    updateGoogleConsent(consent);
    setIsOpen(false);
  }

  if (!isOpen) {
    return null;
  }

  return (
    <section
      className="analytics-consent"
      role="dialog"
      aria-modal="false"
      aria-labelledby="analytics-consent-title"
      aria-describedby="analytics-consent-description"
    >
      <div>
        <p className="kicker">Privacy Controls</p>
        <h2 id="analytics-consent-title">Optional analytics</h2>
        <p id="analytics-consent-description">
          We use Google Analytics to understand which guides are useful. Analytics
          storage stays off unless you accept. Advertising and personalized-ad
          storage remain disabled. Read our <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="button button-quiet" onClick={() => saveConsent("denied")}>
          Reject optional
        </button>
        <button type="button" className="button button-primary" onClick={() => saveConsent("granted")}>
          Accept analytics
        </button>
      </div>
    </section>
  );
}

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      className="footer-cookie-button"
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
    >
      Cookie settings
    </button>
  );
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
