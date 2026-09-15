import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Paintbrush, CheckCircle2, ShieldCheck, Clock, Sparkles } from "lucide-react";
import type { Route } from "./+types/service-peinture";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/peinture-interieure-paris";
const pageTitle = "Peinture Intérieure à Paris - Entreprise de Peinture | RenovaXpert";
const pageDescription =
  "Travaux de peinture intérieure à Paris et proche couronne par notre propre équipe d'artisans. Préparation soignée des murs et plafonds, peintures de qualité et devis gratuit.";

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
      "name": "Peinture intérieure à Paris",
      "serviceType": "Travaux de peinture intérieure",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de peinture intérieure à Paris et en proche couronne : préparation soignée des supports, mise en peinture murs et plafonds, finitions mates, velours et satinées. Travaux réalisés par notre propre équipe.",
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
          "name": "Peinture Intérieure",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Quelles peintures utilisez-vous pour les appartements parisiens ?",
    a: "Nous sélectionnons des peintures professionnelles à faible émission de COV (composés organiques volatils), adaptées aux pièces de vie et aux pièces humides. Selon vos préférences et la luminosité de vos pièces, nous appliquons des finitions mates (idéales pour masquer les imperfections des plafonds), veloutées (chaleureuses et lessivables) ou satinées.",
  },
  {
    q: "Comment préparez-vous les murs anciens ou fissurés ?",
    a: "La préparation est la phase la plus importante de notre intervention : nous réalisons le décapage ou le lessivage des anciens revêtements, l'ouverture et le rebouchage des fissures à l'enduit armé, la pose de calicots si nécessaire, puis l'application d'enduit de lissage suivi d'un ponçage soigné avant la couche d'impression.",
  },
  {
    q: "Comment s'organise le chantier en copropriété à Paris ?",
    a: "Notre équipe respecte strictement le règlement de votre copropriété : affichage d'un avis de travaux dans les parties communes, respect des horaires autorisés pour les travaux bruyants, protection complète des paliers, ascenseurs et escaliers, et nettoyage quotidien des zones d'accès.",
  },
  {
    q: "Combien de temps durent des travaux de peinture pour un appartement complet ?",
    a: "La durée dépend de la superficie et de l'état initial des supports. Pour un 2 ou 3 pièces parisien nécessitant une préparation standard, le chantier s'échelonne généralement entre 4 et 8 jours ouvrés. Un planning précis vous est remis avec votre devis.",
  },
  {
    q: "Vos travaux de peinture sont-ils garantis ?",
    a: "Oui, tous les travaux réalisés par notre propre équipe d'artisans sont garantis selon les conditions précisées dans votre devis et votre contrat.",
  },
];

