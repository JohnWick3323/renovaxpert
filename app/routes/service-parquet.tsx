import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Layers, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import type { Route } from "./+types/service-parquet";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/pose-parquet-paris";
const pageTitle = "Pose et Rénovation de Parquet à Paris | Artisans RenovaXpert";
const pageDescription =
  "Pose de parquet massif, contrecollé et stratifié, ponçage et vitrification à Paris et proche couronne par notre équipe d'artisans. Travail soigné et devis gratuit.";

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
      "name": "Pose et rénovation de parquet à Paris",
      "serviceType": "Pose et rénovation de parquet",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de pose de parquet (massif, contrecollé, stratifié), ponçage, vitrification et remise en état de parquets anciens à Paris et en proche couronne. Travaux réalisés par notre propre équipe.",
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
          "name": "Pose de Parquet",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Quelle différence entre parquet massif, contrecollé et stratifié ?",
    a: "Le parquet massif est constitué à 100% d'un bois noble (comme le chêne) d'un seul tenant, offrant une durabilité séculaire et la possibilité de multiples ponçages. Le contrecollé se compose d'une couche d'usure en bois noble sur un support latté stable, offrant un cachet identique et une excellente stabilité dimensionnelle. Le sol stratifié est un parement d'imitation bois sur panneau haute densité, économique et rapide à poser.",
  },
  {
    q: "Peut-on rénover un vieux parquet haussmannien abîmé ?",
    a: "Oui, la plupart des parquets anciens en chêne (point de Hongrie ou pose droite) peuvent être restaurés. Notre équipe examine la solidité des lambourdes, remplace ou refixe les lames endommagées, réalise un ponçage progressif en plusieurs passes pour éliminer les anciennes cires ou vernis, puis applique un vitrificateur ou une huile de protection.",
  },
  {
    q: "Comment gérez-vous l'isolation phonique en appartement parisien ?",
    a: "Dans les copropriétés parisiennes, l'isolation contre les bruits d'impact est primordiale. En pose flottante ou collée, nous installons systématiquement des sous-couches acoustiques certifiées à haute performance phonique conformes aux normes d'affaiblissement acoustique requises en appartement.",
  },
  {
    q: "Quelle finition choisir entre vitrification et huilage ?",
    a: "La vitrification (vernis mat, satiné ou brillant) dépose un film protecteur imperméable très résistant, idéal pour un entretien aisé sans traitement régulier. L'huilage pénètre au cœur des fibres du bois pour un rendu chaleureux et mat authentique, nécessitant un entretien périodique à l'huile d'entretien.",
  },
  {
    q: "Vos travaux de parqueterie sont-ils garantis ?",
    a: "Absolument. Nos travaux de pose et de ponçage sont réalisés par notre propre équipe d'artisans et garantis selon les conditions précisées dans votre devis et votre contrat.",
  },
];

