### Diseño y Nuevos Medios → Clase 12 → 02/06/2021

# Bootstrap v5

Repitamos el mantra de Bootstrap: una o varias `col` pueden ir dentro de una `row` que, a su vez, va dentro de un `container`… aunque algunas veces podríamos meter una `row` dentro de una `col` para subdividirla. 

Bootstrap ofrece muchas opciones para armar de manera muy rápida los "mínimos viables" de HTML, CSS y JavaScript.  

Cada vez que tengan una duda, consulten la documentación oficial, en la versión correspondiente (ahora v5.0.1): https://getbootstrap.com/docs/5.0/getting-started/introduction/

Y si necesitan algo más rápido, siempre podrán encontrar alguna *cheat sheet* en Google; en la búsqueda de *cheat sheet bootstrap 5*, algunos resultados destacados son:

- https://bootstrap-cheatsheet.themeselection.com/
- https://getbootstrap.com/docs/5.0/examples/cheatsheet/
- https://gist.github.com/JacobLett/13820300ab0534832a0f520df8c7c34d

En la medida que vayan incorporando la lógica y sus clases, más rápido puede resultar su uso (y podrán llegar a prescindir, incluso, de los *cheat sheets*).

- - - - - - - - -

Para seguir incorporando las lógicas de Bootstrap, sin dejar de potenciar lo aprendido anteriormente, hoy nos aprovecharemos de: 

- [Lorem Picsum](https://picsum.photos/)

- [sheet.best · Turn your google sheets into a REST API](https://sheet.best/) 

- [How to Use the JavaScript Fetch API to Get JSON Data](https://www.taniarascia.com/how-to-use-the-javascript-fetch-api-to-get-json-data/)

**En lugar de usar un CSV como en las [clases anteriores](https://github.com/profesorfaco/dno037-2021/edit/main/clase-11/), hoy vamos a utilizar un documento que podríamos seguir editando en [Google Drive](https://drive.google.com/drive/u/1/my-drive).** 

Para utilizar un documento en Drive, vamos a seguir 6 pasos:

**Paso 1**: En el Google Drive de su correo@uc.cl, tienen que crear una hoja de cálculo. Por favor rellénenla rápido, por ahora, con algo parecido a [este ejemplo](https://docs.google.com/spreadsheets/d/1AyafM2pAMhKWpv-QLPdZ3CHm6hNWSOWXQf6LkN_lexs/edit?usp=sharing).

**Paso 2**: Cuando esté lista, tienen que presionar el botón verde de Compartir (arriba a la derecha). En el modal, en "Obtener enlace", tienen que cambiar la opción a "Cualquier persona con el enlace (Cualquier usuario con Internet con este enlace puede ver esto)

**Paso 3**: Copien el enlace

**Paso 4**: Con el enlace copiado, vayan a https://sheet.best/ y accedan con su cuenta Gmail de correo@uc.cl

**Paso 5**: Ahora tienen que sumar nueva conexión (+ CONNECTION). En *Identification* pongan un nombre sencillo. En *Connection* mantengan el origen en Google Spreadsheets. Y en *Connection URL* peguen el enlace que ya habían copiado (en paso 3)

**Paso 6**: Presionar *CONNECT* y copiar la *CONNECTION URL* para poder usarla en su propio sitio web.

Ahora ya contamos con lo necesario para armar lo que corresponde a la clase de hoy. Para seguir avanzando, conviene pasar al archivo `index.html` contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-12/index.html). 

- - - - - - - 

#### Ejercicio

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-12/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

#### Entregas

| Nº   | Estudiante      | GitHub    | Clase 12 |
|:----:|:----------------|:----------|:-------------------|
| 1    | MARTÍN BENNETT | https://github.com/bennett-martin/ |https://bennett-martin.github.io/dno-clase12-02-06/ |
| 2    | RODRIGO CAMPUSANO | https://github.com/rodrigocampusano | — |
| 3    | PALOMA CARRASCO | https://github.com/palomacarrasco | https://palomacarrasco.github.io/dno037-clase-12/ |
| 4    | VICENTE ESPINOSA | https://github.com/vtespinosa | — |
| 5    | FELIPE FUENTEALBA | https://github.com/leocto | https://leocto.github.io/Nuevos_Medios_12/ |
| 6    | VERÓNICA GATICA | https://github.com/verogatica | https://verogatica.github.io/12clase_dno037/ |
| 7    | MIRKO GONZÁLEZ | https://github.com/mirkogonzalez | https://mirkogonzalez.github.io/clase_12/ |
| 8   | RODRIGO GUZMÁN | https://github.com/rodrigo-bot | https://rodrigo-bot.github.io/dno037-clase12/ |
| 9   | VALENTINA HERRERA | https://github.com/vale-herrera | https://vale-herrera.github.io/dno037-clase-12/ |
| 10   | BETINA HIP | https://github.com/bbhip | https://bbhip.github.io/dno-nuevos-medios-12/ |
| 11   | MARÍA HONORATO | https://github.com/elisahonorato | https://elisahonorato.github.io/elisahonoratolira/ |
| 12   | MARÍA IBÁÑEZ | https://github.com/franibanezm | https://franibanezm.github.io/clase_12/ |
| 13   | MARGARITA MATTE | https://github.com/mar-garita1 | https://mar-garita1.github.io/clase-12/ |
| 14   | CONSTANZA MONTERO | https://github.com/cpmontero | https://cpmontero.github.io/dno_nuevosmedios_clase12/ |
| 15   | VALENTINA MORALES (corte de luz) | https://github.com/lunalaffx | https://lunalaffx.github.io/DNO037-clase12/ |
| 16   | DANIELA ORELLANA | https://github.com/dacorellana | https://dacorellana.github.io/dno-medios-clase-12/ |
| 17   | FRANCISCA PARRA | https://github.com/frnparr | — |
| 18   | YAHAIRA PEREZ | https://github.com/yahairaperez | https://yahairaperez.github.io/clase00012/ |
| 19   | JAVIER RAMÍREZ | https://github.com/rama2432 | https://rama2432.github.io/DNO-clase12/ |
| 20   | MARIO REINIKE | https://github.com/marioreinike | https://marioreinike.github.io/dno037/clase-12/ |
| 21   | VALENTINA REY | https://github.com/valentinarey | https://valentinarey.github.io/clase_12/ |
| 22   | JAVIERA ROBLES | — | — |
| 23   | MIRANDA SEPULVEDA | https://github.com/mirandasepulveda-la | https://mirandasepulveda-la.github.io/actividad_clase_12/ |
| 24   | JOSEFINA TORO | https://github.com/josefinatoro | — |
| 25   | MARGARITA VIAL | https://github.com/margaraitavialm | https://margaraitavialm.github.io/dno_clase12/ |

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-11) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-13)
