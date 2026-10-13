import { Link } from "react-router";
import { ArrowRight, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import styles from "./recent-projects-gallery.module.css";

interface ProjectItem {
  id: string;
  tag: string;
  title: string;
  desc: string;
  imageBefore: string;
  altBefore: string;
  imageAfter: string;
  altAfter: string;
}

const projects: ProjectItem[] = [
  {
    id: "paris-16-haussmann",
    tag: "Paris 16e (Auteuil) • 78 m²",
    title: "Rénovation Complète d'un Appartement Haussmannien",
    desc: "Restauration d'un parquet en point de Hongrie d'époque, ponçage sans poussière, vitrification mate écologique, ratissage d'enduit et peintures veloutées A+ dépolluantes. Durée du chantier : 4 semaines.",
    imageBefore: "/images/company-story.webp",
    altBefore: "Salon haussmannien ancien à Paris avant travaux de rénovation et ponçage",
    imageAfter: "/images/services/parquet.webp",
    altAfter: "Parquet en chêne massif rénové et vitrifié avec finitions soignées à Paris",
  },
  {
    id: "boulogne-trapeze",
    tag: "Boulogne-Billancourt • 62 m²",
    title: "Pose de Parquet Contrecollé & Sous-Couche 21 dB",
    desc: "Diagnostic de planéité, ragréage fibré et interposition d'une sous-couche résiliente certifiée 19 à 21 dB conforme au règlement de copropriété boulonnais. Durée : 8 jours ouvrés.",
    imageBefore: "/images/why-choose-us.webp",
    altBefore: "Préparation du sol et dépose de l'ancien revêtement à Boulogne-Billancourt",
    imageAfter: "/images/zones/boulogne-billancourt.webp",
    altAfter: "Parquet contrecollé chêne posé dans un appartement rénové à Boulogne-Billancourt",
  },
  {
    id: "neuilly-saint-james",
    tag: "Neuilly-sur-Seine • 48 m²",
    title: "Agencement de Cloisons Phoniques & Carrelage",
    desc: "Création d'une suite parentale avec cloisons Placostil® à haute atténuation acoustique, pose de carrelage grand format et faïence murale assortie avec étanchéité certifiée. Durée : 2 semaines.",
    imageBefore: "/images/services/drywall.webp",
    altBefore: "Ossature métallique et pose de cloisons phoniques en placo à Neuilly-sur-Seine",
    imageAfter: "/images/services/carrelage.webp",
    altAfter: "Pose de carrelage rectifié et faïence élégante dans une salle de bain à Neuilly",
  },
  {
    id: "levallois-front-de-seine",
    tag: "Levallois-Perret • 54 m²",
    title: "Rénovation Express en Sol Vinyle LVT & Verrière",
    desc: "Modernisation d'un 2-pièces dense : remplacement d'un ancien sol par des lames vinyles rigides clipsables étanches et création d'une verrière d'atelier pour télétravail. Durée : 6 jours ouvrés.",
    imageBefore: "/images/services/peinture.webp",
    altBefore: "Préparation des fonds et rebouchage des fissures murales à Levallois-Perret",
    imageAfter: "/images/services/sol-vinyle.webp",
    altAfter: "Sol vinyle rigide aspect chêne naturel posé dans un séjour à Levallois-Perret",
  },
  {
    id: "vincennes-centre",
    tag: "Vincennes (Carré Magique) • 66 m²",
    title: "Ponçage de Parquet Massif & Peinture Décorative",
    desc: "Remplacement des lames disjointes en chêne, ponçage cyclonique 3 passes, vitrification haute résistance et mise en peinture satinée des boiseries et radiateurs en fonte. Durée : 9 jours ouvrés.",
    imageBefore: "/images/services/nettoyage.webp",
    altBefore: "Chantier d'appartement en cours de décapage et nettoyage à Vincennes",
    imageAfter: "/images/zones/vincennes.webp",
    altAfter: "Intérieur chaleureux avec parquet restauré et peintures velours à Vincennes",
  },
  {
    id: "montreuil-loft",
    tag: "Montreuil (Bas-Montreuil) • 82 m²",
    title: "Réhabilitation d'un Ancien Atelier en Loft",
    desc: "Transformation d'un espace artisanal : isolation phonique des cloisons mitoyennes, pose d'un sol vinyle haute résistance et peintures blanches mates sans COV pour valoriser les verrières. Durée : 3 semaines.",
    imageBefore: "/images/zones/levallois-perret.webp",
    altBefore: "Grand volume brut avec murs à enduire avant aménagement de loft à Montreuil",
    imageAfter: "/images/zones/neuilly-sur-seine.webp",
    altAfter: "Loft lumineux rénové avec finitions soignées et verrière métallique à Montreuil",
  },
];

export function RecentProjectsGallery({ className }: { className?: string }) {
  return (
    <section className={`${styles.section} ${className ?? ""}`}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2>Exemples de Réalisations à Paris &amp; Proche Couronne</h2>
          <p>
            Découvrez nos chantiers récents : rénovation complète, restauration de parquets anciens, peintures veloutées et
            aménagements sur mesure réalisés par notre propre équipe d'artisans.
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((p) => (
            <div key={p.id} className={styles.card}>
              <div className={styles.images}>
                <div className={styles.imgWrap}>
                  <img
                    src={p.imageBefore}
                    alt={p.altBefore}
                    loading="lazy"
                    width={300}
                    height={210}
                  />
                  <span className={styles.labelBefore}>Avant</span>
                </div>
                <div className={styles.separator} />
                <div className={styles.imgWrap}>
                  <img
                    src={p.imageAfter}
                    alt={p.altAfter}
                    loading="lazy"
                    width={300}
                    height={210}
                  />
                  <span className={styles.labelAfter}>Après</span>
                </div>
              </div>
              <div className={styles.body}>
                <span className={styles.tag}>{p.tag}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "var(--space-10)" }}>
          <Link to="/contact" className="btn btn-primary">
            Demander mon devis gratuit <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
