import type { LeyendaProps } from '../types'

export function Leyenda({cuerpo}:LeyendaProps){

  return <>
  {cuerpo.map((parrafo, i) => (
    <p key={i} className="estrofa">
      {parrafo}
    </p>
  ))}
  </>
}

