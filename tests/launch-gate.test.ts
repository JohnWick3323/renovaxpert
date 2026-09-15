import test from "node:test";
import assert from "node:assert/strict";
import { siteConfig } from "../app/lib/site-config";
import { buildCanonicalUrl, buildMeta } from "../app/lib/seo";
import { loader as sitemapLoader } from "../app/routes/sitemap";
import { loader as robotsLoader } from "../app/routes/robots";

test("Canonical Apex Domain - siteConfig et buildCanonicalUrl n'utilisent jamais 'www'", () => {
  assert.equal(siteConfig.canonicalOrigin, "https://renovaxpert.fr");
  assert.equal(siteConfig.entityId, "https://renovaxpert.fr/#organization");
  assert.equal(siteConfig.websiteId, "https://renovaxpert.fr/#website");

  const homeCanonical = buildCanonicalUrl("/");
  assert.equal(homeCanonical, "https://renovaxpert.fr/");

  const serviceCanonical = buildCanonicalUrl("/services/peinture-interieure-paris");
  assert.equal(serviceCanonical, "https://renovaxpert.fr/services/peinture-interieure-paris");
  assert.ok(!serviceCanonical.includes("www."));
});

test("Sitemap XML - Contient exactement les 15 URLs canoniques publiques sans www et exclut les pages privées", async () => {
  const response = await sitemapLoader({} as any);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Content-Type"), "application/xml; charset=utf-8");

  const xml = await response.text();

  const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  assert.equal(matches.length, 15, `Le sitemap doit contenir exactement 15 URLs canoniques (reçu: ${matches.length})`);

  // Doit contenir les 15 URLs canoniques avec le domaine apex
  const expectedUrls = [
    "https://renovaxpert.fr/",
    "https://renovaxpert.fr/services",
    "https://renovaxpert.fr/services/peinture-interieure-paris",
    "https://renovaxpert.fr/services/pose-parquet-paris",
    "https://renovaxpert.fr/services/pose-carrelage-paris",
    "https://renovaxpert.fr/services/pose-sol-vinyle-paris",
    "https://renovaxpert.fr/services/pose-plaques-de-platre-paris",
    "https://renovaxpert.fr/services/nettoyage-apres-travaux-paris",
    "https://renovaxpert.fr/zones-intervention",
    "https://renovaxpert.fr/renovation-interieure/boulogne-billancourt",
    "https://renovaxpert.fr/renovation-interieure/neuilly-sur-seine",
    "https://renovaxpert.fr/renovation-interieure/levallois-perret",
    "https://renovaxpert.fr/renovation-interieure/vincennes",
    "https://renovaxpert.fr/a-propos",
    "https://renovaxpert.fr/contact",
  ];

  for (const url of expectedUrls) {
    assert.ok(xml.includes(`<loc>${url}</loc>`), `Le sitemap doit inclure ${url}`);
  }

  // Ne doit PAS contenir les pages de conversion, redirections ou d'erreur
  assert.ok(!xml.includes("/merci"), "Le sitemap ne doit pas inclure /merci");
  assert.ok(!xml.includes("/politique-de-confidentialite"), "Le sitemap ne doit pas inclure la politique tant qu'elle est noindex");
  assert.ok(!xml.includes("/about"), "Le sitemap ne doit pas inclure la redirection /about");
  assert.ok(!xml.includes("www.renovaxpert.fr"), "Le sitemap ne doit contenir aucun www");
});

test("Robots.txt Dynamique - Autorise le crawl et déclare le sitemap quand indexingEnabled est true", async () => {
  assert.equal(siteConfig.indexingEnabled, true);
  const response = await robotsLoader({} as any);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("Content-Type"), "text/plain; charset=utf-8");

  const text = await response.text();
  assert.ok(text.includes("User-agent: *"));
  assert.ok(text.includes("Allow: /"));
  assert.ok(text.includes("Sitemap: https://renovaxpert.fr/sitemap.xml"));
  assert.ok(!text.includes("Disallow: /"));
});

test("Page /merci - Omet le canonique et déclare noindex, nofollow", () => {
  const meta = buildMeta({
    title: "Merci pour votre demande - RenovaXpert",
    description: "Confirmation de votre demande de devis",
    pathname: "/merci",
    noindex: true,
    omitCanonical: true,
  });

  const canonical = meta.find((m) => m.tagName === "link" && m.rel === "canonical");
  const ogUrl = meta.find((m) => m.property === "og:url");
  const robots = meta.find((m) => m.name === "robots");

  assert.equal(canonical, undefined, "/merci ne doit pas déclarer de balise canonical");
  assert.equal(ogUrl, undefined, "/merci ne doit pas déclarer og:url");
  assert.ok(robots);
  assert.equal(robots.content, "noindex, nofollow");
});

test("Page Politique de Confidentialité - Déclare noindex tant que l'identité légale n'est pas finalisée", () => {
  const meta = buildMeta({
    title: "Politique de Confidentialité - RenovaXpert",
    description: "Protection des données",
    pathname: "/politique-de-confidentialite",
    noindex: true,
  });

  const robots = meta.find((m) => m.name === "robots");
  assert.ok(robots);
  assert.equal(robots.content, "noindex, nofollow");
});

test("Configuration GTM - Identifiant de conteneur conforme", () => {
  const gtmId = "GTM-PTCCG9RM";
  assert.match(gtmId, /^GTM-[A-Z0-9]+$/);
});