export default function ServiceParquet() {
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
              Pose Parquet Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Layers size={14} aria-hidden="true" />
              Artisans Parqueteurs Paris
            </div>
            <h1 className={styles.title}>
              Pose et Rénovation de Parquet à Paris : Savoir-Faire Traditionnel et Finitions Soignées
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe d'artisans parqueteurs assure la pose de parquets neufs (massif, contrecollé,
              stratifié) ainsi que la rénovation complète des parquets anciens à Paris et en proche couronne. Ponçage
              sans poussière, vitrification durable et respect de l'élégance de vos sols.
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
            <h2>Nos Prestations pour Vos Parquets à Paris</h2>
            <p>
              Du diagnostic de votre support jusqu'au traitement de finition, nous intervenons avec rigueur pour donner
              de la valeur et du confort à votre intérieur.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Pose de Parquet Massif</h3>
              <p>
                Pose collée en plein ou clouée sur lambourdes selon la configuration de votre plancher. Choix des essences
                nobles (chêne français, bois exotiques) pour une longévité d'exception.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Pose de Parquet Contrecollé</h3>
              <p>
                Installation flottante ou collée de parquets contrecollés haut de gamme. Excellente tenue dans le temps,
                compatibilité avec plancher chauffant et large choix de largeurs de lames.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Sols Stratifiés</h3>
              <p>
                Pose rapide et soignée de revêtements stratifiés résistants aux passages fréquents, accompagnés de
                sous-couches d'isolation acoustique adaptées aux exigences des copropriétés.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Ponçage et Sablage de Parquet</h3>
              <p>
                Ponçage mécanique en trois passes successives (gros grain, grain moyen, grain fin) avec machines équipées
                d'aspiration professionnelle pour un chantier propre et des lames remises à nu.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Vitrification et Huilage</h3>
              <p>
                Application de 2 à 3 couches de vitrificateur haute résistance (mat, satiné, aspect cire ou invisible)
                ou d'huile naturelle pour nourrir le bois en profondeur.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Réparation et Remplacement de Lames</h3>
              <p>
                Restauration des lames fendues, recollement des parties disjointes, calfeutrement des fentes et
                remplacement des pièces vermoulues ou tachées par des bois d'époque équivalents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Des Solutions Adaptées à Tous les Logements Parisiens</h2>
            <p>
              Chaque appartement ou maison à Paris possède ses particularités d'agencement et de structure de plancher.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Parquets d'Immeubles Anciens et Haussmanniens</h3>
              <p>
                Les planchers parisiens anciens reposent souvent sur des lambourdes scellées dans du plâtre ou des
                solives en bois. Nous savons vérifier la planéité, rattraper les dénivelés par ragréage fibré ou calage
                soigné, et restaurer les motifs traditionnels : chevrons, point de Hongrie ou lames anglaises.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Rénovation de Logements Modernes et Neufs</h3>
              <p>
                Pour les appartements récents ou contemporains, nous posons des parquets contrecollés de grandes largeurs
                ou des revêtements chaleureux avec des plinthes coordonnées pour une esthétique épurée et moderne.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Chambres et Pièces de Vie</h3>
              <p>
                Le bois apporte une isolation thermique naturelle et un confort inégalé pour vos chambres d'enfants,
                suites parentales et salons. Nous sélectionnons des traitements sans odeur persistante et respectueux de
                la santé.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Remise en État Avant Vente ou Location</h3>
              <p>
                Un parquet poncé et reverni métamorphose immédiatement l'aspect d'un appartement parisien. Notre
                intervention valorise votre patrimoine immobilier et séduit immédiatement acquéreurs ou locataires.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Paris Spécificités */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Contraintes Techniques et Logistiques à Paris</h2>
            <p>
              Le transport du bois et l'utilisation de ponceuses professionnelles exigent une méthode d'intervention
              parfaitement rodée en milieu urbain dense.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>La Maîtrise des Chantiers en Immeuble Parisien</h3>
            <ul>
              <li>
                <strong>Manutention et transport des lames :</strong> les paquets de lames de parquet peuvent mesurer plus
                de 2 mètres de long. Nous organisons leur montée avec précaution par escalier ou monte-meubles si
                nécessaire, sans toucher aux peintures de la cage d'escalier.
              </li>
              <li>
                <strong>Respect de l'acoustique en copropriété :</strong> nos ponceuses professionnelles sont employées
                exclusivement pendant les créneaux horaires réglementaires autorisés par la mairie de Paris et le syndic.
              </li>
              <li>
                <strong>Système d'aspiration des poussières :</strong> nos machines de ponçage de dernière génération
                captent plus de 95% des poussières de bois à la source, protégeant ainsi votre intérieur et les pièces
                adjacentes.
              </li>
              <li>
                <strong>Évacuation et recyclage des sciures et chutes :</strong> évacuation systématique des résidus dans
                des sacs étanches et dépôt en filière spécialisée.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Facteurs de devis */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Finitions et Traitements Disponibles</h2>
                <p>Personnalisez le rendu final de votre parquet selon votre style décoratif :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Vitrificateur Mat ou Ultra-Mat :</strong> préserve l'aspect brut et authentique du bois sans
                  aucun reflet artificiel.
                </li>
                <li>
                  <strong>Vitrificateur Satiné :</strong> apporte une douce lumière et met en valeur le veinage naturel du
                  chêne.
                </li>
                <li>
                  <strong>Huiles naturelles et teintées :</strong> pour un aspect huilé mat scandinave ou un effet chêne
                  vieilli / fumé sur mesure.
                </li>
                <li>
                  <strong>Plinthes et seuils de portes :</strong> pose de plinthes en bois assorties ou prêtes à peindre,
                  barres de seuil en laiton ou aluminium pour des transitions nettes.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis Parquet ?</h2>
                <p>Chaque estimation est calculée de manière transparente après visite technique :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>La superficie et la géométrie des pièces :</strong> découpes autour des cheminées, couloirs
                  étroits ou pièces régulières.
                </li>
                <li>
                  <strong>La nature de l'intervention :</strong> pose neuve avec dépose de l'ancien sol vs rénovation et
                  ponçage de parquet existant.
                </li>
                <li>
                  <strong>L'état du sous-plancher :</strong> nécessité d'un ragréage autolissant ou de reprise des
                  lambourdes anciennes.
                </li>
                <li>
                  <strong>Le type de pose choisi :</strong> pose flottante, pose collée en plein ou pose clouée
                  traditionnelle.
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
            <h2>Pourquoi Faire Appel à RenovaXpert pour Votre Parquet ?</h2>
            <p>Une équipe d'artisans investis pour un travail pérenne et une vraie garantie de satisfaction.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Artisans Salariés</h3>
              <p>
                Nos chantiers sont menés par notre propre équipe de parqueteurs expérimentés, garants du respect des
                règles de l'art du DTU 51.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Nous nous engageons sur la stabilité de la pose et la durabilité des
                finitions.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Réactivité et Devis Gratuit</h3>
              <p>
                Prise de contact sous 24 heures ouvrées par téléphone ou formulaire et visite technique sans frais dans tout Paris et en proche
                couronne.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Pose et Rénovation de Parquet</h2>
            <p>Tout ce qu'il faut savoir avant d'engager vos travaux de parqueterie à Paris.</p>
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
            <h2>Prestations Complémentaires pour Vos Sols et Intérieurs</h2>
            <p>Notre équipe coordonne l'ensemble de votre rénovation pour un résultat sans couture :</p>
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
            <Link to="/services/pose-sol-vinyle-paris" className={styles.relatedLink}>
              <span>Pose de Sol Vinyle et PVC</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/pose-carrelage-paris" className={styles.relatedLink}>
              <span>Pose de Carrelage Sol &amp; Mur</span>
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
              <h2>Demandez Votre Devis Gratuit pour Vos Parquets</h2>
              <p>
                Renseignez votre projet en quelques clics : notre équipe étudie vos besoins et vous recontacte sous 24
                heures ouvrées afin d'établir une estimation précise et sans engagement.
              </p>
            </div>
            <GhlQuoteForm variant="transparent" id="parquet-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
