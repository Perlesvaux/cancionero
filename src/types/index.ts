import type { Dispatch, SetStateAction } from 'react'

type Estrofa = string[] 

export interface Cancion {
  nombre: string,
  letra: Estrofa[],
  resumen: Estrofa[],
  isShort: boolean,
}

export type CancionContextType = {
  items: Cancion[]
  slugify: (s: string) => string
  setItems: Dispatch<SetStateAction<Cancion[]>>
}

export interface LetraProps {
  letra:Estrofa[],
} 
