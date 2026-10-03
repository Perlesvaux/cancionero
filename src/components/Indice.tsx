import {useRouteContext} from '../hooks'
import { slugify } from '../utils'

export function Indice(){

  const {items} = useRouteContext()

  return <article className="toc" aria-label="Índice" id="toc">
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
