import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { openCookieSettings } from "~/components/cookie-consent";
import { trackClickToCall } from "~/lib/analytics";
import styles from "./contact-legal-footer.module.css";

export function ContactLegalFooter({ className }: { className?: string }) {
  return (
    <div className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.info}>
          <a
            href={siteConfig.phone.href}
            className={styles.infoItem}
            onClick={() =>
              trackClickToCall({
                link_location: "footer_legal",
                page_path: typeof window !== "undefined" ? window.location.pathname : "/",
              })
            }
          >
            <Phone size={14} className={styles.icon} />
            <span>{siteConfig.phone.display}</span>
          </a>
          <a href={`mailto:${siteConfig.email}`} className={styles.infoItem}>
            <Mail size={14} className={styles.icon} />
            <span>{siteConfig.email}</span>
          </a>
          <div className={styles.infoItem}>
            <MapPin size={14} className={styles.icon} />
            <span>{siteConfig.serviceAreaLabel}</span>
          </div>
        </div>
        <div className={styles.legal}>
          <Link to="/politique-de-confidentialite" className={styles.legalLink}>
            Politique de confidentialité
          </Link>
          <span className={styles.separator}>|</span>
          <button
            type="button"
            className={styles.cookieButton}
            onClick={(e) => openCookieSettings(e.currentTarget)}
          >
            Gérer les cookies
          </button>
        </div>
      </div>
    </div>
  );
}
