'use client'

// type VagasProps = {
//   filter: any;
//   id: string;
//   codigo: number;
//   titulo: string;
//   tipoVaga: string;
//   cursos: ReactNode;
//   cidade: ReactNode;
//   concedente: string;
// }
export default async function userDetailsPage({ params }: {
  params: { id: string }
}) {


  // const vaga: VagasProps = await getVagaByTitle('itaipu');
  const response = await fetch(`https://estagio.universidadepatativa.com.br/api/v1/vagas?busca=estagio`);
  const vagad = await response.json();
  console.log(vagad)
  console.log(params)

  // const nv = { ...vagad }
  // console.log(nv)
  // const vfilte = user.filter(title == params.titulo);
  // const vf = user.filter((vaga: any) => user.titulo === 'ESTÁGIO');
  // console.log(vf);


  return (
    <>
      <h1>Parametro: {params.id}</h1>
    </>
  );
}
