import { useState } from 'react'

const reverseGeocode = async (lat, lng) => {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`,
      { headers: { 'User-Agent': 'MAS-Milk-Society/1.0' } }
    )
    const data = await res.json()
    if (data && data.display_name) {
      const a = data.address
      const parts = [
        a.house_number, a.road, a.hamlet, a.neighbourhood || a.suburb,
        a.city || a.town || a.village || a.county,
        a.state, a.postcode
      ].filter(Boolean)
      if (parts.length >= 3) return parts.join(', ')
      return data.display_name
    }
  } catch {}
  return `${lat}, ${lng}`
}

const products = [
  {
    emoji: '🥛',
    image: '/images/milk.jpg',
    name: 'Milk',
    desc: 'Unprocessed, full-cream milk collected daily from our member farms — rich in nutrition and taste.',
    badge: 'Daily Fresh',
    accent: '#E8F5E9',
    variants: [
      { size: '1 Litre', price: 40 },
      { size: '500 ml', price: 20 },
      { size: '250 ml', price: 10 },
    ],
  },
  {
    emoji: '🧈',
    image: '/images/ghee.jpg',
    name: 'Ghee',
    desc: 'Churned traditionally from pure cream, our ghee carries the authentic aroma and taste of village dairy.',
    badge: 'Traditional',
    accent: '#FFF8E1',
    variants: [
      { size: '500 ml', price: 400 },
      { size: '250 ml', price: 200 },
      { size: '150 ml', price: 120 },
    ],
  },
  {
    emoji: '🥣',
    image: '/images/curd.jpg',
    name: 'Curd',
    desc: 'Set in natural conditions, our curd is thick, tangy, and probiotic-rich — perfect for every meal.',
    badge: 'Probiotic',
    accent: '#F3E5F5',
    variants: [
      { size: '200 ml', price: 20 },
      { size: '400 ml', price: 40 },
      { size: '1 Litre', price: 100 },
    ],
  },
  {
    emoji: '🍚',
    image: '/images/milk-goa.jpg',
    name: 'Milk Goa',
    desc: 'Premium white sugar sourced from Goa, known for its purity and rich sweetness.',
    badge: 'Premium',
    accent: '#E3F2FD',
    variants: [
      { size: '250 gram', price: 80 },
      { size: '500 gram', price: 160 },
      { size: '1 kg', price: 320 },
    ],
  },
  {
    emoji: '🫘',
    image: '/images/country-sugar.jpg',
    name: 'Country Sugar',
    desc: 'Natural unrefined sugar with earthy sweetness — a healthier alternative for your daily use.',
    badge: 'Natural',
    accent: '#FFF3E0',
    variants: [
      { size: '250 gram', price: 120 },
      { size: '500 gram', price: 250 },
      { size: '1 kg', price: 500 },
    ],
  },
  {
    emoji: '💧',
    image: '/images/buttermilk.jpg',
    name: 'Buttermilk',
    desc: 'Refreshing traditional moru, naturally churned and lightly salted — a staple of Tamil homes.',
    badge: 'Refreshing',
    accent: '#E0F7FA',
    variants: [
      { size: '400 ml', price: 20 },
      { size: '800 ml', price: 40 },
    ],
  },
]

export default function Products() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)
  const [address, setAddress] = useState('')
  const [customerName, setCustomerName] = useState('')
  const [locating, setLocating] = useState(false)
  const [locationError, setLocationError] = useState('')
  const [selections, setSelections] = useState(() => {
    const init = {}
    products.forEach((p) => {
      init[p.name] = { variantIdx: 0, qty: 1 }
    })
    return init
  })

  const updateSelection = (name, field, value) => {
    setSelections((prev) => ({
      ...prev,
      [name]: { ...prev[name], [field]: value },
    }))
  }

  const addToCart = (productName, variant, qty) => {
    setCart((prev) => {
      const key = `${productName} - ${variant.size}`
      const exists = prev.find((item) => item.key === key)
      if (exists) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + qty } : item
        )
      }
      return [...prev, { key, name: productName, size: variant.size, price: variant.price, qty }]
    })
    setShowCart(true)
  }

  const updateQty = (key, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.key === key ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    )
  }

  const removeItem = (key) => {
    setCart((prev) => prev.filter((item) => item.key !== key))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)

  const buyNow = () => {
    if (cart.length === 0) return
    let msg = `Hello! I'm ${customerName || 'Customer'} and I would like to order:\n\n`
    cart.forEach((item) => {
      msg += `${item.name} (${item.size}) x ${item.qty} = Rs.${item.price * item.qty}\n`
    })
    msg += `\nTotal: Rs.${total}`
    if (address.trim()) {
      const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
      msg += `\n\nDelivery Address: ${address}\nLocation: ${mapLink}`
    }
    msg += '\n\nPlease confirm my order.'
    const url = `https://wa.me/919042135968?text=${encodeURIComponent(msg)}`
    const url2 = `https://wa.me/919786491568?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    window.open(url2, '_blank')
  }

  const trackLocation = () => {
    if (!address.trim()) return
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
  }

  const useCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser')
      return
    }
    setLocating(true)
    setLocationError('')

    const onSuccess = async (position) => {
      const { latitude, longitude, accuracy } = position.coords
      const addr = await reverseGeocode(latitude, longitude)
      setAddress(addr)
      setLocating(false)
      if (accuracy > 100) {
        setLocationError(`Location accuracy is ~${Math.round(accuracy)}m. Tap the pin again for a more precise fix.`)
      }
    }

    const onError = (err) => {
      setLocating(false)
      if (err.code === 1) setLocationError('Location permission denied. Please allow location access.')
      else if (err.code === 2) setLocationError('Unable to determine your location.')
      else setLocationError('Location request timed out. Try again.')
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position.coords.accuracy <= 50) {
          onSuccess(position)
        } else {
          navigator.geolocation.getCurrentPosition(
            onSuccess,
            () => onSuccess(position),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0 }
          )
        }
      },
      onError,
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    )
  }

  return (
    <section className="products" id="products">
      <p className="section-label">What We Offer</p>
      <h2>Our Dairy Products</h2>
      <p className="sub">Wholesome dairy from Marudhadu's finest farms, available daily.</p>

      <div className="free-delivery-banner fade-in">
        <span className="fd-icon">🚚</span>
        <span>Free delivery up to <strong>10 km</strong> for orders above <strong>5 litres of milk</strong></span>
      </div>

      <div className="product-grid">
        {products.map((p) => {
          const sel = selections[p.name]
          const chosen = p.variants[sel.variantIdx]

          if (p.imageOnly) {
            return (
              <div className="product-card product-card-image fade-in" key={p.name}>
                <div className="pc-visual pc-visual-full" style={{ background: p.accent }}>
                  <img src={p.image} alt={p.name} className="pc-img" />
                </div>
              </div>
            )
          }

          return (
            <div className="product-card fade-in" key={p.name}>
              <div className="pc-visual">
                {p.image ? (
                  <img src={p.image} alt={p.name} className="pc-img" />
                ) : (
                  <div className="pc-emoji">{p.emoji}</div>
                )}
                <span className="pc-badge">{p.badge}</span>
              </div>
              <div className="pc-content">
                <div className="pc-header">
                  <h3 className="pc-name">{p.name}</h3>
                  <span className="pc-price">₹{chosen.price}</span>
                </div>
                <p className="pc-desc">{p.desc}</p>

                <div className="pc-order">
                  <div className="pc-order-row">
                    <label className="pc-order-label">Size</label>
                    <select
                      className="pc-select"
                      value={sel.variantIdx}
                      onChange={(e) => updateSelection(p.name, 'variantIdx', Number(e.target.value))}
                    >
                      {p.variants.map((v, i) => (
                        <option key={v.size} value={i}>
                          {v.size} — ₹{v.price}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="pc-order-row">
                    <label className="pc-order-label">Qty</label>
                    <div className="pc-qty">
                      <button
                        className="pc-qty-btn"
                        onClick={() => updateSelection(p.name, 'qty', Math.max(1, sel.qty - 1))}
                      >−</button>
                      <span className="pc-qty-val">{sel.qty}</span>
                      <button
                        className="pc-qty-btn"
                        onClick={() => updateSelection(p.name, 'qty', sel.qty + 1)}
                      >+</button>
                    </div>
                  </div>
                  <button
                    className="pc-add-btn"
                    onClick={() => addToCart(p.name, chosen, sel.qty)}
                  >
                    Add to Cart — ₹{chosen.price * sel.qty}
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {cart.length > 0 && (
        <div className={`cart-panel ${showCart ? 'open' : ''}`}>
          <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="cart-close" onClick={() => setShowCart(false)}>✕</button>
          </div>
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.key}>
                <div className="cart-item-info">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-size">{item.size}</span>
                </div>
                <div className="cart-item-controls">
                  <button className="qty-btn" onClick={() => updateQty(item.key, -1)}>−</button>
                  <span className="cart-item-qty">{item.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(item.key, 1)}>+</button>
                </div>
                <span className="cart-item-total">₹{item.price * item.qty}</span>
                <button className="cart-item-remove" onClick={() => removeItem(item.key)}>✕</button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-address">
              <label className="cart-address-label">👤 Your Name</label>
              <input
                type="text"
                className="cart-address-input"
                placeholder="Enter your name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>
            <div className="cart-address">
              <label className="cart-address-label">📍 Delivery Address</label>
              <div className="cart-address-row">
                <input
                  type="text"
                  className="cart-address-input"
                  placeholder="Enter your delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button
                  className="track-btn"
                  onClick={useCurrentLocation}
                  disabled={locating}
                  title="Use current location"
                >
                  {locating ? '⏳' : '📍'}
                </button>
                <button className="track-btn" onClick={trackLocation} disabled={!address.trim()} title="Track on Map">
                  🗺️
                </button>
              </div>
              {locationError && <p className="cart-location-error">{locationError}</p>}
            </div>
            <div className="cart-total">
              <span>Total</span>
              <span className="cart-total-price">₹{total}</span>
            </div>
            <button className="btn-primary buy-btn" onClick={buyNow}>Buy Now via WhatsApp</button>
          </div>
        </div>
      )}

      {cart.length > 0 && !showCart && (
        <button className="cart-fab" onClick={() => setShowCart(true)}>
          🛒 <span className="cart-fab-count">{cart.reduce((s, i) => s + i.qty, 0)}</span>
        </button>
      )}

    </section>
  )
}
