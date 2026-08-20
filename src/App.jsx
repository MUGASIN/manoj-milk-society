import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import BottomNav from './pages/BottomNav'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import ProductsPage from './pages/ProductsPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'

function FadeInObserver() {
  const { pathname } = useLocation()

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
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <FadeInObserver />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
      <BottomNav />
      <WhatsAppFloat />
    </BrowserRouter>
  )
}
