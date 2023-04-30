
export default function Card() {

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
              <small className="px-4 py-1 text-xs font-semibold text-white uppercase align-middle bg-blue-500 rounded-full" style={{ fontSize: 10 }}>OBRIGATÓRIO</small>
            </div>

            <div className="flex justify-start my-3 text-xl font-bold text-black ">
              ITAIPÚ Binacional
            </div>
            <p className="flex justify-start text-xs tracking-wide text-gray-700 align-middle">
              Administração, Recursos Humanos e Ciências Contábeis
            </p>
            <p className="flex justify-start mt-2 text-sm font-semibold tracking-wide text-gray-800 align-middle mb-14">
              Juazeiro do Norte-CE
            </p>
          </div>
        </div>
        <div className="flex justify-center align-middle">
          <button className="z-auto py-2 text-lg font-medium tracking-wide text-blue-800 uppercase bg-gray-300 rounded-b-lg w-96 hover:bg-gray-200 hover:text-green-800 hover:font-bold" >Ver detelhes</button>
        </div>
      </div>
    </>
  )
}
