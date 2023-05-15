
import Link from 'next/link';
import { ReactNode } from 'react';
import { FaIdCardAlt } from 'react-icons/fa';

type VagasProps = {
  codigo: number;
  tipoVaga: string;
  titulo: string;
  cursos: ReactNode;
  cidade: ReactNode;
}
export default function Card({ tipoVaga, cursos, cidade, codigo }: VagasProps) {

  return (
    <>
      <div className="max-w-xs mx-1 my-2 overflow-hidden shadow-lg rounded-3xl">
        <div className="justify-center px-3 py-4 ">
          <div className="flex flex-row ">
            <div className="px-5 py-3 mb-2 text-3xl font-bold text-green-600 align-middle ">
              <FaIdCardAlt className='align-middle' />
            </div>
            <div className="pt-1 mb-2 text-2xl font-black leading-6 text-green-600 uppercase align-middle ">
              {tipoVaga}
            </div>
          </div>
          <div className="flex flex-wrap justify-center my-3 text-base font-bold text-center text-black ">
            {cursos}
          </div>
          <p className="flex justify-center text-sm tracking-wide text-gray-500 align-middle">
            {cidade}
          </p>
        </div>
        <div className="flex justify-center px-6 pt-4 pb-2 align-middle">
          <Link target='_top' href={`https://institucional.universidadepatativa.com.br/estagio-detalhe/?id=${codigo}`} className="px-8 py-2 mb-2 font-light tracking-wide text-white bg-green-700 rounded-full hover:bg-green-900">
            Ver detelhes
          </Link>
          {/* <button className="px-8 py-2 mb-2 font-light tracking-wide text-white bg-green-700 rounded-full hover:bg-green-900">Ver detelhes</button> */}
        </div>
      </div>
    </>
  )
}
