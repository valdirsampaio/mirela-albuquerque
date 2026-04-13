'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Ana Luíza M.',
    city: 'Recife, PE',
    initials: 'AL',
    rating: 5,
    text: 'A Dra. Mirela foi a primeira médica que realmente investigou a causa da minha queda de cabelo. Depois de meses sem resposta em outros consultórios, em duas consultas ela chegou no diagnóstico correto. Hoje, seis meses depois, meu cabelo está completamente diferente.',
    treatment: 'Alopecia Androgenética',
  },
  {
    name: 'Fernanda C.',
    city: 'Caruaru, PE',
    initials: 'FC',
    rating: 5,
    text: 'Fiz a tricoscopia e foi incrível ver exatamente o que estava acontecendo com meu couro cabeludo. A doutora explicou tudo com muita clareza e paciência. O tratamento com mesoterapia deu resultado muito rápido, em 3 meses já percebi diferença.',
    treatment: 'Mesoterapia Capilar',
  },
  {
    name: 'Mariana S.',
    city: 'Olinda, PE',
    initials: 'MS',
    rating: 5,
    text: 'Sofri muito com a alopecia areata e a Dra. Mirela me deu toda a segurança que eu precisava. Além do tratamento eficaz, ela cuida do emocional do paciente. Sinto que encontrei uma médica de verdade, que se importa com a pessoa, não só com o problema.',
    treatment: 'Alopecia Areata',
  },
  {
    name: 'Juliana B.',
    city: 'Recife, PE',
    initials: 'JB',
    rating: 5,
    text: 'O PRP capilar foi transformador para mim. A Dra. Mirela é extremamente habilidosa no procedimento, quase não senti dor. Os resultados começaram a aparecer no segundo mês e hoje o meu cabelo está mais volumoso do que era há 10 anos.',
    treatment: 'PRP Capilar',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const t = TESTIMONIALS[current]

  return (
    <section id="depoimentos" className="py-28 md:py-36 bg-[#FDFAF5] overflow-hidden">
      <div className="container-site">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="eyebrow mb-4">Depoimentos</span>
          <span className="section-divider mb-4" />
          <h2 className="heading-section text-[clamp(2.5rem,5vw,3.5rem)] text-[#2C1F14] max-w-2xl">
            O que dizem{' '}
            <em className="italic text-[#9E7A42]">nossas pacientes</em>
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[rgba(201,169,122,0.2)] p-10 md:p-14 relative">
            {/* Quotation mark */}
            <span
              className="absolute top-8 right-10 font-display text-[7rem] text-[rgba(201,169,122,0.12)] leading-none select-none"
              aria-hidden="true"
            >
              "
            </span>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="text-[#C9A97A] fill-[#C9A97A]" />
              ))}
            </div>

            {/* Treatment tag */}
            <p className="eyebrow mb-5">{t.treatment}</p>

            {/* Quote */}
            <p className="font-display text-[1.35rem] text-[#2C1F14] leading-relaxed italic mb-8">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#F4E8D0] flex items-center justify-center">
                <span className="font-display text-[0.9rem] font-medium text-[#9E7A42]">
                  {t.initials}
                </span>
              </div>
              <div>
                <p className="font-medium text-[#2C1F14] text-sm">{t.name}</p>
                <p className="text-[#2C1F14]/50 text-xs">{t.city}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prev}
              className="p-3 border border-[rgba(44,31,20,0.2)] hover:border-[#C9A97A] hover:text-[#9E7A42] text-[#2C1F14] transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-1 bg-[#B8935A]'
                      : 'w-4 h-1 bg-[rgba(44,31,20,0.15)] hover:bg-[rgba(44,31,20,0.3)]'
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-[rgba(44,31,20,0.2)] hover:border-[#C9A97A] hover:text-[#9E7A42] text-[#2C1F14] transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
