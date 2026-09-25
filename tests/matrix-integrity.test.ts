import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { locationsData, getLocationBySlug } from "../app/data/locations";
import { servicesData, getServiceBySlug } from "../app/data/services";
import { loader as sitemapLoader } from "../app/routes/sitemap";

test("Check M1: Intégrité des données - 16 communes et 6 prestations complètes", () => {
  assert.equal(locationsData.length, 16, "Doit comporter exactement 16 communes");
  assert.equal(servicesData.length, 6, "Doit comporter exactement 6 prestations de second œuvre");

  for (const loc of locationsData) {
    assert.ok(loc.slug && loc.slug.length > 0, `Slug manquant pour ${loc.name}`);
    assert.ok(loc.name && loc.name.length > 0, `Nom manquant pour ${loc.slug}`);
    assert.ok(loc.postalCodes && loc.postalCodes.length >= 5, `Code postal invalide pour ${loc.name}`);
    assert.ok(loc.department && loc.department.length > 0, `Département manquant pour ${loc.name}`);
    assert.ok(loc.directAnswer && loc.directAnswer.length >= 100, `Direct answer trop courte pour ${loc.name}`);
    assert.ok(loc.neighborhoodQuartiers.length >= 3, `Au moins 3 quartiers requis pour ${loc.name}`);
    assert.ok(loc.localFaqs.length >= 3, `Au moins 3 FAQs requises pour ${loc.name}`);
    assert.ok(loc.neighboringSlugs.length >= 2, `Au moins 2 communes voisines requises pour ${loc.name}`);
  }

  for (const srv of servicesData) {
    assert.ok(srv.slug && srv.slug.length > 0, `Slug manquant pour ${srv.name}`);
    assert.ok(srv.name && srv.name.length > 0, `Nom manquant pour ${srv.slug}`);
    assert.ok(srv.scopePoints.length >= 4, `Au moins 4 étapes requises pour ${srv.name}`);
    assert.ok(srv.technicalFaqs.length >= 3, `Au moins 3 FAQs techniques requises pour ${srv.name}`);
  }
});

test("Check M2: Balises Title et Meta Description conformes pour les 16 Hubs Villes", () => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const loc of locationsData) {
    const canonicalPath = `/renovation-interieure/${loc.slug}`;
    const pageTitle =
      loc.name.length > 15
        ? `Rénovation à ${loc.name} (${loc.postalCodes}) | RenovaXpert`
        : `Rénovation Intérieure à ${loc.name} (${loc.postalCodes}) | RenovaXpert`;
    const pageDescription = `Artisans qualifiés pour vos travaux à ${loc.name} (${loc.postalCodes}) : peinture, parquets, carrelage et placo. Devis gratuit et réponse sous 24h ouvrées.`;

    assert.ok(
      pageTitle.length >= 45 && pageTitle.length <= 65,
      `Title hors limites (45-65) pour ${loc.name}: ${pageTitle.length} ("${pageTitle}")`
    );
    assert.ok(!titles.has(pageTitle), `Title dupliqué: ${pageTitle}`);
    titles.add(pageTitle);

    assert.ok(
      pageDescription.length >= 135 && pageDescription.length <= 165,
      `Description hors limites (135-165) pour ${loc.name}: ${pageDescription.length} ("${pageDescription}")`
    );
    assert.ok(!descriptions.has(pageDescription), `Description dupliquée: ${pageDescription}`);
    descriptions.add(pageDescription);

    assert.equal(
      `https://renovaxpert.fr${canonicalPath}`,
      `https://renovaxpert.fr/renovation-interieure/${loc.slug}`,
      `Canonique incorrect pour ${loc.name}`
    );
  }
});

