import { useState, useRef, useEffect } from 'react'

const cards = [
  { icon: '🐄', title: 'From Local Farms to Your Home', desc: 'Milk sourced directly from nearby dairy farms in Marudhadu, ensuring freshness at every step.' },
  { icon: '🌅', title: 'Freshness Starts Every Morning', desc: 'Milk collected at dawn, tested, and delivered the same morning to your home.' },
  { icon: '🌇', title: 'Evening Collection', desc: 'A second collection in the evening ensures fresh milk is available for dinner and the next day.' },
  { icon: '🔬', title: 'Quality Tested', desc: 'Every batch is checked for purity before distribution — no compromise on what reaches your family.' },
  { icon: '🥛', title: 'Pure Raw Cow Milk, Every Day', desc: 'No processing, no additives — just wholesome, natural cow milk delivered daily.' },
  { icon: '🤝', title: 'Supports Local Farmers', desc: 'Buying from us directly benefits the farming families of Marudhadu village and the surrounding region.' },
  { icon: '🏘️', title: 'Community Cooperative', desc: 'A registered cooperative society, transparently managed by and for the benefit of our member farmers.' },
  { icon: '🏆', title: '200+ Suppliers. 300+ Happy Customers.', desc: 'A growing network of farmers and families united by a shared commitment to purity and quality.' },
]

export default function WhyUs() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef(null)
  const touchStart = useRef(null)

  const go = (dir) => {
    setCurrent((prev) => (prev + dir + cards.length) % cards.length)
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
    <section className="why">
      <div className="why-header fade-in">
        <p className="section-label" style={{ color: 'var(--green-light)' }}>Why Choose Us & Freshness You Can Trust</p>
        <h2>The MAS Difference</h2>
        <p>We stand for more than just milk — we stand for community, quality, and trust.</p>
      </div>
      <div
        className="why-grid"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="why-track" ref={trackRef}>
          {cards.map((c) => (
            <div className="why-card" key={c.title}>
              <div className="why-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="why-nav">
        <div className="why-dots">
          {cards.map((_, i) => (
            <button
              key={i}
              className={`why-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
