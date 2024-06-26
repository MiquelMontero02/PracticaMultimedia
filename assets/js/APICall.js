// Función para inicializar el mapa
var mapaIniciado=0;
var map,capa,mapConc,capaConc,markerLayer;
var marcadores=[];
var CoordenadasIlles=[[39.534178, 2.857710],[39.96025378522197, 4.09060689266232],[38.97932847627715, 1.3768946629426013],[38.69142446288327, 1.4719361310701113]];
// Función para inicializar el mapa
function CargarJSONCompañeros(url,opc){
    fetch(url)
    .then(response => response.json()) // o .text(), .blob(), etc.
    .then(data => {
        switch(opc){
            //Fires Artesanes
            case 1:   
                data.itemListElement.forEach(item =>{

                var marker=L.marker([item.geo.latitude,item.geo.longitude],{icon:L.icon({
                    iconUrl:"/assets/img/iconoTeatres.svg",
                    iconSize:[20,20]
                })});
                marker.options.type='Teatres';
                marker.addTo(markerLayer);
                marcadores.push(marker);
                marker.bindPopup('<a href="https://www.descobreixteatre.com" target="_blank">'+item.name+'</a>');    
                });
                filterMarkers();
                break;
                case 2:
                    data.itemListElement.forEach(item=>{
                        var icono=L.icon({
                            iconUrl:"/assets/img/iconoArtesana.svg",
                            iconSize:[20,20]
                        });
                            var pueblo= { nombre:item.location.address.addressLocality,coordenadas:[item.location.geo.latitude,item.location.geo.longitude]};
                            var marker=L.marker(pueblo.coordenadas, {icon:icono});
                            marker.options.type='Restaurants';
                            marker.addTo(markerLayer);
                            marker.bindPopup('<a href="https://www.artesaniamallorca.com/events.html" target="_blank">'+item.name+'</a>');
                            marcadores.push(marker);  

                    });
                    filterMarkers();
                    break;
                    case 3:
                        break;
                        //Nostro
                        default:
                            data.forEach(item=>{
                                var icono=L.icon({
                                    iconUrl:"/assets/img/iconSearch.svg",
                                    iconSize:[20,20]
                                });
                                    var pueblo= { nombre:item.location.address.addressLocality,coordenadas:[item.location.geo.latitude,item.location.geo.longitude]};
                                    var marker=L.marker(pueblo.coordenadas, {icon:icono});
                                    marker.options.type='Fira';
                                    var button=document.createElement('button');
                                    button.textContent=item.name;
                                    button.classList.add('btn');
                                    button.addEventListener('click',function(){
                                        mostrarInformacionEventoEspecifico(item,document.getElementById('main').innerHTML,'#event');
                                    });
                                    button.innerHTML='<p>'+item.name+'</p>'
                                    marker.addTo(markerLayer);
                                    marker.bindPopup(button);
                                    marcadores.push(marker);  
                                });
                            break;
        }
    })
    .catch(error => console.error('Error:', error));}
async function initMapFiltrado() {
    CargarLibreria();
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
    if(map){
    marcadores.forEach(function(marker) {
        map.removeLayer(marker);
    });
    CargarJSONCompañeros('https://www.firabalear.com/assets/json/fires.json',0);
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
        CargarJSONCompañeros('https://artesaniamallorca.com/JSONs/eventos.json',2);
        CargarJSONCompañeros('https://www.descobreixteatre.com/assets/json/Teatre.json',1);
        }
    }
}

 async function initMapEspecific(evento) {
  CargarLibreria();
    // Coordenadas centrales de las Islas Baleares
    var foco = [evento.location.geo.latitude, evento.location.geo.longitude];   
    mapConc= L.map('api-map-conc').setView(foco, 12);
    capaConc=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapConc);
    

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
