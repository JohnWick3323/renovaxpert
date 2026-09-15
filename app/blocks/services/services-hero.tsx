import { Link } from "react-router";
import { ChevronRight, ArrowRight } from "lucide-react";
import styles from "./services-hero.module.css";

const tabs = [
  { label: "Peinture Intérieure", href: "/services/peinture-interieure-paris" },
  { label: "Pose de Parquet", href: "/services/pose-parquet-paris" },
  { label: "Pose de Carrelage", href: "/services/pose-carrelage-paris" },
  { label: "Sol Vinyle", href: "/services/pose-sol-vinyle-paris" },
  { label: "Pose de plaques de plâtre", href: "/services/pose-plaques-de-platre-paris" },
  { label: "Nettoyage après travaux", href: "/services/nettoyage-apres-travaux-paris" },
];

export function ServicesHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} aria-hidden="true" />
          <span aria-current="page">Nos Services</span>
        </div>
        <h1>Services de Rénovation Intérieure à Paris</h1>
        <p>
          Nos artisans prennent en charge tous vos travaux d'intérieur à Paris et proche couronne : peinture,
          parquet, carrelage, sol vinyle, nettoyage après chantier et pose de plaques de plâtre. Un travail soigné
          réalisé par notre propre équipe pour transformer et valoriser vos espaces.
        </p>
        <div style={{ margin: "1rem 0" }}>
          <Link
            to="/zones-intervention"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255, 255, 255, 0.95)",
              fontSize: "var(--text-sm)",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            <span>Consulter nos zones d'intervention à Paris et en banlieue</span>
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.tabs}>
          {tabs.map((t) => (
            <Link key={t.href} to={t.href} className={styles.tab}>
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
