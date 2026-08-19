const testimonials = [
  { text: 'The milk is always fresh and delivered right on time. You can really taste the difference compared to packaged milk.', author: 'Lakshmi R., Marudhadu' },
  { text: 'We\'ve been buying from MAS Milk Society for years. Honest people, fair prices, and consistent quality every single day.', author: 'Saravanan K., Marudhadu' },
  { text: 'The curd is the best in the area — thick, fresh, and never sour. Free delivery within 2 km makes it even better.', author: 'Meena P., Marudhadu' },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <p className="section-label">Customer Voices</p>
      <h2>What Our Customers Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <div className="testimonial-card fade-in" key={t.author}>
            <div className="t-stars">★★★★★</div>
            <p className="t-text">{t.text}</p>
            <div className="t-author">— {t.author}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
