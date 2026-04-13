import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const CREDENTIALS = [
  'Médica formada pela Universidade Federal de Pernambuco (UFPE)',
  'Especialista em Tricologia pela Sociedade Brasileira de Dermatologia',
  'Membro da Sociedade Brasileira de Tricologia (SBTric)',
  'Pós-graduação em Dermatologia com ênfase em doenças do couro cabeludo',
  'Atualização contínua em centros de excelência nacionais e internacionais',
]

export default function About() {
  return (
    <section id="sobre" className="py-28 md:py-36 bg-[#FDFAF5] overflow-hidden">
      <div className="container-site">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="eyebrow mb-4">Sobre a médica</span>
          <span className="section-divider mb-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image column */}
          <div className="relative">
            {/* Decorative frame */}
            <div
              className="absolute -top-6 -left-6 w-full h-full border border-[rgba(201,169,122,0.3)]"
              aria-hidden="true"
            />
            {/* Main image */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=800&q=85"
                alt="Dra. Mirela Albuquerque"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 bg-[#2C1F14] text-[#FAF4E8] p-6 max-w-[220px] hidden md:block"
            >
              <p className="font-display text-3xl font-light text-[#C9A97A] leading-none">8+</p>
              <p className="text-xs tracking-widest uppercase mt-1 text-[#FAF4E8]/70">
                anos dedicados à<br />tricologia clínica
              </p>
            </div>
          </div>

          {/* Text column */}
          <div>
            <h2 className="heading-section text-[clamp(2.5rem,5vw,4rem)] text-[#2C1F14] mb-6">
              Um olhar cuidadoso{' '}
              <em className="italic text-[#9E7A42]">para cada fio.</em>
            </h2>

            <p className="text-[#2C1F14]/70 text-[1.0625rem] leading-relaxed mb-5">
              A Dra. Mirela Albuquerque é médica tricologista dedicada a entender
              a causa raiz dos problemas capilares de cada paciente. Sua formação
              robusta e atualização constante permitem oferecer diagnósticos
              precisos e planos terapêuticos individualizados.
            </p>
            <p className="text-[#2C1F14]/70 text-[1.0625rem] leading-relaxed mb-10">
              Acredita que saúde capilar vai além da estética — é autoestima,
              bem-estar e qualidade de vida. Por isso, cada consulta é conduzida
              com escuta ativa e atenção aos detalhes que fazem a diferença no
              resultado final.
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10">
              {CREDENTIALS.map((cred) => (
                <li key={cred} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-[#B8935A] mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-[#2C1F14]/75 text-sm leading-relaxed">{cred}</span>
                </li>
              ))}
            </ul>

            <a href="#contato" className="btn-outline">
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
