// =====================================================
// AQUÍ CAMBIAS TUS DATOS. No hace falta tocar los componentes.
// =====================================================

export const contact = {
  name: 'Siboney',
  email: 'yenobis1991@gmail.com',
  whatsapp: '34685333549', // código de país + número, sin + ni espacios
}

// Crea el enlace de WhatsApp con un mensaje ya escrito
export const waLink = (text) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`

export const techs = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
  'SQL', 'MongoDB', 'APIs REST', 'Git y GitHub',
]

export const services = [
  { icon: '🌐', title: 'Página web o landing', text: 'Presenta tu negocio, aparece en Google y recibe clientes directo en tu WhatsApp.' },
  { icon: '🛒', title: 'Tienda online', text: 'Tus clientes ven los productos y compran desde su teléfono, con carrito y pagos en línea.' },
  { icon: '📱', title: 'Instalable como app', text: 'Tu web se guarda en la pantalla de inicio del celular y se usa como una app, sin descargar nada.' },
  { icon: '📋', title: 'Sistema a medida', text: 'Reservas, inventario, pedidos y reportes que reemplazan tus Excel y cuadernos.' },
  { icon: '🔧', title: 'Arreglos y mejoras', text: 'Corrijo, acelero o rediseño una web que ya tienes y no te funciona bien.' },
  { icon: '🛟', title: 'Mantenimiento mensual', text: 'Cambios, respaldos y soporte para que tu web nunca se caiga.' },
]

export const reasons = [
  { icon: '💬', title: 'Trato directo', text: 'Hablas conmigo desde el primer mensaje hasta la entrega, sin intermediarios.' },
  { icon: '🧾', title: 'Precio claro', text: 'Cotización por escrito con precio y plazo cerrados antes de empezar.' },
  { icon: '🛠️', title: 'Soporte después', text: 'Si algo falla o necesitas un cambio tras la entrega, te ayudo.' },
]

export const examples = [
  { title: 'Tienda de ropa', text: 'Catálogo, carrito y pedidos por WhatsApp.', bg: 'linear-gradient(120deg,#F472B6,#7C3AED)', btn: 'var(--cy)' },
  { title: 'Restaurante', text: 'Carta digital y reservas en línea.', bg: 'linear-gradient(120deg,#F59E0B,#EF4444)', btn: '#FBBF24' },
  { title: 'Servicios y citas', text: 'Agenda, galería y contacto directo.', bg: 'linear-gradient(120deg,#0891B2,#34D399)', btn: '#fff' },
]

export const steps = [
  { title: 'Conversamos', text: 'Me cuentas qué necesitas por WhatsApp o videollamada.' },
  { title: 'Cotización clara', text: 'Precio y plazo cerrados, por escrito, en 24 horas.' },
  { title: 'Desarrollo', text: 'Te muestro avances y ajustamos juntos.' },
  { title: 'Entrega y soporte', text: 'Tu proyecto publicado y con ayuda posterior.' },
]

export const packages = [
  { title: 'Landing', text: 'Una página para presentar tu negocio y recibir clientes por WhatsApp.', hot: false, items: ['1 página a medida', 'Adaptada al celular', 'Botón de WhatsApp'] },
  { title: 'Web completa', text: 'Varias secciones para mostrar todo lo que ofreces.', hot: true, items: ['Hasta 5 secciones', 'Formulario de contacto', 'Dominio y publicación'] },
  { title: 'Tienda o sistema', text: 'Para vender en línea o llevar el control de tu negocio.', hot: false, items: ['Carrito y pedidos', 'Panel de administración', 'Capacitación de uso'] },
]

export const faqs = [
  { q: '¿Cuánto cuesta?', a: 'Depende de lo que necesites. Escríbeme por WhatsApp y te envío una cotización gratis, con precio y plazo cerrados antes de empezar.' },
  { q: '¿Cuánto demora mi página?', a: 'Una landing suele estar lista en 3 a 7 días. Webs y tiendas más grandes, entre 2 y 4 semanas.' },
  { q: '¿Cómo se paga?', a: 'En 2 partes: 50 % al iniciar y 50 % al entregar. Al cotizar te indico los métodos de pago disponibles.' },
  { q: '¿Trabajas con clientes de otros países?', a: 'Sí, trabajo de forma 100 % online con clientes de varios países. Todo se coordina por WhatsApp y videollamada.' },
  { q: '¿Y si necesito cambios después?', a: 'Incluyo soporte tras la entrega, y puedes contratar mantenimiento mensual si lo prefieres.' },
]
