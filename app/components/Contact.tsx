'use client'

import { useState } from 'react'
import { MapPin, Phone, Instagram, Clock, Send, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '', service: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Vim pelo site e gostaria de agendar uma consulta.\n\nNome: ${form.name}\nTelefone: ${form.phone}\nE-mail: ${form.email}\nEspecialidade: ${form.service}\nMensagem: ${form.message}`
    )
    window.open(`https://wa.me/5581999999999?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contato" className="py-28 md:py-36 bg-[#2C1F14] relative overflow-hidden">
      {/* Decorative circle */}
      <div
        className="absolute -right-40 -bottom-40 w-[600px] h-[600px] rounded-full border border-[rgba(201,169,122,0.08)]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -bottom-24 w-[400px] h-[400px] rounded-full border border-[rgba(201,169,122,0.06)]"
        aria-hidden="true"
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 xl:gap-24">
          {/* Left — Info */}
          <div>
            <span className="eyebrow mb-4 block text-[#C9A97A]">Contato</span>
            <h2 className="heading-section text-[clamp(2.5rem,5vw,4rem)] text-[#FDFAF5] mb-6">
              Agende sua{' '}
              <em className="italic text-[#C9A97A]">consulta</em>
            </h2>
            <p className="text-[#FAF4E8]/60 leading-relaxed mb-12">
              Dê o primeiro passo para recuperar a saúde e a confiança do seu
              cabelo. Nossa equipe está pronta para atendê-la.
            </p>

            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(201,169,122,0.3)] shrink-0">
                  <MapPin size={16} className="text-[#C9A97A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#FDFAF5] font-medium text-sm mb-1">Endereço</p>
                  <p className="text-[#FAF4E8]/55 text-sm leading-relaxed">
                    Rua [Endereço a confirmar]<br />Boa Viagem, Recife — PE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(201,169,122,0.3)] shrink-0">
                  <Phone size={16} className="text-[#C9A97A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#FDFAF5] font-medium text-sm mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/5581999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A97A] text-sm hover:text-[#E5CBA0] transition-colors"
                  >
                    (81) 9 9999-9999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(201,169,122,0.3)] shrink-0">
                  <Clock size={16} className="text-[#C9A97A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#FDFAF5] font-medium text-sm mb-1">Horários</p>
                  <p className="text-[#FAF4E8]/55 text-sm leading-relaxed">
                    Segunda a Sexta: 8h – 18h<br />
                    Sábado: 8h – 13h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[rgba(201,169,122,0.3)] shrink-0">
                  <Instagram size={16} className="text-[#C9A97A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[#FDFAF5] font-medium text-sm mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/mirela_albuquerque"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C9A97A] text-sm hover:text-[#E5CBA0] transition-colors"
                  >
                    @mirela_albuquerque
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#1A1108] border border-[rgba(201,169,122,0.15)] p-8 md:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <CheckCircle size={48} className="text-[#C9A97A] mb-6" strokeWidth={1} />
                <h3 className="font-display text-2xl text-[#FDFAF5] mb-3">Mensagem enviada!</h3>
                <p className="text-[#FAF4E8]/55 text-sm leading-relaxed max-w-xs">
                  Abrimos o WhatsApp para você completar o contato. Responderemos em breve!
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 btn-ghost-white text-[0.6rem]"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#FAF4E8]/50 text-[0.625rem] tracking-widest uppercase mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-[rgba(253,250,245,0.05)] border border-[rgba(201,169,122,0.2)] text-[#FDFAF5] px-4 py-3 text-sm placeholder:text-[#FAF4E8]/25 focus:outline-none focus:border-[#C9A97A] transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-[#FAF4E8]/50 text-[0.625rem] tracking-widest uppercase mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-[rgba(253,250,245,0.05)] border border-[rgba(201,169,122,0.2)] text-[#FDFAF5] px-4 py-3 text-sm placeholder:text-[#FAF4E8]/25 focus:outline-none focus:border-[#C9A97A] transition-colors"
                      placeholder="(81) 9 0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#FAF4E8]/50 text-[0.625rem] tracking-widest uppercase mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full bg-[rgba(253,250,245,0.05)] border border-[rgba(201,169,122,0.2)] text-[#FDFAF5] px-4 py-3 text-sm placeholder:text-[#FAF4E8]/25 focus:outline-none focus:border-[#C9A97A] transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[#FAF4E8]/50 text-[0.625rem] tracking-widest uppercase mb-2">
                    Motivo da consulta
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[rgba(253,250,245,0.05)] border border-[rgba(201,169,122,0.2)] text-[#FDFAF5] px-4 py-3 text-sm focus:outline-none focus:border-[#C9A97A] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1108]">Selecione uma opção</option>
                    <option value="Queda de cabelo" className="bg-[#1A1108]">Queda de cabelo</option>
                    <option value="Alopecia" className="bg-[#1A1108]">Alopecia</option>
                    <option value="Doenças do couro cabeludo" className="bg-[#1A1108]">Doenças do couro cabeludo</option>
                    <option value="PRP Capilar" className="bg-[#1A1108]">PRP Capilar</option>
                    <option value="Mesoterapia Capilar" className="bg-[#1A1108]">Mesoterapia Capilar</option>
                    <option value="Tricoscopia" className="bg-[#1A1108]">Tricoscopia</option>
                    <option value="Outro" className="bg-[#1A1108]">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#FAF4E8]/50 text-[0.625rem] tracking-widest uppercase mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-[rgba(253,250,245,0.05)] border border-[rgba(201,169,122,0.2)] text-[#FDFAF5] px-4 py-3 text-sm placeholder:text-[#FAF4E8]/25 focus:outline-none focus:border-[#C9A97A] transition-colors resize-none"
                    placeholder="Descreva brevemente seu caso..."
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center">
                  Enviar pelo WhatsApp <Send size={14} />
                </button>

                <p className="text-[#FAF4E8]/30 text-[0.625rem] text-center">
                  Seus dados são tratados com total confidencialidade.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
