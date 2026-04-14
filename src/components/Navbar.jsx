import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'Sobre',       href: '#sobre' },
  { label: 'Tratamentos', href: '#especialidades' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ',         href: '#faq' },
  { label: 'Contato',     href: '#contato' },
]

const WA = 'https://wa.me/5581999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.'

/* Nav link style — matches first version exactly */
const linkBase = {
  fontSize: '0.6875rem',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#1C1917',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  position: 'relative',
  paddingBottom: '4px',
  fontWeight: 400,
  fontFamily: "'Outfit', system-ui, sans-serif",
  transition: 'color 0.3s',
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{
        ...linkBase,
        color: hovered ? '#A67C52' : '#1C1917',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {/* Underline that grows from left — first version animation */}
      <span style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '1px',
        background: '#A67C52',
        transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left center',
        transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
        display: 'block',
      }} aria-hidden="true" />
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [mobile, setMobile]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    const onResize = () => setMobile(window.innerWidth < 900)
    onResize()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: scrolled ? 'rgba(250,250,248,0.97)' : '#FAFAF8',
        borderBottom: '1px solid #E2DDD8',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,.05)' : 'none',
        transition: 'background 0.4s, box-shadow 0.4s',
      }}>
        <div style={{
          maxWidth: '1320px',
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px clamp(1.25rem, 5vw, 5rem)',
        }}>

          {/* Logo */}
          <a
            href="#inicio"
            onClick={() => setOpen(false)}
            style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '4px', flexShrink: 0 }}
          >
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
              fontWeight: 400,
              color: '#1C1917',
              letterSpacing: '0.01em',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
            }}>
              Mirela Albuquerque
            </span>
            <span style={{
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '0.5625rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#A67C52',
            }}>
              Tricologista
            </span>
          </a>

          {/* Desktop nav links */}
          {!mobile && (
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(1.5rem, 3vw, 3rem)',
            }}>
              {LINKS.map(l => (
                <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
              ))}
            </nav>
          )}

          {/* Desktop CTA */}
          {!mobile && (
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 24px',
                backgroundColor: '#A67C52',
                color: '#fff',
                fontFamily: "'Outfit', system-ui, sans-serif",
                fontSize: '0.6875rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                border: 'none',
                cursor: 'pointer',
                transition: 'background 0.25s',
                flexShrink: 0,
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#8B6340'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#A67C52'}
            >
              Agendar Consulta
            </a>
          )}

          {/* Mobile hamburger */}
          {mobile && (
            <button
              onClick={() => setOpen(v => !v)}
              aria-label="Menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1C1917', padding: '4px' }}
            >
              {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
            </button>
          )}
        </div>
      </header>

      {/* Mobile overlay */}
      {mobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40,
          backgroundColor: '#FAFAF8',
          display: 'flex', flexDirection: 'column',
          padding: '96px 2rem 3rem',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.4s',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '28px', flex: 1 }}>
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2.5rem', fontWeight: 400,
                  color: '#1C1917', textDecoration: 'none',
                }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              display: 'block', textAlign: 'center',
              backgroundColor: '#A67C52', color: '#fff',
              fontFamily: "'Outfit', system-ui, sans-serif",
              fontSize: '0.6875rem', letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '16px', textDecoration: 'none',
            }}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </>
  )
}
