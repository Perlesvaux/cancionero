//import {Portada} from '../components'
//import {ContraPortada} from '../components'
import {canciones, lecturas, oraciones_para_enfermos} from '../constants'
import {
  CancionProvider, 
  ListaDeCanciones, ListaDeLecturas,
  Indice} from '../components'

  export function Print (){
    return <>
    <CancionProvider initial={canciones}>
        <Indice items={canciones} title="Canciones" />
        <Indice items={oraciones_para_enfermos} title="Oraciones"   listStyleType="upper-roman" />
        <Indice items={lecturas}  title="Lecturas"   listStyleType="upper-alpha" />
        < PageBreak />
        <ListaDeCanciones />
        < PageBreak />
        <ListaDeLecturas items={oraciones_para_enfermos} />

        <div className="smaller">
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
