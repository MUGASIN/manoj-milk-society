import { useState, useRef, useEffect } from 'react'

const testimonials = [
  { text: 'The milk is always fresh and delivered right on time. You can really taste the difference compared to packaged milk.', author: 'Lakshmi R., Marudhadu' },
  { text: 'We\'ve been buying from MAS Milk Society for years. Honest people, fair prices, and consistent quality every single day.', author: 'Saravanan K., Marudhadu' },
  { text: 'The curd is the best in the area — thick, fresh, and never sour. Free delivery within 2 km makes it even better.', author: 'Meena P., Marudhadu' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const touchStart = useRef(null)

  const go = (dir) => {
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`
    }
  }, [current])

  useEffect(() => {
    const timer = setInterval(() => go(1), 4000)
    return () => clearInterval(timer)
  }, [])

  const handleTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const handleTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) go(diff > 0 ? 1 : -1)
    touchStart.current = null
  }

  return (
    <section className="testimonials">
      <p className="section-label">Customer Voices</p>
      <h2>What Our Customers Say</h2>
      <div
        className="testimonial-track-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="testimonial-track" ref={trackRef}>
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.author}>
              <div className="t-stars">★★★★★</div>
              <p className="t-text">{t.text}</p>
              <div className="t-author">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-nav">
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
