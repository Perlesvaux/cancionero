import {slugify, flip} from '../utils'
import {Leyenda} from './Leyenda'
//import {useOracionContext} from '../hooks'
import {Pista} from './Pista'
import { useOracionContext } from './ItemsContext'

export function ListaDeOraciones(){

  //const {items, setItems} = useOracionContext()
  const {items, setItems} = useOracionContext()

  return <>{items.map(({ nombre, cuerpo, nomen, corpus, isLatin }, index) => (
    <article key={nombre} id={slugify(nombre)}>

      <div className="song-controls">
        <a href="#toc"><button> ⌂ </button></a>
        <button onClick={() => setItems(flip(items, index, 'isLatin'))}>
          {isLatin ? 'A' : 'Æ'}
        </button>
        <Pista nombre={nombre} />
      </div>

      <h2>
      {
        isLatin
          ?nomen
          :nombre
      }
      </h2>

      <section>
      {
        isLatin
          ?<Leyenda cuerpo={corpus}/>
          :<Leyenda cuerpo={cuerpo}/>
      }
      </section>
    </article>
  ))}</>
} 

