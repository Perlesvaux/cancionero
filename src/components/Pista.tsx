// components/CancionRow.tsx
import { useCancionContext } from '../hooks'

export function Pista({ nombre }: { nombre: string }) {
  const { player } = useCancionContext()
  const isPlaying = player.playingId === nombre

  return (
    <div>
      <button
        onClick={() => player.toggle(nombre, `/${nombre}.opus`)}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? `Detener ${nombre}` : `Reproducir ${nombre}`}
      >
        {isPlaying ? '⏸' : '▶'}
      </button>
      <h3>{nombre}</h3>
    </div>
  )
}
