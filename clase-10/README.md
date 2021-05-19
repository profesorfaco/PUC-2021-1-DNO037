### Diseño y Nuevos Medios → Clase 10 → 19/05/2021

# Bootstrap v5

### Lectura

[Bootstrap](https://getbootstrap.com/) es un kit de herramientas de código abierto para la implementación de diseño [responsive](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable) y [mobile-first](https://en.ryte.com/wiki/Mobile_First) de sitios y aplicaciones web. 

Con [Bootstrap](https://getbootstrap.com/) puedes implementar tanto prototipos rápidos como productos acabados, esto mediante el uso de Elementos de HTML5 relacionados con reglas de CSS3 predefinidas con [Sass](https://sass-lang.com/) ([Less](http://lesscss.org/) en versiones de Boostrap anteriores a la 4), además de Javascript simplificado por una biblioteca (que debe complementarse con [jQuery](https://jquery.com/) en versiones de Bootstrap anteriores a la 5)

- - - - - - 

### Exploración

Hay distintas maneras de comenzar a trabajar con Boostrap. Nosotros vamos a partir con una adaptación de la [Starter template](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template), con un documento HTML que debe verse así: 

```
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <title>DNO037</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
  </body>
</html>
```

En el cuerpo de tal documento HTML (`<body></body>`) podemos comenzar a utilizar las clases del CSS de Bootstrap, que nos permiten tomar de 1 a 12 columnas (`class="col"`) en cada fila (`class="row"`) que esté dentro de un contenedor (`class="container"`). 

Antes de continuar, es recomendable revisar:

- Containers → https://getbootstrap.com/docs/5.0/layout/containers/
- Grid system → https://getbootstrap.com/docs/5.0/layout/grid/
- Columns → https://getbootstrap.com/docs/5.0/layout/columns/
- Gutters → https://getbootstrap.com/docs/5.0/layout/gutters/

Después de revisar las páginas recién vinculadas, conviene pasar al archivo `index.html`, contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-10/index.html). En tal archivo se aprovechan varias definiciones más; para comprenderlas, conviene tener a mano la [documentación de Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/#important-globals).

- - - - - - - 

### Práctica

Hoy reciclaremos: El ejercicio se completa cuando cada estudiante publique, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), un *remake* del trabajo de la [clase anterior](https://github.com/profesorfaco/dno037-2021/tree/main/clase-08#entregas), utilizando Bootstrap.

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-08) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-11)
