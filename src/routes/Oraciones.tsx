import {Indice, ListaDeOraciones} from '../components'
import {useState} from 'react'
import {oraciones} from '../constants'
import { OracionContext } from '../hooks'

export function Oraciones() {

  const [items, setItems] = useState(oraciones)

  if (!items) return <> Por favor espere ... </>

  return (
    <OracionContext.Provider value={{ items, setItems }}>
      <Indice items={items} />
      <ListaDeOraciones />
    </OracionContext.Provider>
  )
}


