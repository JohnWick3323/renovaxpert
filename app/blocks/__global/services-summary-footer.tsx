import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { siteConfig } from "~/lib/site-config";
import styles from "./services-summary-footer.module.css";

const services = [
  { label: "Peinture Intérieure", href: "/services/peinture-interieure-paris" },
  { label: "Pose de Parquet", href: "/services/pose-parquet-paris" },
  { label: "Carrelage Sol & Mur", href: "/services/pose-carrelage-paris" },
  { label: "Sol Vinyle & PVC", href: "/services/pose-sol-vinyle-paris" },
  { label: "Pose de plaques de plâtre", href: "/services/pose-plaques-de-platre-paris" },
  { label: "Nettoyage Après Travaux", href: "/services/nettoyage-apres-travaux-paris" },
];

const pages = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/services" },
  { label: "Zones d'intervention", href: "/zones-intervention" },
  { label: "À Propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const contact = [
  { label: siteConfig.phone.display, href: siteConfig.phone.href },
  { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: siteConfig.serviceAreaLabel, href: "/zones-intervention" },
  { label: "Réponse sous 24h ouvrées", href: "/contact" },
];

export function ServicesSummaryFooter({ className }: { className?: string }) {
  return (
    <div className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <img
            src="/RenovaXpert-Logo-White-Final.png"
            alt={siteConfig.brandName}
            className={styles.brandLogo}
          />
          <p>
            Entreprise de rénovation intérieure {siteConfig.serviceArea}. Notre équipe d'artisans réalise vos travaux
            de peinture, sols, carrelage et plâtrerie avec exigence et professionnalisme.
          </p>
        </div>
        <div className={styles.column}>
          <h4>Nos Services</h4>
          <ul className={styles.linkList}>
            {services.map((s) => (
              <li key={s.href}>
                <Link to={s.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Navigation</h4>
          <ul className={styles.linkList}>
            {pages.map((p) => (
              <li key={p.href}>
                <Link to={p.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Contact</h4>
          <ul className={styles.linkList}>
            {contact.map((c) => (
              <li key={c.label}>
                <a href={c.href}>
                  <ChevronRight size={14} className={styles.chevron} />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
