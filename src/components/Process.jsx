import Reveal from './Reveal.jsx'
import { steps } from '../data.js'

export default function Process() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal as="h2">
          Así <span className="g">trabajamos</span>
        </Reveal>
        <Reveal as="p" className="lead">Un proceso simple y sin sorpresas.</Reveal>
        <ol>
          {steps.map((s) => (
            <Reveal as="li" key={s.title}>
              <strong>{s.title}</strong>
              <span>{s.text}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
