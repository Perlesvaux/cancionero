import type {Oracion} from '../types'
import {slugify} from '../utils'
import {Leyenda} from './Leyenda'

export function ListaDeOraciones({items}:ListaDeOracionesProps){

      return <>{items.map(({ nombre, cuerpo }) => (
        <article key={nombre} id={slugify(nombre)}>
  
          <h2>{nombre}</h2>
          <section>
              <Leyenda cuerpo={cuerpo}/>
          </section>
        </article>
      ))}</>
} 

interface ListaDeOracionesProps {
  items:Oracion[]
}
