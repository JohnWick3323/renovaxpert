import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Leaf, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import type { Route } from "./+types/service-sol-vinyle";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/pose-sol-vinyle-paris";
const pageTitle = "Pose de Sol Vinyle et PVC à Paris | Artisans RenovaXpert";
const pageDescription =
  "Pose de sol vinyle et dalles PVC (LVT) à Paris et proche couronne par notre équipe d'artisans. Revêtements modernes, résistants et isolants. Devis gratuit.";

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
      "name": "Pose de sol vinyle à Paris",
      "serviceType": "Pose de sol vinyle et PVC",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de pose de revêtements de sol vinyle, lames et dalles PVC LVT clipsables ou collées à Paris et en proche couronne. Travaux réalisés par notre propre équipe.",
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
          "name": "Pose de Sol Vinyle",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Quels sont les avantages du sol vinyle en appartement parisien ?",
    a: "Le sol vinyle moderne (lames LVT) offre une épaisseur réduite (4 à 6 mm), évitant le rabotage important des portes d'origine. Il offre un confort acoustique remarquable réduisant les bruits de pas, résiste à 100% à l'humidité et présente des imitations de parquet ou de béton ciré bluffantes de réalisme.",
  },
  {
    q: "Faut-il nécessairement faire un ragréage avant de poser du vinyle ?",
    a: "Oui, la planéité du support est cruciale pour les sols vinyles clipsables ou collés. La moindre aspérité ou dénivelé sous une lame fine peut marquer le revêtement dans le temps. Notre équipe réalise systématiquement un diagnostic et applique un ragréage autolissant pour un sol parfaitement plat.",
  },
  {
    q: "Le sol vinyle peut-il être posé dans une salle de bain ou une cuisine ?",
    a: "Absolument. Les lames et dalles vinyles PVC rigides sont totalement imputrescibles et insensibles à l'eau, ce qui en fait une alternative chaleureuse et rapide à poser face au carrelage traditionnel dans les pièces d'eau.",
  },
  {
    q: "Quelle différence entre vinyle clipsable et vinyle collé ?",
    a: "Le vinyle clipsable est posé de façon flottante sur une sous-couche adaptée, permettant un chantier rapide et une dépose aisée. Le vinyle collé en plein est directement fixé au sol après primaire d'accroche, offrant une stabilité thermique maximale et une sonorité très feutrée.",
  },
  {
    q: "Vos travaux de pose de sol vinyle sont-ils garantis ?",
    a: "Oui, l'ensemble des travaux de préparation et de pose de sol vinyle réalisés par notre propre équipe d'artisans est garanti selon les conditions précisées dans votre devis et votre contrat.",
  },
];

