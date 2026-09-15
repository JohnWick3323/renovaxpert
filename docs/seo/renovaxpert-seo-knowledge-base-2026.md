# RenovaXpert SEO Knowledge Base — 2026

Last verified: 2026-09-14  
Project: `https://renovaxpert.fr`  
Market: rénovation intérieure, Paris et proche couronne  
Business model: service-area contractor; leads via phone and GHL quote form

## 1. Purpose

This is the project source of truth for SEO, local SEO, AI-search readiness, content production, launch QA, and later content pruning. It converts the 55 supplied research files into rules that can be implemented and tested on RenovaXpert.

When this document conflicts with a commercial SEO article, current Google primary documentation wins. When a claim cannot be verified, it must be described as a hypothesis or omitted.

The complete source inventory is in [`source-register-2026.md`](./source-register-2026.md).

## 2. Evidence hierarchy

1. Current Google Search Central, Google Business Profile Help, Search Console, Schema.org, INSEE, Service-Public.fr, and official municipal sources.
2. First-party performance data: GSC, GA4, GBP, CRM/GHL, call tracking, crawl logs, and field Core Web Vitals.
3. Strong editorial sources such as Search Engine Land, Search Engine Journal, and Semrush.
4. Specialist agencies and practitioner case studies.
5. Reddit, sales pages, unsupported benchmarks, and vendor claims; useful for ideas, never proof.

Rules labelled **Required** are launch gates. Rules labelled **Experiment** need measured results before becoming policy.

## 3. Project decisions already approved

- The public site and all user-facing URLs are French.
- French permalinks use lowercase ASCII slugs, hyphens, and no accents.
- Service-area URL pattern: `/renovation-interieure/{ville}`.
- One central business entity is used across the site. City pages are service-area pages, not fake offices or branches.
- The central schema type is `GeneralContractor`, linked from city-level `Service` schema through the same provider `@id`.
- No fake local address, branch, map pin, review, rating, project gallery, certification, or city office may be created.
- Stock photography is allowed until genuine project photography is available. It must never be labelled as a RenovaXpert project.
- A public photo-credits page is not required. A private, valid licence/source register is required.
- The contractor, its own team, and a workmanship/quality guarantee may be described confidently. Specific employment status, certifications, insurance, equipment, materials, performance ratings, or regulatory guarantees still require confirmation.
- Owner identity, SIRET, public business address, GBP verification, and genuine project gallery remain deferred until accurate evidence is supplied.
- GHL remains the lead form. A response expectation of `sous 24 heures ouvrées` is approved.

## 4. 2026 Google and AI-search rules

### 4.1 Traditional SEO remains the AI-search foundation

Google's generative search features use the normal Search index, ranking systems, and retrieval. A page must be crawlable, indexable, eligible for a snippet, and useful before AI-specific work matters.

Required:

- Publish crawlable SSR HTML with the main answer visible without user interaction.
- Keep canonicals, internal links, sitemap, robots directives, and status codes consistent.
- Create original, non-commodity content based on the contractor's real experience and local customer needs.
- Use clear headings, direct answers, useful images, and concrete next steps.
- Do not create pages for every possible query variation.

