import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Grid3x3, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import type { Route } from "./+types/service-carrelage";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/pose-carrelage-paris";
const pageTitle = "Pose de Carrelage à Paris : Sols et Murs | RenovaXpert";
const pageDescription =
  "Artisans carreleurs à Paris et proche couronne pour la pose de carrelage sol et mur, faïence et mosaïque. Travaux soignés, calepinage précis et devis gratuit.";

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
      "name": "Pose de carrelage à Paris",
      "serviceType": "Pose de carrelage sol et mur",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de pose de carrelage sol et mural, faïence de salle de bain, crédence de cuisine et carreaux grand format à Paris et en proche couronne. Travaux réalisés par notre propre équipe.",
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
          "name": "Pose de Carrelage",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Peut-on poser du carrelage sur un ancien carrelage ou un plancher bois à Paris ?",
    a: "Oui, sous certaines conditions strictes. Sur un ancien carrelage sain, nous appliquons un primaire d'accrochage spécifique avant collage. Sur un plancher bois (très fréquent dans les immeubles parisiens), une pose directe est proscrite en raison des mouvements naturels du bois : nous mettons en place un panneau de désolidarisation ou une natte étanche armée pour éviter toute fissure ultérieure.",
  },
  {
    q: "Quelle étanchéité prévoyez-vous pour une douche à l'italienne ou une salle de bain ?",
    a: "Dans les pièces d'eau, nous appliquons systématiquement un Système de Protection à l'Eau sous Carrelage (SPEC) ou une membrane d'étanchéité liquide (SEL) avec bandes d'étanchéité dans tous les angles rentrants, garantissant une imperméabilité totale pour prévenir tout risque de sinistre en copropriété.",
  },
  {
    q: "Posez-vous les carreaux grand format (60x60, 60x120 ou plus) ?",
    a: "Tout à fait. La pose de carrelage grand format exige une planéité parfaite du support. Nous réalisons un ragréage autonivelant renforcé et pratiquons le double encollage obligatoire au mortier-colle haute performance déformable pour garantir une adhérence sans vide d'air.",
  },
  {
    q: "Quel type de joint recommandez-vous pour les pièces humides ?",
    a: "Nous utilisons des mortiers-joints hydrofuges anti-moisissures pour les salles de bain et cuisines, disponibles dans un large éventail de teintes coordonnées. Pour les environnements très exposés, nous pouvons également appliquer des joints époxy ultra-résistants et antitaches.",
  },
  {
    q: "Vos travaux de carrelage sont-ils garantis ?",
    a: "Oui, tous les travaux de carrelage et faïence réalisés par notre propre équipe d'artisans sont garantis selon les conditions précisées dans votre devis et votre contrat.",
  },
];

