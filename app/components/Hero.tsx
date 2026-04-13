import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden bg-[#2C1F14]"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1559599101-f09722fb4948?w=1800&q=90"
          alt="Dra. Mirela Albuquerque - Tricologista"
          fill
          className="object-cover object-center opacity-50"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1108]/80 via-[#2C1F14]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1108]/70 via-transparent to-transparent" />
      </div>

      {/* Decorative side line */}
      <div className="absolute left-[3.5rem] top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-10">
        <div className="w-px h-32 bg-gradient-to-b from-transparent to-[#C9A97A]" />
        <span
          className="text-[#C9A97A] text-[0.5rem] tracking-[0.35em] uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Tricologia
        </span>
        <div className="w-px h-32 bg-gradient-to-t from-transparent to-[#C9A97A]" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 pb-20 pt-40">
        <div className="max-w-3xl">
          <p className="eyebrow mb-6 text-[#C9A97A] animate-reveal-up">
            Dra. Mirela Albuquerque · CRM-PE
          </p>

          <h1
            className="heading-display text-[clamp(3.5rem,8vw,7rem)] text-[#FDFAF5] mb-8 animate-reveal-up delay-100"
          >
            Saúde e beleza{' '}
            <span className="italic text-[#C9A97A]">do seu cabelo</span>{' '}
            começa aqui.
          </h1>

          <p
            className="text-[#FAF4E8]/75 text-[1.0625rem] leading-relaxed max-w-xl mb-12 animate-reveal-up delay-200"
          >
            Especialista em tricologia, com olhar clínico preciso e abordagem
            humanizada. Diagnóstico, tratamento e prevenção das doenças do couro
            cabeludo e queda de cabelo.
          </p>

          <div className="flex flex-wrap gap-4 animate-reveal-up delay-300">
            <a href="#contato" className="btn-gold">
              Agendar Consulta <ArrowRight size={15} />
            </a>
            <a href="#sobre" className="btn-ghost-white">
              Conhecer a Dra. Mirela
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 pt-10 border-t border-[rgba(201,169,122,0.2)] grid grid-cols-2 md:grid-cols-4 gap-8 animate-reveal-up delay-400"
        >
          {[
            { value: '5.000+', label: 'Pacientes atendidos' },
            { value: '8 anos', label: 'De experiência clínica' },
            { value: '98%', label: 'Satisfação reportada' },
            { value: 'Recife', label: 'Pernambuco — PE' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-[2rem] font-light text-[#C9A97A] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-[#FAF4E8]/60 text-xs tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 flex flex-col items-center gap-2 hidden md:flex">
        <span className="text-[#C9A97A] text-[0.5rem] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C9A97A] to-transparent animate-float" />
      </div>
    </section>
  )
}
