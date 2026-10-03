import type { Dispatch, SetStateAction } from 'react'

type Estrofa = string[] 

export interface Cancion {
  nombre: string,
  letra: Estrofa[],
  resumen: Estrofa[],
  isShort: boolean,
}

type PlayerContextType = {
  playingId: string | null
  toggle: (id: string, src: string) => void
}

export type CancionContextType = {
  items: Cancion[]
  slugify: (s: string) => string
  setItems: Dispatch<SetStateAction<Cancion[]>>,
  player: PlayerContextType
}

export interface LetraProps {
  letra:Estrofa[],
} 


export type RouteContextType = {
  items: Cancion[]
  setItems: Dispatch<SetStateAction<Cancion[]>>,
  player: PlayerContextType


  







}
