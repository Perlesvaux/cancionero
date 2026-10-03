
import {canciones} from '../constants'
import {CancionContext, useAudioPlayer } from '../hooks'
import {Indice, ListaDeCanciones} from '../components'
import {useState} from 'react'

export function Canciones() {

  const [items, setItems] = useState(canciones)
  const player = useAudioPlayer()

  if (!items) return <> Por favor espere ... </>

  return (
    <CancionContext.Provider value={{items, setItems, player}}>

      <Indice items={items} />
      <ListaDeCanciones />

    </CancionContext.Provider>
  )
}

