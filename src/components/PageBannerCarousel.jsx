import { useEffect, useState } from 'react'
import '../page-banner.css'

export default function PageBannerCarousel({ label, eyebrow, title, subtitle, images }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % images.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [images.length])

  return <section className="page-banner-carousel" aria-label={`${label} image slideshow`} aria-roledescription="carousel">
    <div className="page-banner-carousel-slides">
      {images.map((image, index) => <div
        key={image.src}
        className={`page-banner-carousel-slide${index === activeIndex ? ' is-active' : ''}`}
        aria-hidden={index !== activeIndex}
        style={{ '--banner-image': `url("${image.src}")` }}
      >
        <img
          className="page-banner-carousel-image"
          src={image.src}
          alt={image.alt}
          style={image.objectFit ? { objectFit: image.objectFit } : undefined}
        />
      </div>)}
    </div>
    <div className={`page-banner-carousel-content page-title${images[activeIndex].hideContent ? ' is-hidden' : ''}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
    <div className="page-banner-carousel-indicators" aria-label="Choose a banner image">
      {images.map((image, index) => <button
        key={image.src}
        type="button"
        className={index === activeIndex ? 'is-active' : ''}
        aria-label={`Show ${label} image ${index + 1}`}
        aria-pressed={index === activeIndex}
        onClick={() => setActiveIndex(index)}
      />)}
    </div>
  </section>
}
