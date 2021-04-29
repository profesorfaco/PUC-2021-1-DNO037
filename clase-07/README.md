### Diseño y Nuevos Medios → Clase 07 → 28/04/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Lectura

Las [bibliotecas de JavaScript](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries) que hemos explorado, además de [p5.js](https://p5js.org/es/), son:

- [Chart.js](https://www.chartjs.org/) – *Simple, clean and engaging HTML5 based JavaScript charts*.

- [jQuery](https://jquery.com/) - *A fast, small, and feature-rich JavaScript library*.

- [Leaflet.js](https://leafletjs.com/) – *The leading open-source JavaScript library for mobile-friendly interactive maps*.

- [Papa Parse](https://www.papaparse.com/) - *The powerful, in-browser CSV parser for big boys and girls*

**Solo nos queda por revisar [Vue.js](https://v3.vuejs.org/), un *framework* de JavaScript, tan popular como Angular.js y React.js**. A diferencia de ellos, [Vue.js](https://v3.vuejs.org/) es progresivo; nos permite aprovecharlo desde una primera capa, donde parece una humilde biblioteca de JavaScript que facilita la escritura de secuencias de instrucciones, y desde ahí podemos progresar en capas de complejidad.

Para entender su contexto y potencial, conviene ver los siguientes videos: 

- Es suficiente llegar al minuto 6 en: [¿Angular, Vue o React? ¿Qué debes usar en el frontend de tu app?](https://www.youtube.com/watch?v=elkCexAWX5k)

- Ideal es ver completa la respuesta a: [¿Qué es Vue.js y por qué es tan especial?](https://www.youtube.com/watch?v=AqesL138vMA)

- Y sólo si tienes un poco más de media hora disponible, puedes ver: [Vue.js: El Documental](https://www.youtube.com/watch?v=OrxmtDw4pVI)

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

En el código html tenemos un ítem de lista (list item, `<li></li>`) con un atributo `v-for`, que da la siguiente instrucción: *Vue, aquí va un `for` que desplegará todos los elementos en el arreglo "colores", llamando "color" a cada elemento*. Así de simple.

En el ejercicio que sigue podrán encontrar algo de Vue.js, pero la mayor parte del ejercicio servirá de repaso a lo aprendido sobre JavaScript.

- - - - - - - 

### Práctica

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-07/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

| Nº   | Estudiante      | GitHub    | Ejercicio clase-06 |
|:----:|:----------------|:----------|:-------------------|
| 1    | MARTÍN BENNETT | https://github.com/bennett-martin/ | — |
| 2    | RODRIGO CAMPUSANO | https://github.com/rodrigocampusano | — |
| 3    | PALOMA CARRASCO | https://github.com/palomacarrasco | https://palomacarrasco.github.io/dno037-clase-7/ |
| 4    | VICENTE ESPINOSA | https://github.com/vtespinosa | — |
| 5    | FELIPE FUENTEALBA | https://github.com/leocto | https://leocto.github.io/Nuevos_Medios-7/ |
| 6    | VERÓNICA GATICA | https://github.com/verogatica | https://verogatica.github.io/7clase_dno037/ |
| 7    | MIRKO GONZÁLEZ | https://github.com/mirkogonzalez | https://mirkogonzalez.github.io/clase_7/ |
| 8   | RODRIGO GUZMÁN | https://github.com/rodrigo-bot | https://rodrigo-bot.github.io/dno037-clase07/ |
| 9   | VALENTINA HERRERA | https://github.com/vale-herrera | https://vale-herrera.github.io/dno037-clase-7/ |
| 10   | BETINA HIP | https://github.com/bbhip | https://bbhip.github.io/dno-nuevos-medios-07/ |
| 11   | MARÍA HONORATO | https://github.com/elisahonorato | https://elisahonorato.github.io/clase07/ |
| 12   | MARÍA IBÁÑEZ | https://github.com/franibanezm | https://franibanezm.github.io/clase_07/ |
| 13   | MARGARITA MATTE | https://github.com/mar-garita1 | https://mar-garita1.github.io/clase-07/ |
| 14   | CONSTANZA MONTERO | https://github.com/cpmontero | https://cpmontero.github.io/dno_nuevosmedios_clase7/ |
| 15   | VALENTINA MORALES | https://github.com/lunalaffx | https://lunalaffx.github.io/DNO037-clase7/ |
| 16   | DANIELA ORELLANA | https://github.com/dacorellana | — |
| 17   | FRANCISCA PARRA | https://github.com/frnparr | — |
| 18   | YAHAIRA PEREZ | https://github.com/yahairaperez | — |
| 19   | JAVIER RAMÍREZ | https://github.com/rama2432 | https://rama2432.github.io/DNO-clase7/ |
| 20   | MARIO REINIKE | https://github.com/marioreinike | https://marioreinike.github.io/dno037/clase-07/ |
| 21   | VALENTINA REY | https://github.com/valentinarey | https://valentinarey.github.io/clase_7/ |
| 22   | JAVIERA ROBLES | — | — |
| 23   | MIRANDA SEPULVEDA | https://github.com/mirandasepulveda-la | https://mirandasepulveda-la.github.io/actividad_clase_7/ |
| 24   | JOSEFINA TORO | https://github.com/josefinatoro | — |
| 25   | MARGARITA VIAL | https://github.com/margaraitavialm | https://margaraitavialm.github.io/DNO_clase07/ |

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-06) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-08)
