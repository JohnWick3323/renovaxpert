import { siteConfig } from "~/lib/site-config";
import styles from "./social-media-copyright.module.css";

export function SocialMediaCopyright({ className }: { className?: string }) {
  const year = new Date().getFullYear();
  return (
    <div className={`${styles.bar} ${className ?? ""}`}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          &copy; {year} {siteConfig.brandName}. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
