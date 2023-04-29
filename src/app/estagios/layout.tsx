// import '../globals.css'
import './estagio.css'

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['100', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Todos os Estagios UPA ',
  description: 'Listagem e detalhameto de Vagas de Estagios',
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
