import type {CancionContextType} from '../types'

import { createContext, useContext, 
} from 'react'

export const CancionContext = createContext<CancionContextType>({
  items: [],
  slugify: () => '',
})

export function useCancionContext () {
  return useContext(CancionContext)
}

