import { NavLink } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="bottom-tab-bar">
      <NavLink to="/" end>
        <span className="tab-icon">🏠</span>
        <span className="tab-label">Home</span>
      </NavLink>
      <NavLink to="/products">
        <span className="tab-icon">🥛</span>
        <span className="tab-label">Products</span>
      </NavLink>
      <NavLink to="/gallery">
        <span className="tab-icon">🖼️</span>
        <span className="tab-label">Gallery</span>
      </NavLink>
      <NavLink to="/faq">
        <span className="tab-icon">❓</span>
        <span className="tab-label">FAQ</span>
      </NavLink>
      <NavLink to="/location">
        <span className="tab-icon">📍</span>
        <span className="tab-label">Location</span>
      </NavLink>
      <NavLink to="/contact">
        <span className="tab-icon">💬</span>
        <span className="tab-label">Contact</span>
      </NavLink>
    </nav>
  )
}
