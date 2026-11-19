import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function FAQAccordion({ faq }) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonId = `faq-question-${faq.id}`
  const answerId = `faq-answer-${faq.id}`

  return <article className={`faq-item${isOpen ? ' is-open' : ''}`}>
    <h3>
      <button id={buttonId} className="faq-question" type="button" aria-expanded={isOpen} aria-controls={answerId} onClick={() => setIsOpen(open => !open)}>
        <span>{faq.question}</span>
        <span className="faq-toggle-icon" aria-hidden="true">{isOpen ? <Minus size={19}/> : <Plus size={19}/>}</span>
      </button>
    </h3>
    <div id={answerId} className={`faq-answer${isOpen ? ' is-open' : ''}`} role="region" aria-labelledby={buttonId} aria-hidden={!isOpen}>
      <div className="faq-answer-inner"><p>{faq.answer}</p></div>
    </div>
  </article>
}
