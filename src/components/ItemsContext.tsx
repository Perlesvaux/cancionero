import { createContext, useContext, useState } from 'react'
import type { Dispatch, SetStateAction, ReactNode } from 'react'
import type { Item, Oracion, Cancion } from '../types'

export function createItemsContext<T extends Item>(){

  const Ctx = createContext<{
    items:T[], 
    setItems:Dispatch<SetStateAction<T[]>>
  }|null>(null)

  function Provider({initial, children}:{initial:T[]; children:ReactNode}){
    const [items, setItems] = useState<T[]>(initial)
    return <Ctx.Provider value={{items, setItems}} >{children}</Ctx.Provider>
  }

  function useItems() {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error ('useItems must be used inside its Provider')
    return ctx
  }



  //return [Provider, useItems]
  return { Provider, useItems }


}



  export const {Provider:OracionProvider, useItems:useOracionContext} = createItemsContext<Oracion>()  

  export const {Provider:CancionProvider, useItems:useCancionContext} = createItemsContext<Cancion>()  

  



