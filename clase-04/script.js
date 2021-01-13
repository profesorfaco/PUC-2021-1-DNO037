// Podemos definir algunas variables globales

var a = 18261884;
var b = 24.15267252;
var c = true;
var d = "Lisa the Vegetarian";
var e = ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Lisa Simpson", "Maggie Simpson"];
var f = {
    mom: "Luann Van Houten",
    dad: "Kirk Van Houten",
    child: "Milhouse Van Houten"
};
var g = {
    mom: "Marge Simpson",
    dad: "Homer Simpson",
    children: ["Bart Simpson", "Lisa Simpson", "Maggie Simpson"]
};
var h = [{
        mom: "Luann",
        dad: "Kirk",
        children: ["Milhouse"]
    },
    {
        mom: "Marge",
        dad: "Homer",
        children: ["Bart", "Lisa", "Maggie"]
    },
    {
        mom: "Manjula",
        dad: "Apu",
        children: ["Poonam", "Sashi", "Pria", "Uma", "Anoop", "Sandeep", "Nabendu", "Gheet"]
    }
];

// Podemos hacer algunos ajustes en las variables, redefiniéndolas con algunos métodos de JavaScript

a = a.toLocaleString('es');

b = b.toLocaleString('es');

// También podemos sumar nuevas variables, que contengan partes de otras, ordenadas alfabéticamente

var octillizos = h[2].children.sort();

// Podemos crear una variable que nos permitirá dejar lo creado donde corresponda

var principal = document.getElementsByTagName('main')[0];


function setup() {
    noCanvas();
    createP("Chile tiene " + a + " habitantes. Su densidad poblacional es de " + b + " hab/km²").parent(principal);
    if (c == true) {
        createP('Sí me gustó el capítulo «' + d + '»').parent(principal);
    } else {
        createP('No me gustó el capítulo «' + d + '»').parent(principal);
    }
    createP('Prefiero a ' + e[0]).parent(principal);
    createP('Fue ' + f.dad + ' quien intentó dibujar la dignidad').parent(principal);
    createP('El chupete de ' + g.children[2]).parent(principal);
    createP('Los nombres de los octillizos Nahasapeemapetilon:').parent(principal);
    createElement("ol").parent(principal).id("listado");
    octillizos.forEach(function (nombre) {
        createElement('li', nombre).parent('listado');
    });
}