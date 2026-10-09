import type {Lectura} from '../../types'
import {alfabetico} from '../../utils'

const modules = import.meta.glob<{ default : Lectura}>('./*.ts', {
  eager: true,
})

export const lecturas:Lectura[] = Object.entries(modules)
.filter(([path])=> !path.endsWith('/index.ts') )
.map(([ , mod])=> mod.default)
.sort(alfabetico)
