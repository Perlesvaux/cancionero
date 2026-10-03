import {useCancionContext} from '../hooks'

export function Indice(){

  const {items, slugify} = useCancionContext()

  return <article className="toc" aria-label="Índice de canciones" id="toc">
  <h2 className="toc__title">Índice</h2>
  <ol className="toc__list">
  {items.map(({ nombre }) => (
    <li key={nombre}>
    <a href={`#${slugify(nombre)}`}>{nombre}</a>
    </li>
  ))}
  </ol>
  </article>
}
