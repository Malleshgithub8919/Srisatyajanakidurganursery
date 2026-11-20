import { Phone } from 'lucide-react'
import { business } from '../config/business'
import { buildWhatsAppSupportUrl, getCallUrl } from '../services/whatsappService'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsAppButton() {
  return <div className="floating-contact-actions" role="group" aria-label="Contact us">
    <a
      className="floating-contact-button floating-call"
      href={getCallUrl()}
      aria-label={`Call ${business.name}`}
      title={`Call ${business.name}`}
    >
      <Phone size={26} aria-hidden="true"/>
    </a>
    <a
      className="floating-contact-button floating-whatsapp"
      href={buildWhatsAppSupportUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contact ${business.name} on WhatsApp`}
      title="Contact us on WhatsApp"
    >
      <WhatsAppIcon size={28}/>
    </a>
  </div>
}
