import { Link } from 'react-router-dom'
import { business } from '../config/business'

export default function Brand({ onClick }) {
  return <Link to="/" className="brand" onClick={onClick}>
    <img className="brand-logo" src="/logo.png" alt="" aria-hidden="true" />
    <span>{business.name}<small>GROW GREEN • LIVE GREEN</small></span>
  </Link>
}
