import { Link } from 'react-router-dom'
import { MapPin, Phone } from 'lucide-react'
import { business } from '../config/business'
import { navigationLinks } from '../data/navigation'
import { buildWhatsAppSupportUrl, getCallUrl } from '../services/whatsappService'
import Brand from './Brand'
import WhatsAppIcon from './WhatsAppIcon'

export default function Footer() {
  return <footer className="footer">
    <div className="footer-brand">
      <Brand/>
      <p>Plants, gardening and greenery for every space.</p>
    </div>
    <nav className="footer-navigation" aria-label="Footer navigation">
      <h4>Explore</h4>
      {navigationLinks.map(([to, label]) => <Link key={to} to={to}>{label}</Link>)}
    </nav>
    <div className="footer-contact">
      <h4>Visit / Contact</h4>
      <a className="footer-address" href={business.directionsUrl} target="_blank" rel="noreferrer"><MapPin size={18} aria-hidden="true"/><span>{business.address}</span></a>
      <div className="footer-contact-actions" role="group" aria-label="Contact options">
        <a className="footer-contact-button" href={getCallUrl()} aria-label={`Call ${business.name}`}><Phone size={17} aria-hidden="true"/><span>Call</span></a>
        <a className="footer-contact-button footer-whatsapp-button" href={buildWhatsAppSupportUrl()} target="_blank" rel="noreferrer" aria-label={`Message ${business.name} on WhatsApp`}><WhatsAppIcon size={18}/><span>WhatsApp</span></a>
      </div>
    </div>
    <p className="copyright">© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
  </footer>
}
