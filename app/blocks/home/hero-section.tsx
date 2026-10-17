import { Link } from "react-router";
import { Star, ArrowRight } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./hero-section.module.css";

export function HeroSection({ className }: { className?: string }) {
  return (
    <section className={`${styles.hero} ${className ?? ""}`}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* Left: copy + stats */}
        <div className={styles.left}>
          <div className={styles.badge}>
            <Star size={12} fill="currentColor" />
            Artisans Rénovation Paris
          </div>
          <h1 className={styles.title}>
            Entreprise de Rénovation Intérieure à <span>Paris</span>
          </h1>
          <p className={styles.subtitle}>
            RenovaXpert prend en charge vos travaux de rénovation intérieure dans tout Paris et en proche couronne : peinture, parquet,
            carrelage, sol vinyle, pose de plaques de plâtre et nettoyage après chantier. Travaux soignés réalisés par notre propre équipe d'artisans.
          </p>
          <div className={styles.actions} style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link to="/services" className="btn btn-outline-white">
              Nos Services
              <ArrowRight size={16} />
            </Link>
            <Link to="/zones-intervention" className="btn btn-outline-white">
              Zones d'intervention
            </Link>
          </div>
          <div className={styles.stats}>
            {[
              { number: "Devis", label: "Gratuit et sans engagement" },
              { number: "24h", label: "Réponse sous 24h ouvrées" },
              { number: "6", label: "Services de rénovation" },
            ].map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: official GHL quote form */}
        <div className={styles.formCard} id="devis-form">
          <div className={styles.formHeader}>
            <span className={styles.formTag}>Devis Gratuit</span>
            <h2 className={styles.formTitle}>Obtenez votre devis gratuit</h2>
            <p className={styles.formSub}>Sans engagement, réponse sous 24h ouvrées</p>
          </div>
          <GhlQuoteForm id="hero-devis" />
        </div>
      </div>
    </section>
  );
}
