import type { Metadata } from 'next'
import { inter } from '@/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barbearia Jorge',
  description: 'Barbearia de osasco SP com agendamento online'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
