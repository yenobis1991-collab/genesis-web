import Reveal from './Reveal.jsx'
import { waLink } from '../data.js'

export default function Offer() {
  return (
    <section className="tight">
      <div className="w">
        <Reveal className="of">
          <h2>20 % de descuento a mis primeros clientes</h2>
          <p>
            Estoy empezando y quiero que mis primeros proyectos sean un éxito para ti.
            Escríbeme antes de que se acaben los cupos.
          </p>
          <a className="btn" href={waLink('Hola, quiero el descuento para primeros clientes')}>
            Quiero mi descuento
          </a>
        </Reveal>
      </div>
    </section>
  )
}
