### Diseño y Nuevos Medios → Clase 07 → 28/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que hemos explorado, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

**Solo nos queda por revisar [Vue.js](https://v3.vuejs.org/), un *framework* de JavaScript, tan popular como Angular.js y React.js**. A diferencia de ellos, [Vue.js](https://v3.vuejs.org/) es progresivo; nos permite aprovecharlo desde una primera capa, donde parece una biblioteca de JavaScript que facilita la escritura de secuencias de instrucciones, y desde ahí podemos progresar en capas de complejidad.

- - - - - - - - 

### Exploración

Con Angular.js o React.js debes basar todo el desarrollo en el mismo *framework*, mientras que trabajando con [Vue.js](https://v3.vuejs.org/) puedes partir con un documento html, en tu editor de código fuente, en donde puedes escribir:

```
<main>
    <ul>
        <li v-for="color in colores">
            {{ color }}
        </li>
    </ul>
</main>
<script src="https://unpkg.com/vue@next"></script>
<script>
    const listado = {
        data() {
            return {
                colores: ["rojo", "azul", "amarillo", "verde"],
            }
        }
    };
    Vue.createApp(listado).mount("main");
</script>
```

En el código html tenemos un ítem de lista (list item, `<li></li>`) con un atributo `v-for`, que da la siguiente instrucción: Vue, aquí va un `for` que desplegará todos los elementos en el arreglo "colores", llamando "color" a cada elemento. Así de simple.

Para revisar un poco más, pueden ver:

- [¿Qué es Vue.js y por qué es tan especial?](https://www.youtube.com/watch?v=AqesL138vMA)

- [Vue.js: El Documental](https://www.youtube.com/watch?v=OrxmtDw4pVI)

En el ejercicio que sigue podrán encontrar algo de Vue.js, pero la mayor parte del ejercicio servirá de repaso a lo aprendido sobre JavaScript, el lenguaje de programación que controla el comportamiento de las páginas web. 

- - - - - - - 

### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-07/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-08)
