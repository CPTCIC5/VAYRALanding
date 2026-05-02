import Nav from '@/components/nav/Nav'
import Hero from '@/components/hero/Hero'
import Mission from '@/components/sections/Mission'      // THE THESIS
import CaseForNow from '@/components/sections/CaseForNow' // WHY NOW
import Problem from '@/components/sections/Problem'       // THE DOMAIN
import Products from '@/components/sections/Products'     // MODULE 01
import Stats from '@/components/sections/Stats'           // CREDIBILITY
import Vision from '@/components/sections/Vision'         // THE AMBITION
import Team from '@/components/sections/Team'
import SupportedBy from '@/components/sections/SupportedBy'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />          {/* India cannot import its electromagnetic sovereignty */}
      <Mission />       {/* THE THESIS — why we exist */}
      <CaseForNow />    {/* WHY NOW — three converging forces */}
      <Problem />       {/* THE DOMAIN — the battlefield context */}
      <Products />      {/* MODULE 01 — current work, not identity */}
      <Stats />         {/* credibility numbers */}
      <Vision />        {/* THE AMBITION — where it all goes */}
      <Team />
      <SupportedBy />
      <Contact />
      <Footer />
    </main>
  )
}
