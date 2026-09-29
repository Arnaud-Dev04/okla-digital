import Logo from "./Logo";
import styles from "./Footer.module.css";
import { PhoneIcon, EmailIcon, MapPinIcon, WhatsAppIcon, InstagramIcon } from "./Icons";

const YEAR = new Date().getFullYear();

const NAV_LINKS = [
  { href: "#accueil",  label: "Accueil" },
  { href: "#apropos",  label: "À propos de nous" },
  { href: "#services", label: "Nos services" },
  { href: "#pourquoi", label: "Pourquoi nous" },
  { href: "#contact",  label: "Contact" },
];

const SOCIAL = [
  {
    href: "https://wa.me/25762003137",
    Icon: WhatsAppIcon,
    label: "WhatsApp OKLA Digital",
  },
  {
    href: "https://www.instagram.com/okladigital?stkn=NjdmejZ5Mm82cnc=",
    Icon: InstagramIcon,
    label: "Instagram OKLA Digital",
  },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>

        {/* Colonne marque */}
        <div className={styles.brand}>
          {/* Badge logo ultra lisible sur fond blanc avec liseré or */}
          <div className={styles.logoCard}>
            <Logo height="52px" alt="OKLA Digital" />
          </div>
          <p className={styles.brandDesc}>
            Agence de marketing digital bas&eacute;e &agrave; Bujumbura, Burundi.
            Nous aidons les entreprises &agrave; grandir en ligne avec des r&eacute;sultats mesurables.
          </p>

          {/* Réseaux sociaux : WhatsApp & Instagram uniquement */}
          <div className={styles.socials} aria-label="R&eacute;seaux sociaux">
            {SOCIAL.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation rapide */}
        <div className={styles.navCol}>
          <p className={styles.colTitle}>Navigation</p>
          <ul className={styles.navList} role="list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.navLink}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact rapide avec icônes modernes */}
        <div className={styles.contactCol}>
          <p className={styles.colTitle}>Contact rapide</p>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <PhoneIcon size={16} />
            </div>
            <a href="tel:+25762003137" className={styles.contactLink}>
              +257 62 003 137
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <EmailIcon size={16} />
            </div>
            <a href="mailto:ntwariandymeril@gmail.com" className={styles.contactLink}>
              ntwariandymeril@gmail.com
            </a>
          </div>

          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <MapPinIcon size={16} />
            </div>
            <span className={styles.contactText}>
              Q. Industriel, Chauss&eacute;e d&apos;Uvira N&deg;72,<br />Bujumbura, Burundi
            </span>
          </div>
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