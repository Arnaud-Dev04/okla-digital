import styles from "./Contact.module.css";
import { PhoneIcon, EmailIcon, MapPinIcon } from "./Icons";

const CONTACT_INFO = [
  {
    label: "Téléphone",
    value: "+257 62 003 137",
    href: "tel:+25762003137",
    Icon: PhoneIcon,
  },
  {
    label: "Email",
    value: "ntwariandymeril@gmail.com",
    href: "mailto:ntwariandymeril@gmail.com",
    Icon: EmailIcon,
    note: "Email professionnel en cours de configuration",
  },
  {
    label: "Adresse",
    value: "Q.Industriel, Chaussée d’Uvira N°72 Bujumbura,Burundi",
    href: "https://maps.google.com/?q=Q.+Industriel+Chaussee+Uvira+Bujumbura+Burundi",
    external: true,
    Icon: MapPinIcon,
  },
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
            échange sans engagement. Appelez-nous ou écrivez-nous directement,
            réponse garantie sous 24h.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <ul className={styles.infoList} role="list">
              {CONTACT_INFO.map(({ label, value, href, note, external, Icon }) => (
                <li key={label} className={styles.infoItem}>
                  <div className={styles.infoIcon}>
                    <Icon size={22} />
                  </div>
                  <div className={styles.infoText}>
                    <span className={styles.infoLabel}>{label}</span>
                    <a
                      href={href}
                      className={styles.infoValue}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
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
              <EmailIcon size={48} />
            </div>
            <h3 className={styles.emailCardTitle}>Écrire un email</h3>
            <p className={styles.emailCardDesc}>
              Décrivez votre projet, vos besoins et votre budget.
              Nous vous répondons <strong>sous 24h</strong>.
            </p>
            <a
              href="mailto:ntwariandymeril@gmail.com?subject=Demande%20de%20devis%20OKLA%20Digital"
              className={styles.emailBtn}
            >
              <EmailIcon size={18} />
              <span>Envoyer un email</span>
            </a>
            <div className={styles.orDivider} aria-hidden="true">
              <span>ou appelez directement</span>
            </div>
            <a href="tel:+25762003137" className={styles.phoneLink}>
              <PhoneIcon size={18} />
              <span>+257 62 003 137</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}