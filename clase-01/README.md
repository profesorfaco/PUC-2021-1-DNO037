### Diseño y Nuevos Medios → Clase 01 → 17/03/2021

# HTML5 + CSS3 + p5.js

### Lectura

Escribir código fuente es describir y/o programar. 

Para reconocer los lenguajes de descripción y programación que son claves para el desarollo de sitios web profesionales o prototipos avanzados de aplicaciones web, trabajaremos con un editor de código fuente. Puede ser [Atom.io](https://atom.io/) o [Sublime Text](https://www.sublimetext.com/).

El editor de código fuente nos dará indicaciones para poder escribir código fuente con:

- **HTML (HyperText Markup Language)**. Lenguaje estándar que describe la estructura de las páginas web (qué es lo que contiene la página). HTML5 es la versión más reciente de este lenguaje. El bloque constructivo más básico del HTML es el elemento. Cada elemento de HTML se escribe, generalmente, entre etiquetas: `<etiqueta>contenido</etiqueta>` → Podemos complementar esta breve introducción a HTML con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics

- **CSS (Cascading Style Sheets)**. Lenguaje estándar que describe la presentación de las páginas web (cómo se muestra lo que contiene la página). CSS3 es la versión más reciente de este lenguaje. Su unidad más básica es la regla. Cada regla se inicia con un selector, seguido de paréntesis de llave `{…}`. Tal paréntesis contiene un bloque de declaraciones. En tal bloque, cada declaración se separa de otra mediante punto y coma `;`. Una declaración se compone del par `propiedad: valor`. Con todo lo dicho, una regla se escribirá, generalmente, de la siguiente manera: `selector{ propiedad: valor; }`  →  Podemos complementar esta breve introducción a CSS con una revisión de la página: https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/CSS_basics (no es necesario realizar el ejercicio que allí se propone).

- **JS (JavaScript)**. Lenguaje de programación que controla el comportamiento de las páginas web (qué hace la página). Con JS se pueden escribir secuencias de instrucciones con las que una computadora realizará una tarea determinada. Su estructura puede variar dependiendo de la lógica de cada instrucción, la [versión](https://www.w3schools.com/js/js_versions.asp) en uso, la *library* en la que nos apoyemos, o el *framework* de programación en el que se basa el trabajo; podemos imaginar que una *library* como una selección de ingredientes listos para poder preparar determinado tipo de comida, mientras que el *framework* te permite preparar un banquete si es que ya tienes suficiente experiencia en la cocina → Podemos complementar esta breve introducción a JS con una vistazo a este video: https://youtu.be/ZCSyjKAD-lY (para no confundir la función principal de JS con la de CSS, recomendaría pensar el "Que se vea bonito" del video como un "Que se vea simpático, que pasen cosas, que haya movimientos, transiciones, ajustes, respuestas… interacción").

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

Esta variable es utilizada para realizar una tarea simplificada con [p5.js](https://p5js.org/es/get-started/), una bibliteca de JS. Para comprender tal simplificación, conviene hacer un paréntesis para:

- aprovechar [el **p5.js** Web Editor](https://editor.p5js.org/profesorfaco/sketches/wBvBZ1V6n);

- revisar [la página de referencias de **p5.js**](https://p5js.org/es/reference/); y

- revisar [la propiedad length](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/length).

Una vez cerremos el paréntesis podremos volver a la página [index.html](https://github.com/profesorfaco/dno037-2021/blob/main/clase-01/index.html) para resolver el ejercicio de la clase de hoy.

- - - - - - - - - - - - - - 

### Práctica

Corresponde ajustar el sitio web contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2021/clase-01/), según indicaciones que se compartan en la clase vía Zoom. 

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

Podrán revisar el registro de los puntos obtenidos en [carpeta Drive del curso](https://drive.google.com/drive/folders/1MhBnA7gJtoxwTkYibXcP1gCyWmMKGr3k?usp=sharing). Podrán revisar todos los ejercicios aprovechando los vínculos en la siguiente tabla. Para ser incluida/o en la tabla, debe compartir las URLs correspondientes antes de las 23.59 hrs. del miércoles 17 de marzo. 

| Nº   | Estudiante      | GitHub    | Ejercicio clase-01 |
|:----:|:----------------|:----------|:-------------------|
| 1    | DIEGO BARRIENTOS | — | — |
| 2    | MARTÍN BENNETT | https://github.com/bennett-martin/ | https://bennett-martin.github.io/dnom-clase1-17-03/ |
| 3    | RODRIGO CAMPUSANO | https://github.com/rodrigocampusano | https://rodrigocampusano.github.io/Clase1/ |
| 4    | PALOMA CARRASCO | https://github.com/palomacarrasco | https://palomacarrasco.github.io/dno037-clase-1/ |
| 5    | SOFIA CAVALLINI | https://github.com/sofiacavallinii | https://sofiacavallinii.github.io/dno037clase-1/ |
| 6    | VICENTE ESPINOSA | https://github.com/vtespinosa | https://vtespinosa.github.io/diseno/clase-01/ |
| 7    | FELIPE FUENTEALBA | https://github.com/leocto | https://leocto.github.io/Nuevos_Medios_Clase_1/ |
| 8    | VERÓNICA GATICA | https://github.com/verogatica | https://verogatica.github.io/1_clase_dno037/ |
| 9    | MIRKO GONZÁLEZ | https://github.com/mirkogonzalez | https://mirkogonzalez.github.io/clase.01_dno/ |
| 10   | RODRIGO GUZMÁN | https://github.com/rodrigo-bot | https://rodrigo-bot.github.io/dno037-clase01/ |
| 11   | VALENTINA HERRERA | https://github.com/vale-herrera | https://vale-herrera.github.io/dno037-clase-1/ |
| 12   | BETINA HIP | https://github.com/bbhip | https://bbhip.github.io/dno-nuevos-medios/ |
| 13   | MARÍA HONORATO | https://github.com/elisahonorato | https://elisahonorato.github.io/clase_01/ |
| 14   | MARÍA IBÁÑEZ | https://github.com/franibanezm | https://franibanezm.github.io/Clase_01/ |
| 15   | NICOLE LUNA | — | — |
| 16   | MARGARITA MATTE | https://github.com/mar-garita1 | https://mar-garita1.github.io/clase-01/ |
| 17   | CONSTANZA MONTERO | https://github.com/cpmontero | https://cpmontero.github.io/dno_nuevosmedios_clase1/ |
| 18   | VALENTINA MORALES | https://github.com/lunalaffx | https://lunalaffx.github.io/DNO037-clase1/ |
| 19   | DANIELA ORELLANA | https://github.com/dacorellana | https://dacorellana.github.io/dno-medios-clase-01/ |
| 20   | FRANCISCA PARRA | https://github.com/frnparr | https://frnparr.github.io/dno_clase1/ |
| 21   | YAHAIRA PEREZ | https://github.com/yahairaperez | https://yahairaperez.github.io/Ejercicio-clase-01/ |
| 22   | JAVIER RAMÍREZ | https://github.com/rama2432 | https://rama2432.github.io/DNO-clase1/ |
| 23   | MARIO REINIKE | https://github.com/marioreinike | https://marioreinike.github.io/dno037-clase-01/ |
| 24   | VALENTINA REY | https://github.com/valentinarey | https://valentinarey.github.io/DNO037_Clase_1/ |
| 25   | JAVIERA ROBLES | — | — |
| 26   | MIRANDA SEPULVEDA | https://github.com/mirandasepulveda-la | https://mirandasepulveda-la.github.io/actividad_clase_1/ |
| 27   | JOSEFINA TORO | https://github.com/josefinatoro | https://josefinatoro.github.io/dno_nuevos_medios_clase17-03/ |
| 28   | ROSARIO TORRES | https://github.com/rosipilipi | https://rosipilipi.github.io/dno-clase-01/ |
| 29   | BIANCA VALLADARES | https://github.com/bivall | https://bivall.github.io/dno037-clase-1/ |
| 30   | MARGARITA VIAL | https://github.com/margaraitavialm | https://margaraitavialm.github.io/dno037-clase-1/ |
| 31   | IGNACIA VIZCAYA | https://github.com/ignaviz | https://ignaviz.github.io/dno037-clase-01/ |

- - - - - - - 

###### [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-02)
