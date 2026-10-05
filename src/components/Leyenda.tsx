import { Mk } from './Mk'
//import type { LeyendaProps } from '../types'
//
//export function Leyenda({cuerpo}:LeyendaProps){
//
//  return <>
//  {cuerpo.map((parrafo, i) => (
//    <p key={i} className="estrofa">
//      {parrafo}
//    </p>
//  ))}
//  </>
//}




interface Props {
  cuerpo:string
}

export function Leyenda({cuerpo}:Props){
  return <Mk body={cuerpo} />
}
