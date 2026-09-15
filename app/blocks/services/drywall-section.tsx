import { Link } from "react-router";
import { Square, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./peinture-section.module.css";

const items = [
  "Pose et finition de plaques de plâtre (BA13)",
  "Création de cloisons et faux plafonds",
  "Isolation thermique et acoustique intégrée",
  "Réparation de murs et plafonds endommagés",
  "Traitement des joints et application d'enduit",
  "Préparation de surface prête à peindre",
];

export function DrywallSection({ className }: { className?: string }) {
  return (
    <section id="drywall" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.imageWrap}>
            <img
              src="/images/services/drywall.webp"
              alt="Pose de plaques de plâtre pour cloison intérieure"
            />
          </div>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Square size={12} /> Pose de plaques de plâtre
            </span>
            <h2>Pose de plaques de plâtre / Plaquiste</h2>
            <p>
              Nos artisans plaquistes réalisent vos cloisons, doublages isolants et faux plafonds en plaques de plâtre.
              Surfaces planes et finitions soignées, prêtes à recevoir peinture ou revêtement décoratif.
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
              <Link to="/services/pose-plaques-de-platre-paris" className="btn btn-outline">
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
