import { ReactNode } from "react";
import { getVagaByTitle } from "./../services/get-vaga-by-title";

type VagasProps = {
  id: string;
  codigo: number;
  titulo: string;
  tipoVaga: string;
  cursos: ReactNode;
  cidade: ReactNode;
  concedente: string;
}
export default async function UserDetailsPage({ params }: { params: { titulo: string } }) {


  const user: VagasProps = await getVagaByTitle(params.titulo);

  return (
    <>
      <h2>teste: {user.titulo}</h2>
    </>
  );
}
