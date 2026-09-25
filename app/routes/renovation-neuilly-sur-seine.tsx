import { Link } from "react-router";
import { ChevronRight, Phone, ArrowRight, MapPin, CheckCircle2, ShieldCheck, Clock, Crown, Paintbrush, Layers, Grid3x3, Leaf, Square, Sparkles } from "lucide-react";
import type { Route } from "./+types/renovation-neuilly-sur-seine";
import { siteConfig } from "~/lib/site-config";
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import styles from "./local-page.module.css";

const canonicalPath = "/renovation-interieure/neuilly-sur-seine";
const pageTitle = "Rénovation à Neuilly-sur-Seine (92200) | RenovaXpert";
const pageDescription = "Rénovation soignée à Neuilly-sur-Seine : peinture haut de gamme, parquets point de Hongrie et carrelage de standing. Devis gratuit et réponse sous 24h ouvrées.";

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
      "name": "Rénovation intérieure à Neuilly-sur-Seine",
      "serviceType": "Travaux de rénovation intérieure et finitions soignées",
      "url": `https://renovaxpert.fr${canonicalPath}`,
      "description":
        "Service professionnel de rénovation d'appartements et résidences à Neuilly-sur-Seine (92200) : mise en peinture haut de gamme, ponçage et vitrification de parquets d'époque, carrelage, plâtrerie sèche et nettoyage après travaux. Réalisé par notre propre équipe.",
      "provider": {
        "@id": siteConfig.entityId,
      },
      "areaServed": {
        "@type": "City",
        "name": "Neuilly-sur-Seine",
        "postalCode": "92200",
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
          "name": "Neuilly-sur-Seine",
          "item": `https://renovaxpert.fr${canonicalPath}`,
        },
      ],
    },
  ],
};

const faqs = [
  {
    q: "Comment restaurez-vous les moulures et boiseries anciennes à Neuilly-sur-Seine ?",
    a: "Dans les immeubles bourgeois de Neuilly (boulevards d'Inkermann, Victor-Hugo, avenue du Roule), nous intervenons avec des techniques manuelles délicates : décapage doux, rebouchage des décors en staff ou stuc à l'enduit fin et mise en peinture soignée au pinceau à rechampir pour valoriser chaque relief architectural sans empâter les sculptures.",
  },
  {
    q: "Quelles précautions prenez-vous pour les parties communes des immeubles cossus ?",
    a: "Les copropriétés neuilléennes imposent un respect exemplaire du cadre de vie. Nous installons un bâchage protecteur complet sur les tapis de palier, marches d'escalier et parois de cabine d'ascenseur, tout en observant un calendrier rigoureux de nettoyage quotidien de la zone d'accès.",
  },
  {
    q: "Traitez-vous les parquets anciens en point de Hongrie et chevrons ?",
    a: "Oui, nos artisans maîtrisent le ponçage de parquets anciens à grain progressif avec aspiration continue pour préserver l'épaisseur du bois noble, suivi de l'application de vitrificateurs écologiques mats ou satinés qui protègent durablement les fibres tout en sublimant le veinage naturel.",
  },
  {
    q: "Dans quel délai RenovaXpert intervient-elle pour une visite à Neuilly ?",
    a: "Que votre demande arrive par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour convenir d'une visite technique sur place à Neuilly-sur-Seine. Le devis complet et détaillé est ensuite préparé sans engagement.",
  },
];

