import Image from 'next/image'
import Link from 'next/link'
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs'

export const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Início',
      href: '/'
    },
    {
      id: 2,
      name: 'Sobre',
      href: '/about'
    },
    {
      id: 3,
      name: 'Serviços',
      href: '/services'
    },
    {
      id: 4,
      name: 'Preços',
      href: '/pricing'
    },
    {
      id: 5,
      name: 'Galeria',
      href: '/gallery'
    },
    {
      id: 6,
      name: 'Contato',
      href: '/contact'
    }
  ]

  const socialLinks = [
    {
      id: 1,
      name: 'Instagram',
      href: 'https://www.instagram.com/barbeariajorgewilson',
      icon: (
        <BsInstagram className="h-4 w-4 md:h-8 md:w-8 text-[#d6a354] hover:text-[#ffc264] duration-300 ease-in-out" />
      )
    },
    {
      id: 2,
      name: 'Facebook',
      href: 'https://www.facebook.com/barbeariajorgewilson',
      icon: (
        <BsFacebook className="h-4 w-4 md:h-8 md:w-8 text-[#d6a354] hover:text-[#ffc264] duration-300 ease-in-out" />
      )
    },
    {
      id: 3,
      name: 'TikTok',
      href: 'https://www.youtube.com/@barbeariajorgewilson',
      icon: (
        <BsYoutube className="h-4 w-4 md:h-8 md:w-8 text-[#d6a354] hover:text-[#ffc264] duration-300 ease-in-out" />
      )
    }
  ]

  return (
    <nav className="absolute flex items-center justify-between w-full h-28 px-16 bg-transparent z-10">
      <Link href="/">
        <div className="relative h-10 w-10 md:w-24 md:h-24">
          <Image
            src="/jorge-logo-clean.png"
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="Jorge Barber Logo"
          />
        </div>
      </Link>

      <ul className="flex gap-8 items-center">
        {navLinks.map(link => (
          <li key={link.id}>
            <Link
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-5 items-center px-8">
        {socialLinks.map(link => (
          <li key={link.id}>
            <Link href={link.href}>{link.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
