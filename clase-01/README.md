### Diseño y Nuevos Medios → Clase 01 → 17/03/2021

# HTML5 + CSS3 + p5.js

### Lectura

Escribir código fuente es describir y/o programar. 

Para reconocer los lenguajes de descripción y programación que son claves para el desarollo de sitios web profesionales o prototipos avanzados de aplicaciones web, trabajaremos con un editor de código fuente. Puede ser [Atom.io](https://atom.io/) o [Sublime Text](https://www.sublimetext.com/).

El editor de código fuente nos dará indicaciones para poder escribir código fuente con:

- **HTML (HyperText Markup Language)**. Lenguaje estándar que describe la estructura de las páginas web. HTML5 es la versión más reciente de este lenguaje. El bloque constructivo más básico del HTML es el elemento. Cada elemento de HTML se escribe, generalmente, entre etiquetas: `<etiqueta>contenido</etiqueta>`. Podemos complementar esta breve introducción a HTML con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

- **CSS (Cascading Style Sheets)**. Lenguaje estándar que describe la presentación de las páginas web. CSS3 es la versión más reciente de este lenguaje. Su unidad más básica es la regla. Cada regla se inicia con un selector, seguido de paréntesis de llave `{…}`. Tal paréntesis contiene un bloque de declaraciones. En tal bloque, cada declaración se separa de otra mediante punto y coma `;`. Una declaración se compone del par `propiedad: valor`. Con todo lo dicho, una regla se escribirá, generalmente, de la siguiente manera: `selector{ propiedad: valor; }`. Podemos complementar esta breve introducción a CSS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics (no es necesario realizar el ejercicio que allí se propone).

- **JS (JavaScript)**. Lenguaje de programación que controla el comportamiento de las páginas web. Con JS se pueden escribir secuencias de instrucciones con las que una computadora realizará una tarea determinada. Su estructura puede variar un poco, dependiendo de la lógica de cada instrucción y la biblioteca de programación que estemos aprovechando. La bibliteca que utilizaremos primero será [p5.js](https://p5js.org/es/get-started/); podemos imaginar que una biblioteca de programación es como una selección de ingredientes listos para poder preparar determinado tipo de comida sin necesidad de ser cocinero experto. Podemos complementar esta breve introducción a JS con una revisión de la página: https://jsparagatos.com/ (pueden leer hasta el subtítulo *Funciones del lenguaje*).

- - - - - - - - - - - - - - 

### Exploración

Para reconocer los lenguajes mencionados más arriba, podemos aprovechar los documentos contenidos en esta carpeta, comenzando con la página [index.html](https://github.com/profesorfaco/dno037-2021/blob/main/clase-01/index.html):

Allí podemos ver la estructura típica de toda página HTML: 

```
<!DOCTYPE html>
<html lang="es">
    <head>…</head>
    <body>…</body>
</html>
```

Dentro de la cabeza (`<head></head>`), podemos ver un vínculo a un [style.css](https://github.com/profesorfaco/dno037-2021/blob/main/clase-01/style.css) que revisaremos luego:

```
<link href="style.css" rel="stylesheet" />
```

En las líneas finales del `index.html`, dentro de unas etiquetas de script (`<script></script>`), podemos ver una variable de JavaScript; esta variable se llama `palabras` y contiene un arreglo con 8 cadenas de caracteres entre comillas. 

```
var palabras = ["siguiente", "repüyen", "seguente", "suivant", "next", "Nächster", "次の", "다음의"];
```

Cada cadena de caracteres, contenida entre comillas, tiene una posición dentro del arreglo. Las posiciones se identifican con un número, partiendo a la izquierda con el 0. Considerando lo recién dicho, `palabras[0]` refiere a `siguiente` y `palabras[7]` refiere a `다음의` 

Para comprender de mejor manera lo recién expuesto, conviene hacer un paréntesis para:

- aprovechar [p5.js Web Editor](https://editor.p5js.org/profesorfaco/sketches/wBvBZ1V6n);
 
- revisar [la propiedad length](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length); y

- tener a mano la [página de referencias de **p5.js**](https://p5js.org/es/reference/)

Una vez cerremos el paréntesis podremos volver a la página [index.html](https://github.com/profesorfaco/dno037-2021/blob/main/clase-01/index.html) para resolver el ejercicio de la clase de hoy.

- - - - - - - - - - - - - - 

### Práctica

Corresponde ajustar el sitio web contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2021/clase-01/), según indicaciones que se compartan en la clase vía Zoom. 

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-02)
