import { Inter } from 'next/font/google';
import Carousel from './components/Carousel';
import { getVagas } from './services/get-vagas';


const inter = Inter({ subsets: ['latin'] })

type VagasProps = {
  codigo: number;
  tipoVaga: string;
  titulo: string;
  cursos: object;
  cidade: object;
  vaga: object;
}

const cards = [
  { content: 'Conteúdo do Cartão 1' },
  { content: 'Conteúdo do Cartão 2' },
  { content: 'Conteúdo do Cartão 3' },
  { content: 'Conteúdo do Cartão 4' },
  { content: 'Conteúdo do Cartão 5' },
  { content: 'Conteúdo do Cartão 6' },
];


export default async function Home() {
  const vagas = await getVagas();
  return (
    <div>
      <Carousel cards={cards} interval={3000} />
    </div>
  )
}
