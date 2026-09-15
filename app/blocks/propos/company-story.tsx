import { siteConfig } from "~/lib/site-config";
import styles from "./company-story.module.css";

const commitments = [
  { val: "Devis", label: "Gratuit et sans engagement" },
  { val: "24h", label: "Prise en charge sous 24h ouvrées" },
  { val: "Paris", label: "Et proche couronne" },
  { val: "6", label: "Corps d'état maîtrisés" },
];

export function CompanyStory({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.imageWrap}>
          <img
            src="/images/company-story.webp"
            alt="Artisan effectuant des travaux de rénovation intérieure"
          />
        </div>
        <div className={styles.content}>
          <span className={styles.tag}>Notre Engagement</span>
          <h2>L'Exigence RenovaXpert pour Vos Projets</h2>
          <p>
            RenovaXpert est une entreprise de rénovation intérieure intervenant {siteConfig.serviceArea}. Notre équipe
            prend en charge directement vos travaux afin de vous assurer un suivi rigoureux et des échanges directs.
          </p>
          <p>
            Peinture, parquet, carrelage, sol vinyle, nettoyage de fin de chantier et pose de plaques de plâtre : nos
            artisans expérimentés interviennent avec soin pour sublimer vos espaces intérieurs.
          </p>
          <p>
            Notre démarche : vous fournir une estimation claire et détaillée sans engagement, respecter les plannings
            convenus et livrer des travaux soignés, garantis selon les conditions précisées dans le devis et le contrat.
          </p>
          <div className={styles.milestones}>
            {commitments.map((m) => (
              <div key={m.label} className={styles.milestone}>
                <div className={styles.milestoneYear}>{m.val}</div>
                <div className={styles.milestoneLabel}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
