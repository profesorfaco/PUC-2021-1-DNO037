$(document).ready(function () {
    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function (data) {
        console.log(data);
        if (document.body.classList.contains("portada")) {
            data.features.forEach(function (temblor, i) {
                let division;
                if (temblor.properties.place.includes("Chile")) {
                    division = '<div class="chileno">';
                } else {
                    division = "<div>";
                }
                $("section").append(division + "<h2>" + temblor.properties.mag + "</h2><p>" + temblor.properties.place + "</p><p><a href='page.html?temblor=" + i + "'>ver mapa</a></p></div>");
            });
        } else {
            let t = new URLSearchParams(window.location.search).get("temblor");
            if (t !== null) {
                let nombre = data.features[t].properties.title;
                let longitud = data.features[t].geometry.coordinates[0];
                let latitud = data.features[t].geometry.coordinates[1];
                let more = data.features[t].properties.url;
                $("h1").append(nombre);
                let elmapa = L.map("mapa").setView([latitud, longitud], 3);
                L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
                    maxZoom: 18,
                    id: "mapbox/light-v10",
                    tileSize: 512,
                    zoomOffset: -1,
                }).addTo(elmapa);
                circle = L.circle([latitud, longitud], {
                    fillColor: "#FF4500",
                    fillOpacity: 0.8,
                    weight: 0,
                    radius: 100000,
                }).addTo(elmapa);
                $("footer p").append('<a href="' + more + '" style="float:right" target="_blank" rel="noopener noreferrer">Más detalles</a>');
            } else {
                $("h1").append("Algo salió mal &#128557;");
            } // cierro un else
        } // cierro un else
    }); // cierro $.getJSON({})
}); //cierro ready(function(){})