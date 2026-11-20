import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Leaf } from 'lucide-react'
import { categories } from '../data/categories'
import { plants } from '../data/plants'
import PlantCard from '../components/PlantCard'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { business } from '../config/business'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'
import '../about.css'

const bannerImages = [
  { src: '/banners/nursery-slide-2.jpg', alt: 'Sri Satyajanaki Durga Nursery Gardens with Ganapathi' },
  { src: '/banners/nursery-slide-1.jpg', alt: 'Flowering plants at the nursery' },
  { src: '/banners/nursery-slide-3.jpg', alt: 'Aerial view of the nursery gardens' },
  { src: '/banners/nursery-slide-5.jpg', alt: 'Colorful plants and flowering shrubs at the nursery' },
]

const featuredPhotos = [
  { src: '/featured/rose-plant.jpg', alt: 'Red roses growing on a rose plant' },
  { src: '/featured/chrysanthemums.jpg', alt: 'White and pink chrysanthemum flowers' },
  { src: '/featured/flowering-shrubs.jpg', alt: 'Colorful flowering shrubs at the nursery' },
  { src: '/featured/marigolds.jpg', alt: 'Orange and yellow marigold flowers' },
]

export default function Home() {
  const [activeBanner, setActiveBanner] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveBanner(current => (current + 1) % bannerImages.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.home-reveal, .home-reveal-item')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealElements.forEach(element => element.classList.add('is-visible'))
      return undefined
    }

    document.documentElement.classList.add('home-motion-ready')
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' })

    revealElements.forEach(element => observer.observe(element))
    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('home-motion-ready')
    }
  }, [])

  return <>
    <section className="hero hero-carousel" aria-label="Nursery banner slideshow">
      <div className="hero-banner-slides">
        {bannerImages.map((image, index) => <img
          key={image.src}
          src={image.src}
          alt={image.alt}
          aria-hidden={index !== activeBanner}
          className={`hero-banner-slide${index === activeBanner ? ' hero-banner-slide-active' : ''}`}
        />)}
      </div>
    </section>
    <section className="section nursery-video-section" aria-label="Nursery video">
      <div className="nursery-video-frame home-reveal">
        <video controls playsInline preload="metadata" aria-label="Nursery video">
          <source src="/videos/nursery-tour.mp4" type="video/mp4" />
          Your browser does not support video playback.
        </video>
      </div>
    </section>
    <section className="section section-soft home-about" aria-labelledby="home-about-title">
      <div className="section-heading home-reveal">
        <div><p className="eyebrow">ABOUT US</p><h2 id="home-about-title">About {business.name}</h2></div>
      </div>
      <div className="about-intro home-reveal">
        <div className="about-copy">
          <h2>Welcome to our nursery</h2>
          <p>Welcome to <strong>{business.name}</strong>, your trusted destination for beautiful plants and greenery.</p>
          <p>We are passionate about bringing nature closer to your home, garden, and surroundings. Our nursery offers a wide variety of premium-quality ornamental plants, decorative topiary trees, flowering plants, fruit-bearing plants, and landscaping greenery.</p>
          <p>From beautifully shaped decorative trees to vibrant flowering plants and healthy fruit plants, we provide plants that add beauty, freshness, and life to every space.</p>
        </div>
        <div className="about-photos">
          <img className="about-photo-main" src="/about/decorative-topiary.jpg" alt="Decorative topiary trees at Sri Satyajanaki Durga Nursery Gardens" loading="lazy"/>
        </div>
      </div>
      <div className="about-values home-reveal">
        <article><h2>Our Mission</h2><p>Our mission is to promote a greener and healthier environment by providing quality plants and helping everyone create beautiful green spaces.</p></article>
        <article><h2>Our Vision</h2><p>To become a trusted destination for plant lovers, gardening enthusiasts, and landscaping professionals.</p></article>
      </div>
      <div className="about-reasons home-reveal">
        <h2>Why Choose Us?</h2>
        <ul>{[
          'Wide Collection of Plants',
          'Premium Quality & Healthy Plants',
          'Beautiful Decorative & Topiary Trees',
          'Flowering and Fruit Plants',
          'Quality Customer Service',
          'Greenery for Every Space',
        ].map(reason => <li key={reason}>{reason}</li>)}</ul>
      </div>
      <p className="about-closing home-reveal"><strong>{business.name} – Where Green Dreams Grow!</strong></p>
    </section>
    <section className="section">
      <div className="section-heading home-reveal"><div><p className="eyebrow">FIND YOUR PLANT</p><h2>Explore plant categories</h2></div><Link to="/plants" className="text-link">View all plants <ArrowRight size={16}/></Link></div>
      <div className="category-grid">{categories.slice(0,8).map((category,index)=><Link className="category-tile home-reveal-item" to={`/plants?category=${category.id}`} key={category.id}><span>0{index+1}</span><h3>{category.name}</h3><p>{category.description}</p></Link>)}</div>
    </section>
    <section className="section section-soft">
      <div className="section-heading home-reveal"><div><p className="eyebrow">NURSERY PICKS</p><h2>Featured plants</h2></div><Link to="/plants" className="text-link">Browse catalogue <ArrowRight size={16}/></Link></div>
      <div className="home-featured-photos" role="group" aria-label="Featured flower and nursery photos">
        {featuredPhotos.map(photo => <img className="home-reveal-item" key={photo.src} src={photo.src} alt={photo.alt} loading="lazy"/>)}
      </div>
      <div className="plant-grid home-featured-card-grid">{plants.filter(plant => plant.id !== 'snake-plant').slice(0,2).map(plant=><PlantCard className="home-reveal-item" key={plant.id} plant={plant}/>)}</div>
    </section>
    <section className="cta home-reveal">
      <Leaf size={30}/><div><p className="eyebrow light">NEED HELP CHOOSING?</p><h2>Let's find the right plants for your space.</h2><p>Contact the nursery to check current varieties, prices and availability.</p></div>
      <a className="button button-light" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={17}/> Ask on WhatsApp</a>
    </section>
  </>
}
