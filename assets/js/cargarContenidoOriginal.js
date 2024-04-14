function cargarContenidoOriginal(Main, evento) {
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Obtener el valor seleccionado del menú desplegable de orden
    var ordenDropdown = document.getElementById('ordenDropdown');
    var selectedOption = ordenDropdown.getAttribute('data-selected-option');

    // Cargar JSON y mostrar información de eventos
    cargarJSONLocal('assets/json/fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        recargarMapa('fires', evento.location.address.addressRegion);
        document.getElementById('QSM').addEventListener('click', function () {
            CambiarMain()
        });

        // Restaurar el valor del menú desplegable de orden
        ordenDropdown.value = selectedOption;
    });

    startCalendari();
}
