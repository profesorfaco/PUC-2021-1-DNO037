// declaras variables y les asignas valores
var header = document.getElementsByTagName('header')[0];
var main = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];
var path = document.location.pathname;
var time = new Date().getHours();
// declaras una variable
var i;
// le asignas valor según la página.
if (path.includes("index")) {
  i = 0;
} else {
  i = new URLSearchParams(window.location.search).get("nro");
}
// declaras una variable
var saludo;
// le asignas valor según la hora.
if (5 < time && time < 12){
    saludo = "Buenos días"
} else if (11 < time && time < 21){
    saludo = "Buenas tardes"
} else{
  saludo = "Buenas noches"
}
// acá está lo que se cargará una vez
function setup(){
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index',-1);
  createElement('h1',saludo).parent(header);
  createP('MENÚ').id('menu').parent(footer);
  createA('index.html','0').addClass("cero").parent('menu');
  createA('page.html?nro=1','1').addClass("uno").parent('menu');
  createA('page.html?nro=2','2').addClass("dos").parent('menu');
  createA('page.html?nro=3','3').addClass("tres").parent('menu');
  if(i == 0){
    portada();
  } else if(i == 1){
    uno();
  } else if(i == 2){
    dos();
  }else if(i == 3){
    tres();
  } else{
    error();
  }
}
// acá está lo que se dibuja una y otra vez
function draw(){
  if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}
// esta función se ejecuta si la variable i contiene el valor 0
function portada(){
  createP("Esta página es index.html").parent(main);
  select("a.cero").style("font-weight","bold");
}
// esta función se ejecuta si la variable i contiene el valor 1
function uno(){
  select("body").style("background","rgb(205,175,175)");
  createP("Esta página es page.html —hiciste clic en el 1").parent(main);
  select("a.uno").style("font-weight","bold");
}
// esta función se ejecuta si la variable i contiene el valor 2
function dos(){
  select('body').style("background","rgb(175,205,175)");
  createP("Esta página es page.html —hiciste clic en el 2").parent(main);
  select("a.dos").style("font-weight","bold");
}
// esta función se ejecuta si la variable i contiene el valor 3
function tres(){
  select('body').style("background","rgb(175,175,205)");
  createP("Esta página es page.html —hiciste clic en el 3").parent(main);
  select("a.tres").style("font-weight","bold");
}
// esta función se ejecuta si la variable i contiene el valor 4
function error(){
  createP("Esta página es page.html —pero algo salió mal").parent(main);
}