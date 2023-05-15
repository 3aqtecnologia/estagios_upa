import { Inter } from 'next/font/google';
import Card from './components/Card';
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

export default async function Home<VagasProps>() {
  const vagas = await getVagas();
  return (
    <main className="flex flex-row flex-wrap justify-around flex-grow">
      {vagas.slice(0, 4).map(vaga =>
        <Card key={vaga.codigo} tipoVaga={vaga.tipo_vaga.descricao} cursos={vaga.cursos.map((curso, index) => (<span key={index}>{curso.descricao}</span>))} cidade={vaga.cidade.descricao} codigo={vaga.titulo} />
      )
      };
    </main>
  )
}
