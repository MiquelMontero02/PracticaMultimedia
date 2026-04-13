async function initMapFiltrado() {
    // Inicializar el mapa
        map = L.map('api-map');
        capa=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        markerLayer=L.layerGroup().addTo(map);
        asociarAcciones();
    modificaMapa('fires','Mallorca');
}

async function modificaMapa(filtroCateg,filtroIlla){
    const mapcontainer=document.getElementById('api-map');
    const mapInitialized = mapcontainer.getAttribute('data-map-initialized');
    if(mapInitialized){
    marcadores.forEach(function(marker) {
        map.removeLayer(marker);
    });
    CargarJSON();
       if (filtroCateg=='fires'){
            if(filtroIlla=='Mallorca'){
                map.setView(CoordenadasIlles[0],8);
            }
            else if(filtroIlla=='Menorca'){
                map.setView(CoordenadasIlles[1],10);

            }
            else if(filtroIlla=='Eivissa'){
                map.setView(CoordenadasIlles[2],10);
            }else if(filtroIlla=='Formentera'){
                map.setView(CoordenadasIlles[3],10)
            }
        //CargarJSONCompañeros('https://artesaniamallorca.com/JSONs/eventos.json',2);
        //CargarJSONCompañeros('https://www.descobreixteatre.com/assets/json/Teatre.json',1);
        }
    }
}

 async function initMapEspecific(evento) {
    const mapContainer = document.getElementById('map');
    const map = L.map(mapContainer).setView([evento.location.geo.latitude, evento.location.geo.longitude], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker=L.marker([evento.location.geo.latitude,evento.location.geo.longitude]).addTo(map);
    marker.bindPopup(evento.name).openPopup();

}

function recargarMapa(filtroCateg,filtroIlla){
    document.getElementById('contenedorMapa').innerHTML='<div id="api-map"></div>';
    initMapFiltrado();
    modificaMapa(filtroCateg,filtroIlla);
}
async function filterMarkers() {
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    var types = Array.from(checkboxes).map(function(checkbox) {
        return checkbox.value;
    });
    markerLayer.eachLayer(function(marker) {
        if (types.includes(marker.options.type)) {
            marker.addTo(map);
        } else {
            marker.removeFrom(map);
        }
    });
}
async function asociarAcciones(){
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', filterMarkers);
    });
}
async function CargarLibreria(){
    let link=document.createElement('link');
    link.href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/leaflet.css";
    link.rel="stylesheet";
    document.head.appendChild(link);
}
