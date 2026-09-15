import { Link } from "react-router";
import { Paintbrush, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./peinture-section.module.css";

const items = [
  "Peinture intérieure murs et plafonds",
  "Préparation soignée et enduisage des supports",
  "Finitions mates, velours ou satinées",
  "Peinture des boiseries, portes et plinthes",
  "Traitement des fissures et impressions techniques",
  "Rénovation après dégât des eaux",
];

export function PeintureSection({ className }: { className?: string }) {
  return (
    <section id="peinture" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="/images/services/peinture.webp"
              alt="Application soignée de peinture intérieure"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Paintbrush size={12} /> Peinture
            </span>
            <h2>Service de Peinture Intérieure</h2>
            <p>
              Nos artisans peintres réalisent tous vos travaux de peinture intérieure à Paris et proche couronne.
              Préparation minutieuse des surfaces, enduits fins et application soignée pour sublimer vos espaces de vie.
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
              <Link to="/services/peinture-interieure-paris" className="btn btn-outline">
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
