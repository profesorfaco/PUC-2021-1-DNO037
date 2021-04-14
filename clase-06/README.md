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

Conviene partir con un ejemplo: En una página web tenemos varios elementos con una clase a la que denominamos "media". Para afectar a todos los elementos que tienen esa clase con un cambio de color desde JavaScript, sin usar bibliotecas, hace algunos años habríamos escrito la siguiente instrucción:

```
var elementos = Array.from(document.getElementsByClassName("media"));
elementos.forEach(function(elemento){
  elemento.style.color="red";
});
```

Pero con el [estándar de JavaScript actual](https://www.w3schools.com/js/js_versions.asp) se simplifica un poco:

```
var elementos = document.querySelectorAll(".media");
elementos.forEach(elemento => elemento.style.color="red");
```

Ahora bien, usando [jQuery](https://jquery.com/), basta con escribir:

```
$(".media").css("color","red");
```

Para la primera década del 2000, [jQuery](https://jquery.com/) ofrecía una simplificación radical en el trabajo con JavaScript. Pero en los años más recientes el mismo lenguaje ha tendido a simplificarse; no conviene perder de vista esta tendencia por prestarle mucha atención a la biblioteca, esto sería casi como olvidar el modo correcto de escribir algunas palabras por prestarle mucha atención a las abreviaciones de mensajería instantánea.

Hecha la advertencia, agreguemos un nivel más al ejemplo para poder entender el uso de la biblioteca: 

```
function enrojece() {
  $(".media").css("color","red");
}
$("#cambio").on("click", enrojece);
```

Tal instrucción está abreviando, mediante [jQuery](https://jquery.com/), lo siguiente:

```
function enrojece(){
  var elementos = document.querySelectorAll(".media");
  elementos.forEach(elemento => elemento.style.color="red");  
}
document.querySelector("#cambio").addEventListener("click", enrojece);
```

Con la última instrucción de jQuery, el cambio de color sobre todos los elementos de clase "media" se hace al presionar el botón de identidad "cambio". Y ya resulta evidente que la clave del uso de [jQuery](https://jquery.com/) está en la concatenación de un selector y una acción: `$(selector).action()`. 

Las opciones de selectores y acciones son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/

**Ahora podemos pasar a [Leaflet.js](https://leafletjs.com/), una biblioteca de JavasScript que ofrece una alternativa ligera para trabajar con mapas interactivos**. Para usarla necesitamos conocer las coordenadas geográficas de lo que se quiera apuntar para, primero, establecer un centro del mapa y luego hacer las marcas correspondientes. También corresponde decidir por un tipo de mapa a usar: 

- [mapbox/light-v10](https://api.mapbox.com/styles/v1/mapbox/light-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/dark-v10](https://api.mapbox.com/styles/v1/mapbox/dark-v10.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/streets-v11](https://api.mapbox.com/styles/v1/mapbox/streets-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); 
- [mapbox/outdoors-v11](https://api.mapbox.com/styles/v1/mapbox/outdoors-v11.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64); o 
- [mapbox/satellite-v9](https://api.mapbox.com/styles/v1/mapbox/satellite-v9.html?title=true&access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA#10/-33.47/-70.64).

La creación de un mapa con [Leaflet.js](https://leafletjs.com/) puede verse así:

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

En la instrucción hay tres L de [Leaflet.js](https://leafletjs.com/), las que se usan para:

1. Crear un mapa dentro del elemento con la identidad `aqui`. El mapa debe tener en su centro tal coordenada, con un zoom inicial de 12. Y corresponde referir a lo creado como `miMapa`. 
2. Crear una capa aprovechando un mapa de [Mapbox](https://www.mapbox.com/maps/) al que se le podrá hacer un zoom máximo de 17, y agrega esta capa a `miMapa`.
3. Crear un marcador en tal coordenada y agregarlo a `miMapa`. Tal marcador tiene que desplegar un mensaje.

Dos maneras sencillas para encontrar las coordenadas necesarias: 

- En la dirección de Google Maps, son los dos números que siguen después del arroba en `https://www.google.com/maps/@`

- A la derecha del título principal de cada artículo de Wikipedia, en letra azul y pequeña, habitualmente están las coordenadas con vínculo a GeoHack.



- - - - - - -


### Exploración

La exploración estará enfocada en jQuery, por lo que conviene tener a la manos las opciones de selectores y acciones que son descritas detalladamente en https://api.jquery.com/, y de manera muy abreviada en https://htmlcheatsheet.com/jquery/


Además, es necesario contar con un editor de código fuente; allí vamos a crear un documento nuevo, pegar el código que sigue y guardarlo con el nombre ejemplo.html:

```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
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

Podemos abrir este ejemplo.html en Chrome o Firefox. 

- - - - - - -

### Práctica


Hoy realizaremos un ejercicio trabajaremos con [jQuery](https://jquery.com/) y [Leaflet.js](https://leafletjs.com/) en conjunto.

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-06/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-05) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-07)
