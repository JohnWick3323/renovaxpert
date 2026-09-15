import { data, Link } from "react-router";
import type { Route } from "./+types/not-found";
import { buildMeta } from "~/lib/seo";
import styles from "./not-found.module.css";

export function meta({}: Route.MetaArgs) {
  return buildMeta({
    title: "Page non trouvée - RenovaXpert",
    description: "La page que vous recherchez n'existe pas ou a été déplacée.",
    pathname: "/404",
    noindex: true,
    omitCanonical: true,
  });
}

export function loader({}: Route.LoaderArgs) {
  return data({ status: 404 }, { status: 404 });
}

export default function NotFound() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <div className={styles.badge}>Erreur 404</div>
        <h1 className={styles.title}>Page non trouvée</h1>
        <p className={styles.desc}>
          La page que vous recherchez n'existe pas, a été déplacée ou son adresse a été modifiée.
        </p>
        <div className={styles.links}>
          <Link to="/" className="btn btn-primary">
            Retour à l'accueil
          </Link>
          <Link to="/services" className="btn btn-outline">
            Nos services
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Nous contacter
          </Link>
        </div>
      </div>
    </main>
  );
}
