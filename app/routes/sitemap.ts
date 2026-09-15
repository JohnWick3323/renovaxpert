import type { Route } from "./+types/sitemap";
import { siteConfig } from "~/lib/site-config";

/**
 * Route ressource SSR pour /sitemap.xml
 * Génère un flux XML valide contenant exactement les 15 URLs canoniques indexables du site.
 * Exclut strictement /merci, /politique-de-confidentialite, /about, et les routes d'erreur.
 */
export function loader({}: Route.LoaderArgs) {
  const origin = siteConfig.canonicalOrigin.replace(/\/+$/, "");

  // Liste ordonnée des 15 chemins canoniques publics validés
  const canonicalPaths = [
    "",
    "/services",
    "/services/peinture-interieure-paris",
    "/services/pose-parquet-paris",
    "/services/pose-carrelage-paris",
    "/services/pose-sol-vinyle-paris",
    "/services/pose-plaques-de-platre-paris",
    "/services/nettoyage-apres-travaux-paris",
    "/zones-intervention",
    "/renovation-interieure/boulogne-billancourt",
    "/renovation-interieure/neuilly-sur-seine",
    "/renovation-interieure/levallois-perret",
    "/renovation-interieure/vincennes",
    "/a-propos",
    "/contact",
  ];

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
