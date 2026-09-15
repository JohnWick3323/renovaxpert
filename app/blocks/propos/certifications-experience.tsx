import { ShieldCheck, Award, CheckCircle, Clock, FileText, MapPin } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import styles from "./certifications-experience.module.css";

const stats = [
  { number: "Devis", label: "Gratuit & sans engagement" },
  { number: "24h", label: "Délai de réponse ouvré" },
  { number: "Paris", label: "Et proche couronne" },
  { number: "6", label: "Prestations maîtrisées" },
];

const commitments = [
  {
    icon: <FileText size={20} />,
    title: "Devis Gratuit & Sans Engagement",
    desc: "Une estimation claire et détaillée remise avant tout démarrage de travaux, sans engagement financier.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Intervention Locale",
    desc: `Notre équipe se déplace directement ${siteConfig.serviceArea} pour étudier et réaliser vos chantiers.`,
  },
  {
    icon: <Clock size={20} />,
    title: "Prise en Charge sous 24h",
    desc: "Que vous nous contactiez par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour étudier votre projet.",
  },
  {
    icon: <CheckCircle size={20} />,
    title: "Travaux Garantis",
    desc: siteConfig.guaranteeStatement,
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "6 Domaines d'Intervention",
    desc: "Peinture, parquet, carrelage, sol vinyle, nettoyage après chantier et pose de plaques de plâtre.",
  },
  {
    icon: <Award size={20} />,
    title: "Finitions Soignées",
    desc: "Un travail soigné et un suivi rigoureux, de la préparation des surfaces jusqu'aux finitions.",
  },
];

export function CertificationsExperience({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Engagements &amp; Garanties</h2>
          <p>Une équipe engagée pour un travail soigné et un suivi attentif de chaque chantier</p>
        </div>
        <div className={styles.grid}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statNumber}>{s.number}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className={styles.certs}>
          {commitments.map((c) => (
            <div key={c.title} className={styles.cert}>
              <div className={styles.certIcon}>{c.icon}</div>
              <div className={styles.certText}>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
