### Diseño y Nuevos Medios → Clase 05 → 14/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

- [Vue.js](https://v3.vuejs.org/) - *The Progressive JavaScript Framework.*

En la clase de hoy revisaremos [Papa Parse](https://www.papaparse.com/) y [Chart.js](https://www.chartjs.org/).

**[Papa Parse](https://www.papaparse.com/) nos permite hacer un análisis sintáctico de una estructura de datos contenidos en un archivo [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas) para asignarla a una variable en JavaScript. En inglés, y más breve: CSV parsing.**

Con [Papa Parse](https://www.papaparse.com/) podemos simplificar la instrucción para tal análisis con:

```
Papa.parse("https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-05/indice-uso-cobre.csv", {
download: true,
header: true,
dynamicTyping: true,
complete: function (respuesta) {…}
})
```

Paso a paso, la instrucción es:

1. En este script vamos a usar `Papa.parse()`.
2. Esta biblioteca irá por el CSV en tal dirección `Papa.parse("https://…",{})`.
3. La misma biblioteca se encargará de descargarlo `download: true,` 
4. tomando la primera línea de valores separados por coma como encabezado `header: true,`
5. cuidando el tipo de dato de las líneas siguientes `dynamicTyping: true,` y
6. cuando se complete corresponde abrir una función `complete: function (respuesta) {…}`.
7. La variable `respuesta` será reconocida dentro de tal función, conteniendo el resultado del análisis sintáctido de aquél CSV como un objeto:

```
{
data: [ ... ],    // parsed data
errors: [ ... ],  // errors encountered
meta: {	... }     // extra parse info
}
```

Cada línea de valores separado por coma pasa a ser un elemento en un arreglo al que nos podemos referir con un `respuesta.data`



En la *parsed data* podríamos encontrar valores numéricos para visualizar con gráficos de [línea](https://www.chartjs.org/docs/latest/charts/line.html), [barra](https://www.chartjs.org/docs/latest/charts/bar.html), [radar](https://www.chartjs.org/docs/latest/charts/radar.html), [torta](https://www.chartjs.org/docs/latest/charts/doughnut.html), [área polar](https://www.chartjs.org/docs/latest/charts/polar.html), [burbujas](https://www.chartjs.org/docs/latest/charts/bubble.html) y [dispersión](https://www.chartjs.org/docs/latest/charts/scatter.html), que son los tipos de gráficos disponibles en otra biblioteca de JavaScript:

**[Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type) nos permite implementar gráficos desde valores numéricos. Su promesa, en inglés, es *Simple yet flexible JavaScript charting for designers & developers*. Al ubicarse en ese lugar intermedio puede provocar dolores de cabeza en los extremos caricaturizados: muy complejo para *designers* o muy simple para *developers*.** 

Para poder usarlo corresponde reconocer sus partes: 

```
var contexto = document.getElementById('nombre').getContext('2d');
var configuracion = {type: '…', data: {…}, options: {…}}
var chart = new Chart(contexto, configuracion);
```

1. Requiere la creación del contexto 
2. Requiere la configuración de tipo, datos y opciones para el gráfico 
3. Contexto y configuración permiten indicar que en este script vamos a crear un `new Chart()`.

Nos referimos a tres partes. No se trata de tres pasos. También sería válido escribir:

```
new Chart(document.getElementById('nombre').getContext('2d'), {type: '…', data: {…}, options: {…}});
```

Más arriba mostramos unas líneas de código para resolver algo con [Papa Parse](https://www.papaparse.com/), y tales líneas son todas las que se necesitan. Pero las recién presentadas muestran el inicio del trabajo con [Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type); para aprender más sobre la configuración corresponde hacer algo de exploración.

- - - - - - - - - - - 

### Exploración

Antes de partir la exploración necesaria para hacer la configuración de [Chart.js](https://www.chartjs.org/docs/latest/charts/?h=type), corresponde:

- recordar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach);

- revisar el [método `push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push); y

- tener a mano la [documentación de Charts.js](https://www.chartjs.org/docs/latest/).

Es necesario contar con un editor de código fuente; vamos a crear un documento nuevo, pegar el código que sigue y guardarlo con el nombre ejemplo.html:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Esto es un ejemplo</title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.min.js" integrity="sha512-d9xgZrVZpmmQlfonhQUvTR7lMPtO7NkZMkA0ABN3PHCbKA5nqylQ/yWlFAyY6hYgdF1Qh6nYiuADWwKB4C2WSw==" crossorigin="anonymous"></script>
    </head>
    <body>
        <canvas id="myChart"></canvas>
        <script>
            //comunas más pobladas en la provincia de Santiago
            var santiago = [
                { comuna: "La Florida", habitante: 366.916, color: "#d32f2f" },
                { comuna: "Las Condes", habitante: 294.838, color: "#7b1fa2" },
                { comuna: "Maipú", habitante: 521.627, color: "#303f9f" },
                { comuna: "Peñalolén", habitante: 241.599, color: "#0288d1" },
                { comuna: "Santiago", habitante: 404.495, color: "#00796b" },
            ];

            var lasComunas = [];
            var losHabitantes = [];
            var losColores = [];

            santiago.forEach(function (dato) {
                lasComunas.push(dato.comuna);
                losHabitantes.push(dato.habitante);
                losColores.push(dato.color);
            });

            new Chart(document.getElementById("myChart").getContext("2d"), {
                type: "bar",
                data: {
                    labels: lasComunas,
                    datasets: [
                        {
                            data: losHabitantes,
                            backgroundColor: losColores,
                        },
                    ],
                },
                options: {},
            });
        </script>
    </body>
</html>
```

Podemos abrir este `ejemplo.html` en Chrome o Firefox. Ver el resultado y volver al editor de código fuente.

- - - - - - -

### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), una versión ajustada del sitio web que está contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2021/clase-05/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-04) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-06)
