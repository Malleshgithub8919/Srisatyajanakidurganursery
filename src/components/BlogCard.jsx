import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function formatPublishedDate(date) {
  return new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function BlogCard({ blog, featured = false }) {
  return <article className={`blog-card${featured ? ' blog-card-featured' : ''}`}>
    <div className="blog-card-image">
      <img src={blog.image} alt={blog.imageAlt} loading={featured ? 'eager' : 'lazy'}/>
    </div>
    <div className="blog-card-content">
      <div className="blog-card-meta">
        <span className="blog-category-label">{blog.category}</span>
        <time dateTime={blog.publishedAt}>{formatPublishedDate(blog.publishedAt)}</time>
      </div>
      <h3><Link to={`/blog/${blog.slug}`}>{blog.title}</Link></h3>
      <p>{blog.description}</p>
      <div className="blog-card-footer">
        <span>{blog.readingTime}</span>
        <Link className="text-link" to={`/blog/${blog.slug}`} aria-label={`Read ${blog.title}`}>
          Read article <ArrowRight size={15}/>
        </Link>
      </div>
    </div>
  </article>
}
