import { Link } from "react-router";
import { Shield, ChevronRight, Mail, Phone } from "lucide-react";
import type { Route } from "./+types/politique-confidentialite";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { openCookieSettings } from "~/components/cookie-consent";
import styles from "./politique-confidentialite.module.css";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Politique de Confidentialité - RenovaXpert",
    description:
      "Information sur le traitement de vos données personnelles et l'utilisation des cookies sur le site RenovaXpert.",
    pathname: "/politique-de-confidentialite",
    noindex: true,
  });
}

export default function PolitiqueConfidentialite() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">Politique de Confidentialité</span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Shield size={14} aria-hidden="true" />
              Protection des données
            </div>
            <h1 className={styles.title}>Politique de Confidentialité</h1>
            <p className={styles.subtitle}>
              La présente politique a pour objet de vous informer avec clarté et transparence sur la manière dont
              RenovaXpert collecte, utilise et protège vos données personnelles lorsque vous naviguez sur notre site
              ou demandez un devis de rénovation.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.inner}>
          <div className={styles.textBlock}>
            <h2>1. Responsable de Traitement et Contact</h2>
            <p>
              Les données personnelles collectées sur ce site sont traitées par RenovaXpert, entreprise de
              rénovation intérieure intervenant dans tout Paris et en proche couronne.
            </p>
            <p>
              Pour toute question relative à vos données personnelles ou pour exercer vos droits, vous pouvez nous
              contacter directement par email à :{" "}
              <a href={`mailto:${siteConfig.email}`} className={styles.link}>
                {siteConfig.email}
              </a>
              .
            </p>

            <h2>2. Données Collectées et Finalités</h2>
            <p>
              Lorsque vous remplissez notre formulaire de demande de devis officiel, nous collectons uniquement les
              informations strictement nécessaires à l’étude et à la gestion de votre projet de rénovation :
            </p>
            <ul>
              <li>
                <strong>Nom complet :</strong> afin de vous identifier et de personnaliser nos échanges.
              </li>
              <li>
                <strong>Numéro de téléphone :</strong> indispensable pour que notre équipe puisse vous recontacter sous
                24 heures ouvrées (par téléphone ou email) pour convenir d’une visite technique ou préciser votre projet.
              </li>
              <li>
                <strong>Service souhaité :</strong> nature des travaux envisagés (peinture, parquet, carrelage, sol vinyle,
                plaques de plâtre ou nettoyage après travaux).
              </li>
              <li>
                <strong>Code postal du chantier :</strong> pour vérifier la localisation de votre bien dans notre zone
                d'intervention (Paris et proche couronne).
              </li>
              <li>
                <strong>Description de votre projet (facultatif) :</strong> précisions utiles sur vos délais, superficies
                ou contraintes architecturales.
              </li>
            </ul>
            <p>
              <strong>Finalité du traitement :</strong> ces données sont traitées exclusivement pour répondre à votre
              demande de contact, vous fournir une estimation chiffrée et assurer le suivi commercial de votre projet.
              Aucune donnée n'est vendue ou cédée à des tiers à des fins publicitaires.
            </p>

            <h2>3. Sous-traitants et Outils Utilisés</h2>
            <p>Dans le cadre de l’exploitation du site et du traitement de vos demandes, nous faisons appel aux services suivants :</p>
            <ul>
              <li>
                <strong>GoHighLevel / LeadConnector :</strong> plateforme technique assurant l'hébergement sécurisé du
                formulaire de contact et la réception organisée des demandes de devis.
              </li>
              <li>
                <strong>Google Tag Manager (GTM) et Google Analytics 4 (GA4) :</strong> outils de mesure d'audience
                servant à analyser de façon globale la fréquentation du site et à améliorer la navigation.
              </li>
            </ul>

            <h2>4. Gestion des Cookies et Google Consent Mode v2</h2>
            <p>
              Notre site intègre le protocole <strong>Google Consent Mode v2</strong> afin de respecter scrupuleusement vos
              choix en matière de confidentialité :
            </p>
            <ul>
              <li>
                <strong>Par défaut :</strong> tous les traceurs et cookies de mesure d'audience (analytics_storage) et de
                publicité (ad_storage, ad_user_data, ad_personalization) sont strictement désactivés (valeur « denied »)
                tant que vous n'avez pas exprimé votre choix.
              </li>
              <li>
                <strong>Si vous refusez :</strong> aucun cookie de mesure d'audience n'est déposé, et les fonctionnalités
                du site demeurent intégralement accessibles.
              </li>
              <li>
                <strong>Si vous acceptez :</strong> seul le suivi statistique anonymisé d'audience est activé. Les
                paramètres publicitaires restent désactivés.
              </li>
            </ul>
            <p>
              Vous pouvez à tout moment réexaminer ou modifier vos choix en cliquant sur le bouton ci-dessous :
            </p>
            <div style={{ margin: "1.5rem 0" }}>
              <button
                type="button"
                className="btn btn-outline"
                onClick={(e) => openCookieSettings(e.currentTarget)}
              >
                Gérer mes préférences de cookies
              </button>
            </div>

            <h2>5. Durée de Conservation des Données</h2>
            <p>
              Vos données personnelles sont conservées uniquement pendant la durée nécessaire à l’accomplissement des
              finalités pour lesquelles elles ont été collectées, à savoir le traitement de votre demande de devis et la
              relation commerciale qui en découle, puis archivées selon les règles de prescription légale en vigueur.
            </p>

            <h2>6. Vos Droits et Modalités d'Exercice</h2>
            <p>
              Conformément à la réglementation européenne (RGPD) et à la loi Informatique et Libertés, vous disposez des
              droits suivants sur vos données personnelles :
            </p>
            <ul>
              <li>Droit d’accès et de rectification de vos données.</li>
              <li>Droit à l’effacement (« droit à l’oubli ») de vos données.</li>
              <li>Droit à la limitation du traitement.</li>
              <li>Droit d’opposition au traitement pour des motifs légitimes.</li>
            </ul>
            <p>
              Pour exercer l’un de ces droits, il vous suffit de nous adresser un message par courrier électronique à :{" "}
              <a href={`mailto:${siteConfig.email}`} className={styles.link}>
                {siteConfig.email}
              </a>
              .
            </p>
            <p>
              Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez la possibilité
              d’introduire une réclamation auprès de la Commission Nationale de l’Informatique et des Libertés (CNIL) sur{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                www.cnil.fr
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