export default function RenovationNeuilly() {
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
              Neuilly-sur-Seine (92200)
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <Crown size={14} aria-hidden="true" />
              Artisans Rénovation Neuilly-sur-Seine
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à Neuilly-sur-Seine
            </h1>
            <p className={styles.subtitle}>
              RenovaXpert vous accompagne dans la rénovation soignée de vos appartements et hôtels particuliers à
              Neuilly-sur-Seine (92200). Travaux de peinture fine, restauration de parquets anciens, calepinage de carrelage
              et redistribution de pièces en plaques de plâtre : l'alliance de la rigueur artisanale et du souci du détail.
            </p>
            <div className={styles.heroActions}>
              <a
                href="#devis-form-neuilly"
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: "neuilly_hero_quote",
                    page_path: canonicalPath,
                    destination: "#devis-form-neuilly",
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
                    link_location: "neuilly_hero_call",
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
              src="/images/zones/neuilly-sur-seine.webp"
              alt="Exemple d'ambiance et finitions haut de gamme pour un appartement à Neuilly-sur-Seine"
              width={1200}
              height={796}
            />
          </div>
        </div>
      </section>

      {/* Spécificités locales du bâti à Neuilly-sur-Seine */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Exigences Architecturales et Patrimoniales à Neuilly-sur-Seine</h2>
            <p>
              Avec son bâti d'exception en pierre de taille et ses résidences de standing, Neuilly impose des protocoles de
              rénovation rigoureux qui magnifient les volumes d'origine.
            </p>
          </div>

          <div className={styles.localBox}>
            <h3>Les Enjeux Techniques Spécifiques aux Biens Neuilléens</h3>
            <ul>
              <li>
                <strong>Hauteurs sous plafond et éléments décoratifs d'époque :</strong> les appartements de l'avenue du
                Roule ou du quartier Saint-James affichent fréquemment des hauteurs sous plafond dépassant 3,20 mètres, avec
                moulures en staff, rosaces et corniches délicates. Nos peintres adaptent leurs échafaudages intérieurs et
                leurs techniques d'enduisage pour restaurer ces ornements sans altérer leur finesse.
              </li>
              <li>
                <strong>Parquets massifs précieux (Point de Hongrie, Bâton Rompu) :</strong> le parquet constitue l'âme des
                salons de réception neuilléens. Notre équipe assure le ponçage délicat des lames anciennes, le remplacement de
                chênes abîmés à l'identique et l'application de vitrificateurs mats ou satinés haute durabilité sans solvants nocifs.
              </li>
              <li>
                <strong>Discrétion, protection renforcée et propreté de chantier :</strong> nous veillons scrupuleusement à
                la tranquillité du voisinage et appliquons un protocole rigoureux de calfeutrage des portes pour contenir toute
                poussière, avec un nettoyage approfondi en fin de journée.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Prestations de second œuvre à Neuilly */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations d'Aménagement Intérieur à Neuilly-sur-Seine</h2>
            <p>Un savoir-faire complet pour rénover, embellir et pérenniser votre patrimoine immobilier.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <Paintbrush size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Peinture Décorative &amp; Boiseries</h3>
              <p>
                Peintures professionnelles veloutées ou mates, mise en laque des portes, plinthes et radiateurs en fonte.
                Lissage méticuleux pour des parois parfaitement planes et uniformes.
              </p>
              <Link to="/services/peinture-interieure-paris" className={styles.cardLink}>
                Découvrir la peinture intérieure <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Layers size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Restauration de Parquets Anciens</h3>
              <p>
                Ponçage sans poussière, réparations de lames de chêne ancien, vitrification haute résistance ou mise en cire
                pour valoriser vos parquets point de Hongrie et chevrons.
              </p>
              <Link to="/services/pose-parquet-paris" className={styles.cardLink}>
                Découvrir le parquet <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Grid3x3 size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Carrelage &amp; Faïence Haut de Gamme</h3>
              <p>
                Pose précise de grès cérame grand format, carreaux de marbre, crédences en zelliges et faïences murales dans
                les salles d'eau et cuisines contemporaines.
              </p>
              <Link to="/services/pose-carrelage-paris" className={styles.cardLink}>
                Découvrir le carrelage <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Square size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Plaquiste &amp; Aménagement de Dressing</h3>
              <p>
                Création de suites parentales avec cloisons phoniques renforcées, faux plafonds intégrant des gorges lumineuses
                et doublages isolants thermiques pour un confort thermique optimal.
              </p>
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.cardLink}>
                Découvrir nos travaux de plaquiste <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Leaf size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Sols Vinyles &amp; Dalles LVT</h3>
              <p>
                Solutions de sols PVC et vinyles haut de gamme imitation parquet ou pierre naturelle pour buanderies, chambres
                d'appoint ou résidences secondaires, chaleureux et résistants.
              </p>
              <Link to="/services/pose-sol-vinyle-paris" className={styles.cardLink}>
                Découvrir le sol vinyle <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>

            <div className={styles.card}>
              <Sparkles size={24} style={{ color: "var(--color-primary)" }} aria-hidden="true" />
              <h3>Nettoyage Après Travaux Minutieux</h3>
              <p>
                Remise en état complète de fin de chantier : aspiration industrielle HEPA, détachage soigné, lavage des vitres
                et nettoyage délicat des matériaux nobles pour un lieu prêt à emménager.
              </p>
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.cardLink}>
                Découvrir le nettoyage de chantier <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi RenovaXpert à Neuilly */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Pourquoi Faire Appel à RenovaXpert à Neuilly-sur-Seine ?</h2>
            <p>Une démarche artisanale structurée et un accompagnement transparent pour chaque étape de votre projet.</p>
          </div>

          <div className={styles.grid3}>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <CheckCircle2 size={24} aria-hidden="true" />
              </div>
              <h3>Notre Propre Équipe</h3>
              <p>
                {siteConfig.teamStatement} Pas de sous-traitance opaque : nos artisans assurent la continuité et la maîtrise
                complète de vos travaux.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <ShieldCheck size={24} aria-hidden="true" />
              </div>
              <h3>Garantie Contractuelle</h3>
              <p>
                {siteConfig.guaranteeStatement} Un contrôle des détails d'exécution est mené pièce par pièce avant livraison.
              </p>
            </div>
            <div className={styles.card}>
              <div style={{ color: "var(--color-primary)", marginBottom: "0.5rem" }}>
                <Clock size={24} aria-hidden="true" />
              </div>
              <h3>Prise en Charge sous 24h</h3>
              <p>
                {siteConfig.callbackSla}. Nous convenons d'un rendez-vous sur place à Neuilly pour évaluer vos travaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre d'Intervention à Neuilly-sur-Seine</h2>
            <p>
              Nos équipes d'artisans interviennent dans l'ensemble des quartiers de Neuilly-sur-Seine (92200) et ses abords immédiats.
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src="https://maps.google.com/maps?q=Neuilly-sur-Seine%2C%2092200%2C%20France&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte de la zone d'intervention à Neuilly-sur-Seine"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Rénovation à Neuilly-sur-Seine</h2>
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
            <h2>Découvrez Également Nos Interventions Limitrophes</h2>
            <p>RenovaXpert intervient également dans les communes voisines des Hauts-de-Seine :</p>
          </div>

          <div className={styles.relatedLinks}>
            <Link to="/zones-intervention" className={styles.relatedLink}>
              <span>Toutes nos zones d'intervention</span>
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link to="/renovation-interieure/levallois-perret" className={styles.relatedLink}>
              <span>Rénovation à Levallois-Perret</span>
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
      <section className={styles.quoteSection} id="devis-form-neuilly">
        <div className={styles.inner}>
          <div className={styles.quoteWrapper}>
            <div className={styles.sectionHeader}>
              <h2>Demandez Votre Devis à Neuilly-sur-Seine</h2>
              <p>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées pour convenir d'une visite et préparer votre chiffrage.</p>
            </div>
            <GhlQuoteForm variant="transparent" id="neuilly-quote-form" serviceSlug="neuilly-sur-seine" />
          </div>
        </div>
      </section>
    </main>
  );
}
