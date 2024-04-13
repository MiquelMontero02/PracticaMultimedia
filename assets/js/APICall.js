// Función para inicializar el mapa
var mapaIniciado=0;
var map,capa,mapConc,capaConc;
var marcadores=[];
var CoordenadasIlles=[[39.534178, 2.857710],[39.96025378522197, 4.09060689266232],[38.97932847627715, 1.3768946629426013],[38.69142446288327, 1.4719361310701113]];
// Función para inicializar el mapa
function initMapFiltrado() {
    // Coordenadas centrales de las Islas Baleares
    var baleares = [39.534178, 2.857710];
    
    // Inicializar el mapa
        map = L.map('api-map');
        capa=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    modificaMapa('fires','Mallorca');
}

function modificaMapa(filtroCateg,filtroIlla){
    marcadores.forEach(function(marker) {
        map.removeLayer(marker);
    });
    cargarJSONLocal('assets/json/fires.json',function(evento){
        var pueblos = evento;
        if (filtroCateg=='fires'){
            if(filtroIlla=='Mallorca'){
                map.setView(CoordenadasIlles[0],8);

            }
            else if(filtroIlla=='Menorca'){
                map.setView(CoordenadasIlles[1],10);

            }
            else if(filtroIlla=='Eivissa'){
                map.setView(CoordenadasIlles[2],10);

            }
            //else{}
        }
        pueblos.forEach(function(event){
            var pueblo= { nombre:event.location.address.addressLocality,coordenadas:[event.location.geo.latitude,event.location.geo.longitude]};
            pueblos.push(pueblo); 
            var marker=L.marker(pueblo.coordenadas);
            var button=document.createElement('button');
            button.textContent=event.about;
            button.classList.add('btn');
            button.addEventListener('click',function(){
                mostrarInformacionEventoEspecifico(event,document.getElementById('main').innerHTML,'#event');
            });
            marker.addTo(map);
            marker.bindPopup(button);
            marcadores.push(marker);
        });
        });
}

function initMapEspecific(evento) {
    // Coordenadas centrales de las Islas Baleares
    var foco = [evento.location.geo.latitude, evento.location.geo.longitude];   
    console.log(foco); 
    mapConc= L.map('api-map-conc').setView(foco, 12);
    capaConc=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapConc);

    console.log("Añadadido contenido de "+evento.location.address.addressLocality);
}

function recargarMapa(filtroCateg,filtroIlla){
    document.getElementById('contenedorMapa').innerHTML='<div id="api-map"></div>';
    initMapFiltrado();
    modificaMapa(filtroCateg,filtroIlla)

}