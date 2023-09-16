import { Inter } from 'next/font/google';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal } from 'react';
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

export default async function Home() {
  const vagas = await getVagas();
  return (
    <main className="flex flex-row flex-wrap justify-around flex-grow">
      {vagas.slice(0, 3).map((vaga: { codigo: Key | null | undefined; tipo_vaga: { descricao: string; }; cursos: any[]; cidade: { descricao: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }; titulo: string }) =>
        <Card key={vaga.codigo} tipoVaga={vaga.tipo_vaga.descricao} cursos={vaga.cursos.map((curso: { descricao: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }, index: Key | null | undefined) => (<span key={index}>{curso.descricao}</span>))} cidade={vaga.cidade.descricao} titulo={vaga.titulo} codigo={0} />
      )
      };
    </main>
  )
}
