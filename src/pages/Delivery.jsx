import { useState } from 'react'

const products = ['Raw Cow Milk', 'Fresh Curd', 'Ghee', 'Milk Goa']
const quantities = ['250ml', '500ml', '1L', '2L']

const initialDeliveries = [
  { id: 1, name: 'Lakshmi R.', phone: '+91 98765 43210', address: 'Marudhadu, Main St', product: 'Raw Cow Milk', qty: '2L', status: 'Delivered' },
  { id: 2, name: 'Saravanan K.', phone: '+91 87654 32109', address: 'Marudhadu, Bramanar St', product: 'Fresh Curd', qty: '500ml', status: 'Pending' },
  { id: 3, name: 'Meena P.', phone: '+91 76543 21098', address: 'Siriya, Temple Rd', product: 'Ghee', qty: '1L', status: 'Delivered' },
  { id: 4, name: 'Ravi T.', phone: '+91 65432 10987', address: 'Marudhadu, Lake St', product: 'Raw Cow Milk', qty: '1L', status: 'Pending' },
  { id: 5, name: 'Kavitha S.', phone: '+91 54321 09876', address: 'Siriya, School Rd', product: 'Milk Goa', qty: '500ml', status: 'Pending' },
  { id: 6, name: 'Anand M.', phone: '+91 43210 98765', address: 'Marudhadu, Garden St', product: 'Raw Cow Milk', qty: '2L', status: 'Delivered' },
]

const emptyForm = { name: '', phone: '', address: '', product: products[0], qty: quantities[1], status: 'Pending' }

export default function Delivery() {
  const [deliveries, setDeliveries] = useState(initialDeliveries)
  const [form, setForm] = useState(emptyForm)
  const [showForm, setShowForm] = useState(false)

  const toggleStatus = (id) => {
    setDeliveries((prev) =>
      prev.map((d) =>
        d.id === id
          ? { ...d, status: d.status === 'Pending' ? 'Delivered' : 'Pending' }
          : d
      )
    )
  }

  const removeDelivery = (id) => {
    setDeliveries((prev) => prev.filter((d) => d.id !== id))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim() || !form.address.trim()) return
    const newDelivery = { ...form, id: Date.now() }
    setDeliveries((prev) => [...prev, newDelivery])
    setForm(emptyForm)
    setShowForm(false)
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const pending = deliveries.filter((d) => d.status === 'Pending').length
  const delivered = deliveries.filter((d) => d.status === 'Delivered').length

  return (
    <section className="delivery" id="delivery">
      <p className="section-label">Delivery Management</p>
      <h2>Today's Delivery List</h2>

      <div className="delivery-stats">
        <div className="d-stat">
          <div className="d-stat-num">{deliveries.length}</div>
          <div className="d-stat-label">Total</div>
        </div>
        <div className="d-stat delivered">
          <div className="d-stat-num">{delivered}</div>
          <div className="d-stat-label">Delivered</div>
        </div>
        <div className="d-stat pending">
          <div className="d-stat-num">{pending}</div>
          <div className="d-stat-label">Pending</div>
        </div>
      </div>

      <div className="delivery-actions">
        <button className="btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : '+ Add Delivery'}
        </button>
      </div>

      {showForm && (
        <form className="delivery-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Customer Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="e.g. Lakshmi R." required />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" required />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input type="text" name="address" value={form.address} onChange={handleChange} placeholder="e.g. Marudhadu, Main St" required />
            </div>
            <div className="form-group">
              <label>Product</label>
              <select name="product" value={form.product} onChange={handleChange}>
                {products.map((p) => <option key={p} value={p}>{p}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <select name="qty" value={form.qty} onChange={handleChange}>
                {quantities.map((q) => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-primary form-submit">Add to List</button>
        </form>
      )}

      <div className="delivery-table-wrap">
        <table className="delivery-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Product</th>
              <th>Qty</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((d, i) => (
              <tr key={d.id} className={d.status === 'Delivered' ? 'row-delivered' : ''}>
                <td>{i + 1}</td>
                <td className="d-name">{d.name}</td>
                <td><a href={`tel:${d.phone}`}>{d.phone}</a></td>
                <td>{d.address}</td>
                <td>{d.product}</td>
                <td>{d.qty}</td>
                <td>
                  <button
                    className={`status-btn ${d.status === 'Delivered' ? 'done' : 'pending'}`}
                    onClick={() => toggleStatus(d.id)}
                  >
                    {d.status}
                  </button>
                </td>
                <td>
                  <button className="remove-btn" onClick={() => removeDelivery(d.id)} title="Remove">✕</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
