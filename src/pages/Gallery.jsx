const tiles = [
  { emoji: '🐄', label: 'Dairy Cattle', tall: true },
  { emoji: '🥛', label: 'Milk Collection' },
  { emoji: '🚜', label: 'Farm Operations' },
  { emoji: '👨‍🌾', label: 'Our Farmers' },
  { emoji: '🏚️', label: 'Society Building', tall: true },
  { emoji: '🧪', label: 'Quality Testing' },
]

export default function Gallery() {
  return (
    <section className="gallery">
      <p className="section-label">A Glimpse Inside</p>
      <h2>Our Farm & Society</h2>
      <p className="sub">A look at the people, animals, and process behind every litre of milk.</p>
      <div className="gallery-grid">
        {tiles.map((t) => (
          <div className={`gallery-tile fade-in${t.tall ? ' tall' : ''}`} key={t.label}>
            <span className="g-emoji">{t.emoji}</span>
            <span className="g-label">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
