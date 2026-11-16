import Reveal from './Reveal.jsx'
import { examples } from '../data.js'

export default function Examples() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal as="h2">
          Ejemplos de <span className="g">diseño</span>
        </Reveal>
        <Reveal as="p" className="lead">
          Así podría verse la web de tu negocio. Todo se adapta a tu marca y colores.
        </Reveal>
        <div className="gr">
          {examples.map((e) => (
            <Reveal key={e.title} className="ex">
              <div className="bar"><i /><i /><i /></div>
              <div className="scr">
                <div className="hh" style={{ background: e.bg }} />
                <div className="ls" />
                <div className="ls s" />
                <div className="bt" style={{ background: e.btn }} />
              </div>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="nota">
          Ejemplos de diseño ilustrativos, no son clientes reales.
        </Reveal>
      </div>
    </section>
  )
}
