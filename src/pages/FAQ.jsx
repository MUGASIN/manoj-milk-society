const faqs = [
  { q: 'Do you offer home delivery?', a: 'Yes, we offer free home delivery within a 2 km radius of our society. For locations beyond that, please contact us to check availability.' },
  { q: 'What are your milk collection timings?', a: 'We collect and distribute milk twice daily — in the morning between 5:30 AM and 8:30 AM, and in the evening between 5:00 PM and 7:30 PM.' },
  { q: 'Is the milk tested for quality?', a: 'Every batch of milk collected from our member farmers is tested for purity and quality before it is distributed to customers.' },
  { q: 'Can I become a member of the cooperative?', a: 'Yes, local dairy farmers are welcome to join our cooperative society. Please visit us or call for details on membership and benefits.' },
  { q: 'How can I place a bulk order?', a: 'For bulk or recurring orders, reach out to us directly via phone, email, or WhatsApp, and we\'ll arrange the supply that suits your needs.' },
]

export default function FAQ() {
  return (
    <section className="faq" id="faq">
      <p className="section-label">Have Questions?</p>
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((f) => (
          <details className="faq-item fade-in" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
