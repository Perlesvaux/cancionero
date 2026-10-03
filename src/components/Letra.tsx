
import type { LetraProps } from '../types'

export function Letra({letra}:LetraProps){


  return <>
  {letra.map((estrofa, i) => (
    <p key={i} className="estrofa">
    {estrofa.map((linea, j) => (
      <span key={j} className="linea">{linea}</span>
    ))}
    </p>
  ))}


  </>

}





