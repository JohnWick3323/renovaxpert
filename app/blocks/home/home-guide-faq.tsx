import { Link } from "react-router";
import { CheckCircle2, MapPin, HelpCircle, ArrowRight, Layers, Sparkles } from "lucide-react";
import styles from "./home-guide-faq.module.css";

export function HomeGuideFaq() {
  return (
    <section className={styles.section} aria-labelledby="home-guide-title">
      <div className={styles.container}>
        {/* Partie 1: Méthodologie & Coordination */}
        <div className={styles.guideBlock}>
          <div className={styles.badge}>
            <Layers size={14} aria-hidden="true" />
            <span>Savoir-faire artisanal</span>
          </div>
          <h2 id="home-guide-title" className={styles.sectionTitle}>
            Rénovation d'appartement à Paris : méthode, ordonnancement et corps d'état
          </h2>
          <p className={styles.leadText}>
            La réussite d'un projet de rénovation intérieure à Paris repose sur un diagnostic rigoureux du bâti existant
            (immeubles haussmanniens en pierre de taille, logements anciens avec parquets d'époque ou résidences des années 1970).
            Chaque chantier débute par une préparation méthodique des supports : reprise des fissures, dépose soignée, enduits
            de lissage et ragréage des sols.
          </p>

          <p className={styles.text}>
            Notre propre équipe coordonne les différents corps d'état dans un ordonnancement logique pour garantir la qualité
            des finitions et le respect des délais :
          </p>

          <ul className={styles.serviceList}>
            <li>
              <strong>Agencement et cloisons :</strong> redistribution des pièces et isolation avec la{" "}
              <Link to="/services/pose-plaques-de-platre-paris" className={styles.textLink}>
                pose de plaques de plâtre et cloisons
              </Link>.
            </li>
            <li>
              <strong>Revêtements muraux :</strong> finitions soignées avec nos travaux de{" "}
              <Link to="/services/peinture-interieure-paris" className={styles.textLink}>
                peinture intérieure
              </Link>{" "}
              (peintures professionnelles à faible émission de COV).
            </li>
            <li>
              <strong>Revêtements de sol adaptés :</strong> restauration ou{" "}
              <Link to="/services/pose-parquet-paris" className={styles.textLink}>
                pose de parquet massif et contrecollé
              </Link>, pose de{" "}
              <Link to="/services/pose-carrelage-paris" className={styles.textLink}>
                carrelage pour cuisines et salles d'eau
              </Link>, ou installation de{" "}
              <Link to="/services/pose-sol-vinyle-paris" className={styles.textLink}>
                sols vinyles et PVC modernes
              </Link>.
            </li>
            <li>
              <strong>Livraison clé en main :</strong> remise en état complète grâce à notre prestation de{" "}
              <Link to="/services/nettoyage-apres-travaux-paris" className={styles.textLink}>
                nettoyage après travaux
              </Link>.
            </li>
          </ul>
        </div>

        {/* Partie 2: Secteurs d'Intervention */}
        <div className={styles.zonesBlock}>
          <div className={styles.badge}>
            <MapPin size={14} aria-hidden="true" />
            <span>Périmètre géographique</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Intervention dans tout Paris et en proche couronne
          </h2>
          <p className={styles.text}>
            Nos artisans qualifiés interviennent sur l'ensemble des 20 arrondissements de Paris ainsi que dans les communes de
            la proche couronne. Consultez notre guide complet des{" "}
            <Link to="/zones-intervention" className={styles.textLinkBold}>
              zones d'intervention prioritaires
            </Link>{" "}
            et découvrez nos prestations adaptées aux particularités architecturales locales :
          </p>

          <div className={styles.cityGrid}>
            <Link to="/renovation-interieure/boulogne-billancourt" className={styles.cityCard}>
              <span className={styles.cityName}>Boulogne-Billancourt</span>
              <span className={styles.cityDesc}>Art Déco, dalles béton et résidences familiales (92100)</span>
              <span className={styles.cityLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>

            <Link to="/renovation-interieure/neuilly-sur-seine" className={styles.cityCard}>
              <span className={styles.cityName}>Neuilly-sur-Seine</span>
              <span className={styles.cityDesc}>Moulures, parquets point de Hongrie et standing (92200)</span>
              <span className={styles.cityLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>

            <Link to="/renovation-interieure/levallois-perret" className={styles.cityCard}>
              <span className={styles.cityName}>Levallois-Perret</span>
              <span className={styles.cityDesc}>Optimisation d'espace et copropriétés urbaines denses (92300)</span>
              <span className={styles.cityLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>

            <Link to="/renovation-interieure/vincennes" className={styles.cityCard}>
              <span className={styles.cityName}>Vincennes</span>
              <span className={styles.cityDesc}>Parquets en chêne, plafonds anciens et abords du Bois (94300)</span>
              <span className={styles.cityLink}>
                En savoir plus <ArrowRight size={14} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>

        {/* Partie 3: FAQ Compacte Propriétaires */}
        <div className={styles.faqBlock}>
          <div className={styles.badge}>
            <HelpCircle size={14} aria-hidden="true" />
            <span>Foire aux questions</span>
          </div>
          <h2 className={styles.sectionTitle}>Questions fréquentes sur vos travaux</h2>

          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Quels types de travaux de rénovation intérieure réalisez-vous ?
              </h3>
              <p className={styles.faqAnswer}>
                Nous prenons en charge les chantiers de second œuvre et de finitions intérieures : réfection des peintures,
                pose et ponçage de parquets, carrelage et faïence, pose de sols vinyles LVT, cloisons en plaques de plâtre
                et nettoyage minutieux de fin de chantier.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Comment obtenir un devis gratuit et précis pour mon projet ?
              </h3>
              <p className={styles.faqAnswer}>
                Que vous nous contactiez par téléphone ou via le formulaire, notre équipe répond à votre demande sous 24 heures ouvrées. Nous convenons d'une visite technique sur place pour analyser les supports et relever les métrés, puis votre devis détaillé est préparé selon les informations et les mesures recueillies.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Intervenez-vous dans toute la proche couronne ou uniquement à Paris ?
              </h3>
              <p className={styles.faqAnswer}>
                Notre équipe se déplace dans tous les arrondissements parisiens ainsi que dans les communes limitrophes des
                Hauts-de-Seine, de la Seine-Saint-Denis et du Val-de-Marne, sans surcoût de déplacement injustifié.
              </p>
            </div>

            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>
                Est-il possible de regrouper plusieurs corps d'état sur un même chantier ?
              </h3>
              <p className={styles.faqAnswer}>
                Absolument. En faisant appel à RenovaXpert, vous bénéficiez d'un interlocuteur unique pour coordonner l'ensemble
                des prestations (peintre, carreleur, parqueteur, plaquiste), ce qui évite les temps morts et garantit une finition
                cohérente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeGuideFaq;
