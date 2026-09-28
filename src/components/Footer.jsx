import Logo from "./Logo";
import styles from "./Footer.module.css";

const YEAR = new Date().getFullYear();

const FacebookIcon  = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const InstagramIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>);
const LinkedinIcon  = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>);
const WhatsAppIcon  = () => (<svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.73 1.78 6.72L2 30l7.5-1.96A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm6.94 19.34c-.29.82-1.7 1.57-2.33 1.67-.61.1-1.38.14-2.22-.14-.51-.17-1.17-.39-2-.76-3.52-1.52-5.82-5.07-5.99-5.31-.17-.23-1.38-1.84-1.38-3.51s.87-2.49 1.18-2.83c.31-.34.67-.43.9-.43.22 0 .45.01.65.01.21 0 .49-.08.76.58.29.69.98 2.37 1.06 2.54.09.17.14.37.03.6-.11.22-.17.36-.33.55-.17.2-.35.44-.5.59-.17.17-.34.35-.15.68.2.34.87 1.43 1.87 2.31 1.28 1.14 2.36 1.5 2.7 1.67.34.17.54.14.74-.08.2-.23.86-1 1.09-1.34.22-.34.45-.28.76-.17.31.11 1.97.93 2.31 1.1.34.17.57.25.65.39.09.14.09.82-.2 1.63z"/></svg>);

const NAV_LINKS = [
  { href: "#accueil",  label: "Accueil" },
  { href: "#apropos",  label: "À propos de nous" },
  { href: "#services", label: "Nos services" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#contact",  label: "Contact" },
];

const SOCIAL = [
  { href: "https://facebook.com/okladigital",         Icon: FacebookIcon,  label: "Facebook" },
  { href: "https://instagram.com/okladigital",        Icon: InstagramIcon, label: "Instagram" },
  { href: "https://linkedin.com/company/okladigital", Icon: LinkedinIcon,  label: "LinkedIn" },
  { href: "https://wa.me/25762003137",                Icon: WhatsAppIcon,  label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* Colonne marque */}
        <div className={styles.brand}>
          {/* Badge logo ultra lisible sur fond blanc */}
          <div className={styles.logoCard}>
            <Logo height="52px" alt="OKLA Digital" />
          </div>
          <p className={styles.brandDesc}>
            Agence de marketing digital bas&eacute;e &agrave; Bujumbura, Burundi.
            Nous aidons les entreprises &agrave; grandir en ligne avec des r&eacute;sultats mesurables.
          </p>
          <div className={styles.socials} aria-label="R&eacute;seaux sociaux">
            {SOCIAL.map(({ href, Icon, label }) => (
              <a key={label} href={href} className={styles.socialLink}
                target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className={styles.navCol}>
          <p className={styles.colTitle}>Navigation</p>
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}><a href={href} className={styles.navLink}>{label}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact rapide */}
        <div className={styles.contactCol}>
          <p className={styles.colTitle}>Contact rapide</p>
          <p className={styles.contactLine}>
            <span>&#128222;</span>
            <a href="tel:+25762003137" className={styles.contactLink}>+257 62 003 137</a>
          </p>
          <p className={styles.contactLine}>
            <span>&#9993;</span>
            <a href="mailto:ntwariandymeril@gmail.com" className={styles.contactLink}>
              ntwariandymeril@gmail.com
            </a>
          </p>
          <p className={styles.contactLine}>
            <span>&#128205;</span>
            <span className={styles.contactText}>
              Q. Industriel, Chauss&eacute;e d&apos;Uvira N&deg;72,<br />Bujumbura, Burundi
            </span>
          </p>
        </div>

      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>&copy; {YEAR} OKLA Digital. Tous droits r&eacute;serv&eacute;s.</p>
          <p className={styles.tagline}>Votre image, notre expertise.</p>
        </div>
      </div>
    </footer>
  );
}