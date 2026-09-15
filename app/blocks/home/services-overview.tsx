import { Link } from "react-router";
import { Paintbrush, Layers, Grid3x3, Leaf, Sparkles, Square, ArrowRight } from "lucide-react";
import styles from "./services-overview.module.css";

const services = [
  {
    icon: <Paintbrush size={28} />,
    title: "Peinture Intérieure",
    desc: "Peinture murs et plafonds, préparation soignée des supports et finitions impeccables.",
    href: "/services/peinture-interieure-paris",
  },
  {
    icon: <Layers size={28} />,
    title: "Pose de Parquet",
    desc: "Pose de parquet massif, contrecollé ou stratifié, ponçage et vitrification soignés.",
    href: "/services/pose-parquet-paris",
  },
  {
    icon: <Grid3x3 size={28} />,
    title: "Pose de Carrelage",
    desc: "Pose de carrelage sol et mur pour pièces d'eau, cuisines et espaces de vie.",
    href: "/services/pose-carrelage-paris",
  },
  {
    icon: <Leaf size={28} />,
    title: "Pose de Sol Vinyle",
    desc: "Revêtement vinyle en lames ou dalles PVC (LVT), résistant, isolant et facile d'entretien.",
    href: "/services/pose-sol-vinyle-paris",
  },
  {
    icon: <Square size={28} />,
    title: "Pose de Plaques de Plâtre",
    desc: "Cloisons distributives, faux plafonds suspendus, doublages muraux et finitions lisses.",
    href: "/services/pose-plaques-de-platre-paris",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Nettoyage Après Travaux",
    desc: "Remise en état intégrale, dépoussiérage méticuleux et fin de chantier pour intérieur prêt à vivre.",
    href: "/services/nettoyage-apres-travaux-paris",
  },
];

export function ServicesOverview({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Services de Rénovation Intérieure</h2>
          <p>Nos artisans qualifiés réalisent tous vos travaux de second œuvre dans tout Paris et en proche couronne.</p>
        </div>
        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.title} to={s.href} className={styles.card}>
              <div className={styles.iconWrap}>{s.icon}</div>
              <div className={styles.cardTitle}>{s.title}</div>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>
                Découvrir la prestation <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
