import { useRef, useState } from 'react'
import '../reviews.css'

const ratingValues = [1, 2, 3, 4, 5]

function ReviewCard({ review }) {
  return <article className="review-card">
    <div className="review-card-header">
      <h3>{review.name}</h3>
      <span className="review-session-label">Session preview</span>
    </div>
    <div className="review-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
      {ratingValues.map(value => <span key={value} aria-hidden="true">{value <= review.rating ? '★' : '☆'}</span>)}
    </div>
    <p className="review-message">{review.message}</p>
    <time className="review-date" dateTime={review.dateTime}>{review.date}</time>
  </article>
}

export default function Reviews({ embedded = false }) {
  const [name, setName] = useState('')
  const [rating, setRating] = useState('')
  const [message, setMessage] = useState('')
  const [sessionReviews, setSessionReviews] = useState([])
  const [formError, setFormError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const nameInputRef = useRef(null)
  const firstRatingRef = useRef(null)
  const messageInputRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    setSuccessMessage('')

    if (!name.trim() || !rating || !message.trim()) {
      setFormError('Please enter your name, select a star rating, and write a review.')
      if (!name.trim()) nameInputRef.current?.focus()
      else if (!rating) firstRatingRef.current?.focus()
      else messageInputRef.current?.focus()
      return
    }

    const submittedAt = new Date()
    const review = {
      id: `${submittedAt.getTime()}-${sessionReviews.length}`,
      name: name.trim(),
      rating: Number(rating),
      message: message.trim(),
      dateTime: submittedAt.toISOString().slice(0, 10),
      date: submittedAt.toLocaleDateString(),
    }

    setSessionReviews(currentReviews => [review, ...currentReviews])
    setName('')
    setRating('')
    setMessage('')
    setFormError('')
    setSuccessMessage('Thank you. Your review is shown only as a temporary preview during this visit; it is not saved or published.')
  }

  const Wrapper = embedded ? 'section' : 'main'
  const Title = embedded ? 'h2' : 'h1'
  const Subtitle = embedded ? 'h3' : 'h2'

  return <Wrapper className={`reviews-page${embedded ? ' contact-reviews' : ' page-wrap'}`} aria-label={embedded ? 'Customer reviews' : undefined}>
    <header className="page-title">
      <p className="eyebrow">CUSTOMER FEEDBACK</p>
      <Title>Customer Reviews</Title>
      <Subtitle className="reviews-subtitle">What Our Customers Say About Us</Subtitle>
      <p>Read customer feedback and share your experience with our nursery.</p>
    </header>

    <div className="reviews-layout">
      <section className="reviews-list-panel" aria-labelledby="reviews-list-heading">
        <div className="reviews-section-heading">
          <div>
            <p className="eyebrow">CUSTOMER FEEDBACK</p>
            <h2 id="reviews-list-heading">Reviews</h2>
          </div>
        </div>
        <p className="reviews-data-note">Only reviews submitted during this visit appear here. They are temporary previews, not saved or publicly published reviews.</p>
        {sessionReviews.length
          ? <div className="review-card-list" aria-live="polite">
              {sessionReviews.map(review => <ReviewCard key={review.id} review={review}/>)}
            </div>
          : <div className="reviews-empty-state">
              <h3>No customer reviews to display yet</h3>
              <p>We do not show sample or fabricated testimonials.</p>
            </div>}
      </section>

      <section className="review-form-panel" aria-labelledby="review-form-heading">
        <p className="eyebrow">SHARE YOUR EXPERIENCE</p>
        <h2 id="review-form-heading">Submit a Review</h2>
        <p className="review-form-note">This form works in your current browser session only. Your review will not be permanently stored or automatically published.</p>
        <form className="review-form" onSubmit={handleSubmit} noValidate>
          <div className="review-form-field">
            <label htmlFor="review-name">Customer name</label>
            <input
              ref={nameInputRef}
              id="review-name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={event => { setName(event.target.value); setFormError(''); setSuccessMessage('') }}
              aria-invalid={Boolean(formError && !name.trim())}
              aria-describedby={formError ? 'review-form-error' : undefined}
              required
            />
          </div>
          <fieldset className="review-rating-field" aria-describedby={formError && !rating ? 'review-form-error' : undefined}>
            <legend>Star rating <span aria-hidden="true">*</span></legend>
            <div className="review-star-picker">
              {ratingValues.map(value => <label className={`review-rating-choice${Number(rating) >= value ? ' is-selected' : ''}`} key={value} title={`${value} star${value === 1 ? '' : 's'}`}>
                <input
                  ref={value === 1 ? firstRatingRef : undefined}
                  type="radio"
                  name="rating"
                  value={value}
                  checked={rating === String(value)}
                  onChange={event => { setRating(event.target.value); setFormError(''); setSuccessMessage('') }}
                  aria-label={`${value} star${value === 1 ? '' : 's'}`}
                  required
                />
                <span aria-hidden="true">★</span>
              </label>)}
            </div>
          </fieldset>
          <div className="review-form-field">
            <label htmlFor="review-message">Review message</label>
            <textarea
              ref={messageInputRef}
              id="review-message"
              name="message"
              rows="5"
              value={message}
              onChange={event => { setMessage(event.target.value); setFormError(''); setSuccessMessage('') }}
              aria-invalid={Boolean(formError && !message.trim())}
              aria-describedby={formError ? 'review-form-error' : undefined}
              required
            />
          </div>
          {formError && <p className="review-form-feedback is-error" id="review-form-error" role="alert">{formError}</p>}
          {successMessage && <p className="review-form-feedback is-success" role="status">{successMessage}</p>}
          <button className="button review-submit-button" type="submit">Submit Review</button>
        </form>
      </section>
    </div>
  </Wrapper>
}
