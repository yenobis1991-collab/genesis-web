import Reveal from './Reveal.jsx'
import { prices } from '../data.js'

export default function Pricing() {
  return (
    <section className="tight" id="precios">
      <div className="w">
        <Reveal as="h2">
          Precios <span className="g">referenciales</span>
        </Reveal>
        <Reveal as="p" className="lead">
          Cada proyecto es distinto; estos son puntos de partida.
        </Reveal>
        <div className="gr">
          {prices.map((p) => (
            <Reveal key={p.title} className={p.hot ? 'c hot' : 'c'}>
              <h3>{p.title}</h3>
              <div className="pr2">
                <small>Desde</small>
                {p.price}
              </div>
              <ul>
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
