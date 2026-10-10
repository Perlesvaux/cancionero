// components/CancionRow.tsx
import { useAudioContext } from '../hooks'

export function Pista({ nombre }: { nombre: string }) {
  const { player } = useAudioContext()
  const isPlaying = player.playingId === nombre

  return (
      <button
        onClick={() => player.toggle(nombre, `/${nombre}.opus`)}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `Detener ${nombre}` : `Reproducir ${nombre}`}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
  )
}