export default function ServiceSolVinyle() {
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
              Pose Sol Vinyle Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Leaf size={14} aria-hidden="true" />
              Sols Souples &amp; PVC Paris
            </div>
            <h1 className={styles.title}>
              Pose de Sol Vinyle et Lames PVC à Paris : Élégance Moderne et Confort Acoustique
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans assure la pose de revêtements de sol vinyle rigide (LVT), lames PVC clipsables
              ou collées et dalles vinyles dans tout Paris et en proche couronne. Une solution esthétique, étanche et
              durable pour rénover rapidement vos sols sans travaux lourds.
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
            <h2>Une Prestation Complète de Pose de Sol Vinyle</h2>
            <p>
              Pour un rendu parfait sans vagues ni désaffleurement, nous apportons un soin minutieux à la préparation du
              sol et à la précision des découpes.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Diagnostic et Préparation du Support</h3>
              <p>
                Vérification de la planéité, de l'humidité résiduelle et de la solidité du sol support (chape, carrelage
                ancien ou plancher). Dépose de l'ancien revêtement si nécessaire.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Ragréage Autolissant</h3>
              <p>
                Application d'un primaire d'accrochage et coulage d'un ragréage haute précision pour éliminer tout creux
                ou irrégularité susceptible de marquer les lames vinyles.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Sous-Couche Acoustique Dédiée</h3>
              <p>
                Installation de sous-couches techniques certifiées pour revêtements vinyles, assurant une isolation phonique
                optimale conforme aux attentes des copropriétés parisiennes.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pose Lames et Dalles LVT Clipsables</h3>
              <p>
                Assemblage précis par emboîtement étanche avec respect des joints de dilatation périphériques le long des
                murs pour garantir la stabilité dimensionnelle du sol.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pose Collée Haute Adhérence</h3>
              <p>
                Encollage en plein avec des colles écologiques sans solvant pour les pièces soumises à fort trafic ou
                présentant un fort ensoleillement direct.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Plinthes et Profilés de Transition</h3>
              <p>
                Pose de plinthes assorties ou peintes en blanc, barres de seuil de jonction extra-plates et finitions
                soignées autour des huisseries et tuyaux de radiateurs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Idéal Pour Tous Vos Espaces de Vie à Paris</h2>
            <p>
              Le sol vinyle est plébiscité dans les appartements parisiens pour son épaisseur minimale et sa grande polyvalence.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Rénovation Rapide sans Surélévation</h3>
              <p>
                Avec une épaisseur moyenne de 4 à 5 mm, les lames vinyles peuvent être posées sans obliger à raboter les
                portes ou créer de fortes marches au niveau des paliers, un atout majeur dans les petits espaces et studios
                parisiens.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Cuisines et Salles d'Eau</h3>
              <p>
                Contrairement au parquet bois, le vinyle rigide est totalement étanche. Il ne craint ni les éclaboussures
                d'eau ni les taches grasses de cuisine, tout en restant doux et chaleureux sous les pieds nus.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pièces de Vie et Chambres d'Enfants</h3>
              <p>
                Silencieux à la marche, résistant aux rayures de jouets ou de griffes d'animaux domestiques et très facile à
                nettoyer au quotidien avec un simple chiffon humide.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Bureaux et Espaces Professionnels</h3>
              <p>
                Résistance certifiée aux passages fréquents et aux roulettes de sièges de bureau, avec dalles amovibles
                facilitant l'accès aux réseaux techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paris Spécificités */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Spécificités Logistiques et Confort Sonore à Paris</h2>
            <p>
              Dans les immeubles anciens, l'insonorisation est au cœur de la tranquillité de voisinage.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>Les Atouts du Vinyle en Immeuble Parisien</h3>
            <ul>
              <li>
                <strong>Atténuation des bruits d'impact :</strong> combiné à une sous-couche haute densité, le vinyle
                absorbe efficacement les bruits de talons, chocs et déplacements de meubles, préservant la quiétude des
                voisins du dessous.
              </li>
              <li>
                <strong>Acheminement facile en étage élevé :</strong> les paquets de lames vinyles sont plus compacts et
                légers que les colis de carrelage lourd, facilitant grandement la livraison dans les escaliers étroits
                parisiens.
              </li>
              <li>
                <strong>Chantier sec et rapide :</strong> la découpe au cutter sans poussière ni projection d'eau permet une
                intervention propre et rapide, réduisant la durée d'indisponibilité de votre appartement.
              </li>
              <li>
                <strong>Respect scrupuleux des copropriétés :</strong> aucune nuisance sonore excessive lors de la pose des
                lames, horaires de chantier respectés.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Décors et Facteurs de Devis */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Une Grande Variété de Décors Disponibles</h2>
                <p>Trouvez le style idéal pour personnaliser votre décoration intérieure :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Imitation Parquet Chêne :</strong> chêne naturel, blanchi, fumé ou grisé, avec chanfreins en V
                  et texture de grain de bois synchronisée.
                </li>
                <li>
                  <strong>Imitation Béton Ciré &amp; Métal :</strong> grands carreaux contemporains pour une ambiance loft
                  épurée.
                </li>
                <li>
                  <strong>Imitation Marbre &amp; Pierre Naturelle :</strong> l'élégance minérale sans le froid ni la fragilité
                  de la pierre brute.
                </li>
                <li>
                  <strong>Carreaux de Ciment Rétro :</strong> motifs géométriques parfaits pour dynamiser une cuisine ou un
                  sas d'entrée.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis ?</h2>
                <p>Chaque estimation est calculée de manière claire et transparente :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>La surface globale des pièces :</strong> métrage précis incluant les placards et dégagements.
                </li>
                <li>
                  <strong>L'état du sol existant :</strong> nécessité d'un décapage, arrachage d'ancienne moquette ou
                  ragréage de nivellement.
                </li>
                <li>
                  <strong>La technique de pose :</strong> pose flottante clipsée sur sous-couche ou pose collée en plein.
                </li>
                <li>
                  <strong>Les découpes et finitions :</strong> géométrie des pièces, pose de plinthes coordonnées et profils
                  de seuil.
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
            <h2>Pourquoi Faire Poser Votre Sol Vinyle par RenovaXpert ?</h2>
            <p>Le professionnalisme d'une équipe dédiée pour un résultat net et durable.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                Nos artisans qualifiés réalisent l'intégralité de vos travaux de pose, avec un respect rigoureux des
                règles techniques de dilatation.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Nous veillons à la parfaite stabilité et à la tenue irréprochable de votre sol.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Réponse sous 24h &amp; Visite</h3>
              <p>
                Prise de contact rapide sous 24 heures ouvrées par téléphone ou formulaire pour évaluer votre projet avant établissement de votre devis gratuit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur le Sol Vinyle</h2>
            <p>Retrouvez nos réponses pour préparer sereinement la rénovation de vos sols.</p>
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
            <h2>Prestations Complémentaires pour Votre Logement</h2>
            <p>Notre équipe coordonne l'ensemble de vos travaux intérieurs :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Zones d'intervention (Paris &amp; Proche Couronne)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/peinture-interieure-paris" className={styles.relatedLink}>
              <span>Peinture Intérieure Murs et Plafonds</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-parquet-paris" className={styles.relatedLink}>
              <span>Pose et Rénovation de Parquet</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-carrelage-paris" className={styles.relatedLink}>
              <span>Pose de Carrelage Sol et Mur</span>
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
              <h2>Demandez Votre Devis Gratuit pour Vos Sols Vinyles</h2>
              <p>
                Que votre demande arrive par téléphone ou via le formulaire, notre équipe répond sous 24 heures ouvrées pour organiser une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="vinyle-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
