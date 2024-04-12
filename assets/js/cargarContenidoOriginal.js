function cargarContenidoOriginal(Main,evento) {
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Obtener todos los elementos con la clase "refreshButton"
    start();
    cargarJSONLocal('fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        recargarMapa('fires',evento.location.address.addressRegion);
    });
    startCalendari();
}