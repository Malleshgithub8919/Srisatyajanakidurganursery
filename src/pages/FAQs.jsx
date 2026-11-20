import { useMemo, useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { business } from '../config/business'
import { faqCategories, faqs } from '../data/faqs'
import FAQAccordion from '../components/FAQAccordion'
import PageBannerCarousel from '../components/PageBannerCarousel'
import WhatsAppIcon from '../components/WhatsAppIcon'
import { nurseryPageBannerImages } from '../data/pageBannerImages'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'
import '../faq.css'

export default function FAQs() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')
  const normalizedQuery = query.trim().toLocaleLowerCase()
  const visibleCategories = useMemo(() => faqCategories.map(faqCategory => ({
    ...faqCategory,
    questions: faqs.filter(faq =>
      faq.category === faqCategory.id &&
      (category === 'all' || category === faqCategory.id) &&
      (!normalizedQuery || `${faq.question} ${faq.answer}`.toLocaleLowerCase().includes(normalizedQuery)),
    ),
  })).filter(faqCategory => faqCategory.questions.length > 0), [category, normalizedQuery])
  const resultCount = visibleCategories.reduce((total, faqCategory) => total + faqCategory.questions.length, 0)

  return <main className="page-wrap faq-page page-banner-page">
    <PageBannerCarousel label="Frequently asked questions" eyebrow="HELP AND INFORMATION" title="Frequently Asked Questions" subtitle="Helpful answers about our plants, orders, nursery services, delivery and plant care." images={nurseryPageBannerImages}/>

    <section className="faq-browser" aria-label="Search and browse frequently asked questions">
      <label className="search-box faq-search">
        <Search size={18} aria-hidden="true"/>
        <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search questions and answers" aria-label="Search FAQs"/>
      </label>
      <div className="faq-category-filters" aria-label="Filter FAQs by category">
        <button type="button" className={category === 'all' ? 'active' : ''} aria-pressed={category === 'all'} onClick={() => setCategory('all')}>All Questions</button>
        {faqCategories.map(faqCategory => <button type="button" key={faqCategory.id} className={category === faqCategory.id ? 'active' : ''} aria-pressed={category === faqCategory.id} onClick={() => setCategory(faqCategory.id)}>{faqCategory.name}</button>)}
      </div>
      <p className="faq-result-count" aria-live="polite">{resultCount} {resultCount === 1 ? 'answer' : 'answers'}</p>
      {visibleCategories.length ? <div className="faq-groups">
        {visibleCategories.map(faqCategory => <section className="faq-category" key={faqCategory.id} aria-labelledby={`faq-category-${faqCategory.id}`}>
          <h2 id={`faq-category-${faqCategory.id}`}>{faqCategory.name}</h2>
          <div className="faq-list">{faqCategory.questions.map(faq => <FAQAccordion faq={faq} key={faq.id}/>)}</div>
        </section>)}
      </div> : <div className="faq-empty-state"><h2>No matching questions found</h2><p>Try a different search, or contact the nursery and we’ll be happy to help.</p><button className="button" type="button" onClick={() => { setQuery(''); setCategory('all') }}>Clear search and filters</button></div>}
    </section>

    <section className="faq-support">
      <div className="faq-support-copy">
        <p className="eyebrow light">WE’RE HERE TO HELP</p>
        <h2>Still Have Questions?</h2>
        <p>Contact our nursery for help with plants, orders, availability and gardening.</p>
        <p className="faq-address"><MapPin size={17}/><span>{business.address}</span></p>
        <a className="faq-directions" href={business.directionsUrl} target="_blank" rel="noreferrer">Get directions</a>
      </div>
      <div className="faq-support-actions">
        <a className="button button-whatsapp" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer"><WhatsAppIcon size={18}/> WhatsApp</a>
      </div>
    </section>
  </main>
}
