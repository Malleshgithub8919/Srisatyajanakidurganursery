import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { plants } from '../data/plants'
import { buildWhatsAppOrderFormUrl } from '../services/whatsappService'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../order-form.css'

export default function OrderForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    plant: '',
    otherPlant: '',
    quantity: '1',
    fulfilment: 'Delivery',
    address: '',
    notes: '',
  })

  function updateField(event) {
    const { name, value } = event.target
    setForm(current => ({ ...current, [name]: value }))
  }

  function submitOrder(event) {
    event.preventDefault()
    window.location.assign(buildWhatsAppOrderFormUrl(form))
  }

  return <main className="page-wrap">
    <div className="page-title"><p className="eyebrow">ORDER FROM OUR NURSERY</p><h1>Place an Order</h1><p>Share what you need and we’ll open WhatsApp with your order details. The nursery will confirm availability, price and delivery.</p></div>
    <form className="order-form" onSubmit={submitOrder}>
      <label>Full name<input name="name" autoComplete="name" value={form.name} onChange={updateField} required/></label>
      <label>Phone number<input name="phone" type="tel" autoComplete="tel" value={form.phone} onChange={updateField} required/></label>
      <label>Plant<select name="plant" value={form.plant} onChange={updateField} required><option value="" disabled>Select a plant</option>{plants.map(plant => <option value={plant.name} key={plant.id}>{plant.name}</option>)}<option value="Other">Other / not listed</option></select></label>
      {form.plant === 'Other' && <label>Plant or item details<input name="otherPlant" value={form.otherPlant} onChange={updateField} required/></label>}
      <label>Quantity<input name="quantity" type="number" min="1" step="1" value={form.quantity} onChange={updateField} required/></label>
      <label>Delivery or pickup<select name="fulfilment" value={form.fulfilment} onChange={updateField}><option>Delivery</option><option>Pickup</option></select></label>
      <label className="order-form-wide">{form.fulfilment === 'Delivery' ? 'Delivery address' : 'Pickup notes'}<textarea name="address" autoComplete="street-address" rows="3" value={form.address} onChange={updateField} required={form.fulfilment === 'Delivery'}/></label>
      <label className="order-form-wide">Additional notes (optional)<textarea name="notes" rows="3" value={form.notes} onChange={updateField}/></label>
      <button className="button button-whatsapp order-form-submit" type="submit"><WhatsAppIcon size={18}/> Continue to WhatsApp <ArrowRight size={17}/></button>
    </form>
  </main>
}
