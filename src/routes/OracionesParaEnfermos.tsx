import { Indice, ListaDeLecturas } from '../components'
import { oraciones_para_enfermos } from '../constants'

export function OracionesParaEnfermos() {

  return (
    <>
      <Indice items={oraciones_para_enfermos} title="Oraciones por los enfermos" />
      <ListaDeLecturas items={oraciones_para_enfermos} />
    </>
  )
}

