import styles from "./Hero.module.css";
import { PhoneIcon, ArrowIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="accueil" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.inner}>

        {/* Badge supérieur */}
        <div className={styles.badgeWrap}>
          <span className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Agence de Marketing Digital 
          </span>
        </div>

        {/* Titre percutant */}
        <h1 id="hero-heading" className={styles.heading}>
          Donnez &agrave; votre marque<br />
          <span className={styles.headingAccent}>la visibilit&eacute; qu&apos;elle m&eacute;rite</span>
        </h1>

        {/* Slogan officiel OKLA Digital */}
        <p className={styles.script}>&ldquo;Votre image, notre expertise.&rdquo;</p>

        {/* Description engageante */}
        <p className={styles.desc}>
          OKLA Digital accompagne les entrepreneurs, commerces et PME du Burundi
          dans leur croissance digitale&nbsp;: strat&eacute;gie de contenu, publicit&eacute; cibl&eacute;e,
          identit&eacute; visuelle et cr&eacute;ation de sites web. R&eacute;sultats concrets et budget ma&icirc;tris&eacute;.
        </p>

        {/* Boutons d'action */}
        <div className={styles.actions}>
          <a
            href="tel:+25762003137"
            className={styles.btnPrimary}
            aria-label="Appeler OKLA Digital au +257 62 003 137"
          >
            <PhoneIcon size={18} />
            <span>Appelez-nous gratuitement</span>
          </a>
          <a href="#services" className={styles.btnSecondary}>
            <span>D&eacute;couvrir nos services</span>
            <ArrowIcon size={18} />
          </a>
        </div>

        {/* Badges de confiance */}
        <div className={styles.trustRow} aria-label="Engagements clés">
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>&#10004;</span>
            <span>Strat&eacute;gie 100% sur-mesure</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>&#10004;</span>
            <span>Rapports mensuels transparents</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>&#10004;</span>
            <span>R&eacute;ponse sous 24h garantie</span>
          </div>
        </div>

      </div>

      {/* Vague décorative vers la suite */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" fill="none">
          <path d="M0 35 Q360 70 720 35 Q1080 0 1440 35 L1440 70 L0 70Z" fill="#f5f7fb"/>
        </svg>
      </div>
    </section>
  );
}