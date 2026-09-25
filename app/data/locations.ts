export interface LocalFaq {
  question: string;
  answer: string;
}

export interface LocationData {
  slug: string;
  name: string;
  postalCodes: string;
  department: string;
  departmentCode: string;
  population: string;
  housingType: string;
  neighborhoodQuartiers: string[];
  landmarks: string;
  metroAccess: string;
  localArchitecture: string;
  accessLogistics: string;
  directAnswer: string;
  heroImage: string;
  localFaqs: LocalFaq[];
  neighboringSlugs: string[];
}

export const locationsData: LocationData[] = [
  // ========================================================
  // HAUTS-DE-SEINE (92)
  // ========================================================
  {
    slug: "boulogne-billancourt",
    name: "Boulogne-Billancourt",
    postalCodes: "92100",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "120 000 hab.",
    housingType: "Immeubles Art Déco 1930, résidences béton 1960-1970 et programmes contemporains BBC",
    neighborhoodQuartiers: ["Le Trapèze", "Parchamp - Albert Kahn", "Silly-Gallieni", "Point-du-Jour", "Rives de Seine", "Les Passages"],
    landmarks: "Les Passages, Île Seguin, Musée Albert-Kahn, Parc Rothschild",
    metroAccess: "Lignes 9 (Marcel Sembat, Billancourt) et 10 (Boulogne Jean Jaurès, Pont de Saint-Cloud)",
    localArchitecture:
      "Dualité marquée entre le patrimoine Art Déco des années 1930 (secteur Marmottan) avec corniches et moulures, les grands ensembles des années 1970 sur dalles béton nécessitant une sous-couche acoustique certifiée de 19 à 21 dB, et les résidences récentes du Trapèze aux grandes baies vitrées.",
    accessLogistics:
      "Stationnement réglementé sur les grands axes (boulevard Jean-Jaurès, avenue Édouard-Vaillant). Déchargement matinal programmé avec camionnettes compactes, protection des ascenseurs et rotation méthodique des gravats en déchetterie agréée.",
    directAnswer:
      "À Boulogne-Billancourt (92100), RenovaXpert réalise tous travaux de rénovation intérieure sous garantie d'achèvement. Notre équipe d'artisans intervient sous 24 à 48 heures ouvrées pour visite technique et devis gratuit sans engagement. Peinture soignée, parquet, carrelage et cloisons phoniques conformes aux règles de copropriété boulonnaises.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Quelles sont les normes acoustiques pour la pose de parquet à Boulogne-Billancourt ?",
        answer:
          "Dans les résidences des années 1960-1970 (Point-du-Jour, Silly-Gallieni), les copropriétés imposent une atténuation aux bruits d'impact d'au moins 19 à 21 dB. Nous mettons en œuvre des sous-couches phoniques résilientes certifiées CSTB avec PV acoustique transmis au syndic.",
      },
      {
        question: "Comment organiser les livraisons de matériaux dans les rues denses de Boulogne ?",
        answer:
          "Nos artisans planifient les livraisons lourdes aux premières heures autorisées par le règlement de copropriété. Nous utilisons des protections intégrales de parties communes et des chariots à bandages souples pour préserver les halls d'immeubles.",
      },
      {
        question: "Peut-on redistribuer les cloisons dans un appartement Art Déco vers Marmottan ?",
        answer:
          "Oui. Après vérification du caractère non porteur des cloisons en briques plâtrières ou mâchefer, nous assurons leur dépose en sécurité et la création de cloisons Placostil® avec isolant phonique intégré.",
      },
    ],
    neighboringSlugs: ["neuilly-sur-seine", "issy-les-moulineaux", "sevres", "saint-cloud"],
  },
  {
    slug: "neuilly-sur-seine",
    name: "Neuilly-sur-Seine",
    postalCodes: "92200",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "60 000 hab.",
    housingType: "Appartements de prestige en pierre de taille, hôtels particuliers et résidences de très grand standing",
    neighborhoodQuartiers: ["Saint-James", "Les Sablons", "Île de la Jatte", "Bagatelle", "Plaine des Sablons", "Chézy-Zara"],
    landmarks: "Boulevard d'Inkermann, Avenue du Roule, Île de la Jatte, Château de Madrid",
    metroAccess: "Ligne 1 (Porte Maillot, Les Sablons, Pont de Neuilly)",
    localArchitecture:
      "Bâti d'exception caractérisé par de vastes appartements haussmanniens avec hauteurs sous plafond supérieures à 3m20, parquets anciens massifs en point de Hongrie ou chevrons, cheminées en marbre de Carrare et moulures travaillées en staff et stuc.",
    accessLogistics:
      "Exigences rigoureuses de discrétion et de conciergerie : dépose-minute soignée, accès par badges sécurisés ou allées privatives boulevard d'Inkermann, et protection intégrale des moquettes de paliers et cabines d'ascenseur.",
    directAnswer:
      "À Neuilly-sur-Seine (92200), RenovaXpert assure des travaux de rénovation haut de gamme avec réactivité sous 24h ouvrées. Nos artisans maîtrisent la restauration de parquets anciens en point de Hongrie, peintures veloutées sans COV et moulures d'époque. Devis détaillé gratuit sur visite technique sur place.",
    heroImage: "/images/zones/neuilly-sur-seine.webp",
    localFaqs: [
      {
        question: "Comment procédez-vous pour restaurer un parquet ancien en point de Hongrie à Neuilly ?",
        answer:
          "Nous réalisons un diagnostic d'épaisseur de la couche d'usure, remplaçons les lames abîmées à l'identique avec du chêne de récupération, puis procédons à un ponçage fin à aspiration cyclonique et à une vitrification incolore mate ou cirée.",
      },
      {
        question: "Quelles garanties offrez-vous pour le respect des parties communes haut de gamme ?",
        answer:
          "Nous protégeons l'ensemble du parcours (halls en marbre, ascenseurs lambrissés, moquettes) avec des bâches antidérapantes capitonnées et respectons scrupuleusement les horaires fixés par les conseils syndicaux neuilléens.",
      },
      {
        question: "Rénovez-vous les moulures et corniches en staff d'époque ?",
        answer:
          "Nos plâtriers-staffeurs reprennent les fissures sans dénaturer les décors anciens, consolident les éléments fragilisés et appliquent des enduits de surfaçage extra-fins pour un rendu immaculé.",
      },
    ],
    neighboringSlugs: ["boulogne-billancourt", "levallois-perret", "courbevoie", "puteaux"],
  },
  {
    slug: "levallois-perret",
    name: "Levallois-Perret",
    postalCodes: "92300",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "68 000 hab.",
    housingType: "Appartements urbains denses, immeubles début XXe siècle et résidences récentes du Front de Seine",
    neighborhoodQuartiers: ["Front de Seine", "So Ouest", "Anatole France", "Louise Michel", "Parc de la Planchette", "Collange"],
    landmarks: "Hôtel de Ville, Parc de la Planchette, Centre So Ouest, Bords de Seine",
    metroAccess: "Ligne 3 (Louise Michel, Anatole France, Pont de Levallois-Bécon)",
    localArchitecture:
      "Plus forte densité résidentielle de France (plus de 27 000 hab/km²). Réagencements fréquents de surfaces compactes pour créer un bureau de télétravail ou une chambre d'enfant : cloisons phoniques légères, verrières métalliques et optimisation des pièces d'eau.",
    accessLogistics:
      "Réseau viaire dense à sens unique (rues Anatole-France, Louise-Michel). Logistique de chantier millimétrée avec stationnement anticipé, approvisionnement par monte-matériaux si nécessaire et gestion continue des gravats en sacs renforcés.",
    directAnswer:
      "Pour vos travaux à Levallois-Perret (92300), RenovaXpert optimise vos espaces avec réactivité : réagencement de cloisons phoniques, peintures lessivables dépolluantes, pose de carrelage et parquets. Réponse sous 24h ouvrées par nos artisans pour étude technique et devis gratuit sur place.",
    heroImage: "/images/zones/levallois-perret.webp",
    localFaqs: [
      {
        question: "Comment optimiser l'espace d'un 2 ou 3 pièces compact à Levallois-Perret ?",
        answer:
          "Nous créons des cloisons distributives phoniques d'épaisseur réduite avec portes à galandage intégrées et installons des verrières d'atelier pour apporter de la lumière naturelle sans perte de surface au sol.",
      },
      {
        question: "Comment gérez-vous le stationnement et la rotation des gravats à Levallois ?",
        answer:
          "Nos équipes réservent les créneaux de livraison auprès des services municipaux et organisent l'évacuation journalière des gravats afin de ne jamais encombrer la voie publique ni la cour d'immeuble.",
      },
      {
        question: "Utilisez-vous des peintures écologiques sans solvants ?",
        answer:
          "Oui, nous appliquons exclusivement des peintures classées A+ à très faible teneur en COV, idéales pour les logements denses et les familles avec jeunes enfants.",
      },
    ],
    neighboringSlugs: ["neuilly-sur-seine", "clichy", "courbevoie", "asnieres-sur-seine"],
  },
  {
    slug: "courbevoie",
    name: "Courbevoie",
    postalCodes: "92400",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "82 000 hab.",
    housingType: "Appartements de standing à Bécon, résidences récentes du Faubourg de l'Arche et tours résidentielles",
    neighborhoodQuartiers: ["Bécon-les-Bruyères", "Faubourg de l'Arche", "Cœur de Ville", "Gambetta", "Charras", "Front de Seine"],
    landmarks: "Parc de Bécon, Grande Arche, Pavillon des Indes, Place Hérold",
    metroAccess: "Ligne 1 (La Défense, Esplanade), RER A, Lignes L et U (Bécon, Courbevoie)",
    localArchitecture:
      "Contraste entre les immeubles bourgeois de Bécon aux parquets massifs et corniches classiques, et les ensembles contemporains du Faubourg de l'Arche avec dalles béton, carrelages grand format et grandes baies vitrées.",
    accessLogistics:
      "Accès facilité au Faubourg de l'Arche par parkings souterrains et monte-charges dédiés. À Bécon, coordination étroite avec les syndics pour le respect des heures de travaux et protection des cages d'escalier en bois.",
    directAnswer:
      "À Courbevoie (92400), RenovaXpert prend en charge la rénovation complète de votre appartement à Bécon ou au Faubourg de l'Arche. Réponse sous 24h ouvrées par nos artisans, devis gratuit, pose de parquet phonique, carrelage grand format et peinture soignée.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Quelle isolation acoustique préconisez-vous dans les résidences du Faubourg de l'Arche ?",
        answer:
          "Nous installons des sous-couches résilientes haute densité (atténuation 20 à 22 dB) sous parquet contrecollé ou sol vinyle SPC pour garantir un confort sonore parfait vis-à-vis des voisins du dessous.",
      },
      {
        question: "Intervenez-vous dans les tours résidentielles proches de La Défense ?",
        answer:
          "Oui, nos équipes disposent des protocoles de sécurité adaptés aux Immeubles de Grande Hauteur (IGH) et résidences avec PC sécurité (respect des issues, bâchage coupe-feu).",
      },
      {
        question: "Peut-on rénover une cuisine ouverte avec verrière à Courbevoie ?",
        answer:
          "Absolument, nous réalisons l'ouverture de cloison non porteuse, la pose de verrière en aluminium ou acier sur-mesure, le carrelage de crédence et la mise aux normes des peintures.",
      },
    ],
    neighboringSlugs: ["neuilly-sur-seine", "levallois-perret", "asnieres-sur-seine", "puteaux", "la-garenne-colombes"],
  },
  {
    slug: "issy-les-moulineaux",
    name: "Issy-les-Moulineaux",
    postalCodes: "92130",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "69 000 hab.",
    housingType: "Écoquartiers numériques du Fort d'Issy, résidences récentes Val de Seine et maisons de ville Île Saint-Germain",
    neighborhoodQuartiers: ["Fort d'Issy", "Val de Seine", "Île Saint-Germain", "Corentin Celton", "Mairie d'Issy", "Les Épinettes"],
    landmarks: "Fort d'Issy, Parc de l'Île Saint-Germain, Tour aux Figures de Dubuffet, Bords de Seine",
    metroAccess: "Ligne 12 (Mairie d'Issy, Corentin Celton), RER C, Tramway T2",
    localArchitecture:
      "Habitat résolument contemporain : logements domotisés du Fort d'Issy, lofts modernes, sols en résine ou carrelages minces grands formats, et maisons d'architecte sur l'Île Saint-Germain nécessitant des finitions esthétiques pointues.",
    accessLogistics:
      "Parkings privatifs fréquents en sous-sol facilitant l'accès de nos camionnettes. Respect des protocoles écologiques d'écoquartier avec tri des résidus et usage de produits neutres labellisés.",
    directAnswer:
      "À Issy-les-Moulineaux (92130), RenovaXpert réalise vos projets de rénovation intérieure avec des finitions d'excellence. Pose de carrelage grand format, parquet flottant, cloisons modulaires et peinture dépolluante. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Comment rénover un appartement dans l'écoquartier du Fort d'Issy ?",
        answer:
          "Nous utilisons des matériaux éco-certifiés (peintures sans solvant, colles sans COV, isolants biosourcés) pour préserver la qualité de l'air intérieur et respecter les exigences environnementales du site.",
      },
      {
        question: "Pouvez-vous poser du carrelage grand format sur plancher chauffant à Issy ?",
        answer:
          "Oui, nous appliquons un primaire adapté et un mortier-colle déformable C2S1 conformément au DTU 52.2 pour garantir la tenue des dalles 60x60 ou 60x120 cm sur chape chauffante.",
      },
      {
        question: "Quel est le délai pour démarrer un chantier à Issy-les-Moulineaux ?",
        answer:
          "Après validation du devis et choix des revêtements, nos artisans peuvent généralement intervenir sous 10 à 15 jours ouvrés.",
      },
    ],
    neighboringSlugs: ["boulogne-billancourt", "meudon", "vanves", "clamart"],
  },
  {
    slug: "asnieres-sur-seine",
    name: "Asnières-sur-Seine",
    postalCodes: "92600",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "88 000 hab.",
    housingType: "Appartements haussmanniens et 1930 du quartier Bac/Bécon, maisons bourgeoises avec jardin et résidences neuves de Seine Ouest",
    neighborhoodQuartiers: ["Bécon-Flachat", "Gare d'Asnières", "Bac", "Mairie", "Bords de Seine", "Voltaire"],
    landmarks: "Château d'Asnières, Cimetière des Chiens, Mairie d'Asnières, Bords de Seine",
    metroAccess: "Ligne 13 (Gabriel Péri, Les Agnettes, Asnières-Gennevilliers), Lignes J et L (Gare d'Asnières)",
    localArchitecture:
      "Patrimoine résidentiel recherché avec de beaux appartements familiaux aux parquets chêne massifs, moulures et cheminées dans le quartier Bac, côtoyant des résidences des années 1980 et des programmes récents en bordure de Seine.",
    accessLogistics:
      "Stationnement relativement aisé autour de Flachat et Voltaire. Nos équipes protègent scrupuleusement les escaliers anciens en bois et les paliers d'immeubles de la fin du XIXe siècle.",
    directAnswer:
      "Pour vos travaux à Asnières-sur-Seine (92600), RenovaXpert met à votre disposition son équipe d'artisans qualifiés : réfection de peintures, ponçage de parquets, pose de carrelage et cloisons en placo. Devis gratuit et personnalisé sous 24 heures ouvrées.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Rénovez-vous les parquets anciens dans les appartements du quartier Bac à Asnières ?",
        answer:
          "Oui, nous remettons en état les parquets massifs : clouage des lames grinçantes, ponçage multi-grains, rebouchage des joints et vitrification haute résistance.",
      },
      {
        question: "Comment organiser la réfection des peintures dans un appartement habité ?",
        answer:
          "Nous intervenons pièce par pièce avec bâchage soigné du mobilier sous film polyane étanche et aspiration permanente pour minimiser la gêne au quotidien.",
      },
      {
        question: "Vos devis sont-ils gratuits pour les résidents d'Asnières-sur-Seine ?",
        answer:
          "Oui, la visite technique sur place et l'établissement du devis détaillé sont 100% gratuits et sans aucun engagement.",
      },
    ],
    neighboringSlugs: ["courbevoie", "clichy", "bois-colombes", "gennevilliers"],
  },
  {
    slug: "rueil-malmaison",
    name: "Rueil-Malmaison",
    postalCodes: "92500",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "80 000 hab.",
    housingType: "Propriétés résidentielles bourgeoises, maisons individuelles, résidences de standing et logements du centre historique",
    neighborhoodQuartiers: ["Buzenval", "Plaine Gare", "Mont-Valérien", "Rueil-sur-Seine", "Centre-Ville Historique", "Mazurières"],
    landmarks: "Château de Malmaison, Église Saint-Pierre Saint-Paul, Forêt de Malmaison, Bords de Seine",
    metroAccess: "RER A (Rueil-Malmaison)",
    localArchitecture:
      "Plus grande commune des Hauts-de-Seine en superficie. Vaste éventail d'habitats : appartements de centre-ville aux parquets anciens, pavillons des années 1930 à Buzenval nécessitant une isolation thermique par doublage placo, et résidences de standing à Rueil 2000.",
    accessLogistics:
      "Stationnement privé fréquent dans les allées de pavillons ou parkings d'immeubles. Logistique confortable pour le transport d'équipements lourds de ponçage ou de dépose de carrelage.",
    directAnswer:
      "À Rueil-Malmaison (92500), RenovaXpert assure l'aménagement et la rénovation complète de maisons et appartements : cloisons isolantes phoniques et thermiques, parquets, carrelages et peintures décoratives. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Comment améliorer l'isolation thermique d'une maison ancienne à Rueil-Malmaison ?",
        answer:
          "Nous posons des doublages muraux en plaques de plâtre Placo avec laine minérale ou panneau polyuréthane haute performance thermique, supprimant les parois froides et ponts thermiques.",
      },
      {
        question: "Prenez-vous en charge la rénovation intégrale d'une pièce à vivre de plus de 50 m² ?",
        answer:
          "Oui, nous gérons la dépose des anciens revêtements, la réfection des sols en parquet ou carrelage grand format, le ratissage des murs et la mise en peinture complète.",
      },
      {
        question: "Quel est le délai d'intervention pour un devis à Rueil-Malmaison ?",
        answer:
          "Nous convenons d'une visite sur place sous 24 à 48 heures ouvrées pour évaluer les travaux et établir une offre sur-mesure.",
      },
    ],
    neighboringSlugs: ["nanterre", "suresnes", "saint-cloud", "garches"],
  },
  {
    slug: "clichy",
    name: "Clichy",
    postalCodes: "92110",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "64 000 hab.",
    housingType: "Lofts d'anciens ateliers industriels, résidences neuves des berges de Seine et immeubles de faubourg",
    neighborhoodQuartiers: ["Victor Hugo", "Entrée de Ville", "Berges de Seine", "Bac d'Asnières", "Mairie de Clichy", "SNCF Clichy-Levallois"],
    landmarks: "Maison du Peuple, Pavillon Vendôme, Parc Roger Salengro, Bords de Seine",
    metroAccess: "Lignes 13 (Mairie de Clichy) et 14 (Porte de Clichy, Saint-Ouen)",
    localArchitecture:
      "Quartiers en pleine réhabilitation architecturale : anciens sites artisanaux reconvertis en lofts avec grandes hauteurs, sols en béton ciré ou vinyle LVT, et appartements familiaux proches du 17e arrondissement de Paris.",
    accessLogistics:
      "Accès rapide via le boulevard périphérique et les quais de Seine. Équipes mobiles équipées de matériel léger pour monter facilement les étages dans les escaliers étroits sans ascenseur.",
    directAnswer:
      "À Clichy (92110), RenovaXpert réalise la rénovation de vos appartements et lofts : redistribution d'espace en placo, peintures mates et velours sans odeur, parquets et carrelages modernes. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/levallois-perret.webp",
    localFaqs: [
      {
        question: "Rénovez-vous les anciens ateliers d'artistes ou lofts à Clichy ?",
        answer:
          "Oui, nous adaptons nos méthodes aux grands volumes : échafaudages d'intérieur pour hauts plafonds, doublages acoustiques et pose de revêtements de sol résistants.",
      },
      {
        question: "Comment se déroule la rénovation d'un appartement avant mise en location à Clichy ?",
        answer:
          "Nous proposons des forfaits clés en main (remise en peinture intégrale, pose de sol vinyle résistant LVT et nettoyage fin de chantier) pour relouer rapidement votre bien.",
      },
      {
        question: "Quelles sont les précautions pour les travaux dans les immeubles anciens clichois ?",
        answer:
          "Nous protégeons les parties communes, respectons les horaires autorisés et utilisons des aspirateurs industriels HEPA pour limiter toute poussière.",
      },
    ],
    neighboringSlugs: ["levallois-perret", "saint-ouen", "asnieres-sur-seine"],
  },
  {
    slug: "montrouge",
    name: "Montrouge",
    postalCodes: "92120",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "50 000 hab.",
    housingType: "Immeubles 1930 en brique et pierre, résidences calmes et lofts issus de l'histoire de l'imprimerie",
    neighborhoodQuartiers: ["Jean Jaurès", "Boileau", "Ferry-Buffon", "Porte de Châtillon", "Vieux Montrouge", "Haut Mesnil"],
    landmarks: "Beffroi de Montrouge, Église Saint-Jacques le Majeur, Square Renaudel, Place Émile Cresp",
    metroAccess: "Ligne 4 (Mairie de Montrouge, Barbara)",
    localArchitecture:
      "Patrimoine élégant marqué par l'architecture des années 1930 en briques foraines et ciment, petits immeubles de rapport parisiens aux parquets en chêne, et lofts créés dans d'anciennes imprimeries historiques.",
    accessLogistics:
      "Rues calmes et maillage urbain dense limitrophe du 14e arrondissement. Dépose aisée des matériaux aux premières heures de la matinée et protection des cages d'immeubles traditionnelles.",
    directAnswer:
      "À Montrouge (92120), confiez vos projets de rénovation intérieure à RenovaXpert : peinture soignée, réfection de parquets d'époque, pose de carrelage et cloisons sèches. Intervention sous 24 à 48h ouvrées pour une étude gratuite sur place.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Comment isoler phoniquement un appartement des années 1930 à Montrouge ?",
        answer:
          "Nous recommandons des doublages acoustiques minces en plaques de plâtre phoniques (Placo phonique) avec laine de roche pour stopper les bruits de voix sans réduire l'espace habitable.",
      },
      {
        question: "Peut-on rénover les tomettes ou parquets anciens dans le Vieux Montrouge ?",
        answer:
          "Oui, nous effectuons le ponçage et traitement protecteur des parquets en chêne ainsi que le décapage et traitement hydrofuge des tomettes anciennes.",
      },
      {
        question: "Vos artisans interviennent-ils sur les petits chantiers de rénovation ?",
        answer:
          "Oui, qu'il s'agisse de repeindre une chambre ou de refaire entièrement un appartement 4 pièces, nous appliquons la même rigueur de finition.",
      },
    ],
    neighboringSlugs: ["malakoff", "gentilly", "arceuil", "châtillon"],
  },
  {
    slug: "puteaux",
    name: "Puteaux",
    postalCodes: "92800",
    department: "Hauts-de-Seine",
    departmentCode: "92",
    population: "45 000 hab.",
    housingType: "Appartements de standing sur la Colline, résidences récentes du Front de Seine et maisons de ville historiques",
    neighborhoodQuartiers: ["La Colline", "Centre-Ville", "Île de Puteaux", "Front de Seine", "Pressensé - Rives de Seine", "Loriettes"],
    landmarks: "Île de Puteaux, Théâtre des Hauts-de-Seine, Esplanade de l'Hôtel de Ville, Moulin de Puteaux",
    metroAccess: "Ligne 1 (La Défense), Tramway T2, Lignes L et U (Gare de Puteaux)",
    localArchitecture:
      "Mixte entre le centre-ville historique aux immeubles traditionnels et les résidences contemporaines de grand standing sur la Colline ou en bordure de Seine, équipées de larges baies vitrées et parquets d'ingénierie.",
    accessLogistics:
      "Circulation fluide en bas de ville et facilités de stationnement dans les résidences modernes. Bâchage soigné des ascenseurs et respect strict des horaires de copropriété pour travaux calmes.",
    directAnswer:
      "À Puteaux (92800), RenovaXpert prend en charge la rénovation de votre intérieur avec professionnalisme : parquets contrecollés, carrelage moderne, finitions de peinture soignées et aménagement en placo. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/boulogne-billancourt.webp",
    localFaqs: [
      {
        question: "Quelle solution de sol choisir pour un appartement sur la Colline à Puteaux ?",
        answer:
          "Le parquet contrecollé en chêne avec sous-couche phonique résiliente apporte à la fois chaleur, prestige visuel et conformité acoustique aux exigences de copropriété.",
      },
      {
        question: "Faites-vous les travaux de peinture décorative et effets matières ?",
        answer:
          "Nos peintres qualifiés appliquent des finitions veloutées, mates profondes, ou des laques tendues pour sublimer les intérieurs contemporains.",
      },
      {
        question: "Quel est le coût moyen d'une rénovation complète à Puteaux ?",
        answer:
          "Chaque projet dépend de l'état des supports et des finitions choisies. Nous établissons un chiffrage poste par poste, précis, transparent et sans mauvaise surprise.",
      },
    ],
    neighboringSlugs: ["neuilly-sur-seine", "courbevoie", "nanterre", "suresnes"],
  },

  // ========================================================
  // VAL-DE-MARNE (94)
  // ========================================================
  {
    slug: "vincennes",
    name: "Vincennes",
    postalCodes: "94300",
    department: "Val-de-Marne",
    departmentCode: "94",
    population: "50 000 hab.",
    housingType: "Appartements bourgeois en pierre de taille, résidences Art Déco et immeubles cossus en lisière du Bois",
    neighborhoodQuartiers: ["Château - Diderot", "Les Vignerons", "Carré Magique", "Sorano", "Est-Diderot", "Aux abords du Bois"],
    landmarks: "Château de Vincennes, Bois de Vincennes, Cours Marigny, Hôtel de Ville",
    metroAccess: "Ligne 1 (Château de Vincennes, Bérault), RER A (Vincennes)",
    localArchitecture:
      "Patrimoine bourgeois remarquable de la fin du XIXe et du début du XXe siècle : parquets massifs en chêne, plafonds anciens en plâtre sur lattis bois, moulures élégantes et cheminées d'époque nécessitant une restauration respectueuse de l'ancien.",
    accessLogistics:
      "Stationnement urbain très encadré aux abords du Bois et de la mairie. Dépose matinale organisée, protections antidérapantes spécifiques pour les escaliers anciens en chêne et aspiration industrielle continue.",
    directAnswer:
      "À Vincennes (94300), RenovaXpert restaure et magnifie votre patrimoine immobilier : rénovation de parquets anciens, peintures veloutées aux teintes douces, carrelage soigné et faux plafonds légers en placo. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Comment restaurer un plafond ancien sur lattis bois sans risque à Vincennes ?",
        answer:
          "Nous réalisons des faux plafonds autoportants en plaques de plâtre BA13 fixés de mur à mur sur ossature métallique, ce qui évite de surcharger les solivages et lattis anciens tout en intégrant des spots LED.",
      },
      {
        question: "Prenez-vous des précautions spécifiques pour les parties communes des immeubles vincennois ?",
        answer:
          "Oui, nous posons des protections intégrales capitonnées sur les marches d'escalier en bois et les rampes sculptées, et assurons un nettoyage quotidien des zones de passage.",
      },
      {
        question: "Quel type de parquet poser pour respecter le charme de l'ancien à Vincennes ?",
        answer:
          "Le parquet en chêne massif ou contrecollé haut de gamme posé en chevrons ou point de Hongrie s'harmonise parfaitement avec les moulures et les volumes vincennois.",
      },
    ],
    neighboringSlugs: ["saint-mande", "charenton-le-pont", "fontenay-sous-bois", "montreuil"],
  },
  {
    slug: "saint-maur-des-fosses",
    name: "Saint-Maur-des-Fossés",
    postalCodes: "94100",
    department: "Val-de-Marne",
    departmentCode: "94",
    population: "75 000 hab.",
    housingType: "Villas de maître en bord de Marne, maisons bourgeoises avec jardin et résidences calmes dans la boucle",
    neighborhoodQuartiers: ["Le Parc Saint-Maur", "Adamville", "La Varenne Saint-Hilaire", "Champignol", "Les Mûriers", "Saint-Maur Créteil"],
    landmarks: "Bords de Marne, Abbaye de Saint-Maur, Place des Marronniers, Parc de l'Abbaye",
    metroAccess: "RER A (Saint-Maur-Créteil, Le Parc de Saint-Maur, Champigny, La Varenne-Chennevières)",
    localArchitecture:
      "Commune d'exception entièrement ceinturée par la Marne. Prépondérance de maisons bourgeoises et meulières avec parquets massifs, vérandas lumineuses et grandes pièces à vivre, accompagnées de petits collectifs résidentiels soignés.",
    accessLogistics:
      "Stationnement facile dans les allées privatives et sur voirie. Conditions idéales pour l'acheminement de monobrosses industrielles, échafaudages d'intérieur et gros volumes de carrelage.",
    directAnswer:
      "À Saint-Maur-des-Fossés (94100 / 94210), RenovaXpert réalise la rénovation complète de vos villas et appartements à La Varenne ou au Parc Saint-Maur. Travaux soignés de parquet, carrelage grand format, isolation thermique en placo et peinture. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Rénovez-vous les grandes surfaces et villas familiales à La Varenne Saint-Hilaire ?",
        answer:
          "Oui, nos équipes interviennent sur des superficies supérieures à 150 m², avec planification rigoureuse de chaque corps d'état pour respecter vos délais d'emménagement.",
      },
      {
        question: "Comment traiter les remontées d'humidité dans les meulières de Saint-Maur ?",
        answer:
          "Nous utilisons des enduits perspirants micro-poreux et des doublages ventilés en plaques de plâtre hydrofuges avec rupture thermique pour assainir durablement les murs.",
      },
      {
        question: "Quels types de carrelage extérieur proposez-vous pour les terrasses en bord de Marne ?",
        answer:
          "Nous posons du grès cérame pleine masse antidérapant R11 sur plots ou collé, résistant au gel et aux variations thermiques.",
      },
    ],
    neighboringSlugs: ["vincennes", "charenton-le-pont", "nogent-sur-marne", "joinville-le-pont"],
  },
  {
    slug: "saint-mande",
    name: "Saint-Mandé",
    postalCodes: "94160",
    department: "Val-de-Marne",
    departmentCode: "94",
    population: "23 000 hab.",
    housingType: "Appartements de grand standing haussmanniens et résidences de prestige en bordure immédiate du Bois de Vincennes",
    neighborhoodQuartiers: ["Bords du Bois", "Centre-Ville", "Église", "Général de Gaulle", "Pasteur", "Paul Bert"],
    landmarks: "Lac de Saint-Mandé, Bois de Vincennes, Hôpital d'Instruction des Armées Bégin, Place Charles Digeon",
    metroAccess: "Ligne 1 (Saint-Mandé), RER A (Vincennes à proximité immédiate)",
    localArchitecture:
      "Commune résidentielle cossue et très prisée, limitrophe du 12e arrondissement de Paris. Immeubles de style haussmannien en pierre de taille, grandes hauteurs sous plafond, parquets nobles cirés et parties communes soignées.",
    accessLogistics:
      "Proximité de Paris exigeant une gestion fine des stationnements. Approvisionnement discret des matériaux et protection soignée des halls et escaliers d'immeubles de caractère.",
    directAnswer:
      "À Saint-Mandé (94160), RenovaXpert vous accompagne dans la rénovation de standing de votre appartement : restauration de parquets anciens, finitions de peinture soignées, carrelage haut de gamme et cloisons phoniques. Réponse sous 24h ouvrées par nos artisans pour visite technique et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Comment concilier rénovation moderne et préservation des moulures à Saint-Mandé ?",
        answer:
          "Nos plâtriers et peintres travaillent à la main pour restaurer les corniches d'époque sans les noyer sous l'enduit, tout en intégrant des éclairages contemporains discrets.",
      },
      {
        question: "Intervenez-vous dans les appartements donnant sur le Bois de Saint-Mandé ?",
        answer:
          "Oui, nos équipes y réalisent régulièrement des aménagements sur-mesure (peintures lessivables, parquets vitrifiés sans odeur, agencement de dressings en placo).",
      },
      {
        question: "Quelle est la garantie sur vos travaux de rénovation à Saint-Mandé ?",
        answer:
          "Tous nos travaux de second œuvre sont couverts par notre garantie d'achèvement et notre assurance professionnelle responsabilité civile et décennale.",
      },
    ],
    neighboringSlugs: ["vincennes", "charenton-le-pont", "montreuil"],
  },
  {
    slug: "charenton-le-pont",
    name: "Charenton-le-Pont",
    postalCodes: "94220",
    department: "Val-de-Marne",
    departmentCode: "94",
    population: "30 000 hab.",
    housingType: "Appartements haussmanniens de l'avenue de Gravelle, résidences modernes des bords de Seine et immeubles de centre-ville",
    neighborhoodQuartiers: ["Gravelle", "Conflans", "Archevêché", "Centre-Ville", "Valmy", "Bercy 2"],
    landmarks: "Avenue de Gravelle, Pavillon Antoine de Navarre, Bois de Vincennes, Passerelle d'Alfortville",
    metroAccess: "Ligne 8 (Charenton - Écoles, Liberté)",
    localArchitecture:
      "Élégance de l'avenue de Gravelle face au Bois avec ses appartements bourgeois aux beaux parquets, combinée aux résidences plus récentes de Conflans et de la rue de Paris demandant des rénovations modernes et fonctionnelles.",
    accessLogistics:
      "Accès direct par l'autoroute A4 et le périphérique est. Organisation rapide des dépôts de matériel et évacuation propre des gravats vers les centres de tri spécialisés.",
    directAnswer:
      "À Charenton-le-Pont (94220), confiez la rénovation de votre intérieur à RenovaXpert : parquet en chêne, cloisons en placo, faïence de salle de bain et peinture intérieure soignée. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Quelles sont les solutions pour insonoriser un appartement sur l'avenue de Gravelle ?",
        answer:
          "Nous mettons en place des contre-cloisons phoniques Placostil® avec laine minérale acoustique et des sous-couches sous parquet certifiées 21 dB pour un silence absolu.",
      },
      {
        question: "Prenez-vous en charge la rénovation complète d'une cuisine ou salle de bain ?",
        answer:
          "Oui, nous gérons la dépose, l'étanchéité sous carrelage (SPEC), la pose de faïence murale, le carrelage de sol et la mise en peinture hydrofuge.",
      },
      {
        question: "Sous quel délai pouvons-nous obtenir un devis à Charenton-le-Pont ?",
        answer:
          "Nous vous répondons sous 24h ouvrées et convenons rapidement d'un rendez-vous sur place à votre convenance.",
      },
    ],
    neighboringSlugs: ["saint-mande", "vincennes", "saint-maur-des-fosses", "alfortville"],
  },
  {
    slug: "nogent-sur-marne",
    name: "Nogent-sur-Marne",
    postalCodes: "94130",
    department: "Val-de-Marne",
    departmentCode: "94",
    population: "34 000 hab.",
    housingType: "Propriétés en bord de Marne, appartements bourgeois et résidences Art Déco du centre-ville",
    neighborhoodQuartiers: ["Baltard", "Viselets", "Port de Plaisance", "Centre-Ville", "Île de Beauté", "Fontenay-sous-Bois limite"],
    landmarks: "Pavillon Baltard, Port de Plaisance de Nogent, Bords de Marne, Théâtre Antoine Watteau",
    metroAccess: "RER A (Nogent-sur-Marne), RER E (Nogent - Le Perreux)",
    localArchitecture:
      "Cadre de vie privilégié le long de la Marne avec le célèbre Pavillon Baltard. Bâtis d'époque 1900 et Art Déco aux hauts plafonds, parquets chevrons, ainsi que résidences contemporaines aux terrasses généreuses.",
    accessLogistics:
      "Voirie résidentielle aérée facilitant les opérations de livraison. Équipes équipées de bâches épaisses et de protections d'escalier pour garantir une propreté constante du chantier.",
    directAnswer:
      "À Nogent-sur-Marne (94130), RenovaXpert réalise vos projets de rénovation d'appartements et maisons : parquets massifs ou contrecollés, carrelages design, cloisons phoniques et peintures veloutées. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Comment valoriser un appartement avec vue sur la Marne à Nogent ?",
        answer:
          "Nous recommandons des teintes claires et lumineuses pour maximiser l'apport de lumière naturelle, associées à un parquet en chêne clair brossé et huilé ou vitrifié mat.",
      },
      {
        question: "Rénovez-vous les parquets d'époque dans les maisons nogentaises ?",
        answer:
          "Oui, nous assurons le ponçage sans poussière, la réparation des lambourdes et le traitement hydrofuge ou vitrification haute protection.",
      },
      {
        question: "Vos artisans sont-ils salariés de votre entreprise ?",
        answer:
          "Oui, l'ensemble des travaux de peinture, pose de sol et plâtrerie est exécuté par notre propre équipe d'artisans qualifiés.",
      },
    ],
    neighboringSlugs: ["vincennes", "saint-maur-des-fosses", "fontenay-sous-bois", "joinville-le-pont"],
  },

  // ========================================================
  // SEINE-SAINT-DENIS (93)
  // ========================================================
  {
    slug: "montreuil",
    name: "Montreuil",
    postalCodes: "93100",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    population: "111 000 hab.",
    housingType: "Lofts d'artistes dans d'anciens ateliers industriels, maisons de ville ouvrières et résidences contemporaines",
    neighborhoodQuartiers: ["Bas-Montreuil", "Croix de Chavaux", "Murs à Pêches", "Solidarité-Carnot", "Villiers-Barbusse", "Mairie de Montreuil"],
    landmarks: "Murs à Pêches, Centre d'art contemporain, Parc des Beaumonts, Place de la Mairie",
    metroAccess: "Ligne 9 (Robespierre, Croix de Chavaux, Mairie de Montreuil)",
    localArchitecture:
      "Identité dynamique et créative : réhabilitation spectaculaire d'anciens ateliers de serrurerie ou d'imprimerie en lofts volumineux avec verrières métalliques, murs de briques apparentes et sols en béton ciré ou vinyle rigide SPC.",
    accessLogistics:
      "Passages pavés et cours intérieures parfois étroites dans le Bas-Montreuil. Utilisation de matériel compact et échafaudages légers pour accéder aux verrières et plafonds cathédrale.",
    directAnswer:
      "À Montreuil (93100), RenovaXpert est le spécialiste de la rénovation de lofts, ateliers et appartements : création de verrières, cloisons phoniques en placo, peintures mates design et pose de sols vinyles ou parquets. Réponse sous 24h ouvrées par nos artisans et devis gratuit.",
    heroImage: "/images/zones/vincennes.webp",
    localFaqs: [
      {
        question: "Comment aménager un loft ou un atelier d'artiste à Montreuil ?",
        answer:
          "Nous concevons des volumes sur-mesure avec cloisons en plaques de plâtre phoniques, intégration de verrières d'atelier en acier et éclairages suspendus adaptés aux grandes hauteurs sous plafond.",
      },
      {
        question: "Quel revêtement de sol préconiser pour un grand espace ouvert à Montreuil ?",
        answer:
          "Le sol vinyle rigide LVT/SPC clipsable ou le parquet contrecollé grande largeur offrent un compromis idéal entre esthétique industrielle chaleureuse, résistance aux passages et confort acoustique.",
      },
      {
        question: "Peut-on conserver un mur en briques d'origine lors de la rénovation ?",
        answer:
          "Oui, nous réalisons le brossage doux, le rejointoiement à la chaux et l'application d'un fixateur incolore antipoussière pour mettre en valeur le cachet authentique du lieu.",
      },
    ],
    neighboringSlugs: ["vincennes", "saint-mande", "bagnolet", "fontenay-sous-bois"],
  },
];

export function getLocationBySlug(slug: string): LocationData | undefined {
  return locationsData.find((l) => l.slug === slug);
}
