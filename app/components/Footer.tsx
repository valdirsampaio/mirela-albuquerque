import { Instagram, Heart } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Tratamentos', href: '#tratamentos' },
  { label: 'Processo', href: '#processo' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const TREATMENTS_LINKS = [
  'Alopecia Androgenética',
  'Queda de Cabelo',
  'Tricoscopia',
  'PRP Capilar',
  'Mesoterapia Capilar',
  'Doenças do Couro Cabeludo',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#1A1108] border-t border-[rgba(201,169,122,0.12)]">
      {/* Top section */}
      <div className="container-site py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-[1.6rem] font-light text-[#FDFAF5] mb-1">
              Mirela Albuquerque
            </p>
            <p className="eyebrow text-[#C9A97A] mb-5">Médica Tricologista</p>
            <p className="text-[#FAF4E8]/45 text-sm leading-relaxed max-w-xs mb-6">
              Especialista em saúde capilar, dedicada a oferecer diagnóstico
              preciso e tratamentos individualizados com ciência e cuidado humano.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/mirela_albuquerque"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,169,122,0.25)] flex items-center justify-center text-[#C9A97A] hover:border-[#C9A97A] hover:bg-[rgba(201,169,122,0.08)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={15} strokeWidth={1.5} />
              </a>
              <a
                href="https://wa.me/5581999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[rgba(201,169,122,0.25)] flex items-center justify-center text-[#C9A97A] hover:border-[#C9A97A] hover:bg-[rgba(201,169,122,0.08)] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="eyebrow text-[#C9A97A] mb-5">Navegação</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF4E8]/45 text-sm hover:text-[#C9A97A] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <p className="eyebrow text-[#C9A97A] mb-5">Tratamentos</p>
            <ul className="space-y-3">
              {TREATMENTS_LINKS.map((t) => (
                <li key={t}>
                  <a
                    href="#tratamentos"
                    className="text-[#FAF4E8]/45 text-sm hover:text-[#C9A97A] transition-colors duration-300"
                  >
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gold divider */}
      <div className="gold-line opacity-20" />

      {/* Bottom bar */}
      <div className="container-site py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-[#FAF4E8]/30 text-xs">
          © {year} Dra. Mirela Albuquerque. Todos os direitos reservados.
        </p>
        <p className="text-[#FAF4E8]/30 text-xs flex items-center gap-1.5">
          CRM-PE [número a confirmar] | Tricologista
        </p>
        <p className="text-[#FAF4E8]/20 text-xs flex items-center gap-1">
          Feito com <Heart size={10} className="text-[#C9A97A] fill-[#C9A97A]" /> em Recife
        </p>
      </div>
    </footer>
  )
}
