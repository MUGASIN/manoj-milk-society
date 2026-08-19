export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-text fade-in">
        <p className="section-label">Who We Are</p>
        <h2>A Community Built on Dairy Tradition</h2>
        <p>MAS Milk Society is a cooperative milk society rooted in Marudhadu village, Siriya, Tamil Nadu. We bring together local farmers and families under a shared commitment to quality, freshness, and honest dairy practices.</p>
        <p>Our society ensures that every drop of milk collected is tested, stored properly, and delivered to you at its freshest — supporting livelihoods while nourishing families across the region.</p>
        <a href="#contact" className="btn-primary" style={{ marginTop: '0.5rem' }}>Connect with Us</a>
      </div>
      <div className="about-visual fade-in">
        <div className="milk-icon-grid">
          <div className="milk-card"><div className="icon">🐄</div><div className="card-title">Farm Sourced</div><div className="card-sub">Direct from local cattle farmers</div></div>
          <div className="milk-card"><div className="icon">✅</div><div className="card-title">Quality Tested</div><div className="card-sub">Every batch checked for purity</div></div>
          <div className="milk-card"><div className="icon">🌿</div><div className="card-title">Natural Process</div><div className="card-sub">No artificial additives</div></div>
          <div className="milk-card"><div className="icon">🤝</div><div className="card-title">Cooperative</div><div className="card-sub">Empowering farmers together</div></div>
        </div>
      </div>
    </section>
  )
}
