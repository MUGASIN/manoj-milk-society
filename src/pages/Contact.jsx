export default function Contact() {
  return (
    <section className="contact" id="contact">
      <p className="section-label">Get in Touch</p>
      <h2>We're Here for You</h2>
      <p>For orders, enquiries, or membership information, reach out to us directly.</p>
      <div className="contact-cards">
        <a href="tel:+919042135968" className="contact-card">
          <span className="c-icon">📞</span>
          <div>
            <div className="c-label">Call Us</div>
            <div className="c-val">Contact Society</div>
          </div>
        </a>
        <a href="https://maps.app.goo.gl/3D5bbAa3CYpXzqHFA" target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="c-icon">📍</span>
          <div>
            <div className="c-label">Visit Us</div>
            <div className="c-val">Marudhadu, TN 604405</div>
          </div>
        </a>
        <a href="mailto:info@masmilksociety.in" className="contact-card">
          <span className="c-icon">✉️</span>
          <div>
            <div className="c-label">Email</div>
            <div className="c-val">info@masmilksociety.in</div>
          </div>
        </a>
        <a href="https://wa.me/919042135968" target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="c-icon">💬</span>
          <div>
            <div className="c-label">WhatsApp</div>
            <div className="c-val">Order Now</div>
          </div>
        </a>
      </div>
    </section>
  )
}
