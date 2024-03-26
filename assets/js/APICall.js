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

    // Marcadores para los pueblos
    var pueblos = [
        { nombre: 'Manacor', coordenadas: [39.5696, 3.2090] },
        { nombre: 'Inca', coordenadas: [39.7219, 2.9087] },
        { nombre: 'Campos', coordenadas: [39.4274, 3.0196] }
    ];
    // Añadir marcadores al mapa
    pueblos.forEach(function(pueblo) {
        var marker=L.marker(pueblo.coordenadas)
        var boton="<p data-content='vaques'>"+pueblo.nombre+"</p>"
        //boton.addEventListener('click',cargarContenidoEspecifico);
            marker.addTo(map)
            marker.bindPopup(boton);
            marker.openPopup();
            marker.on('click', function(event){cargarContenidoEspecifico});
    });
}

// Llamar a la función de inicialización del mapa cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function() {
    initMap();
});

