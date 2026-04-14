import styles from './Sections.module.css'
import { useState, useEffect, useRef } from 'react'

const WA      = 'https://wa.me/5581994385112?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.'
const IG      = 'https://instagram.com/mirela_albuquerque'
const ABOUT_IMG   = '/images/sobre2-web.jpg'
const CONTACT_IMG = '/images/hero2-web.jpg'

// ── INTRO ──────────────────────────────────────────
export function Intro() {
  return (
    <div className={styles.intro}>
      <p className={styles.introQuote}>
        "Não é só sobre cabelo. É sobre recuperar sua confiança."
      </p>
      <div className={styles.introDivider} aria-hidden="true" />
      <p className={styles.introText}>
        Na consulta da Dra. Mirela, cada paciente é avaliado de forma
        <strong> completa e individualizada</strong>. Sua abordagem investiga
        profundamente as causas, respeitando a história e as características de cada pessoa.
      </p>
    </div>
  )
}

// ── ABOUT ──────────────────────────────────────────
const CREDENTIALS = [
  'Médica formada pela Universidade Federal de Pernambuco (UFPE)',
  'Especialista em Tricologia pela Sociedade Brasileira de Dermatologia',
  'Membro da Sociedade Brasileira de Tricologia (SBTric)',
  'Pós-graduação em Dermatologia com ênfase em doenças do couro cabeludo',
  'Tricoscopia com IA — videotricoscopia e laudo digital com análise de densidade',
]

