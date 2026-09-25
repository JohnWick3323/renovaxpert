import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, Castle, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles } from "lucide-react";
import type { Route } from "./+types/renovation-vincennes";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./local-page.module.css";

const canonicalPath = "/renovation-interieure/vincennes";
const pageTitle = "Rénovation intérieure à Vincennes (94300) | RenovaXpert";
const pageDescription = "Travaux de rénovation à Vincennes : restauration de parquets en chêne, peinture soignée, carrelage et faux plafonds. Devis gratuit et réponse sous 24h ouvrées.";

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
      "name": "Rénovation intérieure à Vincennes",
      "serviceType": "Travaux de rénovation intérieure et second œuvre",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de rénovation d'appartements et maisons de ville à Vincennes (94300) : mise en peinture soignée, restauration de parquets anciens, pose de carrelage, doublages en plaques de plâtre et nettoyage après travaux. Travaux réalisés par notre propre équipe.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": {
        "@type": "City",
        "name": "Vincennes",
        "postalCode": "94300",
        "containedInPlace": {
          "@type": "AdministrativeArea",
          "name": "Val-de-Marne",
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
          "name": "Vincennes",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Comment rénovez-vous les plafonds anciens en plâtre sur lattis à Vincennes ?",
    a: "Les immeubles vincennois du début du XXe siècle (rues de Montreuil, de Fontenay, avenue de Paris) comportent souvent des plafonds traditionnels en plâtre sur lattis bois, parfois fragilisés. Plutôt que de surcharger les structures, nous préconisons la création de faux plafonds autoportants en plaques de plâtre fixées de mur à mur sur profilés renforcés, assurant une planéité parfaite et une excellente isolation phonique.",
  },
  {
    q: "Quelles précautions prenez-vous pour les escaliers anciens en bois ?",
    a: "De nombreux immeubles bourgeois de Vincennes disposent d'escaliers en bois massif sans ascenseur. Notre équipe met en place un capitonnage et des protections antidérapantes spécifiques pour gravir les marches en toute sécurité sans marquer les vernis ni détériorer les rambardes d'époque.",
  },
  {
    q: "Intervenez-vous aux abords du Bois de Vincennes et du Château ?",
    a: "Oui, nos artisans se déplacent dans tous les quartiers de Vincennes (quartier du Château, Diderot-Domaine du Bois, Carré historique). Nous respectons scrupuleusement les arrêtés municipaux et les règles de copropriété pour préserver la quiétude des résidents.",
  },
  {
    q: "Dans quel délai obtenons-nous un devis pour un appartement à Vincennes ?",
    a: "Que votre demande soit faite par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées. Nous convenons d'un rendez-vous sur place à Vincennes afin d'évaluer les surfaces et de vous fournir un chiffrage précis et transparent.",
  },
];

