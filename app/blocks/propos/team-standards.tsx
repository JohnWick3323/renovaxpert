import { Link } from "react-router";
import { Users, HardHat, Award, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import styles from "./our-values.module.css";

const pillars = [
  {
    icon: <HardHat size={24} aria-hidden="true" />,
    title: "Artisans Salariés & Équipe Intégrée",
    desc: "Contrairement aux plateformes d'intermédiation éphémères, RenovaXpert s'appuie sur sa propre équipe d'artisans expérimentés (peintres en bâtiment, parqueteurs, carreleurs, plaquistes). Cette maîtrise interne garantit une continuité totale de chantier et un niveau de finition constant.",
  },
  {
    icon: <ShieldCheck size={24} aria-hidden="true" />,
    title: "Conformité DTU & Normes Acoustiques",
    desc: "Chaque prestation répond rigoureusement aux normes françaises du bâtiment : DTU 51 pour la pose et vitrification de parquets avec sous-couches 21 dB, DTU 59.1 pour les préparations et peintures intérieures A+, et DTU 25.41 pour les cloisons Placostil® à haute absorption phonique.",
  },
  {
    icon: <Award size={24} aria-hidden="true" />,
    title: "Matériaux Professionnels & Écologiques",
    desc: "Nous sélectionnons exclusivement des produits professionnels réputés pour leur durabilité : peintures veloutées sans COV ni odeur, ragréages fibrés haute adhérence, vitrificateurs polyuréthane haute résistance et colles acoustiques silane respectueuses de l'air intérieur.",
  },
  {
    icon: <Users size={24} aria-hidden="true" />,
    title: "Interlocuteur Unique & Suivi Personnalisé",
    desc: "De la première visite technique jusqu'à la levée des réserves, un responsable dédié coordonne vos travaux, vous informe de l'avancement et veille au strict respect des règles de copropriété et des délais d'achèvement.",
  },
];

export function TeamStandards() {
  return (
    <section className={styles.section} style={{ backgroundColor: "#f8fafc", borderTop: "1px solid var(--color-border-light)" }}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Notre Savoir-Faire &amp; Notre Équipe d'Artisans</h2>
          <p>
            RenovaXpert combine la réactivité d'une entreprise locale à l'exigence technique des chantiers de rénovation parisiens.
          </p>
        </div>
        <div className={styles.grid}>
          {pillars.map((p) => (
            <div key={p.title} className={styles.card} style={{ backgroundColor: "#ffffff" }}>
              <div className={styles.iconWrap} style={{ color: "var(--color-primary)" }}>{p.icon}</div>
              <div className={styles.text}>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Link to="/contact" className="btn btn-primary">
            Planifier une visite technique gratuite <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
