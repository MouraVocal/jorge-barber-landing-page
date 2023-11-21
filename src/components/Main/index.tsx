import Image from 'next/image'
import { libreCaslonText } from '@/fonts'

export const Main = () => {
  return (
    <main className="relative flex h-screen px-16 w-full gap-20">
      <article className="w-1/2 h-[calc(100%-7rem)] my-28 flex flex-col justify-center">
        <h2 className={`${libreCaslonText.className} text-6xl mb-10`}>
          A <span className="text-[#d6a354]">barbearia</span> que entende o que{' '}
          <span className="text-[#d6a354]">você</span> precisa!
        </h2>
        <p className="mb-10">
          Cuidando da sua aparência para que você possa se concentrar no que
          realmente importa!
        </p>
        <div className="flex gap-10">
          <button className="px-8 py-5 bg-[#d6a354] text-slate-900">
            Agendar
          </button>
          <button className="px-8 py-5 border-[#d6a354] border-2 text-[#d6a354]">
            Contato
          </button>
        </div>
      </article>
      <div className="relative h-screen w-1/2">
        <Image
          src="/2-people.jpg"
          alt="Two persons"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center filter brightness-50"
        />
      </div>
    </main>
  )
}
