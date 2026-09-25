import {useCancionContext} from '../hooks'

export function ListaDeCanciones(){

  const {items, slugify} = useCancionContext()

      return <>{items.map(({ nombre, letra }) => (
        <article key={nombre} id={slugify(nombre)}>
          <h2>{nombre}</h2>
          <section>
            {letra.map((estrofa, i) => (
              <p key={i} className="estrofa">
                {estrofa.map((linea, j) => (
                  <span key={j} className="linea">{linea}</span>
                ))}
              </p>
            ))}
          </section>
        </article>
      ))}</>
}




