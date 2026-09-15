import { useEffect, useRef } from "react";
import { Phone } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { trackQuoteFormView, trackClickToCall } from "~/lib/analytics";
import styles from "./ghl-quote-form.module.css";

export interface GhlQuoteFormProps {
  id?: string;
  className?: string;
  minHeight?: number | string;
  serviceSlug?: string;
  variant?: "card" | "transparent";
}

/**
 * Composant réutilisable pour intégrer le formulaire de devis officiel GoHighLevel (GHL).
 * Respecte les contraintes d'accessibilité, d'iframe unique par page, de responsive mobile,
 * d'événement dataLayer quote_form_view unique et de surface adaptable (card / transparent).
 */
export function GhlQuoteForm({
  id = "ghl-quote-form",
  className,
  minHeight,
  serviceSlug,
  variant = "card",
}: GhlQuoteFormProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewFiredRef = useRef(false);

  useEffect(() => {
    const scriptSrc = siteConfig.ghl.formScript;
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !viewFiredRef.current) {
            viewFiredRef.current = true;
            trackQuoteFormView({
              form_location: id,
              page_path: window.location.pathname,
              service_slug: serviceSlug,
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [id, serviceSlug]);

  const iframeId = `inline-${id}`;
  const isTransparent = variant === "transparent";

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`} id={id} ref={containerRef}>
      <div
        className={`${styles.iframeContainer} ${isTransparent ? styles.iframeContainerTransparent : styles.iframeContainerCard}`}
        style={minHeight ? { minHeight } : undefined}
      >
        <iframe
          src={siteConfig.ghl.formUrl}
          style={{ width: "100%", height: "100%", border: "none", borderRadius: "8px" }}
          id={iframeId}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivate-type="neverDeactivate"
          data-deactivate-value=""
          data-form-name={siteConfig.ghl.iframeTitle}
          data-height="620"
          data-layout-iframe-id={iframeId}
          data-form-id={siteConfig.ghl.formId}
          data-cookie-consent="true"
          title={siteConfig.ghl.iframeTitle}
          className={styles.iframe}
          loading="lazy"
        />
      </div>

      {/* Fallback direct call box: visible exclusively on mobile/tablet screens */}
      <div className={styles.fallback}>
        <p className={styles.fallbackText}>
          Vous préférez un échange direct pour vos travaux ? Contactez notre équipe :
        </p>
        <a
          href={siteConfig.phone.href}
          className={styles.fallbackLink}
          onClick={() =>
            trackClickToCall({
              link_location: `ghl_form_fallback_${id}`,
              page_path: typeof window !== "undefined" ? window.location.pathname : "/",
              service_slug: serviceSlug,
            })
          }
        >
          <Phone size={16} aria-hidden="true" />
          <span>{siteConfig.phone.display}</span>
        </a>
      </div>
    </div>
  );
}

export default GhlQuoteForm;
