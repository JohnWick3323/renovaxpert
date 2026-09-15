import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { trackClickToCall } from "~/lib/analytics";
import styles from "./contact-quick-info.module.css";

export function ContactQuickInfo({ className }: { className?: string }) {
  return (
    <div className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.inner}>
        <a
          href={siteConfig.phone.href}
          className={styles.item}
          onClick={() =>
            trackClickToCall({
              link_location: "top_header_bar",
              page_path: typeof window !== "undefined" ? window.location.pathname : "/",
            })
          }
        >
          <Phone size={14} className={styles.icon} />
          <span>{siteConfig.phone.display}</span>
        </a>
        <a href={`mailto:${siteConfig.email}`} className={styles.item}>
          <Mail size={14} className={styles.icon} />
          <span>{siteConfig.email}</span>
        </a>
        <div className={styles.item}>
          <Clock size={14} className={styles.icon} />
          <span>Réponse sous 24h ouvrées</span>
        </div>
      </div>
    </div>
  );
}
