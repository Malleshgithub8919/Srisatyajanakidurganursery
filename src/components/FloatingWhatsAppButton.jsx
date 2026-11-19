import { business } from '../config/business'
import { buildWhatsAppSupportUrl } from '../services/whatsappService'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsAppButton() {
  return <a
    className="floating-whatsapp"
    href={buildWhatsAppSupportUrl()}
    target="_blank"
    rel="noreferrer"
    aria-label={`Contact ${business.name} on WhatsApp`}
    title="Contact us on WhatsApp"
  >
    <WhatsAppIcon size={28}/>
  </a>
}
