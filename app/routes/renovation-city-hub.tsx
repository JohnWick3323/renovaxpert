import { Link, useLoaderData } from "react-router";
import {
  ChevronRight,
  Phone,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Clock,
  Building2,
  Paintbrush,
  Layers,
  Grid3x3,
  Leaf,
  Square,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { buildMeta, buildCanonicalUrl } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import { getLocationBySlug, locationsData, type LocationData } from "~/data/locations";
import { servicesData } from "~/data/services";
import styles from "./local-page.module.css";

export async function loader({ params }: { params: { ville?: string } }) {
  const villeSlug = params.ville;
  if (!villeSlug) {
    throw new Response("Ville non spécifiée", { status: 404 });
  }

  const location = getLocationBySlug(villeSlug);
  if (!location) {
    throw new Response(`Zone d'intervention non trouvée : ${villeSlug}`, { status: 404 });
  }

  const neighboringLocations = locationsData.filter((l) => location.neighboringSlugs.includes(l.slug));

  return {
    location,
    neighboringLocations,
  };
}

export function meta({ data }: { data?: { location?: LocationData } }) {
  if (!data?.location) {
    return buildMeta({
      title: "Zone non trouvée | RenovaXpert",
      description: "La zone d'intervention demandée est introuvable.",
      pathname: "/zones-intervention",
      noindex: true,
    });
  }

  const { location } = data;
  const canonicalPath = `/renovation-interieure/${location.slug}`;
  const pageTitle =
    location.name.length > 15
      ? `Rénovation à ${location.name} (${location.postalCodes}) | RenovaXpert`
      : `Rénovation Intérieure à ${location.name} (${location.postalCodes}) | RenovaXpert`;
  const pageDescription = `Artisans qualifiés pour vos travaux à ${location.name} (${location.postalCodes}) : peinture, parquets, carrelage et placo. Devis gratuit et réponse sous 24h ouvrées.`;

  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const serviceIcons: Record<string, typeof Paintbrush> = {
  "peinture-interieure": Paintbrush,
  "pose-parquet": Layers,
  "pose-carrelage": Grid3x3,
  "pose-sol-vinyle": Leaf,
  "plaquiste-placo": Square,
  "nettoyage-fin-de-chantier": Sparkles,
};

export default function RenovationCityHub() {
  const { location, neighboringLocations } = useLoaderData<typeof loader>();
  const canonicalPath = `/renovation-interieure/${location.slug}`;
  const mapQuery = encodeURIComponent(`${location.name}, ${location.postalCodes}, France`);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  const mapPublicUrl = `https://maps.google.com/maps?q=${mapQuery}`;

  const citySchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://renovaxpert.fr${canonicalPath}#service`,
        name: `Rénovation intérieure à ${location.name}`,
        serviceType: "Travaux de rénovation intérieure et second œuvre",
        url: `https://renovaxpert.fr${canonicalPath}`,
        description: `Prestations professionnelles de rénovation intérieure à ${location.name} (${location.postalCodes}) : peinture soignée, pose et vitrification de parquet, carrelage, sols vinyles LVT, cloisons placo et nettoyage après chantier.`,
        provider: {
          "@id": siteConfig.entityId,
        },
        areaServed: {
          "@type": "City",
          name: location.name,
          postalCode: location.postalCodes,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: location.department,
          },
        },
        hasMap: mapPublicUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://renovaxpert.fr${canonicalPath}#breadcrumb`,
        itemListElement: [
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
            "name": location.name,
            "item": `https://renovaxpert.fr${canonicalPath}`,
          },
        ],
      },
    ],
  };

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
              {location.name} ({location.postalCodes})
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <MapPin size={14} aria-hidden="true" />
              Artisans Rénovation {location.name}
            </div>
            <h1 className={styles.title}>
              Entreprise de Rénovation Intérieure à {location.name}
            </h1>
            <p className={styles.subtitle}>
              RenovaXpert prend en charge vos travaux de second œuvre à {location.name} ({location.postalCodes}). De la peinture
              décorative à la pose de parquet, en passant par le carrelage et les cloisons en placo, nos artisans qualifiés
              réalisent vos aménagements avec rigueur, propreté et respect des délais.
            </p>
            <div className={styles.heroActions}>
              <a
                href={`#devis-form-${location.slug}`}
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: `${location.slug}_hero_quote`,
                    page_path: canonicalPath,
                    destination: `#devis-form-${location.slug}`,
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
                    link_location: `${location.slug}_hero_call`,
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
              src={location.heroImage}
              alt={`Exemple d'ambiance et finitions soignées pour un appartement à ${location.name}`}
              width={1200}
              height={800}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Direct Answer Citation Box (GEO / AI Overviews & Perplexity) */}
      <section className={styles.section} style={{ paddingBottom: "1rem", paddingTop: "2rem" }}>
        <div className={styles.inner}>
          <div
            style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "12px",
              padding: "1.25rem 1.5rem",
              display: "flex",
              alignItems: "flex-start",
              gap: "1rem",
            }}
          >
            <Clock size={24} style={{ color: "#16a34a", flexShrink: 0, marginTop: "2px" }} aria-hidden="true" />
            <div>
              <strong style={{ display: "block", color: "#166534", marginBottom: "0.35rem", fontSize: "1rem" }}>
                En résumé à {location.name} ({location.postalCodes})
              </strong>
              <p style={{ margin: 0, color: "#14532d", fontSize: "0.95rem", lineHeight: "1.55" }}>
                {location.directAnswer}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with deep links to child matrix pages */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Nos Prestations de Rénovation à {location.name}</h2>
            <p>
              Une équipe d'artisans spécialisés pour chacun de vos corps d'état de second œuvre, sans sous-traitance opaque.
            </p>
          </div>

          <div className={styles.grid3}>
            {servicesData.map((srv) => {
              const IconComp = serviceIcons[srv.slug] || Paintbrush;
              return (
                <div key={srv.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.serviceIcon}>
                      <IconComp size={22} aria-hidden="true" />
                    </span>
                    <h3>{srv.name}</h3>
                  </div>
                  <p>{srv.shortDesc}</p>
                  <ul className={styles.checkList}>
                    {srv.scopePoints.slice(0, 3).map((pt, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={16} aria-hidden="true" />
                        <span>{pt.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: "1.25rem" }}>
                    <Link
                      to={`/renovation-interieure/${location.slug}/${srv.slug}`}
                      className={styles.cardLink}
                      style={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
                    >
                      Détails {srv.shortName} à {location.name} <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Architectural & Logistics Guide */}
      <section className={styles.section} style={{ backgroundColor: "#f8fafc" }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Spécificités du Parc Immobilier à {location.name}</h2>
            <p>
              Comprendre l'architecture et les règlements de copropriété locaux permet de garantir un chantier sans incident.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
              <div className={styles.cardHeader}>
                <span className={styles.serviceIcon}>
                  <Building2 size={22} aria-hidden="true" />
                </span>
                <h3>Typologie du Bâti & Matériaux</h3>
              </div>
              <p>{location.localArchitecture}</p>
              <div style={{ marginTop: "1rem" }}>
                <strong>Quartiers d'intervention fréquents :</strong>
                <p style={{ marginTop: "0.35rem", color: "#64748b", fontSize: "0.9rem" }}>
                  {location.neighborhoodQuartiers.join(" • ")}
                </p>
              </div>
            </div>

            <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
              <div className={styles.cardHeader}>
                <span className={styles.serviceIcon}>
                  <ShieldCheck size={22} aria-hidden="true" />
                </span>
                <h3>Logistique & Respect de Copropriété</h3>
              </div>
              <p>{location.accessLogistics}</p>
              <ul className={styles.checkList} style={{ marginTop: "1rem" }}>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>Respect strict des horaires de travaux bruyants autorisés</span>
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>Bâchage et protection continue des ascenseurs et paliers</span>
                </li>
                <li>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <span>Évacuation des gravats en sacs étanches vers filières agréées</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Google Maps Embed with hasMap grounding */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre d'Intervention à {location.name}</h2>
            <p>
              Nos équipes d'artisans interviennent dans l'ensemble des quartiers de {location.name} ({location.postalCodes}) et ses environs immédiats.
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Carte de la zone d'intervention à ${location.name}`}
            />
          </div>
        </div>
      </section>

      {/* Local FAQs */}
      <section className={styles.section} style={{ backgroundColor: "#f8fafc" }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur la Rénovation à {location.name}</h2>
            <p>Retrouvez les réponses aux interrogations régulières de nos clients {location.name.toLowerCase()}s.</p>
          </div>

          <div className={styles.faqList}>
            {location.localFaqs.map((faq, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.question}</span>
                  <ChevronRight size={18} className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Neighboring Areas Linking Mesh */}
      {neighboringLocations.length > 0 && (
        <section className={styles.section} style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
          <div className={styles.inner}>
            <h3 style={{ fontSize: "1.1rem", marginBottom: "0.75rem", color: "#1e293b" }}>
              Communes Voisines Également Desservies :
            </h3>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              {neighboringLocations.map((neighbor) => (
                <Link
                  key={neighbor.slug}
                  to={`/renovation-interieure/${neighbor.slug}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 0.9rem",
                    background: "#ffffff",
                    border: "1px solid #cbd5e1",
                    borderRadius: "8px",
                    color: "#0f172a",
                    fontSize: "0.875rem",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  <MapPin size={14} style={{ color: "#0ea5e9" }} aria-hidden="true" />
                  Rénovation {neighbor.name} ({neighbor.postalCodes})
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* GHL Quote Form */}
      <section id={`devis-form-${location.slug}`} className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Demandez Votre Devis Gratuit à {location.name}</h2>
              <p>
                Remplissez le formulaire ci-dessous ou contactez notre desk technique au{" "}
                <a href={siteConfig.phone.href} style={{ color: "inherit", fontWeight: 700 }}>
                  {siteConfig.phone.display}
                </a>
                . Réponse garantie sous 24 heures ouvrées.
              </p>
            </div>
            <GhlQuoteForm variant="card" />
          </div>
        </div>
      </section>
    </main>
  );
}
