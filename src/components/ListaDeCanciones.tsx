import {useCancionContext} from '../hooks'
import { Letra } from './Letra'
import {Pista} from './Pista'
import { slugify, flip } from '../utils'

export function ListaDeCanciones(){

  const {items, setItems} = useCancionContext()

  return <>{items.map(({ nombre, letra, resumen, isShort }, index) => (
    <article key={nombre} id={slugify(nombre)}>

      <div className="song-controls">
        <a href="#toc"><button> ⌂ </button></a>
        <button onClick={() => setItems(flip(items, index, 'isShort'))}>
          {isShort ? '−' : '≡'}
        </button>
        <Pista nombre={nombre} />
      </div>

      <h2>
        {nombre}
      </h2>

      <section>
      {
        isShort
          ?<Letra letra={letra}/>
          :<Letra letra={resumen} />
      }
      </section>

    </article>
  ))}</>
}




