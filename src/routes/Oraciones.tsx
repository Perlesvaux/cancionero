//import {canciones} from '../constants'
//import {CancionContext, useAudioPlayer } from '../hooks'
import {Indice, ListaDeOraciones} from '../components'
import {useState} from 'react'
import {oraciones} from '../constants'
import { OracionContext } from '../hooks'

export function Oraciones() {

  const [items, setItems] = useState(oraciones)
  //const player = useAudioPlayer()

  if (!oraciones) return <> Por favor espere ... </>

  return (
    <OracionContext.Provider value={{ items, setItems }}>
      <Indice items={oraciones} />
      <ListaDeOraciones />
    </OracionContext.Provider>
  )
}


