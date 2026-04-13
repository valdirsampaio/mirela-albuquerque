import styles from './Hero.module.css'

const WA = 'https://wa.me/5581999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.'

/* Replace src with Dra. Mirela's real photo */
const HERO_IMG = 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=900&q=90'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>

      {/* Image — left column */}
      <div className={styles.imgCol}>
        <div className="stripe-left" aria-hidden="true" />
        <img src={HERO_IMG} alt="Dra. Mirela Albuquerque — Tricologista" className={styles.img} />
      </div>

      {/* Text — right column */}
      <div className={styles.textCol}>
        <div className={`${styles.eyebrowRow} anim-up`}>
          <div className="divider" />
          <span className="eyebrow">Tricologia · Recife — PE</span>
        </div>

        <h1 className={`${styles.title} anim-up d1`}>
          Dra. Mirela<br />
          <em>Albuquerque</em>
        </h1>

        <p className={`${styles.sub} anim-up d2`}>
          Pós-graduada em Tricologia. Especialista em queda de cabelo,
          alopecias e transplante de sobrancelhas. Anestesiologista.
        </p>

        {/* Minimal text actions */}
        <div className={`${styles.actions} anim-up d3`}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-text-rose">
            Entrar em contato
          </a>
          <span className={styles.dot} aria-hidden="true" />
          <a href="#sobre" className="btn-text-muted">
            Conheça a médica
          </a>
        </div>

        {/* Meta strip */}
        <div className={`${styles.meta} anim-up d4`}>
          {[
            { label: 'CRM-PE',       value: '16392' },
            { label: 'RQE',          value: '3555'  },
            { label: 'Pós-graduação', value: 'Tricologia' },
          ].map((m, i) => (
            <div key={m.label} className={styles.metaItem}>
              <span className={`eyebrow ${styles.metaLabel}`}>{m.label}</span>
              <span className={styles.metaValue}>{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
