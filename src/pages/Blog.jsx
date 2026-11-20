import { useMemo, useState } from 'react'
import { Search, X } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import PageBannerCarousel from '../components/PageBannerCarousel'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { blogCategories, blogs } from '../data/blogs'
import { nurseryPageBannerImages } from '../data/pageBannerImages'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'
import { usePageMetadata } from '../services/seo'
import '../blog.css'

function getArticleSearchText(blog) {
  return [
    blog.title,
    blog.category,
    ...blog.relatedCategories,
    blog.description,
    blog.introduction,
    ...blog.sections.flatMap(section => [
      section.heading,
      ...(section.paragraphs || []),
      ...(section.bullets || []),
    ]),
  ].join(' ').toLocaleLowerCase()
}

export default function Blog() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All Categories')
  const hasFilters = Boolean(search.trim()) || activeCategory !== 'All Categories'
  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)),
    [],
  )
  const featuredBlog = sortedBlogs.find(blog => blog.featured)
  const matchingBlogs = sortedBlogs.filter(blog => {
    const matchesSearch = !search.trim() || getArticleSearchText(blog).includes(search.trim().toLocaleLowerCase())
    const matchesCategory = activeCategory === 'All Categories'
      || blog.category === activeCategory
      || blog.relatedCategories.includes(activeCategory)
    return matchesSearch && matchesCategory
  })

  usePageMetadata(
    'Gardening Blogs & Tips | Sri Satyajanaki Durga Nursery Gardens',
    'Read practical gardening tips and plant care articles from Sri Satyajanaki Durga Nursery Gardens in Kadiam, Andhra Pradesh.',
  )

  const articlesToShow = hasFilters
    ? matchingBlogs
    : matchingBlogs.filter(blog => blog.slug !== featuredBlog?.slug)

  return <main className="page-wrap blog-page page-banner-page">
    <PageBannerCarousel label="Gardening blog" eyebrow="GROW YOUR KNOWLEDGE" title="Gardening Blogs & Tips" subtitle="Learn, grow and make your garden beautiful with practical tips for your green spaces." images={nurseryPageBannerImages}/>

    {!hasFilters && featuredBlog && <section className="blog-featured-section" aria-labelledby="featured-blog-heading">
      <div className="blog-section-heading">
        <div><p className="eyebrow">EDITOR'S PICK</p><h2 id="featured-blog-heading">Featured Article</h2></div>
      </div>
      <BlogCard blog={featuredBlog} featured/>
    </section>}

    <section className="blog-browser" aria-label="Search and filter blog articles">
      <label className="search-box blog-search">
        <Search size={19} aria-hidden="true"/>
        <span className="visually-hidden">Search blog titles and content</span>
        <input
          type="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search gardening articles..."
          aria-label="Search blog titles and content"
          aria-describedby="blog-search-help"
        />
        {search && <button className="blog-search-clear" type="button" onClick={() => setSearch('')} aria-label="Clear search">
          <X size={17}/>
        </button>}
      </label>
      <p className="visually-hidden" id="blog-search-help">Search article titles, descriptions and full content.</p>

      <div className="blog-category-filters" role="group" aria-label="Filter articles by category">
        {['All Categories', ...blogCategories].map(category => <button
          key={category}
          type="button"
          className={activeCategory === category ? 'active' : ''}
          aria-pressed={activeCategory === category}
          onClick={() => setActiveCategory(category)}
        >{category}</button>)}
      </div>
    </section>

    <section className="blog-latest-section" aria-labelledby="blog-list-heading">
      <div className="blog-section-heading">
        <div>
          <p className="eyebrow">{hasFilters ? 'MATCHING ARTICLES' : 'FRESH FROM THE GARDEN'}</p>
          <h2 id="blog-list-heading">{hasFilters ? 'Search Results' : 'Latest Articles'}</h2>
        </div>
        <p className="blog-result-count" aria-live="polite">
          {articlesToShow.length} {articlesToShow.length === 1 ? 'article' : 'articles'}
        </p>
      </div>

      {articlesToShow.length > 0
        ? <div className="blog-card-grid">{articlesToShow.map(blog => <BlogCard key={blog.slug} blog={blog}/>)}</div>
        : <div className="blog-empty-state" role="status">
          <h3>No matching articles found</h3>
          <p>Try a different search or choose another category.</p>
          <button className="button" type="button" onClick={() => { setSearch(''); setActiveCategory('All Categories') }}>
            Show all articles
          </button>
        </div>}
    </section>

    <section className="cta blog-contact-cta">
      <div><p className="eyebrow light">GARDENING SUPPORT</p><h2>Have a question about plants?</h2><p>Message our nursery for plant and gardening guidance.</p></div>
      <a className="button button-light" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> Ask us on WhatsApp</a>
    </section>
  </main>
}
