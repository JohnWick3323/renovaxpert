import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, Building2, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles, Home } from "lucide-react";
import type { Route } from "./+types/zones-intervention";
import { siteConfig } from "~/lib/site-config";
import { locationsData } from "~/data/locations";
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

const dept92 = locationsData.filter((l) => l.departmentCode === "92");
const dept94 = locationsData.filter((l) => l.departmentCode === "94");
const dept93 = locationsData.filter((l) => l.departmentCode === "93");

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

      {/* Villes de proche couronne Hauts-de-Seine (92) */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Hauts-de-Seine (92) — 16 Pôles Municipaux Couverts</h2>
            <p>
              Nos équipes d'artisans interviennent quotidiennement dans l'ouest parisien pour la rénovation d'appartements de standing, résidences Art Déco et habitat contemporain.
            </p>
          </div>

          <div className={styles.grid4}>
            {dept92.map((c) => (
              <div key={c.slug} className={styles.card}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)" }}>
                  <Building2 size={24} aria-hidden="true" />
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-accent)" }}>{c.postalCodes}</span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.housingType}</p>
                <Link to={`/renovation-interieure/${c.slug}`} className={styles.cardLink}>
                  Prestations à {c.name} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Val-de-Marne (94) & Seine-Saint-Denis (93) */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Val-de-Marne (94) &amp; Seine-Saint-Denis (93)</h2>
            <p>
              Rénovations soignées le long de la Marne, aux abords du bois de Vincennes, et réhabilitation d'anciens ateliers en lofts d'artistes.
            </p>
          </div>

          <div className={styles.grid4}>
            {[...dept94, ...dept93].map((c) => (
              <div key={c.slug} className={styles.card} style={{ backgroundColor: "#ffffff" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-primary)" }}>
                  <Building2 size={24} aria-hidden="true" />
                  <span style={{ fontSize: "var(--text-xs)", fontWeight: 700, color: "var(--color-accent)" }}>{c.postalCodes}</span>
                </div>
                <h3>{c.name}</h3>
                <p>{c.housingType}</p>
                <Link to={`/renovation-interieure/${c.slug}`} className={styles.cardLink}>
                  Prestations à {c.name} <ArrowRight size={14} aria-hidden="true" />
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
            <h2>Nos Prestations de Rénovation Intérieure</h2>
            <p>Toutes nos prestations sont réalisées par notre propre équipe d'artisans sans sous-traitance imprévue.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Home size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Rénovation d'Appartement</h3>
              <p>Rénovation complète tous corps d'état, coordination globale et finitions haut de gamme.</p>
              <Link to="/services/renovation-appartement-paris" className={styles.cardLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
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

      {/* Google Maps Embed Régional */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre Régional d'Intervention : Paris & Proche Couronne</h2>
            <p>
              RenovaXpert couvre l'ensemble des 20 arrondissements de Paris et les communes limitrophes des Hauts-de-Seine (92), du Val-de-Marne (94) et de Seine-Saint-Denis (93).
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Paris%2C%20France&t=&z=11&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Périmètre d'intervention RenovaXpert Paris et Proche Couronne"
            />
          </div>
        </div>
      </section>

      {/* Section guide méthodologique et logistique locale */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>L'Excellence Opérationnelle dans l'Agglomération Parisienne</h2>
            <p>
              Rénover un appartement dans le Grand Paris nécessite d'anticiper les particularités techniques et réglementaires de chaque zone géographique.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Building2 size={24} aria-hidden="true" />
              </div>
              <h3>Maîtrise du Bâti Ancien &amp; Contemporain</h3>
              <p>
                Des appartements de prestige en pierre de taille à Neuilly et Paris 16e jusqu'aux résidences modernes du Trapèze à Boulogne et du Panorama à Clamart, nos artisans adaptent leurs matériaux (peintures écologiques sans COV, ragréages fibrés et sous-couches 21 dB).
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Respect Rigoureux des Copropriétés</h3>
              <p>
                Affichage préalable dans les halls d'immeubles, protection capitonnée des ascenseurs et des moquettes de paliers, respect scrupuleux des créneaux horaires autorisés pour les travaux bruyants et gestion méthodique de l'isolation phonique aux bruits d'impact.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>SLA Réactif &amp; Visite Technique Gratuite</h3>
              <p>
                Prise de contact garantie sous 24 heures ouvrées pour convenir d'un rendez-vous sur place. Nos artisans se déplacent sans frais dans les 24 communes d'intervention pour prendre les cotes, examiner l'état des supports et établir votre devis détaillé sans engagement.
              </p>
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
