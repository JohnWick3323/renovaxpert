# RenovaXpert — Guide de Configuration des Événements GTM & GA4

Ce document détaille la procédure de configuration dans Google Tag Manager (Conteneur **GTM-PTCCG9RM**) pour router les événements personnalisés envoyés par le site web (`window.dataLayer`) vers Google Analytics 4 (**G-C774RSJ29N**).

---

## 1. Principes Directeurs & Règles de Confidentialité

- **Réutilisation de la balise existante** : Toutes les balises d'événements GA4 doivent réutiliser la balise Google existante (ID de mesure `G-C774RSJ29N`). Ne créez pas de nouvelle balise de configuration.
- **Zéro PII (Données Personnelles)** : Aucun paramètre d'événement ne doit contenir de nom, numéro de téléphone, email, code postal ou texte libre saisi par l'utilisateur.
- **Consent Mode v2** : Tous les événements analytiques requièrent le consentement `analytics_storage: granted`.
- **Validation préalable** : Toujours tester via le mode Prévisualisation de GTM (Tag Assistant) et DebugView de GA4 avant de publier dans l'espace de travail.

---

## 2. Cartographie des Événements dataLayer ➔ GA4

| Événement dataLayer | Type de Déclencheur GTM | Nom de la Balise GA4 | Nom de l'Événement GA4 | Paramètres d'Événement | Exigence de Consentement |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `quote_cta_click` | Événement personnalisé : `quote_cta_click` | `GA4 - Event - Quote CTA Click` | `quote_cta_click` | `cta_location`, `page_path`, `destination`, `service_slug` (optionnel) | `analytics_storage` |
| `click_to_call` | Événement personnalisé : `click_to_call` | `GA4 - Event - Click To Call` | `click_to_call` | `link_location`, `page_path`, `service_slug` (optionnel) | `analytics_storage` |
| `quote_form_view` | Événement personnalisé : `quote_form_view` | `GA4 - Event - Quote Form View` | `quote_form_view` | `form_location`, `page_path`, `service_slug` (optionnel) | `analytics_storage` |
| `generate_lead` | Événement personnalisé : `generate_lead` | `GA4 - Event - Generate Lead` | `generate_lead` | `form_name`, `page_path`, `lead_type` | `analytics_storage` |

> ⭐️ **Événement Clé (Conversion) :** L'événement `generate_lead` doit être marqué comme **Événement clé (Key Event / Conversion)** dans l'interface d'administration de GA4 (`Admin > Événements > Marquer comme événement clé`).

---

## 3. Configuration Détaillée par Événement dans GTM

### A. Événement `quote_cta_click`
1. **Variables de couche de données à créer** (Type : *Variable de couche de données*) :
   - `dlv - cta_location` ➔ `cta_location`
   - `dlv - page_path` ➔ `page_path`
   - `dlv - destination` ➔ `destination`
   - `dlv - service_slug` ➔ `service_slug`
2. **Déclencheur** :
   - Nom : `Custom Event - quote_cta_click`
   - Type de déclencheur : *Événement personnalisé*
   - Nom de l'événement : `quote_cta_click`
3. **Balise GA4** :
   - Nom : `GA4 - Event - Quote CTA Click`
   - Type : *Google Analytics : Événement GA4*
   - Balise Google : Sélectionner la balise Google Tag existante (`G-C774RSJ29N`)
   - Nom de l'événement : `quote_cta_click`
   - Paramètres d'événement :
     - `cta_location` = `{{dlv - cta_location}}`
     - `page_path` = `{{dlv - page_path}}`
     - `destination` = `{{dlv - destination}}`
     - `service_slug` = `{{dlv - service_slug}}`

### B. Événement `click_to_call`
1. **Variables de couche de données** :
   - `dlv - link_location` ➔ `link_location`
2. **Déclencheur** :
   - Nom : `Custom Event - click_to_call`
   - Type de déclencheur : *Événement personnalisé*
   - Nom de l'événement : `click_to_call`
3. **Balise GA4** :
   - Nom : `GA4 - Event - Click To Call`
   - Nom de l'événement : `click_to_call`
   - Paramètres :
     - `link_location` = `{{dlv - link_location}}`
     - `page_path` = `{{dlv - page_path}}`

### C. Événement `quote_form_view`
1. **Variables de couche de données** :
   - `dlv - form_location` ➔ `form_location`
2. **Déclencheur** :
   - Nom : `Custom Event - quote_form_view`
   - Type de déclencheur : *Événement personnalisé*
   - Nom de l'événement : `quote_form_view`
3. **Balise GA4** :
   - Nom : `GA4 - Event - Quote Form View`
   - Nom de l'événement : `quote_form_view`
   - Paramètres :
     - `form_location` = `{{dlv - form_location}}`
     - `page_path` = `{{dlv - page_path}}`

### D. Événement `generate_lead` (Page `/merci`)
1. **Variables de couche de données** :
   - `dlv - form_name` ➔ `form_name`
   - `dlv - lead_type` ➔ `lead_type`
2. **Déclencheur** :
   - Nom : `Custom Event - generate_lead`
   - Type de déclencheur : *Événement personnalisé*
   - Nom de l'événement : `generate_lead`
3. **Balise GA4** :
   - Nom : `GA4 - Event - Generate Lead`
   - Nom de l'événement : `generate_lead`
   - Paramètres :
     - `form_name` = `{{dlv - form_name}}`
     - `page_path` = `/merci`
     - `lead_type` = `{{dlv - lead_type}}`

---

## 4. Stratégie de Suivi des Pages Vues (Page View Strategy)

La balise Google Tag (`G-C774RSJ29N`) configurée sur le déclencheur *Initialization - All Pages* émet automatiquement un événement `page_view` lors du chargement initial du document.

Pour les navigations côté client au sein de l'application React Router (SPA) :
- **Mesure Améliorée (Enhanced Measurement)** de GA4 inclut l'option « Changements d'état de l'historique du navigateur » (Page changes based on browser history events).
- Si cette option est active dans le flux de données GA4, GA4 détecte automatiquement les transitions d'URL sans nécessiter de balise `page_view` manuelle, évitant ainsi tout double comptage.
- **Vérification post-déploiement requise** : Une validation sous Google Tag Assistant / GA4 DebugView doit être effectuée lors du premier déploiement en pré-production/production. Si Tag Assistant confirme que les transitions React Router n'émettent pas de `page_view` supplémentaire, un déclencheur GTM sur l'événement d'historique (ou un événement personnalisé `virtual_page_view`) pourra être activé.

---

## 5. Protocole de Recette & QA

1. **Vérification du Consentement** :
   - À l'arrivée sur le site (sans action sur le bandeau), vérifier sous Tag Assistant que `analytics_storage` est `denied`.
   - En cas de clic sur « Tout refuser », vérifier que l'état reste `denied` et qu'aucune balise GA4 ne se déclenche.
   - En cas de clic sur « Tout accepter », vérifier que `analytics_storage` passe à `granted` et que les balises se déclenchent.
2. **Test des Événements** :
   - Clic sur un bouton devis ➔ vérifier la réception de `quote_cta_click`.
   - Clic sur un numéro de téléphone ➔ vérifier `click_to_call`.
   - Défilement jusqu'au formulaire GHL ➔ vérifier l'émission unique de `quote_form_view`.
   - Navigation vers `/merci` ➔ vérifier l'émission unique de `generate_lead`.
