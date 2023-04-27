import { Inter } from 'next/font/google';
import Card from "./components/Card";

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="flex flex-row flex-wrap justify-around flex-grow">
      {/* <div className='flex justify-center w-full mb-3 text-center align-middle border'>
        <span className='p-10 text-4xl font-black tracking-wide text-center text-green-700'>
          Vagas de Estágio Abertas
        </span>
      </div> */}
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}
