### Diseño y Nuevos Medios → Clase 05 → 14/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que exploraremos, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

- [Vue.js](https://v3.vuejs.org/) - *The Progressive JavaScript Framework.*

**En la clase de hoy revisaremos [Papa Parse](https://www.papaparse.com/) y [Chart.js](https://www.chartjs.org/).**

[Papa Parse](https://www.papaparse.com/) nos permite hacer un análisis sintáctico de una estructura de datos contenidos en un archivo CSV para asignarla a una variable en JavaScript.

Con [Papa Parse](https://www.papaparse.com/) podemos simplificar la instrucción para este análisis de la siguiente forma:

```
Papa.parse("https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-05/indice-uso-cobre.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function (respuesta) {…}
})
```

Paso por paso, las instrucciones de arriba son:

1. En este script vamos a usar `Papa.parse()`.
2. Esta biblioteca irá por el CSV en tal dirección `Papa.parse("…",{})`.
3. La misma biblioteca se encargará de descargarlo `download: true,` 
4. considerando la primera línea del CSV como una línea de encabezados `header: true,`
5. cuidando el tipo de dato de las líneas siguientes `dynamicTyping: true,` y
6. cuando se complete lo anterior, la estructura de dato debe asignarse a respuesta `complete: function (respuesta) {…}`.

- - - - - - - - - - - 

### Exploración

Esta exploración la haremos mediante el ejercicio preparado. 

Para resolver el ejercicio, conviene: 

- haber revisado información sobre los archivos [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas);

- informarse respecto de [tablas en HTML](https://www.htmlquick.com/es/tutorials/tables.html);

- recordar el [método `forEach()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach);

- revisar el [método `pop()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/pop);

- revisar el [método `push()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/push);

- tener a mano la [documentación de Charts.js](https://www.chartjs.org/docs/latest/); y

- tener a mano la [documentación de Papa Parse](https://www.papaparse.com/docs)

- - - - - - -

#### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), una versión ajustada del sitio web que está contenido en [esta carpeta del repositorio](https://profesorfaco.github.io/dno037-2021/clase-05/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-04) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-06)
