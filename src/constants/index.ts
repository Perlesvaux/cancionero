import type {Cancion, Oracion} from '../types'
import {alfabetico} from '../utils'

import {como_el_padre_me_amo} from './canciones/como_el_padre_me_amo'
import {pescador_de_hombres} from './canciones/pescador_de_hombres'
import {cerca_esta_el_senor} from './canciones/cerca_esta_el_senor'
import {dios_esta_aqui} from './canciones/dios_esta_aqui'
import {el_senor_dios_nos_amo} from './canciones/el_senor_dios_nos_amo'
import {santa_maria_del_amen} from './canciones/santa_maria_del_amen'
import {santa_maria_de_la_esperanza} from './canciones/santa_maria_de_la_esperanza'
import {estoy_pensando_en_dios} from './canciones/estoy_pensando_en_dios'
import {el_senor_es_mi_pastor} from './canciones/el_senor_es_mi_pastor'
import {santa_maria_del_camino} from './canciones/santa_maria_del_camino'
import {con_nosotros_esta} from './canciones/con_nosotros_esta'
import {oh_maria_madre_mia} from './canciones/oh_maria_madre_mia'
import {hoy_he_vuelto} from './canciones/hoy_he_vuelto'
import {nadie_te_ama_como_yo} from './canciones/nadie_te_ama_como_yo'
import { oracion_por_un_enfermo } from './oraciones/oracion_por_un_enfermo'



export const canciones:Cancion[] = [

  como_el_padre_me_amo,
  pescador_de_hombres,
  cerca_esta_el_senor,
  dios_esta_aqui,
  el_senor_dios_nos_amo,
  santa_maria_del_amen,
  estoy_pensando_en_dios,
  el_senor_es_mi_pastor,
  santa_maria_del_camino,
  con_nosotros_esta,
  oh_maria_madre_mia,
  hoy_he_vuelto,
  nadie_te_ama_como_yo,
  santa_maria_de_la_esperanza,
].sort(alfabetico)




export const oraciones:Oracion[] = [
  oracion_por_un_enfermo,
  
].sort(alfabetico)



