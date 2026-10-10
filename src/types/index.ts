import type { Dispatch, SetStateAction } from 'react'


export interface Cancion {
  nombre: string,
  letra: string,
  resumen: string,
  isShort: boolean,
}

type PlayerType = {
  playingId: string | null
  toggle: (id: string, src: string) => void
}


export interface IndiceProps {
  items: Cancion[] | Oracion[] | Lectura []
}

export interface Oracion {
  nombre: string,
  cuerpo: string,
  corpus: string,
  nomen: string,
  isLatin:boolean,

}

export interface Lectura {
  nombre: string,
  cuerpo: string,
}

export type AudioContextType = {
  player: PlayerType

}


// ----- Types for context -----

export type OracionContextType = {
  items: Oracion[]
  setItems: Dispatch<SetStateAction<Oracion[]>>,
}

export type CancionContextType = {
  items: Cancion[]
  setItems: Dispatch<SetStateAction<Cancion[]>>,
}
