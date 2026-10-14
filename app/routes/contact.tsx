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

      {/* Guide méthodologique du devis */}
      <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc", borderTop: "1px solid var(--color-border-light)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-padding)" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Comment Se Déroule l'Établissement de Votre Devis ?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", maxWidth: "720px", margin: "0 auto" }}>
              Pour vous garantir une estimation juste, transparente et sans surprise, nous appliquons une démarche en 4 étapes claires.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "0.5rem" }}>01</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Prise de Contact Rapide
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Vous nous joignez par téléphone ou via le formulaire en ligne. Notre équipe étudie vos besoins et vous répond sous 24 heures ouvrées pour fixer un rendez-vous.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "0.5rem" }}>02</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Visite Technique sur Place
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Nos artisans se déplacent gratuitement chez vous à Paris ou en proche couronne : métré précis au télémètre laser, analyse des sols et des murs, et écoute de vos souhaits.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "0.5rem" }}>03</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Chiffrage Détaillé &amp; Transparent
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Vous recevez un devis détaillé, poste par poste (fournitures, préparation, main-d'œuvre, évacuation des gravats), clair et sans coûts cachés.
              </p>
            </div>

            <div style={{ backgroundColor: "#ffffff", borderRadius: "12px", padding: "1.75rem", border: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--color-primary)", marginBottom: "0.5rem" }}>04</div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Validation &amp; Démarrage Planifié
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Après accord sur le devis, un planning précis est validé ensemble. Nos artisans salariés interviennent en respectant le calendrier fixé et les règles de copropriété.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "850px", margin: "3.5rem auto 0", backgroundColor: "#ffffff", borderRadius: "12px", padding: "2rem", border: "1px solid #e2e8f0" }}>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--color-text)", textAlign: "center" }}>
              Questions Fréquentes sur la Demande de Devis
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <strong style={{ display: "block", color: "var(--color-text)", marginBottom: "0.25rem" }}>
                  Le devis engage-t-il financièrement ?
                </strong>
                <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Non, la visite technique et la remise du devis sont entièrement gratuites et sans engagement. Vous êtes libre de valider ou non notre proposition après examen de notre chiffrage.
                </p>
              </div>
              <div>
                <strong style={{ display: "block", color: "var(--color-text)", marginBottom: "0.25rem" }}>
                  Quel délai entre la signature et le début du chantier ?
                </strong>
                <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  En fonction de l'envergure des travaux et des approvisionnements de matériaux choisis, nous pouvons planifier le démarrage de votre chantier sous 2 à 4 semaines en moyenne.
                </p>
              </div>
              <div>
                <strong style={{ display: "block", color: "var(--color-text)", marginBottom: "0.25rem" }}>
                  Comment organisez-vous les chantiers en étage sans ascenseur ?
                </strong>
                <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>
                  Nos équipes sont formées à la manutention spécifique en milieu parisien dense : protection des cages d'escalier anciennes, monte-matériaux extérieur si la configuration le permet, et rotation propre des déchets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationMap />
    </main>
  );
}
