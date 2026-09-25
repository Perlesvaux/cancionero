import type {CancionContextType} from '../types'

import { createContext, useContext, 
} from 'react'

export const CancionContext = createContext<CancionContextType>({
  items: [],
  slugify: () => '',
  setItems:()=> ''
})

export function useCancionContext () {
  return useContext(CancionContext)
}

