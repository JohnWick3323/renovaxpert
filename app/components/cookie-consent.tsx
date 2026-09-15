import { useState, useEffect, useRef } from "react";
import { X, ShieldCheck } from "lucide-react";
import styles from "./cookie-consent.module.css";

const STORAGE_KEY = "renovaxpert_consent_status";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [analyticsChecked, setAnalyticsChecked] = useState(false); // No preselected optional consent
  const triggerButtonRef = useRef<HTMLElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Apply consent to gtag
  const applyConsent = (analyticsGranted: boolean) => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: analyticsGranted ? "granted" : "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check existing decision
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "granted") {
      applyConsent(true);
      setAnalyticsChecked(true);
    } else if (saved === "denied") {
      applyConsent(false);
      setAnalyticsChecked(false);
    } else {
      // First visit: show consent prompt
      setIsVisible(true);
    }

    // Global listener to reopen settings from footer
    const handleReopen = (e: Event) => {
      if (e instanceof CustomEvent && e.detail?.trigger) {
        triggerButtonRef.current = e.detail.trigger;
      }
      setIsVisible(true);
      setIsCustomizeOpen(true);
    };

    window.addEventListener("open-cookie-settings", handleReopen);
    return () => {
      window.removeEventListener("open-cookie-settings", handleReopen);
    };
  }, []);

  // Keyboard navigation & focus trap
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isCustomizeOpen) {
          setIsCustomizeOpen(false);
        }
      }

      if (e.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVisible, isCustomizeOpen]);

  const closeAndReturnFocus = () => {
    setIsVisible(false);
    setIsCustomizeOpen(false);
    if (triggerButtonRef.current) {
      triggerButtonRef.current.focus();
      triggerButtonRef.current = null;
    }
  };

  const handleAcceptAll = () => {
    localStorage.setItem(STORAGE_KEY, "granted");
    applyConsent(true);
    setAnalyticsChecked(true);
    closeAndReturnFocus();
  };

  const handleRefuseAll = () => {
    localStorage.setItem(STORAGE_KEY, "denied");
    applyConsent(false);
    setAnalyticsChecked(false);
    closeAndReturnFocus();
  };

  const handleSaveCustom = () => {
    if (analyticsChecked) {
      localStorage.setItem(STORAGE_KEY, "granted");
      applyConsent(true);
    } else {
      localStorage.setItem(STORAGE_KEY, "denied");
      applyConsent(false);
    }
    closeAndReturnFocus();
  };

  if (!isVisible) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
      ref={modalRef}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <ShieldCheck size={20} className={styles.shieldIcon} aria-hidden="true" />
            <h2 id="cookie-consent-title" className={styles.title}>
              Vos préférences de confidentialité
            </h2>
          </div>
          {isCustomizeOpen && (
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setIsCustomizeOpen(false)}
              aria-label="Fermer la personnalisation"
            >
              <X size={18} aria-hidden="true" />
            </button>
          )}
        </div>

        <p className={styles.description}>
          Nous utilisons des outils de mesure d’audience pour comprendre l’utilisation du site et
          améliorer nos services. Vous pouvez accepter ou refuser ces outils.
        </p>

        {isCustomizeOpen && (
          <div className={styles.customizationArea}>
            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <label className={styles.categoryLabel}>
                  <input type="checkbox" checked disabled />
                  <span>Cookies techniques nécessaires</span>
                </label>
                <span className={styles.alwaysActive}>Toujours actif</span>
              </div>
              <p className={styles.categoryDesc}>
                Indispensables au fonctionnement technique et à la sécurité du site (conservation
                de vos choix de consentement, navigation).
              </p>
            </div>

            <div className={styles.cookieCategory}>
              <div className={styles.categoryHeader}>
                <label className={styles.categoryLabel}>
                  <input
                    type="checkbox"
                    checked={analyticsChecked}
                    onChange={(e) => setAnalyticsChecked(e.target.checked)}
                  />
                  <span>Mesure d’audience (Google Analytics via GTM)</span>
                </label>
              </div>
              <p className={styles.categoryDesc}>
                Permet de mesurer anonymement la fréquentation des pages et d'optimiser l'expérience
                utilisateur sans collecte de données publicitaires.
              </p>
            </div>
          </div>
        )}

        <div className={styles.actions}>
          {isCustomizeOpen ? (
            <>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleSaveCustom}
              >
                Enregistrer mes choix
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleAcceptAll}
              >
                Tout accepter
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnSecondary}`}
                onClick={handleRefuseAll}
              >
                Tout refuser
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnEqual}`}
                onClick={handleAcceptAll}
              >
                Tout accepter
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnEqual}`}
                onClick={handleRefuseAll}
              >
                Tout refuser
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={() => setIsCustomizeOpen(true)}
              >
                Personnaliser
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function openCookieSettings(triggerElement?: HTMLElement) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("open-cookie-settings", {
        detail: { trigger: triggerElement },
      })
    );
  }
}