export default function ServicePeinture() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/services">Nos Services</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Peinture Intérieure Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Paintbrush size={14} aria-hidden="true" />
              Artisans Peintres Paris
            </div>
            <h1 className={styles.title}>
              Peinture Intérieure à Paris : Travaux Soignés pour Appartements et Maisons
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans peintres prend en charge l'ensemble de vos travaux de peinture intérieure
              dans tout Paris et en proche couronne. De la préparation minutieuse des murs anciens jusqu'aux finitions
              les plus exigeantes, nous sublimons vos intérieurs avec rigueur et propreté.
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

      {/* Ce que comprend notre service */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Une Prestation Complète de Peinture Intérieure</h2>
            <p>
              Pour un résultat durable et sans défaut, nous ne nous contentons pas d'appliquer de la peinture : nous
              traitons chaque surface avec méthode et savoir-faire professionnel.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Protection Intégrale du Chantier</h3>
              <p>
                Bâchage des sols, protection des plinthes, des fenêtres, des prises et du mobilier conservé dans les
                pièces. Protection renforcée des parties communes de l'immeuble.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Préparation Experte des Murs</h3>
              <p>
                Lessivage, décollement des anciens papiers peints, rebouchage des trous et fissures, application d'enduit
                de lissage en passes croisées et ponçage avec aspiration intégrée.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Impression et Sous-Couche</h3>
              <p>
                Application d'une couche d'impression technique adaptée à la porosité de vos murs (plâtre ancien,
                plaque de plâtre, maçonnerie) pour fixer le fond et optimiser l'accroche.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Peinture Murs et Plafonds</h3>
              <p>
                Application de deux couches de finition de peinture professionnelle. Finitions soignées au rouleau et au
                pinceau à rechampir pour des découpes nettes le long des menuiseries.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Laquage et Boiseries</h3>
              <p>
                Peinture décorative et émaillage soigné des portes, moulures, encadrements, plinthes en bois et
                radiateurs pour une harmonie parfaite de vos espaces intérieurs.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Nettoyage et Contrôle Final</h3>
              <p>
                Retrait des protections, aspiration des résidus de poussière, évacuation des déchets et contrôle rigoureux
                de la qualité des finitions en votre présence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations et Projets */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pour Quels Types de Projets Intervenons-Nous à Paris ?</h2>
            <p>
              Notre équipe s'adapte aux spécificités architecturales de l'habitat parisien et de la région Île-de-France.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Rénovation d'Appartements Haussmanniens</h3>
              <p>
                Les immeubles anciens parisiens présentent des défis uniques : moulures en stuc, corniches délicates,
                murs en plâtre traditionnel et hauteurs sous plafond importantes. Nous mettons en œuvre des techniques
                spécifiques pour restaurer ces éléments sans les dénaturer, en utilisant des enduits fins et des
                peintures mates ou velours qui valorisent les volumes d'époque.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Rafraîchissement Résidentiel et Locatif</h3>
              <p>
                Que vous veniez d'acquérir un logement ou que vous prépariez la remise en location d'un bien à Paris,
                nous réalisons la remise en peinture rapide et soignée de vos pièces : séjour, chambres, couloirs,
                cuisine et salle de bain. Nous privilégions des peintures résistantes, lessivables et faciles d'entretien.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Remise en État Après Dégât des Eaux</h3>
              <p>
                En cas d'infiltration ou de sinistre dégât des eaux, nous intervenons après séchage complet pour
                assainir les fonds, appliquer un bloqueur de taches isolant et repeindre les plafonds et cloisons
                touchés, avec transmission d'un devis conforme aux exigences de votre assurance.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Locaux Professionnels et Bureaux</h3>
              <p>
                Nous rénovons les peintures de vos espaces de travail, cabinets et commerces parisiens avec une
                organisation adaptée à vos contraintes d'activité pour minimiser les interruptions de service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contraintes spécifiques à Paris */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Spécificités et Exigences des Chantiers Parisiens</h2>
            <p>
              Réaliser des travaux de peinture à Paris demande une grande rigueur logistique et un respect scrupuleux des
              règles de vie collective.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>Notre Engagement sur le Terrain Parisien</h3>
            <ul>
              <li>
                <strong>Accès difficile et escaliers étroits :</strong> qu'il s'agisse d'un étage élevé sans ascenseur,
                d'un escalier de service ou d'un passage sur cour, notre équipe achemine l'outillage et les matériaux
                avec précaution, sans dégrader les parties communes.
              </li>
              <li>
                <strong>Respect de la copropriété :</strong> nous respectons scrupuleusement les règlements d'immeuble
                en vigueur dans les arrondissements de Paris (horaires de chantier, limitation des bruits, affichage
                préalable).
              </li>
              <li>
                <strong>Protection des parties communes :</strong> pose de protections renforcées sur les tapis de
                couloir, les marches d'escalier et les parois des ascenseurs durant toute la durée du chantier.
              </li>
              <li>
                <strong>Gestion responsable des poussières et déchets :</strong> ponçage raccordé à des aspirateurs
                haute efficacité pour limiter les poussières volatiles, évacuation systématique des pots et déchets de
                peinture vers les centres de traitement agréés.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Matériaux et Facteurs de Devis */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Choix des Peintures et Finitions</h2>
                <p>Nous vous guidons pour choisir la finition idéale selon l'usage de vos pièces :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Finition Mate :</strong> absorption de la lumière, idéale pour les plafonds et les grands séjours
                  lumineux, masque efficacement les légères irrégularités du support.
                </li>
                <li>
                  <strong>Finition Velours :</strong> le compromis parfait entre mat et satiné, soyeuse, douce au regard et
                  facilement lavable, recommandée pour les chambres et salons.
                </li>
                <li>
                  <strong>Finition Satinée :</strong> légèrement brillante et très résistante aux frottements et à
                  l'humidité, particulièrement adaptée aux cuisines, salles d'eau, couloirs et boiseries.
                </li>
                <li>
                  <strong>Peintures écologiques dépolluantes :</strong> formulation biosourcée et assainissante pour une
                  qualité d'air intérieur optimale.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis ?</h2>
                <p>Nos estimations sont établies après étude précise de votre logement :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>L'état initial des supports :</strong> murs neufs en plaques de plâtre vs murs anciens écaillés
                  ou fissurés nécessitant plusieurs passes d'enduit complet.
                </li>
                <li>
                  <strong>La surface développée :</strong> métré réel des murs, des plafonds et des boiseries associées.
                </li>
                <li>
                  <strong>La hauteur sous plafond :</strong> la présence d'échafaudages spécifiques pour les hauteurs
                  supérieures à 3 mètres (courantes dans l'ancien à Paris).
                </li>
                <li>
                  <strong>Les boiseries et détails décoratifs :</strong> moulures complexes, radiateurs en fonte,
                  fenêtres et portes nécessitant un travail minutieux de rechampi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi RenovaXpert */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pourquoi Choisir RenovaXpert pour Vos Peintures à Paris ?</h2>
            <p>Des artisans qualifiés qui s'engagent sur la qualité, les délais et la satisfaction client.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                Vos travaux sont réalisés directement par notre propre équipe d'artisans peintres expérimentés, sans
                intermédiaire imprévu.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Nous assurons un suivi rigoureux pour vous offrir un intérieur impeccable.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                Que vous nous contactiez par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour organiser une visite
                technique gratuite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Peinture Intérieure</h2>
            <p>Retrouvez nos réponses concrètes aux interrogations les plus courantes de nos clients parisiens.</p>
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

      {/* Prestations Complémentaires */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Prestations Complémentaires pour Votre Rénovation</h2>
            <p>
              Pour un projet complet de rénovation intérieure, notre équipe coordonne l'ensemble des corps d'état
              associés à vos peintures :
            </p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Zones d'intervention (Paris &amp; Proche Couronne)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-plaques-de-platre-paris" className={styles.relatedLink}>
              <span>Pose de Plaques de Plâtre / Plaquiste</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-parquet-paris" className={styles.relatedLink}>
              <span>Pose et Rénovation de Parquet</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/nettoyage-apres-travaux-paris" className={styles.relatedLink}>
              <span>Nettoyage Après Travaux</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section Formulaire Devis GHL */}
      <section className={styles.quoteSection} id="devis-section">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis Gratuit de Peinture</h2>
              <p>
                Que votre demande arrive par téléphone ou via le formulaire, notre équipe répond sous 24 heures ouvrées pour organiser une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="peinture-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
