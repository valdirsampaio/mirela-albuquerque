const STEPS = [
  {
    number: '01',
    title: 'Agendamento',
    description:
      'Entre em contato via WhatsApp ou pelo formulário. Nossa equipe responde rapidamente e confirma o melhor horário para você.',
  },
  {
    number: '02',
    title: 'Consulta Inicial',
    description:
      'Anamnese completa, avaliação do histórico clínico e exame do couro cabeludo com tricoscópio de alta resolução.',
  },
  {
    number: '03',
    title: 'Diagnóstico',
    description:
      'Resultado preciso da avaliação, com laudos e, se necessário, solicitação de exames laboratoriais complementares.',
  },
  {
    number: '04',
    title: 'Plano Terapêutico',
    description:
      'Protocolo individualizado com medicações, procedimentos e orientações de cuidado domiciliar para resultados duradouros.',
  },
  {
    number: '05',
    title: 'Acompanhamento',
    description:
      'Retornos periódicos para avaliar a evolução e ajustar o tratamento conforme a resposta de cada paciente.',
  },
]

export default function Process() {
  return (
    <section id="processo" className="py-28 md:py-36 bg-[#2C1F14] relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A97A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="container-site relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="eyebrow mb-4 block text-[#C9A97A]">Como funciona</span>
          <h2 className="heading-section text-[clamp(2.5rem,5vw,4rem)] text-[#FDFAF5]">
            Sua jornada de{' '}
            <em className="italic text-[#C9A97A]">cuidado capilar</em>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div
            className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,169,122,0.3)] to-transparent hidden lg:block"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex flex-col">
                {/* Number circle */}
                <div className="flex items-center justify-center w-24 h-24 rounded-full border border-[rgba(201,169,122,0.35)] bg-[rgba(201,169,122,0.07)] mb-6 relative z-10 mx-auto lg:mx-0">
                  <span className="font-display text-[2.25rem] font-light text-[#C9A97A] leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display text-[1.35rem] font-medium text-[#FDFAF5] mb-3 text-center lg:text-left">
                  {step.title}
                </h3>
                <p className="text-[#FAF4E8]/55 text-sm leading-relaxed text-center lg:text-left">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a href="#contato" className="btn-gold">
            Iniciar minha jornada
          </a>
        </div>
      </div>
    </section>
  )
}
