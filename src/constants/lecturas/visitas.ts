import pasajes from '../lecturas/textos_biblicos.ts'
import type {Lectura} from '../../types'

export default {
  nombre:"Visita - Estructura",
  cuerpo:`
### Qué llevar

- Crucifijo, preferiblemente con base.
- Mantelito blanco.
- Vela, y fósforos o encendedor.
- Biblia o lecturas de este manual.
- Puedes llevar algún presente si quieres (fruta, pan, etc.).
- Píxide con el Santísimo (si se ha de dar la comunión.)

### Al llegar

- Saludar cariñosamente al enfermo y a su familia. Si es la primera visita, presentarse como enviados de la Parroquia.
- Invitar a los familiares a reunirse para orar con y por el enfermo. Si rechazan la invitación, solicitarles amablemente no hacer ruido.
- Conversar con el enfermo. *Sobre todo, escucharlo.*
- Preparar el espacio para la oración: colocar el mantelito, el crucifijo y la vela.

### Momento de oración



1. Comenzar con la [Señal de la Cruz](/oraciones#senal-de-la-cruz) y el acto de contrición. 
2. Leer y reflexionar algún pasaje de la <button popovertarget="pasajes">selección</button> de textos bíblicos. 
3. Entonar un [canto del manual](/).
4. Hacer una [oración del manual](/oraciones_para_enfermos).
5. Administrar la comunión

Terminar con una oración espontánea por el enfermo y su familia.

Antes de despedirse, si resulta oportuno, pedir al enfermo que persigne al visitador.


### Indicaciones importantes

- Si el enfermo o su familia desean confesarse o hablar con el Padre, proporcionarles el contacto del P. Cacho.
- Recuerda anotar los datos de la visita en las hojas de control.

**Para el visitador:** Leer las páginas 48 y 49 del folleto *Visitadores de Enfermos*.

<div id="pasajes" popover>

${pasajes.cuerpo}

</div>
 `
} satisfies Lectura




//1. **No seguir el esquema como una fórmula rígida.** Adaptar la visita a las fuerzas del enfermo y a las circunstancias de su familia. Se pueden omitir partes y simplificar la oración.
//2. **Escuchar antes que hablar.** La visita no consiste solamente en rezar: también consiste en acompañar.
//3. **Elegir bien las lecturas y los cantos.** Tener en cuenta la situación del enfermo y cuáles conoce.
