import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Square, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import type { Route } from "./+types/service-placo";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/pose-plaques-de-platre-paris";
const pageTitle = "Plaquiste à Paris : Pose de Placo, Cloisons & Plafonds | RenovaXpert";
const pageDescription =
  "Artisans plaquistes à Paris et proche couronne pour la pose de plaques de plâtre, cloisons amovibles, faux plafonds et doublages isolants. Devis gratuit et réponse sous 24h ouvrées.";

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
      "name": "Pose de plaques de plâtre et travaux de plaquiste à Paris",
      "serviceType": "Travaux de plâtrerie et cloisons",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de plaquiste à Paris et en proche couronne : pose de placo, création de cloisons distributives, faux plafonds suspendus, doublages muraux thermiques et acoustiques. Travaux réalisés par notre propre équipe.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Paris",
        },
        {
          "@type": "AdministrativeArea",
          "name": "Proche couronne",
        },
      ],
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
          "name": "Plaquiste / Plaques de Plâtre",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Quels types de plaques de plâtre utilisez-vous pour les rénovations à Paris ?",
    a: "Nous sélectionnons des plaques normalisées NF selon les besoins spécifiques de chaque pièce : plaques BA13 standard pour les pièces sèches (salons, chambres), plaques hydrofuges (vertes) indispensables pour les pièces humides (salles de bain, cuisines), plaques phoniques haute densité (bleues) pour l'isolation acoustique mitoyenne, et plaques coupe-feu pour les locaux techniques.",
  },
  {
    q: "Comment garantissez-vous l'isolation phonique entre deux pièces ou avec le voisinage ?",
    a: "Dans les immeubles anciens parisiens, la transmission sonore est une préoccupation majeure. Nous posons des cloisons sur ossature métallique désolidarisée par bandes résilientes, avec incorporation d'une laine minérale isolante et, si nécessaire, un double parement de plaques de plâtre acoustiques pour affaiblir significativement les bruits d'impact et aériens.",
  },
  {
    q: "Est-il possible d'intégrer des gaines électriques et des éclairages encastrés dans les faux plafonds ?",
    a: "Absolument. La création d'un faux plafond en plaques de plâtre suspendu ou autoportant permet de dissimuler élégamment l'ensemble des gaines électriques, alimentations de climatisation ou tuyauteries, tout en intégrant des spots LED encastrés ou des gorges lumineuses pour un éclairage indirect moderne.",
  },
  {
    q: "Quelle est la qualité de finition des joints avant la mise en peinture ?",
    a: "Notre équipe réalise un traitement des joints en trois passes : collage de la bande armée ou micro-perforée, passe de charge et passe de finition à l'enduit fin. Après séchage complet, un ponçage fin soigné garantit une planéité irréprochable sans surépaisseur, prête à recevoir la sous-couche d'impression et la peinture.",
  },
  {
    q: "Comment gérez-vous l'acheminement des plaques dans les immeubles parisiens sans ascenseur ?",
    a: "L'accès aux étages dans les immeubles anciens à Paris est un défi classique. Nous adaptons le format des plaques (plaques de format réduit 60x250 ou 120x250 cm) et notre logistique pour monter les matériaux par l'escalier dans le strict respect des parties communes et sans encombrer les paliers.",
  },
];

