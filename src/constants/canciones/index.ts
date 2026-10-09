
import type {Cancion} from '../../types'
import {alfabetico} from '../../utils'

//const modules = import.meta.glob<{default:Cancion}>('./*.ts',{eager:true})
const modules = import.meta.glob<{ default: Cancion }>('./*.ts', {
  eager: true,
})

export const canciones: Cancion[] = Object.entries(modules)
.filter(([path])=> !path.endsWith('/index.ts')  )
.map(( [ , mod] )=> mod.default )
.sort(alfabetico)

