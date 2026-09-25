// src/App.tsx
import './App.css'
import { items } from './constants'

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export default function App() {
  return (
    <>
      <nav className="toc" aria-label="Índice de canciones">
        <h2 className="toc__title">Índice</h2>
        <ol className="toc__list">
          {items.map(({ nombre }) => (
            <li key={nombre}>
              <a href={`#${slugify(nombre)}`}>{nombre}</a>
            </li>
          ))}
        </ol>
      </nav>

      {items.map(({ nombre, letra }) => (
        <article key={nombre} id={slugify(nombre)}>
          <h2>{nombre}</h2>
          <section>
            {letra.map((estrofa, i) => (
              <p key={i} className="estrofa">
                {estrofa.map((linea, j) => (
                  <span key={j} className="linea">{linea}</span>
                ))}
              </p>
            ))}
          </section>
        </article>
      ))}
    </>
  )
}
