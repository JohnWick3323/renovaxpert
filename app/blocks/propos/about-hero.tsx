import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import styles from "./about-hero.module.css";

export function AboutHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} />
          <span>À Propos</span>
        </div>
        <h1>À Propos de RenovaXpert</h1>
        <p>
          Entreprise spécialisée dans la rénovation intérieure {siteConfig.serviceArea}. Notre équipe d'artisans met son
          savoir-faire et son exigence au service de vos projets de peinture, revêtements de sol, carrelage et plâtrerie.
        </p>
      </div>
    </section>
  );
}
