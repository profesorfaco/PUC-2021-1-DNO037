# Diseño y Nuevos Medios vR2

### Clase 10 → 19/05/2021

### Bootstrap v5

- - - - - - 

[Bootstrap](https://getbootstrap.com/) es un kit de herramientas de código abierto para la implementación de diseño [responsive](https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable) y [mobile-first](https://en.ryte.com/wiki/Mobile_First) de sitios y aplicaciones web. 

Con [Bootstrap](https://getbootstrap.com/) puedes implementar tanto prototipos rápidos como productos acabados, esto mediante el uso de Elementos de HTML5 relacionados con reglas de CSS3 predefinidas con [Sass](https://sass-lang.com/) ([Less](http://lesscss.org/) en versiones de Boostrap anteriores a la 4), además de Javascript simplificado por una biblioteca (que debe complementarse con [jQuery](https://jquery.com/) en versiones de Bootstrap anteriores a la 5)

Hay distintas maneras de comenzar a trabajar con Boostrap. Nosotros vamos a partir con una adaptación de la [Starter template](https://getbootstrap.com/docs/5.0/getting-started/introduction/#starter-template), con un documento HTML que debe verse así: 

```
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <title>DNO037</title>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>
  </body>
</html>
```

Con tal documento HTML listo, podemos comenzar a utilizar una grilla de 12 columnas (`col-…`) dentro de una fila (`row`) que está, a su vez, dentro de un contenedor (`container-`). 

Para seguir avanzando, conviene pasar al archivo `index.html` contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-11/index.html). Allí podemos ver "en acción" las clases:

- `.container` → https://getbootstrap.com/docs/5.0/layout/containers/
- `.row` → https://getbootstrap.com/docs/5.0/layout/columns/
- `.col-` → https://getbootstrap.com/docs/5.0/layout/grid/
- `.py-5` → https://getbootstrap.com/docs/5.0/utilities/spacing/#notation
- `.d-flex` → https://getbootstrap.com/docs/5.0/utilities/flex/#enable-flex-behaviors
- `.align-items-stretch` → https://getbootstrap.com/docs/5.0/utilities/flex/#align-items
- `.shadow` → https://getbootstrap.com/docs/5.0/utilities/shadows/

- - - - - - - 

#### Ejercicio

Ya exploramos el `index.html` contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-10/), pero hay otra página que corresponde hacer un ajuste.

El ejercicio se completa cuando cada estudiante publica, [con GitHub Pages](https://docs.github.com/es/free-pro-team@latest/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), su versión ajustada del sitio web contenido en [esta carpeta de repositorio](https://profesorfaco.github.io/dno037-2021/clase-10/).

El ejercicio completo puede ser evaluado con:

- **0 punto** → no logrado.

- **1 punto** → logrado.

- **2 puntos** → logrado, con aporte descatado.

El ejercicio incompleto es evaluado con 0 punto.

- - - - - - - 

###### [← CLASE ANTERIOR](https://github.com/profesorfaco/dno037-2021/tree/main/clase-08) — [SIGUIENTE CLASE →](https://github.com/profesorfaco/dno037-2021/tree/main/clase-11)
