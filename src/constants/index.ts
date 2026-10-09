import type {Lectura, Oracion} from '../types'
import {alfabetico} from '../utils'
import { oracion_por_un_enfermo } from './lecturas/oracion_por_un_enfermo'
import {
  ave_maria,
  salve,
  
} from './oraciones/maria'
    
export { canciones } from './canciones'




export const oraciones:Oracion[] = [
  ave_maria,
  salve,

].sort(alfabetico)



export const lecturas:Lectura[] = [
  oracion_por_un_enfermo,
  
].sort(alfabetico)
