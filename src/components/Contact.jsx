import styles from "./Contact.module.css";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CONTACT_INFO = [
  { label: "Téléphone", value: "+257 62 003 137",             href: "tel:+25762003137",               Icon: PhoneIcon },
  { label: "Email",      value: "ntwariandymeril@gmail.com",       href: "mailto:ntwariandymeril@gmail.com", Icon: EmailIcon,
    note: "Email professionnel en cours de configuration" },
  { label: "Adresse",    value: "Q. Industriel, Chaussée d’Uvira N°72 — Bujumbura, Burundi",
    href: "https://maps.google.com/?q=Q.+Industriel+Chaussee+Uvira+Bujumbura+Burundi",
    external: true, Icon: MapPinIcon },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Contact</p>
          <h2 id="contact-heading" className="section-title">
            Parlons de votre <span className={styles.accent}>projet</span>
          </h2>
          <p className="section-desc">
            Vous avez un projet en tête ? Nous sommes disponibles pour un premier
            échange sans engagement. Appelez-nous ou écrivez-nous directement &mdash;
            réponse garantie sous 24h.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <ul className={styles.infoList} role="list">
              {CONTACT_INFO.map(({ label, value, href, note, external, Icon }) => (
                <li key={label} className={styles.infoItem}>
                  <div className={styles.infoIcon}><Icon /></div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{label}</span>
                    <a href={href} className={styles.infoValue}
                      {...(external ? { target:"_blank", rel:"noopener noreferrer" } : {})}>
                      {value}
                    </a>
                    {note && <span className={styles.infoNote}>{note}</span>}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.emailCard}>
            <div className={styles.emailCardIcon}>
              <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="56" height="56">
                <rect x="4" y="10" width="40" height="28" rx="5" stroke="#f5a623" strokeWidth="2.2"/>
                <path d="M4 14 L24 27 L44 14" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className={styles.emailCardTitle}>Écrire un email</h3>
            <p className={styles.emailCardDesc}>
              Décrivez votre projet, vos besoins et votre budget.
              Nous vous répondons <strong>sous 24h</strong>.
            </p>
            <a href="mailto:ntwariandymeril@gmail.com?subject=Demande%20de%20devis%20OKLA%20Digital"
              className={styles.emailBtn}>
              <EmailIcon /> <span>Envoyer un email</span>
            </a>
            <div className={styles.orDivider} aria-hidden="true"><span>ou appelez directement</span></div>
            <a href="tel:+25762003137" className={styles.phoneLink}>
              <PhoneIcon /> <span>+257 62 003 137</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}