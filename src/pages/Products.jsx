import { useState } from 'react'

const products = [
  {
    emoji: '🥛',
    name: 'Milk',
    desc: 'Unprocessed, full-cream milk collected daily from our member farms — rich in nutrition and taste.',
    badge: 'Daily Fresh',
    variants: [
      { size: '1 Litre', price: 40 },
      { size: '500 ml', price: 20 },
      { size: '250 ml', price: 10 },
    ],
  },
  {
    emoji: '🧈',
    image: '/images/2.jpeg',
    name: 'Ghee',
    desc: 'Churned traditionally from pure cream, our ghee carries the authentic aroma and taste of village dairy.',
    badge: 'Traditional',
    variants: [
      { size: '500 ml', price: 400 },
      { size: '250 ml', price: 200 },
      { size: '150 ml', price: 120 },
    ],
  },
  {
    emoji: '🥣',
    image: '/images/3.jpeg',
    name: 'Curd',
    desc: 'Set in natural conditions, our curd is thick, tangy, and probiotic-rich — perfect for every meal.',
    badge: 'Probiotic',
    variants: [
      { size: '200 ml', price: 20 },
      { size: '400 ml', price: 40 },
      { size: '1 Litre', price: 100 },
    ],
  },
  {
    emoji: '🍚',
    image: '/images/Goa_image.jpeg',
    name: 'Milk Goa',
    desc: 'Premium white sugar sourced from Goa, known for its purity and rich sweetness.',
    badge: 'Premium',
    variants: [
      { size: '250 gram', price: 80 },
      { size: '500 gram', price: 160 },
      { size: '1 kg', price: 320 },
    ],
  },
  {
    emoji: '🫘',
    image: '/images/countty_image.jpeg',
    name: 'Country Sugar',
    desc: 'Natural unrefined sugar with earthy sweetness — a healthier alternative for your daily use.',
    badge: 'Natural',
    variants: [
      { size: '250 gram', price: 120 },
      { size: '500 gram', price: 250 },
      { size: '1 kg', price: 500 },
    ],
  },
  {
    emoji: '💧',
    image: '/images/buttermilk_image.jpeg',
    name: 'Buttermilk',
    desc: 'Refreshing traditional moru, naturally churned and lightly salted — a staple of Tamil homes.',
    badge: 'Refreshing',
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

  const addToCart = (productName, variant) => {
    setCart((prev) => {
      const key = `${productName} - ${variant.size}`
      const exists = prev.find((item) => item.key === key)
      if (exists) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { key, name: productName, size: variant.size, price: variant.price, qty: 1 }]
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
    let msg = 'Hello! I would like to order:\n\n'
    cart.forEach((item) => {
      msg += `${item.name} (${item.size}) x ${item.qty} = Rs.${item.price * item.qty}\n`
    })
    msg += `\nTotal: Rs.${total}`
    if (address.trim()) {
      const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
      msg += `\n\nDelivery Address: ${address}\nLocation: ${mapLink}`
    }
    msg += '\n\nPlease confirm my order.'
    window.open(`https://wa.me/919042135968?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const trackLocation = () => {
    if (!address.trim()) return
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`, '_blank')
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
        {products.map((p) => (
          <div className="product-card fade-in" key={p.name}>
            {p.image && (
              <div className="product-img-wrap">
                <img src={p.image} alt={p.name} className="product-img" />
              </div>
            )}
            {!p.image && <div className="product-emoji">{p.emoji}</div>}
            <div className="product-body">
            <div className="product-name">{p.name}</div>
            <div className="product-desc">{p.desc}</div>
            <div className="product-variants">
              {p.variants.map((v) => (
                <div className="variant-row" key={v.size}>
                  <span className="variant-size">{v.size}</span>
                  <span className="variant-price">₹{v.price}</span>
                  <button className="add-btn" onClick={() => addToCart(p.name, v)} title="Add to Cart">+</button>
                </div>
              ))}
            </div>
            <span className="product-badge">{p.badge}</span>
            </div>
          </div>
        ))}
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
              <label className="cart-address-label">📍 Delivery Address</label>
              <div className="cart-address-row">
                <input
                  type="text"
                  className="cart-address-input"
                  placeholder="Enter your delivery address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button className="track-btn" onClick={trackLocation} disabled={!address.trim()} title="Track on Map">
                  🗺️
                </button>
              </div>
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
