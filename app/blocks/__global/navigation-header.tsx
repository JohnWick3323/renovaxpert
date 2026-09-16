import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackQuoteCtaClick } from "~/lib/analytics";
import styles from "./navigation-header.module.css";

const serviceLinks = [
  { label: "Rénovation intérieure (Tous nos services)", path: "/services" },
  { label: "Peinture intérieure", path: "/services/peinture-interieure-paris" },
  { label: "Pose de parquet", path: "/services/pose-parquet-paris" },
  { label: "Pose de carrelage", path: "/services/pose-carrelage-paris" },
  { label: "Pose de sol vinyle", path: "/services/pose-sol-vinyle-paris" },
  { label: "Pose de plaques de plâtre ou cloisons", path: "/services/pose-plaques-de-platre-paris" },
  { label: "Nettoyage après travaux", path: "/services/nettoyage-apres-travaux-paris" },
];

export function NavigationHeader({ className }: { className?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const disclosureRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isServicesActive = location.pathname.startsWith("/services");

  // Close submenu on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (disclosureRef.current && !disclosureRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    if (servicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  // Handle Escape key: close submenu and return focus to trigger button
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (servicesOpen) {
          event.preventDefault();
          setServicesOpen(false);
          triggerRef.current?.focus();
        } else if (menuOpen) {
          setMenuOpen(false);
        }
      }
    }
    if (servicesOpen || menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [servicesOpen, menuOpen]);

  // Close all menus on route navigation
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`${styles.header} ${className ?? ""}`} aria-label="Navigation principale">
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} aria-label="Accueil RenovaXpert">
          <img
            src="/RenovaXpert-Logo-Final.png"
            alt="RenovaXpert"
            className={styles.logoImg}
            width={180}
            height={54}
          />
        </Link>

        {/* Navigation list */}
        <div className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Accueil
          </NavLink>

          {/* Direct services link plus an independent disclosure toggle. */}
          <div className={styles.disclosureContainer} ref={disclosureRef}>
            <div className={styles.servicesControl}>
              <NavLink
                to="/services"
                end
                className={`${styles.navLink} ${styles.servicesLink} ${isServicesActive ? styles.navLinkActive : ""}`}
                onClick={() => {
                  setServicesOpen(false);
                  setMenuOpen(false);
                }}
              >
                Services
              </NavLink>
              <button
                ref={triggerRef}
                type="button"
                id="services-trigger"
                className={styles.dropdownToggle}
                aria-label={servicesOpen ? "Fermer le sous-menu des services" : "Afficher le sous-menu des services"}
                aria-expanded={servicesOpen}
                aria-controls="services-submenu"
                onClick={() => setServicesOpen((prev) => !prev)}
              >
                <ChevronDown
                  size={16}
                  className={`${styles.chevron} ${servicesOpen ? styles.chevronRotated : ""}`}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Submenu containing ordinary navigation links */}
            <div
              id="services-submenu"
              className={`${styles.submenu} ${servicesOpen ? styles.submenuOpen : ""}`}
              aria-hidden={!servicesOpen}
            >
              {serviceLinks.map((item, index) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/services"}
                  tabIndex={servicesOpen ? 0 : -1}
                  className={({ isActive }) =>
                    `${styles.dropdownItem} ${index === 0 ? styles.dropdownItemHeader : ""} ${isActive ? styles.dropdownItemActive : ""}`
                  }
                  onClick={() => {
                    setServicesOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/zones-intervention"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Zones d'intervention
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            À Propos
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        <Link
          to="/contact"
          className={styles.cta}
          onClick={() =>
            trackQuoteCtaClick({
              cta_location: "header_navigation_button",
              page_path: typeof window !== "undefined" ? window.location.pathname : "/",
              destination: "/contact",
            })
          }
        >
          Demander un devis
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}

export default NavigationHeader;
