import {useCancionContext} from '../hooks'

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
          <h2>{nombre}</h2>
          <section>
          {

            isShort
              ?
            <>

            {letra.map((estrofa, i) => (
              <p key={i} className="estrofa">
                {estrofa.map((linea, j) => (
                  <span key={j} className="linea">{linea}</span>
                ))}
              </p>
            ))}


              </>
              :
                <>


            {resumen.map((estrofa, i) => (
              <p key={i} className="estrofa">
                {estrofa.map((linea, j) => (
                  <span key={j} className="linea">{linea}</span>
                ))}
              </p>
            ))}



              </>

          }
          </section>
        </article>
      ))}</>
}




