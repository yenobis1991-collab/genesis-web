import { waLink } from '../data.js'

export default function Hero() {
  return (
    <header className="hero" id="inicio">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="w hero-grid">
        <div>
          <span className="tag">Desarrolladora Full Stack · Atención a todo el Perú</span>
          <h1>
            Tu negocio, <span className="g">vendiendo online</span> desde el celular.
          </h1>
          <p>
            Creo páginas web, tiendas online y sistemas a medida para emprendedores y pymes.
            Diseño moderno, entrega rápida y cotización clara.
          </p>
          <div className="row">
            <a className="btn p" href={waLink('Hola, quiero cotizar una página web')}>
              Cotizar gratis por WhatsApp
            </a>
            <a className="btn o" href="#servicios">Ver servicios</a>
          </div>
          <div className="tk">
            <span>Cotización en 24 h</span>
            <span>Se ve bien en celular</span>
            <span>Soporte incluido</span>
          </div>
        </div>

        <div className="ph" aria-hidden="true">
          <div className="n" />
          <div className="t">Tu Tienda</div>
          <div className="ban" />
          <div className="pr">
            <div /><div /><div /><div />
          </div>
          <div className="cb">Comprar por WhatsApp</div>
        </div>
      </div>
    </header>
  )
}
