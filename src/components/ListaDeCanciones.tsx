import {useCancionContext} from '../hooks'
import { Letra } from './Letra'
import {Pista} from './Pista'

import { slugify } from '../utils'

export function ListaDeCanciones(){

  const {items, setItems} = useCancionContext()

const flip = (i: number) => {
  setItems(prev =>
    prev.map((c, idx) =>
      idx === i ? { ...c, isShort: !c.isShort } : c
    )
  )
}

      return <>{items.map(({ nombre, letra, resumen, isShort }, index) => (
        <article key={nombre} id={slugify(nombre)}>
  <div className="song-controls">

    <a href="#toc"><button> ⌂ </button></a>

    <button onClick={() => flip(index)}>
      {isShort ? '−' : '≡'}
    </button>

    <Pista nombre={nombre} />
  </div>
          <h2>{nombre}</h2>
          <section>
          {

            isShort
              ?
              <Letra letra={letra}/>
              :
              <Letra letra={resumen} />

          }
          </section>
        </article>
      ))}</>
}




