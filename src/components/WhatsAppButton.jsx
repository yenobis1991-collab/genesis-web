import { waLink } from '../data.js'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={waLink('Hola, quiero cotizar')} aria-label="Escribir por WhatsApp">
      WhatsApp
    </a>
  )
}
