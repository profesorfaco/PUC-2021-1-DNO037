# Diseño y Nuevos Medios v14

### Clase 02 → 24/03/2021

### HTML5 + CSS3 + p5.js

- - - - - - - - - - - - - - 

Ya pudimos reconocer la diferencia entre los lengujes de descripción y el lenguaje de programación; para comenzar a profundizar en un lenguaje de programación, estamos usando [p5.js](https://p5js.org/es/):

> ¡**p5.js** es una biblioteca de JavaScript para la programación creativa, que busca hacer que programar sea accesible e inclusivo para artistas, diseñadores, educadores, principiantes y cualquier otra persona! **p5.js** es gratuito y de código abierto porque creemos que el software y las herramientas para aprenderlo deben ser accesibles para todos.

Esta biblioteca fue creada por [Lauren McCarthy](http://lauren-mccarthy.com/) y es desarrollada por una comunidad de colaboradores, con apoyo de [Processing Foundation](https://processingfoundation.org/) y [NYU ITP](https://forms.tisch.nyu.edu/page/s/itp-landing). Entre los colaboradores hay 2 chilenos, que se han encargado de la traducción de referencias, tutoriales y [un libro](https://processingfoundation.press/product/introduccion-a-p5-js/) al castellano; ellos son: [Guillermo Montecinos](https://twitter.com/guillermolooped) y [Aarón Montoya-Moraga](https://twitter.com/montoyamoraga).

Si sabes algo de [Processing](https://processing.org/), las estructuras básicas en [p5.js](https://p5js.org/es/) te resultarán familiares. Hay 2 partes. Una que se ejecuta una única vez, al inicio, y otra que se ejecuta una y otra vez, para dibujar lo que se defina a través de [las funciones predefinidas de esta biblioteca de JavaScript](https://p5js.org/es/reference/):

```
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

Conviene agregar una nota sobre el [Modelo de Objeto de Documento (DOM)](https://developer.mozilla.org/es/docs/DOM): **A través del DOM, los programas escritos en JavaScript pueden acceder y modificar el contenido, estructura y estilo de la representación de la página web**.

Con el DOM puedes manipular una página así como cuando cambias una imagen con Photoshop. Si capturaste una imagen con 3 elementos y agregas un cuarto *photoshopénadolo*, en ningún caso modificas la realidad capturada, pero todos podrán ver una imagen con 4 elementos. 

Estirando la analogía: Podríamos encontrar inconcruencias en los despliegue de (1) código fuente de la página y (2) elementos de la página en la consola del navegador. Esto es así porque en el código fuente veremos lo capturado, mientras que en la consola veremos lo *photoshopeado*.

Por esto podemos crear el `<canvas></canvas>` con [p5.js](https://p5js.org/es/reference/#/p5/createCanvas), y aprovechar 

> un conjunto completo de funcionalidades para dibujar. Sin embargo, no estás limitado solo a dibujar en tu lienzo. Puedes tomar toda la página del navegador como tu bosquejo, incluyendo los objetos HTML5 para texto, entrada, video, cámara web y sonido.

- - - - - - - - - - - - - - 

#### Ejercicio

Cada estudiante debe publicar, con GitHub Pages, su versión para el sitio web contenido en esta carpeta de repositorio, que puede descargar como *realease* Clase-02.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-01) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-03)

