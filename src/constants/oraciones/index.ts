import type {Oracion} from '../../types'
import {alfabetico} from '../../utils'

const modules = import.meta.glob<{default:Oracion}>('./*.ts',{
  eager: true,
})

export const oraciones:Oracion[] = Object.entries(modules)
.filter(([path])=> !path.endsWith('/index.ts'))
.map( ([ ,mod])=> mod.default)
.sort(alfabetico)
