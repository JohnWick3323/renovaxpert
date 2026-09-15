import { Link } from "react-router";
import { Layers, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./parquet-section.module.css";

const items = [
  "Pose de parquet massif, contrecollé et stratifié",
  "Ponçage professionnel de parquet ancien",
  "Vitrification et huilage haute résistance",
  "Remplacement de lames et réparations",
  "Pose flottante ou pose collée",
  "Finitions mates, satinées ou vernies",
];

export function ParquetSection({ className }: { className?: string }) {
  return (
    <section id="parquet" className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tag}>
              <Layers size={12} /> Parquet
            </span>
            <h2>Service de Pose et Rénovation de Parquet</h2>
            <p>
              Nos artisans spécialistes du parquet prennent en charge la pose, le ponçage et la vitrification de vos
              parquets massifs, contrecollés ou stratifiés. Des finitions chaleureuses et durables adaptées au style parisien.
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
              <Link to="/services/pose-parquet-paris" className="btn btn-outline">
                Découvrir la prestation <ArrowRight size={14} style={{ marginLeft: "0.25rem" }} />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Demander un Devis
              </Link>
            </div>
          </div>
          <div className={styles.imageWrap}>
            <img
              src="/images/services/parquet.webp"
              alt="Pose et rénovation de parquet intérieur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
