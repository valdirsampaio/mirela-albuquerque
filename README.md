# Dra. Mirela Albuquerque — Site Profissional

Site premium para a Dra. Mirela Albuquerque, médica tricologista. Desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.

---

## ✨ Tecnologias

- **Next.js 15** (App Router)
- **TypeScript** — tipagem estática
- **Tailwind CSS** — sistema de design customizado
- **Framer Motion** — animações fluidas
- **Google Fonts** — Cormorant Garamond + DM Sans
- **Lucide React** — ícones profissionais

---

## 🎨 Design

### Paleta de cores
| Token | Hex | Uso |
|---|---|---|
| `cream-50` | `#FDFAF5` | Background principal |
| `cream-100` | `#FAF4E8` | Background secundário |
| `gold-500` | `#B8935A` | Cor de destaque, CTAs |
| `gold-400` | `#C9A97A` | Elementos decorativos |
| `espresso` | `#2C1F14` | Texto principal, seções escuras |

### Tipografia
- **Display / Headings**: Cormorant (serif elegante, peso 300–600)
- **Body / UI**: DM Sans (sans-serif legível, peso 300–600)

---

## 🗂️ Estrutura do Projeto

```
dra-mirela-albuquerque/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Navbar responsiva com scroll-aware
│   │   ├── Hero.tsx            # Hero fullscreen com stats
│   │   ├── Differentials.tsx   # 4 diferenciais do consultório
│   │   ├── About.tsx           # Biografia + credenciais
│   │   ├── Treatments.tsx      # Grid de 6 tratamentos
│   │   ├── Process.tsx         # Jornada em 5 etapas
│   │   ├── Testimonials.tsx    # Carrossel de depoimentos
│   │   ├── InstagramFeed.tsx   # Grid do Instagram
│   │   ├── FAQ.tsx             # Acordeão de perguntas
│   │   ├── Contact.tsx         # Formulário → WhatsApp
│   │   ├── Footer.tsx          # Rodapé completo
│   │   └── WhatsAppButton.tsx  # Botão flutuante WhatsApp
│   ├── globals.css             # Design tokens + utilitários
│   ├── layout.tsx              # Root layout + fonts + metadata
│   └── page.tsx                # Página principal
├── public/
│   └── images/                 # Pasta para imagens reais
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🚀 Instalação e Execução

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/dra-mirela-albuquerque.git
cd dra-mirela-albuquerque

# 2. Instale as dependências
npm install

# 3. Rode em modo desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:3000
```

### Build para produção

```bash
npm run build
npm start
```

---

## 📝 Personalização Necessária

Antes de colocar o site no ar, atualize as seguintes informações:

### 1. Imagens
Substitua as imagens placeholder (Unsplash) por fotos reais da Dra. Mirela:
- Foto principal do Hero → `public/images/hero-dra-mirela.jpg`
- Foto do About → `public/images/dra-mirela-about.jpg`
- Fotos dos tratamentos → `public/images/tratamentos/`

Em `next.config.js`, remova `images.unsplash.com` dos `remotePatterns` e use imagens locais em `/public`.

### 2. Informações de contato
Em `app/components/Contact.tsx` e `app/components/WhatsAppButton.tsx`:
```
Número WhatsApp: 5581999999999 → número real
Endereço: Rua [Endereço a confirmar] → endereço real
```

### 3. CRM
Em `app/components/Footer.tsx`:
```
CRM-PE [número a confirmar] → CRM real
```

### 4. Metadata/SEO
Em `app/layout.tsx`, atualize:
- `description` — descrição real do consultório
- `openGraph.url` — domínio final do site

### 5. Google Analytics / Meta Pixel (opcional)
Adicione os scripts em `app/layout.tsx` dentro do `<head>`.

---

## 🌐 Deploy

### Vercel (recomendado)
```bash
# Instale a CLI da Vercel
npm i -g vercel

# Deploy
vercel
```

### Ou conecte o repositório diretamente em vercel.com

---

## 📄 Seções do Site

| Seção | Componente | Descrição |
|---|---|---|
| Hero | `Hero.tsx` | Fullscreen com foto, headline e stats |
| Diferenciais | `Differentials.tsx` | 4 pilares do consultório |
| Sobre | `About.tsx` | Biografia e credenciais da Dra. |
| Tratamentos | `Treatments.tsx` | 6 cards de especialidades |
| Processo | `Process.tsx` | Jornada da paciente em 5 etapas |
| Depoimentos | `Testimonials.tsx` | Carrossel com 4 depoimentos |
| Instagram | `InstagramFeed.tsx` | Grid de 6 posts |
| FAQ | `FAQ.tsx` | 6 perguntas frequentes |
| Contato | `Contact.tsx` | Formulário → abertura WhatsApp |
| Footer | `Footer.tsx` | Rodapé com links e redes |

---

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento (localhost:3000)
npm run build    # Build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Linting com ESLint
```

---

Desenvolvido com excelência técnica e atenção ao design de alto padrão.
