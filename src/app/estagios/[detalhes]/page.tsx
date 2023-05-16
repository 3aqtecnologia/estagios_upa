import { ReactNode } from "react";
import { getVagas } from "../services/get-vagas";
import { } from "./../services/get-vaga-by-title";

type VagasProps = {
  filter: any;
  id: string;
  codigo: number;
  titulo: string;
  tipoVaga: string;
  cursos: ReactNode;
  cidade: ReactNode;
  concedente: string;
}
export default async function UserDetailsPage({ params }: { params: { titulo: string } }) {


  const user = await getVagas();
  // console.log(user)

  const nv = { ...user }
  console.log(nv[3])
  // const vfilte = user.filter(title == params.titulo);
  // const vf = user.filter((vaga: any) => user.titulo === 'ESTÁGIO');
  // console.log(vf);


  return (
    <>

    </>
  );
}
