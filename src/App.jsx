import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

import Hero from './pages/Hero'
import About from './pages/About'
import Products from './pages/Products'
import WhyUs from './pages/WhyUs'
import Hours from './pages/Hours'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import FAQ from './pages/FAQ'
import Location from './pages/Location'
import Delivery from './pages/Delivery'
import Contact from './pages/Contact'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyUs />
      <Hours />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Location />
      <Delivery />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
