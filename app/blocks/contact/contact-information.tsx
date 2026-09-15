import { Phone, Mail, MapPin } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import styles from "./contact-information.module.css";

const cards = [
  {
    icon: <Phone size={24} />,
    title: "Téléphone",
    content: (
      <p>
        <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a>
        <br />
        Réponse sous 24h ouvrées
      </p>
    ),
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    content: (
      <p>
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        <br />
        Réponse sous 24h ouvrées
      </p>
    ),
  },
  {
    icon: <MapPin size={24} />,
    title: "Zone d'Intervention",
    content: (
      <p>
        {siteConfig.serviceAreaLabel}
        <br />
        Intervention sur devis
      </p>
    ),
  },
];

export function ContactInformation({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Nos Coordonnées</h2>
          <p>Retrouvez toutes les informations pour nous joindre facilement</p>
        </div>
        <div className={styles.grid}>
          {cards.map((c) => (
            <div key={c.title} className={styles.card}>
              <div className={styles.iconWrap}>{c.icon}</div>
              <h3>{c.title}</h3>
              {c.content}
            </div>
          ))}
        </div>
        <div className={styles.hours}>
          <h3>Engagement &amp; Prise en Charge</h3>
          <div className={styles.hourRow}>
            <span className={styles.day}>Équipe</span>
            <span className={styles.time}>Intervention directe RenovaXpert</span>
          </div>
          <div className={styles.hourRow}>
            <span className={styles.day}>Délai de rappel</span>
            <span className={styles.time}>Sous 24h ouvrées (appel ou formulaire)</span>
          </div>
          <div className={styles.hourRow}>
            <span className={styles.day}>Secteur</span>
            <span className={styles.time}>{siteConfig.serviceAreaLabel}</span>
          </div>
          <div className={styles.hourRow}>
            <span className={styles.day}>Garantie</span>
            <span className={styles.time}>Selon devis et contrat</span>
          </div>
        </div>
      </div>
    </section>
  );
}
