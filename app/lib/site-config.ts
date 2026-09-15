/**
 * Configuration publique centrale pour RenovaXpert.
 * Entreprise de rénovation intérieure intervenant dans tout Paris et en proche couronne.
 * Source unique de vérité pour les coordonnées publiques, la zone d'intervention,
 * les prestations, les garanties et l'intégration du formulaire de devis.
 */

export const siteConfig = {
  brandName: "RenovaXpert",
  canonicalOrigin: "https://renovaxpert.fr",
  entityId: "https://renovaxpert.fr/#organization",
  websiteId: "https://renovaxpert.fr/#website",
  logoUrl: "https://renovaxpert.fr/RenovaXpert-Logo-Final.png",
  phone: {
    display: "07 53 38 16 54",
    international: "+33 7 53 38 16 54",
    tel: "+33753381654",
    href: "tel:+33753381654",
  },
  email: "renovaxpert7@gmail.com",
  serviceArea: "dans tout Paris et en proche couronne",
  serviceAreaLabel: "Intervention dans tout Paris et en proche couronne",
  serviceAreaName: "Paris et proche couronne",
  expandedServiceArea:
    "Nous intervenons dans les 20 arrondissements de Paris et en proche couronne.",
  callbackSla: "Réponse sous 24 heures ouvrées (téléphone ou formulaire)",
  leadDisclosure:
    "Que votre demande arrive par téléphone ou via le formulaire, notre équipe vous répond ou vous recontacte sous 24 heures ouvrées. Le devis détaillé est ensuite préparé selon les informations et les mesures recueillies.",
  guaranteeStatement:
    "Garantie sur nos travaux selon les conditions précisées dans le devis et le contrat.",
  teamStatement: "Travaux réalisés par notre propre équipe d'artisans.",
  indexingEnabled: false,

  ghl: {
    formUrl: "https://link.westlanddre.com/widget/form/3CjwChGZ2ZSmy16TGijM",
    formScript: "https://link.westlanddre.com/js/form_embed.js",
    formId: "3CjwChGZ2ZSmy16TGijM",
    iframeTitle: "Formulaire de demande de devis RenovaXpert",
  },

  servicesList: [
    {
      id: "peinture",
      name: "Peinture Intérieure",
      slug: "peinture-interieure-paris",
      path: "/services/peinture-interieure-paris",
      serviceType: "Travaux de peinture intérieure",
      shortDesc:
        "Peinture murs et plafonds, préparation des supports, enduits et finitions soignées.",
      relatedSlugs: [
        "pose-parquet-paris",
        "pose-plaques-de-platre-paris",
        "nettoyage-apres-travaux-paris",
      ],
    },
    {
      id: "parquet",
      name: "Pose de Parquet",
      slug: "pose-parquet-paris",
      path: "/services/pose-parquet-paris",
      serviceType: "Pose et rénovation de parquet",
      shortDesc:
        "Pose de parquet massif, contrecollé ou stratifié, ponçage et vitrification haute résistance.",
      relatedSlugs: [
        "peinture-interieure-paris",
        "pose-sol-vinyle-paris",
        "pose-carrelage-paris",
      ],
    },
    {
      id: "carrelage",
      name: "Pose de Carrelage",
      slug: "pose-carrelage-paris",
      path: "/services/pose-carrelage-paris",
      serviceType: "Pose de carrelage sol et mur",
      shortDesc:
        "Carrelage sol et mur pour cuisines, salles de bain et pièces à vivre, faïence et calepinage précis.",
      relatedSlugs: [
        "peinture-interieure-paris",
        "pose-sol-vinyle-paris",
        "nettoyage-apres-travaux-paris",
      ],
    },
    {
      id: "sol-vinyle",
      name: "Pose de Sol Vinyle",
      slug: "pose-sol-vinyle-paris",
      path: "/services/pose-sol-vinyle-paris",
      serviceType: "Pose de revêtement de sol vinyle et PVC",
      shortDesc:
        "Installation de sols vinyles en lames ou dalles PVC (LVT), isolants, durables et faciles d'entretien.",
      relatedSlugs: [
        "pose-parquet-paris",
        "pose-carrelage-paris",
        "peinture-interieure-paris",
      ],
    },
    {
      id: "placo",
      name: "Pose de plaques de plâtre / Plaquiste",
      slug: "pose-plaques-de-platre-paris",
      path: "/services/pose-plaques-de-platre-paris",
      serviceType: "Travaux de plâtrerie et cloisons",
      shortDesc:
        "Création de cloisons, faux plafonds et doublages muraux en plaques de plâtre, finitions prêtes à peindre.",
      relatedSlugs: [
        "peinture-interieure-paris",
        "pose-parquet-paris",
        "nettoyage-apres-travaux-paris",
      ],
    },
    {
      id: "nettoyage",
      name: "Nettoyage Après Travaux",
      slug: "nettoyage-apres-travaux-paris",
      path: "/services/nettoyage-apres-travaux-paris",
      serviceType: "Nettoyage de fin de chantier",
      shortDesc:
        "Remise en état complète, dépoussiérage minutieux, lavage des vitres et évacuation des résidus de chantier.",
      relatedSlugs: [
        "peinture-interieure-paris",
        "pose-carrelage-paris",
        "pose-parquet-paris",
      ],
    },
  ],
} as const;

export default siteConfig;
