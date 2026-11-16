import { contact, waLink } from '../data.js'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="w">
        <a className="logo" href="#inicio">
          {contact.name}
          <span>.dev</span>
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#precios">Precios</a>
          <a href="#preguntas">Preguntas</a>
        </div>
        <a className="btn p small" href={waLink('Hola, quiero cotizar una página web')}>
          Cotizar
        </a>
      </div>
    </nav>
  )
}
