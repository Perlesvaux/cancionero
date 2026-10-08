import { MinimalMk } from './MinimalMk'

interface Props {
  letra:string
}

export function Letra({letra}:Props){

  const estrofas:string[] = letra.split('\n\n') 



  return estrofas.map((stanza, index)=>
                      <p key={index}>{stanza.split('\n').map((line, i)=> 
                             <MinimalMk key={i} className="linea" body={line} />
                             )}</p>


                      )
  
}


  //return parrafos.map((p, index)=>
  //  <MinimalMk 
  //    className="letra" 
  //    key={index} 
  //    body={p} 
  //  />)
