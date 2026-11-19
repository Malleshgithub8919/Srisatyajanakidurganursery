import { ArrowLeft, ArrowRight, Clock3 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { blogs } from '../data/blogs'
import { business } from '../config/business'
import { buildWhatsAppBlogUrl } from '../services/whatsappService'
import { usePageMetadata } from '../services/seo'
import '../blog.css'

function formatPublishedDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function BlogDetails() {
  const { slug } = useParams()
  const blog = blogs.find(article => article.slug === slug)

  usePageMetadata(
    blog ? `${blog.title} | Gardening Blog | ${business.name}` : `Blog Article | ${business.name}`,
    blog?.description || 'Gardening and plant care articles from Sri Satyajanaki Durga Nursery Gardens in Kadiam, Andhra Pradesh.',
  )

  if (!blog) return <Navigate to="/blog" replace/>

  const relatedBlogs = blog.relatedSlugs
    .map(relatedSlug => blogs.find(article => article.slug === relatedSlug))
    .filter(Boolean)

  return <main className="page-wrap blog-details-page">
    <nav className="blog-breadcrumb" aria-label="Breadcrumb">
      <Link to="/blog"><ArrowLeft size={16}/> All gardening articles</Link>
    </nav>

    <article className="blog-article">
      <header className="blog-article-header">
        <span className="blog-category-label">{blog.category}</span>
        <h1>{blog.title}</h1>
        <p className="blog-article-intro">{blog.introduction}</p>
        <div className="blog-article-meta">
          <span>By {blog.author}</span>
          <time dateTime={blog.publishedAt}>{formatPublishedDate(blog.publishedAt)}</time>
          <span className="blog-reading-time"><Clock3 size={15} aria-hidden="true"/>{blog.readingTime}</span>
        </div>
      </header>

      <figure className="blog-cover">
        <img src={blog.image} alt={blog.imageAlt}/>
        <figcaption>{blog.imageAlt}</figcaption>
      </figure>

      <div className="blog-article-body">
        {blog.sections.map(section => <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((paragraph, index) => <p key={`${section.heading}-paragraph-${index}`}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(item => <li key={item}>{item}</li>)}</ul>}
        </section>)}
      </div>
    </article>

    <aside className="blog-article-contact" aria-labelledby="blog-contact-heading">
      <div>
        <p className="eyebrow light">WE'RE HERE TO HELP</p>
        <h2 id="blog-contact-heading">Questions about this article?</h2>
        <p>Contact {business.name} for plant selection and gardening enquiries.</p>
      </div>
      <a className="button button-whatsapp" href={buildWhatsAppBlogUrl(blog.title)} target="_blank" rel="noreferrer">
        <WhatsAppIcon size={18}/> Ask us on WhatsApp <ArrowRight size={16}/>
      </a>
    </aside>

    {relatedBlogs.length > 0 && <section className="blog-related-section" aria-labelledby="related-articles-heading">
      <div className="blog-section-heading">
        <div><p className="eyebrow">KEEP GROWING</p><h2 id="related-articles-heading">Related Articles</h2></div>
        <Link className="text-link" to="/blog">All articles <ArrowRight size={15}/></Link>
      </div>
      <div className="blog-card-grid blog-related-grid">
        {relatedBlogs.map(relatedBlog => <BlogCard key={relatedBlog.slug} blog={relatedBlog}/>)}
      </div>
    </section>}
  </main>
}
