import type { Route } from "./+types/robots";
import { siteConfig } from "~/lib/site-config";

/**
 * Route ressource dynamique SSR pour /robots.txt
 * Pilotée de manière centralisée par siteConfig.indexingEnabled.
 * Tant que indexingEnabled est false : bloque le crawl (Disallow: /).
 * Dès que indexingEnabled est true : autorise l'indexation publique (Allow: /)
 * et déclare la référence canonique au sitemap XML.
 */
export function loader({}: Route.LoaderArgs) {
  let content = "";

  if (siteConfig.indexingEnabled) {
    content = [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: ${siteConfig.canonicalOrigin}/sitemap.xml`,
      "",
    ].join("\n");
  } else {
    content = ["User-agent: *", "Disallow: /", ""].join("\n");
  }

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
