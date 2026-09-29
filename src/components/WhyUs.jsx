import styles from "./WhyUs.module.css";

const PersonIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="36" height="36">
    <circle cx="24" cy="18" r="8" stroke="#f5a623" strokeWidth="2"/>
    <path d="M8 42 C8 33 15 27 24 27 C33 27 40 33 40 42" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="36" height="36">
    <path d="M8 36 L16 24 L24 28 L32 16 L40 10" stroke="#f5a623" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="40" cy="10" r="3" fill="#f5a623"/>
  </svg>
);
const CoinIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="36" height="36">
    <circle cx="24" cy="24" r="18" stroke="#f5a623" strokeWidth="2.2" />
    <path d="M24 11v26" stroke="#f5a623" strokeWidth="2.4" strokeLinecap="round" />
    <path
      d="M29 18.5h-5.5a3.5 3.5 0 0 0 0 7h2a3.5 3.5 0 0 1 0 7H19"
      stroke="#f5a623"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const REASONS = [
  {
    title: "Interlocuteur unique",
    desc: "Un seul contact d\u00e9di\u00e9 suit votre projet de A \u00e0 Z. Fini les interm\u00e9diaires, vous avez toujours la bonne personne disponible, directement joignable.",
    Icon: PersonIcon,
  },
  {
    title: "R\u00e9sultats mesurables",
    desc: "Chaque action est track\u00e9e et report\u00e9e. Rapport mensuel clair\u00a0: port\u00e9e, clics, conversions. Vous savez exactement ce que votre investissement rapporte.",
    Icon: ChartIcon,
  },
  {
    title: "Adapt\u00e9 \u00e0 votre budget",
    desc: "Pas de formule impos\u00e9e. Nous construisons une strat\u00e9gie efficace selon vos moyens, petite entreprise ou PME avec un maximum de retour sur investissement.",
    Icon: CoinIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="pourquoi" className={styles.whyUs} aria-labelledby="whyus-heading">
      <div className="container">
        <div className={styles.headerRow}>
          <p className="section-label">Pourquoi nous choisir</p>
          <h2 id="whyus-heading" className="section-title">
            Notre diff&eacute;rence,<br />
            <span className={styles.accent}>en 3 engagements concrets</span>
          </h2>
        </div>
        <ul className={styles.grid} role="list">
          {REASONS.map(({ title, desc, Icon }) => (
            <li key={title} className={styles.card}>
              <div className={styles.iconWrap}><Icon /></div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}