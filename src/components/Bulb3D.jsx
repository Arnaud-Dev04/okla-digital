import styles from "./Bulb3D.module.css";

/*
  Ampoule 3D animee - inspiree du logo OKLA Digital
  - Forme ampoule (teardrop) en or avec effet 3D (degrade radial, reflet, ombre)
  - Reseau de noeuds connectes a l interieur (or + navy)
  - Culot/socket or en bas avec bandes
  - Animations CSS : flottement, halo pulsant, rotation legere des noeuds
  - Aucun texte
*/

export default function Bulb3D() {
  // Noeuds a l interieur de l ampoule (cx, cy, r, opacity)
  const nodes = [
    // Rangee haute
    [200, 90,  8, 1.0],
    [155, 115, 7, 0.9],
    [245, 110, 7, 0.9],
    [175, 140, 6, 0.85],
    [225, 138, 7, 0.9],
    [200, 145, 5, 0.8],
    // Milieu
    [145, 165, 8, 1.0],
    [170, 170, 6, 0.85],
    [200, 175, 9, 1.0],
    [228, 168, 6, 0.85],
    [255, 160, 7, 0.9],
    // Bas ampoule
    [160, 198, 7, 0.9],
    [200, 205, 8, 1.0],
    [238, 195, 6, 0.85],
    [178, 225, 6, 0.8],
    [222, 222, 6, 0.8],
    [200, 238, 5, 0.75],
  ];

  // Connexions entre noeuds [indexA, indexB]
  const edges = [
    [0,1],[0,2],[0,4],[1,3],[2,4],[3,5],[4,5],[3,6],[5,8],
    [6,7],[7,8],[8,9],[9,10],[6,11],[7,11],[8,12],[9,12],
    [10,13],[11,14],[12,14],[12,15],[13,15],[14,16],[15,16],
  ];

  return (
    <div className={styles.wrapper} aria-hidden="true">
      {/* Halo externe pulse */}
      <div className={styles.halo}/>

      <svg
        className={styles.svg}
        viewBox="0 0 400 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degrade 3D pour le globe de l ampoule */}
          <radialGradient id="bulbGrad" cx="38%" cy="32%" r="60%">
            <stop offset="0%"   stopColor="#fffbe8" stopOpacity="0.22"/>
            <stop offset="35%"  stopColor="#f5d87a" stopOpacity="0.10"/>
            <stop offset="70%"  stopColor="#c99b3a" stopOpacity="0.06"/>
            <stop offset="100%" stopColor="#7a5c1a" stopOpacity="0.08"/>
          </radialGradient>

          {/* Degrade socket */}
          <linearGradient id="socketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#e8b84b"/>
            <stop offset="50%"  stopColor="#c99b3a"/>
            <stop offset="100%" stopColor="#8a6520"/>
          </linearGradient>

          {/* Degrade noeud */}
          <radialGradient id="nodeGrad" cx="35%" cy="30%" r="65%">
            <stop offset="0%"   stopColor="#fff8dc"/>
            <stop offset="100%" stopColor="#c99b3a"/>
          </radialGradient>

          {/* Reflet haut-gauche */}
          <radialGradient id="shineGrad" cx="30%" cy="25%" r="40%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </radialGradient>

          {/* Ombre portee */}
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="12"
              floodColor="#c99b3a" floodOpacity="0.35"/>
          </filter>

          {/* Filtre lueur pour les noeuds */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>

          {/* Clip ampoule interieur */}
          <clipPath id="bulbClip">
            <path d="M200 55 C145 55 98 100 98 162
              C98 200 116 230 142 252
              L148 295 L252 295 L258 252
              C284 230 302 200 302 162
              C302 100 255 55 200 55Z"/>
          </clipPath>
        </defs>

        {/* ── Ombre sous l ampoule ── */}
        <ellipse cx="200" cy="430" rx="70" ry="10"
          fill="#c99b3a" fillOpacity="0.15"/>

        {/* ── Corps ampoule - remplissage 3D ── */}
        <g filter="url(#shadow)">
          {/* Fond couleur */}
          <path
            d="M200 55 C145 55 98 100 98 162
               C98 200 116 230 142 252
               L148 295 L252 295 L258 252
               C284 230 302 200 302 162
               C302 100 255 55 200 55Z"
            fill="url(#bulbGrad)"
            stroke="#c99b3a"
            strokeWidth="2.5"
          />

          {/* Contour lumineux */}
          <path
            d="M200 55 C145 55 98 100 98 162
               C98 200 116 230 142 252
               L148 295 L252 295 L258 252
               C284 230 302 200 302 162
               C302 100 255 55 200 55Z"
            fill="none"
            stroke="#e8b84b"
            strokeWidth="1.2"
            strokeOpacity="0.6"
          />
        </g>

        {/* ── Reseau de connexions a l interieur ── */}
        <g clipPath="url(#bulbClip)">
          {/* Lignes de connexion */}
          {edges.map(([a, b], i) => (
            <line
              key={i}
              x1={nodes[a][0]} y1={nodes[a][1]}
              x2={nodes[b][0]} y2={nodes[b][1]}
              stroke="#c99b3a"
              strokeWidth="1"
              strokeOpacity="0.45"
            />
          ))}

          {/* Noeuds */}
          {nodes.map(([cx, cy, r, op], i) => (
            <g key={i} filter="url(#glow)">
              {/* Cercle navy de fond */}
              <circle cx={cx} cy={cy} r={r + 2}
                fill="#0e2340" fillOpacity={op * 0.9}/>
              {/* Cercle or dessus */}
              <circle cx={cx} cy={cy} r={r}
                fill="url(#nodeGrad)" fillOpacity={op}/>
              {/* Point blanc central */}
              <circle cx={cx - r*0.25} cy={cy - r*0.25} r={r * 0.28}
                fill="#ffffff" fillOpacity={0.6}/>
            </g>
          ))}
        </g>

        {/* ── Reflet 3D (shine) ── */}
        <ellipse cx="158" cy="120" rx="38" ry="52"
          fill="url(#shineGrad)"
          transform="rotate(-20, 158, 120)"/>

        {/* ── Socket / Culot ── */}
        {/* Partie haute du socket */}
        <path d="M148 295 L252 295 L246 310 L154 310Z"
          fill="url(#socketGrad)" strokeWidth="0"/>
        {/* Bandes du culot */}
        <rect x="152" y="312" width="96" height="10" rx="2"
          fill="url(#socketGrad)" opacity="0.9"/>
        <rect x="156" y="325" width="88" height="10" rx="2"
          fill="url(#socketGrad)" opacity="0.8"/>
        <rect x="160" y="338" width="80" height="10" rx="2"
          fill="url(#socketGrad)" opacity="0.7"/>
        {/* Base du culot */}
        <path d="M162 350 L238 350 L234 360 L166 360Z"
          fill="url(#socketGrad)" opacity="0.85"/>

        {/* ── Reflet lateral droit (effet 3D) ── */}
        <path
          d="M270 130 C290 160 295 200 278 240 L262 250"
          stroke="#e8b84b" strokeWidth="1.5"
          strokeOpacity="0.2" strokeLinecap="round" fill="none"/>

        {/* ── Rayon lumineux haut ── */}
        <line x1="200" y1="35" x2="200" y2="15"
          stroke="#e8b84b" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5"/>
        <line x1="240" y1="45" x2="256" y2="28"
          stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
        <line x1="160" y1="45" x2="144" y2="28"
          stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.4"/>
        <line x1="275" y1="90" x2="295" y2="82"
          stroke="#e8b84b" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
        <line x1="125" y1="90" x2="105" y2="82"
          stroke="#e8b84b" strokeWidth="1.2" strokeLinecap="round" strokeOpacity="0.3"/>
      </svg>
    </div>
  );
}