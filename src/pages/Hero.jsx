export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-circle"></div>
      <div className="hero-content">
        <div className="hero-eyebrow">Established Cooperative Society</div>
        <div className="hero-welcome">MAS Milk</div>
        <h1>
          Welcome to Farm to Family
        </h1>
        <p className="hero-desc">
          MAS Milk Society brings you fresh, wholesome milk sourced directly from trusted local dairy farmers in Marudhadu, Tamil Nadu — delivered with care and a commitment to purity.
        </p>
        <div className="hero-actions">
          <a href="#products" className="btn-primary">Our Products</a>
          <a href="#contact" className="btn-ghost">Get in Touch</a>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Pure & Natural</div></div>
        <div className="stat"><div className="stat-num">100%</div><div className="stat-label">Local Farmers' Trust</div></div>
        <div className="stat"><div className="stat-num">Fresh</div><div className="stat-label">Daily Supply</div></div>
      </div>
      <div className="milk-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" height="120">
          <path className="wave-path" fill="#FFF8F0" d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 C1680,100 1920,20 2160,60 L2160,120 L0,120 Z"/>
          <path className="wave-path2" fill="rgba(255,248,240,0.4)" d="M0,80 C360,40 720,110 1080,70 C1440,30 1800,90 2160,70 L2160,120 L0,120 Z"/>
        </svg>
      </div>
    </section>
  )
}
