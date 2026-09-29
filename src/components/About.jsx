import styles from "./About.module.css";

const STATS = [
  { value: "2 ans",  label: "D\u2019experience digitale" },
  { value: "50+",    label: "Projets livres avec succes" },
  { value: "24h",    label: "Delai de reponse garanti" },
];

export default function About() {
  return (
    <section id="apropos" className={styles.about} aria-labelledby="about-heading">
      <div className={"container " + styles.inner}>

        <div className={styles.textCol}>
          <p className="section-label">&Agrave; propos de nous</p>
          <h2 id="about-heading" className="section-title">
            N&eacute;e au Burundi,<br />
            <span className={styles.accent}>port&eacute;e par l&rsquo;ambition digitale</span>
          </h2>
          <p className="section-desc">
            OKLA Digital est une agence de marketing digital bas&eacute;e &agrave; Bujumbura.
            Nous aidons les entreprises locales, commerces, PME, startups et ONG 
            &agrave; construire une pr&eacute;sence en ligne forte, coh&eacute;rente et rentable.
          </p>
          <p className={styles.descMore}>
            Nous ne vendons pas des services g&eacute;n&eacute;riques. Chaque strat&eacute;gie
            est con&ccedil;ue sp&eacute;cifiquement pour votre secteur, votre cible et votre budget.
            Notre engagement&nbsp;: vous apportez des r&eacute;sultats mesurables, pas des promesses vides.
          </p>
          <ul className={styles.valueList}>
            <li>&#10022; Strat&eacute;gie sur-mesure adapt&eacute;e au march&eacute; burundais</li>
            <li>&#10022; Rapports de performance clairs chaque mois</li>
            <li>&#10022; Un seul interlocuteur d&eacute;di&eacute; &agrave; votre compte</li>
          </ul>
        </div>

        <div className={styles.statsCol} aria-label="Chiffres cles OKLA Digital">
          {STATS.map(({ value, label }) => (
            <div key={label} className={styles.statCard}>
              <p className={styles.statValue}>{value}</p>
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
          <div className={styles.trustBadge}>
            <span className={styles.trustIcon}>&#127942;</span>
            <div>
              <p className={styles.trustTitle}>Devis gratuit</p>
              <p className={styles.trustSub}>R&eacute;ponse sous 24h garantie</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}