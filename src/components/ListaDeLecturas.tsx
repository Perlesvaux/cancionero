import type {Lectura} from '../types'
import {slugify} from '../utils'
import {Leyenda} from './Leyenda'

export function ListaDeLecturas({items}:ListaDeLecturasProps){

      return <>{items.map(({ nombre, cuerpo }, index) => (
        <article key={nombre} id={slugify(nombre)}>

  <div className="song-controls">

    <a href="#toc"><button> ⌂ </button></a>

  </div>
  
      <h2>
        <span className="print-only-inline">
        {index+1}.{" "} 
        </span> 
        {nombre}
      </h2>
          <section>
              <Leyenda cuerpo={cuerpo}/>
          </section>
        </article>
      ))}</>
} 

interface ListaDeLecturasProps {
  items:Lectura[]
}


//export const abc="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')



      //<h2>
      //  <span className="print-only-inline">
      //  {abc[index]}.{" "} 
      //  </span> 
      //  {nombre}
      //</h2>
