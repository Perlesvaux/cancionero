import enfermo from '../oraciones_para_enfermos/por_un_enfermo'
import espiga from '../canciones/una_espiga'
import consuelo from '../canciones/oh_maria_madre_mia'


import type {Lectura} from '../../types'
export default {
  nombre:"Visita - Modelo",
  cuerpo:`
### I. Inicio

> «En el nombre del Padre, del Hijo y del Espíritu Santo. Amén.»

> «Yo confieso ante Dios todopoderoso y ante ustedes, hermanos…».

> «Señor Jesús, que eres nuestra fortaleza y nuestro alivio, visita a nuestro hermano [nombre]. Fortalécelo con tu presencia amorosa y concédele alivio, fortaleza y consuelo.»


### II. Canto

<button popovertarget="consuelo">Se entona un canto.</button>


### III. Liturgia de la Palabra

Leer y comentar uno de estos textos:

- <button popovertarget="mateo11">Mateo 11, 28-30.</button>
- <button popovertarget="hechos3">Hechos 3, 1-9.</button>
- <button popovertarget="hechos10">Hechos 10, 38.</button>
- <button popovertarget="isaias53">Isaias 53, 4-5.</button>

### IV. Oración

<button popovertarget="enfermo">Se reza una oración</button>

### V. Comunión

> «Padre nuestro ... » 
>
> «Ave María ... » 
>
> «Gloria ... » 

Mostrar la Sagrada Hostia y decir:

> «Este es el Cordero de Dios que quita el pecado del mundo. Dichosos los invitados a la cena del Señor».

Todos responden:

> «Señor, no soy digno de que entres en mi casa, pero una palabra tuya bastará para sanarme».

Administrar la Comunión diciendo:

> «El Cuerpo de Cristo». Amén.



<button popovertarget="una-espiga">Se entona un canto</button> de despedida.



<div id="mateo11" popover>

## [Mateo 11, 28-30](materialknight.github.io/doctrina-catolica/biblia-straubinger/mateo#c11-v28)

En aquel tiempo Jesús dijo: «Vengan a mí todos los que andan fatigados y agobiados, y yo les daré alivio. Tomen mi yugo sobre ustedes y aprendan de mí, que soy manso y humilde de corazón, y encontrarán descanso, porque mi yugo es suave y mi carga ligera». (Mt 11, 28 . 30) 

</div>


<div id="hechos3" popover>

## [Hechos 3, 1-9](https://materialknight.github.io/doctrina-catolica/biblia-straubinger/hechos#curaci%C3%B3n-de-un-tullido-de-nacimiento)

Una vez, cuando Pedro y Juan subían al Templo para la oración de la hora nona, sucedió que había un hombre tullido desde su nacimiento, y que solían poner todos los días cerca de la entrada del templo…Cuando este hombre vio a Pedro ya Juan en su camino hacia el Templo les pidió una limosna.

Entonces lo tomó de la mano derecha y le ayudó a ponerse de pie. Al instante sus pies y tobillos se pusieron firmes, se levantó de un salto, se levantó y empezó a caminar, y entró con ellos en el templo, andando, y saltando, y alabando a Dios.

</div>

<div id="hechos10" popover>

## [Hechos 10, 38](https://materialknight.github.io/doctrina-catolica/biblia-straubinger/hechos#c10-v38)

A Jesús de Nazaret, Dios le ungió con el Espíritu Santo y con poder. Él anduvo haciendo el bien y sanando a todos los enfermos y oprimidos, porque Dios estaba con él (Hech 10, 38) 
</div>


<div id="isaias53" popover>

## [Isaias 53, 4-5](https://materialknight.github.io/doctrina-catolica/biblia-straubinger/isaias#c53-v4)

Él, en verdad, ha tomado sobre sí nuestras dolencias, ha cargado con nuestros dolores, y nosotros le reputamos como castigado, como herido por Dios y humillado.

Fue traspasado por nuestros pecados, quebrantado por nuestras culpas; el castigo, causa de nuestra paz, cayó sobre él, y a través de sus llagas hemos sido curados.

</div>








<div id="una-espiga" class="canciones" popover>

## **[${espiga.nombre}](/#una-espiga)**

${espiga.resumen}

</div>





<div id="consuelo" class="canciones" popover>

## **[${consuelo.nombre}](/#oh-maria-madre-mia)**

  ${consuelo.resumen}

</div>




<div id="enfermo" popover>

## **[Por un enfermo](/oraciones_para_enfermos#por-un-enfermo)**

  ${enfermo.cuerpo}

</div>



  `  

} satisfies Lectura

