import type {Lectura} from '../types'
import {slugify} from '../utils'
import {Leyenda} from './Leyenda'

export function ListaDeLecturas({items}:ListaDeLecturasProps){

      return <>{items.map(({ nombre, cuerpo }) => (
        <article key={nombre} id={slugify(nombre)}>

  <div className="song-controls">

    <a href="#toc"><button> ⌂ </button></a>

  </div>
  
          <h2>{nombre}</h2>
          <section>
              <Leyenda cuerpo={cuerpo}/>
          </section>
        </article>
      ))}</>
} 

interface ListaDeLecturasProps {
  items:Lectura[]
}

