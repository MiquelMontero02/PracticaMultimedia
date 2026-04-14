// Función para mostrar la información de los eventos en el DOM
// Función para mostrar información de eventos
async function mostrarInformacionEvento(eventos=null, region='Mallorca') {
    if(!eventos){
        eventos=await fetchContent('assets/json/fires.json').then(events=>JSON.parse(events));    
    };
    // Filtrar y ordenar los eventos por región y fecha
    var eventosRegion = eventos.filter(function (evento) {
            return evento.location.address.addressRegion === region;
        }).sort(function (a, b) {
            return new Date(a.startDate) - new Date(b.startDate);
        });
    
    // Obtener el contenedor de eventos
    var contenedorEventos = document.getElementById('eventos-' + region.toLowerCase());
    contenedorEventos.innerHTML = ''; // Limpiar contenido anterior

    // Mostrar información de los eventos en el DOM
    eventosRegion.forEach((evento) => {
        createFiraContainer(evento, contenedorEventos);
    });
    configFiraFilter(region,eventos);
}


