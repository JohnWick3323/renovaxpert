import { Link } from "react-router";
import { ShieldCheck, Clock, Sparkles, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import styles from "./why-choose-us.module.css";

const points = [
  {
    icon: <ShieldCheck size={20} />,
    title: "Travail Soigné & Garanti",
    desc: "Nos travaux sont réalisés avec soin et garantis selon les conditions précisées dans le devis et le contrat.",
  },
  {
    icon: <Clock size={20} />,
    title: "Réactivité sous 24h",
    desc: "Que votre demande arrive par téléphone ou via le formulaire, notre équipe vous répond sous 24 heures ouvrées pour convenir d'une visite.",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Qualité d'Exécution",
    desc: "De la préparation des supports jusqu'aux finitions, nos artisans assurent un suivi rigoureux sur chaque chantier.",
  },
  {
    icon: <MapPin size={20} />,
    title: "Intervention Locale",
    desc: `Notre équipe se déplace ${siteConfig.serviceArea} pour réaliser vos projets de rénovation intérieure.`,
  },
];

export function WhyChooseUs({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="/images/why-choose-us.webp"
            alt="Artisan effectuant des travaux de rénovation intérieure"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>Pourquoi Nous Choisir</span>
          <h2>L'Exigence et le Savoir-Faire RenovaXpert</h2>
          <p>
            RenovaXpert prend en charge la rénovation de vos intérieurs avec une équipe expérimentée. Nous veillons
            à la qualité d'exécution et au bon déroulement de votre chantier, avec une communication transparente.
          </p>
          <div className={styles.points}>
            {points.map((p) => (
              <div key={p.title} className={styles.point}>
                <div className={styles.pointIcon}>{p.icon}</div>
                <div className={styles.pointText}>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <Link to="/a-propos" className="btn btn-primary">
            En Savoir Plus <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
