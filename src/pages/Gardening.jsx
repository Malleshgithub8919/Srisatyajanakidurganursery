import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { gardeningCategories, gardeningGallery, gardeningTips, plantCareGuides } from '../data/gardening'
import { buildWhatsAppGardeningUrl } from '../services/whatsappService'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../gardening.css'

export default function Gardening() {
  const [requirements, setRequirements] = useState('')

  function submitEnquiry(event) {
    event.preventDefault()
    window.location.assign(buildWhatsAppGardeningUrl(requirements))
  }

  return <main className="page-wrap gardening-page">
    <section className="gardening-hero">
      <div className="gardening-hero-copy">
        <p className="eyebrow">GROW YOUR GREEN SPACE</p>
        <h1>Gardening</h1>
        <h2>Create Your Dream Garden with Nature.</h2>
        <p>Explore gardening ideas, plant care tips and landscaping inspiration to make your home, office and outdoor spaces greener and more beautiful.</p>
        <a className="button" href="#gardening-categories">Explore Gardening Ideas <ArrowRight size={17}/></a>
      </div>
      <img className="gardening-hero-image" src="/gardening/gardening-banner-user.png" alt="Flowering plants arranged in rows at the nursery"/>
    </section>

    <section className="gardening-section" id="gardening-categories">
      <div className="section-heading"><div><p className="eyebrow">FIND YOUR INSPIRATION</p><h2>Gardening for Every Space</h2></div></div>
      <div className="gardening-category-grid">
        {gardeningCategories.map(category => <article className="gardening-category-card" key={category.id}>
          <img src={category.image} alt={category.alt} loading="lazy"/>
          <div className="gardening-card-content"><h3>{category.title}</h3><p>{category.description}</p>
            <details><summary>Learn More <ArrowRight size={15}/></summary><p>{category.learnMore}</p></details>
          </div>
        </article>)}
      </div>
    </section>

    <section className="gardening-section gardening-care-section" id="plant-care-guide">
      <div className="section-heading"><div><p className="eyebrow">HEALTHY PLANTS START HERE</p><h2>Plant Care Guide</h2><p>Simple, thoughtful care helps plants thrive. Needs vary by plant and season.</p></div></div>
      <div className="care-guide-grid">
        {plantCareGuides.map((guide, index) => <article className="care-guide-card" key={guide.title}>
          <span className="care-guide-number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{guide.title}</h3><p>{guide.description}</p>
        </article>)}
      </div>
    </section>

    <section className="gardening-section">
      <div className="section-heading"><div><p className="eyebrow">SMALL STEPS, HEALTHY GARDENS</p><h2>Gardening Tips</h2></div></div>
      <div className="gardening-tips-grid">
        {gardeningTips.map(tip => <article className="gardening-tip-card" key={tip.title}>
          <img src={tip.image} alt={tip.alt} loading="lazy"/>
          <div><h3>{tip.title}</h3><p>{tip.description}</p></div>
        </article>)}
      </div>
    </section>

    <section className="gardening-section gardening-gallery-section">
      <div className="section-heading"><div><p className="eyebrow">A LOOK AROUND OUR NURSERY</p><h2>Gardening Gallery</h2><p>Photos from Sri Satyajanaki Durga Nursery Gardens.</p></div></div>
      <div className="gardening-gallery-grid">
        {gardeningGallery.map(photo => <figure key={photo.image}><img src={photo.image} alt={photo.alt} loading="lazy"/></figure>)}
      </div>
    </section>

    <section className="gardening-enquiry" id="gardening-enquiry">
      <div className="gardening-enquiry-copy">
        <p className="eyebrow light">PERSONAL GARDENING HELP</p>
        <h2>Need Help Creating Your Dream Garden?</h2>
        <p>Tell us about your space and what you hope to grow. We’ll help you explore suitable plants and ideas.</p>
        <div className="gardening-contact-actions">
          <a className="button button-whatsapp" href={buildWhatsAppGardeningUrl('I would like advice about my garden.')} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> WhatsApp</a>
        </div>
      </div>
      <form className="gardening-enquiry-form" onSubmit={submitEnquiry}>
        <label htmlFor="gardening-requirements">Your gardening requirements</label>
        <textarea id="gardening-requirements" value={requirements} onChange={event => setRequirements(event.target.value)} placeholder="For example: terrace size, sunlight, plants you like, or landscaping needs" rows="5" required/>
        <button className="button button-whatsapp" type="submit"><WhatsAppIcon size={18}/> Send requirements on WhatsApp <ArrowRight size={16}/></button>
      </form>
    </section>
  </main>
}
