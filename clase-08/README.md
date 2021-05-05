### Diseño y Nuevos Medios → Clase 08 → 05/05/2021

# HTML5 + CSS3 + otras bibliotecas de JavaScript

### Evaluación Nº2

Cada estudiante cuenta con el horario de clases para publicar, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión del sitio web que está contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-08/).

Cada versión debe ajustarse a la siguiente pauta de cotejo:

| criterio | descripción             | pts. |
|:----:|:----------------------------|:----:|
| A | En `index.html` incluye el título de la saga, seguido por un párrafo de presentación general, redactado de manera directa y concisa + A la derecha y pegada abajo, mediante CSS incluye una imagen que, pesando menos de 200kb, se fusiona con el color de fondo de cada página en el sitio web (en las demás páginas se mantiene el color de fondo, pero no se incluye la imagen) + Además cambia familia tipográficas para conectar con el tenor de la saga, y cambiar su color en función del mayor *contrast ratio*, y estos cambios se aplican en todas las páginas del sitio. | 3,0 |
| B | En `peliculas.html` despliega cada película de la saga (mínimo 6, máximo 10) + Este despliegue se resuelve mediante consulta a un CSV propio, apoyada en PapaParse + Cada película desplegada en esta página debe vincular a una página `pelicula.html` que se rellena según consulta a la línea correspondiente del CSV. | 3,0 |
| C | Cada página de `pelicula.html` utiliza un mismo *script*, que toma un dato incluido en la URL y con eso muestra la información que corresponde a una línea del CSV + Los distintos resultados que puede ofrecer esta página son consistentes en estructura y contenido + Con el mismo *script* prepara una alternativa en caso no se esté incluyendo el dato necesario en la URL, esta alternativa muestra un mensaje de error amable, del tipo: *Hay un problema, pero soy yo, no eres tú.* | 3,0 |
| D | En `locaciones.html` despliega un mapa donde se marcan los distintos lugares donde se filmó la saga (mínimo 5) + Este despliegue se resuelve con Leaftlet, sin la necesidad de importar datos (los puede agregar a mano, directamente) + En cada marca se hace evidente la película grabada | 3,0 |
| E | En `ganancias.html` despliega un gráfico de barras que compara las cantidades de platas recaudadas por cada película de la saga + El criterio de recaudación debería ser el mismo para cada película y quedar anunciado a nivel de *label* (por ejemplo: Recaudación de la primera semana en cines de EE.UU.) + El gráfico se resuelve con Charts.js, sin la necesidad de importar datos (los puede agregar a mano, directamente) | 3,0 |


A los puntos obtenidos en pauta de cotejo se suman los puntos obtenidos por ejercicios en clases [05](https://github.com/profesorfaco/dno037-2021/tree/main/clase-05), [06](https://github.com/profesorfaco/dno037-2021/tree/main/clase-06) y [07](https://github.com/profesorfaco/dno037-2021/tree/main/clase-07), con evaluación del ejercicio de clase [04](https://github.com/profesorfaco/dno037-2021/tree/main/clase-04) como punto extra. 

La suma de estos puntos se transforma en su [segunda evaluación del optativo](https://docs.google.com/spreadsheets/d/1y-vg8WCTgtvDP9kuXv6epljoF-FRPLGwI4gvXVUrj18/edit?usp=sharing), la que corresponde al 25% de su nota promedio final.

#### Entregas

| Nº   | Estudiante      | GitHub    | Evaluación Nº2 |
|:----:|:----------------|:----------|:-------------------|
| 1    | MARTÍN BENNETT | https://github.com/bennett-martin/ | https://bennett-martin.github.io/dno-clase8-05-05/ |
| 2    | RODRIGO CAMPUSANO | https://github.com/rodrigocampusano | https://rodrigocampusano.github.io/Clase-8/ |
| 3    | PALOMA CARRASCO | https://github.com/palomacarrasco | — |
| 4    | VICENTE ESPINOSA | https://github.com/vtespinosa | — |
| 5    | FELIPE FUENTEALBA | https://github.com/leocto | — |
| 6    | VERÓNICA GATICA | https://github.com/verogatica | https://verogatica.github.io/8clase_dno037/ |
| 7    | MIRKO GONZÁLEZ | https://github.com/mirkogonzalez | https://mirkogonzalez.github.io/clase_8 |
| 8   | RODRIGO GUZMÁN | https://github.com/rodrigo-bot | https://rodrigo-bot.github.io/dno037-clase08 |
| 9   | VALENTINA HERRERA | https://github.com/vale-herrera | https://vale-herrera.github.io/dno037-clase-8/ |
| 10   | BETINA HIP | https://github.com/bbhip | https://bbhip.github.io/dno-nuevos-medios-08/ |
| 11   | MARÍA HONORATO | https://github.com/elisahonorato | https://elisahonorato.github.io/evaluacion_2 |
| 12   | MARÍA IBÁÑEZ | https://github.com/franibanezm | https://franibanezm.github.io/clase_08 |
| 13   | MARGARITA MATTE | https://github.com/mar-garita1 | https://mar-garita1.github.io/clase-08 |
| 14   | CONSTANZA MONTERO | https://github.com/cpmontero | https://cpmontero.github.io/dno_nuevosmedios_clase8 |
| 15   | VALENTINA MORALES (corte de luz) | https://github.com/lunalaffx | https://lunalaffx.github.io/DNO037-clase8/ |
| 16   | DANIELA ORELLANA | https://github.com/dacorellana | — |
| 17   | FRANCISCA PARRA | https://github.com/frnparr | — |
| 18   | YAHAIRA PEREZ | https://github.com/yahairaperez | — |
| 19   | JAVIER RAMÍREZ | https://github.com/rama2432 | https://rama2432.github.io/DNO-clase8/ |
| 20   | MARIO REINIKE | https://github.com/marioreinike | https://marioreinike.github.io/dno037/clase-08/ |
| 21   | VALENTINA REY | https://github.com/valentinarey | https://valentinarey.github.io/E2_clase8 |
| 22   | JAVIERA ROBLES | — | — |
| 23   | MIRANDA SEPULVEDA | https://github.com/mirandasepulveda-la | — |
| 24   | JOSEFINA TORO | https://github.com/josefinatoro | — |
| 25   | MARGARITA VIAL | https://github.com/margaraitavialm | https://margaraitavialm.github.io/evaluacion-2/ |

- - - - - - - - - - - - -

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-07) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-10)
