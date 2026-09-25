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
import { buildMeta } from "~/lib/seo";
import { GhlQuoteForm } from "~/components/ghl-quote-form";
import { trackQuoteCtaClick, trackClickToCall } from "~/lib/analytics";
import { getLocationBySlug, locationsData, type LocationData } from "~/data/locations";
import { getServiceBySlug, servicesData, type ServiceData } from "~/data/services";
import styles from "./local-page.module.css";

export async function loader({ params }: { params: { ville?: string; service?: string } }) {
  const villeSlug = params.ville;
  const serviceSlug = params.service;

  if (!villeSlug || !serviceSlug) {
    throw new Response("Paramètres manquants", { status: 404 });
  }

  const location = getLocationBySlug(villeSlug);
  if (!location) {
    throw new Response(`Zone d'intervention non trouvée : ${villeSlug}`, { status: 404 });
  }

  const service = getServiceBySlug(serviceSlug);
  if (!service) {
    throw new Response(`Prestation non trouvée : ${serviceSlug}`, { status: 404 });
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);
  const neighboringLocations = locationsData.filter((l) => location.neighboringSlugs.includes(l.slug));

  return {
    location,
    service,
    otherServices,
    neighboringLocations,
  };
}

export function meta({ data }: { data?: { location?: LocationData; service?: ServiceData } }) {
  if (!data?.location || !data?.service) {
    return buildMeta({
      title: "Prestation non trouvée | RenovaXpert",
      description: "La page de prestation demandée est introuvable.",
      pathname: "/zones-intervention",
      noindex: true,
    });
  }

  const { location, service } = data;
  const canonicalPath = `/renovation-interieure/${location.slug}/${service.slug}`;
  const pageTitle = service.metaTitleTemplate
    .replace(/\{city\}/g, location.name)
    .replace(/\{postalCode\}/g, location.postalCodes);
  const pageDescription = service.metaDescTemplate
    .replace(/\{city\}/g, location.name)
    .replace(/\{postalCode\}/g, location.postalCodes);

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

export default function RenovationCityService() {
  const { location, service, otherServices, neighboringLocations } = useLoaderData<typeof loader>();
  const canonicalPath = `/renovation-interieure/${location.slug}/${service.slug}`;
  const parentCityPath = `/renovation-interieure/${location.slug}`;
  const mapQuery = encodeURIComponent(`${location.name}, ${location.postalCodes}, France`);
  const mapPublicUrl = `https://maps.google.com/maps?q=${mapQuery}`;

  const ServiceIcon = serviceIcons[service.slug] || Paintbrush;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://renovaxpert.fr${canonicalPath}#service`,
        name: `${service.name} à ${location.name}`,
        serviceType: service.serviceType,
        url: `https://renovaxpert.fr${canonicalPath}`,
        description: `${service.name} professionnelle à ${location.name} (${location.postalCodes}) : ${service.shortDesc}`,
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
            "item": `https://renovaxpert.fr${parentCityPath}`,
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": service.shortName,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.inner}>
          <nav className={styles.breadcrumb} aria-label="Fil d'Ariane">
            <Link to="/">Accueil</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to="/zones-intervention">Zones</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <Link to={parentCityPath}>{location.name}</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span className={styles.breadcrumbCurrent} aria-current="page">
              {service.shortName}
            </span>
          </nav>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <ServiceIcon size={14} aria-hidden="true" />
              {service.tradeTitle} à {location.name}
            </div>
            <h1 className={styles.title}>
              {service.name} à {location.name} ({location.postalCodes})
            </h1>
            <p className={styles.subtitle}>
              Pour votre appartement ou maison à {location.name}, RenovaXpert assure des travaux de {service.shortName.toLowerCase()} impeccables.
              Préparation soignée, matériaux professionnels durables et respect strict des règles de copropriété.
            </p>
            <div className={styles.heroActions}>
              <a
                href={`#devis-form-${service.slug}`}
                className="btn btn-accent"
                onClick={() =>
                  trackQuoteCtaClick({
                    cta_location: `${location.slug}_${service.slug}_quote`,
                    page_path: canonicalPath,
                    destination: `#devis-form-${service.slug}`,
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
                    link_location: `${location.slug}_${service.slug}_call`,
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
              alt={`Exemple de réalisation : ${service.name} à ${location.name}`}
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
                Synthèse {service.name} à {location.name} ({location.postalCodes})
              </strong>
              <p style={{ margin: 0, color: "#14532d", fontSize: "0.95rem", lineHeight: "1.55" }}>
                À {location.name}, RenovaXpert réalise vos travaux de {service.shortName.toLowerCase()} avec réactivité.
                Déplacement et étude technique gratuits sur place sous 24 à 48 heures ouvrées. Chiffrage transparent,
                garantie d'achèvement et conformité totale aux exigences acoustiques et réglementaires des copropriétés de {location.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Scope of Work */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Protocole d'Intervention : {service.name} à {location.name}</h2>
            <p>
              Chaque étape est menée avec méthode par nos artisans qualifiés pour un résultat pérenne et soigné.
            </p>
          </div>

          <div className={styles.grid2}>
            {service.scopePoints.map((point, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.serviceIcon}>
                    <CheckCircle2 size={22} aria-hidden="true" />
                  </span>
                  <h3>
                    Étape {idx + 1} : {point.title}
                  </h3>
                </div>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Housing Context & Copropriété Realities */}
      <section className={styles.section} style={{ backgroundColor: "#f8fafc" }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Application dans les Immeubles de {location.name}</h2>
            <p>
              Spécificités techniques et précautions d'intervention adaptées au parc immobilier local.
            </p>
          </div>

          <div className={styles.grid2}>
            <div className={styles.card} style={{ backgroundColor: "#ffffff" }}>
              <div className={styles.cardHeader}>
                <span className={styles.serviceIcon}>
                  <Building2 size={22} aria-hidden="true" />
                </span>
                <h3>Contraintes du Bâti Local</h3>
              </div>
              <p>{location.localArchitecture}</p>
              <div style={{ marginTop: "1rem" }}>
                <strong>Quartiers réguliers d'intervention :</strong>
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
                <h3>Règlement de Copropriété & Voisinage</h3>
              </div>
              <p>{service.coproprieteConsiderations.replace(/\{city\}/g, location.name)}</p>
              <p style={{ marginTop: "0.75rem", fontSize: "0.9rem", color: "#64748b" }}>
                {location.accessLogistics}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Triangular Internal Linking Mesh */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Autres Services et Communes Desservies</h2>
            <p>
              Découvrez l'ensemble de nos savoir-faire à {location.name} et nos interventions dans les localités voisines.
            </p>
          </div>

          {/* 1. Upward link to parent city hub */}
          <div style={{ marginBottom: "2rem", padding: "1.25rem", background: "#f1f5f9", borderRadius: "10px" }}>
            <strong style={{ fontSize: "1rem", color: "#0f172a", display: "block", marginBottom: "0.35rem" }}>
              Besoin d'une rénovation globale à {location.name} ?
            </strong>
            <p style={{ margin: "0 0 0.75rem 0", color: "#475569", fontSize: "0.95rem" }}>
              Consultez notre guide complet de rénovation intérieure et découvrez toutes nos prestations municipales.
            </p>
            <Link
              to={parentCityPath}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontWeight: 600,
                color: "var(--color-primary, #1a4f8a)",
                textDecoration: "underline",
              }}
            >
              Voir le Hub Rénovation Intérieure {location.name} <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>

          {/* 2. Sibling services in the same city */}
          <h3 style={{ fontSize: "1.15rem", marginBottom: "1rem", color: "#1e293b" }}>
            Nos Autres Corps d'État à {location.name} :
          </h3>
          <div className={styles.grid3} style={{ marginBottom: "2.5rem" }}>
            {otherServices.map((other) => {
              const OtherIcon = serviceIcons[other.slug] || Paintbrush;
              return (
                <div key={other.id} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.serviceIcon}>
                      <OtherIcon size={20} aria-hidden="true" />
                    </span>
                    <h4>{other.name}</h4>
                  </div>
                  <p style={{ fontSize: "0.9rem" }}>{other.shortDesc}</p>
                  <div style={{ marginTop: "1rem" }}>
                    <Link
                      to={`/renovation-interieure/${location.slug}/${other.slug}`}
                      style={{
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: "var(--color-primary, #1a4f8a)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      {other.shortName} à {location.name} <ArrowRight size={13} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. Same service in neighboring cities */}
          {neighboringLocations.length > 0 && (
            <div>
              <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem", color: "#1e293b" }}>
                {service.name} dans les Communes Voisines :
              </h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {neighboringLocations.map((neighbor) => (
                  <Link
                    key={neighbor.slug}
                    to={`/renovation-interieure/${neighbor.slug}/${service.slug}`}
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
                    {service.shortName} {neighbor.name} ({neighbor.postalCodes})
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Responsive Google Maps Embed with hasMap grounding */}
      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Périmètre d'Intervention : {service.name} à {location.name}</h2>
            <p>
              Nos équipes d'artisans interviennent dans l'ensemble de la commune de {location.name} ({location.postalCodes}) et ses environs immédiats.
            </p>
          </div>

          <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid var(--color-border, #e2e8f0)", boxShadow: "0 4px 16px rgba(0,0,0,0.06)" }}>
            <iframe
              src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="360"
              style={{ border: 0, display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Carte périmètre d'intervention ${service.name} à ${location.name}`}
            />
          </div>
        </div>
      </section>

      {/* Technical FAQs */}
      <section className={styles.section} style={{ backgroundColor: "#f8fafc" }}>
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <h2>Questions Fréquentes sur {service.name} à {location.name}</h2>
            <p>Conseils pratiques de nos artisans pour la préparation et la réalisation de vos travaux.</p>
          </div>

          <div className={styles.faqList}>
            {service.technicalFaqs.map((faq, idx) => (
              <details key={idx} className={styles.faqItem}>
                <summary className={styles.faqQuestion}>
                  <span>{faq.q.replace(/\{city\}/g, location.name)}</span>
                  <ChevronRight size={18} className={styles.faqIcon} aria-hidden="true" />
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.a.replace(/\{city\}/g, location.name)}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GHL Quote Form */}
      <section id={`devis-form-${service.slug}`} className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.formContainer}>
            <div className={styles.formHeader}>
              <h2>Demandez Votre Devis Gratuit pour {service.name} à {location.name}</h2>
              <p>
                Transmettez-nous les détails de votre projet ou appelez directement notre service technique au{" "}
                <a href={siteConfig.phone.href} style={{ color: "inherit", fontWeight: 700 }}>
                  {siteConfig.phone.display}
                </a>
                . Réponse garantie sous 24h ouvrées.
              </p>
            </div>
            <GhlQuoteForm variant="card" />
          </div>
        </div>
      </section>
    </main>
  );
}
