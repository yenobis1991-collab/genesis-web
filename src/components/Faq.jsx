import Reveal from './Reveal.jsx'
import { faqs } from '../data.js'

export default function Faq() {
  return (
    <section className="tight" id="preguntas">
      <div className="w">
        <Reveal as="h2">
          Preguntas <span className="g">frecuentes</span>
        </Reveal>
        {faqs.map((f) => (
          <Reveal as="details" key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
