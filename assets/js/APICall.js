// Función para inicializar el mapa
var mapaIniciado=0;ç
var map;
function initMap() {
    // Coordenadas centrales de las Islas Baleares
    var baleares = [39.534178, 2.857710];
    
    // Inicializar el mapa
    var map = L.map('api-map').setView(baleares, 8);

    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


    var pueblos = [
    ];
    cargarJSONLocal('fires.json',function(evento){
        evento.forEach(function(event){
            var pueblo= { nombre:event.location.address.addressLocality,coordenadas:[event.location.geo.latitude,event.location.geo.longitude]};
            pueblos.push(pueblo) 
            var marker=L.marker(pueblo.coordenadas)
            var button=document.createElement('button');
            button.textContent=event.about;
            button.classList.add('btn');
            button.addEventListener('click',function(){
                mostrarInformacionEventoEspecifico(event,document.getElementById('main').innerHTML,'#event');
            });
            //boton.addEventListener('click',cargarContenidoEspecifico);
                marker.addTo(map)
                marker.bindPopup(button); 
        });
    });
}

// Función para inicializar el mapa
function initMapFiltrado(filtroCateg,filtroIlla) {
    // Coordenadas centrales de las Islas Baleares
    var baleares = [39.534178, 2.857710];
    
    // Inicializar el mapa
    if(mapaIniciado==0){
        map = L.map('api-map').setView(baleares, 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        mapaIniciado=1;

    }else{
        map.addLayer
    }
    
    // Capa de OpenStreetMap

    cargarJSONLocal('fires.json',function(evento){
    var pueblos = [];
    if (filtroCateg=='fires'){
        if(filtroIlla=='Mallorca'){
            pueblos= evento.filter(function (event) {
                return event.location.address.addressRegion === 'Mallorca';
            }).sort(function (a, b) {
                return new Date(a.startDate) - new Date(b.startDate);
            });
        }
        else if(filtroIlla=='Menorca'){
            pueblos= evento.filter(function (event) {
                return event.location.address.addressRegion === 'Menorca';
            }).sort(function (a, b) {
                return new Date(a.startDate) - new Date(b.startDate);
            });
        }
        else if(filtroIlla=='Eivisa'){
            pueblos= evento.filter(function (event) {
                return event.location.address.addressRegion === 'Eivisa';
            }).sort(function (a, b) {
                return new Date(a.startDate) - new Date(b.startDate);
            });
        }
        else{}
    }
        pueblos.forEach(function(event){
            var pueblo= { nombre:event.location.address.addressLocality,coordenadas:[event.location.geo.latitude,event.location.geo.longitude]};
            pueblos.push(pueblo) 
            var marker=L.marker(pueblo.coordenadas)
            var button=document.createElement('button');
            button.textContent=event.about;
            button.classList.add('btn');
            button.addEventListener('click',function(){
                mostrarInformacionEventoEspecifico(event,document.getElementById('main').innerHTML,'#event');
            });
            //boton.addEventListener('click',cargarContenidoEspecifico);
                marker.addTo(map)
                marker.bindPopup(button); 
        });
    });
}

function initMapEspecific(evento) {
    // Coordenadas centrales de las Islas Baleares
    var foco = [evento.location.geo.latitude, evento.location.geo.longitude];
    
    // Inicializar el mapa
    var map = L.map('api-map').setView(foco, 12);

    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    console.log("Añadadido contenido de "+evento.location.address.addressLocality);
}