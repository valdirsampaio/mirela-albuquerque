'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NAV_ITEMS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#FDFAF5]/95 backdrop-blur-md border-b border-[rgba(201,169,122,0.2)] py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-site flex items-center justify-between">
          {/* Logo */}
          <Link href="#inicio" className="group flex flex-col leading-none">
            <span
              className="font-display text-[1.45rem] font-light tracking-tight text-[#2C1F14] transition-colors group-hover:text-[#9E7A42]"
            >
              Mirela Albuquerque
            </span>
            <span className="eyebrow mt-0.5 tracking-widest">Tricologista</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.slice(1).map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <a
            href="#contato"
            className="hidden lg:inline-flex btn-gold text-[0.6rem] py-3 px-5"
          >
            Agendar Consulta
          </a>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#2C1F14]"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[#FDFAF5] pt-24 pb-10 px-8 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="font-display text-3xl font-light text-[#2C1F14] hover:text-[#9E7A42] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto">
          <a href="#contato" onClick={handleLinkClick} className="btn-gold w-full justify-center">
            Agendar Consulta
          </a>
        </div>
      </div>
    </>
  )
}
