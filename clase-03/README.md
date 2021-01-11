# Diseño y Nuevos Medios v14

### Clase 03 → 31/03/2021

#### HTML5 + CSS3 + p5.js

Para sacar más provecho a la programación, convien tener completa claridad sobre el tipos de datos con el que se puede operar.

Si compartiera el número 18261884, sin contexto alguno, resultaría inútil. Pero sería distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Entendiendo cómo funciona una tabla, tú cuentas con una clara orientación para la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con su superficie. Si dividimos el primer dato por el segundo, obtenemos la densidad de la población en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde apuntar:

- **18261884** es un número entero, un `int` (del inglés *integer*).

- **24,15267252** es un número de coma flotante, un `float` (del inglés *floating point number*; y no se olviden de esta diferencia, lo que para nosotros es coma, *for them* es punto, y el *coding* se hace en *english*).

A estos dos tipos de datos numéricos, podemos agregar: 

- **true** o **false** como las dos opciones posibles de un [tipo de dato lógico](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico) (bool: *boolean*)

- **"A"** como un carácter (char: *character*)

Podrás notar que en el tipo de dato numérico y booleano no utilicé comillas, pero en el caso del caracter sí las usé. 

Menciono `int`, `bool`, `char` y `float` porque son palabras reservadas en lenguajes de programación clásicos para **declarar que una variable que almacenará cierto tipo de dato**. 

#### Datos en JavaScript

**En JavaScript las variables se pueden crear con una única palabra reservada,`var`**. Y digo que se **pueden** crear con `var` porque no necesariamente se deben crear con `var`. Para entender la diferencia, favor consulten el artículo [Var, let y const. ¿Donde, cuando y por qué?](https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b).

Lo importante es que en JavaScript no se debe cambiar la palabra reservada para decir algo respecto del tipo de dato que contendrá la variable (como sí se hace en el lenguaje Java, que es la base de Processing). O sea, en JavaScript y en sus bibliotecas hacemos esto:

```
var a = 18261884;

var b = 24,15267252;

var c = false;

var d = "Marge in Chains";

var e = ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"];

var f = {mom:"Luann Van Houten", dad:"Kirk Van Houten", children:"Milhouse Van Houten"};

var g = {mom:"Marge Simpson", dad:"Homer Simpson", children:["Bart Simpson", "Lisa Simpson", "Maggie Simpson"]};

var h = [
  {mom:"Luann", dad:"Kirk", children:["Milhouse"]}, 
  {mom:"Marge", dad:"Homer", children:["Bart", "Lisa", "Maggie"]},
  {mom: "Manjula", dad: "Apu", children:["Poonam","Sashi","Pria","Uma","Anoop","Sandeep","Nabendu","Gheet"]}
];

```

**Lo que cambia viene después del signo igual `=`, que en este caso está asignando valor a cada variable.** 

Las variables `a`, `b` y `c` no requieren comillas. La variable `d`, que contiene una cadena de caracteres (*string*) sí usa comillas. 

La variable `e`, que contiene un arreglo, usa paréntesis cuadrado y cada elemento, por tratarse de un *string*, usa comillas (si fuesen números o booleanos no las usarían). 

La variable `f` que contiene un objeto, usa paréntesis de llave que en su interior contiene pares de nombre:valor. 

Las variables `g` y `h` son mezclas de las anteriores; la variable `g` ofrece un par de nombre `children` cuyo valor es un arreglo. Mientras que la variable `h` es un arreglo de tres objetos `[{…},{…},{…}]`.

Si necesito el valor de las variables `a`, `b`, `c` o `d`, basta pedirlas dirtamente; o sea, ustedes dicen `a` y ya tienen 18261884. Pero el caso es distinto si necesito un valor específico dentro de las variables  `e`, `f`, `g` o `h`.

Partamos con la variable `e`. Digamos que necesito a `Marge Simpson`. Para solicitarla debo decir `e[0]`, porque está en la primera posición de tal arreglo. Si escribo `e[1]`, lo que obtendría sería `Homer Simpson` que no es lo que necesitaba en principio. Entonces **debes recordar que la primera posición es cero, no uno**.

Pasemos a la variable `f`. Digamos que necesitamos escribir en la Consola de JavaScript de su navegador que `Kirk Van Houten dibujó la dignidad`. Tendría que escribir `f.dad + " dibujó la dignidad"`. Si quieren hacer la prueba, antes de escribir la instrucción, copien y peguen la variable `f`. 

Vamos por la variable `g` y la recomendación para la prueba es la misma: Cópienla y péguenla en la consola. Si necesitan, por ejemplo, obtener a `Maggie Simpson`, tendría que escribir `g.children[2]`, porque se encuentra en la tarcera posición de ese arreglo que tiene el par de nombre `children`.

Ahora bien podrían intentar obtener `Pria` de la variable `h`. Sería algo como `h[?].children[?]`, reemplanzando el `?` por el número que corresponda.

