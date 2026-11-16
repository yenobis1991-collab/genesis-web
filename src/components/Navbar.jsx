import { contact, waLink } from '../data.js'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="w">
        <a className="logo" href="#inicio">
          {/* BASE_URL = /genesis-web/ : así la imagen se encuentra también en GitHub Pages */}
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" width="38" height="38" />
          <em>{contact.name}</em>
          <span>.dev</span>
        </a>
        <div className="nav-links">
          <a href="#servicios">Servicios</a>
          <a href="#paquetes">Qué incluye</a>
          <a href="#preguntas">Preguntas</a>
        </div>
        <a className="btn p small" href={waLink('Hola, quiero cotizar una página web')}>
          Cotizar
        </a>
      </div>
    </nav>
  )
}
