import styles from './Hero.module.css'

const WA = 'https://wa.me/5581999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.'
const HERO_IMG = 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=92&fit=crop&crop=top'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <div className={styles.imgCol}>
        <div className={styles.stripe} aria-hidden="true" />
        <img src={HERO_IMG} alt="Dra. Mirela Albuquerque — Tricologista" className={styles.img} />
        <div className={styles.imgOverlay} aria-hidden="true" />
      </div>

      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <div className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>Tricologia · Recife — PE</span>
        </div>

        <h1 className={styles.title}>
          Dra. Mirela<br /><em>Albuquerque</em>
        </h1>

        <p className={styles.sub}>
          Pós-graduada em Tricologia. Especialista em queda de cabelo,
          alopecias e transplante de sobrancelhas. Anestesiologista.
        </p>

        <div className={styles.actions}>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Agendar Consulta <span className={styles.arrow}>→</span>
          </a>
          <a href="#especialidades" className={styles.btnOutline}>
            Conhecer a Dra. Mirela
          </a>
        </div>

        {/* Meta — single subtle line */}
        <p className={styles.meta}>
          CRM-PE 16392 &nbsp;·&nbsp; RQE 3555 &nbsp;·&nbsp; Tricologia &nbsp;·&nbsp; Anestesiologista
        </p>
      </div>
    </section>
  )
}
