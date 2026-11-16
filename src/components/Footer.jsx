import { contact } from '../data.js'

export default function Footer() {
  return (
    <footer>
      <div className="w">
        {contact.name} · <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
    </footer>
  )
}
