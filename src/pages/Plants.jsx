import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search } from 'lucide-react'
import { plants } from '../data/plants'
import { categories } from '../data/categories'
import PlantCard from '../components/PlantCard'
export default function Plants() {
  const [params] = useSearchParams()
  const [query,setQuery] = useState('')
  const [category,setCategory] = useState(params.get('category') || 'all')
  useEffect(() => {
    setCategory(params.get('category') || 'all')
  }, [params])
  const filtered = useMemo(()=>plants.filter(p=>(category==='all'||p.category===category)&&`${p.name} ${p.teluguName || ''} ${p.scientificName || ''}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase())).sort((a,b)=>a.name.localeCompare(b.name)),[query,category])
  return <main className="page-wrap plants-page"><div className="page-title"><p className="eyebrow">THE PLANT COLLECTION</p><h1>Our Plants</h1><p>Explore Our Beautiful Collection of Plants</p></div><div className="catalog-tools"><label className="search-box"><Search size={18} aria-hidden="true"/><input type="search" aria-label="Search plants by name" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search by plant name, Telugu name or scientific name"/></label></div><div className="category-filters" aria-label="Filter plants by category"><button type="button" className={category==='all'?'active':''} aria-pressed={category==='all'} onClick={()=>setCategory('all')}>All Plants</button>{categories.map(c=><button type="button" className={category===c.id?'active':''} aria-pressed={category===c.id} key={c.id} onClick={()=>setCategory(c.id)}>{c.name}</button>)}</div>{filtered.length?<div className="plant-grid">{filtered.map(p=><PlantCard key={p.id} plant={p}/>)}</div>:<div className="empty-state"><h3>No plants found</h3><p>Try another name or category.</p><button className="button" onClick={()=>{setQuery('');setCategory('all')}}>Clear filters</button></div>}</main>
}
