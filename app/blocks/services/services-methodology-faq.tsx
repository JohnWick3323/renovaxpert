import { Link } from "react-router";
import { ShieldCheck, CheckCircle2, Clock, FileText, ArrowRight, Layers, Award, Sparkles } from "lucide-react";
import { siteConfig } from "~/lib/site-config";
import { GhlQuoteForm } from "~/components/ghl-quote-form";

const standards = [
  {
    title: "DTU 51.1 & 51.2 — Parqueterie",
    desc: "Pose flottante, collée ou clouée avec sous-couches résilientes assurant 19 à 21 dB d'atténuation acoustique certifiée CSTB.",
  },
  {
    title: "DTU 59.1 — Peintures & Enduits",
    desc: "Préparation des fonds soignée (décapage, calicot anti-fissure, ratissage deux passes) et peintures Écolabel A+ sans COV.",
  },
  {
    title: "DTU 25.41 — Plâtrerie & Cloisons",
    desc: "Montage sur ossatures métalliques avec bandes résilientes sous rails et doublages phoniques Placostil® haute performance.",
  },
  {
    title: "Règlements de Copropriété Parisiens",
    desc: "Protection systématique des ascenseurs et paliers, affichage préalable et respect scrupuleux des horaires autorisés.",
  },
];

const faqs = [
  {
    q: "Pourquoi faire appel à un artisan unique pour plusieurs corps d'état ?",
    a: "Faire appel à RenovaXpert vous permet d'avoir un interlocuteur unique et une équipe d'artisans salariés (peintres, parqueteurs, carreleurs, plaquistes). Les étapes s'enchaînent de manière fluide sans interruption de chantier, ce qui réduit la durée totale des travaux de 30% par rapport à des intervenants dispersés.",
  },
  {
    q: "Comment garantissez-vous l'absence de poussière lors des travaux ?",
    a: "Pour le ponçage de parquets et des enduits de plâtre, nous employons des ponceuses professionnelles équipées d'aspiration cyclonique à filtration absolue. Nos équipes calfeutrent également les pièces non concernées par des bâches étanches pour préserver le reste de votre logement.",
  },
  {
    q: "Quels sont les délais d'obtention d'un devis et de démarrage de chantier ?",
    a: "Dès réception de votre demande par téléphone ou formulaire, nous vous répondons sous 24 heures ouvrées pour convenir d'une visite technique gratuite sur place. Le devis détaillé vous est remis rapidement après métré. Les chantiers démarrent généralement dans les 2 à 4 semaines suivant votre validation.",
  },
  {
    q: "Intervenez-vous dans toute l'Île-de-France ?",
    a: "Notre secteur d'intervention couvre l'ensemble des 20 arrondissements de Paris ainsi que les communes de la proche couronne des Hauts-de-Seine (92), du Val-de-Marne (94) et de Seine-Saint-Denis (93).",
  },
  {
    q: "Vos travaux de second œuvre sont-ils couverts par une garantie ?",
    a: "Absolument. Tous les travaux réalisés par notre équipe sont couverts par notre engagement contractuel et garantis selon les modalités fixées dans votre devis détaillé.",
  },
];

export function ServicesMethodologyFaq() {
  return (
    <>
      {/* Normes et Méthodologie */}
      <section style={{ padding: "5rem 0", backgroundColor: "#ffffff", borderTop: "1px solid var(--color-border-light)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-padding)" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--color-secondary)",
              color: "var(--color-primary)",
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              padding: "0.3rem 0.9rem",
              borderRadius: "999px",
              marginBottom: "1rem"
            }}>
              <Award size={14} aria-hidden="true" />
              Exigence &amp; Conformité
            </span>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Nos Normes Techniques &amp; Règles de l'Art
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "750px", margin: "0 auto" }}>
              Chaque prestation est exécutée dans le respect strict des Documents Techniques Unifiés (DTU) et des réglementations locales franciliennes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {standards.map((s) => (
              <div key={s.title} style={{
                backgroundColor: "#f8fafc",
                borderRadius: "12px",
                padding: "1.75rem",
                border: "1px solid #e2e8f0"
              }}>
                <div style={{ color: "var(--color-primary)", marginBottom: "0.75rem" }}>
                  <ShieldCheck size={28} aria-hidden="true" />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Globale */}
      <section style={{ padding: "5rem 0", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-padding)" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
              Questions Fréquentes sur Nos Services de Rénovation
            </h2>
            <p style={{ fontSize: "1.1rem", color: "var(--color-text-muted)", maxWidth: "700px", margin: "0 auto" }}>
              Retrouvez toutes les réponses essentielles pour préparer vos travaux à Paris et en proche couronne.
            </p>
          </div>

          <div style={{ maxWidth: "850px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((f) => (
              <div key={f.q} style={{
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                padding: "1.5rem 1.75rem",
                border: "1px solid #e2e8f0",
                boxShadow: "var(--shadow-sm)"
              }}>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-text)" }}>
                  {f.q}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--color-text-muted)", lineHeight: "1.6", margin: 0 }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link to="/zones-intervention" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "var(--color-primary)",
              fontWeight: 600,
              textDecoration: "underline"
            }}>
              <span>Consulter l'ensemble de nos 24 communes d'intervention</span>
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Formulaire Devis GHL */}
      <section style={{ padding: "5rem 0", backgroundColor: "#ffffff", borderTop: "1px solid #e2e8f0" }} id="devis-services">
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 var(--container-padding)" }}>
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "2rem", marginBottom: "0.75rem", color: "var(--color-text)" }}>
                Demandez Votre Estimation Gratuite
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "1rem" }}>
                Remplissez notre formulaire officiel en quelques clics. Notre équipe analyse votre projet et vous répond sous 24 heures ouvrées pour convenir d'une visite technique sur place.
              </p>
            </div>
            <GhlQuoteForm variant="card" id="services-hub-quote-form" />
          </div>
        </div>
      </section>
    </>
  );
}
