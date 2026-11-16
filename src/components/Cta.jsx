import Reveal from './Reveal.jsx'
import { waLink } from '../data.js'

export default function Cta() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal className="cta">
          <h2>
            Empecemos tu <span className="g">proyecto hoy</span>
          </h2>
          <p>Cuéntame qué necesitas y te respondo con una cotización gratis.</p>
          <a className="btn p" href={waLink('Hola, quiero cotizar un proyecto')}>
            Escríbeme por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
