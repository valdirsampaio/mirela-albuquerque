import type { Metadata } from 'next'
import { Cormorant, Cormorant_Infant, DM_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const cormorantInfant = Cormorant_Infant({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant-infant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dra. Mirela Albuquerque | Tricologista',
  description:
    'Médica tricologista especialista em saúde capilar. Diagnóstico e tratamento de queda de cabelo, alopecia e doenças do couro cabeludo em Recife, PE.',
  keywords: [
    'tricologista', 'tricologia', 'queda de cabelo', 'alopecia',
    'médica capilar', 'Recife', 'saúde capilar', 'Mirela Albuquerque'
  ],
  authors: [{ name: 'Dra. Mirela Albuquerque' }],
  openGraph: {
    title: 'Dra. Mirela Albuquerque | Tricologista',
    description: 'Especialista em saúde capilar e doenças do couro cabeludo.',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${cormorantInfant.variable} ${dmSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
