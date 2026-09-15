import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, Building2, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles } from "lucide-react";
import type { Route } from "./+types/zones-intervention";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./local-page.module.css";

const canonicalPath = "/zones-intervention";
const pageTitle = "Rénovation à Paris et proche couronne | RenovaXpert";
const pageDescription = "Travaux de rénovation intérieure dans tout Paris et en proche couronne : peinture, parquet, carrelage et placo. Devis gratuit et réponse sous 24h ouvrées.";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const hubSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `https://renovaxpert.fr${canonicalPath}#webpage`,
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "name": "Zones d'Intervention RenovaXpert",
      "description": pageDescription,
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": `https://renovaxpert.fr${canonicalPath}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://renovaxpert.fr/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Zones d'intervention",
            "item": `https://renovaxpert.fr${canonicalPath}`,
          },
        ],
      },
      "provider": {
        "@id": siteConfig.entityId,
      },
    },
  ],
};

const cities = [
  {
    name: "Boulogne-Billancourt",
    code: "92100",
    slug: "/renovation-interieure/boulogne-billancourt",
    desc: "Rénovation d'appartements familiaux, résidences Art Déco et immeubles récents aux Rives de Seine. Travaux soignés de peinture, sols et plâtrerie.",
  },
  {
    name: "Neuilly-sur-Seine",
    code: "92200",
    slug: "/renovation-interieure/neuilly-sur-seine",
    desc: "Prestations haut de gamme pour appartements en pierre de taille, parquets anciens en point de Hongrie, moulures et finitions soignées.",
  },
  {
    name: "Levallois-Perret",
    code: "92300",
    slug: "/renovation-interieure/levallois-perret",
    desc: "Réagencement d'espaces urbains denses, optimisation de cloisons en placo, carrelages modernes et rénovation de sols.",
  },
  {
    name: "Vincennes",
    code: "94300",
    slug: "/renovation-interieure/vincennes",
    desc: "Rénovation respectueuse du charme de l'ancien aux abords du Bois : parquets massifs, peintures douces et remise en état après travaux.",
  },
];

const faqs = [
  {
    q: "Quels sont les délais d'intervention de RenovaXpert à Paris et en banlieue ?",
    a: "Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite technique sur place. Le devis détaillé est ensuite préparé selon les informations et les mesures recueillies.",
  },
  {
    q: "Comment organisez-vous les chantiers dans les copropriétés denses ?",
    a: "Nous respectons rigoureusement le règlement intérieur de votre copropriété : affichage préalable, respect strict des horaires autorisés pour les travaux bruyants, protection intégrale des paliers et cabines d'ascenseur, et gestion continue des gravats avec évacuation en décharge agréée.",
  },
  {
    q: "Proposez-vous un devis gratuit pour les villes de proche couronne ?",
    a: "Oui, l'ensemble de nos devis et déplacements pour étude technique sont entièrement gratuits et sans engagement, que votre bien soit situé dans Paris intra-muros ou dans les communes limitrophes.",
  },
  {
    q: "Quels corps d'état de second œuvre prenez-vous en charge ?",
    a: "RenovaXpert prend en charge l'ensemble du second œuvre intérieur : peinture murs et plafonds, pose et rénovation de parquet, carrelage sol et mural, sol vinyle/PVC, pose de cloisons et faux plafonds en plaques de plâtre, ainsi que le nettoyage de fin de chantier.",
  },
];

