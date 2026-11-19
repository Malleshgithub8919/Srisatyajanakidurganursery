import { Link } from 'react-router-dom'
import { Sprout } from 'lucide-react'
import { business } from '../config/business'

export default function Brand({ onClick }) {
  return <Link to="/" className="brand" onClick={onClick}>
    <span className="brand-icon"><Sprout /></span>
    <span>{business.name}<small>GROW GREEN • LIVE GREEN</small></span>
  </Link>
}
