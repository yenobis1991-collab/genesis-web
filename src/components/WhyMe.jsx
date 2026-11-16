import Reveal from './Reveal.jsx'
import { reasons } from '../data.js'

export default function WhyMe() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal as="h2">
          Por qué <span className="g">trabajar conmigo</span>
        </Reveal>
        <div className="gr">
          {reasons.map((r) => (
            <Reveal key={r.title} className="c">
              <div className="ic">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
