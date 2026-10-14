import { Link } from "react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Home, Phone } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import styles from "./peinture-section.module.css";

const features = [
  "Coordination intégrale tous corps d'état (second œuvre complet)",
  "Respect strict des règlements de copropriété parisiens et horaires de bruit",
  "Isolation acoustique certifiée 19 à 21 dB aux bruits d'impact",
  "Protection hermétique des parties communes et des ascenseurs",
  "Visite technique gratuite et réponse sous 24h ouvrées",
];

export function RenovationHighlight({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`} id="renovation-appartement" style={{ backgroundColor: "#f8fafc" }}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="/images/hero-bg.webp"
              alt="Chantier de rénovation complète d'appartement à Paris réalisé par RenovaXpert"
              loading="lazy"
              width={600}
              height={450}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Home size={14} aria-hidden="true" />
              Prestation Vedette Tous Corps d'État
            </span>
            <h2>Rénovation d'Appartement Complète à Paris &amp; Proche Couronne</h2>
            <p className={styles.lead}>
              Vous venez d'acquérir un bien immobilier ou souhaitez réaménager votre intérieur ? RenovaXpert orchestre
              l'ensemble de votre second œuvre : de la dépose des anciennes cloisons jusqu'aux finitions les plus subtiles.
            </p>
            <p>
              Notre propre équipe d'artisans qualifiés (peintres, parqueteurs, carreleurs et plaquistes) intervient de concert
              pour éviter les temps morts et vous garantir un chantier fluide, livré dans les délais et sans surcoût imprévu.
            </p>
            <ul className={styles.featureList}>
              {features.map((f) => (
                <li key={f} className={styles.featureItem}>
                  <CheckCircle2 size={18} className={styles.checkIcon} aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <div className={styles.actions} style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
              <Link to="/services/renovation-appartement-paris" className="btn btn-primary">
                Découvrir la rénovation d'appartement <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={siteConfig.phone.href} className="btn btn-outline">
                <Phone size={16} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
