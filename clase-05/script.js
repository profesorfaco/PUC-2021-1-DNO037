/* 
Índice de intesidad de uso del cobre por país en Datos.gob (repositorio de datos abiertos centralizado del Estado)
Fuente: https://datos.gob.cl/dataset/indice-de-intesidad-de-uso-del-cobre-por-pais/resource/6b2ce9f5-f23a-41ef-961a-1e9939e00c10
Preferí "limpiar" los datos antes de utilizarlos. La versión "limpia" la dejé en GitHub
*/
Papa.parse("https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-05/indice-uso-cobre.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function (respuesta) {
        // asómense a la consola para ver toda la respuesta
        console.log(respuesta);
        // necesitamos solo una parte de toda la respuesta
        var datos = respuesta.data;
        // para eliminar una fila de sobra al final, borrar el doble slash en la siguiente línea
        // datos.pop();

        if (document.body.classList.contains("portada")) {
            datos.forEach(function (dato, i) {
                document.getElementsByTagName("section")[0].innerHTML += "<article><a href='page.html?pais=" + i + "'>" + dato.pais + "</article>";
            }); // cierra el forEach
        } else {
            var f = new URLSearchParams(window.location.search).get("pais");
            console.log(f);
            if(window.innerHeight > window.innerWidth){
                document.getElementById("grafico").setAttribute("height", "75");
            }
            if (f !== null) {
                document.querySelector("h2").append(datos[f].pais);
                var indice = [];
                indice.push(datos[f].diez);
                indice.push(datos[f].once);
                indice.push(datos[f].doce);
                indice.push(datos[f].trece);
                indice.push(datos[f].catorce);
                indice.push(datos[f].quince);
                indice.push(datos[f].dieciseis);
                new Chart(document.getElementById("grafico").getContext("2d"), {
                    type: "line",
                    data: {
                        labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
                        datasets: [
                            {
                                data: indice,
                                backgroundColor: "rgba(4, 52, 71, .1)",
                                borderColor: "rgba(4, 52, 71, 1)",
                                pointRadius: 2,
                                borderWidth: 1,
                                lineTension: 0,
                            },
                        ],
                    },
                    options: {
                        layout: {
                            padding: { left: 15, right: 20, top: 20, bottom: 10
                            }
                        },
                        legend: {
                            display: false,
                        },
                        scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        fontColor: "rgba(4, 52, 71, 0.75)",
                                        fontFamily: "monospace",
                                        fontSize: 11,
                                    },
                                },
                            ],
                            xAxes: [
                                {
                                    ticks: {
                                        fontColor: "rgba(4, 52, 71, 0.75)",
                                        fontFamily: "monospace",
                                        fontSize: 11,
                                    },
                                },
                            ],
                        },
                    },
                }); // cierra new Chart
            } else {
                document.getElementsByTagName("h1")[0].innerHTML = "Algo salió mal &#128557;";
            } // cierra else
        } // cierra else
    }, // cierra function(respuesta){}
}); // cierra Papa.parse