import type { Route } from "./+types/services";
import { ServicesHero } from "~/blocks/services/services-hero";
import { PeintureSection } from "~/blocks/services/peinture-section";
import { ParquetSection } from "~/blocks/services/parquet-section";
import { CarrelageSection } from "~/blocks/services/carrelage-section";
import { SolVinyleSection } from "~/blocks/services/sol-vinyle-section";
import { DrywallSection } from "~/blocks/services/drywall-section";
import { NettoyageSection } from "~/blocks/services/nettoyage-section";
import { buildMeta } from "~/lib/seo";
import styles from "./services.module.css";

const canonicalPath = "/services";
const pageTitle = "Services de Rénovation Intérieure à Paris | RenovaXpert";
const pageDescription =
  "Découvrez nos prestations de rénovation intérieure à Paris et proche couronne : peinture, parquet, carrelage, sol vinyle, placo et nettoyage. Devis gratuit et réponse sous 24h ouvrées.";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: pageTitle,
    description: pageDescription,
    pathname: canonicalPath,
  });
}

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://renovaxpert.fr/services#breadcrumb",
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
          "name": "Nos Services",
          "item": "https://renovaxpert.fr/services",
        },
      ],
    },
  ],
};

export default function Services() {
  return (
    <main className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesHero />
      <PeintureSection />
      <ParquetSection />
      <CarrelageSection />
      <SolVinyleSection />
      <DrywallSection />
      <NettoyageSection />
    </main>
  );
}
