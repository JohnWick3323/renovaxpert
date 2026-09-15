import { Phone, Mail, Clock } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./quote-request-form.module.css";

const infoCards = [
  { icon: <Phone size={18} aria-hidden="true" />, label: "Téléphone", value: siteConfig.phone.display },
  { icon: <Mail size={18} aria-hidden="true" />, label: "Email", value: siteConfig.email },
  { icon: <Clock size={18} aria-hidden="true" />, label: "Délai de réponse", value: "Sous 24h ouvrées" },
];

export function QuoteRequestForm({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.infoSide}>
          <h2>Demandez Votre Devis Gratuit</h2>
          <p>{siteConfig.leadDisclosure}</p>
          <div className={styles.infoCards}>
            {infoCards.map((c) => (
              <div key={c.label} className={styles.infoCard}>
                <div className={styles.infoIcon}>{c.icon}</div>
                <div className={styles.infoText}>
                  <strong>{c.label}</strong>
                  <span>{c.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.formSide}>
          <h3 style={{ marginBottom: "var(--space-4)" }}>Formulaire de Devis Officiel</h3>
          <GhlQuoteForm id="contact-quote-form" />
        </div>
      </div>
    </section>
  );
}

export default QuoteRequestForm;