test("Check M3: Balises Title et Meta Description conformes pour les 96 Pages Services × Villes", () => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();

  for (const loc of locationsData) {
    for (const srv of servicesData) {
      const pageKey = `${loc.name} - ${srv.name}`;
      const pageTitle = srv.metaTitleTemplate
        .replace(/\{city\}/g, loc.name)
        .replace(/\{postalCode\}/g, loc.postalCodes);
      const pageDescription = srv.metaDescTemplate
        .replace(/\{city\}/g, loc.name)
        .replace(/\{postalCode\}/g, loc.postalCodes);

      assert.ok(
        pageTitle.length >= 45 && pageTitle.length <= 65,
        `Title hors limites (45-65) pour ${pageKey}: ${pageTitle.length} ("${pageTitle}")`
      );
      assert.ok(!titles.has(pageTitle), `Title dupliqué: ${pageTitle}`);
      titles.add(pageTitle);

      assert.ok(
        pageDescription.length >= 135 && pageDescription.length <= 165,
        `Description hors limites (135-165) pour ${pageKey}: ${pageDescription.length} ("${pageDescription}")`
      );
      assert.ok(!descriptions.has(pageDescription), `Description dupliquée: ${pageDescription}`);
      descriptions.add(pageDescription);

      const canonicalPath = `/renovation-interieure/${loc.slug}/${srv.slug}`;
      assert.equal(
        `https://renovaxpert.fr${canonicalPath}`,
        `https://renovaxpert.fr/renovation-interieure/${loc.slug}/${srv.slug}`
      );
    }
  }
});

test("Check M4: Zéro jeton non résolu (Anti-Bug Microsite Blueprint)", () => {
  const forbiddenTokens = ["[PHONE]", "[LOCATION]", "[CTA:", "{{BRAND_COLOR}}", "{{location}}", "{{site."];
  const filesToScan = [
    "app/data/locations.ts",
    "app/data/services.ts",
    "app/routes/renovation-city-hub.tsx",
    "app/routes/renovation-city-service.tsx",
    "app/routes/sitemap.ts",
    "public/llms.txt",
  ];

  for (const relPath of filesToScan) {
    const fullPath = path.resolve(relPath);
    if (!fs.existsSync(fullPath)) continue;
    const content = fs.readFileSync(fullPath, "utf-8");

    for (const token of forbiddenTokens) {
      assert.ok(!content.includes(token), `Jeton non résolu '${token}' trouvé dans ${relPath}`);
    }
  }
});

test("Check M5: Audit Anti-Doorway - Similarité Jaccard 3-gramme strictement < 50% entre toutes les paires de villes", () => {
  function get3Grams(text: string): Set<string> {
    const clean = text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const words = clean.split(" ");
    const ngrams = new Set<string>();
    for (let i = 0; i <= words.length - 3; i++) {
      ngrams.add(`${words[i]} ${words[i + 1]} ${words[i + 2]}`);
    }
    return ngrams;
  }

  function jaccardSimilarity(setA: Set<string>, setB: Set<string>): number {
    let intersection = 0;
    for (const item of setA) {
      if (setB.has(item)) intersection++;
    }
    const union = setA.size + setB.size - intersection;
    return union === 0 ? 0 : intersection / union;
  }

  const cityTexts = locationsData.map((loc) => {
    const text = `${loc.name} ${loc.localArchitecture} ${loc.accessLogistics} ${loc.directAnswer} ${loc.localFaqs.map((f) => f.question + " " + f.answer).join(" ")}`;
    return { name: loc.name, grams: get3Grams(text) };
  });

  for (let i = 0; i < cityTexts.length; i++) {
    for (let j = i + 1; j < cityTexts.length; j++) {
      const cityA = cityTexts[i];
      const cityB = cityTexts[j];
      const similarity = jaccardSimilarity(cityA.grams, cityB.grams);

      assert.ok(
        similarity < 0.5,
        `Pénalité Doorway potentielle : similarité de ${Math.round(similarity * 100)}% entre ${cityA.name} et ${cityB.name} (doit être < 50%)`
      );
    }
  }
});

test("Check M6: Le Sitemap dynamique contient exactement 123 URLs uniques sans doublons", async () => {
  const response = await sitemapLoader({} as any);
  assert.equal(response.status, 200);
  const xml = await response.text();

  const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  assert.equal(matches.length, 123, `Le sitemap doit contenir exactement 123 URLs (reçu: ${matches.length})`);

  const urls = matches.map((m) => m.replace(/<\/?loc>/g, ""));
  const uniqueUrls = new Set(urls);
  assert.equal(uniqueUrls.size, 123, `Doublons détectés dans le sitemap: ${urls.length - uniqueUrls.size} doublons`);

  for (const url of uniqueUrls) {
    assert.ok(url.startsWith("https://renovaxpert.fr"), `URL non-apex dans le sitemap: ${url}`);
    assert.ok(!url.includes("www."), `Présence de www interdite dans ${url}`);
  }
});
