// puedes declaras variables y asignarles valores directamente
var header = document.getElementsByTagName("header")[0];
var main = document.getElementsByTagName("main")[0];
var footer = document.getElementsByTagName("footer")[0];
var path = document.location.pathname;
var time = new Date().getHours();
// puedes declarar una variables
var i;
// puedes asignar valor a la variable declarada según una condición
if (document.body.classList.contains("portada")) {
    i = 0;
} else {
    i = new URLSearchParams(window.location.search).get("n");
}
// otro ejemplo de declaración y asignación de valor por condición
var saludo;
if (5 < time && time < 12) {
    saludo = "Buenos días";
} else if (11 < time && time < 21) {
    saludo = "Buenas tardes";
} else {
    saludo = "Buenas noches";
}
// también puedes declarar variables que tomarán datos
var colorido, grosor;
// lo que pasó fue JavaScript a secas, lo que sigue es p5.js
function setup() {
    createCanvas(windowWidth, windowHeight).position(0, 0).style("z-index", -1);
    createElement("h1", "Hola. " + saludo + ".").parent(header);
    createP("MENÚ").id("menu").parent(footer);
    createA("index.html", "0").addClass("cero").parent("menu");
    createA("page.html?n=1", "1").addClass("uno").parent("menu");
    createA("page.html?n=2", "2").addClass("dos").parent("menu");
    createA("page.html?n=3", "3").addClass("tres").parent("menu");
    if (i == 0) {
        portada();
    } else if (i == 1) {
        uno();
    } else if (i == 2) {
        dos();
    } else if (i == 3) {
        tres();
    } else {
        error();
    }
    colorido = createColorPicker("#000000").parent(main);
    grosor = createSlider(1, 5, 3).parent(main);
}
// acá está lo que se dibuja una y otra vez
function draw() {
    stroke(colorido.color());
    strokeWeight(grosor.value());
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
// esta función se ejecuta si la variable i contiene el valor 0
function portada() {
    createP("Estás en index.html").parent(main);
    select("a.cero").style("font-weight", "bold");
}
// esta función se ejecuta si la variable i contiene el valor 1
function uno() {
    createP("Estás en page.html —hiciste clic en el 1").parent(main);
    select("body").style("background", "rgb(205,175,175)");
    select("a.uno").style("font-weight", "bold");
}
// esta función se ejecuta si la variable i contiene el valor 2
function dos() {
    createP("Estás en page.html —hiciste clic en el 2").parent(main);
    select("body").style("background", "rgb(175,205,175)");
    select("a.dos").style("font-weight", "bold");
}
// esta función se ejecuta si la variable i contiene el valor 3
function tres() {
    createP("Estás en page.html —hiciste clic en el 3").parent(main);
    select("body").style("background", "rgb(175,175,205)");
    select("a.tres").style("font-weight", "bold");
}
// esta función se ejecuta si la variable i contiene otro valor
function error() {
    createP("Estás en page.html —pero hay algo salió mal").parent(main);
}