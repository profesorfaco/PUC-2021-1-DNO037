document.getElementById("grafico").getContext("2d").fillText("Esperando la selección del índice…", 8, 24);

var noticias = [
    { titulo: "Loren ipsum dolor sit amet", bajada: "Nullam dignissim odio sit amet nunc eleifend viverra. Integer in convallis est.", url: "#", img: "images/loren-ipsum.png" },
    { titulo: "Loren ipsum dolor sit amet", bajada: "Nam eget scelerisque metus. Duis porttitor ac augue egestas ullamcorper", url: "#", img: "images/loren-ipsum.png" },
    { titulo: "Loren ipsum dolor sit amet", bajada: "Nullam dignissim odio sit amet nunc eleifend viverra. Integer in convallis est.", url: "#", img: "images/loren-ipsum.png" },
    { titulo: "Loren ipsum dolor sit amet", bajada: "Nam eget scelerisque metus. Duis porttitor ac augue egestas ullamcorper", url: "#", img: "images/loren-ipsum.png" },
];

noticias.forEach(function (noticia) {
    $("aside").append('<div><img src="' + noticia.img + '"><h2><a href="' + noticia.url + '" target="_blank">' + noticia.titulo + "</a></h2><p>" + noticia.bajada + "</p></div>");
});

var indicador;
$('input[name="indicador"]').change(function () {
    indicador = $(this).val();
    console.log(indicador);
    $.getJSON("https://mindicador.cl/api/" + indicador, function (data) {
        console.log(data);
        var x = data.serie.map(({ fecha }) => fecha.split("T")[0]);
        var y = data.serie.map(({ valor }) => valor);
        x.reverse();
        y.reverse();
        new Chart(document.getElementById("grafico").getContext("2d"), {
            type: "line",
            data: {
                labels: x,
                datasets: [
                    {
                        data: y,
                        label: data.nombre,
                        backgroundColor: "rgba(55, 55, 55, 0.55)",
                        borderColor: "rgba(100, 100, 100, 1)",
                        pointRadius: 2,
                        borderWidth: 1,
                        lineTension: 0,
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            },
        }); // cierra new Chart
        $("button").removeClass("escondido");
    }).fail(function () {
        document.getElementById("grafico").getContext("2d").fillText("¡Falló la carga de los datos!", 6, 39);
    });
});