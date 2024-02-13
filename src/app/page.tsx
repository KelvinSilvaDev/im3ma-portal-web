import { articulat } from "./fonts"

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start">
      <section className="flex flex-col h-[91.1vh] items-center justify-evenly bg-[url('/bg.jpg')] bg-cover bg-no-repeat px-8 xl:px-0">
        <h3 className="text-3xl text-center md:text-4xl">IGREJA <b className=" font-extrabold ">MISSÃO EIS-ME AQUI</b></h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 container">
          <h1 className={` md:w-1/2 ${articulat.className} font-bold text-4xl md:text-6xl xl:text-8xl`}>
            MENOS QUE O MUNDO É <br className="hidden md:block" /> PECADO
          </h1>
          <button className="md:w-1/2 bg-black rounded-lg px-12 py-6">
            SE TORNE UM 12 DE CRISTO
          </button>
        </div>
      </section>
      <section className="py-8 h-[91.1vh] px-8 xl:px-0">
        <h2 className={`text-center ${articulat.className} font-bold text-3xl`}>CONHEÇA O QUE É O ID</h2>
        <h4 className={`text-center ${articulat.className} font-black text-md`}>A IDENTIDADE DE CRISTO NO MUNDO</h4>
        <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto h-full p-4">
          <div className="col-span-2 bg-red-500 w-full h-full rounded-lg" />
          <div className="col-span-2 md:col-span-1 bg-red-500 w-full h-full rounded-lg" />
          <div className="col-span-2 md:col-span-1 bg-red-500 w-full h-full rounded-lg" />
          <div className="col-span-2 md:col-span-1 bg-red-500 w-full h-full rounded-lg" />
          <div className="col-span-2 md:col-span-1 bg-red-500 w-full h-full rounded-lg" />
        </div>
      </section>
      <section className="w-full py-8 h-96">
        <div className="container mx-auto px-8 lg:px-0">
          <h1 className={`text-left ${articulat.className} text-4xl font-bold`}>A HISTÓRIA DO M3MA</h1>
          <h4 className={`text-left ${articulat.className} text-2xl fond-bold`}>O sonho de uma pessoa</h4>
        </div>
      </section>
    </main>
  )
}