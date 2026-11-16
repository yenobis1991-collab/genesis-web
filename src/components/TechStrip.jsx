import { techs } from '../data.js'

export default function TechStrip() {
  // Se repite la lista dos veces para que la cinta se mueva sin cortes
  const loop = [...techs, ...techs]
  return (
    <div className="st" aria-hidden="true">
      <div>
        {loop.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  )
}
