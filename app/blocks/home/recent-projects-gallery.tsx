import { Link } from "react-router";
import { ArrowRight, ClipboardList, CalendarCheck, CheckCircle2 } from "lucide-react";
import styles from "./recent-projects-gallery.module.css";

const steps = [
  {
    tag: "Étape 1",
    icon: <ClipboardList size={28} />,
    title: "Votre Demande de Devis",
    desc: "Décrivez votre projet via notre formulaire en ligne en précisant vos besoins (peinture, sol, cloisons) et votre localisation.",
  },
  {
    tag: "Étape 2",
    icon: <CalendarCheck size={28} />,
    title: "Étude du Projet & Visite",
    desc: "Que vous nous contactiez par téléphone ou via formulaire, notre équipe vous répond sous 24 heures ouvrées pour convenir d'une visite sur place.",
  },
  {
    tag: "Étape 3",
    icon: <CheckCircle2 size={28} />,
    title: "Devis Clair & Réalisation",
    desc: "Nous vous remettons un devis détaillé sans engagement. Après validation, nos artisans réalisent vos travaux dans le respect des délais.",
  },
];

export function RecentProjectsGallery({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Notre Méthode en 3 Étapes</h2>
          <p>Un accompagnement clair et structuré, de l'étude de votre projet jusqu'aux finitions</p>
        </div>
        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.title} className={styles.card}>
              <div className={styles.body}>
                <span className={styles.tag}>{s.tag}</span>
                <div style={{ margin: "var(--space-2) 0", color: "var(--color-primary)" }}>
                  {s.icon}
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "var(--space-8)" }}>
          <Link to="/contact" className="btn btn-primary">
            Demander mon devis gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