export default function ServiceCarrelage() {
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
              Pose Carrelage Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Grid3x3 size={14} aria-hidden="true" />
              Artisans Carreleurs Paris
            </div>
            <h1 className={styles.title}>
              Pose de Carrelage à Paris : Sols, Murs et Pièces d'Eau aux Finitions Impeccables
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans carreleurs assure la pose de vos carrelages, faïences, crédences et mosaïques
              dans tout Paris et en proche couronne. Calepinage soigné, découpes nettes et étanchéité garantie pour sublimer
              vos salles de bain, cuisines et pièces à vivre.
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
            <h2>Une Pose de Carrelage Rigoureuse et Durable</h2>
            <p>
              La réussite d'un carrelage repose sur une préparation méticuleuse du support et une précision millimétrique
              lors de l'alignement et des découpes.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Préparation et Ragréage du Sol</h3>
              <p>
                Contrôle des niveaux, dégraissage ou dépose de l'ancien revêtement, et coulage d'un ragréage autolissant
                fibré pour obtenir une surface parfaitement plane et stable.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Étanchéité sous Carrelage (SPEC)</h3>
              <p>
                Application de membranes et résines d'étanchéité sous carrelage dans les douches, baignoires et plans de
                vasque pour protéger durablement le bâti et éviter les infiltrations d'eau.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Calepinage Personnalisé</h3>
              <p>
                Étude préalable de la disposition des carreaux pour centrer harmonieusement les motifs, équilibrer les
                coupes en bordure et éviter les chutes inesthétiques dans les angles visibles.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pose Sol et Grands Formats</h3>
              <p>
                Double encollage au mortier-colle haute performance (C2S) avec croisillons autonivelants pour garantir des
                surfaces planes sans décalage d'arêtes, du 30x30 aux grands formats 120x120.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Faïence Murale et Crédences</h3>
              <p>
                Pose précise de carrelage mural, carreaux de métro, zelliges, faïences grand format et mosaïques décoratives
                pour salles de bain design et cuisines contemporaines.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Jointoiement et Finitions</h3>
              <p>
                Réalisation de joints hydrofuges fins et réguliers, pose de profilés d'angle en aluminium ou inox, et joints
                silicone élastomère sanitaires anti-moisissures dans les angles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pour Quelles Pièces et Quels Projets Intervenons-Nous ?</h2>
            <p>
              Nos carreleurs s'adaptent à toutes les contraintes de configuration des appartements et maisons d'Île-de-France.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Rénovation Complète de Salles de Bain</h3>
              <p>
                De la douche à l'italienne au tour de baignoire, nous réalisons l'étanchéité, la pose de faïences murales
                et de carrelage au sol antidérapant (norme R10/R11), créant des espaces d'eau fonctionnels et esthétiques.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Cuisines et Crédences Décoratives</h3>
              <p>
                Pose de carrelages résistants aux taches et aux chocs pour vos sols de cuisine, et habillage soigné de vos
                murs avec des crédences en carrelage métro, céramique émaillée ou pierre naturelle.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pièces de Vie et Entrées</h3>
              <p>
                Carrelage imitation parquet, effet béton ciré ou marbre pour apporter modernité, clarté et facilité
                d'entretien à vos séjours et couloirs d'entrée soumis à un passage fréquent.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Terrasses et Balcons Parisiens</h3>
              <p>
                Pose de grès cérame extérieur résistant au gel et aux intempéries, avec respect des pentes d'écoulement des
                eaux pluviales et traitements d'étanchéité périphérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paris Spécificités */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Contraintes Techniques du Carrelage en Logement Parisien</h2>
            <p>
              Le poids des matériaux et les planchers bois imposent des précautions techniques rigoureuses à Paris.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>Les Précautions Essentielles de Notre Équipe</h3>
            <ul>
              <li>
                <strong>Étude de la charge admissible sur plancher ancien :</strong> les immeubles anciens à structure bois
                ne supportent pas des chapes béton trop lourdes. Nous privilégions les ragréages allégés et les nattes de
                désolidarisation minces.
              </li>
              <li>
                <strong>Acheminement des cartons de carrelage :</strong> le carrelage représente un poids très important. Nos
                artisans organisent le transport par escalier sans surcharger les paliers ni détériorer les cages d'immeuble.
              </li>
              <li>
                <strong>Découpes à l'eau et aspiration :</strong> découpes effectuées à la scie à eau ou à la meuleuse avec
                aspiration connectée pour réduire au maximum le dégagement de poussières fines.
              </li>
              <li>
                <strong>Protection absolue contre les fuites :</strong> une étanchéité imparfaite en étage parisien peut
                causer des dégâts des eaux chez les voisins du dessous. Nous testons chaque zone humide avec rigueur.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facteurs de Devis */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Matériaux et Types de Carrelage Posés</h2>
                <p>Nous maîtrisons la pose de l'ensemble des revêtements céramiques et minéraux :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Grès Cérame émaillé ou pleine masse :</strong> le matériau le plus durable, résistant à l'usure,
                  aux rayures et aux produits ménagers.
                </li>
                <li>
                  <strong>Faïence murale :</strong> légère et déclinée en d'infinis coloris et textures, idéale pour les
                  murs de salle de bain.
                </li>
                <li>
                  <strong>Mosaïque et pâte de verre :</strong> parfaite pour les receveurs de douche, niches murales et
                  frises décoratives.
                </li>
                <li>
                  <strong>Carreaux de ciment ou imitation :</strong> authenticité des motifs rétro pour donner un charme
                  unique aux cuisines et entrées parisiennes.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis Carrelage ?</h2>
                <p>Nos devis sont détaillés poste par poste après analyse de vos pièces :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>La surface et le support :</strong> superficie totale en m², dépose éventuelle de l'ancien
                  revêtement et état du ragréage requis.
                </li>
                <li>
                  <strong>Le format des carreaux :</strong> les petits carreaux (mosaïque) et les très grands formats (60x120
                  et plus) requièrent un temps de pose et une technicité accrus.
                </li>
                <li>
                  <strong>La complexité des découpes :</strong> passage de tuyauteries, angles nombreux, niches de douche et
                  encadrements de fenêtres.
                </li>
                <li>
                  <strong>Les travaux d'étanchéité :</strong> mise en œuvre des nattes et résines d'étanchéité sous carrelage.
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
            <h2>Pourquoi Choisir RenovaXpert pour Votre Carrelage à Paris ?</h2>
            <p>Une équipe d'artisans carreleurs à votre écoute pour un travail soigné et durable.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                Vos travaux de carrelage sont pris en charge directement par nos artisans carreleurs qualifiés, sans
                sous-traitance opaque.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Nous veillons à l'alignement parfait des joints et à l'étanchéité sans faille.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise de Contact Rapide</h3>
              <p>
                Que vous nous contactiez par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour  convenir d'une visite
                d'évaluation gratuite.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Pose de Carrelage</h2>
            <p>Retrouvez nos réponses d'artisans sur la planification et l'exécution de vos travaux.</p>
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
            <h2>Prestations Complémentaires pour Vos Travaux</h2>
            <p>Nos artisans coordonnent l'ensemble de votre chantier de rénovation intérieure :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Zones d'intervention (Paris &amp; Proche Couronne)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/peinture-interieure-paris" className={styles.relatedLink}>
              <span>Peinture Intérieure et Décoration</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-sol-vinyle-paris" className={styles.relatedLink}>
              <span>Pose de Sol Vinyle et PVC</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/nettoyage-apres-travaux-paris" className={styles.relatedLink}>
              <span>Nettoyage Après Travaux</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire GHL */}
      <section className={styles.quoteSection} id="devis-section">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis Gratuit pour Vos Carrelages</h2>
              <p>
                Que votre demande arrive par téléphone ou via le formulaire, notre équipe répond sous 24 heures ouvrées pour organiser une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="carrelage-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
