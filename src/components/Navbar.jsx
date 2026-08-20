import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setOpen(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <nav>
      <div className="nav-logo">
        <img src="/images/logo.jpeg" alt="MAS Milk Society" className="logo-mark" />
        <span>MAS Milk Society</span>
      </div>

      {open && <div className="nav-overlay" onClick={closeMenu} />}

      <ul id="navLinks" className={open ? 'open' : ''}>
        <li><NavLink to="/" end onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/products" onClick={closeMenu}>Products</NavLink></li>
        <li><NavLink to="/gallery" onClick={closeMenu}>Gallery</NavLink></li>
        <li><NavLink to="/faq" onClick={closeMenu}>FAQ</NavLink></li>
        <li><NavLink to="/location" onClick={closeMenu}>Location</NavLink></li>
        <li><NavLink to="/contact" className="nav-cta" onClick={closeMenu}>Contact</NavLink></li>
      </ul>

      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  )
}
