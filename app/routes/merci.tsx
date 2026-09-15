import { useEffect } from "react";
import { Link } from "react-router";
import { CheckCircle2, Phone, ArrowRight, Home } from "lucide-react";
import type { Route } from "./+types/merci";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { trackGenerateLead, trackClickToCall } from "~/lib/analytics";
import styles from "./merci.module.css";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Merci pour votre demande - RenovaXpert",
    description: "Confirmation de votre demande de devis auprès de RenovaXpert.",
    pathname: "/merci",
    noindex: true,
    omitCanonical: true,
  });
}

const SESSION_LEAD_KEY = "renovaxpert_lead_converted";

export default function Merci() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const searchParams = new URLSearchParams(window.location.search);
    const hasMarker = searchParams.get("source") === "ghl_quote";
    const alreadyConverted = sessionStorage.getItem(SESSION_LEAD_KEY) === "true";

    // Deduplication check: Do not fire duplicate event on page refresh in the same session
    if (alreadyConverted) {
      return;
    }

    // If GHL redirect marker is present, strip it cleanly from the address bar
    if (hasMarker) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Set session deduplication marker
    sessionStorage.setItem(SESSION_LEAD_KEY, "true");

    // Queue verified generate_lead event to dataLayer
    trackGenerateLead({
      form_name: "ghl_quote",
      page_path: "/merci",
      lead_type: "renovation_quote",
    });
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.iconWrap}>
            <CheckCircle2 size={48} className={styles.checkIcon} aria-hidden="true" />
          </div>

          <h1 className={styles.title}>Merci, votre demande a bien été envoyée</h1>

          <p className={styles.message}>
            Que votre demande arrive par formulaire ou par téléphone, notre équipe vous répond sous 24 heures ouvrées
            afin d'échanger sur votre projet de rénovation et préparer votre estimation.
          </p>

          <div className={styles.phoneBox}>
            <p className={styles.phoneTitle}>Besoin de nous joindre directement ?</p>
            <a
              href={siteConfig.phone.href}
              className={styles.phoneLink}
              onClick={() =>
                trackClickToCall({
                  link_location: "merci_page",
                  page_path: "/merci",
                })
              }
            >
              <Phone size={18} aria-hidden="true" />
              <span>Appelez le {siteConfig.phone.display}</span>
            </a>
          </div>

          <div className={styles.actions}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} aria-hidden="true" style={{ marginRight: "0.5rem" }} />
              Retour à l'accueil
            </Link>
            <Link to="/services" className="btn btn-outline">
              Découvrir nos services
              <ArrowRight size={16} aria-hidden="true" style={{ marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