export function About() {
  return (
    <section id="sobre" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.aboutImg}>
          <img src={ABOUT_IMG} alt="Dra. Mirela Albuquerque" />
          <div className={styles.imgTag}>
            <p>Recife, Pernambuco</p>
            <strong>Dra. Mirela Albuquerque</strong>
          </div>
        </div>
        <div className={styles.aboutText}>
          <span className={styles.eyebrow}>Sobre a médica</span>
          <h2 className={styles.sectionTitle}>
            Cada cabelo tem<br /><em>uma história.</em>
          </h2>
          <p className={styles.bodyText}>
            A Dra. Mirela Albuquerque é médica tricologista dedicada a entender a causa
            raiz dos problemas capilares de cada paciente. Acredita que tratar a queda de
            cabelo vai muito além de olhar apenas os fios.
          </p>
          <p className={styles.bodyText}>
            Cada tratamento precisa ser único. Por isso, sua consulta investiga
            profundamente as causas, respeitando a história e as características
            individuais de cada paciente.
          </p>
          <ul className={styles.credList}>
            {CREDENTIALS.map(c => (
              <li key={c} className={styles.credItem}>
                <span className={styles.credIcon} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{alignSelf:'flex-start'}}>
            Agendar Consulta <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// ── TREATMENTS ─────────────────────────────────────
const TREATMENTS = [
  {
    tag: 'Calvície masculina & feminina',
    title: 'Queda de cabelo',
    desc: 'Investigação completa das causas — hormonal, nutricional, pós-parto ou sistêmica — com plano terapêutico personalizado e baseado em evidências.',
  },
  {
    tag: 'Androgenética & Areata',
    title: 'Alopecias',
    desc: 'Diagnóstico diferencial preciso e tratamento individualizado para todas as formas de alopecia, com protocolos científicos atualizados.',
  },
  {
    tag: 'Cirurgia estética capilar',
    title: 'Transplante capilar e de sobrancelhas',
    desc: 'Alta precisão e resultado natural. Realizado com anestesia segura por especialista. Protocolo exclusivo para regeneração de sobrancelhas.',
  },
  {
    tag: 'Diagnóstico por imagem',
    title: 'Tricoscopia com IA',
    desc: 'Videotricoscopia com inteligência artificial e laudo digital com análise de densidade e contagem de fios — diagnóstico preciso antes de qualquer tratamento.',
  },
  {
    tag: 'Plasma Rico em Plaquetas',
    title: 'Terapias regenerativas',
    desc: 'PRP e terapias autólogas que utilizam fatores de crescimento do próprio paciente para estimular o bulbo capilar e a recuperação da haste.',
  },
  {
    tag: 'Nutrição & Estimulação',
    title: 'Protocolos capilares',
    desc: 'Diagnóstico e tratamento de doenças do couro cabeludo, mesoterapia e protocolos para recuperação da haste capilar com acompanhamento próximo.',
  },
]

export function Treatments() {
  return (
    <section id="especialidades" className={styles.treats}>
      <div className="wrap">
        <div className={styles.treatsHeader}>
          <span className={styles.eyebrow}>Especialidades</span>
          <h2 className={styles.sectionTitle}>
            Como posso<br /><em>te ajudar?</em>
          </h2>
          <p className={styles.treatsSubtitle}>
            Especialista em saúde capilar. Cada fio importa, e você também.
          </p>
        </div>
        <div className={styles.treatGrid}>
          {TREATMENTS.map(t => (
            <a key={t.title} href={WA} target="_blank" rel="noopener noreferrer" className={styles.treatCard}>
              <div>
                <span className={styles.treatTag}>{t.tag}</span>
                <h3 className={styles.treatTitle}>{t.title}</h3>
                <p className={styles.treatDesc}>{t.desc}</p>
              </div>
              <span className={styles.treatLink}>Saiba mais →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── PROCESS (nova seção — o que você encontra na consulta) ─────────
const PROCESS_ITEMS = [
  'Análise clínica detalhada da sua queixa capilar',
  'Investigação da sua história e fatores associados',
  'Avaliação estética dos fios e do couro cabeludo',
  'Exame físico com teste de queda e análise de afinamento',
  'Tricoscopia com alta resolução',
  'Videotricoscopia com inteligência artificial',
  'Laudo digital com análise de densidade e contagem de fios',
]

export function Process() {
  return (
    <section id="consulta" className={styles.process}>
      <div className="wrap">
        <div className={styles.processGrid}>
          <div className={styles.processLeft}>
            <span className={styles.eyebrow}>O que você encontra</span>
            <h2 className={styles.sectionTitle}>
              Na minha<br /><em>consulta capilar</em>
            </h2>
            <p className={styles.bodyText}>
              Cada paciente é avaliado de forma completa e individualizada.
              Tecnologia avançada e protocolos personalizados integram
              saúde, estética e regeneração.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary} style={{alignSelf:'flex-start',marginTop:'1.5rem'}}>
              Agendar Consulta <span>→</span>
            </a>
          </div>
          <div className={styles.processRight}>
            {PROCESS_ITEMS.map((item, i) => (
              <div key={i} className={styles.processItem}>
                <span className={styles.processNum}>0{i + 1}</span>
                <p className={styles.processText}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── TESTIMONIALS ────────────────────────────────────
const TESTIMONIALS = [
  { init:'AL', name:'Ana Luíza M.', city:'Recife, PE', treat:'Alopecia androgenética',
    text:'A Dra. Mirela foi a primeira médica que realmente investigou a causa da minha queda de cabelo. Em duas consultas chegou ao diagnóstico correto. Seis meses depois, meu cabelo está completamente diferente.' },
  { init:'FC', name:'Fernanda C.', city:'Caruaru, PE', treat:'Mesoterapia capilar',
    text:'Fiz a tricoscopia e foi incrível ver exatamente o que estava acontecendo com meu couro cabeludo. A doutora explicou tudo com muita clareza. O resultado veio rápido — em três meses já percebi diferença.' },
  { init:'MS', name:'Mariana S.', city:'Olinda, PE', treat:'Alopecia areata',
    text:'Além do tratamento eficaz, ela cuida do emocional do paciente. Sinto que encontrei uma médica de verdade, que se importa com a pessoa, não só com o problema.' },
  { init:'JB', name:'Juliana B.', city:'Recife, PE', treat:'Transplante de sobrancelhas',
    text:'O resultado foi além do que eu esperava — natural, simétrico, perfeito. A anestesia foi tão bem feita que quase não senti nada. Me arrependi de não ter feito antes.' },
]

export function Testimonials() {
  const [idx, setIdx]         = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef              = useRef(null)

  const goTo = (next) => {
    setVisible(false)
    timerRef.current = setTimeout(() => { setIdx(next); setVisible(true) }, 350)
  }
  useEffect(() => () => clearTimeout(timerRef.current), [])

  const prev = () => goTo((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => goTo((idx + 1) % TESTIMONIALS.length)
  const t    = TESTIMONIALS[idx]

  return (
    <section id="depoimentos" className={styles.testis}>
      <div className="wrap">
        <div className={styles.testisGrid}>
          <div className={styles.testisLeft}>
            <span className={styles.eyebrow}>Depoimentos</span>
            <h2 className={styles.sectionTitle}>O que dizem<br /><em>nossas pacientes</em></h2>
            <p className={styles.bodyText}>Histórias reais de quem passou pelo consultório da Dra. Mirela.</p>
            <div className={styles.testiNav}>
              <button onClick={prev} aria-label="Anterior" className={styles.navBtn}>←</button>
              <span className={styles.navCount}>{idx + 1} / {TESTIMONIALS.length}</span>
              <button onClick={next} aria-label="Próximo" className={styles.navBtn}>→</button>
            </div>
          </div>
          <div className={styles.testiCardWrap}>
            <div className={`${styles.testiCard} ${visible ? styles.testiVisible : styles.testiHidden}`}>
              <span className={styles.testiTreat}>{t.treat}</span>
              <p className={styles.testiQuote}>"{t.text}"</p>
              <div className={styles.testiAuthor}>
                <div className={styles.testiAvatar}>{t.init}</div>
                <div>
                  <p className={styles.testiName}>{t.name}</p>
                  <p className={styles.testiCity}>{t.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FAQ ─────────────────────────────────────────────
const FAQS = [
  { q: 'Quando devo consultar um tricologista?',
    a: 'Se perceber queda excessiva (mais de 100 fios/dia de forma contínua), falhas no couro cabeludo, coceira persistente, descamação ou qualquer alteração no padrão capilar. Quanto antes o diagnóstico, melhores os resultados.' },
  { q: 'O que é tricoscopia com inteligência artificial?',
    a: 'É um exame de alta resolução que analisa os fios e o couro cabeludo com videotricoscopia e IA. Gera um laudo digital com análise de densidade e contagem de fios — permitindo diagnóstico preciso e acompanhamento objetivo da evolução.' },
  { q: 'Quanto tempo para ver resultados?',
    a: 'Os primeiros resultados surgem entre 60 e 90 dias. Novos fios ficam visíveis do 3º ao 6º mês. PRP e mesoterapia costumam ter respostas mais rápidas. A evolução é monitorada com a tecnologia de imagem da clínica.' },
  { q: 'O transplante de sobrancelhas dói?',
    a: 'O procedimento é realizado com anestesia segura e especializada. O desconforto é mínimo e não há restrições relevantes no pós-operatório. A Dra. Mirela possui protocolo exclusivo para regeneração e transplante de sobrancelhas.' },
  { q: 'A queda de cabelo tem cura?',
    a: 'Depende da causa. Alopecias de origem hormonal, nutricional ou por estresse têm excelente resposta ao tratamento. Alopecia androgenética é controlada com resultados duradouros. O diagnóstico correto é o primeiro passo.' },
  { q: 'Atende por plano de saúde?',
    a: 'A consulta é particular. Fornecemos recibo detalhado para reembolso junto ao seu convênio, conforme as regras de cobertura do plano.' },
]

export function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className={styles.faq}>
      <div className="wrap">
        <div className={styles.faqGrid}>
          <div className={styles.faqLeft}>
            <span className={styles.eyebrow}>Dúvidas frequentes</span>
            <h2 className={styles.sectionTitle}>Perguntas<br /><em>&amp; respostas</em></h2>
            <p className={styles.bodyText}>
              Não encontrou o que procura? Agende uma consulta e esclareça tudo com a Dra. Mirela.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.textLink} style={{marginTop:'1.5rem',display:'inline-block'}}>
              Agendar consulta →
            </a>
          </div>
          <div className={styles.faqItems}>
            {FAQS.map((f, i) => (
              <div key={i} className={styles.faqItem}>
                <button className={styles.faqQ} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                  <span>{f.q}</span>
                  <span className={`${styles.faqIcon} ${open === i ? styles.faqIconOpen : ''}`}>+</span>
                </button>
                <div className={`${styles.faqAWrap} ${open === i ? styles.faqAOpen : ''}`}>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── CONTACT ─────────────────────────────────────────
export function Contact() {
  return (
    <section id="contato" className={styles.contact}>
      <div className="wrap">
        <div className={styles.contactGrid}>
          <div>
            <span className={styles.eyebrow}>Contato</span>
            <h2 className={styles.sectionTitle}>
              O cuidado começa<br /><em>com uma consulta.</em>
            </h2>
            <p className={styles.bodyText} style={{marginBottom:'2rem'}}>
              Para agendar sua consulta, entre em contato pelo WhatsApp ou Instagram.
              Respondemos com rapidez.
            </p>
            <div className={styles.contactLinks}>
              <div className={styles.contactLink}>
                <div>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>(81) 9 4385-1120</span>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.contactAction}>Agendar consulta →</a>
              </div>
              <div className={styles.contactLink}>
                <div>
                  <span className={styles.contactLabel}>Instagram</span>
                  <span className={styles.contactValue}>@mirela_albuquerque</span>
                </div>
                <a href={IG} target="_blank" rel="noopener noreferrer" className={styles.contactAction}>Ver perfil →</a>
              </div>
              <div className={styles.contactLink}>
                <div>
                  <span className={styles.contactLabel}>Endereço</span>
                  <span className={styles.contactValue}>Av. República do Líbano, 251<br />Torre 4 — sala 809 — Pina, Recife</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contactRight}>
            <div className={styles.contactImg}>
              <img src={CONTACT_IMG} alt="Dra. Mirela Albuquerque" />
            </div>
            <p className={styles.contactQuote}>"Aqui, cada fio importa, e você também."</p>
            <span className={styles.contactAttr}>Dra. Mirela Albuquerque — Médica Tricologista</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── FOOTER ──────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <div>
            <img
              src="/images/logo-footer.png"
              alt="Mirela Albuquerque — Médica Tricologista"
              style={{ height: '72px', width: 'auto', objectFit: 'contain', marginBottom: '16px', display: 'block' }}
            />
            <p className={styles.footerInfo}>
              CRM-PE 16392 · RQE 3555<br />
              Av. República do Líbano, 251, Torre 4 — sala 809<br />
              Pina, Recife — PE
            </p>
          </div>
          <div>
            <p className={styles.footerColTitle}>Navegação</p>
            {[
              ['Sobre',          '#sobre'],
              ['Especialidades', '#especialidades'],
              ['Consulta',       '#consulta'],
              ['Depoimentos',    '#depoimentos'],
              ['FAQ',            '#faq'],
              ['Contato',        '#contato'],
            ].map(([label, href]) => (
              <a key={href} href={href} className={styles.footerLink}>{label}</a>
            ))}
          </div>
          <div>
            <p className={styles.footerColTitle}>Contato</p>
            <a href={WA}  target="_blank" rel="noopener noreferrer" className={styles.footerLink}>(81) 9 4385-1120</a>
            <a href={IG}  target="_blank" rel="noopener noreferrer" className={styles.footerLink}>@mirela_albuquerque</a>
            <span className={styles.footerLink}>Pina, Recife — PE</span>
          </div>
        </div>
        <div className={styles.footerBar}>
          <p>© {year} Dra. Mirela Albuquerque. Todos os direitos reservados.</p>
          <p>CRM-PE 16392 | RQE 3555</p>
        </div>
      </div>
    </footer>
  )
}

// ── WA BUTTON ───────────────────────────────────────
export function WhatsAppButton() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp" className={styles.waBtn}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}
