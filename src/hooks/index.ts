import type {CancionContextType, AudioContextType, OracionContextType} from '../types'

import type { Dispatch, SetStateAction } from 'react'

import { createContext, useContext, 
} from 'react'

//export const CancionContext = createContext<CancionContextType | null>(null)
//
//export function useCancionContext () {
//  return useContext(CancionContext)
//}

export const CancionContext = createContext<CancionContextType | null>(null)

export function useCancionContext(): CancionContextType {
  const ctx = useContext(CancionContext)
  if (!ctx) {
    throw new Error('useCancionContext must be used within a CancionContext.Provider')
  }
  return ctx
}



export const OracionContext = createContext<OracionContextType | null>(null)

export function useOracionContext(): OracionContextType {
  const ctx = useContext(OracionContext)
  if (!ctx) {
    throw new Error('useOracionContext must be used within a OracionContext.Provider')
  }
  return ctx
}



export const AudioContext = createContext<AudioContextType | null>(null)

export function useAudioContext():AudioContextType {
  const ctx = useContext(AudioContext)
  if(!ctx) {
    throw new Error('useAudioContext must be used within a CancionContext.Provider')
  }
  return ctx
}

// contexts/ItemsContext.tsx
export function createItemsContext<T extends { nombre: string }>() {
  const Ctx = createContext<{
    items: T[]
    setItems: Dispatch<SetStateAction<T[]>>
  } | null>(null)

  function useItems(): { items: T[]; setItems: Dispatch<SetStateAction<T[]>> } {
    const ctx = useContext(Ctx)
    if (!ctx) throw new Error('useItems must be used within its provider')
    return ctx
  }

  return [Ctx.Provider, useItems] as const
}





// src/hooks/useAudioPlayer.ts
import { useEffect, useRef, useState } from 'react'

export function useAudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playingId, setPlayingId] = useState<string | null>(null)

  // Lazily create the single <audio> element
  if (audioRef.current === null && typeof Audio !== 'undefined') {
    audioRef.current = new Audio()
    audioRef.current.preload = 'none'   // don't fetch until play is pressed
  }

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const onEnded = () => setPlayingId(null)   // reset when track finishes
    audio.addEventListener('ended', onEnded)
    return () => audio.removeEventListener('ended', onEnded)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    const audio = audioRef.current
    return () => {
      audio?.pause()
      if (audio) audio.src = ''
    }
  }, [])

  const toggle = (id: string, src: string) => {
    const audio = audioRef.current
    if (!audio) return

    if (playingId === id) {
      audio.pause()
      setPlayingId(null)
      return
    }

    audio.src = src
    audio.currentTime = 0
    audio.play().then(() => setPlayingId(id)).catch(() => setPlayingId(null))
  }

  return { playingId, toggle }
}
