import Nav from '@/components/nav/Nav'
import Hero from '@/components/hero/Hero'
import Mission from '@/components/sections/Mission'
import Problem from '@/components/sections/Problem'
import Stats from '@/components/sections/Stats'
import Products from '@/components/sections/Products'
import CaseForNow from '@/components/sections/CaseForNow'
import Vision from '@/components/sections/Vision'
import Team from '@/components/sections/Team'
import SupportedBy from '@/components/sections/SupportedBy'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Problem />
      <Stats />
      <Products />
      <CaseForNow />
      <Vision />
      <Team />
      <SupportedBy />
      <Contact />
      <Footer />
    </main>
  )
}
