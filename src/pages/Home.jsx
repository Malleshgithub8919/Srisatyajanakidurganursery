import { Link } from 'react-router-dom'
import { ArrowRight, Leaf, Sprout } from 'lucide-react'
import { categories } from '../data/categories'
import { plants } from '../data/plants'
import PlantCard from '../components/PlantCard'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-banner-slides" aria-hidden="true"><img src="/banners/home-banner-1.png" alt="" className="hero-banner-slide hero-banner-slide-one"/><img src="/banners/home-banner-2.png" alt="" className="hero-banner-slide hero-banner-slide-two"/></div>
      <div className="hero-content">
        <p className="eyebrow light">WELCOME TO OUR NURSERY</p>
        <h1>Bring home a little more <em>green.</em></h1>
        <p>Explore plants for homes, gardens, farms and landscapes. Find your next favourite plant with us.</p>
        <div className="hero-buttons">
          <Link className="button" to="/plants">Explore Plants <ArrowRight size={17}/></Link>
          <a className="button button-outline" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={17}/> WhatsApp Enquiry</a>
        </div>
      </div>
      <div className="hero-note"><Sprout size={20}/> Grow your own green space</div>
    </section>
    <section className="section">
      <div className="section-heading"><div><p className="eyebrow">FIND YOUR PLANT</p><h2>Explore plant categories</h2></div><Link to="/plants" className="text-link">View all plants <ArrowRight size={16}/></Link></div>
      <div className="category-grid">{categories.slice(0,8).map((category,index)=><Link className="category-tile" to={`/plants?category=${category.id}`} key={category.id}><span>0{index+1}</span><h3>{category.name}</h3><p>{category.description}</p></Link>)}</div>
    </section>
    <section className="section section-soft">
      <div className="section-heading"><div><p className="eyebrow">NURSERY PICKS</p><h2>Featured plants</h2></div><Link to="/plants" className="text-link">Browse catalogue <ArrowRight size={16}/></Link></div>
      <div className="plant-grid">{plants.slice(0,3).map(plant=><PlantCard key={plant.id} plant={plant}/>)}</div>
    </section>
    <section className="cta">
      <Leaf size={30}/><div><p className="eyebrow light">NEED HELP CHOOSING?</p><h2>Let's find the right plants for your space.</h2><p>Contact the nursery to check current varieties, prices and availability.</p></div>
      <a className="button button-light" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={17}/> Ask on WhatsApp</a>
    </section>
  </>
}
