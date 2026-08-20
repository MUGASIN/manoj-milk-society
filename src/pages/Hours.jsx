const hours = [
  { label: 'Morning Collection & Sales', time: '5:00 AM – 9:00 AM' },
  { label: 'Evening Collection & Sales', time: '5:00 PM – 9:00 PM' },
  { label: 'Society Office', time: '9:00 AM – 6:00 PM' },
  { label: 'Weekly Off', time: 'None — Open All Days' },
]

export default function Hours() {
  return (
    <section className="hours">
      <div className="hours-grid">
        <div className="hours-text fade-in">
          <p className="section-label" style={{ color: 'var(--green-light)' }}>Operating Hours</p>
          <h2 style={{ color: 'var(--white)' }}>When We're Open</h2>
          <p style={{ color: '#A8C5B5' }}>Our collection and distribution timings are set to bring you the freshest milk possible, twice a day.</p>
        </div>
        <div className="hours-table fade-in">
          {hours.map((h) => (
            <div className="hours-row" key={h.label}>
              <span>{h.label}</span>
              <span className="hours-time">{h.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
