import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

const TREATMENTS = [
  {
    slug: 'alopecia',
    title: 'Alopecia',
    subtitle: 'Androgenética & Areata',
    description:
      'Diagnóstico diferencial preciso e tratamento personalizado das diversas formas de alopecia, com protocolos baseados em evidências científicas atualizadas.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    tag: 'Mais procurado',
  },
  {
    slug: 'queda-de-cabelo',
    title: 'Queda de Cabelo',
    subtitle: 'Eflúvio & Telógeno',
    description:
      'Investigação completa das causas da queda capilar excessiva — hormonal, nutricional, estresse ou doenças sistêmicas — com plano terapêutico estruturado.',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80',
  },
  {
    slug: 'doencas-couro-cabeludo',
    title: 'Doenças do Couro Cabeludo',
    subtitle: 'Dermatites & Psoríase',
    description:
      'Avaliação e tratamento de seborreia, dermatite seborreica, psoríase e outras condições inflamatórias que afetam o couro cabeludo e os fios.',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80',
  },
  {
    slug: 'tricoscopia',
    title: 'Tricoscopia',
    subtitle: 'Diagnóstico por imagem',
    description:
      'Exame dermatoscópico do couro cabeludo e dos fios que permite diagnóstico altamente preciso sem necessidade de biópsia na maioria dos casos.',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
  },
  {
    slug: 'prp-capilar',
    title: 'PRP Capilar',
    subtitle: 'Plasma Rico em Plaquetas',
    description:
      'Procedimento minimamente invasivo que utiliza fatores de crescimento do próprio paciente para estimular o bulbo capilar e frear a queda de cabelo.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80',
  },
  {
    slug: 'mesoterapia-capilar',
    title: 'Mesoterapia Capilar',
    subtitle: 'Nutrição & Estimulação',
    description:
      'Microinjeções de vitaminas, minerais e ativos regeneradores diretamente no couro cabeludo para nutrir os folículos e estimular o crescimento saudável.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&q=80',
  },
]

export default function Treatments() {
  return (
    <section id="tratamentos" className="py-28 md:py-36 bg-[#FAF4E8]">
      <div className="container-site">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <span className="eyebrow mb-4 block">Especialidades</span>
            <h2 className="heading-section text-[clamp(2.5rem,5vw,4rem)] text-[#2C1F14]">
              Tratamentos{' '}
              <em className="italic text-[#9E7A42]">especializados</em>
            </h2>
          </div>
          <p className="text-[#2C1F14]/65 text-[1.0rem] leading-relaxed md:text-right">
            Cada tratamento é cuidadosamente planejado após avaliação clínica
            completa, respeitando a singularidade de cada paciente.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => (
            <article key={t.slug} className="card-treatment group relative">
              {t.tag && (
                <span
                  className="absolute top-4 left-4 z-10 bg-[#B8935A] text-[#FDFAF5] text-[0.55rem] font-medium tracking-widest uppercase px-3 py-1"
                >
                  {t.tag}
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2C1F14]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="eyebrow mb-2">{t.subtitle}</p>
                <h3 className="font-display text-[1.6rem] font-medium text-[#2C1F14] mb-3 leading-tight">
                  {t.title}
                </h3>
                <p className="text-[#2C1F14]/60 text-sm leading-relaxed mb-5">
                  {t.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-[#9E7A42] text-[0.625rem] font-medium tracking-widest uppercase hover:gap-3 transition-all duration-300"
                >
                  Saiba mais <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
