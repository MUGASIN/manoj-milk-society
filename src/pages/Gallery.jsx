const tiles = [
  { src: '/images/banner.jpeg', label: 'MAS Milk Society', tall: true },
  { src: '/images/Society Building.jpeg', label: 'Society Building', tall: true },
  { src: '/images/milk cuttle.jpeg', label: 'Milk Collection' },
  { src: '/images/service.jpeg', label: 'Our Service' },
  { src: '/images/milk.jpg', label: 'Fresh Milk' },
  { src: '/images/ghee.jpg', label: 'Pure Ghee' },
  { src: '/images/curd.jpg', label: 'Fresh Curd' },
  { src: '/images/milk-goa.jpg', label: 'Milk Goa' },
  { src: '/images/country-sugar.jpg', label: 'Country Sugar' },
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
            <img src={t.src} alt={t.label} className="g-img" />
            <span className="g-label">{t.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
