/**
 * Tests automatisés pour la génération SEO et l'omission du canonique sur la page 404.
 */

import test from "node:test";
import assert from "node:assert/strict";
import { buildMeta } from "../app/lib/seo";

test("SEO Helper - Page standard génère un canonique et un og:url valides", () => {
  const meta = buildMeta({
    title: "Nos Services",
    description: "Description des services",
    pathname: "/services",
  });

  const canonical = meta.find((m) => m.tagName === "link" && m.rel === "canonical");
  const ogUrl = meta.find((m) => m.property === "og:url");
  const robots = meta.find((m) => m.name === "robots");

  assert.ok(canonical);
  assert.equal(canonical.href, "https://renovaxpert.fr/services");
  assert.ok(ogUrl);
  assert.equal(ogUrl.content, "https://renovaxpert.fr/services");
  assert.ok(robots);
  assert.equal(robots.content, "noindex, nofollow");
});

test("SEO Helper - Page 404 omet le canonique et og:url mais conserve noindex, nofollow", () => {
  const meta = buildMeta({
    title: "Page non trouvée - RenovaXpert",
    description: "La page demandée n'existe pas.",
    pathname: "/404",
    noindex: true,
    omitCanonical: true,
  });

  const canonical = meta.find((m) => m.tagName === "link" && m.rel === "canonical");
  const ogUrl = meta.find((m) => m.property === "og:url");
  const robots = meta.find((m) => m.name === "robots");

  assert.equal(canonical, undefined, "La page 404 ne doit pas avoir de lien canonique");
  assert.equal(ogUrl, undefined, "La page 404 ne doit pas avoir d'og:url");
  assert.ok(robots);
  assert.equal(robots.content, "noindex, nofollow");
});