export default function RenovationVincennes() {
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
              Vincennes (94300)
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Castle size={14} aria-hidden="true" />
              Artisans Rénovation Vincennes
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à Vincennes
            </h1>
            <p className={styles.subtitle}>
              RenovaXpert réalise l'ensemble de vos travaux de rénovation et d'embellissement intérieur à Vincennes (94300).
              Restauration de parquets en chêne, peintures lumineuses et soignées, carrelages de caractère et cloisons en placo :
              un travail artisanal de haute précision respectueux du charme de l'ancien.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#devis-form-vincennes"
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: "vincennes_hero_quote",
                    page_path: canonicalPath,
                    destination: "#devis-form-vincennes",
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
                    link_location: "vincennes_hero_call",
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
              src="/images/zones/vincennes.webp"
              alt="Exemple d'ambiance chaleureuse et parquet soigné pour un appartement à Vincennes"
              width={1200}
              height={816}
            />
          </div>
        </div>
      </section>

      {/* Spécificités locales du bâti à Vincennes */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Spécificités Architecturales et Patrimoniales à Vincennes</h2>
            <p>
              Limitrophe du 12e arrondissement de Paris et bordée par son bois emblématique, Vincennes offre un parc
              immobilier de caractère où la rénovation requiert doigté et respect des matériaux traditionnels.
            </p>
          </div>

          <div className={styles.localBox}>
            <h3>Les 3 Enjeux Majeurs de la Rénovation à Vincennes</h3>
            <ul>
              <li>
                <strong>Préservation et valorisation des parquets anciens en chêne :</strong> le parc résidentiel vincennois
                regorge de parquets massifs posés à l'anglaise ou en chevrons. Nous réalisons leur restauration par ponçage
                fin avec captation des poussières et application de vitrificateurs écologiques mats qui préservent l'éclat
                naturel du bois sans l'assombrir.
              </li>
              <li>
                <strong>Traitement des plafonds anciens et isolation thermique :</strong> dans les bâtis anciens proches du
                Château ou de la rue de Fontenay, les plafonds en plâtre sur lattis demandent une attention particulière. Nous
                créons des faux plafonds suspendus légers ou autoportants pour intégrer un éclairage moderne sans affaiblir
                les structures de solivage.
              </li>
              <li>
                <strong>Respect de la vie de copropriété et propreté de chantier :</strong> les immeubles bourgeois vincennois
                disposent souvent de cours pavées et de halls soignés. Nous organisons les rotations d'évacuation de gravats
                dans des sacs étanches et assurons un balayage et nettoyage régulier des zones de passage.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prestations de second œuvre à Vincennes */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations de Second Œuvre à Vincennes</h2>
            <p>
              Des artisans spécialisés pour sublimer chaque espace de votre maison de ville ou appartement vincennois.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Paintbrush size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Peinture Intérieure &amp; Boiseries</h3>
              <p>
                Enduits de lissage minutieux, réparation des fissures, mise en peinture soignée des murs, plafonds, corniches
                et radiateurs avec des teintes chaleureuses et durables.
              </p>
              <Link to="/services/peinture-interieure-paris" className={styles.cardLink}>
                Découvrir la peinture intérieure <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Layers size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose &amp; Sablage de Parquet</h3>
              <p>
                Pose de parquets neufs massifs ou contrecollés, ponçage avec aspiration continue et vitrification mate ou
                satinée pour donner une seconde jeunesse à vos sols d'époque.
              </p>
              <Link to="/services/pose-parquet-paris" className={styles.cardLink}>
                Découvrir le parquet <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Grid3x3 size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Carrelage Sol &amp; Mural</h3>
              <p>
                Pose de grès cérame, carreaux de ciment décoratifs, faïences de salle de bain et crédences de cuisine avec
                calepinage au cordeau et étanchéité soignée.
              </p>
              <Link to="/services/pose-carrelage-paris" className={styles.cardLink}>
                Découvrir le carrelage <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Square size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Plaques de Plâtre &amp; Faux Plafonds</h3>
              <p>
                Création de séparations intérieures, réaménagement de chambres, faux plafonds isolants et intégration de gaines
                techniques pour un intérieur moderne et ordonné.
              </p>
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.cardLink}>
                Découvrir nos travaux de plaquiste <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Leaf size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Sols Vinyles &amp; Dalles LVT</h3>
              <p>
                Pose de sols PVC et vinyles haut de gamme, résistants à l'eau, faciles d'entretien et très performants sur le plan
                acoustique pour les appartements familiaux.
              </p>
              <Link to="/services/pose-sol-vinyle-paris" className={styles.cardLink}>
                Découvrir le sol vinyle <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Sparkles size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Nettoyage Après Travaux Minutieux</h3>
              <p>
                Remise en état impeccable de fin de chantier : aspiration industrielle de la poussière fine, nettoyage des vitres
                et profilés, décapage des sols pour une installation sans souci.
              </p>
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.cardLink}>
                Découvrir le nettoyage de chantier <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi RenovaXpert à Vincennes */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pourquoi Faire Confiance à RenovaXpert à Vincennes ?</h2>
            <p>Une expertise artisanale rigoureuse au service de la préservation de votre habitat.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                {siteConfig.teamStatement} Des artisans d'expérience qui travaillent avec méthode et propreté.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie sur Nos Travaux</h3>
              <p>
                {siteConfig.guaranteeStatement} Chaque prestation fait l'objet d'un suivi scrupuleux jusqu'à la réception finale.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                {siteConfig.callbackSla}. Nous convenons d'une visite à votre domicile vincennois pour préparer votre estimation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre d'Intervention à Vincennes</h2>
            <p>
              Nos équipes d'artisans interviennent dans l'ensemble des quartiers de Vincennes (94300) et ses environs immédiats.
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Vincennes%2C%2094300%2C%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de la zone d'intervention à Vincennes"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Rénovation à Vincennes</h2>
            <p>Retrouvez nos réponses pour organiser sereinement vos futurs travaux d'intérieur.</p>
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
            <p>RenovaXpert intervient dans toute la petite couronne et à Paris :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Toutes nos zones d'intervention</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/renovation-interieure/boulogne-billancourt" className={styles.relatedLink}>
              <span>Rénovation à Boulogne-Billancourt</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/renovation-interieure/neuilly-sur-seine" className={styles.relatedLink}>
              <span>Rénovation à Neuilly-sur-Seine</span>
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
      <section className={styles.quoteSection} id="devis-form-vincennes">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis Gratuit à Vincennes</h2>
              <p>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="vincennes-quote-form" serviceSlug="vincennes" />
          </div>
        </div>
      </section>
    </main>
  );
}
