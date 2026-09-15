/**
 * Typed DataLayer and Analytics Helper for RenovaXpert.
 * Strictly compliant with Google Consent Mode v2, GDPR and zero-PII privacy policies.
 * Safe for SSR, client-side navigation, and React 19 development remounting.
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export interface QuoteCtaClickPayload {
  cta_location: string;
  page_path: string;
  service_slug?: string;
  destination: string;
}

export interface ClickToCallPayload {
  link_location: string;
  page_path: string;
  service_slug?: string;
}

export interface QuoteFormViewPayload {
  form_location: string;
  page_path: string;
  service_slug?: string;
}

export interface GenerateLeadPayload {
  form_name: "ghl_quote";
  page_path: "/merci";
  lead_type: "renovation_quote";
}

/**
 * Pushes an event object to window.dataLayer if running in browser.
 */
function pushToDataLayer(eventData: Record<string, unknown>): void {
  if (typeof window === "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
}

/**
 * Tracks when a user activates a quote CTA (hero button, section button, footer link).
 */
export function trackQuoteCtaClick(payload: QuoteCtaClickPayload): void {
  pushToDataLayer({
    event: "quote_cta_click",
    cta_location: payload.cta_location,
    page_path: payload.page_path,
    ...(payload.service_slug ? { service_slug: payload.service_slug } : {}),
    destination: payload.destination,
  });
}

/**
 * Tracks when a user clicks a telephone link (tel:).
 */
export function trackClickToCall(payload: ClickToCallPayload): void {
  pushToDataLayer({
    event: "click_to_call",
    link_location: payload.link_location,
    page_path: payload.page_path,
    ...(payload.service_slug ? { service_slug: payload.service_slug } : {}),
  });
}

/**
 * Tracks when the quote form iframe becomes substantially visible to the visitor.
 */
export function trackQuoteFormView(payload: QuoteFormViewPayload): void {
  pushToDataLayer({
    event: "quote_form_view",
    form_location: payload.form_location,
    page_path: payload.page_path,
    ...(payload.service_slug ? { service_slug: payload.service_slug } : {}),
  });
}

// Track if generate_lead has already fired in the current document lifecycle to avoid React remount duplicates
let generateLeadFired = false;

/**
 * Tracks the successful lead generation upon loading the /merci confirmation route.
 * Deduplicates automatically to prevent development remount double-firing.
 */
export function trackGenerateLead(payload?: Partial<GenerateLeadPayload>): void {
  if (generateLeadFired) {
    return;
  }
  generateLeadFired = true;

  pushToDataLayer({
    event: "generate_lead",
    form_name: payload?.form_name ?? "ghl_quote",
    page_path: "/merci",
    lead_type: payload?.lead_type ?? "renovation_quote",
  });
}
