# Diseño y Nuevos Medios v14 

### Clase 04 → 07/04/2021

### HTML5 + CSS3 + otras bibliotecas de JS

- - - - - - - - 

Existen [muchas bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries), además [p5.js](https://p5js.org/es/). 

Pero antes de explorar alguna de ellas, nos conviene tener completa claridad sobre los tipos de datos con los que JavaScript, y sus respectivas bibliotecas, pueden operar.

Para comenzar a clarificar las cosas, partamos con un número: 18261884. 

Si nos entregan tal número, sin contexto alguno, resultaría inútil. Pero sería distinto de la siguiente manera: 

| País      |  Población       | Superficie     |
|:----------|:-----------------|:---------------|
| Chile     | 18261884         | 756102         |

Entendiendo cómo funciona una tabla, contamos con una clara orientación para la utilización de tal número como información sobre algo concreto: La población en Chile. 

Además del dato de la población de Chile, contamos con su superficie. Si dividimos el primer dato por el segundo, obtenemos la densidad de la población en Chile. El resultado de aquella división es 24,15267252.

Los números 18261884 y 24,15267252 tienen una diferencia que corresponde apuntar:

- **18261884** es un número entero, un `int` (del inglés *integer*).

- **24,15267252** es un número de coma flotante, un `float` (del inglés *floating point number*; y no se olviden de esta diferencia, lo que para nosotros es coma, *for them* es punto, y el *coding* se hace en *english*).

A estos dos tipos de datos numéricos, podemos agregar: 

- **true** o **false** como las dos opciones posibles de un [tipo de dato lógico](https://es.wikipedia.org/wiki/Tipo_de_dato_l%C3%B3gico) (bool: *boolean*)

- **"A"** como un carácter (char: *character*)

Podrás notar que en el tipo de dato numérico y booleano no utilicé comillas, pero en el caso del caracter sí las usé. 

Menciono `int`, `bool`, `char` y `float` porque son palabras reservadas en lenguajes de programación clásicos para **declarar que una variable que almacenará cierto tipo de dato**. 

**En JavaScript podemos crear variables con una única palabra reservada,`var`**. También podemos usar `let` y `const`. Para entender la diferencia, nos conviene consultar el artículo [Var, let y const. ¿Donde, cuando y por qué?](https://medium.com/@tatymolys/var-let-y-const-donde-cuando-y-por-qu%C3%A9-d4a0ee66883b).

Lo importante es que en JavaScript no se debe cambiar la palabra reservada para decir algo respecto del tipo de dato que contendrá la variable (como sí se hace en el lenguaje Java, que es la base de Processing). O sea, en JavaScript y en sus bibliotecas hacemos esto:

```
var a = 18261884;

var b = 24,15267252;

var c = false;

var d = "Marge in Chains";

var e = ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"];

var f = {mom:"Luann Van Houten", dad:"Kirk Van Houten", child:"Milhouse Van Houten"};

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

¿Pero qué pasa si necesito todo los `children` en `h`, da lo mismo quien sea su `mom` o `dad`? Tendríamos que progamar una consulta, y para entender la lógica de tal programación, conviene hacer un ejercicio más con p5.js.

Y pasando a una pregunta aun más ambiciosa: ¿Nosotros siempre vamos a tener que meter, a mano, los datos de una variable o podríamos programarlo? Para programar el "llenado" de una variable, podríamos ser necesario aprender algo de API, JSON y CSV.

- - - - - - -

#### Ejercicio

Realizaremos un ejercicio enfocado en el uso de los tipos de datos más arriba.

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en esta carpeta de repositorio, que puede descargar como *realease* clase-04.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-03) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-05)
