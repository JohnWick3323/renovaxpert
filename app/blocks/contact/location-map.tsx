import { siteConfig } from "~/lib/site-config";
import styles from "./location-map.module.css";

const zones = [
  "Paris (tous arrondissements)",
  "Boulogne-Billancourt",
  "Levallois-Perret",
  "Neuilly-sur-Seine",
  "Versailles",
  "La Défense",
  "Vincennes",
  "Saint-Denis",
];

export function LocationMap({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Zone d'Intervention</h2>
          <p>Notre équipe intervient {siteConfig.serviceArea} pour tous vos travaux de rénovation intérieure.</p>
        </div>
        <div className={styles.mapWrap}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.7526945419!2d2.264632914825059!3d48.85893843849674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1717000000000"
            title="Périmètre d'intervention Paris et proche couronne"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className={styles.zones}>
          <h3>Secteurs Couverts</h3>
          <div className={styles.zoneList}>
            {zones.map((z) => (
              <span key={z} className={styles.zone}>{z}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
