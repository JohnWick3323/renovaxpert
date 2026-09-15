import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import type { Route } from "./+types/service-nettoyage";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import styles from "./service-page.module.css";

const canonicalPath = "/services/nettoyage-apres-travaux-paris";
const pageTitle = "Nettoyage Après Travaux à Paris : Fin de Chantier | RenovaXpert";
const pageDescription =
  "Service professionnel de nettoyage après travaux et fin de chantier à Paris et proche couronne. Dépoussiérage minutieux, lavage des vitres, décapage des sols. Devis gratuit.";

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
      "name": "Nettoyage après travaux et remise en état de fin de chantier à Paris",
      "serviceType": "Nettoyage de fin de chantier",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de nettoyage après travaux à Paris et en proche couronne : remise en état intégrale de fin de chantier, dépoussiérage méticuleux, nettoyage des vitres et menuiseries, traitement des sols et élimination des résidus. Travaux réalisés par notre propre équipe.",
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
          "name": "Nettoyage Après Travaux",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqItems = [
  {
    q: "Quelle est la différence entre un ménage classique et un nettoyage de fin de chantier ?",
    a: "Le nettoyage après travaux requiert du matériel industriel et des compétences techniques spécifiques : élimination des poussières fines de plâtre qui s'infiltrent partout, décapage des traces d'enduit, de colle, de voile de ciment (laitance de carrelage) et de peinture, ainsi que le lavage en profondeur des vitrages et profilés sans rayer les surfaces neuves.",
  },
  {
    q: "Fournissez-vous l'ensemble du matériel et des produits de nettoyage ?",
    a: "Oui, notre équipe intervient avec tout l'équipement professionnel requis : aspirateurs industriels avec filtration HEPA haute efficacité, monobrosses, nettoyeurs vapeur, produits professionnels adaptés à chaque revêtement (dégraissants neutres, éliminateurs de voile de ciment) et chiffons microfibres neufs pour garantir un résultat sans trace.",
  },
  {
    q: "À quel moment faut-il planifier le nettoyage après rénovation ?",
    a: "L'idéal est de programmer le nettoyage de fin de chantier juste après l'achèvement complet des corps d'état (peinture, sols, plomberie, électricité) et avant l'emménagement ou la livraison du mobilier. Cela permet d'intervenir sur des surfaces dégagées et d'assurer une remise en état optimale.",
  },
  {
    q: "Prenez-vous en charge les parties communes d'immeuble à Paris ?",
    a: "Oui. Dans le cadre de chantiers de rénovation en copropriété parisienne, nous pouvons intégrer le dépoussiérage et le nettoyage complet des paliers, de la cage d'escalier et de l'ascenseur empruntés pendant les travaux, pour préserver d'excellentes relations avec votre voisinage et le syndic.",
  },
  {
    q: "Combien de temps dure une intervention de remise en état complète ?",
    a: "Pour un appartement parisien de 2 à 4 pièces, l'intervention est généralement réalisée en une journée complète par notre équipe dédiée. Pour les grands volumes ou les remises en état très lourdes, un planning détaillé vous est transmis avec l'estimation.",
  },
];

