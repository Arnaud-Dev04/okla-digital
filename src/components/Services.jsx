import styles from "./Services.module.css";
import imgSocial   from "../assets/service_social.jpg";
import imgAds      from "../assets/service_ads.jpg";
import imgBranding from "../assets/service_branding.jpg";
import imgWeb      from "../assets/service_web.jpg";
import imgSeo      from "../assets/service_seo.jpg";

const SERVICES = [
  {
    num: "01",
    img: imgSocial,
    imgAlt: "Gestion des réseaux sociaux pour entreprise au Burundi",
    badge: "Facebook · Instagram · TikTok",
    title: "Réseaux sociaux & Contenu",
    desc: "Gestion complète de vos comptes, création de contenus engageants (visuels, vidéos, captions) et mesure d’impact sur vos ventes et votre notoriété.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="28" height="28">
        <circle cx="10" cy="24" r="5" stroke="#f5a623" strokeWidth="2.2"/>
        <circle cx="38" cy="10" r="5" stroke="#f5a623" strokeWidth="2.2"/>
        <circle cx="38" cy="38" r="5" stroke="#f5a623" strokeWidth="2.2"/>
        <line x1="14.5" y1="21.5" x2="33.5" y2="13" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
        <line x1="14.5" y1="26.5" x2="33.5" y2="35" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    img: imgAds,
    imgAlt: "Campagnes Google Ads et publicité digitale ciblée",
    badge: "Google Ads · Meta Ads",
    title: "Google & Paid Ads",
    desc: "Campagnes publicitaires ciblées sur Google et les réseaux sociaux, optimisées pour maximiser votre retour sur investissement et attirer des clients qualifiés.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="28" height="28">
        <path d="M24 10 L34 26 L30 26 L30 38 L18 38 L18 26 L14 26Z" stroke="#f5a623" strokeWidth="2.2" strokeLinejoin="round"/>
        <path d="M10 38 Q14 28 24 26 Q34 28 38 38" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.5"/>
      </svg>
    ),
  },
  {
    num: "03",
    img: imgBranding,
    imgAlt: "Création d’identité visuelle et charte graphique",
    badge: "Logo · Charte · Supports",
    title: "Branding & Design",
    desc: "Création d’identité visuelle complète : logo, charte graphique, supports print et digitaux pour une image de marque cohérente, élégante et mémorable.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="28" height="28">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="#f5a623" strokeWidth="2.2"/>
        <circle cx="18" cy="20" r="4" stroke="#f5a623" strokeWidth="2"/>
        <path d="M8 33 L18 22 L26 30 L32 24 L40 33" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: "04",
    img: imgWeb,
    imgAlt: "Création de site web responsive et professionnel",
    badge: "Vitrine · E-commerce · Landing",
    title: "Création de sites web",
    desc: "Sites web modernes, rapides et adaptés à tous les écrans (mobiles, tablettes, ordinateurs) avec un design soigné centré sur la conversion.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="28" height="28">
        <rect x="6" y="10" width="36" height="28" rx="4" stroke="#f5a623" strokeWidth="2.2"/>
        <line x1="6" y1="18" x2="42" y2="18" stroke="#f5a623" strokeWidth="2"/>
        <circle cx="11" cy="14" r="1.5" fill="#f5a623"/>
        <circle cx="16" cy="14" r="1.5" fill="#f5a623"/>
        <circle cx="21" cy="14" r="1.5" fill="#f5a623"/>
        <path d="M13 26 L22 26 M13 31 L19 31" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "05",
    img: imgSeo,
    imgAlt: "Référencement naturel SEO et visibilité Google",
    badge: "SEO · Audit · Mots-clés",
    title: "Référencement SEO",
    desc: "Audit technique, recherche de mots-clés et optimisation complète pour hisser votre entreprise en tête des résultats de recherche sur Google.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" width="28" height="28">
        <circle cx="21" cy="21" r="13" stroke="#f5a623" strokeWidth="2.2"/>
        <path d="M30 30 L40 40" stroke="#f5a623" strokeWidth="2.8" strokeLinecap="round"/>
        <path d="M16 21 L26 21 M21 16 L21 26" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-heading">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">Nos services</p>
          <h2 id="services-heading" className="section-title">
            Ce que nous faisons <span className={styles.accent}>pour vous</span>
          </h2>
          <p className="section-desc">
            Des solutions digitales sur-mesure pour renforcer votre présence en ligne,
            attirer vos clients cibles et développer durablement votre activité.
          </p>
        </div>
        <ul className={styles.grid} role="list">
          {SERVICES.map(({ num, img, imgAlt, badge, title, desc, icon }) => (
            <li key={num} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={img} alt={imgAlt} className={styles.cardImg} loading="lazy" />
                <div className={styles.imgOverlay} aria-hidden="true" />
                <span className={styles.numBadge} aria-hidden="true">{num}</span>
                <span className={styles.imgBadge}>{badge}</span>
              </div>
              <div className={styles.cardBody}>
                <div className={styles.iconWrap}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}