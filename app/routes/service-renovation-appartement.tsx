import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Home, CheckCircle2, ShieldCheck, Clock, Hammer, Layers, Paintbrush, Sparkles } from "lucide-react";
import type { Route } from "./+types/service-renovation-appartement";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/renovation-appartement-paris";
const pageTitle = "Rénovation d'Appartement à Paris | RenovaXpert";
const pageDescription =
  "Rénovation d'appartement à Paris et proche couronne : travaux tous corps d'état et finitions soignées. Réponse sous 24h ouvrées et devis gratuit.";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `https://renovaxpert.fr${canonicalPath}#service`,
      "name": "Rénovation d'appartement complète à Paris",
      "serviceType": "Entreprise générale de rénovation d'appartement tous corps d'état",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de rénovation complète d'appartements et maisons à Paris et en proche couronne : peinture, pose de parquet, carrelage, sols vinyles, cloisons placo et nettoyage fin de chantier. Travaux réalisés par notre propre équipe d'artisans.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": siteConfig.serviceAreaName,
    },
    {
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
          "name": "Nos Services",
          "item": "https://renovaxpert.fr/services",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Rénovation d'Appartement",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Comment se déroule la rénovation complète d'un appartement à Paris ?",
    a: "Chaque projet débute par une visite technique sur place pour évaluer l'état des lieux, prendre les cotes et écouter vos souhaits d'aménagement. Après validation de votre devis détaillé, nos artisans préparent le chantier, assurent les protections des parties communes, réalisent les travaux de second œuvre dans l'ordre méthodologique, et procèdent au nettoyage de fin de chantier avant livraison.",
  },
  {
    q: "Quelles sont les règles de copropriété à respecter pour des travaux à Paris ?",
    a: "À Paris, les règlements de copropriété imposent des créneaux stricts pour les bruits de chantier (généralement 8h30-18h en semaine, interdits le week-end et jours fériés). Nous affichons obligatoirement un avis préalable dans le hall, protégeons les ascenseurs et moquettes de couloirs, et assurons l'isolation acoustique aux bruits d'impact (19 à 21 dB).",
  },
  {
    q: "Quel délai prévoir pour la rénovation d'un 2 ou 3 pièces parisien ?",
    a: "Pour une rénovation de second œuvre complète (peinture intégrale, remise à neuf des sols, réfection de cloisons phoniques et finitions) d'un appartement de 50 à 75 m², comptez généralement entre 3 et 6 semaines de travaux selon l'état d'origine du bâti.",
  },
  {
    q: "Coordonnez-vous l'ensemble des corps d'état ?",
    a: "Oui, notre propre équipe d'artisans qualifiés regroupe peintres, parqueteurs, carreleurs et plaquistes. Vous bénéficiez d'un interlocuteur unique pour la planification globale de vos travaux, évitant tout retard ou défaut de coordination entre les différents métiers.",
  },
  {
    q: "Vos chantiers de rénovation sont-ils garantis ?",
    a: "Absolument. Tous les travaux réalisés par notre équipe sont couverts et garantis selon les termes précisés dans votre devis et votre contrat d'engagement.",
  },
];

