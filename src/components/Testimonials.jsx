import styles from "./Testimonials.module.css";

const StarIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5a623" aria-hidden="true">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const TESTIMONIALS = [
  {
    name: "Jean-Pierre M.",
    role: "Gérant, Commerce Bujumbura",
    text: "OKLA Digital a transformé notre présence sur Facebook. En 2 mois, notre page est passée de 200 à plus de 1 500 abonnés et nos ventes en ligne ont doublé. Équipe sérieuse, professionnelle et très réactive.",
    stars: 5,
    initial: "J",
  },
  {
    name: "Amina K.",
    role: "Directrice, ONG Burundi Impact",
    text: "Nous avions besoin d’un site web moderne pour nos partenaires internationaux. OKLA Digital a livré en 3 semaines un site élégant, rapide et parfaitement bilingue. Très satisfaite du résultat.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Patrick N.",
    role: "Entrepreneur, Import-Export",
    text: "Leur gestion des campagnes publicitaires est remarquable. J’ai commencé à recevoir des demandes de nouveaux clients dès la première semaine. Les rapports mensuels sont clairs et honnêtes.",
    stars: 5,
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} aria-labelledby="testi-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Témoignages</p>
          <h2 id="testi-heading" className="section-title">
            Ce que disent <span className={styles.accent}>nos clients</span>
          </h2>
        </div>
        <ul className={styles.grid} role="list">
          {TESTIMONIALS.map(({ name, role, text, stars, initial }) => (
            <li key={name} className={styles.card}>
              <div className={styles.stars} aria-label={`${stars} étoiles sur 5`}>
                {Array.from({ length: stars }).map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className={styles.quote}>&ldquo;{text}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{initial}</div>
                <div>
                  <p className={styles.authorName}>{name}</p>
                  <p className={styles.authorRole}>{role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}