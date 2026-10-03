
import {canciones} from '../constants'
import {RouteContext, useAudioPlayer } from '../hooks'
import {Indice, ListaDeCanciones} from '../components'
import {useState} from 'react'

export function Canciones() {

  const [items, setItems] = useState(canciones)
  const player = useAudioPlayer()

  if (!items) return <> Por favor espere ... </>

  return (
    <RouteContext.Provider value={{items, setItems, player}}>

      <Indice />
      <ListaDeCanciones />

    </RouteContext.Provider>
  )
}

