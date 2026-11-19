import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { plants } from '../data/plants'
import { buildWhatsAppOrderUrl } from '../services/whatsappService'
import WhatsAppIcon from '../components/WhatsAppIcon'
export default function PlantDetails() {
  const { id } = useParams(); const plant = plants.find(p=>p.id===id); const [qty,setQty]=useState(1)
  if(!plant) return <main className="page-wrap"><h1>Plant not found</h1><Link to="/plants">Back to catalogue</Link></main>
  return <main className="page-wrap detail-layout"><img className="detail-image" src={plant.image} alt={plant.name}/><div><Link to="/plants" className="text-link"><ArrowLeft size={16}/> Back to plants</Link><p className="eyebrow">{plant.category}</p><h1>{plant.name}</h1><p className="muted">{plant.teluguName} · {plant.scientificName}</p><p>{plant.description}</p><dl className="spec-list"><dt>Sunlight</dt><dd>{plant.sunlight}</dd><dt>Watering</dt><dd>{plant.watering}</dd><dt>Availability</dt><dd>{plant.availability}</dd><dt>Price</dt><dd>Confirm with nursery</dd></dl><label className="quantity-label">Quantity <input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)))}/></label><a className="button button-whatsapp" href={buildWhatsAppOrderUrl(plant,qty)} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Enquire on WhatsApp</a></div></main>
}
