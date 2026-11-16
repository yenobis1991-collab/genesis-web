import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TechStrip from './components/TechStrip.jsx'
import Services from './components/Services.jsx'
import WhyMe from './components/WhyMe.jsx'
import Examples from './components/Examples.jsx'
import Offer from './components/Offer.jsx'
import Process from './components/Process.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Cta from './components/Cta.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

// App junta todas las secciones en el orden en que se ven en la página
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStrip />
      <Services />
      <WhyMe />
      <Examples />
      <Offer />
      <Process />
      <Pricing />
      <Faq />
      <Cta />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
