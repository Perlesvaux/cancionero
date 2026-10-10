import {slugify} from '../utils'
import {Leyenda} from './Leyenda'
import {useOracionContext} from '../hooks'
import {Pista} from './Pista'

export function ListaDeOraciones(){

  const {items, setItems} = useOracionContext()

const flip = (i: number) => {
  setItems(prev =>
    prev.map((c, idx) =>
      idx === i ? { ...c, isLatin: !c.isLatin } : c
    )
  )
}

      return <>{items.map(({ nombre, cuerpo, nomen, corpus, isLatin }, index) => (
        <article key={nombre} id={slugify(nombre)}>

  <div className="song-controls">

    <a href="#toc"><button> ⌂ </button></a>

    <button onClick={() => flip(index)}>
      {isLatin ? '−' : '≡'}
    </button>

    <Pista nombre={nombre} />


  </div>
  
          <h2>
          {
            isLatin
            ?nombre
            :nomen
          }
          </h2>

          <section>

          {
            isLatin
            ?<Leyenda cuerpo={cuerpo}/>
            :<Leyenda cuerpo={corpus}/>

          }
          </section>
        </article>
      ))}</>
} 

