import type { Route } from "./+types/sitemap";
import { siteConfig } from "~/lib/site-config";
import { locationsData } from "~/data/locations";
import { servicesData } from "~/data/services";

/**
 * Route ressource SSR pour /sitemap.xml
 * Génère un flux XML valide contenant l'ensemble des 123 URLs canoniques indexables du site :
 * - 11 pages statiques de base (accueil, services, services Paris, zones hub, propos, contact)
 * - 16 hubs villes municipaux (/renovation-interieure/{ville})
 * - 96 pages matrice services × villes (/renovation-interieure/{ville}/{service})
 * Exclut strictement /merci, /politique-de-confidentialite, /about, et les routes d'erreur.
 */
export function loader({}: Route.LoaderArgs) {
  const origin = siteConfig.canonicalOrigin.replace(/\/+$/, "");

  // 1. Pages statiques et piliers généraux
  const basePaths = [
    "",
    "/services",
    "/services/peinture-interieure-paris",
    "/services/pose-parquet-paris",
    "/services/pose-carrelage-paris",
    "/services/pose-sol-vinyle-paris",
    "/services/pose-plaques-de-platre-paris",
    "/services/nettoyage-apres-travaux-paris",
    "/zones-intervention",
    "/a-propos",
    "/contact",
  ];

  // 2. Hubs villes municipaux (16 villes)
  const cityHubPaths = locationsData.map((loc) => `/renovation-interieure/${loc.slug}`);

  // 3. Matrice Services × Villes (16 villes × 6 prestations = 96 pages)
  const matrixPaths: string[] = [];
  for (const loc of locationsData) {
    for (const srv of servicesData) {
      matrixPaths.push(`/renovation-interieure/${loc.slug}/${srv.slug}`);
    }
  }

  // Fusion ordonnée de tous les chemins canoniques
  const canonicalPaths = [...basePaths, ...cityHubPaths, ...matrixPaths];

  const urlElements = canonicalPaths
    .map((path) => {
      const loc = path === "" ? `${origin}/` : `${origin}${path}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
