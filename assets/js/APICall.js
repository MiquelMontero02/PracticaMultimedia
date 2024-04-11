// Función para inicializar el mapa
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
function initMapFiltrado(filtro) {
    // Coordenadas centrales de las Islas Baleares
    var baleares = [39.534178, 2.857710];
    
    // Inicializar el mapa
    var map = L.map('api-map').setView(baleares, 8);

    // Capa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    cargarJSONLocal('fires.json',function(evento){
    var pueblos = [];
    if (filtro=='fires'){
        if(filtro=='Mallorca'){
            pueblos=evento.filter
        }
        else if(filtro=='Menorca'){}
        else if(filtro=='Eivisa'){}
        else{}
    }
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