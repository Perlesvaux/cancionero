import {useCancionContext} from '../hooks'
import { Letra } from './Letra'

export function ListaDeCanciones(){

  const {items, slugify, setItems} = useCancionContext()

const flip = (i: number) => {
  setItems(prev =>
    prev.map((c, idx) =>
      idx === i ? { ...c, isShort: !c.isShort } : c
    )
  )
}

      return <>{items.map(({ nombre, letra, resumen, isShort }, index) => (
        <article key={nombre} id={slugify(nombre)}>
          <button onClick={()=>flip(index)}> Entera </button>
          <button onClick={()=>flip(index)}> Entera </button>
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




