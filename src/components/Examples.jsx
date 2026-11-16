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
          Así podría verse la web de tu negocio. Todo se adapta a tu marca, tus colores y tu logo.
        </Reveal>
        <div className="gr gr3">
          {examples.map((e) => (
            <Reveal key={e.brand} className="ex">
              <div className="bar"><i /><i /><i /><span>{e.url}</span></div>
              <div className="mini" style={{ '--c1': e.c1, '--c2': e.c2 }}>
                <div className="mn"><b>{e.brand}</b><u /><u /><u /></div>
                <div className="mh">
                  <strong>{e.hero}</strong>
                  <em>{e.btn}</em>
                </div>
                <div className="mt">
                  {e.tiles.map((t) => (
                    <div key={t}><i />{t}</div>
                  ))}
                </div>
              </div>
              <h3>{e.brand}</h3>
              <p>{e.kind}</p>
            </Reveal>
          ))}
        </div>
        <p className="nota">Ejemplos ilustrativos con negocios ficticios. Tu diseño se crea a medida.</p>
      </div>
    </section>
  )
}
