import { Navbar } from '@/components/Navbar'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <header className="relative flex flex-col items-center">
        <Navbar />
      </header>
      <Main />
      <Footer />
    </>
  )
}