Primary source: [Google — Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

### 4.2 `llms.txt` is optional, not a Google ranking signal

Google states that it does not use `llms.txt` for Search or its generative Search features. RenovaXpert may keep `/llms.txt` as an emerging discovery convention for other agents, provided it is accurate and maintained. It must not be presented as improving Google rankings.

Required:

- Never let `llms.txt` list a URL that is 404, redirected, noindex unintentionally, or no longer canonical.
- Update it in the same change as the sitemap and navigation when pages are added or removed.
- Treat `llms-full.txt`, agent capability files, and WebMCP declarations as experiments until there is a real user/agent use case.

### 4.3 FAQ content is useful; FAQ rich results are retired

As of 2026-05-07, Google no longer shows FAQ rich results. Human-readable FAQs can still improve conversion and answer coverage, but new `FAQPage` markup must not be justified as a Google rich-result tactic.

Required:

- Keep useful visible FAQs.
- Do not promise FAQ SERP enhancements.
- Do not add HowTo schema; the rich-result feature is deprecated.

Primary source: [Google Search documentation updates](https://developers.google.com/search/updates)

### 4.4 AI-assisted content is allowed; scaled low-value content is not

AI may help research, structure, edit, and translate. The output must remain accurate, original, useful, and reviewed. Generating many similar city pages mainly to capture query variants risks scaled-content and doorway abuse.

Required:

- Every city page must answer a genuine local customer need and be independently useful.
- No city-name swapping.
- No fabricated first-hand experience.
- No unsupported exact numbers, guarantees, materials, equipment, or local regulations.
- Do not target a city the contractor cannot realistically serve.

Primary sources: [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies) and [Google guidance on generative AI content](https://developers.google.com/search/docs/fundamentals/using-gen-ai-content)

## 5. Local SEO model for RenovaXpert

### 5.1 Business model

RenovaXpert is one service-area contractor, not a multi-branch chain. Therefore:

- One GBP represents the real central operating base.
- If customers are not received at the base, the address is hidden on GBP.
- GBP service areas use real cities or postal codes, not a radius.
- Google currently allows up to 20 service areas and recommends an overall area within roughly two hours' drive from the base.
- City landing pages can target organic local intent, but they do not create separate GBP entities.

Primary sources: [Google service-area guidance](https://support.google.com/business/answer/9157481) and [Google business representation guidelines](https://support.google.com/business/answer/3038177)

### 5.2 Approved initial architecture

Current launch batch:

1. `/zones-intervention` — service-area hub.
2. `/renovation-interieure/boulogne-billancourt`.
3. `/renovation-interieure/neuilly-sur-seine`.
4. `/renovation-interieure/levallois-perret`.
5. `/renovation-interieure/vincennes`.

Eight additional city pages are a later phase. They should be released in small batches only after the first four city pages are indexed, technically stable, and producing useful GSC/query evidence.

### 5.3 Doorway-page safety gate

A city page may be indexed only when all answers below are **yes**:

- Does RenovaXpert genuinely serve the city?
- Does the page contain useful city-specific information supported by an official source or real contractor experience?
- Does it explain how the confirmed services apply to housing/common project needs in that city?
- Does it give a useful conversion path without forcing the visitor through an intermediate page?
- Is the core copy substantively different from other city pages?
- Is it linked naturally from the service-area hub and relevant service pages?
- Would the page still help a resident if the city keyword were not highlighted?

Failure condition: a page is mostly the same scaffold and claims as another city page, with names, streets, or postcodes swapped.

### 5.4 City-page content specification

Each city page should contain:

- A unique local-intent title, H1, introduction, and value proposition.
- Confirmed services only: peinture intérieure, parquet, carrelage, sol vinyle/PVC, plaques de plâtre/cloisons, nettoyage après travaux.
- Two or three proven local context points, not a list of decorative street names.
- Practical apartment/copropriété considerations described conditionally, not as universal city law.
- A city-specific service selection section.
- A transparent process: request, qualification, visit if applicable, quote, scheduling, execution, handover.
- Human-readable FAQs derived from real objections and conversion questions.
- Links to the hub, relevant service pages, contact/quote path, privacy notice, and nearby city pages where useful.
- One GHL form and a click-to-call fallback.
- Neutral stock-image language such as `Exemple d'ambiance intérieure`, never `notre chantier à [ville]`.

There is no Google-required word count. Use the shortest length that fully answers the intent. For this project, 700–1,200 well-edited words is a working range, not a ranking rule. Longer pages must earn their length with genuinely useful information.

## 6. Approved local evidence links

These links may support factual local context. They do not prove RenovaXpert's own experience or service capabilities.

### Boulogne-Billancourt

- [INSEE — dossier complet, commune 92012](https://www.insee.fr/fr/statistiques/2011101?geo=COM-92012): population, density, housing and building-period tables.
- [Ville de Boulogne-Billancourt — urban-planning information](https://urbanisme.boulognebillancourt.com/notesurbanisme/): current municipal planning access.
- [Ville de Boulogne-Billancourt — PADD](https://www.boulognebillancourt.com/fileadmin/medias/ARBORESCENCE/Mes_demarches__rub._transv_/Particuliers/Urbanisme/Plan_local_d_urbanisme_en_ligne/bb_padd_30564.pdf): architectural, urban, landscape, and heritage context.

Safe fact pattern: Boulogne has a dense and varied housing stock and documented architectural heritage.  
Do not infer: a universal 19–21 dB underlay rule, fixed building work hours, or a rule applying to every copropriété.

### Neuilly-sur-Seine

- [INSEE — dossier complet, commune 92051](https://www.insee.fr/fr/statistiques/2011101?geo=COM-92051): housing and building-period evidence.
- [INSEE — territory comparison, commune 92051](https://www.insee.fr/fr/statistiques/1405599?geo=COM-92051): current population, density, households, and housing mix.

Safe fact pattern: Neuilly has a dense, predominantly apartment-based housing market with a mix of building periods.  
Do not infer: every apartment is Haussmannian, ceilings exceed a fixed height, or all buildings require the same lift/protection process.

### Levallois-Perret

- [INSEE — dossier complet, commune 92044](https://www.insee.fr/fr/statistiques/2011101?geo=COM-92044): population, density, housing, and construction periods.
- [Ville de Levallois — PLU](https://www.ville-levallois.fr/services/urbanisme/plu/): planning and protected-building documentation.
- [Ville de Levallois — urban planning](https://www.ville-levallois.fr/services/urbanisme/): current municipal planning information.

Safe fact pattern: Levallois is exceptionally dense and apartment renovation often requires careful logistics.  
Do not infer: every job needs the same delivery schedule, dust system, material label, or street-access method.

### Vincennes

- [INSEE — dossier complet, commune 94080](https://www.insee.fr/fr/statistiques/2011101?geo=COM-94080): housing types and building-period distribution.
- [Ville de Vincennes — heritage protection](https://www.vincennes.fr/habitat-et-urbanisme/protection-du-patrimoine): official heritage context and protected areas.
- [Ville de Vincennes — PLUi](https://www.vincennes.fr/habitat-et-urbanisme/plan-local-durbanisme-intercommunal): current planning rules and heritage references.

Safe fact pattern: Vincennes has a predominantly apartment-based stock across several building periods and a significant protected heritage context.  
Do not infer: a particular lath-plaster condition exists in every building or that interior work always requires heritage approval.

### General copropriété statement

- [Service-Public.fr — acoustic insulation and abnormal neighbourhood disturbance](https://www.service-public.fr/particuliers/vosdroits/F15837).

Safe wording: changing a floor covering can affect impact-noise performance, so the copropriété rules and existing floor build-up should be checked before work.  
Unsafe wording: every project legally requires one fixed acoustic rating.

## 7. Keywords and intent model

Keyword choices must ultimately be validated with live French SERPs and GSC, not inferred from tools alone.

### Transactional primary patterns

- `entreprise rénovation intérieure [ville]`
- `rénovation appartement [ville]`
- `artisan rénovation [ville]`
- `devis rénovation intérieure [ville]`

### Service + city patterns

- `peintre intérieur [ville]`
- `pose parquet [ville]`
- `pose carrelage [ville]`
- `pose sol vinyle [ville]`
- `plaquiste [ville]`
- `nettoyage après travaux [ville]`

### Conversion/supporting questions

- prix/devis and what affects it;
- occupied apartment versus vacant property;
- condominium/common-area protection;
- estimated scheduling and project steps;
- which services can be combined;
- what information is needed for an accurate quote.

Rules:

- One primary intent per page.
- Use close variants naturally; do not create a page for each synonym.
- Avoid competing city pages targeting the same unqualified Paris-wide query.
- Search intent and actual SERP page types override keyword-volume assumptions.

## 8. Metadata policy for 2026

Google has no fixed character limit for titles or meta descriptions; both are truncated as needed by device width. Character targets are editorial guardrails, not ranking requirements.

Required:

- Every title is unique, descriptive, concise, and front-loads the useful service/location intent.
- Avoid repeated boilerplate, keyword lists, and unnecessary words such as `Entreprise de` when the shorter wording is clearer.
- Every meta description is a useful, page-specific pitch. Google may rewrite it.
- Never add unsupported claims only to improve CTR.

Working display targets for this site:

- Title: normally 45–60 characters; test rendered pixel width.
- Meta description: normally 135–160 characters; shorter is acceptable when complete.
- H1 may be longer and more natural than the title.

Current rewrite direction:

- Hub: `Rénovation à Paris et proche couronne | RenovaXpert`.
- City: `Rénovation intérieure à [Ville] ([CP]) | RenovaXpert` if it fits; omit the brand from the title when needed rather than dropping the service/location intent.

Primary sources: [Google title-link guidance](https://developers.google.com/search/docs/appearance/title-link) and [Google snippet guidance](https://developers.google.com/search/docs/appearance/snippet)

## 9. Schema and entity policy

### Central entity

Use exactly one canonical entity identifier:

`https://renovaxpert.fr/#organization`

Use `GeneralContractor` on the homepage because it is the most appropriate available LocalBusiness subtype for the confirmed scope. Include only visible, accurate properties.

### City pages

Use `Service` with:

- `provider` referencing the central entity `@id`;
- `areaServed` identifying the city;
- `serviceType` matching visible content;
- canonical URL matching the page.

Do not create city-level `LocalBusiness` entities unless RenovaXpert later opens real, staffed, eligible locations.

### Address limitation

Google's LocalBusiness rich-result documentation requires a physical `address`. Until a verified address can be accurately included, the schema can still improve entity clarity through Schema.org, but full Google LocalBusiness rich-result eligibility must not be claimed.

Do not add fake ratings, reviews, opening hours, geo coordinates, prices, or addresses. Schema must match visible page content.

Primary source: [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)

## 10. Lead-generation and CRO rules

SEO traffic is useful only when it creates qualified calls and quote requests.

Required on money pages:

- Primary CTA visible above the fold.
- Clear service area and confirmed services.
- Click-to-call link with one consistent phone number.
- GHL quote form with name, telephone, service, work postcode, optional description, and consent.
- CTA repeated after decision-support content.
- `sous 24 heures ouvrées` response expectation.
- Privacy-policy link near the form.
- No fake urgency, fake scarcity, fake counters, or fake testimonials.

Approved analytics events:

- `quote_cta_click`
- `click_to_call`
- `quote_form_view`
- `generate_lead`

Primary KPI: qualified leads by landing page and city.  
Secondary KPIs: call clicks, form-start/view rate, form completion, GSC non-brand clicks, query coverage, and lead-to-job quality.

## 11. Image policy

Required for every non-original image:

- Local optimized WebP/AVIF asset; no runtime hotlink.
- Valid source page URL that returns 200.
- Provider, creator if available, download date, licence URL, and asset-to-page mapping in the private register.
- Neutral descriptive alt text based on what is visible.
- No city, project, client, or `nos réalisations` implication unless the image is genuine evidence.
- Width/height or aspect-ratio reservation to prevent layout shift.

The existing `docs/image-sources.md` URLs that use timestamp/hash values as Unsplash photo-page slugs must be replaced with valid source pages or the corresponding images must be replaced. A direct CDN image URL is not a substitute for a creator/source record.

Acceptance test: every recorded source and licence link returns HTTP 200; no public page or sitemap contains links to the private register.

## 12. Technical launch gates

### Before preview deployment

- `npm test` passes.
- `npm run typecheck` passes.
- `npm run build` passes.
- All route files are committed intentionally.
- `/public/qa-screenshots/` is ignored and not deployed.
- No credentials/service-account JSON are tracked.
- No hotlinked production images.
- No internal links to 404, redirect chains, or wrong canonicals.
- `indexingEnabled` remains `false`.

### Preview/live verification while indexing is closed

- Homepage and all 15 intended sitemap URLs return 200.
- `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and required assets return 200.
- All canonical URLs use `https://renovaxpert.fr` without `www`.
- Pages render core content in SSR HTML.
- Mobile has no horizontal overflow; CTAs and form are usable.
- GHL performs a real test submission and redirects to `/merci?source=ghl_quote`.
- GTM/GA4 events fire once with no PII.
- Schema validates and matches visible content.

### Open indexing

Only after the production checks pass:

1. Set `indexingEnabled: true`.
2. Rebuild, test, commit, and deploy.
3. Confirm public pages no longer output accidental `noindex`.
4. Confirm robots allows intended crawling and declares the sitemap.
5. Submit `https://renovaxpert.fr/sitemap.xml` in GSC.
6. Inspect representative URLs in GSC.

Submitting a sitemap is a discovery hint, not an indexing guarantee.

## 13. Performance baseline

Field data takes priority over one-off lab scores. Use GSC Core Web Vitals and CrUX when available.

Good thresholds:

- LCP: `<= 2.5s`
- INP: `<= 200ms`
- CLS: `<= 0.1`

The embedded GHL form should not block the primary page content or create uncontrolled layout shift. Reserve iframe space and delay non-critical scripts where compatible with consent and form usability.

Primary source: [Google Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)

## 14. Measurement and rollout loop

### First 14 days

- Confirm sitemap fetch, crawl access, canonical selection, and initial indexing.
- Check 404/5xx, excluded URLs, structured-data errors, and analytics event integrity.
- Do not judge page quality from rankings this early.

### Days 15–45

- Group GSC queries by city, service, brand, and intent.
- Improve titles/snippets where impressions exist but CTR is weak.
- Expand only sections that answer real queries or sales objections.
- Record lead quality in GHL; traffic without qualified leads is not success.

### Days 45–90

- Compare city-page impressions, non-brand clicks, call/form actions, and qualified leads.
- Check keyword cannibalization between hub, city, and service pages.
- Select the next city batch using reachable geography, observed demand, lead value, and content evidence—not city population alone.

### After sufficient data

Assign every weak URL one action:

- **Keep**: useful and performing its intended job.
- **Improve**: correct intent, insufficient usefulness/CTR/conversion.
- **Merge**: overlapping intent with a stronger page.
- **Noindex**: useful to users but not appropriate for Search.
- **Delete (404/410)**: no purpose, no links, and no equivalent replacement.
- **Redirect (301)**: a genuinely equivalent or consolidated destination exists.

Never redirect every deleted page to the homepage. Update internal links directly to the final 200 URL and remove retired URLs from the sitemap. Keep a rollback log containing URL, evidence, action, destination, and date.

## 15. Source-driven conclusions from the supplied corpus

The 55-file corpus strongly agrees on these durable points:

1. Location pages work when they provide real local value; mass city swaps create doorway/scaled-content risk.
2. Hub-and-spoke architecture and natural internal linking improve discovery and prevent orphan pages.
3. One real service-area business must not be represented as many physical branches.
4. Structured data clarifies entities but is not a direct ranking shortcut.
5. GBP, reviews, proximity, on-page relevance, citations, and website quality work as a system; city pages cannot manufacture proximity.
6. Content pruning means making an evidence-based Keep/Improve/Merge/Noindex/Delete/Redirect decision, not deleting low-traffic pages blindly.
7. GSC, analytics, backlink evidence, indexation, and business value should drive pruning.
8. Redirects must be relevant and direct; internal links and sitemaps must be updated after changes.
9. AI visibility still depends on accurate, useful, crawlable, well-structured content and trustworthy brand/entity signals.
10. Commercial sources frequently overstate exact title limits, schema ranking impact, AI crawler effects, and word-count thresholds; these are treated as heuristics only.

## 16. Known conflicts resolved for this project

| Claim found in sources | RenovaXpert policy |
|---|---|
| Put LocalBusiness schema on every city page | Rejected for this one-location SAB. Use one `GeneralContractor` entity and city `Service` pages. |
| Every city page needs unique NAP/address | Rejected unless a real staffed location exists. |
| Keep title under exactly 60 characters | Use concise, unique titles and pixel/device testing; no Google hard character limit. |
| Keep meta descriptions under a fixed count | Use a complete page-specific pitch; Google has no hard character limit and may rewrite it. |
| FAQ schema improves SERP visibility | Retired as a Google rich-result tactic in May 2026; keep useful visible FAQs. |
| `llms.txt` improves Google AI visibility | Rejected. Google says it ignores the file; retain only for other emerging systems if maintained. |
| More city pages automatically mean more traffic | Rejected. Add pages only when service reality, unique value, demand, and QA support them. |
| Delete all low-traffic pages | Rejected. Low-volume transactional pages may be valuable; use GSC, links, conversions, and intent. |

## 17. Definition of SEO completion for the launch

The base-site SEO phase is complete only when:

- the five new local routes are live and return 200;
- the 15-URL sitemap is live and accepted by GSC;
- public indexing is intentionally opened after live QA;
- metadata, canonicals, schema, internal links, and images pass the launch gates;
- all local factual assertions have official sources or are framed as contractor experience;
- all image source records are valid;
- GHL and four analytics events work in production;
- no secrets, QA screenshots, fake locations, fake reviews, or unsupported proof claims are deployed.

Ranking and lead targets are business outcomes to monitor, not launch guarantees.
