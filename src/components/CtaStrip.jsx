import styles from "./CtaStrip.module.css";
import { PhoneIcon, EmailIcon } from "./Icons";

export default function CtaStrip() {
  return (
    <section className={styles.strip} aria-label="Contactez OKLA Digital">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Prêt à booster votre présence digitale&nbsp;?
          </h2>
          <p className={styles.sub}>
            Premier échange offert, réponse garantie sous 24h.
          </p>
        </div>
        <div className={styles.actions}>
          <a
            href="tel:+25762003137"
            className={styles.btnCall}
            aria-label="Appeler OKLA Digital"
          >
            <PhoneIcon size={18} />
            <span>+257 62 003 137</span>
          </a>
          <a
            href="mailto:ntwariandymeril@gmail.com?subject=Demande%20de%20devis%20OKLA%20Digital"
            className={styles.btnEmail}
            aria-label="Écrire à OKLA Digital"
          >
            <EmailIcon size={18} />
            <span>Écrire un email</span>
          </a>
        </div>
      </div>
    </section>
  );
}