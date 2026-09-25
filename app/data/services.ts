export interface ServiceScopeItem {
  title: string;
  description: string;
}

export interface ServiceTechnicalFaq {
  q: string;
  a: string;
}

export interface ServiceData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  heroHeadline: string;
  serviceType: string;
  tradeTitle: string;
  shortDesc: string;
  metaTitleTemplate: string;
  metaDescTemplate: string;
  scopePoints: ServiceScopeItem[];
  coproprieteConsiderations: string;
  technicalFaqs: ServiceTechnicalFaq[];
  relatedServiceSlugs: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: "peinture",
    slug: "peinture-interieure",
    name: "Peinture Intérieure",
    shortName: "Peinture",
    heroHeadline: "Travaux de Peinture Intérieure & Finitions Soignées",
    serviceType: "Travaux de peinture intérieure et revêtements muraux",
    tradeTitle: "Artisans Peintres",
    shortDesc: "Préparation soignée des supports, ratissage d'enduit, peintures mates, veloutées et laquées à faible émission de COV.",
    metaTitleTemplate: "Peintre Intérieur à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Artisans peintres à {city} ({postalCode}) : préparation des murs, enduits et peintures soignées mates ou velours. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Protection intégrale du chantier",
        description: "Bâchage hermétique des sols, parquets, menuiseries et mobiliers avec rubans de masquage professionnels sans résidu.",
      },
      {
        title: "Préparation et réfection des fonds",
        description: "Rebouchage des fissures, ratissage complet en deux passes d'enduit fin et ponçage mécanique avec aspiration haute efficacité.",
      },
      {
        title: "Application des couches de finition",
        description: "Une couche d'impression microporeuse suivie de deux couches de finition acrylique ou alkyde veloutée, mate ou satinée.",
      },
      {
        title: "Laquage des boiseries et radiateurs",
        description: "Égrenage des portes, plinthes, encadrements et radiateurs en fonte, puis laquage soigné au rouleau laqueur.",
      },
    ],
    coproprieteConsiderations:
      "Dans les immeubles collectifs de {city}, nos peintres travaillent exclusivement avec des peintures sans odeur certifiées Écolabel ou A+, évitant toute gêne pour le voisinage dans les parties communes.",
    technicalFaqs: [
      {
        q: "Quel type de peinture privilégier pour un appartement à {city} ?",
        a: "Nous recommandons des peintures mates pour les plafonds (pour masquer les imperfections de lumière rasante) et des finitions veloutées ou satinées dépolluantes pour les pièces de vie et couloirs, qui allient résistance au lessivage et douceur visuelle.",
      },
      {
        q: "Comment traitez-vous les fissures récurrentes des plafonds anciens ?",
        a: "Nous ouvrons la fissure en biseau, posons une bande armée ou un calicot en fibre de verre micro-perforé, puis appliquons un enduit de rebouchage fibré avant ratissage de surfaçage.",
      },
      {
        q: "Combien de temps faut-il pour repeindre un appartement complet ?",
        a: "Pour un 3 pièces standard (60 à 75 m²), comptez généralement entre 5 et 8 jours ouvrés comprenant les temps de séchage incompressibles entre chaque passe d'enduit et de finition.",
      },
    ],
    relatedServiceSlugs: ["pose-parquet", "plaquiste-placo", "nettoyage-fin-de-chantier"],
  },
  {
    id: "parquet",
    slug: "pose-parquet",
    name: "Pose et Rénovation de Parquet",
    shortName: "Parquet",
    heroHeadline: "Pose Flottante, Collée & Restauration de Parquets",
    serviceType: "Pose et rénovation de parquet massif et contrecollé",
    tradeTitle: "Poseurs de Parquet",
    shortDesc: "Pose de parquet massif ou contrecollé, ponçage sans poussière, vitrification haute résistance et sous-couches acoustiques certifiées.",
    metaTitleTemplate: "Pose de Parquet à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Pose et vitrification de parquet à {city} ({postalCode}) : chêne massif, contrecollé et sous-couches 21 dB. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Diagnostic de planéité et ragréage",
        description: "Contrôle d'hygrométrie et planéité du support avec ragréage autolissant fibré si le dénivelé dépasse 5 mm sous la règle de 2 mètres.",
      },
      {
        title: "Interposition d'isolant phonique",
        description: "Pose d'une sous-couche acoustique résiliente haute densité assurant une atténuation phonique certifiée de 19 à 21 dB aux bruits d'impact.",
      },
      {
        title: "Pose collée ou flottante de précision",
        description: "Pose au cordeau de lames larges ou en point de Hongrie / bâtons rompus, avec respect scrupuleux des jeux de dilatation périphériques.",
      },
      {
        title: "Ponçage et vitrification écologique",
        description: "Ponçage en trois grains successifs (gros, moyen, fin) avec machine à aspiration cyclonique et trois couches de vitrificateur polyuréthane sans odeur.",
      },
    ],
    coproprieteConsiderations:
      "À {city}, le règlement de copropriété exige fréquemment le maintien des performances acoustiques d'origine. Nous fournissons systématiquement les fiches techniques des sous-couches phoniques pour validation par votre syndic.",
    technicalFaqs: [
      {
        q: "Pose collée ou pose flottante : que choisir pour une copropriété à {city} ?",
        a: "La pose collée en plein avec colle acoustique silane offre le meilleur confort sonore à la marche et une longévité maximale. La pose flottante avec sous-couche phonique haute densité 21 dB est idéale pour les budgets maîtrisés et les planchers récents.",
      },
      {
        q: "Pouvez-vous restaurer un vieux parquet en chêne abîmé sans le remplacer ?",
        a: "Oui, si l'épaisseur de la couche d'usure le permet (au moins 2,5 mm), un ponçage professionnel suivi d'un masticage des fentes et de trois couches de vitrification incolore redonne vie au charme d'antan.",
      },
      {
        q: "Comment gérez-vous les plinthes et les bas de portes après surélévation du sol ?",
        a: "Nos menuisiers rabotent proprement le bas des portes intérieures et installent des plinthes en chêne massif ou prêtes à peindre épousant parfaitement les contours de vos murs.",
      },
    ],
    relatedServiceSlugs: ["peinture-interieure", "pose-sol-vinyle", "pose-carrelage"],
  },
  {
    id: "carrelage",
    slug: "pose-carrelage",
    name: "Pose de Carrelage",
    shortName: "Carrelage",
    heroHeadline: "Pose de Carrelage Sol, Faïence Murale & Grands Formats",
    serviceType: "Travaux de carrelage sol et revêtement mural",
    tradeTitle: "Artisans Carreleurs",
    shortDesc: "Pose de grès cérame, faïence grand format, étanchéité sous carrelage (SPEC) pour cuisines et salles de bain.",
    metaTitleTemplate: "Artisan Carreleur à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Artisan carreleur à {city} ({postalCode}) : carrelage sol, faïence murale et étanchéité douche à l'italienne. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Système de Protection à l'Eau (SPEC)",
        description: "Application de nattes d'étanchéité ou membranes liquides sous carrelage avec bandes d'armature dans les angles des douches et baignoires.",
      },
      {
        title: "Calepinage esthétique et coupes nettes",
        description: "Étude d'implantation pour centrer les coupes, éliminer les découpes disgracieuses et harmoniser les alignements visuels.",
      },
      {
        title: "Double encollage haute adhérence",
        description: "Mise en œuvre au mortier-colle déformable C2S1 pour garantir une adhérence parfaite sur grands formats (60x60, 60x120 cm).",
      },
      {
        title: "Jointoiement hydrofuge et joints silicone",
        description: "Joints ciment hydrofuges anti-moisissures et joints de dilatation périphériques élastomères assortis aux teintes choisies.",
      },
    ],
    coproprieteConsiderations:
      "Pour les résidences de {city}, les découpes de carreaux à eau et le gâchage de colle sont réalisés sur bâche de protection étanche, évitant tout encrassement ou dépôt dans les canalisations communes.",
    technicalFaqs: [
      {
        q: "Peut-on poser un nouveau carrelage sur un ancien carrelage existant ?",
        a: "Oui, après vérification de la solidité des carreaux existants, dégraissage mécanique, application d'un primaire d'accrochage sablé et vérification des hauteurs de seuils de portes.",
      },
      {
        q: "Quelles normes d'étanchéité appliquez-vous pour une douche à l'italienne ?",
        a: "Nous respectons rigoureusement le DTU 52.2 en appliquant un Système de Protection à l'Eau sous Carrelage (SPEC) avec bandes étanches thermo-soudées sur tous les angles rentrants.",
      },
      {
        q: "Quel format de carrelage convient le mieux aux petites salles de bain ?",
        a: "Les carreaux rectangulaires 30x60 cm posés horizontalement ou les dalles 60x60 cm claires agrandissent visuellement l'espace en réduisant le nombre de joints.",
      },
    ],
    relatedServiceSlugs: ["peinture-interieure", "pose-sol-vinyle", "nettoyage-fin-de-chantier"],
  },
  {
    id: "sol-vinyle",
    slug: "pose-sol-vinyle",
    name: "Pose de Sol Vinyle & PVC (LVT)",
    shortName: "Sol Vinyle",
    heroHeadline: "Revêtements de Sol Vinyle LVT & Dalles Clipsables",
    serviceType: "Pose de revêtement de sol vinyle et PVC",
    tradeTitle: "Poseurs de Sol Vinyle",
    shortDesc: "Installation de sols vinyles rigides (SPC/LVT) clipsables ou collés, 100% étanches, résistants et silencieux à la marche.",
    metaTitleTemplate: "Pose de Sol Vinyle à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Pose de sol vinyle et PVC LVT à {city} ({postalCode}) : lames clipsables, étanches et isolantes phoniques. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Vérification et préparation du support",
        description: "Élimination des aspérités et application d'un ragréage fin si nécessaire pour garantir une planéité absolue sans marquage des lames.",
      },
      {
        title: "Sous-couche spécifique ou intégrée",
        description: "Utilisation de sous-couches spéciales sol vinyle résistant au poinçonnement et assurant une insonorisation de 18 à 21 dB.",
      },
      {
        title: "Emboîtement étanche et sécurisé",
        description: "Pose flottante clipsable 5G ou pose collée en plein adaptée aux contraintes thermiques et aux pièces humides (cuisines, salles d'eau).",
      },
      {
        title: "Profilés de jonction et finitions",
        description: "Mise en place de barres de seuil affleurantes et plinthes coordonnées résistantes à l'eau.",
      },
    ],
    coproprieteConsiderations:
      "Le sol vinyle rigide est plébiscité dans les appartements locatifs et résidences étudiantes de {city} pour sa résistance aux chocs et sa facilité d'entretien incomparable.",
    technicalFaqs: [
      {
        q: "Le sol vinyle LVT convient-il aux pièces humides ?",
        a: "Absolument. Les lames vinyles rigides en composite minéral (SPC) sont 100% imputrescibles et ne craignent pas les éclaboussures d'eau dans les cuisines ou salles de bain.",
      },
      {
        q: "Quelle est la différence entre du linoléum et du sol vinyle LVT ?",
        a: "Le vinyle est un matériau synthétique multicouche très résistant à l'eau et aux taches, tandis que le vrai linoléum est composé de matières naturelles (huile de lin) plus sensible à l'humidité.",
      },
      {
        q: "Un sol vinyle clipsable permet-il de recouvrir un carrelage ancien ?",
        a: "Oui, à condition que les joints de carrelage ne dépassent pas 4 mm de largeur et 1 mm de profondeur ; au-delà, un ragréage de surfaçage est préconisé.",
      },
    ],
    relatedServiceSlugs: ["pose-parquet", "pose-carrelage", "peinture-interieure"],
  },
  {
    id: "placo",
    slug: "plaquiste-placo",
    name: "Plaquiste & Cloisons en Placo",
    shortName: "Placo & Cloisons",
    heroHeadline: "Cloisons Sèches, Doublages & Faux Plafonds Placo",
    serviceType: "Travaux de plâtrerie, doublages et cloisons sèches",
    tradeTitle: "Artisans Plaquistes",
    shortDesc: "Création de cloisons distributives phoniques, faux plafonds décoratifs et doublages thermiques en plaques de plâtre.",
    metaTitleTemplate: "Artisan Plaquiste à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Artisan plaquiste à {city} ({postalCode}) : création de cloisons phoniques, doublage et faux plafonds en placo. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Implantation laser des ossatures",
        description: "Traçage précis au niveau laser des rails et montants métalliques avec bandes résilientes acoustiques sous profilés.",
      },
      {
        title: "Intégration d'isolants phoniques",
        description: "Incorporation de laine minérale haute densité dans l'épaisseur des cloisons pour maximiser l'isolation thermo-acoustique.",
      },
      {
        title: "Pose de plaques techniques (Placo)",
        description: "Mise en œuvre de plaques adaptées : BA13 standard, hydrofuge (vert) en pièces d'eau, ou phonique haute densité (bleu).",
      },
      {
        title: "Jointoiement calicot et finition prête à peindre",
        description: "Traitement des joints avec bande papier micro-perforée et trois passes d'enduit poncé fin, prêt pour l'intervention du peintre.",
      },
    ],
    coproprieteConsiderations:
      "À {city}, la création de nouvelles cloisons en plaques de plâtre légères sur ossature métallique préserve la capacité de charge des planchers anciens en bois ou poutrelles métalliques.",
    technicalFaqs: [
      {
        q: "Comment créer une chambre supplémentaire sans alourdir le plancher ancien ?",
        a: "Nous posons des cloisons distributives ultra-légères en plaques de plâtre Placostil® sur ossature métallique de 72 mm avec isolant phonique, qui ne surchargent pas les solivages.",
      },
      {
        q: "Qu'est-ce qu'une plaque de plâtre phonique (plaque bleue) ?",
        a: "C'est une plaque de plâtre haute densité à structure cristalline amortissante qui réduit les bruits aériens (voix, télévision) de 3 à 5 dB de plus qu'une plaque standard.",
      },
      {
        q: "Peut-on suspendre des meubles lourds sur une cloison en placo ?",
        a: "Oui, en intégrant des renforts en bois ou traverses métalliques dans l'ossature lors du montage, ou en utilisant des chevilles métalliques à expansion type Molly pour des charges modérées.",
      },
    ],
    relatedServiceSlugs: ["peinture-interieure", "pose-parquet", "nettoyage-fin-de-chantier"],
  },
  {
    id: "nettoyage",
    slug: "nettoyage-fin-de-chantier",
    name: "Nettoyage Après Travaux",
    shortName: "Nettoyage Chantier",
    heroHeadline: "Nettoyage de Fin de Chantier & Remise en État Complète",
    serviceType: "Nettoyage après travaux et remise en état des lieux",
    tradeTitle: "Spécialistes Nettoyage Chantier",
    shortDesc: "Dépoussiérage intégral, élimination des voiles de ciment, décapage des traces de peinture et lavage des vitres après rénovation.",
    metaTitleTemplate: "Nettoyage Chantier à {city} ({postalCode}) | RenovaXpert",
    metaDescTemplate:
      "Nettoyage fin de chantier à {city} ({postalCode}) : élimination poussières fines, voiles de ciment et vitres. Réponse sous 24h ouvrées et devis gratuit.",
    scopePoints: [
      {
        title: "Aspiration industrielle des poussières fines",
        description: "Aspiration méthodique des plafonds, murs, placards, prises, plinthes et radiateurs avec filtres HEPA haute rétention.",
      },
      {
        title: "Élimination des voiles de ciment et résidus",
        description: "Monobrosse et nettoyant neutre pour dissoudre les laitances de ciment sans altérer les joints neufs ni les surfaces polies.",
      },
      {
        title: "Nettoyage de la vitrerie et menuiseries",
        description: "Grattage sécurisé des projections d'enduit et de peinture sur les vitres, encadrements, feuillures et rails de baies coulissantes.",
      },
      {
        title: "Désinfection et brillance finale",
        description: "Lessivage complet des sanitaires, faïences, plans de travail et sols pour une remise des clés prête à emménager.",
      },
    ],
    coproprieteConsiderations:
      "À {city}, nos équipes assurent également le balayage soigné et l'aspiration des paliers d'étage et de la cabine d'ascenseur pour laisser les parties communes irréprochables.",
    technicalFaqs: [
      {
        q: "Quand doit intervenir l'équipe de nettoyage après travaux ?",
        a: "Idéalement 24 à 48 heures après la fin totale des travaux de peinture et de pose, une fois que toutes les poussières en suspension sont définitivement retombées.",
      },
      {
        q: "Fournissez-vous tout le matériel et les produits d'intervention ?",
        a: "Oui, nous venons avec aspirateurs industriels HEPA, monobrosses, échelles, produits écologiques certifiés Écolabel et microfibres professionnelles adaptées.",
      },
      {
        q: "Peut-on inclure le nettoyage des parties communes de l'immeuble ?",
        a: "Oui, le nettoyage du palier d'étage et de l'ascenseur est systématiquement inclus dans nos prestations pour garantir de parfaites relations de voisinage.",
      },
    ],
    relatedServiceSlugs: ["peinture-interieure", "pose-parquet", "pose-carrelage"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}
