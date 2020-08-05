# Data Lovers


## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.


##  El proyecto

para comenzar con este proyecto analizamos que tipo de personas veian la serie, creamos 3 tipos de perfiles; cada uno con sus propias caracteristicas de estos usuarios, junto con cosas en comun entre los perfiles y que tipo de informacion les gustaria encontrar en esta pagina. 


  ![alt tag](https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Usuarios.jpg)

  Al tener estos perfiles claros, junto con sus gustos e intereses fue mas facil desarrollar cada historia de usuario, definimos que informacion debia tener la pagina y dividimos cada esto en criterios de aceptacion dentro de las historias de usuarios. El total de Historias fue de 6, cada una con sus tareas fijas. Comenzaba con :
      "Yo como persona sin conexión a la serie de Rick and Morty quiero una sinopsis (max 10 renglones) para saber sobre que trata la serie para decidir si la veo o no" 

  en el que nos enfocamos en crear toda la parte de responsive de la pagina. Y pasando luego por:
      "Como usuario nuevo quiero poder listar los personajes ver su nombre, para entenderla mejor"
      "Yo como usuario frecuente quiero saber mas información acerca de los personajes, datos mas específicos que me permitan ubicarme y entender un poco mas a fondo sobre ellos"
      "Yo como usuario apasionado quiero ( listado y otra en detalle y si queremos filtros) conocer los mundos que existen en la serie y quienes los habitan para hacer mi propio análisis del universo."
      "Como usuario recurrente quiero conocer los episodios por temporadas para tener claro cuando pasaron ciertos sucesos que son relevantes"
      "Yo como seguidor de la serie quiero tener una señal que me indique el estado de vida de personaje durante la serie para estar al día."


  Con esto pudimos comenzar el primer sketch del proyecto, en este definimos el arbol de navegacion de la pagina //cuantas ventanas tendriamos // y como mostrariamos la informacion: 
  ![alt tag](https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%201.jpg)

  Al tener este completo pasamos a nuestra version de alta fidelidad del proyecto a crear. Definimos cada pagina, el contenido, las imagenes y la estetica exacta del proyecto, junto con la navegacion del usuario dentro de la misma. 

<img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/sketch%20Ai%201.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%202.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%203.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%204.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%205.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20%20Ai%2006.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%206.png" width="250" title="hover text"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/Sketch%20Ai%207.png" width="250" title="hover text">


Al tener esta guia clara, comenzamos con el dise;o de la pagina, para esto era vital el entender de que datos estaba compuesta toda la Data entregada, como estaba estructura y como debiamos acceder a la misma. Por consiguiente, empleamos distintas funciones que nos entregaran la informacion requerida dentro de las historias. Manejamos funciones independientes e hicimos un manejo dinamico del DOM para poder actualizar constantemente la pagina de la informacion requerida. Trabajamos en el dise;o responsive de la pagina y en mantener la estetica lo mas similar a nuestro sketch. 

Para poder finalizar con este trabajo de esta de la siguiente manera: 

***IMAGENES FINALES DE LA PAGINA!***

<img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/IndexF.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/PF.png" width="250">
<img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/PF1.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/PF2.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/W.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/W1.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/EP.png" width="250"><img src="https://github.com/ApuntaDePuntos/BOG001-data-lovers/blob/master/ImagenesREADme/EP%201.png" width="250">


### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [+-] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [+-] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [+-] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [+-] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [+-] Colaboración en Github (branches | pull requests | |tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.