export default function ServicePlaco() {
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
              Plaquiste Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Square size={14} aria-hidden="true" />
              Artisans Plaquistes Paris
            </div>
            <h1 className={styles.title}>
              Plaquiste à Paris : Pose de Plaques de Plâtre, Cloisons & Faux Plafonds
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe de plaquistes professionnels réalise tous vos travaux de plâtrerie sèche à Paris et
              en proche couronne. Redistribution des volumes, création de cloisons isolantes, faux plafonds modernes et
              doublages muraux : des finitions lisses et planes, prêtes pour vos peintures.
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

      {/* Ce que comprend notre prestation */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Une Prestation Complète de Plâtrerie et Pose de Placo</h2>
            <p>
              De la conception des ossatures métalliques jusqu'au ponçage final des joints, nous assurons des ouvrages
              rigides, droits et parfaitement isolés.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Création de Cloisons Distributives</h3>
              <p>
                Montage de cloisons séparatives légères et solides sur rails et montants métalliques, permettant de
                redessiner l'espace, créer une chambre supplémentaire, un dressing ou un bureau.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Faux Plafonds Suspendus et Décoratifs</h3>
              <p>
                Installation de faux plafonds en plaques de plâtre pour réduire les hauteurs excessives, intégrer des spots
                lumineux et dissimuler gaines électriques et conduits techniques.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Doublage Thermique et Acoustique</h3>
              <p>
                Isolation intérieure des murs mitoyens et façades par pose de complexe isolant ou ossature avec laine
                minérale, réduisant les déperditions de chaleur et les nuisances sonores.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Plaques Techniques et Pièces Humides</h3>
              <p>
                Mise en œuvre de plaques hydrofuges BA13 pour les salles d'eau, plaques haute dureté pour les zones à fort
                passage et plaques coupe-feu pour les chaufferies et gaines techniques.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Traitement Soigné des Bandes et Joints</h3>
              <p>
                Pose méticuleuse des bandes à joint papier et armées sur angles sortants, enduisage en trois passes croisées
                pour une planéité absolue sans bosses ni creux visibles.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Intégration des Portes et Menuiseries</h3>
              <p>
                Pose et calage précis des blocs-portes intérieurs battants ou intégration de châssis pour portes à galandage
                à encastrer dans l'épaisseur de la cloison.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations et Projets */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pour Quels Projets Faire Appel à Nos Plaquistes à Paris ?</h2>
            <p>
              Nos artisans adaptent leurs techniques de plâtrerie aux particularités architecturales des logements parisiens.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Réagencement d'Appartements Anciens et Haussmanniens</h3>
              <p>
                Redistribuer les pièces dans un appartement parisien nécessite une grande sensibilité aux structures
                existantes : planchers bois, cloisons légères en briques plâtrières et moulures anciennes. Nous créons des
                séparations modernes sans alourdir les planchers et en raccordant proprement les lignes aux plafonds d'époque.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Création de Suites Parentales et Salles de Bain</h3>
              <p>
                Aménagement d'espaces privatifs intégrant salle d'eau, dressing et coin nuit avec des cloisons hydrofuges
                renforcées pour supporter les meubles suspendus et la robinetterie encastrée.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Isolation Phonique Renforcée en Copropriété</h3>
              <p>
                Pour vous protéger des bruits de pas, de voix ou de circulation parisienne, nous installons des doublages
                acoustiques désolidarisés qui préservent le calme et l'intimité de votre foyer.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Rénovation de Bureaux et Locaux Professionnels</h3>
              <p>
                Agencement d'open-spaces, salles de réunion insonorisées et cabines téléphoniques avec des cloisons amovibles
                ou fixes en plaques de plâtre haute performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contraintes spécifiques à Paris */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Spécificités et Rigueur sur les Chantiers Parisiens</h2>
            <p>
              La manipulation et la découpe des plaques de plâtre au cœur de Paris imposent une organisation logistique sans
              faille.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>Notre Engagement sur le Terrain Parisien</h3>
            <ul>
              <li>
                <strong>Logistique et montée des matériaux :</strong> les cages d'escalier haussmanniennes étroites
                requièrent l'utilisation de formats de plaques adaptés et une manutention attentive afin de préserver les
                murs des parties communes.
              </li>
              <li>
                <strong>Protection et captation des poussières :</strong> la découpe du plâtre et le ponçage des joints
                génèrent des poussières très fines. Nous utilisons des outils avec aspiration raccordée et calfeutrons
                soigneusement les portes pour éviter toute dispersion.
              </li>
              <li>
                <strong>Respect de la vie de l'immeuble :</strong> respect strict des horaires autorisés pour la fixation des
                ossatures métalliques et le perçage des dalles béton ou plafonds bois.
              </li>
              <li>
                <strong>Évacuation et recyclage des chutes :</strong> stockage ordonné des chutes de plâtre et des profilés
                métalliques, et évacuation continue vers les filières de valorisation de déchets de plâtre d'Île-de-France.
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
                <h2>Choix des Plaques et Systèmes d'Ossature</h2>
                <p>Nous sélectionnons les matériaux les plus performants du marché pour vos cloisons :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Plaques Standard BA13 :</strong> adaptées à la majorité des cloisons séparatives et plafonds en
                  pièces sèches.
                </li>
                <li>
                  <strong>Plaques Hydrofuges (H1) :</strong> haute résistance à l'humidité, impératives pour les douches,
                  cuisines et sanitaires.
                </li>
                <li>
                  <strong>Plaques Phoniques :</strong> cœur de plâtre haute densité à structure cristalline amortissante,
                  réduisant le bruit jusqu'à 50% par rapport à une plaque standard.
                </li>
                <li>
                  <strong>Ossatures métalliques certifiées :</strong> montants et rails en acier galvanisé dimensionnés pour
                  garantir une rigidité structurelle parfaite dans le temps.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis ?</h2>
                <p>Nos estimations sont chiffrées selon les spécificités de votre appartement :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>La nature des ouvrages :</strong> simple doublage mural, cloison distributive avec porte intégrée,
                  ou faux plafond suspendu sur structure laser.
                </li>
                <li>
                  <strong>La hauteur sous plafond :</strong> le travail en grande hauteur (supérieure à 3 mètres) nécessite
                  des échafaudages intérieurs adaptés.
                </li>
                <li>
                  <strong>Les performances techniques requises :</strong> intégration d'isolants minéraux, cloisons double
                  peau ou plaques spécifiques coupe-feu/phoniques.
                </li>
                <li>
                  <strong>L'accessibilité du logement :</strong> étage, présence d'un ascenseur ou transport manuel par les
                  escaliers.
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
            <h2>Pourquoi Choisir RenovaXpert pour Vos Travaux de Plaquiste ?</h2>
            <p>Une équipe d'artisans plaquistes qualifiés, méthodiques et respectueux de votre intérieur.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                Des plaquistes professionnels expérimentés réalisent vos travaux avec rigueur, de l'ossature aux finitions.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Un contrôle de rectitude et de niveau est effectué sur chaque ouvrage.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                Que vous nous contactiez par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour  organiser une
                visite technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Pose de Placo à Paris</h2>
            <p>Retrouvez nos réponses pratiques aux interrogations les plus fréquentes.</p>
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
              Après la pose de vos cloisons et plafonds, notre équipe assure la continuité de votre chantier avec nos autres
              corps d'état :
            </p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Zones d'intervention (Paris &amp; Proche Couronne)</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/services/peinture-interieure-paris" className={styles.relatedLink}>
              <span>Peinture Intérieure Murs &amp; Plafonds</span>
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
              <h2>Demandez Votre Devis Gratuit de Plaquiste</h2>
              <p>
                Que votre demande arrive par téléphone ou via le formulaire, notre équipe répond sous 24 heures ouvrées pour organiser une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="placo-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
