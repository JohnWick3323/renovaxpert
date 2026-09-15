import type { Route } from "./+types/contact";
import { ContactHero } from "~/blocks/contact/contact-hero";
import { QuoteRequestForm } from "~/blocks/contact/quote-request-form";
import { ContactInformation } from "~/blocks/contact/contact-information";
import { LocationMap } from "~/blocks/contact/location-map";
import { buildMeta } from "~/lib/seo";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Contact & Devis Gratuit - RenovaXpert Rénovation Paris",
    description:
      "Demandez votre devis gratuit de rénovation intérieure à Paris et proche couronne. Notre équipe répond à votre demande sous 24 heures ouvrées.",
    pathname: "/contact",
  });
}

export default function Contact() {
  return (
    <main className={styles.page}>
      <ContactHero />
      <QuoteRequestForm />
      <ContactInformation />
      <LocationMap />
    </main>
  );
}
