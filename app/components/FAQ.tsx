'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const FAQS = [
  {
    q: 'O que é tricologia e quando devo consultar um tricologista?',
    a: 'Tricologia é a especialidade médica que estuda e trata os cabelos e o couro cabeludo. Você deve consultar um tricologista se perceber queda de cabelo excessiva (mais de 100 fios/dia de forma contínua), falhas no couro cabeludo, coceira persistente, descamação, cabelos quebradiços ou qualquer alteração no padrão capilar.',
  },
  {
    q: 'Quais exames são feitos na consulta?',
    a: 'A consulta inclui anamnese detalhada (histórico de saúde, medicações, alimentação, estresse), exame físico com tricoscópio de alta resolução (avalia o couro cabeludo e os fios em aumento), e quando necessário, solicitação de exames de sangue como hemograma, TSH, ferritina, zinco, vitamina D e perfil hormonal.',
  },
  {
    q: 'Quanto tempo leva para ver resultados nos tratamentos?',
    a: 'Depende do tipo de tratamento e da condição tratada. De forma geral, os primeiros resultados da redução da queda surgem entre 60 e 90 dias. Novos fios crescendo ficam visíveis a partir do terceiro ao sexto mês. Tratamentos como PRP e mesoterapia costumam apresentar resultados mais rápidos.',
  },
  {
    q: 'O PRP capilar é doloroso?',
    a: 'O procedimento é realizado com anestesia tópica (creme anestésico aplicado antes), o que torna o desconforto mínimo. A maioria das pacientes relata sensação de pressão leve, não dor. O procedimento dura entre 45 minutos e 1 hora e não há restrições importantes no pós-procedimento.',
  },
  {
    q: 'A queda de cabelo tem cura?',
    a: 'Depende da causa. Alopecias de origem hormonal, nutricional ou por estresse (eflúvio telógeno) têm excelente resposta ao tratamento e podem ser completamente revertidas. Alopecias androgenética e areata são controladas, com manutenção dos resultados a longo prazo. O diagnóstico preciso é fundamental para definir as expectativas reais de cada caso.',
  },
  {
    q: 'Vocês atendem planos de saúde?',
    a: 'A consulta é particular. Fornecemos recibo detalhado que pode ser utilizado para reembolso junto ao seu plano de saúde, conforme as regras de cobertura do seu convênio. Entre em contato para saber mais sobre nossas formas de pagamento.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 md:py-36 bg-[#FAF4E8]">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 xl:gap-24">
          {/* Left */}
          <div className="lg:sticky lg:top-32 self-start">
            <span className="eyebrow mb-4 block">Perguntas frequentes</span>
            <h2 className="heading-section text-[clamp(2.5rem,4vw,3.5rem)] text-[#2C1F14] mb-6">
              Tire suas{' '}
              <em className="italic text-[#9E7A42]">dúvidas</em>
            </h2>
            <p className="text-[#2C1F14]/65 leading-relaxed mb-8">
              Não encontrou a resposta que procurava? Envie uma mensagem —
              respondemos todos os dias úteis.
            </p>
            <a href="#contato" className="btn-outline">
              Falar com a equipe
            </a>
          </div>

          {/* Right — Accordion */}
          <div>
            {FAQS.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-display text-[1.125rem] font-medium text-[#2C1F14] leading-snug pr-2">
                    {item.q}
                  </span>
                  <span className="shrink-0 text-[#B8935A]">
                    {open === i ? <Minus size={18} strokeWidth={1.5} /> : <Plus size={18} strokeWidth={1.5} />}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    open === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[#2C1F14]/65 text-[0.9375rem] leading-relaxed pb-6">
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
