// import '../globals.css'
import './estagioDetalhes.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Detalhes da Vaga de Estagio - UPA ',
  description: 'Detalhamento da Vagas de Estagio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
