import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, LayoutGrid, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles } from "lucide-react";
import type { Route } from "./+types/renovation-levallois-perret";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./local-page.module.css";

const canonicalPath = "/renovation-interieure/levallois-perret";
const pageTitle = "Rénovation à Levallois-Perret (92300) | RenovaXpert";
const pageDescription = "Rénovation et agencement d'appartement à Levallois-Perret : peinture, sols vinyles, carrelage et cloisons placo. Devis gratuit et réponse sous 24h ouvrées.";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const citySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `https://renovaxpert.fr${canonicalPath}#service`,
      "name": "Rénovation intérieure à Levallois-Perret",
      "serviceType": "Travaux de rénovation et réagencement intérieur",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de rénovation d'appartements et bureaux à Levallois-Perret (92300) : mise en peinture moderne, optimisation de cloisons en plâtre, pose de parquet et carrelage, sols souples et nettoyage après chantier. Travaux réalisés par notre propre équipe.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": {
        "@type": "City",
        "name": "Levallois-Perret",
        "postalCode": "92300",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Hauts-de-Seine",
        },
      },
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
          "name": "Zones d'intervention",
          "item": "https://renovaxpert.fr/zones-intervention",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Levallois-Perret",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Quelles sont les particularités logistiques des chantiers à Levallois-Perret ?",
    a: "Levallois-Perret possède la plus forte densité de population d'Europe (plus de 27 000 hab/km²), avec un réseau de rues à sens unique étroites (rues Louise-Michel, Anatole-France, Gabriel-Péri). Cela impose une planification rigoureuse pour l'acheminement des matériaux : créneaux de déchargement précis le matin et rotation rapide pour ne pas bloquer la circulation.",
  },
  {
    q: "Comment optimiser l'espace dans les appartements familiaux levalloisiens ?",
    a: "De nombreux appartements à Levallois nécessitent une redistribution des pièces pour créer un espace bureau ou une chambre d'enfant. Nos artisans plaquistes conçoivent des cloisons distributives minces mais très isolantes phoniquement, avec intégration éventuelle de portes à galandage pour gagner des mètres carrés précieux.",
  },
  {
    q: "Proposez-vous des peintures écologiques adaptées aux enfants et pièces de vie ?",
    a: "Oui, nous privilégions des peintures professionnelles labellisées NF Environnement ou Écolabel européen, avec des taux de COV quasi nuls. Elles garantissent un séchage rapide, sans odeur résiduelle tenace, idéal pour les familles devant réintégrer rapidement leur logement.",
  },
  {
    q: "Quel est le délai pour obtenir une visite technique et un devis à Levallois ?",
    a: "Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées. Nous convenons d'une visite gratuite à votre appartement pour évaluer les métrés et vous remettre un devis sans engagement.",
  },
];

