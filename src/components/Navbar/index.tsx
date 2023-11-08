import Image from 'next/image'
import Link from 'next/link'

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
      href: 'https://www.instagram.com/jorgebarber/'
    },
    {
      id: 2,
      name: 'Facebook',
      href: 'https://www.facebook.com/jorgebarber/'
    },
    {
      id: 3,
      name: 'Twitter',
      href: 'https://twitter.com/jorgebarber/'
    }
  ]

  return (
    <nav className="absolute flex gap-4 items-center justify-around w-full h-28 p-h-10 bg-transparent">
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

      <ul className="flex gap-4 items-center">
        {navLinks.map(link => (
          <li key={link.id}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <ul className="flex gap-4 items-center">
        {socialLinks.map(link => (
          <li key={link.id}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
