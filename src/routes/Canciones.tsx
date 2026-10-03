
import {canciones} from '../constants'
import {CancionContext, useAudioPlayer } from '../hooks'
import {Indice, ListaDeCanciones} from '../components'

import {useState} from 'react'

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')   // strip accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')



export function Canciones() {

  const [items, setItems] = useState(canciones)
  const player = useAudioPlayer()

  if (!items) return <> Por favor espere ... </>

  return (
    <CancionContext.Provider value={{items, slugify, setItems, player}}>

      <Indice />
      <ListaDeCanciones />

    </CancionContext.Provider>
  )
}

