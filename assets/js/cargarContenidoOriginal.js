function cargarContenidoOriginal(Main, evento) {
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Obtener todos los elementos con la clase "refreshButton"
    start();
    cargarJSONLocal('assets/json/fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        recargarMapa('fires', evento.location.address.addressRegion);
        document.getElementById('QSM').addEventListener('click', function () { CambiarMain() });

        // Establecer la opción seleccionada del select según lo almacenado en localStorage
        var selectedValue = localStorage.getItem('selectedOption');
        var ordenDropdown = document.getElementById('ordenDropdown');
        if (selectedValue) {
            ordenDropdown.value = selectedValue;
        }
    });

    startCalendari();
}
async function cargarContenidoOriginalQSM(Main){
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Obtener todos los elementos con la clase "refreshButton"
    start();
    cargarJSONLocal('assets/json/fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        recargarMapa('fires','Mallorca');
        document.getElementById('QSM').addEventListener('click',function(){CambiarMain()});
    });

    startCalendari();
}