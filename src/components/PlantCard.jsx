import { useState } from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/categories'
import { buildWhatsAppOrderUrl } from '../services/whatsappService'
import WhatsAppIcon from './WhatsAppIcon'
import '../plant-catalog.css'
export default function PlantCard({ plant }) {
  const [quantity, setQuantity] = useState(1)
  const categoryName = categories.find(category => category.id === plant.category)?.name || plant.category
  return <article className="plant-card">
    <Link to={`/plants/${plant.id}`} className="plant-image"><img src={plant.image} alt={plant.name} loading="lazy"/><span>{categoryName}</span></Link>
    <div className="plant-card-body"><h3><Link to={`/plants/${plant.id}`}>{plant.name}</Link></h3><p className="plant-telugu">{plant.teluguName || 'Plant'}</p><p className="muted plant-scientific">{plant.scientificName}</p><p className="plant-description">{plant.description}</p><div className="plant-meta"><span>Price on enquiry</span><span>{plant.availability || 'Confirm availability'}</span></div><div className="plant-card-actions"><label>Qty <input type="number" min="1" step="1" value={quantity} onChange={event=>setQuantity(Math.max(1,Number.parseInt(event.target.value,10)||1))} aria-label={`Quantity of ${plant.name}`}/></label><a className="button button-whatsapp" href={buildWhatsAppOrderUrl(plant,quantity)} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Enquire</a></div></div>
  </article>
}
