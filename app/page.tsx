import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Differentials from './components/Differentials'
import About from './components/About'
import Treatments from './components/Treatments'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import InstagramFeed from './components/InstagramFeed'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Differentials />
        <About />
        <Treatments />
        <Process />
        <Testimonials />
        <InstagramFeed />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