¿Pero qué pasa si necesito todo los `children` en `h`, da lo mismo quien sea su `mom` o `dad`? Ahí tenemos que programar una consulta, y para revisarla conviene avanzar un subtítulo. 

### Ciclos y condiciones

Pimero, desde una perspectiva lógica, tendría que pedir cada elemento de cada arreglo en par de nombre `children`, tantas veces como elementos tenga pero recordando que la primera posición es 0. 

Pero partamos en algo más simple: Si tengo `var frutas = ["manzana","pera","durazno","limón"]` tengo que pedir `frutas[0]`, `frutas[1]`, `frutas[2]` y `frutas[3]`. O sea, voy a partir por cero y llegar como máximo al total de elementos menos uno; eran tres elementos, pero llegué a dos (y para lo que sigue recuerda: 2 < 3).

Para automatizar la solicitud de cada fruta se podría utilizar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach). Otra opción es programar un [ciclo `for()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for), aprovechando la [propiedad `lenght`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/length). La segunda opción se podría ver así:

```
var frutas = ["manzana","pera","durazno","limón"];

for (let x = 0; x < frutas.length; x++){
  console.log(frutas[x]);
}
```

Favor copia y pega las líneas de código de arriba en Consola de JavaScript de tu Navegador y presiona la tecla `Enter`. Lo que ocurre es que mientras `x` es menor que 4 se cumple un ciclo que incrementa su valor en 1 (eso es lo que significa `x++`), siendo primero frutas[0], que es el valor inicial de `x`, luego frutas[1], seguido de frutas[2], después frutas[3] y hasta ahí no más llegamos porque se cumple la condición 3 < 4.

Pero digamos que quiero solamente frutas que tengan una letra "e" en su nombre; bien podría encargar una consulta por esa condición, si acaso incluye ese caracter. En este caso, podrían probar copiando y pegando lo que sigue en la Consola:

```
var frutas = ["manzana","pera","durazno","limón"];

for (let x = 0; x < frutas.length; x++){
  if(frutas[x].includes("e")){
  	console.log(frutas[x]);
  }
}
```

Recién utilizamos la condición [`if()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else) dentro del ciclo [`for()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for). O sea, igualmente pasa por frutas[0], …[1], …[2] y …[3], pero solo se imprime la "pera", que es la fruta que cumple con la condición de incluir una "e".

**Con el ciclo [`for()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for) y la condición [`if()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/if...else) ya presentadas, podemos volver al desafío que teníamos en un principio, de consultar por todos los `children` en la variable `h`.**

Así como podemos poner una condición dentro de un ciclo, podemos poner un ciclo dentro de otro: 

```
var h = [
  {mom:"Luann", dad:"Kirk", children:["Milhouse"]}, 
  {mom:"Marge", dad:"Homer", children:["Bart", "Lisa", "Maggie"]},
  {mom: "Manjula", dad: "Apu", children:["Poonam","Sashi","Pria","Uma","Anoop","Sandeep","Nabendu","Gheet"]}
];

for (let x = 0; x < h.length; x++){
	for (let y = 0; y < h[x].children.length; y++){
		console.log(h[x].children[y]);
	}	
}
```

¡Prueba el código en la Consola de JavaScript de tu Navegador!

Y dentro de un ciclo tú puedes programar la modificación de una variable. No simplemente modificarla en su valor, con operaciones matemáticas en cada vuelta del ciclo. Bien se puede modificar un arreglo sumándole elementos; podemos llenar un arreglo dentro de un ciclo [`for()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for) con el [método `push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push). Y si prefieres las cosas ordenadas, fuera del ciclo, puedes usar el [método `sort()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort). 

A continuación vamos a crear un arreglo de nombre `chiquillada`; parte vacío pero corresponde agregar el paréntesis cuadrado para que el computador entienda que se trata de un arreglo. En `chiquillada` vamos a guardar cada `children` de `h`, mezclando Van Houten, Simpson y Nahasapeemapetilon, para luego ordenarlos alfabéticamente:

```
var h = [
  {mom:"Luann", dad:"Kirk", children:["Milhouse"]}, 
  {mom:"Marge", dad:"Homer", children:["Bart", "Lisa", "Maggie"]},
  {mom: "Manjula", dad: "Apu", children:["Poonam","Sashi","Pria","Uma","Anoop","Sandeep","Nabendu","Gheet"]}
];

var chiquillada = [];

for (let x = 0; x < h.length; x++){
	for (let y = 0; y < h[x].children.length; y++){
		chiquillada.push(h[x].children[y]);
	}	
}

chiquillada.sort();
console.log(chiquillada);
```

¿Cómo puedo hacer para tener más datos, crear con amigos una variable `i` que contenga a todas las familias de Springfield y poder consultarla sin tener que copiar y pegarla en todas partes? 

La respuesta que le vamos a dar a tal inquietud exige avanzar al último subtítulo de la clase de hoy.

