### Diseño y Nuevos Medios → Clase 06 → 21/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que hemos explorado, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

Nos queda por explorar:

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- [Vue.js](https://v3.vuejs.org/) - *The Progressive JavaScript Framework.*

En la clase de hoy nos referiremos a [jQuery](https://jquery.com/) y [Leaflet.js](https://leafletjs.com/).

**[jQuery](https://jquery.com/) es una biblioteca que nos simplifica la redacción de instrucciones en JavaScript, sobre todo cuando se busca manipular el DOM y hacer transiciones animadas**. Su primera versión estable fue lanzada el año 2006, lo que es anterior a la primera revisión importante del [estándar de JavaScript](https://en.wikipedia.org/wiki/ECMAScript), la [ES5 del 2009](https://www.w3schools.com/js/js_es5.asp), con la que se comenzó a simplificar la redacción del mismo lenguaje.

Conviene partir con un ejemplo respecto; si en una página web tenemos varios elementos con una clase a la que denominamos "media", con el [estándar de JavaScript actual](https://www.w3schools.com/js/js_versions.asp), y sin usar bibliotecas, podríamos ir por cada uno de tales elementos con un `document.querySelectorAll(".media")`. De ello resultaría la representación de una lista. Luego, podríamos utilizar el método `forEach()` para afectar a cada elemento en tal lista. Si queremos afectar a los elementos con un cambio de color, sería algo como: 

```
var elementos = document.querySelectorAll(".media");
elementos.forEach(elemento => elemento.style.color="red");
```

Para hacer lo mismo aprovechando jQuery, basta escribir: 

```
$(".media").css("color","red");
```

Agreguemos otro ejemplo; queremos que el cambio de color se aplique una vez se presione un botón de identidad "cambio". 

Con JavaScript, sin una biblioteca, podríamos usar `querySelector` y `addEventListener`:

```
function enrojece(){
  var elementos = document.querySelectorAll(".media");
  elementos.forEach(elemento => elemento.style.color="red");  
}
document.querySelector("#cambio").addEventListener("click", enrojece);
```

Con jQuery podríamos usar `$` y `on`:

```
function enrojece() {
  $(".media").css("color","red");
}
$("#cambio").on("click", enrojece);
```

La clave del uso de jQuery está en la concatenación de un selector y una acción: `$(selector).action()`. Las opciones de selectores y acciones son descritas detalladamente en https://api.jquery.com/, y se muestran de manera muy abreviada en https://htmlcheatsheet.com/jquery/

**[Leaflet.js](https://leafletjs.com/) es una alternativa ligera para trabajar con mapas interactivos**. Para usarlo necesitamos conocer las coordenadas geográficas de lo que se quiera apuntar para, primero, establecer un centro del mapa y luego hacer las marcas correspondientes. También corresponde decidir por un tipo de mapa a usar: 

- [light-v10](https://api.mapbox.com/styles/v1/mapbox/light-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [dark-v10](https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [streets-v11](https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [outdoors-v11](https://api.mapbox.com/styles/v1/mapbox/outdoors-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); y 
- [satellite-v9](https://api.mapbox.com/styles/v1/mapbox/satellite-v9.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64).

```
var miMapa = L.map('aqui').setView([-33.4189754,-70.6181116], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', { 
maxZoom: 17, 
id: 'mapbox/light-v10', 
tileSize: 512, 
zoomOffset: -1 
}).addTo(miMapa);

L.marker([-33.4189754,-70.6181116]).addTo(miMapa).bindPopup("<strong>Escuela de Diseño</strong><br>Campus Lo Contador");
```

Las instrucciones que se muestran arriba dicen:

1. Crea un mapa dentro del elemento con la identidad `aqui`. El mapa debe mostar en su centro tal coordenada, con un zoom inicial de 12. Me referiré a lo creado como `miMapa` 
2. Crea una capa aprovechando un mapa de [Mapbox](https://www.mapbox.com/maps/) al que se le podrá hacer un zoom máximo de 17, y agrega esta capa a `miMapa`.
3. Crea un marcador en tal coordenada y agrégalo a `miMapa`. Tal marcador tiene que desplegar un mensaje.

Para más detalles, conviene revisar la [*Leaflet Quick Start Guide*](https://leafletjs.com/examples/quick-start/).

- - - - - - -


### Exploración

Es necesario contar con un editor de código fuente; vamos a crear un documento nuevo, pegar el código que sigue y guardarlo con el nombre ejemplo.html:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Esto es un ejemplo</title>
        <style>
            select { margin: 1%; }
            main { display: flex; flex-flow: row wrap; }
            article { width: calc(16% - 2px); padding: 1%; margin: 1%; border: 1px solid black; }
        </style>
    </head>
    <body>
        <select>
            <option selected>Todos</option>
            <option>Pares</option>
            <option>Impares</option>
        </select>
        <main></main>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" integrity="sha512-bLT0Qm9VnAYZDflyKcBaQ2gg0hSYNQrJ8RilYldYQ1FxQYoCLtUjuuRuZo+fjqhx/qtq/1itJ0C2ejDxltZVFg==" crossorigin="anonymous"></script>
        <script>
            $(document).ready(function () {
                for (var n = 1; n < 11; n++) {
                    if (n % 2 == 0) {
                        $("main").append('<article class="par">' + n + "</article>");
                    } else {
                        $("main").append('<article class="impar">' + n + "</article>");
                    }
                }
                var v;
                $("select").on("change", function () {
                    v = this.value;
                    if (v == "Pares") {
                        $(".par").fadeTo("slow", 1);
                        $(".impar").fadeTo("slow", 0.1);
                    } else if (v == "Impares") {
                        $(".par").fadeTo("slow", 0.1);
                        $(".impar").fadeTo("slow", 1);
                    } else {
                        $(".par, .impar").fadeTo("slow", 1);
                    }
                });
            }); //cierro ready(function(){})
        </script>
    </body>
</html>
```

Podemos abrir este ejemplo.html en Chrome o Firefox. Ver el resultado y volver al editor de código fuente.

- - - - - - -

### Práctica


Hoy realizaremos un ejercicio que nos permitirá explorar [jQuery](https://jquery.com/) y [Leaflet.js](https://leafletjs.com/)

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-06/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-07)
