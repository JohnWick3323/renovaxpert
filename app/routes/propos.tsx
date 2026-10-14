import type { Route } from "./+types/propos";
import { AboutHero } from "~/blocks/propos/about-hero";
import { CompanyStory } from "~/blocks/propos/company-story";
import { OurValues } from "~/blocks/propos/our-values";
import { TeamStandards } from "~/blocks/propos/team-standards";
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
      <TeamStandards />
      <CertificationsExperience />

      {/* Guide E-E-A-T & FAQ Entreprise */}
      <section style={{ padding: "5rem 0", backgroundColor: "#ffffff", borderTop: "1px solid var(--color-border-light)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-padding)" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Transparence &amp; Questions Fréquentes sur RenovaXpert
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
              Tout ce que vous devez savoir sur notre fonctionnement artisanal, nos engagements et notre zone d'intervention.
            </p>
          </div>

          <div style={{ maxWidth: "850px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ backgroundColor: "#f8fafc", borderRadius: "10px", padding: "1.5rem 1.75rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Qui réalise concrètement les travaux sur mon chantier ?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Tous les travaux de peinture, pose de parquet, carrelage, sol vinyle et placo sont exécutés directement par notre propre équipe d'artisans expérimentés. Nous ne déléguons pas vos chantiers à des sous-traitants inconnus, ce qui vous assure un niveau de qualité constant et une responsabilité claire de bout en bout.
              </p>
            </div>

            <div style={{ backgroundColor: "#f8fafc", borderRadius: "10px", padding: "1.5rem 1.75rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Comment assurez-vous le respect des règles de copropriété à Paris ?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Nous prenons les devants dès le premier jour : affichage obligatoire de l'avis de travaux dans le hall d'immeuble, protection intégrale des ascenseurs, escaliers et moquettes de paliers avec bâches épaisses, et respect strict des horaires autorisés par le règlement de copropriété pour les interventions bruyantes.
              </p>
            </div>

            <div style={{ backgroundColor: "#f8fafc", borderRadius: "10px", padding: "1.5rem 1.75rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Quel est le coût d'une visite technique et d'un devis ?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                La visite technique sur place et l'établissement du devis détaillé sont 100% gratuits et sans aucun engagement financier de votre part. Notre équipe se déplace chez vous dans tout Paris et en proche couronne pour évaluer précisément vos surfaces et écouter vos souhaits d'aménagement.
              </p>
            </div>

            <div style={{ backgroundColor: "#f8fafc", borderRadius: "10px", padding: "1.5rem 1.75rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Quelles garanties offrez-vous sur les matériaux et finitions ?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Tous nos travaux sont réalisés conformément aux normes DTU applicables et couverts par nos garanties contractuelles. Nous utilisons des peintures certifiées Écolabel A+ sans émission de solvants, des sous-couches acoustiques certifiées 19 à 21 dB et des vitrificateurs haute résistance pour assurer la pérennité de votre investissement.
              </p>
            </div>

            <div style={{ backgroundColor: "#f8fafc", borderRadius: "10px", padding: "1.5rem 1.75rem", border: "1px solid #e2e8f0" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                Avec quelles marques et filières de matériaux travaillez-vous ?
              </h3>
              <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                Nous sélectionnons exclusivement des fabricants professionnels reconnus sur le marché français : peintures professionnelles Seigneurie et Tollens à très faible taux de COV, parquets en chêne certifiés PEFC/FSC pour une gestion durable des forêts, colles silanes sans solvant Bostik, et systèmes d'ossatures et plaques acoustiques Placostil® de Saint-Gobain.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
