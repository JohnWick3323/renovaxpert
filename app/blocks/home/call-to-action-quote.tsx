import { Link } from "react-router";
import { CheckCircle, Phone, ArrowRight, FileText } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./call-to-action-quote.module.css";

const features = [
  "Devis gratuit et sans engagement",
  "Réponse sous 24h ouvrées (appel ou formulaire)",
  "Intervention dans tout Paris et en proche couronne",
  "Travaux réalisés par notre propre équipe",
];

export function CallToActionQuote({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2>Obtenez Votre Devis Gratuit</h2>
          <p>{siteConfig.leadDisclosure}</p>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f} className={styles.feature}>
                <div className={styles.checkIcon}>
                  <CheckCircle size={14} aria-hidden="true" />
                </div>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.form}>
          <h3>Votre Projet de Rénovation Commence Ici</h3>
          <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.6, marginBottom: "var(--space-6)" }}>
            Nos artisans étudient votre demande avec soin pour vous apporter une estimation détaillée et transparente.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
            <a
              href="#devis-form"
              className="btn btn-accent"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              onClick={() =>
                trackQuoteCtaClick({
                  cta_location: "home_bottom_quote_cta",
                  page_path: "/",
                  destination: "#devis-form",
                })
              }
            >
              <FileText size={18} aria-hidden="true" />
              <span>Demander mon devis en ligne</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <Link
              to="/contact"
              className="btn btn-outline"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
              onClick={() =>
                trackQuoteCtaClick({
                  cta_location: "home_bottom_contact_link",
                  page_path: "/",
                  destination: "/contact",
                })
              }
            >
              <span>Accéder à la page de contact</span>
            </Link>

            <a
              href={siteConfig.phone.href}
              className="btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                backgroundColor: "var(--color-bg-alt)",
                color: "var(--color-primary)",
                border: "1px solid var(--color-border-light)",
              }}
              onClick={() =>
                trackClickToCall({
                  link_location: "home_bottom_phone_call",
                  page_path: "/",
                })
              }
            >
              <Phone size={16} aria-hidden="true" />
              <span>Appeler le {siteConfig.phone.display}</span>
            </a>
          </div>

          <p style={{ fontSize: "11px", color: "var(--color-text-muted)", margin: "var(--space-4) 0 0", textAlign: "center" }}>
            🔒 Que vous nous contactiez par téléphone ou formulaire, réponse sous 24h ouvrées. Sans engagement.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CallToActionQuote;
