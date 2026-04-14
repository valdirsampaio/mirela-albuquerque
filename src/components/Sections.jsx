import styles from './Sections.module.css'
import { useState, useEffect, useRef } from 'react'

const WA = 'https://wa.me/5581999999999?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.'

// ── Images — replace with Dra. Mirela's real photos ──
const ABOUT_IMG   = 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&q=92&fit=crop&crop=top'
const CONTACT_IMG = 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=92&fit=crop&crop=top'

// ────────────────────────────────────────────────────
// INTRO STRIP
// ────────────────────────────────────────────────────
export function Intro() {
  return (
    <div className={styles.intro}>
      <p className={styles.introQuote}>
        "Um propósito claro: devolver confiança a cada paciente que entra pela porta."
      </p>
      <div className={styles.introDivider} aria-hidden="true" />
      <p className={styles.introText}>
        A Dra. Mirela combina <strong>formação técnica em tricologia</strong> com
        a precisão de uma <strong>anestesiologista</strong> — combinação rara que
        garante diagnósticos apurados e procedimentos seguros em Recife, PE.
      </p>
    </div>
  )
}

// ────────────────────────────────────────────────────
// ABOUT — styled like reference image 2
// ────────────────────────────────────────────────────
const CREDENTIALS = [
  'Médica formada pela Universidade Federal de Pernambuco (UFPE)',
  'Especialista em Tricologia pela Sociedade Brasileira de Dermatologia',
  'Membro da Sociedade Brasileira de Tricologia (SBTric)',
  'Pós-graduação em Dermatologia com ênfase em doenças do couro cabeludo',
  'Atualização contínua em centros de excelência nacionais e internacionais',
]

