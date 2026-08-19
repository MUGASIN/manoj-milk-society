import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav>
      <div className="nav-logo">
        <div className="logo-mark">M</div>
        <span>MAS Milk Society</span>
      </div>
      <ul id="navLinks" className={open ? 'open' : ''}>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#products" onClick={handleLinkClick}>Products</a></li>
        <li><a href="#faq" onClick={handleLinkClick}>FAQ</a></li>
        <li><a href="#location" onClick={handleLinkClick}>Location</a></li>
        <li><a href="#delivery" onClick={handleLinkClick}>Delivery</a></li>
        <li><a href="#contact" className="nav-cta" onClick={handleLinkClick}>Contact</a></li>
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
