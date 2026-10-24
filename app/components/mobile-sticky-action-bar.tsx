import { Phone, Calculator } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { trackClickToCall, trackQuoteCtaClick } from "~/lib/analytics";
import styles from "./mobile-sticky-action-bar.module.css";

export function MobileStickyActionBar() {
  const handleQuoteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackQuoteCtaClick({
      cta_location: "mobile_sticky_bar",
      page_path: typeof window !== "undefined" ? window.location.pathname : "/",
      destination: "quote_form",
    });

    if (typeof document !== "undefined") {
      // Find the active quote form on the current page
      const targetForm =
        document.querySelector("#devis-form") ||
        document.querySelector('[id*="devis-form"]') ||
        document.querySelector('[id*="quote-form"]');

      if (targetForm) {
        e.preventDefault();
        targetForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <aside
      className={styles.stickyBar}
      aria-label="Actions rapides pour mobile"
      role="region"
    >
      <div className={styles.inner}>
        {/* Left: 50% Click-to-Call Dialer */}
        <a
          href={siteConfig.phone.href}
          className={styles.callButton}
          aria-label={`Appeler un artisan RenovaXpert au ${siteConfig.phone.display}`}
          onClick={() =>
            trackClickToCall({
              link_location: "mobile_sticky_bar",
              page_path: typeof window !== "undefined" ? window.location.pathname : "/",
            })
          }
        >
          <Phone size={18} className={styles.icon} aria-hidden="true" />
          <span className={styles.callText}>
            <small className={styles.microTag}>Appel gratuit</small>
            <strong>{siteConfig.phone.display}</strong>
          </span>
        </a>

        {/* Right: 50% Devis Gratuit / Simulator Action */}
        <a
          href="/contact#contact-quote-form"
          className={styles.quoteButton}
          onClick={handleQuoteClick}
          aria-label="Demander une estimation ou devis gratuit"
        >
          <Calculator size={18} className={styles.icon} aria-hidden="true" />
          <span className={styles.quoteText}>
            <small className={styles.microTag}>Réponse sous 24h</small>
            <strong>Devis Gratuit</strong>
          </span>
        </a>
      </div>
    </aside>
  );
}
