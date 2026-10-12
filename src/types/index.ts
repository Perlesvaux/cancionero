import type { Dispatch, SetStateAction } from 'react'

// ----- Items -----

export interface Item {
  nombre: string,
}

export interface Cancion extends Item {
  letra: string,
  resumen: string,
  isShort: boolean,
}

export interface Oracion extends Item {
  cuerpo: string,
  corpus: string,
  nomen: string,
  isLatin:boolean,

}

export interface Lectura extends Item {
  cuerpo: string,
}










type PlayerType = {
  playingId: string | null
  toggle: (id: string, src: string) => void
}


export interface IndiceProps {
  items: Cancion[] | Oracion[] | Lectura []
}

export type AudioContextType = {
  player: PlayerType

}


// ----- Context -----

export type OracionContextType = {
  items: Oracion[]
  setItems: Dispatch<SetStateAction<Oracion[]>>,
}

export type CancionContextType = {
  items: Cancion[]
  setItems: Dispatch<SetStateAction<Cancion[]>>,
}
