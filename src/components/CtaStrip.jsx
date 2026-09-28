import styles from "./CtaStrip.module.css";

const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07
      A19.5 19.5 0 0 1 4.13 13a19.79 19.79 0 0 1-3.07-8.67
      A2 2 0 0 1 3.04 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81
      a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.27-1.27
      a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
);
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

export default function CtaStrip() {
  return (
    <section className={styles.strip} aria-label="Contactez OKLA Digital">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Prêt à booster votre présence digitale&nbsp;?
          </h2>
          <p className={styles.sub}>
            Premier échange offert — réponse garantie sous 24h.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="tel:+25762003137" className={styles.btnCall}
            aria-label="Appeler OKLA Digital">
            <PhoneIcon /> +257 62 003 137
          </a>
          <a href="mailto:ntwariandymeril@gmail.com?subject=Demande%20de%20devis%20OKLA%20Digital"
            className={styles.btnEmail} aria-label="Écrire à OKLA Digital">
            <EmailIcon /> Écrire un email
          </a>
        </div>
      </div>
    </section>
  );
}