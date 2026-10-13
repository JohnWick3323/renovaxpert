import type { Route } from "./+types/home";
import { HeroSection } from "~/blocks/home/hero-section";
import { ServicesOverview } from "~/blocks/home/services-overview";
import { WhyChooseUs } from "~/blocks/home/why-choose-us";
import { RecentProjectsGallery } from "~/blocks/home/recent-projects-gallery";
import { HomeGuideFaq } from "~/blocks/home/home-guide-faq";
import { CallToActionQuote } from "~/blocks/home/call-to-action-quote";
import { siteConfig } from "~/lib/site-config";
import { locationsData } from "~/data/locations";
import { buildMeta } from "~/lib/seo";
import styles from "./home.module.css";

const canonicalPath = "/";
const pageTitle = "Entreprise de Rénovation Intérieure à Paris | RenovaXpert";
const pageDescription =
  "RenovaXpert, votre entreprise de rénovation intérieure à Paris et proche couronne. Travaux de peinture, parquet, carrelage, sol vinyle, placo. Devis gratuit.";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GeneralContractor",
      "@id": siteConfig.entityId,
      "name": siteConfig.brandName,
      "alternateName": siteConfig.brandAliases,
      "url": "https://renovaxpert.fr/",
      "logo": siteConfig.logoUrl,
      "telephone": siteConfig.phone.international,
      "email": siteConfig.email,
      "description":
        "Entreprise de rénovation intérieure intervenant dans tout Paris et en proche couronne. Travaux de peinture, pose de parquet, carrelage, sol vinyle, plaques de plâtre et nettoyage après travaux réalisés par notre propre équipe.",
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Paris",
        },
        {
          "@type": "AdministrativeArea",
          "name": "Proche couronne",
        },
        ...locationsData.map((loc) => ({
          "@type": "City",
          "name": loc.name,
          "postalCode": loc.postalCodes,
          "containedInPlace": {
            "@type": "AdministrativeArea",
            "name": loc.department,
          },
        })),
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Prestations de rénovation intérieure",
        "itemListElement": siteConfig.servicesList.map((s) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": s.name,
            "url": `https://renovaxpert.fr${s.path}`,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": siteConfig.websiteId,
      "url": "https://renovaxpert.fr/",
      "name": siteConfig.brandName,
      "description":
        "Entreprise de rénovation intérieure à Paris et en proche couronne.",
      "publisher": {
        "@id": siteConfig.entityId,
      },
      "inLanguage": "fr-FR",
    },
  ],
};

export default function Home() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <RecentProjectsGallery />
      <HomeGuideFaq />
      <CallToActionQuote />
    </main>
  );
}
