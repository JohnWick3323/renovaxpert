import { Link } from "react-router";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./nettoyage-section.module.css";

const items = [
  "Nettoyage après travaux de rénovation",
  "Nettoyage de fin de chantier",
  "Nettoyage complet de maison ou appartement",
  "Dépoussiérage, détachage, désinfection",
  "Nettoyage de vitres et menuiseries",
  "Évacuation des résidus de chantier",
];

export function NettoyageSection({ className }: { className?: string }) {
  return (
    <section id="nettoyage" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="/images/services/nettoyage.webp"
              alt="Nettoyage après travaux de rénovation"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Sparkles size={12} /> Nettoyage
            </span>
            <h2>Service de Nettoyage Après Travaux</h2>
            <p>
              Notre équipe intervient après vos travaux de rénovation pour une remise en état complète. Dépoussiérage
              méticuleux, nettoyage des vitres et évacuation des résidus pour un intérieur impeccable prêt à vivre.
            </p>
            <ul className={styles.list}>
              {items.map((item) => (
                <li key={item} className={styles.listItem}>
                  <CheckCircle2 size={16} className={styles.check} />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1.5rem" }}>
              <Link to="/services/nettoyage-apres-travaux-paris" className="btn btn-outline">
                Découvrir la prestation <ArrowRight size={14} style={{ marginLeft: "0.25rem" }} />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
