Papa.parse("https://raw.githubusercontent.com/profesorfaco/dno037-2021/main/clase-11/territorios-electorales.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function (respuesta) {
        console.log(respuesta);

        var regiones = respuesta.data.map(({ region }) => region);
        regiones.splice(0, regiones.length, ...new Set(regiones));
        console.log(regiones);
        regiones.forEach(function (region, i) {
            document.getElementById("aca").innerHTML +=
                '<div class="col-sm-6 col-md-4 col-lg-3"><div class="card h-100 shadow-sm"><img src="images/region-' +
                (i + 1) +
                '.jpg" class="card-img-top"/><div class="card-body"><a href="#" data-bs-toggle="modal" data-bs-target="#unModal"><h3 class="card-title fs-6">' +
                region +
                "</h3></div></div>";
        });

        var link = document.getElementsByTagName("main")[0].getElementsByTagName("a");

        // Busque la lógica y mejórela

        link[0].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[0]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[0];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            var total = 0;
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[1].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[1]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[1];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[2].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[2]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[2];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[3].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[3]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[3];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[4].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[4]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[4];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[5].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[5]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[5];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[6].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[6]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[6];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[7].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[7]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[7];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[8].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[8]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[8];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[9].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[9]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[9];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[10].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[10]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[10];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[11].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[11]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[11];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[12].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[12]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[12];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[13].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[13]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[13];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[14].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[14]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[14];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };

        link[15].onclick = function () {
            var info = [];
            respuesta.data.forEach(function (datos) {
                if (datos.region == regiones[15]) {
                    info.push(datos);
                }
            });
            console.log(info);
            document.getElementById("nombreRegion").innerHTML = regiones[15];
            document.getElementById("contenido").innerHTML = '<table class="table"><thead><tr><th class="text-center">Distrito</th><th>Comuna</th><th class="text-end">Electores</th></tr></thead><tbody></tbody><table class="table">';
            info.forEach(function (elemento) {
                document.getElementsByTagName("tbody")[0].innerHTML +=
                    "<tr><td class='text-center'>" + elemento.distrito + "</td><td>" + elemento.comuna + "</td><td class='text-end'>" + elemento.electores.toLocaleString("es") + "</td></tr>";
            });
        };
    },
});