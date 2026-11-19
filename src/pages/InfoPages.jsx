import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { business } from '../config/business'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'
import WhatsAppIcon from '../components/WhatsAppIcon'
import '../contact.css'
import '../about.css'
const galleryPhotos = [
  ['nursery-1.png', 'Sri Satyajanaki Durga Nursery'],
  ['nursery-2.png', 'Plant collection at the nursery'],
  ['nursery-3.png', 'Nursery grounds'],
  ['nursery-4.png', 'Indoor plant varieties'],
  ['nursery-5.png', 'Bonsai and ornamental plants'],
  ['nursery-6.png', 'Nursery entrance'],
  ['nursery-7.png', 'Potted plants'],
  ['nursery-8.png', 'Greenhouse plant racks'],
  ['nursery-9.png', 'Foliage plants'],
  ['nursery-10.png', 'Flowering plant'],
  ['nursery-11.png', 'Succulents and indoor plants'],
  ['nursery-12.png', 'Landscape plants'],
  ['nursery-13.png', 'Ornamental shrubs'],
]

export function About() {
  return <main className="page-wrap about-page">
    <div className="page-title"><p className="eyebrow">ABOUT US</p><h1>{business.name}</h1><p className="about-tagline">Growing Greenery, Creating Beautiful Spaces.</p></div>
    <section className="about-intro">
      <div className="about-copy">
        <h2>Welcome to our nursery</h2>
        <p>Welcome to {business.name}, located in Kadiam, Andhra Pradesh. We are passionate about plants, greenery and creating beautiful natural spaces.</p>
        <p>Our nursery aims to bring nature closer to every home, garden, farm and landscape. We offer a wide variety of plants, including flowering plants, indoor plants, outdoor plants, fruit plants, ornamental plants, avenue trees, palms and many more varieties.</p>
        <p>Whether you are looking to decorate your home, develop a beautiful garden, grow fruit plants or enhance a landscaping project, we are here to help you find suitable plants.</p>
      </div>
      <div className="about-photos"><img className="about-photo-main" src="/about/nursery-beds.png" alt="Rows of colorful plants at the nursery" loading="lazy"/><img className="about-photo-detail" src="/about/flowering-plants.png" alt="Flowering plants available at the nursery" loading="lazy"/></div>
    </section>
    <section className="about-values">
      <article><h2>Our Mission</h2><p>Our mission is to encourage greenery, support gardening enthusiasts and make a wide variety of plants accessible to everyone.</p></article>
      <article><h2>Our Vision</h2><p>To become a trusted destination for quality plants and gardening solutions while promoting a greener and healthier environment.</p></article>
    </section>
    <section className="about-reasons"><h2>Why Choose Us?</h2><ul>{['Wide range of plant varieties.','Plants for homes, gardens and landscaping.','Retail and wholesale enquiries.','Friendly customer assistance.','WhatsApp ordering facility.','Guidance on plant selection and basic care.'].map(item=><li key={item}>{item}</li>)}</ul></section>
    <section className="about-visit">
      <div><p className="eyebrow">VISIT OUR NURSERY</p><h2>{business.name}</h2><p>{business.address}</p></div>
      <div className="hero-buttons">
        <a className="button" href={business.directionsUrl} target="_blank" rel="noreferrer">Get Directions</a>
        <a className="button button-whatsapp" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> WhatsApp Us</a>
      </div>
    </section>
    <p className="about-closing">Let's grow a greener tomorrow together!</p>
  </main>
}
export function Gallery(){
  const [activePhotoIndex, setActivePhotoIndex] = useState(null)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)
  const isPreviewOpen = activePhotoIndex !== null

  useEffect(() => {
    if (!isPreviewOpen) return undefined

    const previousFocus = document.activeElement
    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') setActivePhotoIndex(null)
      if (event.key === 'ArrowLeft') setActivePhotoIndex(index => (index - 1 + galleryPhotos.length) % galleryPhotos.length)
      if (event.key === 'ArrowRight') setActivePhotoIndex(index => (index + 1) % galleryPhotos.length)
      if (event.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll('button')
        if (!controls?.length) return
        const firstControl = controls[0]
        const lastControl = controls[controls.length - 1]
        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault()
          lastControl.focus()
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault()
          firstControl.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousBodyOverflow
      previousFocus?.focus()
    }
  }, [isPreviewOpen])

  function changePhoto(direction) {
    setActivePhotoIndex(index => (index + direction + galleryPhotos.length) % galleryPhotos.length)
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return
    const difference = event.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(difference) > 45) changePhoto(difference > 0 ? -1 : 1)
    touchStartX.current = null
  }

  const activePhoto = isPreviewOpen ? galleryPhotos[activePhotoIndex] : null

  return <main className="page-wrap">
    <div className="page-title"><p className="eyebrow">{business.name}</p><h1>Gallery</h1><p>A look at our nursery, plant collection and green spaces.</p></div>
    <div className="gallery-grid">{galleryPhotos.map(([file,alt], index)=><figure className="gallery-item" key={file}>
      <button className="gallery-preview-button" type="button" onClick={() => setActivePhotoIndex(index)} aria-label={`View ${alt}`}>
        <img src={`/gallery/${file}`} alt={alt} loading="lazy"/>
      </button>
    </figure>)}</div>
    <section className="cta gallery-contact-cta">
      <div><p className="eyebrow light">PLANT AND GARDEN ENQUIRIES</p><h2>Looking for something specific?</h2><p>Message our nursery to ask about plants and current availability.</p></div>
      <a className="button button-light" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Ask on WhatsApp</a>
    </section>
    {activePhoto && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Photo ${activePhotoIndex + 1} of ${galleryPhotos.length}: ${activePhoto[1]}`} onClick={() => setActivePhotoIndex(null)}>
      <div className="gallery-lightbox-content" ref={dialogRef} onClick={event => event.stopPropagation()} onTouchStart={event => { touchStartX.current = event.changedTouches[0].clientX }} onTouchEnd={handleTouchEnd}>
        <button className="gallery-lightbox-control gallery-lightbox-close" type="button" ref={closeButtonRef} onClick={() => setActivePhotoIndex(null)} aria-label="Close photo preview"><X size={24}/></button>
        <button className="gallery-lightbox-control gallery-lightbox-previous" type="button" onClick={() => changePhoto(-1)} aria-label="Previous photo"><ChevronLeft size={28}/></button>
        <figure className="gallery-lightbox-figure">
          <img src={`/gallery/${activePhoto[0]}`} alt={activePhoto[1]}/>
          <figcaption>{activePhoto[1]} <span>{activePhotoIndex + 1} / {galleryPhotos.length}</span></figcaption>
        </figure>
        <button className="gallery-lightbox-control gallery-lightbox-next" type="button" onClick={() => changePhoto(1)} aria-label="Next photo"><ChevronRight size={28}/></button>
      </div>
    </div>}
  </main>
}
export function Contact() {
  return <main className="page-wrap">
    <div className="page-title"><p className="eyebrow">WE'D LOVE TO HELP</p><h1>Contact Us</h1><p>Ask about plant varieties, wholesale quantities, current prices and delivery.</p></div>
    <div className="contact-content">
      <div className="contact-panel">
        <h2>{business.name}</h2><p>{business.teluguName}</p><p>{business.address}</p>
        <a className="text-link" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions</a>
        <div className="hero-buttons"><a className="button button-whatsapp" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> WhatsApp Nursery</a></div>
      </div>
      <section className="map-panel">
        <h2>Find us on Google Maps</h2>
        <iframe title={`Google Maps - ${business.name}`} src="https://maps.google.com/maps?q=Sri+Satyajanaki+Durga+Nursery+Gardens%2C+Kadiyapulanka%2C+Kadiam%2C+Andhra+Pradesh+533126&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/>
        <a className="text-link" href={business.directionsUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
      </section>
    </div>
  </main>
}
