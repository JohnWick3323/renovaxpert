import { Link } from "react-router";
import { ChevronRight } from "lucide-react";
import styles from "./contact-hero.module.css";

export function ContactHero({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Accueil</Link>
          <ChevronRight size={14} />
          <span>Contact</span>
        </div>
        <h1>Contactez-Nous</h1>
        <p>
          Une question sur votre projet de rénovation ou envie d'obtenir un devis détaillé ? Notre équipe est à votre
          écoute et répond à votre demande sous 24 heures ouvrées.
        </p>
      </div>
    </section>
  );
}
