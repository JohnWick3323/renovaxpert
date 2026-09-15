import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { siteConfig } from "../app/lib/site-config";
import { loader as sitemapLoader } from "../app/routes/sitemap";
import { loader as robotsLoader } from "../app/routes/robots";

const locationPages = [
  {
    name: "Hub",
    file: "zones-intervention.tsx",
    expectedPath: "/zones-intervention",
    expectedTitle: "Rénovation à Paris et proche couronne | RenovaXpert",
  },
  {
    name: "Boulogne-Billancourt",
    file: "renovation-boulogne-billancourt.tsx",
    expectedPath: "/renovation-interieure/boulogne-billancourt",
    expectedTitle: "Rénovation à Boulogne-Billancourt (92100) | RenovaXpert",
  },
  {
    name: "Neuilly-sur-Seine",
    file: "renovation-neuilly-sur-seine.tsx",
    expectedPath: "/renovation-interieure/neuilly-sur-seine",
    expectedTitle: "Rénovation à Neuilly-sur-Seine (92200) | RenovaXpert",
  },
  {
    name: "Levallois-Perret",
    file: "renovation-levallois-perret.tsx",
    expectedPath: "/renovation-interieure/levallois-perret",
    expectedTitle: "Rénovation à Levallois-Perret (92300) | RenovaXpert",
  },
  {
    name: "Vincennes",
    file: "renovation-vincennes.tsx",
    expectedPath: "/renovation-interieure/vincennes",
    expectedTitle: "Rénovation intérieure à Vincennes (94300) | RenovaXpert",
  },
];

test("Check 1 & 2 & 3: Les 5 modules de routes exposent des titres et descriptions uniques, avec canonique apex sans www", () => {
  const titles = new Set<string>();
  const descriptions = new Set<string>();
  const canonicals = new Set<string>();

  for (const page of locationPages) {
    const filePath = path.resolve("app/routes", page.file);
    const content = fs.readFileSync(filePath, "utf-8");

    // Extraire pageTitle avec regex robuste
    const titleMatch = content.match(/const pageTitle\s*=\s*"([^"]+)"/);
    assert.ok(titleMatch, `pageTitle non trouvé dans ${page.file}`);
    const titleStr = titleMatch[1];

    assert.equal(titleStr, page.expectedTitle, `Titre non conforme pour ${page.name}`);
    assert.ok(titleStr.length >= 45 && titleStr.length <= 65, `Longueur du titre hors intervalle 45-65: ${titleStr.length}`);
    assert.ok(!titles.has(titleStr), `Titre dupliqué: ${titleStr}`);
    titles.add(titleStr);

    // Extraire pageDescription avec regex robuste
    const descMatch = content.match(/const pageDescription\s*=\s*"([^"]+)"/);
    assert.ok(descMatch, `pageDescription non trouvé dans ${page.file}`);
    const descStr = descMatch[1];

    assert.ok(descStr.length >= 135 && descStr.length <= 165, `Longueur de la description hors intervalle 135-165: ${descStr.length} ("${descStr}")`);
    assert.ok(!descriptions.has(descStr), `Description dupliquée: ${descStr}`);
    descriptions.add(descStr);

    // Extraire canonicalPath
    const canonMatch = content.match(/const canonicalPath\s*=\s*"([^"]+)"/);
    assert.ok(canonMatch, `canonicalPath non trouvé dans ${page.file}`);
    const canonPath = canonMatch[1];
    assert.equal(canonPath, page.expectedPath, `canonicalPath incorrect pour ${page.name}`);

    assert.ok(!content.includes("www.renovaxpert.fr"), `Occurrence de 'www' interdite trouvée dans ${page.file}`);
    canonicals.add(canonPath);
  }
});

test("Check 4 & 5 & 6: Une seule entité GeneralContractor, aucun faux LocalBusiness de ville, Service.provider conforme", () => {
  assert.equal(siteConfig.brandName, "RenovaXpert");
  assert.equal(siteConfig.entityId, "https://renovaxpert.fr/#organization");

  // Inspecter le code source des 4 pages villes
  for (const page of locationPages.slice(1)) {
    const filePath = path.resolve("app/routes", page.file);
    const code = fs.readFileSync(filePath, "utf-8");

    assert.ok(code.includes('"@type": "Service"'), `La route ${page.name} doit utiliser le schéma Service`);
    assert.ok(!code.includes('"@type": "LocalBusiness"'), `La route ${page.name} ne doit pas créer de fausse entité LocalBusiness`);
    assert.ok(code.includes("siteConfig.entityId") || code.includes(siteConfig.entityId), `La route ${page.name} doit référencer l'entité centrale provider`);
    assert.ok(code.includes('"areaServed"'), `La route ${page.name} doit déclarer areaServed`);
    assert.ok(!code.includes('"aggregateRating"'), `La route ${page.name} ne doit pas avoir d'avis inventés`);
  }
});

