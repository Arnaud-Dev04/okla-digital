import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";
import { PhoneIcon } from "./Icons";

const NAV_LINKS = [
  { href: "#accueil",  label: "Accueil" },
  { href: "#apropos",  label: "À propos de nous" },
  { href: "#services", label: "Nos services" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#contact",  label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const h = (e) => { if (e.matches) setIsOpen(false); };
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
        role="banner"
      >
        <div className={`container ${styles.inner}`}>

          {/* Logo agrandi x3 */}
          <a
            href="#accueil"
            aria-label="OKLA Digital - Accueil"
            className={styles.logoLink}
            onClick={closeMenu}
          >
            <Logo height="72px" />
          </a>

          {/* Navigation desktop */}
          <nav className={styles.nav} aria-label="Navigation principale">
            <ul className={styles.navList} role="list">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className={styles.navLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton CTA */}
          <a
            href="tel:+25762003137"
            className={styles.ctaBtn}
            aria-label="Appeler OKLA Digital"
          >
            <PhoneIcon size={17} />
            <span>Appelez-nous</span>
          </a>

          {/* Burger mobile */}
          <button
            className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
            onClick={() => setIsOpen((p) => !p)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            type="button"
          >
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
            <span className={styles.burgerLine} />
          </button>
        </div>
      </header>

      {/* Overlay mobile */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Menu mobile drawer */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
        aria-label="Menu mobile"
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileLogoRow}>
          <Logo height="54px" />
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Fermer le menu"
          >
            &times;
          </button>
        </div>

        <ul className={styles.mobileList} role="list">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={styles.mobileLink}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileFooter}>
          <a
            href="tel:+25762003137"
            className={styles.mobileCtaBtn}
            onClick={closeMenu}
          >
            <PhoneIcon size={18} />
            <span>+257 62 003 137</span>
          </a>
        </div>
      </nav>
    </>
  );
}