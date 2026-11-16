import Reveal from './Reveal.jsx'
import { services } from '../data.js'

export default function Services() {
  return (
    <section id="servicios">
      <div className="w">
        <Reveal as="h2">
          Lo que puedo <span className="g">hacer por ti</span>
        </Reveal>
        <Reveal as="p" className="lead">
          Me encargo de todo el proyecto, del diseño a la publicación, sin que coordines con varias personas.
        </Reveal>
        <div className="gr">
          {services.map((s) => (
            <Reveal key={s.title} className="c">
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
