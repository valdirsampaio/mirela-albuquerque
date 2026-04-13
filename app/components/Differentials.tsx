import { Microscope, Heart, Award, RefreshCw } from 'lucide-react'

const ITEMS = [
  {
    icon: Microscope,
    title: 'Diagnóstico preciso',
    text: 'Tricoscopia digital de alta resolução e anamnese detalhada para identificar com exatidão a causa do problema capilar antes de qualquer tratamento.',
  },
  {
    icon: Heart,
    title: 'Abordagem humanizada',
    text: 'Cada consulta é conduzida com escuta ativa e acolhimento. Sabemos que queda de cabelo afeta a autoestima e tratamos cada caso com a sensibilidade que merece.',
  },
  {
    icon: Award,
    title: 'Formação de excelência',
    text: 'Especialização em tricologia pela Sociedade Brasileira de Dermatologia e atualização constante em centros de referência nacionais e internacionais.',
  },
  {
    icon: RefreshCw,
    title: 'Acompanhamento contínuo',
    text: 'O tratamento não termina com a consulta. Monitoramos a evolução, ajustamos protocolos e estamos disponíveis para suporte ao longo de toda a jornada.',
  },
]

export default function Differentials() {
  return (
    <section className="py-20 md:py-28 bg-[#FDFAF5] border-t border-[rgba(201,169,122,0.15)]">
      <div className="container-site">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group">
              <div className="w-12 h-12 border border-[rgba(185,147,90,0.3)] flex items-center justify-center mb-5 group-hover:border-[#C9A97A] group-hover:bg-[#FAF4E8] transition-all duration-400">
                <Icon size={20} className="text-[#B8935A]" strokeWidth={1.25} />
              </div>
              <h3 className="font-display text-[1.25rem] font-medium text-[#2C1F14] mb-3">
                {title}
              </h3>
              <p className="text-[#2C1F14]/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
