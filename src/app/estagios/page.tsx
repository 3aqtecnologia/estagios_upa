import { RiSearchEyeLine } from "react-icons/ri";
import Card from "./components/Card";

export default function Estagios() {
  return (
    <main className="container mx-auto mt-2 min-w-xl">
      <div className="h-48 px-10 mb-5 text-6xl font-bold text-white align-middle bg-yellow-500 rounded-xl py-14">
        <div className="flex flex-row items-center px-5 align-middle">
          <span className="mr-5 "><RiSearchEyeLine className="text-8xl" /></span>
          <span className="text-6xl">Vagas de Estágio</span>
        </div>
      </div>
      <div className="flex flex-row min-h-screen">
        <div className="mr-6 ">
          <div className="h-64 px-10 pt-8 mr-4 bg-white border border-gray-400 rounded-xl w-60">
            <p className="text-lg font-light text-center">Filtre sua pesquisa</p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Resultados do Filtro</p>
          <div className="flex flex-row flex-wrap justify-evenly ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
      </div>
    </main>


  )
}
