import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Plants from './pages/Plants'
import PlantDetails from './pages/PlantDetails'
import Gardening from './pages/Gardening'
import FAQs from './pages/FAQs'
import Blog from './pages/Blog'
import BlogDetails from './pages/BlogDetails'
import { About, Gallery, Contact } from './pages/InfoPages'
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

function PageScrollAnimations() {
  const { pathname } = useLocation()

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('main.page-wrap > *'))
    if (!revealElements.length) return undefined

    let observer
    const clearRevealClasses = () => {
      observer?.disconnect()
      document.documentElement.classList.remove('site-motion-ready')
      revealElements.forEach(element => {
        element.classList.remove('site-reveal', 'is-visible')
        element.style.removeProperty('--site-reveal-delay')
      })
    }

    revealElements.forEach(element => {
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : []
      const delay = Math.min(siblings.indexOf(element) * 70, 280)
      element.style.setProperty('--site-reveal-delay', `${delay}ms`)
      element.classList.add('site-reveal')
    })

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      revealElements.forEach(element => element.classList.add('is-visible'))
      return clearRevealClasses
    }

    document.documentElement.classList.add('site-motion-ready')
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.01, rootMargin: '0px 0px -24px 0px' })

    revealElements.forEach(element => observer.observe(element))
    return clearRevealClasses
  }, [pathname])

  return null
}

export default function App() {
  return <>
    <ScrollToTop/>
    <PageScrollAnimations/>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/plants" element={<Plants/>}/>
      <Route path="/plants/:id" element={<PlantDetails/>}/>
      <Route path="/order" element={<Navigate to="/contact#order-form" replace/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gardening" element={<Gardening/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/faqs" element={<FAQs/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:slug" element={<BlogDetails/>}/>
      <Route path="/reviews" element={<Navigate to="/contact" replace/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="*" element={<main className="page-wrap"><h1>Page not found</h1></main>}/>
    </Routes>
    <FloatingWhatsAppButton/>
    <Footer/>
  </>
}
