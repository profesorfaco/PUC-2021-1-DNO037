$(document).ready(function () {
    $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson", function (data) {
        console.log(data);
        if (document.getElementsByTagName("body")[0].classList.contains("portada")) {
            data.features.forEach(function (temblor, i) {
                let division;
                if((temblor.properties.mag >= 6) || (temblor.properties.place.includes("Chile"))){
                    division = '<div style="background:rgb(255,255,255)">'
                } else {
                    division = '<div>'
                }
                $("main").append(division + "<h3>" + temblor.properties.mag + "</h3><p>" + temblor.properties.place + "</p><small><a href='page.html?n=" + i + "'>ver mapa</a></small></div>");
            });
        } else {
            let x = new URLSearchParams(window.location.search).get("n");
            if (x !== null) {
                let nombre = data.features[x].properties.title;
                let longitud = data.features[x].geometry.coordinates[0];
                let latitud = data.features[x].geometry.coordinates[1];
                let more = data.features[x].properties.url;
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
                $("footer p").append("<a href='" + more + "' style='float:right' target='_blank' rel='noopener noreferrer'>Más detalles +</a>")
            } else {
                $("h1").append("Algo salió mal &#128557;");
            } // cierro un else
        } // cierro un else
    }); // cierro $.getJSON({})
}); //cierro ready(function(){})