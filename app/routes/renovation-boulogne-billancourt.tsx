import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, Building2, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles } from "lucide-react";
import type { Route } from "./+types/renovation-boulogne-billancourt";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./local-page.module.css";

const canonicalPath = "/renovation-interieure/boulogne-billancourt";
const pageTitle = "Rénovation à Boulogne-Billancourt (92100) | RenovaXpert";
const pageDescription = "Artisans qualifiés pour vos travaux à Boulogne-Billancourt : peinture, parquets, carrelage et cloisons en placo. Devis gratuit et réponse sous 24h ouvrées.";

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
      "name": "Rénovation intérieure à Boulogne-Billancourt",
      "serviceType": "Travaux de rénovation intérieure et second œuvre",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Prestations professionnelles de rénovation intérieure à Boulogne-Billancourt (92100) : peinture soignée, pose et ponçage de parquet, carrelage, sols vinyles, cloisons en placo et nettoyage après chantier. Travaux réalisés par notre propre équipe.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": {
        "@type": "City",
        "name": "Boulogne-Billancourt",
        "postalCode": "92100",
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
          "name": "Boulogne-Billancourt",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Quelles sont les exigences phoniques dans les résidences des années 1970 à Boulogne ?",
    a: "Dans les grands ensembles du Point-du-Jour ou du quartier Silly-Gallieni, les planchers en dalles béton transmettent facilement les bruits de pas et d'impact. Pour toute pose de parquet contrecollé ou de sol vinyle, nous intégrons systématiquement des sous-couches résilientes attestant d'une atténuation acoustique d'au moins 19 à 21 dB, conformément aux préconisations des règlements de copropriété boulonnais.",
  },
  {
    q: "Comment organisez-vous les livraisons de matériaux sur les grands axes boulonnais ?",
    a: "Le stationnement sur l'avenue Édouard Vaillant, la route de la Reine ou le boulevard Jean-Jaurès est très surveillé. Nos équipes organisent les déchargements lourds (plaques de plâtre, sacs de colle, ragréage) par créneaux matinaux ciblés, en utilisant des chariots à bandage caoutchouc pour préserver les halls d'immeubles et éviter tout blocage de la voie publique.",
  },
  {
    q: "Peut-on redistribuer les cloisons dans un appartement Art Déco vers Marmottan ?",
    a: "Oui. Dans le secteur Parchamp / Prince-Marmottan, les bâtis des années 1930 comportent souvent des cloisons distributives en briques plâtrières ou mâchefer. Nous réalisons leur dépose en sécurité et reconstruisons des cloisons légères en plaques de plâtre sur ossature métallique, ce qui permet de créer des ouvertures contemporaines sans surcharger les planchers anciens.",
  },
  {
    q: "Sous quel délai notre demande de devis à Boulogne-Billancourt est-elle traitée ?",
    a: "Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées. Nous convenons rapidement d'un rendez-vous sur place à votre adresse boulonnaise pour prendre les cotes et établir un devis détaillé, gratuit et sans engagement.",
  },
];

