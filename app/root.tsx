import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";

import type { Route } from "./+types/root";
import colorSchemeApi from "@dazl/color-scheme/client?url";
import { ErrorBoundary as ErrorBoundaryRoot } from "~/components/error-boundary/error-boundary";

import "./styles/reset.css";
import "./styles/global.css";
import "./styles/theme.css";
import { useColorScheme } from "@dazl/color-scheme/react";

import { NavigationHeader } from "./blocks/__global/navigation-header";
import { ContactQuickInfo } from "./blocks/__global/contact-quick-info";
import { ServicesSummaryFooter } from "./blocks/__global/services-summary-footer";
import { ContactLegalFooter } from "./blocks/__global/contact-legal-footer";
import { SocialMediaCopyright } from "./blocks/__global/social-media-copyright";
import { CookieConsent } from "./components/cookie-consent";
import { siteConfig } from "./lib/site-config";

export const meta: Route.MetaFunction = () => [
  { name: "robots", content: siteConfig.indexingEnabled ? "index, follow" : "noindex, nofollow" },
];

export const links: Route.LinksFunction = () => [
  {
    rel: "icon",
    href: "/RenovaXpert-Favicon.png",
    type: "image/png",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500;600&display=swap",
  },
];

const gtmScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'wait_for_update': 500
});
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PTCCG9RM');
`;

export function Layout({ children }: { children: React.ReactNode }) {
  const { rootCssClass, resolvedScheme } = useColorScheme();
  return (
    <html lang="fr" suppressHydrationWarning className={rootCssClass} style={{ colorScheme: resolvedScheme }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        {/* Google Consent Mode v2 default initialization and GTM container */}
        <script
          dangerouslySetInnerHTML={{
            __html: gtmScript,
          }}
        />
        <script src={colorSchemeApi} data-light-class="light-theme" data-dark-class="dark-theme"></script>
        <Links />
      </head>
      <body>
        {/* GTM noscript iframe fallback immediately after opening body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PTCCG9RM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        <header>
          <ContactQuickInfo />
          <NavigationHeader />
        </header>
        {children}
        <footer>
          <ServicesSummaryFooter />
          <ContactLegalFooter />
          <SocialMediaCopyright />
        </footer>

        <CookieConsent />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export const ErrorBoundary = ErrorBoundaryRoot;
