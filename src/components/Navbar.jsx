import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Sobre',         href: '#sobre' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Depoimentos',   href: '#depoimentos' },
  { label: 'FAQ',           href: '#faq' },
]

const WA = 'https://wa.me/5581999999999?text=Olá%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`wrap ${styles.inner}`}>

          {/* Logo */}
          <a href="#inicio" className={styles.logo} onClick={() => setOpen(false)}>
            <span className={styles.logoName}>Mirela Albuquerque</span>
            <span className={styles.logoSub}>Tricologista · CRM 16392</span>
          </a>

          {/* Desktop links */}
          <nav className={styles.links}>
            {LINKS.map(l => (
              <a key={l.href} href={l.href} className={styles.link}>{l.label}</a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.cta}>
              Entrar em contato
            </a>
          </nav>

          {/* Mobile toggle */}
          <button className={styles.toggle} onClick={() => setOpen(v => !v)} aria-label="Menu">
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileLinks}>
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className={styles.mobileCta} onClick={() => setOpen(false)}>
          Entrar em contato
        </a>
      </div>
    </>
  )
}
