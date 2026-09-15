import { Award, Clock, Sparkles, Heart } from "lucide-react";
import styles from "./our-values.module.css";

const values = [
  {
    icon: <Award size={24} />,
    title: "Savoir-Faire & Rigueur",
    desc: "Chaque chantier est préparé et exécuté avec rigueur, dans le respect des règles de l'art et des matériaux choisis.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Chantier Propre & Soigné",
    desc: "La propreté est au cœur de notre méthode : protection méticuleuse des lieux et nettoyage soigné à chaque livraison.",
  },
  {
    icon: <Clock size={24} />,
    title: "Respect des Délais",
    desc: "Nous nous engageons sur un planning précis et organisons nos interventions pour respecter les délais convenus.",
  },
  {
    icon: <Heart size={24} />,
    title: "Écoute & Transparence",
    desc: "Un accompagnement attentif dès la demande de devis, avec des explications claires et des conseils adaptés à votre projet.",
  },
];

export function OurValues({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Principes de Travail</h2>
          <p>Les engagements qui guident notre équipe sur chaque chantier de rénovation.</p>
        </div>
        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <div className={styles.iconWrap}>{v.icon}</div>
              <div className={styles.text}>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
