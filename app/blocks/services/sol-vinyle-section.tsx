import { Link } from "react-router";
import { Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./sol-vinyle-section.module.css";

const items = [
  "Pose de sol vinyle en lames ou dalles PVC (LVT)",
  "Imitation réaliste parquet, pierre ou béton ciré",
  "Pose flottante clipsable ou pose collée",
  "Isolation phonique et confort thermique",
  "Résistant à l'eau et aux passages fréquents",
  "Facile d'entretien et durable",
];

export function SolVinyleSection({ className }: { className?: string }) {
  return (
    <section id="sol-vinyle" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.tag}>
            <Leaf size={12} /> Sol Vinyle
          </span>
          <h2>Revêtement Sol Vinyle et PVC</h2>
          <p>
            Nos artisans assurent l'installation soignée de vos sols vinyles et dalles PVC. Une solution moderne,
            chaleureuse et résistante, parfaitement adaptée aux pièces de vie comme aux pièces humides.
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
            <Link to="/services/pose-sol-vinyle-paris" className="btn btn-outline">
              Découvrir la prestation <ArrowRight size={14} style={{ marginLeft: "0.25rem" }} />
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Demander un Devis
            </Link>
          </div>
        </div>
        <div className={styles.imageWrap}>
          <img
            src="/images/services/sol-vinyle.webp"
            alt="Pose de revêtement de sol vinyle"
          />
        </div>
      </div>
    </section>
  );
}
