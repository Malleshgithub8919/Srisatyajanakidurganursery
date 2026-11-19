import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { business } from '../config/business'
import { navigationLinks } from '../data/navigation'
import { buildWhatsAppSupportUrl, getCallUrl } from '../services/whatsappService'
import Brand from './Brand'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return <footer className="footer">
    <div><Brand/><p>Plants, gardening and greenery for every space.</p></div>
    <nav className="footer-navigation" aria-label="Footer navigation">
      <h4>Explore</h4>
      {navigationLinks.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
    </nav>
    <div>
      <h4>Visit / Contact</h4>
      <a href={business.directionsUrl} target="_blank" rel="noreferrer">{business.address}</a>
      <div className="header-actions" role="group" aria-label="Contact options">
        <a className="button button-small contact-icon-button" href={getCallUrl()} aria-label={`Call ${business.name}`} title="Call nursery"><Phone size={18}/></a>
        <a className="button button-small contact-icon-button" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer" aria-label={`Message ${business.name} on WhatsApp`} title="WhatsApp"><WhatsAppIcon size={18}/></a>
      </div>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
  </footer>
}
