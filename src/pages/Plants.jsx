import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { plants } from '../data/plants'
import { categories } from '../data/categories'
import PlantCard from '../components/PlantCard'

const plantsBannerImages = [
  { src: '/plants-banner/grow-your-green-space.png', alt: 'Rows of flowering plants and nursery greenery' },
  { src: '/featured/marigolds.jpg', alt: 'Bright orange and yellow marigolds growing at the nursery' },
  { src: '/about/flowering-plants.png', alt: 'Colorful flowering plants arranged along a nursery path' },
  { src: '/about/decorative-topiary.jpg', alt: 'Decorative topiary plants growing at the nursery' },
  { src: '/about/nursery-beds.png', alt: 'Rows of ornamental plants in the nursery' },
]

const nurseryPlantPhotos = [
  { src: '/gallery/potted-avocado-tree.png', name: 'Potted fruit tree' },
  { src: '/gallery/pink-bougainvillea-nursery.png', name: 'Pink bougainvillea' },
  { src: '/gallery/nursery-topiary-rows.png', name: 'Rows of shaped topiary trees' },
  { src: '/gallery/variegated-topiary-plant.png', name: 'Variegated ornamental plant' },
  { src: '/gallery/topiary-tree-collection.png', name: 'Ornamental tree collection' },
  { src: '/gallery/topiary-nursery-wide.png', name: 'Topiary trees across the nursery' },
  { src: '/gallery/nursery-topiary-display.png', name: 'Topiary nursery display' },
  { src: '/gallery/ornamental-topiary-garden.png', name: 'Ornamental topiary garden' },
  { src: '/plants/ornamental-banyan-roots.png', name: 'Exposed-root ornamental tree' },
  { src: '/plants/bougainvillea-red-topiary.png', name: 'Red bougainvillea' },
  { src: '/plants/bougainvillea-magenta.png', name: 'Magenta bougainvillea' },
  { src: '/plants/portulacaria-bonsai.png', name: 'Portulacaria bonsai' },
  { src: '/plants/ficus-round-topiary.png', name: 'Round-canopy ornamental tree' },
  { src: '/plants/ficus-root-topiary.png', name: 'Root-form ornamental tree' },
  { src: '/plants/ornamental-bonsai.png', name: 'Ornamental bonsai' },
  { src: '/plants/nursery-topiary-collection.png', name: 'Topiary collection at the nursery' },
  { src: '/plants/round-canopy-topiary.png', name: 'Wide-canopy topiary tree' },
  { src: '/plants/dragon-fruit-ripe.png', name: 'Dragon fruit growing on its plant' },
  { src: '/plants/dragon-fruit-flower.png', name: 'Dragon fruit flower' },
  { src: '/plants/shaped-topiary-tree.png', name: 'Shaped ornamental tree' },
  { src: '/plants/variegated-topiary.png', name: 'Variegated ornamental tree' },
  { src: '/plants/cone-shaped-topiary.png', name: 'Cone-shaped topiary' },
]

function PlantsBanner() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex(current => (current + 1) % plantsBannerImages.length)
    }, 2000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <section className="plants-hero" aria-label="Our Plants image slideshow" aria-roledescription="carousel">
    <div className="plants-hero-slides">
      {plantsBannerImages.map((image, index) => <figure
        key={image.src}
        className={`plants-hero-slide${index === activeIndex ? ' is-active' : ''}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${plantsBannerImages.length}`}
        aria-hidden={index !== activeIndex}
      >
        <img src={image.src} alt={image.alt} />
      </figure>)}
    </div>
    <div className="plants-hero-copy">
      <p className="plants-hero-eyebrow">SRI SATYAJANAKI DURGA NURSERY</p>
      <h1>GROW YOUR GREEN SPACE</h1>
      <p>Find healthy flowering, indoor, outdoor and fruit plants to bring more life to your space.</p>
      <a className="plants-hero-cta" href="#plant-catalog">Explore our collection <ArrowRight size={18} aria-hidden="true"/></a>
    </div>
    <div className="plants-hero-indicators" aria-label="Choose a banner image">
      {plantsBannerImages.map((image, index) => <button
        key={image.src}
        type="button"
        aria-label={`Show Our Plants image ${index + 1}`}
        aria-pressed={index === activeIndex}
        className={index === activeIndex ? 'is-active' : ''}
        onClick={() => setActiveIndex(index)}
      />)}
    </div>
  </section>
}

export default function Plants() {
  const [params] = useSearchParams()
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState(params.get('category') || 'all')
  useEffect(() => {
    setCategory(params.get('category') || 'all')
  }, [params])
  const filtered = useMemo(()=>plants.filter(p=>(category==='all'||p.category===category)&&`${p.name} ${p.teluguName || ''} ${p.scientificName || ''}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).sort((a,b)=>a.name.localeCompare(b.name)),[query,category])
  return <main className="page-wrap plants-page">
    <PlantsBanner/>
    <div className="catalog-tools" id="plant-catalog">
      <label className="search-box">
        <Search size={18} aria-hidden="true"/>
        <input type="search" aria-label="Search plants by name" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by plant name, Telugu name or scientific name"/>
      </label>
    </div>
    <div className="category-filters" aria-label="Filter plants by category">
      <button type="button" className={category==='all'?'active':''} aria-pressed={category==='all'} onClick={()=>setCategory('all')}>All Plants</button>
      {categories.map(c=><button type="button" className={category===c.id?'active':''} aria-pressed={category===c.id} key={c.id} onClick={()=>setCategory(c.id)}>{c.name}</button>)}
    </div>
    {filtered.length
      ? <div className="plant-grid">{filtered.map(p=><PlantCard key={p.id} plant={p}/>)}</div>
      : <div className="empty-state"><h3>No plants found</h3><p>Try another name or category.</p><button className="button" onClick={()=>{setQuery('');setCategory('all')}}>Clear filters</button></div>}
    <section className="nursery-plants-section" aria-labelledby="nursery-plants-title">
      <div className="section-heading">
        <div><p className="eyebrow">FROM OUR NURSERY</p><h2 id="nursery-plants-title">More Plants and Topiary</h2><p>Explore more plants and ornamental trees from our nursery. Please contact us to confirm current availability.</p></div>
      </div>
      <div className="nursery-plants-grid">
        {nurseryPlantPhotos.map(photo => <figure key={photo.src}>
          <img src={photo.src} alt={photo.name} loading="lazy"/>
          <figcaption>{photo.name}</figcaption>
        </figure>)}
      </div>
    </section>
  </main>
}