export default function RenovationBoulogne() {
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
              Boulogne-Billancourt (92100)
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <MapPin size={14} aria-hidden="true" />
              Artisans Rénovation Boulogne-Billancourt
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à Boulogne-Billancourt
            </h1>
            <p className={styles.subtitle}>
              RenovaXpert prend en charge vos travaux de second œuvre à Boulogne-Billancourt (92100). De la peinture
              décorative à la pose de parquet, en passant par le carrelage et les cloisons en placo, nos artisans qualifiés
              réalisent vos aménagements avec rigueur, propreté et respect des délais.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#devis-form-boulogne"
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: "boulogne_hero_quote",
                    page_path: canonicalPath,
                    destination: "#devis-form-boulogne",
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
                    link_location: "boulogne_hero_call",
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
              src="/images/zones/boulogne-billancourt.webp"
              alt="Exemple d'ambiance et finitions soignées pour un appartement à Boulogne-Billancourt"
              width={1200}
              height={800}
            />
          </div>
        </div>
      </section>

      {/* 1. Focus Technique Local : Isolation & Bâti */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Exigences Techniques du Parc Résidentiel Boulonnais</h2>
            <p>
              Deuxième poumon urbain d'Île-de-France, Boulogne-Billancourt se distingue par trois typologies architecturales
              majeures qui imposent des méthodes de chantier adaptées.
            </p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <h3>Art Déco &amp; Années 1930</h3>
              <p>
                Autour de Marmottan et du Bois de Boulogne, ces logements présentent de belles hauteurs sous plafond et des
                moulures linéaires. Nos peintres préparent les supports avec des enduits gras et appliquent des peintures
                veloutées lessivables pour magnifier ces volumes d'époque.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Résidences 1960-1970 en Dalle Béton</h3>
              <p>
                Au Point-du-Jour ou près de Marcel Sembat, les structures en béton requièrent un ragréage fibré soigné avant
                toute pose de sol et l'interposition obligatoire de membranes acoustiques haute performance contre les bruits
                de pas.
              </p>
            </div>
            <div className={styles.card}>
              <h3>Programmes Rives de Seine &amp; Trapèze</h3>
              <p>
                Les résidences récentes près de l'Île Seguin bénéficient de plans modulables. Nos plaquistes créent des
                cloisons isolantes pour aménager un bureau de télétravail ou concevoir une suite parentale avec dressing sur mesure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Organisation de Chantier & Logistique */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.localBox}>
            <h3>Organisation Pratique de Chantier à Boulogne-Billancourt</h3>
            <ul>
              <li>
                <strong>Préservation des parties communes :</strong> pose de bâches épaisses et de protections d'angles dans
                les cages d'ascenseur et sur les moquettes de palier dès le premier jour d'intervention.
              </li>
              <li>
                <strong>Discrétion sonore et horaires de copropriété :</strong> planification des travaux bruyants (perçage,
                dépose de carrelage, ponçage) uniquement entre 9h et 12h puis entre 14h et 18h, avec interdiction stricte les week-ends.
              </li>
              <li>
                <strong>Évacuation éco-responsable des déchets :</strong> tri rigoureux des gravats, profilés métalliques et
                chutes de plâtre, évacués en sacs étanches vers les centres de valorisation agréés des Hauts-de-Seine.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Prestations de second œuvre */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations de Second Œuvre à Boulogne-Billancourt</h2>
            <p>Notre propre équipe d'artisans coordonne l'ensemble des finitions intérieures de votre logement.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Paintbrush size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Peinture Murs &amp; Plafonds</h3>
              <p>
                Préparation minutieuse des surfaces, rebouchage des micro-fissures, application de peintures professionnelles
                lessivables (finitions velours, mates ou satinées) à faible émission de COV.
              </p>
              <Link to="/services/peinture-interieure-paris" className={styles.cardLink}>
                Découvrir la peinture intérieure <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Layers size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Pose &amp; Rénovation de Parquet</h3>
              <p>
                Installation de parquets massifs et contrecollés, ponçage professionnel sans poussière volatile et application
                de vitrificateurs haute résistance au passage.
              </p>
              <Link to="/services/pose-parquet-paris" className={styles.cardLink}>
                Découvrir le parquet <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Grid3x3 size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Carrelage Sol &amp; Mural</h3>
              <p>
                Pose de carrelages grand format, faïence de salle de bain et crédence de cuisine. Calepinage précis, étanchéité
                sous carrelage et joints soignés.
              </p>
              <Link to="/services/pose-carrelage-paris" className={styles.cardLink}>
                Découvrir le carrelage <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Leaf size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Sols Vinyles et LVT</h3>
              <p>
                Pose clipsable ou collée de lames et dalles vinyles résistantes à l'eau, idéales pour moderniser rapidement
                les pièces à vivre et pièces d'eau des logements locatifs ou familiaux.
              </p>
              <Link to="/services/pose-sol-vinyle-paris" className={styles.cardLink}>
                Découvrir le sol vinyle <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Square size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Plaques de Plâtre &amp; Cloisons</h3>
              <p>
                Création de cloisons distributives légères, faux plafonds suspendus et doublages thermiques et acoustiques
                pour redistribuer l'espace sans alourdir les planchers.
              </p>
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.cardLink}>
                Découvrir nos travaux de plaquiste <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Sparkles size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Nettoyage Après Travaux</h3>
              <p>
                Remise en état complète en fin d'intervention : dépoussiérage méticuleux, nettoyage des vitres, décapage des
                voiles de ciment et évacuation des déchets de chantier.
              </p>
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.cardLink}>
                Découvrir le nettoyage de chantier <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engagements et Confiance */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Les Engagements RenovaXpert à Boulogne-Billancourt</h2>
            <p>Une méthode de travail éprouvée pour des chantiers transparents et sans mauvaise surprise.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                {siteConfig.teamStatement} Aucun sous-traitant inconnu sur votre chantier : nos artisans assurent personnellement chaque étape.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie Contractuelle</h3>
              <p>
                {siteConfig.guaranteeStatement} Un suivi rigoureux est effectué pour s'assurer de la parfaite planéité et durabilité des ouvrages.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                {siteConfig.callbackSla}. Nous convenons d'une visite à votre adresse à Boulogne pour évaluer votre projet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Foire Aux Questions : Travaux à Boulogne-Billancourt</h2>
            <p>Retrouvez nos réponses concrètes aux interrogations courantes des copropriétaires boulonnais.</p>
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
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Autres Secteurs d'Intervention en Île-de-France</h2>
            <p>RenovaXpert intervient également dans les communes voisines des Hauts-de-Seine et à Paris :</p>
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
            <Link to="/renovation-interieure/levallois-perret" className={styles.relatedLink}>
              <span>Rénovation à Levallois-Perret</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/contact" className={styles.relatedLink}>
              <span>Demande de devis &amp; contact</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire GHL */}
      <section className={styles.quoteSection} id="devis-form-boulogne">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis à Boulogne-Billancourt</h2>
              <p>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="boulogne-quote-form" serviceSlug="boulogne-billancourt" />
          </div>
        </div>
      </section>
    </main>
  );
}