**Te recomiendo pasar al siguiente subtítulo después de haber revisado todos las referencias vinculadas más arriba. Y si tales referencias no fueron suficientes para comprender lo que se ha presentado, favor vuelve al libro de "Introducción a P5.js"**: Además de recomendarte revisar nuevamente los apéndices en páginas finales, podrías revisar el contenido entre páginas 56 y 66 (subtítulos "Un poco de matemáticas" y "Repetición").

#### JSON

Partamos con un copy/paste de https://www.json.org/json-es.html

>JSON (JavaScript Object Notation - Notación de Objetos de JavaScript) es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es simple interpretarlo y generarlo. 

JSON está constituído por dos estructuras (1) Una colección de pares de nombre:valor y (2) una lista ordenada de valores. Se parece tanto al modo que escribimos objetos en JavaScript que habría que mirar con atención lo que sigue para no confundirlo con el contenido de la variable `h`, que vimos más arriba. Lo que sigue podría guardarse de modo indepediente para [luego ser compartido en línea](https://api.myjson.com/bins/p1zik):

```
[
   {
      "mom":"Luann",
      "dad":"Kirk",
      "children":[
         "Milhouse"
      ]
   },
   {
      "mom":"Marge",
      "dad":"Homer",
      "children":[
         "Bart",
         "Lisa",
         "Maggie"
      ]
   },
   {
      "mom":"Manjula",
      "dad":"Apu",
      "children":[
         "Poonam",
         "Sashi",
         "Pria",
         "Uma",
         "Anoop",
         "Sandeep",
         "Nabendu",
         "Gheet"
      ]
   }
]
```
**La diferencia ya la pudiste haber notado: El nombre, del par nombre:valor, va entre comillas en JSON.**

Así como podemos compartir datos en bruto usando JSON, también podemos encontrarlos, para después utilizarlos en nuestro sitios y aplicaciones. 

Así nos podemos enterar de quiénes son los humanos más a salvo del COVID-19, porque están en este momento en la ISS (International Space Station): http://api.open-notify.org/astros.json - Y enterarnos por dónde va pasando la misma ISS: http://api.open-notify.org/iss-now.json - Ahora dale actualizar a esta última página y ve cómo cambian los números (porque va avanzando en su rotación al planeta)

Si quieres ver de mejor manera los JSON recién referidos, te recomiendo instalar una extensión en tu navegador. En Chrome puedes instalar [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=es), otra opciones son JSON View y JSON Viewer.

Después de instalada la extensión, puedes volver a ver las páginas de arriba. Más amigable, ¿cierto? Con ese cambio, puedes asomarte a algo con mayor extensión: 

- Los Casos confirmados de coronavirus alrededor del mundo: https://pomber.github.io/covid19/timeseries.json

- Un mes de registro de temblores +4.5M alrededor del mundo: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson

Lo que hace simple leer un JSON es el par nombre:valor. En cada par tenemos algo muy parecido a aquello con lo que iniciamos la clase: Un número 18261884, por si solo, no sirve de mucho, sí nos sirve cuando sabemos que se trata de la población de Chile.

**¿Ahora cómo tomo lo que está en un JSON para poder utilizarlo en JavaScript?** ¡Hay comillas que sobran y ya tengo claro que basta un signo equivocado para que nada funcione!

La respuesta: Hay que parsearlo. Y para no quedar en el mismo lugar, aprovechemos la explicación de [Iván Rico](https://groups.google.com/forum/#!topic/phplatinoamerica/nBe6PQm-VVY):

> Bueno primeramente "parsear" es un verbo que nos hemos inventado por que somos bien flojos para decir "analizar sintacticamente", parser viene del inglés […] y […] es una actividad que consiste en el análisis de texto para determinar si cumple o no reglas o patrones y en base a esto tomar alguna determinación.

Como estamos trabajando con [p5.js](https://p5js.org/es/), esto lo simplificaremos al nivel de identificar la dirección de un JSON en línea, procurando que parta con `https` (con [S de seguro](https://es.wikipedia.org/wiki/Protocolo_seguro_de_transferencia_de_hipertexto)), para luego usar [loadJSON()](https://p5js.org/es/reference/#/p5/loadJSON) dentro de la función [preload()](https://p5js.org/es/reference/#/p5/preload):

```
var data;

function preload(){
	data = loadJSON("https://api.myjson.com/bins/p1zik");	
}

//A la variable global data se le asignaron los valores del JSON, al modo que corresponde a JavaScript.
```

En el ejemplo de arriba estoy usando un servicio que permite a cualquiera dejar en línea sus propios JSON: http://myjson.com/

Si tienes dudas hasta este punto, puedes volver al libro de "Introducción a p5.js". Todo lo que necesitas saber se encuentra entre páginas 198 y 206.


- - - - - - - 

#### Referencias

- *GeoJSON Summary Format* - https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php

- *JSON time-series of coronavirus cases per country* - https://github.com/pomber/covid19

- *This video introduces the idea of using external data in a p5.js sketch* - https://youtu.be/rJaXOFfwGVw

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-02) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-04)
