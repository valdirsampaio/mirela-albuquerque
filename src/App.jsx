import Navbar from './components/Navbar'
import Hero from './components/Hero'
import {
  Intro,
  About,
  Treatments,
  Testimonials,
  FAQ,
  Contact,
  Footer,
  WhatsAppButton,
} from './components/Sections'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Treatments />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
