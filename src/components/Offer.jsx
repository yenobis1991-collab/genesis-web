import Reveal from './Reveal.jsx'
import { waLink } from '../data.js'

export default function Offer() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal className="of">
          <h2>Cotización gratis y sin compromiso</h2>
          <p>
            Cuéntame qué necesitas y te respondo en 24 horas con una propuesta clara,
            con precio y plazo cerrados, adaptada a tu negocio.
          </p>
          <a className="btn" href={waLink('Hola, quiero una cotización gratis')}>
            Quiero mi cotización
          </a>
        </Reveal>
      </div>
    </section>
  )
}
