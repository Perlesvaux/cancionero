//import {useRouteContext} from '../hooks'
import type {IndiceProps} from '../types'
import { slugify } from '../utils'

export function Indice({ items }:IndiceProps){

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



//export interface LetraProps {
//  letra:Estrofa[],
//} 