export default function ZonesInterventionHub() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />

      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Zones d'intervention
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <MapPin size={14} aria-hidden="true" />
              Périmètre d'Intervention RenovaXpert
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à Paris et en Proche Couronne
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans qualifiés intervient dans l'ensemble des 20 arrondissements de Paris et
              dans les principales communes de la petite couronne. Découvrez nos zones d'intervention privilégiées pour vos
              travaux de second œuvre résidentiels et professionnels.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#devis-form-hub"
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: "zones_hub_hero_quote",
                    page_path: canonicalPath,
                    destination: "#devis-form-hub",
                  })
                }
              >
                Demander un devis gratuit <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.phone.href}
                className="btn btn-outline-white"
                onClick={() =>
                  trackClickToCall({
                    link_location: "zones_hub_hero_call",
                    page_path: canonicalPath,
                  })
                }
              >
                <Phone size={16} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Villes prioritaires de proche couronne */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Communes de Proche Couronne Couvertes</h2>
            <p>
              Nos équipes se déplacent quotidiennement dans les départements des Hauts-de-Seine (92) et du Val-de-Marne (94)
              pour réaliser vos projets de rénovation avec exigence et méthode.
            </p>
          </div>

          <div className={styles.grid4}>
            {cities.map((c) => (
              <div key={c.slug} className={styles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)" }}>
                  <Building2 size={24} aria-hidden="true" />
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-accent)" }}>{c.code}</span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <Link to={c.slug} className={styles.cardLink}>
                  Découvrir les prestations à {c.name} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Couverture globale Paris intra-muros */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Intervention dans les 20 Arrondissements de Paris</h2>
            <p>
              De la rive droite à la rive gauche, RenovaXpert assure la rénovation complète d'appartements haussmanniens,
              studios et locaux professionnels.
            </p>
          </div>

          <div className={styles.localBox}>
            <h3>Une Organisation Logistique Spécifique au Bâti Parisien</h3>
            <p style={{ marginBottom: "1rem", color: "var(--color-text-muted)" }}>
              Travailler dans Paris intra-muros exige une maîtrise parfaite des contraintes urbaines et architecturales :
            </p>
            <ul>
              <li>
                <strong>Arrondissements centraux (1er au 8e) :</strong> interventions soignées dans les immeubles
                historiques en pierre de taille, préservation des moulures, ponçage de parquets anciens et gestion rigoureuse
                des cours intérieures.
              </li>
              <li>
                <strong>Arrondissements résidentiels (9e au 17e) :</strong> réagencements d'appartements familiaux,
                création de cloisons acoustiques en plaques de plâtre, pose de carrelages de pièces d'eau et sols vinyles.
              </li>
              <li>
                <strong>Est et Sud parisien (11e au 15e, 18e au 20e) :</strong> rafraîchissement complet d'appartements
                destinés à la location ou à la vente, travaux de peinture dépolluante et remises en état intégrales de fin de chantier.
              </li>
            </ul>
          </div>

          {/* Six services overview grid */}
          <div className={styles.sectionHeader} style={{ margin: "var(--space-12) auto var(--space-8)" }}>
            <h2>Nos Six Prestations de Rénovation Intérieure</h2>
            <p>Toutes nos prestations sont réalisées par notre propre équipe d'artisans sans sous-traitance imprévue.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Paintbrush size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Peinture Intérieure</h3>
              <p>Mise en peinture soignée des murs, plafonds et boiseries après préparation méticuleuse et enduisage fin.</p>
              <Link to="/services/peinture-interieure-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.card}>
              <Layers size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose &amp; Rénovation Parquet</h3>
              <p>Pose de parquet massif, contrecollé ou stratifié, ponçage avec aspiration et vitrification protectrice.</p>
              <Link to="/services/pose-parquet-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.card}>
              <Grid3x3 size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose de Carrelage</h3>
              <p>Carrelage sol et mural pour salles de bain, cuisines et pièces à vivre, étanchéité et calepinage précis.</p>
              <Link to="/services/pose-carrelage-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.card}>
              <Leaf size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose de Sol Vinyle</h3>
              <p>Lames et dalles PVC LVT clipsables ou collées, modernes, résistantes à l'eau et faciles à entretenir.</p>
              <Link to="/services/pose-sol-vinyle-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.card}>
              <Square size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Plaquiste &amp; Cloisons</h3>
              <p>Création de cloisons distributives, faux plafonds suspendus et doublages thermiques et acoustiques.</p>
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.card}>
              <Sparkles size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Nettoyage Après Travaux</h3>
              <p>Remise en état intégrale de fin de chantier, dépoussiérage HEPA, vitrerie et décapage des résidus.</p>
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur Nos Interventions</h2>
            <p>Retrouvez toutes les informations pratiques sur nos déplacements à Paris et en banlieue.</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{f.q}</h3>
                <p className={styles.faqAnswer}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulaire de devis GHL */}
      <section className={styles.quoteSection} id="devis-form-hub">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Estimez Votre Projet de Rénovation</h2>
              <p>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="zones-hub-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
