
type Estrofa = string[] 

export interface Cancion {
  nombre: string,
  letra: Estrofa[],
}

export type CancionContextType = {
  items: Cancion[]
  slugify: (s: string) => string
}

//export interface CancionContextValue {
//  items: Cancion[]
//  slugify: (s: string) => string
//}
