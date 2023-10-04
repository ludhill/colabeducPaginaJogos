import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
//import Image from 'next/image' 

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ColabEduc',
  description: 'Sistema de Desenvolvimento Colaborativo de Games Educacionais.',
  keywords: ["Jogos Educacionais", "Games", "Gameficando", "Jogos"], 
  metadataBase: new URL('https://colabeduc.org'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'pt-BR': '/pt-BR',
    },
  },/*
  openGraph: {
    title: 'Acme',
    description: 'Acme is a...',
    images: '/iconeColabEduc.png',
  },*/
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
