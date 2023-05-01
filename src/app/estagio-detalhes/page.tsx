import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaShareAlt, FaWhatsapp } from "react-icons/fa";


export default function Estagios() {
  return (
    <main className="container h-screen mx-auto min-w-xl ">
      <div className="flex flex-row mb-10">
        <div className="items-center mr-3">
          <img className="w-48 h-48 rounded-xl" src="https://placehold.co/200/F6B80A/FFFFFF" alt="" />
        </div>
        <div className="flex flex-col w-2/3 p-5 mr-2 ">
          <div className="flex flex-row items-center">
            <div className="mr-5 text-4xl font-bold">ITAIPÚ Binacional</div>
            <div>
              <small className="px-4 py-0.5 text-xs font-semibold text-white uppercase align-middle bg-blue-400 rounded-full" style={{ fontSize: 10 }}>
                OBRIGATÓRIO
              </small>
            </div>
          </div>
          <div className="my-5 text-lg font-light tracking-wide">Administração, Recursos Humanos e Ciências Contábeis</div>
          <div className="flex flex-row items-center mt-3">
            <div className="">
              <span className="text-lg font-light tracking-wide ">Código da Vaga: </span>
              <span className="py-2 pr-16 text-xl font-bold border-r-2 bortder"> 65156181
              </span>
            </div>
            <div className="mx-5">

              <Link target='_top' href='https://institucional.universidadepatativa.com.br/estagios/' className="px-8 py-2 mb-2 font-bold tracking-wide text-white bg-blue-700 rounded-full hover:bg-blue-900">
                Cadastre-se
              </Link>
            </div>
          </div>

        </div>
        <div className="flex flex-col items-center justify-center w-1/4 align-middle">
          <p className="mb-2 text-lg font-bold leading-6 tracking-wide">
            Compartilhe<br />com alguém
          </p>
          <div className="flex flex-row justify-around text-xl w-44" >
            <FaShareAlt />
            <FaFacebookF />
            <FaWhatsapp />
            <FaLinkedinIn />
          </div>

        </div>
      </div>
      <div className="container p-5">
        <div className="w-32 px-5 py-3 ml-20 text-lg font-bold text-center bg-gray-300 rounded-t-lg">Detalhes</div>
        <div className="w-full py-10 bg-gray-300 px-14 h-80">Local de Estágio</div>
        <div className="">Fases</div>
        <div className="">Cursos contemplados</div>
        <div className="">Requisitos mínimos</div>
      </div>
    </main>


  )
}
