//import {Portada} from '../components'
//import {ContraPortada} from '../components'
import {canciones, lecturas, oraciones_para_enfermos} from '../constants'
import {
  CancionProvider, 
  ListaDeCanciones, ListaDeLecturas,
  Indice} from '../components'

  //listStyleType="upper-roman"
  //listStyleType="upper-alpha"

  export function Print (){
    return <>
    <CancionProvider initial={canciones}>

      <div className="red-hue">
        <Indice items={canciones} title="Canciones" />
      </div>

      <div className="green-hue">
        <Indice items={oraciones_para_enfermos} title="Oraciones"  />
      </div>

      <div className="blue-hue">
        <Indice items={lecturas}  title="Lecturas"  />
      </div>

      < PageBreak />

      <ListaDeCanciones />

      < PageBreak />

      <div className="green-hue">
        <ListaDeLecturas items={oraciones_para_enfermos} />
      </div>

      <div className="printed-lectures blue-hue">
        <ListaDeLecturas items={lecturas}/>
      </div>

    </CancionProvider>
    </>
  }

    //<ContraPortada />
    //<Portada />


export function PageBreak() {
  return <div className="page-break" />;
}

  //export function Print (){
  //  return <>
  //  <CancionProvider initial={canciones}>
  //    <OracionProvider initial={oraciones}>
  //      <Indice items={canciones} title="Canciones" />
  //      <Indice items={oraciones} title="Oraciones"   listStyleType="upper-roman" />
  //      <Indice items={lecturas}  title="Lecturas"   listStyleType="upper-alpha" />
  //      < PageBreak />
  //      <ListaDeCanciones />
  //      < PageBreak />
  //      <ListaDeOraciones />
  //
  //      <div className="smaller">
  //        <ListaDeLecturas items={lecturas}/>
  //      </div>
  //
  //    </OracionProvider>
  //  </CancionProvider>
  //  </>
  //}
