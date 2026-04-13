# Dra. Mirela Albuquerque — Site Profissional

React + Vite · Design editorial premium

## Instalação

```bash
npm install
npm run dev        # localhost:5173
npm run build      # gera /dist para produção
```

## Deploy no Vercel

1. Faça push para o GitHub
2. No Vercel, importe o repositório
3. Framework: **Vite** (detectado automaticamente)
4. Build command: `npm run build`
5. Output dir: `dist`

## Personalização

| O que trocar | Onde |
|---|---|
| Foto do Hero | `src/components/Hero.jsx` → constante `HERO_IMG` |
| Foto do About | `src/components/Sections.jsx` → constante `ABOUT_IMG` |
| Foto do Contato | `src/components/Sections.jsx` → constante `CONTACT_IMG` |
| Número WhatsApp | `src/components/Sections.jsx` → constante `WA` |
| CRM / dados | `src/components/Hero.jsx` e `Sections.jsx` |

## Stack

- React 18
- Vite 6
- CSS Modules (sem dependências de UI)
- Fontes: Playfair Display + Outfit (Google Fonts)
- Ícones: Lucide React
