import Link from "next/link";
import { ReactNode } from "react";

type VagasProps = {
  codigo: number;
  titulo: string;
  tipoVaga: string;
  cursos: ReactNode;
  cidade: ReactNode;
  concedente: string;
}
export default function Card({ tipoVaga, cursos, cidade, codigo, titulo, concedente }: VagasProps) {

  return (
    <>
      <div className="mx-2 my-3 overflow-hidden bg-white border border-2 border-gray-300 w-96 rounded-xl ">
        <div className="flex flex-row items-center">
          <div className="mx-2 mb-10">
            <img src="./../../../favicon.ico" alt="logoUpa" />
            {/* <RiSearchEyeLine className="mx-2 text-green-800 align-middle text-8xl" /> */}
          </div>
          <div className="justify-center px-3 py-4 ">
            <div className="flex flex-row justify-start ">
              <small className="px-4 py-1 text-xs font-semibold text-white uppercase align-middle bg-blue-500 rounded-full" style={{ fontSize: 10 }}>
                {tipoVaga}
              </small>
            </div>

            <div className="flex justify-start my-3 text-lg font-bold text-black ">
              {concedente}
            </div>
            <p className="flex flex-wrap justify-start text-xs tracking-wide text-gray-700 align-middle">
              {cursos}
            </p>
            <p className="flex flex-wrap justify-start mt-2 text-sm font-semibold tracking-wide text-gray-800 align-middle mb-14">
              {cidade}
            </p>
          </div>
        </div>
        <div className="box-border flex justify-end align-bottom">
          <Link target='_top' href={`https://institucional.universidadepatativa.com.br/estagio-detalhe/?id=${titulo}`} className="z-auto justify-end py-2 text-lg font-medium tracking-wide text-center text-blue-800 uppercase align-bottom bg-gray-300 rounded-b-lg w-96 hover:bg-gray-200 hover:text-green-800 hover:font-bold" >Ver detelhes</Link>
        </div>
      </div>
    </>
  )
}
