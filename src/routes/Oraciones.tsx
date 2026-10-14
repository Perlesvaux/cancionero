import {Indice, ListaDeOraciones} from '../components'
//import {useState} from 'react'
import {oraciones} from '../constants'
//import { OracionContext } from '../hooks'
import { OracionProvider } from '../components'

export function Oraciones() {

  //const [items, setItems] = useState(oraciones)

  //if (!items) return <> Por favor espere ... </>

  return (
    <OracionProvider initial={oraciones}>
      <Indice items={oraciones} />
      <ListaDeOraciones />
    </OracionProvider>
  )
}


