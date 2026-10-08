import type { Dispatch, SetStateAction } from 'react'


export interface Cancion {
  nombre: string,
  letra: string,
  resumen: string,
  isShort: boolean,
}

type PlayerContextType = {
  playingId: string | null
  toggle: (id: string, src: string) => void
}

export type CancionContextType = {
  items: Cancion[]
  //slugify: (s: string) => string
  setItems: Dispatch<SetStateAction<Cancion[]>>,
  player: PlayerContextType
}

export interface IndiceProps {
  items: IndiceItems
}


type IndiceItems = Cancion[] | Oracion[]


export interface Oracion {
  nombre: string,
  cuerpo: string,
}

export interface Lectura {
  nombre: string,
  cuerpo: string,
}
