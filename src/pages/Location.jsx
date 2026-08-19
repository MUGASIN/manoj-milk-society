export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location-info fade-in">
        <p className="section-label">Find Us</p>
        <h2>Rooted in Marudhadu Village</h2>
        <p>We are located in the heart of Marudhadu, easily accessible for residents of Siriya and nearby villages. Come visit us or call to arrange your daily supply.</p>
        <div className="address-block">
          <p>
            <strong>MAS Milk Society</strong><br />
            MAS, Siriya, Bramanar Street<br />
            Marudhadu, Tamil Nadu – 604 405<br />
            India
          </p>
        </div>
        <a href="https://maps.app.goo.gl/3D5bbAa3CYpXzqHFA" target="_blank" rel="noopener noreferrer" className="btn-primary">Open in Google Maps</a>
      </div>
      <div className="map-embed fade-in">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.8!2d79.5!3d12.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53235f585668a7%3A0x7fa57a81b04d2dd8!2sMAS%20MILK%20SOCIETY!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="MAS Milk Society Location"
        ></iframe>
      </div>
    </section>
  )
}
