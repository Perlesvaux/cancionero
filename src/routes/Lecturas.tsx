import { Indice, ListaDeLecturas } from '../components'
import {lecturas} from '../constants'

export function Lecturas() {

  return (
    <>
      <Indice items={lecturas} />
      <ListaDeLecturas items={lecturas}/>
    </>
  )
}




