/**
 * Helper SEO réutilisable pour la génération des balises meta,
 * liens canoniques, balises Open Graph, Twitter cards et directives robots.
 */

import { siteConfig } from "./site-config";

export interface SeoOptions {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  noindex?: boolean;
  omitCanonical?: boolean;
}

/**
 * Construit une URL canonique absolue propre en évitant les doubles slashes.
 * Seule la page d'accueil conserve un slash final.
 */
export function buildCanonicalUrl(pathname: string): string {
  const origin = siteConfig.canonicalOrigin.replace(/\/+$/, "");
  const cleanPath = pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  return cleanPath ? `${origin}/${cleanPath}` : `${origin}/`;
}

/**
 * Génère le tableau de descripteurs meta conforme à l'API de React Router 7.
 */
export function buildMeta({
  title,
  description,
  pathname,
  image,
  noindex,
  omitCanonical,
}: SeoOptions) {
  const canonicalUrl = buildCanonicalUrl(pathname);
  const shouldIndex = siteConfig.indexingEnabled && !noindex;
  const robotsContent = shouldIndex ? "index, follow" : "noindex, nofollow";

  const descriptors: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:locale", content: "fr_FR" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "robots", content: robotsContent },
  ];

  // Les pages d'erreur 404 ne doivent pas déclarer d'URL canonique ni d'og:url
  if (!omitCanonical) {
    descriptors.splice(2, 0, { tagName: "link", rel: "canonical", href: canonicalUrl });
    descriptors.splice(5, 0, { property: "og:url", content: canonicalUrl });
  }

  if (image) {
    const origin = siteConfig.canonicalOrigin.replace(/\/+$/, "");
    const imageUrl = image.startsWith("http")
      ? image
      : `${origin}/${image.replace(/^\/+/, "")}`;
    descriptors.push(
      { property: "og:image", content: imageUrl },
      { name: "twitter:image", content: imageUrl }
    );
  }

  return descriptors;
}
