import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="flex items-center w-full py-8 border-t-2 border-gray-500">
      <div className="flex gap-4 w-full h-24 items-center justify-center">
        <Link href="/">
          <div className="relative h-10 w-10 md:w-24 md:h-24">
            <Image
              src="/jorge-logo-clean.png"
              alt="Logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </Link>
        <p className="text-slate-300">© 2020 Jorge Barbearia</p>
      </div>
      <div className="w-full items-center justify-center">
        <p className="text-center">Contato</p>
      </div>
    </footer>
  )
}
