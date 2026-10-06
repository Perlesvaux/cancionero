
//import type { LetraProps } from '../types'
import {Mk} from './Mk'

//export function Letra({letra}:LetraProps){
//
//  return <>
//  {letra.map((estrofa, i) => (
//    <p key={i} className="estrofa">
//    {estrofa.map((linea, j) => (
//      <span key={j} className="linea">{linea}</span>
//    ))}
//    </p>
//  ))}
//  </>
//
//}


interface Props {
  letra:string
}

export function Letra({letra}:Props){

  const parrafos:string[] = letra.split('\n\n') 

  console.log(parrafos)

  
  return parrafos.map((p, index)=><Mk className="linea" key={index} body={p} />)


}


