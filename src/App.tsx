// src/App.tsx
import './App.css'
import {canciones} from './constants'
import {CancionContext} from './hooks'
import {Indice, ListaDeCanciones} from './components'

import {useState} from 'react'

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

export default function App() {

  const [items, setItems] = useState(canciones)

  if (!items) return <> Por favor espere ... </>

  return (
    <CancionContext.Provider value={{items, slugify, setItems}}>

      <Indice />
      <ListaDeCanciones />

    </CancionContext.Provider>
  )
}




      //<nav className="toc" aria-label="Índice de canciones">
      //  <h2 className="toc__title">Índice</h2>
      //  <ol className="toc__list">
      //    {items.map(({ nombre }) => (
      //      <li key={nombre}>
      //        <a href={`#${slugify(nombre)}`}>{nombre}</a>
      //      </li>
      //    ))}
      //  </ol>
      //</nav>
