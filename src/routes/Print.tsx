//import {Portada} from '../components'
//import {ContraPortada} from '../components'
import {oraciones, canciones, lecturas} from '../constants'
import {
  CancionProvider, OracionProvider, 
  ListaDeCanciones, ListaDeOraciones, ListaDeLecturas,
  Indice} from '../components'

  export function Print (){
    return <>
    <CancionProvider initial={canciones}>
      <OracionProvider initial={oraciones}>
        <Indice items={canciones} title="Canciones" />
        <Indice items={oraciones} title="Oraciones"   listStyleType="upper-roman" />
        <Indice items={lecturas}  title="Lecturas"   listStyleType="upper-alpha" />
        < PageBreak />
        <ListaDeCanciones />
        < PageBreak />
        <ListaDeOraciones />

        <div className="smaller">
          <ListaDeLecturas items={lecturas}/>
        </div>

      </OracionProvider>
    </CancionProvider>
    </>
  }

    //<ContraPortada />
    //<Portada />


export function PageBreak() {
  return <div className="page-break" />;
}
