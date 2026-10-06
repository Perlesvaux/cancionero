import {Mk} from './Mk'

interface Props {
  letra:string
}

export function Letra({letra}:Props){

  const parrafos:string[] = letra.split('\n\n') 
  
  return parrafos.map((p, index)=>
    <Mk 
      className="letra" 
      key={index} 
      body={p} 
    />)
}


