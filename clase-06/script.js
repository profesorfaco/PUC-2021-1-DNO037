$(document).ready(function () {
    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function (data) {
        console.log(data);
        if (document.body.classList.contains("portada")) {
            data.features.forEach(function (temblor, i) {
                var articuloTipo;
                if (temblor.properties.place.includes("Chile")) {
                    articuloTipo = '<article class="local">';
                } else {
                    articuloTipo = '<article class="global">';
                }
                $("section").append(articuloTipo + "<h2>" + temblor.properties.mag + "</h2><p>" + temblor.properties.place + "</p><p><a href='page.html?temblor=" + i + "'>ver mapa</a></p></article>");
            });
            var valor;
            $('#opciones').change(function(){
                valor = $("input[name='paises']:checked").val();
                if(valor == "chile"){
                    $(".local").fadeTo("slow",1);
                    $(".global").fadeTo("slow",0.1);
                } else {
                    $(".local").fadeTo("slow",1);
                    $(".global").fadeTo("slow",1);
                }
            }); 
        } else {
            var t = new URLSearchParams(window.location.search).get("temblor");
            if (t !== null) {
                var nombre = data.features[t].properties.title;
                var longitud = data.features[t].geometry.coordinates[0];
                var latitud = data.features[t].geometry.coordinates[1];
                var more = data.features[t].properties.url;
                var elmapa = L.map("mapa").setView([latitud, longitud], 3);
                L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
                    maxZoom: 18,
                    id: "mapbox/dark-v10",
                    tileSize: 512,
                    zoomOffset: -1,
                }).addTo(elmapa);
                circle = L.circle([latitud, longitud], {
                    fillColor: "#0079F6",
                    fillOpacity: 0.75,
                    weight: 2,
                    radius: 100000,
                })
                    .addTo(elmapa)
                    .on("click", vinculo);
                function vinculo() {
                    window.open(more, "_blank", "noopener");
                }
                $("header h2").append(" — " + nombre);
            } else {
                $("h2").append(" — Algo salió mal &#128557;");
            } // cierro un else
        } // cierro otro else
    }); // cierro $.getJSON({})
}); //cierro ready(function(){})