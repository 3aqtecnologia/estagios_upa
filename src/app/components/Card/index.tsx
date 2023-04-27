
import { FaIdCardAlt } from 'react-icons/fa';

export default function Card() {

  return (
    <>
      <div className="m-2 overflow-hidden shadow-lg max-w-min rounded-3xl">
        <div className="justify-center px-3 py-4 ">
          <div className="flex flex-row ">
            <div className="px-5 pt-1 mb-2 text-3xl font-bold text-green-600 align-middle ">
              <FaIdCardAlt className='align-middle' />
            </div>
            <div className="mb-2 text-xl font-black leading-5 text-green-600 uppercase ">ESTÁGIO OBRIGATÓRIO</div>
          </div>
          <div className="flex justify-center my-3 text-lg font-bold text-black ">
            Arquitetura e Urbanismo
          </div>
          <p className="flex justify-center text-base tracking-wide text-gray-500 align-middle">
            Juazeiro do Norde-CE
          </p>
        </div>
        <div className="flex justify-center px-6 pt-4 pb-2 align-middle">
          <button className="px-8 py-2 mb-2 font-light tracking-wide text-white bg-green-700 rounded-full hover:bg-green-900">Ver detelhes</button>
        </div>
      </div>
    </>
  )
}
