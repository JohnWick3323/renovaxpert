import { Link } from "react-router";
import { Grid3x3, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./carrelage-section.module.css";

const items = [
  "Pose de carrelage sol et mur pour intérieur",
  "Rénovation complète salle de bain et cuisine",
  "Grands formats, carreaux métro et mosaïques",
  "Calepinage précis et découpes minutieuses",
  "Étanchéité sous carrelage (SPEC)",
  "Joints fins hydrofuges et anti-taches",
];

export function CarrelageSection({ className }: { className?: string }) {
  return (
    <section id="carrelage" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="/images/services/carrelage.webp"
              alt="Pose soignée de carrelage dans une pièce d'eau"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Grid3x3 size={12} /> Carrelage
            </span>
            <h2>Service de Carrelage Sol &amp; Mur</h2>
            <p>
              Nos artisans carreleurs réalisent la pose de carrelage et faïence pour vos cuisines, salles de bain et
              pièces à vivre. Alignements rigoureux, calepinage soigné et joints impeccables pour un rendu esthétique pérenne.
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
              <Link to="/services/pose-carrelage-paris" className="btn btn-outline">
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
