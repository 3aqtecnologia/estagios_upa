import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


export default function Estagios() {
  return (
    <main className="h-screen ">
      <div className="flex flex-row w-9/12 mx-auto mb-10">
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

              <Link target='_blank' href='https://estagio.universidadepatativa.com.br/painel/estudante/login' className="px-8 py-2 mb-2 font-bold tracking-wide text-white bg-blue-700 rounded-full hover:bg-blue-900">
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
            {/* <FaShareAlt /> */}
            <Link target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://institucional.universidadepatativa.com.br/estagio-detalhe/?id=65156181">
              <FaFacebookF />
            </Link>
            <Link target="_blank" href=" https://api.whatsapp.com/send?text=https://institucional.universidadepatativa.com.br/estagio-detalhe/?id=65156181">
              <FaWhatsapp />
            </Link>
            <Link target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url=https://institucional.universidadepatativa.com.br/estagio-detalhe/?id=65156181">
              <FaLinkedinIn />
            </Link>
          </div>

        </div>
      </div>
      <div className="">
        <div className="w-32 px-5 py-3 mb-10 text-xl font-bold text-center bg-gray-200 rounded-t-lg h-f ml-60">Detalhes</div>
        <div className="w-full h-64 py-12 bg-gray-200 px-60">
          <p className="text-2xl font-semibold">
            Local de Estágio
          </p>
          <p className="my-3 text-lg font-light tracking-wide" >CSGC.GB</p>
          <p className="text-lg font-light tracking-wide">Foz do Iguaçu - PR</p>
        </div>
        <div className="w-full h-64 py-12 px-60">
          <p className="text-2xl font-semibold">Fases</p>
          <p className="my-3 text-lg font-light tracking-wide">
            <span className="font-bold"> 02/01/2023 a 10/02/2023 </span> - Inscrições Abertas
          </p>
          <p className="my-3 text-lg font-light tracking-wide">
            <span className="font-bold"> 12/02/2023 -  </span> - Análise Curricular
          </p>
          <p className="my-3 text-lg font-light tracking-wide">
            <span className="font-bold"> 12/02/2023 </span> - Entrevista
          </p>

        </div>
        <div className="w-full py-12 bg-gray-200 h-52 px-60">
          <p className="text-xl font-semibold">
            Cursos contemplados
          </p>
          <p className="my-3 text-xl font-bold">
            Administração, Recursos Humanos e Ciências Contábeis
          </p>
        </div>
        <div className="w-full py-12 mb-20 h-72 px-60 ">
          <p className="text-xl font-semibold">
            Requisitos mínimos
          </p>
          <p className="mt-5 text-xl font-light leading-10 tracking-wide">
            Estar matriculado e cursando os cursos contemplados Ser brasileiro(a) nato(a), naturalizado(a) ou estrangeiro(a) com visto permanente no país; Ter idade mínima de 16 (dezesseis) anos, até a data de posse; Não ter feito estágio por período superior a vinte e dois meses, exceto pessoas com deficiência (Art. 11 da Lei 11.788/08); Residir nas cidades de FOZ DO IGUAÇU/PR.
          </p>
          <p className="text-xl font-light leading-10 tracking-wide">Benefícios:
          </p>
          <p className="text-xl font-light leading-10 tracking-wide">
            Bolsa auxílio: R$ 650,00 por mês - Jornada 30h semanais.
          </p>
          <p className="text-xl font-light leading-10 tracking-wide">
            Auxílio transporte : R$ 100,00 por mês.
          </p>
          <br />
          <br />
        </div>
      </div>
    </main >


  )
}