export function About() {
  return (
    <section id="sobre" className={styles.about}>
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
          Um olhar cuidadoso<br /><em>para cada fio.</em>
        </h2>
        <p className={styles.bodyText}>
          A Dra. Mirela Albuquerque é médica tricologista dedicada a entender a causa raiz
          dos problemas capilares de cada paciente. Sua formação robusta e atualização
          constante permitem oferecer diagnósticos precisos e planos terapêuticos
          individualizados.
        </p>
        <p className={styles.bodyText}>
          Acredita que saúde capilar vai além da estética — é autoestima, bem-estar e
          qualidade de vida. Por isso, cada consulta é conduzida com escuta ativa e atenção
          aos detalhes que fazem a diferença no resultado final.
        </p>
        <ul className={styles.credList}>
          {CREDENTIALS.map(c => (
            <li key={c} className={styles.credItem}>
              <span className={styles.credIcon} aria-hidden="true">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    </section>
  )
}

// ────────────────────────────────────────────────────
// TREATMENTS — card style like reference image 4
// ────────────────────────────────────────────────────
const TREATMENTS = [
  { tag: 'Cirurgia estética capilar',  title: 'Transplante de sobrancelhas', desc: 'Alta precisão, resultado natural e definitivo. Realizado com anestesia segura e especializada em cada procedimento.' },
  { tag: 'Eflúvio & Telógeno',         title: 'Queda de cabelo',             desc: 'Investigação completa das causas — hormonal, nutricional, pós-parto ou sistêmica — com plano terapêutico estruturado.' },
  { tag: 'Androgenética & Areata',     title: 'Alopecia',                    desc: 'Diagnóstico diferencial preciso e tratamento personalizado, com protocolos baseados em evidências científicas atualizadas.' },
  { tag: 'Diagnóstico por imagem',     title: 'Tricoscopia',                 desc: 'Exame dermatoscópico de alta resolução — análise detalhada do couro cabeludo e dos fios sem biópsia.' },
  { tag: 'Plasma Rico em Plaquetas',   title: 'PRP Capilar',                 desc: 'Fatores de crescimento do próprio paciente aplicados no couro cabeludo para estimular o bulbo capilar.' },
  { tag: 'Nutrição & Estimulação',     title: 'Mesoterapia Capilar',         desc: 'Microinjeções de vitaminas e ativos regeneradores para nutrir os folículos e estimular o crescimento saudável.' },
]

export function Treatments() {
  return (
    <section id="especialidades" className={styles.treats}>
      <div className="wrap">
        <div className={styles.treatsHeader}>
          <span className={styles.eyebrow}>Especialidades</span>
          <h2 className={styles.sectionTitle}>
            Tratamentos<br /><em>especializados</em>
          </h2>
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

// ────────────────────────────────────────────────────
// TESTIMONIALS — fixed height, smooth crossfade
// ────────────────────────────────────────────────────
const TESTIMONIALS = [
  { init:'AL', name:'Ana Luíza M.', city:'Recife, PE', treat:'Alopecia androgenética',
    text:'A Dra. Mirela foi a primeira médica que realmente investigou a causa da minha queda de cabelo. Em duas consultas chegou ao diagnóstico correto. Seis meses depois, meu cabelo está completamente diferente.' },
  { init:'FC', name:'Fernanda C.', city:'Caruaru, PE', treat:'Mesoterapia capilar',
    text:'Fiz a tricoscopia e foi incrível ver exatamente o que estava acontecendo com meu couro cabeludo. A doutora explicou tudo com muita clareza. O resultado veio rápido — em três meses já percebi diferença.' },
  { init:'MS', name:'Mariana S.', city:'Olinda, PE', treat:'Alopecia areata',
    text:'Além do tratamento eficaz, ela cuida do emocional do paciente. Sinto que encontrei uma médica de verdade, que se importa com a pessoa, não só com o problema.' },
  { init:'JB', name:'Juliana B.', city:'Recife, PE', treat:'Transplante de sobrancelhas',
    text:'O resultado foi além do que eu esperava — natural, simétrico, perfeito. A anestesia foi tão bem feita que quase não senti nada. Me arrependia de não ter feito antes.' },
]

export function Testimonials() {
  const [idx, setIdx]       = useState(0)
  const [visible, setVisible] = useState(true)
  const timerRef = useRef(null)

  const goTo = (next) => {
    setVisible(false)
    timerRef.current = setTimeout(() => {
      setIdx(next)
      setVisible(true)
    }, 350)
  }

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const prev = () => goTo((idx - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => goTo((idx + 1) % TESTIMONIALS.length)
  const t = TESTIMONIALS[idx]

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

          {/* Fixed-height card with crossfade — no layout shift */}
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

// ────────────────────────────────────────────────────
// FAQ
// ────────────────────────────────────────────────────
const FAQS = [
  { q: 'Quando devo consultar um tricologista?',    a: 'Se perceber queda excessiva (mais de 100 fios/dia de forma contínua), falhas no couro cabeludo, coceira persistente, descamação ou qualquer alteração no padrão capilar.' },
  { q: 'Quanto tempo para ver resultados?',          a: 'Os primeiros resultados surgem entre 60 e 90 dias. Novos fios crescendo ficam visíveis a partir do 3º ao 6º mês. PRP e mesoterapia costumam apresentar respostas mais rápidas.' },
  { q: 'O transplante de sobrancelhas dói?',         a: 'Por ser anestesiologista, a Dra. Mirela garante máximo conforto. O desconforto é mínimo durante o procedimento e não há restrições relevantes no pós.' },
  { q: 'A queda de cabelo tem cura?',                a: 'Depende da causa. Alopecias por origem hormonal, nutricional ou estresse têm excelente resposta e podem ser completamente revertidas. Alopecia androgenética é controlada com resultados duradouros.' },
  { q: 'Atende por plano de saúde?',                 a: 'A consulta é particular. Fornecemos recibo detalhado para reembolso junto ao seu convênio, conforme as regras de cobertura.' },
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
              Não encontrou o que procura? Agende uma consulta e esclareça tudo na avaliação clínica.
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

// ────────────────────────────────────────────────────
// CONTACT
// ────────────────────────────────────────────────────
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
              Para agendar sua consulta, entre em contato pelo WhatsApp. Respondemos com rapidez.
            </p>
            <div className={styles.contactLinks}>
              <div className={styles.contactLink}>
                <div><span className={styles.contactLabel}>WhatsApp</span><span className={styles.contactValue}>(81) 9 9999-9999</span></div>
                <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.contactAction}>Agendar consulta →</a>
              </div>
              <div className={styles.contactLink}>
                <div><span className={styles.contactLabel}>Instagram</span><span className={styles.contactValue}>@mirela_albuquerque</span></div>
                <a href="https://instagram.com/mirela_albuquerque" target="_blank" rel="noopener noreferrer" className={styles.contactAction}>Ver perfil →</a>
              </div>
              <div className={styles.contactLink}>
                <div><span className={styles.contactLabel}>Localização</span><span className={styles.contactValue}>Recife, Pernambuco — PE</span></div>
              </div>
            </div>
          </div>
          <div className={styles.contactRight}>
            <p className={styles.contactQuote}>"Cada cabelo conta uma história. O meu papel é ajudá-lo a reescrever a sua."</p>
            <span className={styles.eyebrow}>Dra. Mirela Albuquerque</span>
            <div className={styles.contactImg}><img src={CONTACT_IMG} alt="Consultório" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ────────────────────────────────────────────────────
// FOOTER
// ────────────────────────────────────────────────────
export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.footerGrid}>
          <div>
            <p className={styles.footerName}>Mirela Albuquerque</p>
            <p className={styles.footerSub}>Médica Tricologista</p>
            <p className={styles.footerInfo}>CRM-PE 16392 · RQE 3555<br />Recife, Pernambuco — Brasil</p>
          </div>
          <div>
            <p className={styles.footerColTitle}>Navegação</p>
            {['Início','Sobre','Especialidades','Depoimentos','FAQ','Contato'].map(l => (
              <a key={l} href={`#${l.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')}`} className={styles.footerLink}>{l}</a>
            ))}
          </div>
          <div>
            <p className={styles.footerColTitle}>Contato</p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>WhatsApp</a>
            <a href="https://instagram.com/mirela_albuquerque" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>@mirela_albuquerque</a>
            <span className={styles.footerLink}>Recife, PE</span>
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

// ────────────────────────────────────────────────────
// WA BUTTON
// ────────────────────────────────────────────────────
export function WhatsAppButton() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="Agendar consulta pelo WhatsApp" className={styles.waBtn}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  )
}