export default function ServiceNettoyage() {
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
              Nettoyage Après Travaux Paris
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Sparkles size={14} aria-hidden="true" />
              Remise en État de Chantier Paris
            </div>
            <h1 className={styles.title}>
              Nettoyage Après Travaux à Paris : Remise en État Complète de Fin de Chantier
            </h1>
            <p className={styles.subtitle}>
              Notre propre équipe spécialisée prend en charge le nettoyage minutieux de vos logements et locaux
              professionnels après travaux à Paris et en proche couronne. Dépoussiérage méticuleux, élimination des résidus
              de plâtre et de peinture, lavage des vitrages et assainissement des sols pour un intérieur impeccable prêt à habiter.
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
            <h2>Une Remise en État Minutieuse Après Rénovation</h2>
            <p>
              Un protocole d'intervention méthodique pour éliminer toute trace de chantier et restituer un logement
              parfaitement sain et accueillant.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Dépoussiérage Intégral et Aspiration HEPA</h3>
              <p>
                Aspiration minutieuse des plafonds, murs, corniches, plinthes, portes, placards et radiateurs à l'aide
                d'aspirateurs industriels équipés de filtres haute efficacité pour capter les particules fines sans les disperser.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Nettoyage des Vitres et Menuiseries</h3>
              <p>
                Dégraissage et lavage recto-verso des vitrages, grattage soigné des projections de peinture ou d'enduit sans
                rayer le verre, dépoussiérage des feuillures, encadrements et rails de baies coulissantes.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Décapage et Traitement des Sols</h3>
              <p>
                Aspiration, décapage des voiles de ciment sur carrelages neufs, nettoyage doux des parquets vitrifiés ou
                huilés et lavage professionnel des revêtements PVC vinyle selon les prescriptions des fabricants.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Désinfection des Pièces d'Eau</h3>
              <p>
                Nettoyage approfondi et détartrage des sanitaires, douches, baignoires, parois vitrées, robinetteries et
                crédences pour une hygiène irréprochable.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Cuisine et Équipements Intégrés</h3>
              <p>
                Nettoyage intérieur et extérieur des meubles neufs ou rénovés, dépoussiérage des plans de travail, tiroirs et
                électroménagers intégrés pour une mise en service immédiate.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Évacuation des Résidus et Emballages</h3>
              <p>
                Collecte des cartons résiduels, bâches de protection usagées et petits déchets de finition, avec évacuation
                vers les filières de tri adaptées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Situations et Projets */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Dans Quelles Situations Intervenons-Nous à Paris ?</h2>
            <p>
              Nos équipes interviennent avec flexibilité pour répondre aux exigences des propriétaires, bailleurs et architectes.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card}>
              <h3>Livraison de Chantier de Rénovation Complète</h3>
              <p>
                À l'issue de plusieurs semaines ou mois de travaux importants (maçonnerie, placo, peinture, parquets), notre
                intervention permet de révéler toute la beauté de votre investissement architectural en éliminant la chape
                de poussière de chantier.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Emménagement et Installation Immédiate</h3>
              <p>
                Avant de faire livrer vos meubles et effets personnels, profitez d'un intérieur intégralement dépoussiéré,
                aéré et assaini pour emménager l'esprit serein sans avoir à réaliser les corvées de ménage de fin de chantier.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Remise en Location ou Vente Immobilière</h3>
              <p>
                Un appartement parisien impeccable et éclatant maximise l'effet coup de cœur des acquéreurs ou locataires
                potentiels lors des visites et valorise directement votre patrimoine immobilier.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Fin de Travaux dans les Bureaux et Commerces</h3>
              <p>
                Remise en état rapide de boutiques, cabinets médicaux ou plateaux de bureaux à Paris pour permettre la
                reprise de l'activité professionnelle dans les meilleurs délais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contraintes spécifiques à Paris */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Rigueur et Logistique dans les Immeubles Parisiens</h2>
            <p>
              Le nettoyage de chantier à Paris obéit à des règles strictes pour préserver la quiétude des résidents et la
              propreté des parties communes.
            </p>
          </div>

          <div className={styles.parisBox}>
            <h3>Notre Engagement sur le Terrain Parisien</h3>
            <ul>
              <li>
                <strong>Préservation des parties communes et paliers :</strong> nous veillons à ce que la poussière de
                chantier ne se répande pas dans les couloirs et procédons à l'aspiration des paliers et cabines d'ascenseur
                empruntés.
              </li>
              <li>
                <strong>Matériel silencieux et filtration HEPA :</strong> utilisation d'aspirateurs industriels silencieux
                équipés de filtres haute rétention évitant tout rejet de particules dans l'air ambiant et respectant le calme
                des copropriétés.
              </li>
              <li>
                <strong>Respect de l'ancien et des matériaux nobles :</strong> les appartements parisiens renferment souvent
                des moulures anciennes, dorures, cheminées en marbre ou parquets point de Hongrie qui nécessitent des produits
                au pH neutre et des gestes artisanaux délicats.
              </li>
              <li>
                <strong>Ponctualité et coordination avec les artisans :</strong> notre équipe intervient au créneau exact
                convenu pour s'intégrer harmonieusement entre la fin des derniers raccordements et votre emménagement.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Matériel et Facteurs de Devis */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.grid2}>
            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Matériel et Produits Professionnels Utilisés</h2>
                <p>Nous utilisons des équipements de niveau industriel respectueux des matériaux :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>Aspirateurs à cuve haute filtration HEPA :</strong> rétention des poussières de silice et de
                  plâtre ultrafines sans dispersion résiduelle.
                </li>
                <li>
                  <strong>Monobrosses et disques de polissage doux :</strong> décapage uniforme des dalles et carreaux de
                  sol sans agresser les émaux.
                </li>
                <li>
                  <strong>Racleurs professionnels de vitrier :</strong> élimination des résidus de colle et d'enduit sur
                  les vitres avec des lames inox adaptées anti-rayures.
                </li>
                <li>
                  <strong>Produits d'entretien écoresponsables :</strong> détergents à faible impact environnemental et
                  respectueux de la qualité de l'air intérieur.
                </li>
              </ul>
            </div>

            <div>
              <div className={styles.sectionHeader} style={{ textAlign: "left", margin: "0 0 1.5rem" }}>
                <h2>Quels Éléments Déterminent Votre Devis ?</h2>
                <p>Le chiffrage d'une remise en état après travaux dépend de plusieurs critères objectifs :</p>
              </div>
              <ul style={{ paddingLeft: "1.25rem", lineHeight: 1.8, fontSize: "var(--text-sm)", color: "var(--color-text)" }}>
                <li>
                  <strong>La surface développée du bien :</strong> nombre de pièces, superficie habitable et hauteur sous
                  plafond.
                </li>
                <li>
                  <strong>L'intensité des résidus de chantier :</strong> simple voile de poussière après peinture vs restes
                  de plâtrerie lourde, laitance de ciment ou traces de colles.
                </li>
                <li>
                  <strong>Le linéaire de vitrages et menuiseries :</strong> nombre de fenêtres, portes-fenêtres, baies vitrées
                  et verrières à nettoyer sur les deux faces.
                </li>
                <li>
                  <strong>La présence de meubles :</strong> logement entièrement vide ou logement meublé nécessitant le
                  dépoussiérage minutieux de chaque élément.
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
            <h2>Pourquoi Choisir RenovaXpert pour Votre Fin de Chantier ?</h2>
            <p>L'assurance d'un intérieur étincelant pris en charge par des professionnels de la rénovation.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                Nos intervenants maîtrisent parfaitement les exigences des fins de chantier et le respect des finitions neuves.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Prestations</h3>
              <p>
                {siteConfig.guaranteeStatement} Contrôle qualité exhaustif réalisé pièce par pièce en fin d'intervention.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                Étude rapide de votre demande et réponse sous 24 heures ouvrées par téléphone ou formulaire pour s'adapter à votre calendrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur le Nettoyage Après Travaux</h2>
            <p>Retrouvez nos réponses pour préparer au mieux la remise en état de votre logement.</p>
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
            <h2>Nos Autres Prestations de Rénovation à Paris</h2>
            <p>
              RenovaXpert prend en charge l'ensemble de votre projet de rénovation intérieure avant la phase de nettoyage final :
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
            <Link to="/services/pose-carrelage-paris" className={styles.relatedLink}>
              <span>Pose de Carrelage Sol et Mur</span>
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
              <h2>Demandez Votre Devis Gratuit de Nettoyage de Chantier</h2>
              <p>
                Que votre demande arrive par téléphone ou via le formulaire, notre équipe répond sous 24 heures ouvrées pour organiser une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="nettoyage-quote-form" />
          </div>
        </div>
      </section>
    </main>
  );
}
