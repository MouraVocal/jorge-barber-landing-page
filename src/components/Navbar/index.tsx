import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '/'
    },
    {
      id: 2,
      name: 'About',
      href: '/about'
    },
    {
      id: 3,
      name: 'Contact',
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
    <nav className="absolute flex gap-4 items-center justify-around w-full h-20 p-h-10 bg-transparent">
      <div className="relative h-12 w-12">
        <Image
          src="/jorge-logo-clean.png"
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="Jorge Barber Logo"
        />
      </div>

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