export default function ServiceRenovationAppartement() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/services">Nos Services</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Rénovation d'Appartement Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Home size={14} aria-hidden="true" />
              Entreprise Générale de Rénovation Paris
            </div>
            <h1 className={styles.title}>
              Rénovation d'Appartement à Paris : Expertise Tous Corps d'État &amp; Finitions Haut de Gamme
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans prend en charge l'ensemble de votre rénovation d'appartement à Paris et en proche
              couronne. De la redistribution des pièces jusqu'aux finitions les plus délicates, nous transformons votre habitat
              avec rigueur, respect des délais et garantie de satisfaction.
            </p>
            <div className={styles.heroActions}>
              <a href="#devis-section" className="btn btn-accent">
                Demander un devis gratuit <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href={siteConfig.phone.href} className="btn btn-outline-white">
                <Phone size={16} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que comprend le service */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Une Prise en Charge Globale pour Votre Rénovation Intérieure</h2>
            <p>
              Un projet de rénovation réussi repose sur une organisation rigoureuse et une maîtrise technique pointue de chaque
              corps de métier.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Peinture &amp; Revêtements Muraux</h3>
              <p>
                Préparation minutieuse des fonds, ratissage d'enduit, pose de calicots et application de peintures veloutées ou mates
                dépolluantes à très faible teneur en COV.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Parquets &amp; Rénovation des Sols</h3>
              <p>
                Pose de parquets en chêne massif, contrecollé ou stratifié, ponçage sans poussière et vitrification de parquets anciens
                avec sous-couches acoustiques 21 dB.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Carrelage &amp; Salles de Bain</h3>
              <p>
                Pose de carrelage grand format, faïence murale et mosaïque dans les cuisines et pièces d'eau avec étanchéité sous
                carrelage certifiée.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Sols Vinyles &amp; LVT Clipsables</h3>
              <p>
                Rénovation express de sols avec dalles ou lames PVC étanches et résistantes à fort trafic, idéales pour appartements
                en location.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Plaquiste &amp; Cloisons Phoniques</h3>
              <p>
                Création de cloisons distributives Placostil®, faux plafonds acoustiques et doublages isolants pour redistribuer les
                volumes selon votre mode de vie.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Nettoyage Après Travaux</h3>
              <p>
                Dépoussiérage intégral, décapage des traces d'enduit et de colle, lavage des vitres pour un emménagement immédiat
                dans les meilleures conditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodologie et Engagements */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Notre Protocole d'Intervention en 5 Étapes Structurées</h2>
            <p>
              Pour garantir la sérénité de votre chantier d'appartement, nos artisans suivent un calendrier rigoureux conforme aux normes françaises.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>1. Diagnostic &amp; Devis Détaillé</h3>
              <p>
                Visite technique sur place sous 24 à 48 heures ouvrées, métré précis au laser, analyse des supports et chiffrage poste par poste sans frais.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>2. Protection des Parties Communes</h3>
              <p>
                Bâchage hermétique des ascenseurs, paliers et escaliers, pose d'un avis de travaux en hall d'immeuble et respect strict des créneaux de copropriété.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Hammer size={24} aria-hidden="true" />
              </div>
              <h3>3. Gros Œuvre &amp; Cloisonnement</h3>
              <p>
                Dépose soignée des cloisons non porteuses, évacuation des gravats en filière agréée et montage des ossatures Placostil® avec isolant phonique.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Layers size={24} aria-hidden="true" />
              </div>
              <h3>4. Sols &amp; Revêtements Muraux</h3>
              <p>
                Ragréage fibré, pose de parquet ou carrelage avec sous-couches 21 dB, ratissage des enduits en deux passes et peintures soignées dépolluantes.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Sparkles size={24} aria-hidden="true" />
              </div>
              <h3>5. Nettoyage &amp; Livraison Conforme</h3>
              <p>
                Nettoyage approfondi de fin de chantier, retrait des protections, vérification contradictoire des finitions et remise des clés sous garantie d'achèvement.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Engagement Délais &amp; SLA</h3>
              <p>
                Planification calendaire contractuelle avec points d'étape réguliers et interlocuteur unique dédié tout au long de vos travaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spécificités Parisiennes */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>La Maîtrise des Spécificités Immobilières Parisiennes</h2>
            <p>
              Chaque quartier et chaque époque de construction à Paris et en proche couronne imposent des méthodes de travail adaptées.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Immeubles Haussmanniens &amp; Pierre de Taille</h3>
              <p>
                Conservation du cachet d'origine : restauration des moulures en staff, parquets en point de Hongrie, cheminées en marbre
                et respect des structures anciennes en briques plâtrières et planchers sur solives.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Résidences des Années 1960-1970 &amp; Dalles Béton</h3>
              <p>
                Isolation acoustique renforcée : mise en œuvre de sous-couches phoniques résilientes garantissant une atténuation
                d'au moins 19 à 21 dB aux bruits de chocs, obligatoire dans la plupart des règlements de copropriété.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Logistique Urbaine &amp; Parties Communes</h3>
              <p>
                Gestion soignée des approvisionnements dans les rues denses parisiennes, protection intégrale des halls et cabines d'ascenseur,
                et évacuation quotidienne des gravats vers des déchetteries agréées.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Optimisation des Espaces &amp; Télétravail</h3>
              <p>
                Réagencement des mètres carrés parisiens pour intégrer des verrières d'atelier, des coins bureaux discrets et des rangements
                sur mesure pour valoriser chaque mètre carré au prix du marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Rénovation d'Appartement</h2>
            <p>Toutes les réponses pour préparer votre projet de rénovation en toute sérénité.</p>
          </div>

          <div className={styles.faqList}>
            {faqItems.map((item) => (
              <div key={item.q} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{item.q}</h3>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestations Complémentaires et Liens Villes */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations et Zones d'Intervention en Île-de-France</h2>
            <p>RenovaXpert intervient à Paris intra-muros et dans les principales communes de proche couronne :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Zones d'intervention (Paris &amp; Proche Couronne)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/peinture-interieure-paris" className={styles.relatedLink}>
              <span>Peinture Intérieure à Paris</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-parquet-paris" className={styles.relatedLink}>
              <span>Pose &amp; Rénovation de Parquet à Paris</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-carrelage-paris" className={styles.relatedLink}>
              <span>Pose de Carrelage Sol &amp; Mur</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-sol-vinyle-paris" className={styles.relatedLink}>
              <span>Pose de Sol Vinyle &amp; PVC (LVT)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-plaques-de-platre-paris" className={styles.relatedLink}>
              <span>Plaquiste &amp; Cloisons en Placo</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire Devis GHL */}
      <section className={styles.quoteSection} id="devis-section">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis Gratuit de Rénovation d'Appartement</h2>
              <p>
                Présentez-nous votre projet en quelques lignes : notre équipe étudie votre demande et vous répond sous 24
                heures ouvrées pour organiser une visite technique gratuite et sans engagement.
              </p>
            </div>
            <GhlQuoteForm variant="transparent" id="renovation-appartement-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
