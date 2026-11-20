import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navigationLinks } from '../data/navigation'
import Brand from './Brand'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return <header className="site-header" onKeyDown={event => {
    if (event.key === 'Escape') setIsMenuOpen(false)
  }}>
    <Brand onClick={() => setIsMenuOpen(false)}/>
    <button
      className="mobile-menu-toggle"
      type="button"
      aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
      aria-expanded={isMenuOpen}
      aria-controls="site-navigation"
      onClick={() => setIsMenuOpen(open => !open)}
    >{isMenuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
    <nav id="site-navigation" className={`site-nav${isMenuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
      {navigationLinks.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setIsMenuOpen(false)}>{label}</NavLink>)}
    </nav>
  </header>
}
