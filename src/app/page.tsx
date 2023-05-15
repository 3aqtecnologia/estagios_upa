import { Inter } from 'next/font/google';
import Card from './components/Card';
import { getVagas } from './services/get-vagas';
const inter = Inter({ subsets: ['latin'] })


type VagasProps = {
  codigo: number;
  tipo_vaga: string;
  titulo: string;
  cursos: object;
  cidade: object;
}

export default async function Home() {
  const vagas = await getVagas();
  const curso: object = ['teste']
  return (
    <main className="flex flex-row flex-wrap justify-around flex-grow">
      {vagas.slice(0, 4).map(vaga =>
        <Card key={vaga.codigo} tipo_vaga={vaga.tipo_vaga.descricao} cursos={vaga.cursos.map((curso, index) => (<span key={index}>{curso.descricao}</span>))} cidade={vaga.cidade.descricao} codigo={vaga.titulo} />

      )
      };
    </main>
  )
}