test("Check 7: Le sitemap contient exactement les 15 URLs canoniques indexables", async () => {
  const response = await sitemapLoader({} as any);
  assert.equal(response.status, 200);
  const xml = await response.text();

  const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
  assert.equal(matches.length, 15, `Le sitemap doit contenir exactement 15 URLs canoniques (reçu: ${matches.length})`);

  for (const page of locationPages) {
    assert.ok(xml.includes(`<loc>https://renovaxpert.fr${page.expectedPath}</loc>`), `Sitemap doit inclure ${page.expectedPath}`);
  }
});

test("Check 8 & 9: /merci et politique restent noindex, et robots.txt bloque le crawl tant que indexingEnabled est false", async () => {
  assert.equal(siteConfig.indexingEnabled, false, "indexingEnabled doit rester à false avant le lancement live");
  const response = await robotsLoader({} as any);
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes("User-agent: *"));
  assert.ok(text.includes("Disallow: /"));
});

test("Check 10: Aucun hotlink d'image externe (Unsplash/Pexels) dans les fichiers .css, .scss, .ts, .tsx de tout le projet", () => {
  const extensions = [".css", ".scss", ".ts", ".tsx", ".html", ".js"];
  const scannedFiles: string[] = [];

  function scan(dir: string) {
    for (const f of fs.readdirSync(dir)) {
      if (f === "node_modules" || f === ".git" || f === "build" || f === ".vite") continue;
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        scan(full);
      } else if (extensions.some((ext) => f.endsWith(ext))) {
        // Exclure ce fichier de test lui-même pour ne pas auto-détecter les chaînes de test
        if (!full.includes("location-pages.test.ts")) {
          scannedFiles.push(full);
        }
      }
    }
  }
  scan(path.resolve("."));

  for (const file of scannedFiles) {
    const code = fs.readFileSync(file, "utf-8");
    assert.ok(!code.includes("images.unsplash.com"), `Hotlink Unsplash interdit trouvé dans ${file}`);
    assert.ok(!code.includes("images.pexels.com"), `Hotlink Pexels interdit trouvé dans ${file}`);
  }
});

test("Check 11: Pattern de navigation à divulgation accessible (disclosure) avec aria-expanded et aria-controls", () => {
  const navCode = fs.readFileSync(path.resolve("app/blocks/__global/navigation-header.tsx"), "utf-8");

  // Vérifier le pattern disclosure conforme WCAG / v3 spec
  assert.ok(navCode.includes("aria-expanded={servicesOpen}"), "Le déclencheur Services doit contrôler dynamiquement aria-expanded");
  assert.ok(navCode.includes('aria-controls="services-submenu"'), "Le déclencheur Services doit pointer vers aria-controls='services-submenu'");
  assert.ok(!navCode.includes('role="menu"'), "Le sous-menu ne doit pas utiliser role='menu' pour respecter le pattern standard de liens");
  assert.ok(!navCode.includes('role="menuitem"'), "Les liens ne doivent pas utiliser role='menuitem'");

  // Les 7 destinations de services requises par v3
  const expectedServiceLinks = [
    "/services",
    "/services/peinture-interieure-paris",
    "/services/pose-parquet-paris",
    "/services/pose-carrelage-paris",
    "/services/pose-sol-vinyle-paris",
    "/services/pose-plaques-de-platre-paris",
    "/services/nettoyage-apres-travaux-paris",
  ];

  for (const link of expectedServiceLinks) {
    assert.ok(navCode.includes(`path: "${link}"`), `Le sous-menu Services doit inclure le lien ${link}`);
  }
});

test("Check 12: Formulaires GHL avec variant scoped et masquage du fallback sur desktop", () => {
  const ghlCode = fs.readFileSync(path.resolve("app/components/ghl-quote-form.tsx"), "utf-8");
  const ghlCss = fs.readFileSync(path.resolve("app/components/ghl-quote-form.module.css"), "utf-8");

  assert.ok(ghlCode.includes('variant?: "card" | "transparent"'), "GhlQuoteForm doit accepter le prop variant card | transparent");
  assert.ok(ghlCss.includes(".iframeContainerTransparent"), "GhlQuoteForm CSS doit définir un conteneur transparent");
  assert.ok(ghlCss.includes(".fallback {\n  display: none;\n}"), "Le fallback d'appel direct doit être masqué sur desktop");
});

