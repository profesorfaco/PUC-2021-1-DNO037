### Diseño y Nuevos Medios → Clase 02 → 24/03/2021

# HTML5 + CSS3 + p5.js

### Lectura

Ya pudimos reconocer la diferencia entre los lengujes de descripción y el lenguaje de programación. Para comenzar a profundizar en un lenguaje de programación aprovechamos [p5.js](https://p5js.org/es/):

> ¡**p5.js** es una biblioteca de JavaScript para la programación creativa, que busca hacer que programar sea accesible e inclusivo para artistas, diseñadores, educadores, principiantes y cualquier otra persona! **p5.js** es gratuito y de código abierto porque creemos que el software y las herramientas para aprenderlo deben ser accesibles para todos.

Esta biblioteca fue creada por [Lauren McCarthy](http://lauren-mccarthy.com/) y es desarrollada por una comunidad de colaboradores, con apoyo de [Processing Foundation](https://processingfoundation.org/) y [NYU ITP](https://forms.tisch.nyu.edu/page/s/itp-landing). Entre los colaboradores hay 2 chilenos, que se han encargado de la traducción de referencias, tutoriales y [un libro](https://processingfoundation.press/product/introduccion-a-p5-js/) al castellano; ellos son: [Guillermo Montecinos](https://twitter.com/guillermolooped) y [Aarón Montoya-Moraga](https://twitter.com/montoyamoraga).

[p5.js](https://p5js.org/es/) es una reinterpretación de [Processing](https://processing.org/) para la web. Consideremos que cuando se trabaja en Processing cada *sketch* tiene su `void setup()` y `void draw()`. Hay un `setup` que se ejecuta una única vez, en la partida. Hay un `draw` que por defecto se ejecuta una y otra vez. Ahora, cambiemos el `void` de [Java](https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)) por el `function` de [JavaScript](https://es.wikipedia.org/wiki/JavaScript), y tenemos:

```
function setup(){
  //colocas acá lo que se ejecuta una única vez
}

function draw(){
  //colocas acá lo que necesitas dibujar una y otra vez
}
```

Tal como Processing, [p5.js](https://p5js.org/es/) ofrece

> un conjunto completo de funcionalidades para dibujar. Sin embargo, no estás limitado solo a dibujar en tu lienzo. Puedes tomar toda la página del navegador como tu bosquejo, incluyendo los objetos HTML5 para texto, entrada, video, cámara web y sonido.

Aquí conviene agregar una nota sobre el [Modelo de Objeto de Documento (DOM)](https://developer.mozilla.org/es/docs/DOM): **A través del DOM, los programas escritos en JavaScript pueden acceder y modificar el contenido, estructura y estilo de la representación de la página web**.

Con el DOM podemos manipular una página así como cuando manipulamos una imagen con Photoshop. Si capturaste una imagen con 3 elementos y agregas un cuarto *photoshopénadolo*, en ningún caso modificas la realidad capturada, pero todos podrán ver una imagen con 4 elementos. 

Estirando la analogía: Podríamos encontrar inconcruencias en los despliegue de (1) código fuente de la página y (2) elementos de la página. Esto es así porque en el código fuente de la página está lo capturado originalmente, mientras que en la vista de elementos de la misma página está lo *photoshopeado*, y esto último coincide con lo que tenemos a la vista.

- - - - - - - - - - - - -

### Exploración

Es muy necesario saber como **ver código fuente**, [inspeccionar elementos](https://support.hostinger.es/es/articles/2333029-como-inspeccionar-los-elementos-del-sitio-web) y [abrir consola](https://transferwise.com/es/help/articles/2954851/como-abrir-la-consola-de-tu-navegador) en Chrome o Firefox.

También es necesario contar con un editor de código fuente, en donde podemos crear un documento nuevo, pegar el código que sigue y guardarlo con el nombre `ejemplo.html`:

```
<!doctype html>
<html lang="es">
    <head>
        <title>Esto es un ejemplo</title>
        <script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.min.js"></script>
        <script>
            function setup() {
                createCanvas(windowWidth - 40, windowHeight - 40).position(20, 20);
            }
            function draw() {
                background(0);
            }
        </script>
    </head>
    <body></body>
</html>

```

Podemos abrir este `ejemplo.html` en Chrome o Firefox. En la ventana del navegador podemos ver una página web con un recuadro negro. Si vamos a inspeccionar los elementos notaremos que ese recuadro negro es un elemento `<canvas></canvas>` dentro del elemento `<main></main>` que está, a su vez, dentro del elemento `<body></body>`. Pero en el código fuente hay un `<body></body>` vacío. Esta diferencia se debe al DOM.


- - - - - - - - - - - - - - 

### Práctica

Para familiarizanos con el trabajo con el DOM, desarrollaremos un ejercicio para el que conviene:

- revisar el [método `querySelector`](https://developer.mozilla.org/es/docs/Web/API/Element/querySelector);

- revisar el [constructor `Date()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date);

- revisar la [propiedad `Element.classList`](https://developer.mozilla.org/es/docs/Web/API/Element/classList); y

- tener a mano la [página de referencias de **p5.js**](https://p5js.org/es/reference/)

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), una versión ajustada del sitio web que está contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2021/clase-02/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-01) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-03)

