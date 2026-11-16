import Reveal from './Reveal.jsx'
import { packages, waLink } from '../data.js'

export default function Pricing() {
  return (
    <section className="tight" id="paquetes">
      <div className="w">
        <Reveal as="h2">
          Qué incluye <span className="g">cada proyecto</span>
        </Reveal>
        <Reveal as="p" className="lead">
          Cada negocio es distinto. Cuéntame qué necesitas y te envío una cotización gratis.
        </Reveal>
        <div className="gr">
          {packages.map((p) => (
            <Reveal key={p.title} className={p.hot ? 'c hot' : 'c'}>
              <h3>{p.title}</h3>
              <p className="pk-text">{p.text}</p>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal className="cta-row">
          <a className="btn p" href={waLink('Hola, quiero una cotización para mi negocio')}>
            Pedir mi cotización gratis
          </a>
        </Reveal>
      </div>
    </section>
  )
}
