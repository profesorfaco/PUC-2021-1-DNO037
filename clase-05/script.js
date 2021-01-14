/* 
Índice de intesidad de uso del cobre por país en Datos.gob (repositorio de datos abiertos centralizado del Estado)
Fuente: https://datos.gob.cl/dataset/indice-de-intesidad-de-uso-del-cobre-por-pais/resource/6b2ce9f5-f23a-41ef-961a-1e9939e00c10
Preferí "limpiar" los datos antes de utilizarlo, la versión "limpia" la dejé en GitHub
Recurso: https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-05/indice-uso-cobre.csv
*/
Papa.parse("https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-05/indice-uso-cobre.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function (respuesta) {
        console.log(respuesta);
        var datos = respuesta.data;
        // en caso resulte una última fila con "basurita", usar datos.pop();
        var url = window.location.pathname;
        if (url.includes("index") || url.length == 0 || url == '/') {
            datos.forEach(function (dato, i) {
                document.getElementsByTagName("tbody")[0].innerHTML += "<tr><td><a href='page.html?id=" + i + "'>" + dato.pais + "</td><td>" + dato.diez + "</td><td>" + dato.once + "</td><td>" + dato.doce + "</td><td>" + dato.trece + "</td><td>" + dato.catorce + "</td><td>" + dato.quince + "</td><td>" + dato.dieciseis + "</td></tr>";
            });
        } else {
            var x = new URLSearchParams(window.location.search).get("id");
            document.getElementsByTagName("h1")[0].append(datos[x].pais);
            // crear un arreglo y empujarle elementos
            var indice = [];
            indice.push(datos[x].diez);
            indice.push(datos[x].once);
            indice.push(datos[x].doce);
            indice.push(datos[x].trece);
            indice.push(datos[x].catorce);
            indice.push(datos[x].quince);
            indice.push(datos[x].dieciseis);
            // un inception de bibliotecas de JavaScript
            new Chart(document.getElementById("grafico").getContext("2d"), {
                type: "line",
                data: {
                    labels: [2010, 2011, 2012, 2013, 2014, 2015, 2016],
                    datasets: [
                        {
                            label: "Índice de intesidad de uso del cobre",
                            data: indice,
                            backgroundColor: "rgba(184, 115, 51, 0.5)",
                            borderColor: "rgba(184, 115, 51, 1)",
                            pointRadius: 2,
                            borderWidth: 1,
                            lineTension: 0,
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                }
                            }
                        ]
                    }
                }
            }); // cierra new Chart
        } // cierra else
    } // cierra function(respuesta){} 
}); // cierra Papa.parse
