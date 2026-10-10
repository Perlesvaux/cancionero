
import {canciones} from '../constants'
import {CancionContext } from '../hooks'
import {Indice, ListaDeCanciones} from '../components'
import {useState} from 'react'

export function Canciones() {

  const [items, setItems] = useState(canciones)

  if (!items) return <> Por favor espere ... </>

  return (
    <CancionContext.Provider value={{items, setItems}}>

      <Indice items={items} />
      <ListaDeCanciones />

    </CancionContext.Provider>
  )
}

