import type { Route } from "./+types/propos";
import { AboutHero } from "~/blocks/propos/about-hero";
import { CompanyStory } from "~/blocks/propos/company-story";
import { OurValues } from "~/blocks/propos/our-values";
import { CertificationsExperience } from "~/blocks/propos/certifications-experience";
import { buildMeta } from "~/lib/seo";
import styles from "./propos.module.css";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "À Propos de RenovaXpert - Entreprise de Rénovation à Paris",
    description:
      "Découvrez l'équipe, la méthode de travail et les engagements de RenovaXpert pour vos travaux de rénovation intérieure à Paris et proche couronne.",
    pathname: "/a-propos",
  });
}

export default function Propos() {
  return (
    <main className={styles.page}>
      <AboutHero />
      <CompanyStory />
      <OurValues />
      <CertificationsExperience />
    </main>
  );
}