export default function RenovationLevallois() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/zones-intervention">Zones d'intervention</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent} aria-current="page">
              Levallois-Perret (92300)
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <LayoutGrid size={14} aria-hidden="true" />
              Artisans Rénovation Levallois-Perret
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à Levallois-Perret
            </h1>
            <p className={styles.subtitle}>
              RenovaXpert prend en charge vos travaux de second œuvre et d'agencement intérieur à Levallois-Perret (92300).
              Peinture moderne, réorganisation de l'espace en plaques de plâtre, parquets chaleureux et carrelages sur mesure :
              des prestations soignées adaptées aux exigences de la vie urbaine levalloisienne.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#devis-form-levallois"
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: "levallois_hero_quote",
                    page_path: canonicalPath,
                    destination: "#devis-form-levallois",
                  })
                }
              >
                Demander un devis gratuit <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.phone.href}
                className="btn btn-outline-white"
                onClick={() =>
                  trackClickToCall({
                    link_location: "levallois_hero_call",
                    page_path: canonicalPath,
                  })
                }
              >
                <Phone size={16} aria-hidden="true" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <img
              src="/images/zones/levallois-perret.webp"
              alt="Exemple d'aménagement moderne et finitions soignées pour un appartement à Levallois-Perret"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* Spécificités locales du bâti à Levallois */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Exigences de Densité Urbaine et d'Agencement à Levallois-Perret</h2>
            <p>
              Ville dynamique à la densité record, Levallois-Perret concentre des immeubles de différentes générations où
              l'optimisation de l'espace et la gestion phonique sont déterminantes.
            </p>
          </div>

          <div className={styles.localBox}>
            <h3>Les 3 Défis Majeurs des Chantiers Levalloisiens</h3>
            <ul>
              <li>
                <strong>Optimisation millimétrée des surfaces :</strong> avec un coût au mètre carré élevé, chaque recoin
                doit être rentabilisé. Nous réalisons des cloisons de distribution sur ossature métallique avec niches
                intégrées, faux plafonds intégrant des rangements en sous-face et pose de portes coulissantes compactes.
              </li>
              <li>
                <strong>Isolation acoustique renforcée en mitoyenneté :</strong> la forte densité d'habitants impose une
                protection phonique irréprochable. Nous posons des doublages thermo-acoustiques avec plaques de plâtre haute
                densité (phoniques) et incorporons des sous-couches isolantes sous tous les parquets et sols souples.
              </li>
              <li>
                <strong>Gestion logistique des déchargements et des déchets :</strong> les rues étroites de Levallois
                nécessitent une manutention rapide des gravats et une mise en décharge immédiate pour ne pas encombrer les
                trottoirs ou les cours d'immeubles.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prestations de second œuvre à Levallois */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations de Rénovation à Levallois-Perret</h2>
            <p>
              Un interlocuteur unique pour coordonner les étapes clés de vos travaux d'intérieur.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Paintbrush size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Mise en Peinture Écologique</h3>
              <p>
                Peintures professionnelles à très faible émission de COV, enduits de lissage soignés pour murs et plafonds,
                finitions mates ou veloutées lessivables pour une atmosphère saine et lumineuse.
              </p>
              <Link to="/services/peinture-interieure-paris" className={styles.cardLink}>
                Découvrir la peinture intérieure <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Square size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Plaquiste &amp; Aménagement d'Espace</h3>
              <p>
                Création de cloisons phoniques, faux plafonds techniques pour intégration de spots lumineux et doublages
                isolants pour transformer les volumes de votre appartement.
              </p>
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.cardLink}>
                Découvrir nos travaux de plaquiste <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Layers size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose de Parquet &amp; Rénovation</h3>
              <p>
                Pose flottante ou collée de parquets contrecollés et massifs avec sous-couche phonique haute performance.
                Ponçage et vitrification de parquets anciens pour un rendu chaleureux.
              </p>
              <Link to="/services/pose-parquet-paris" className={styles.cardLink}>
                Découvrir le parquet <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Grid3x3 size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Carrelage de Pièces d'Eau &amp; Cuisine</h3>
              <p>
                Pose soignée de grès cérame, carreaux de métro et faïences murales dans les salles de bain et crédences.
                Système d'étanchéité sous carrelage et joints hydrofuges anti-taches.
              </p>
              <Link to="/services/pose-carrelage-paris" className={styles.cardLink}>
                Découvrir le carrelage <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Leaf size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Sols Vinyles &amp; LVT Clipsables</h3>
              <p>
                Revêtements vinyles modernes en lames ou dalles PVC résistantes à l'usure et à l'eau, parfaits pour une
                remise au goût du jour rapide et acoustiquement performante.
              </p>
              <Link to="/services/pose-sol-vinyle-paris" className={styles.cardLink}>
                Découvrir le sol vinyle <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Sparkles size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Remise en État Après Travaux</h3>
              <p>
                Nettoyage approfondi de fin de chantier : aspiration des poussières de plâtre au filtre HEPA, lavage des
                vitres recto-verso et décapage des sols pour un emménagement immédiat.
              </p>
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.cardLink}>
                Découvrir le nettoyage de chantier <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi RenovaXpert à Levallois */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pourquoi Choisir RenovaXpert pour Vos Travaux à Levallois ?</h2>
            <p>Une démarche professionnelle fondée sur l'exigence technique et le respect du voisinage.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                {siteConfig.teamStatement} Vos travaux sont pris en charge par nos artisans salariés sans sous-traitance non maîtrisée.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Un procès-verbal de fin de chantier valide la conformité de chaque ouvrage.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Réponse sous 24h Ouvrées</h3>
              <p>
                {siteConfig.callbackSla}. Nous convenons d'une visite à votre logement levalloisien pour élaborer votre devis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre d'Intervention à Levallois-Perret</h2>
            <p>
              Nos équipes d'artisans interviennent dans l'ensemble des quartiers de Levallois-Perret (92300) et ses environs immédiats.
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Levallois-Perret%2C%2092300%2C%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de la zone d'intervention à Levallois-Perret"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Rénovation à Levallois-Perret</h2>
            <p>Retrouvez nos réponses pour préparer sereinement vos travaux de second œuvre.</p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{f.q}</h3>
                <p className={styles.faqAnswer}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Liens connexes */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Découvrez Également Nos Autres Villes d'Intervention</h2>
            <p>RenovaXpert intervient dans les communes limitrophes et à Paris :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Toutes nos zones d'intervention</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/renovation-interieure/neuilly-sur-seine" className={styles.relatedLink}>
              <span>Rénovation à Neuilly-sur-Seine</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/renovation-interieure/boulogne-billancourt" className={styles.relatedLink}>
              <span>Rénovation à Boulogne-Billancourt</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/contact" className={styles.relatedLink}>
              <span>Contactez notre équipe</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire GHL */}
      <section className={styles.quoteSection} id="devis-form-levallois">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis à Levallois-Perret</h2>
              <p>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="levallois-quote-form" serviceSlug="levallois-perret" />
          </div>
        </div>
      </section>
    </main>
  );
}
