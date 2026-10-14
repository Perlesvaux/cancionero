
import {canciones} from '../constants'
import { CancionProvider } from '../components'
import {Indice, ListaDeCanciones} from '../components'

export function Canciones() {

  return (
    <CancionProvider initial={canciones}>

      <Indice items={canciones} />
      <ListaDeCanciones />

    </CancionProvider>
  )
}