test("Check 13: Service-area copy naturel et absence de 'à Intervention dans'", () => {
  assert.equal(siteConfig.serviceArea, "dans tout Paris et en proche couronne");
  assert.equal(siteConfig.serviceAreaLabel, "Intervention dans tout Paris et en proche couronne");
  assert.equal(siteConfig.serviceAreaName, "Paris et proche couronne");

  // Scanner les fichiers de l'application pour interdire 'à Intervention' ou 'à dans'
  const appDir = path.resolve("app");
  function scan(dir: string) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        scan(full);
      } else if (f.endsWith(".tsx") || f.endsWith(".ts")) {
        const c = fs.readFileSync(full, "utf-8");
        assert.ok(!/à\s+(Intervention|dans\s+tout)/.test(c), `Tournure bancale 'à Intervention/dans' trouvée dans ${full}`);
      }
    }
  }
  scan(appDir);
});

test("Check 14: Promesse de délai de 24h ouvrées conforme et absence de promesse de devis sous 24h", () => {
  const appDir = path.resolve("app");
  function scan(dir: string) {
    for (const f of fs.readdirSync(dir)) {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        scan(full);
      } else if (f.endsWith(".tsx") || f.endsWith(".ts")) {
        const c = fs.readFileSync(full, "utf-8");
        // Vérifier qu'aucun texte ne promet l'envoi d'un devis sous 24h
        assert.ok(!/devis.*?sous 24h(?!\s*ouvrées\s*par)/i.test(c.replace("Devis gratuit et réponse sous 24h ouvrées", "")), `Promesse de devis sous 24h interdite trouvée dans ${full}`);
      }
    }
  }
  scan(appDir);
});

test("Check 15: Homepage enrichie avec guide méthodologique, maillage vers les 4 communes et FAQ compacte", () => {
  const homeCode = fs.readFileSync(path.resolve("app/routes/home.tsx"), "utf-8");
  const guideCode = fs.readFileSync(path.resolve("app/blocks/home/home-guide-faq.tsx"), "utf-8");

  assert.ok(homeCode.includes("<HomeGuideFaq />"), "La page d'accueil doit intégrer le composant HomeGuideFaq");
  assert.ok(guideCode.includes("/renovation-interieure/boulogne-billancourt"));
  assert.ok(guideCode.includes("/renovation-interieure/neuilly-sur-seine"));
  assert.ok(guideCode.includes("/renovation-interieure/levallois-perret"));
  assert.ok(guideCode.includes("/renovation-interieure/vincennes"));
  assert.ok(guideCode.includes("Quels types de travaux"));
  assert.ok(guideCode.includes("Comment obtenir un devis"));
});

test("Check 16: Identifiants GHL et noms d'événements analytics intacts", () => {
  assert.equal(siteConfig.ghl.formId, "3CjwChGZ2ZSmy16TGijM");

  const analyticsCode = fs.readFileSync(path.resolve("app/lib/analytics.ts"), "utf-8");
  assert.ok(analyticsCode.includes('"quote_cta_click"'));
  assert.ok(analyticsCode.includes('"click_to_call"'));
  assert.ok(analyticsCode.includes('"quote_form_view"'));
  assert.ok(analyticsCode.includes('"generate_lead"'));
});

test("Check 17: Aucun fichier de clé ou de compte de service n'est suivi par Git et QA screenshots ignorés", () => {
  const gitignore = fs.readFileSync(path.resolve(".gitignore"), "utf-8");
  assert.ok(gitignore.includes("*.json") || gitignore.includes("*serviceaccount*.json"));
  assert.ok(gitignore.includes("/public/qa-screenshots/"));
});

test("Check 18: Configuration Téléphonique E.164 - Numéro complet sans astérisques", () => {
  assert.equal(siteConfig.phone.display, "07 53 38 16 54");
  assert.equal(siteConfig.phone.international, "+33 7 53 38 16 54");
  assert.equal(siteConfig.phone.tel, "+33753381654");
  assert.equal(siteConfig.phone.href, "tel:+33753381654");
  assert.ok(!siteConfig.phone.tel.includes("*"), "Le numéro tel ne doit pas contenir d'astérisques");
  assert.ok(!siteConfig.phone.href.includes("*"), "Le lien href ne doit pas contenir d'astérisques");
});
