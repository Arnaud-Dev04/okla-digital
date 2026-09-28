import { useState, useEffect, useCallback } from "react";
import Logo from "./Logo";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#accueil",  label: "Accueil" },
  { href: "#apropos",  label: "À propos de nous" },
  { href: "#services", label: "Nos services" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#contact",  label: "Contact" },
];

const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
    strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
      A19.5 19.5 0 0 1 4.13 13a19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81
      a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27
      a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);

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
          <a href="#accueil" aria-label="OKLA Digital - Accueil"
            className={styles.logoLink} onClick={closeMenu}>
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
          <a href="tel:+25762003137" className={styles.ctaBtn}
            aria-label="Appeler OKLA Digital">
            <PhoneIcon />
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
            <PhoneIcon />
            <span>+257 62 003 137</span>
          </a>
        </div>
      </nav>
    </>
  );
}