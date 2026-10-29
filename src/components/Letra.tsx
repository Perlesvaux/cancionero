//import { MinimalMk } from './MinimalMk'
import { Mk } from './Mk'

interface Props {
  letra:string
}

export function Letra({letra}:Props){


  return <Mk body={letra} />

  //return parrafos.map((p, index)=>
  //  <MinimalMk 
  //    className="letra" 
  //    key={index} 
  //    body={p} 
  //  />)


  //const estrofas:string[] = letra.split('\n\n') 
  //
  //
  //
  //return estrofas.map((stanza, index)=>
  //                    <p key={index}>{stanza.split('\n').map((line, i)=> 
  //                           <MinimalMk key={i} className="linea" body={line} />
  //                           )}</p>
  //
  //
  //                    )
  
}


  //return parrafos.map((p, index)=>
  //  <MinimalMk 
  //    className="letra" 
  //    key={index} 
  //    body={p} 
  //  />)
