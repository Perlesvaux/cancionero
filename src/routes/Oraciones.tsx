//import {canciones} from '../constants'
//import {CancionContext, useAudioPlayer } from '../hooks'
import {Indice, ListaDeOraciones} from '../components'
//import {useState} from 'react'
import {oraciones} from '../constants'

export function Oraciones() {

  //const [items, setItems] = useState(oraciones)
  //const player = useAudioPlayer()

  if (!oraciones) return <> Por favor espere ... </>

  return (
    <>
      <Indice items={oraciones} />
      <ListaDeOraciones items={oraciones} />
    </>
  )
}


