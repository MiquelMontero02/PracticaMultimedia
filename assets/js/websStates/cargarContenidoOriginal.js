async function cargarContenidoOriginal(Main=null) {
    var mainContent = await fetchContent('./assets/templates/landingPageMain.html')
    document.getElementById('main').innerHTML = mainContent;
    // Limpiar contenido anterior del calendario
    var eventosContainer = document.getElementById('ProximosEventos');
    if (eventosContainer) {
        eventosContainer.innerHTML = '';
    }

    // Obtener todos los elementos con la clase "refreshButton"
    start();
    cargarJSONLocal('assets/json/fires.json', function (eventos) {
           // Establecer la opción seleccionada del select según lo almacenado en localStorage
        var selectedValue = localStorage.getItem('selectedOption');
        var ordenDropdown = document.getElementById('ordenDropdown');
        if (selectedValue) {
            ordenDropdown.value = selectedValue;
        }
        
        // Acceder a la variable global para obtener el nav item seleccionado
        var region;
        if (selectedNavItem) {
            region= selectedNavItem.getAttribute('data-region');
            switch(selectedValue) {
                case 'distancia':
                    obtenerUbicacionUsuario(region);
                    break;
                case 'fecha':
                  
                        mostrarInformacionEvento(eventos,region,false);                    
                 
                    break;
                default:
                    mostrarInformacionEvento(eventos,region,false);  
            }
            
        } else {
            // Si no hay ningún nav item activo, muestra los eventos de Mallorca por defecto
            mostrarInformacionEvento(eventos, 'Mallorca',false);
        }
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        paradaSpeech(),
        recargarMapa('fires', region);
        document.getElementById('QSM').addEventListener('click', function () { CambiarMain() });

     
        
    });
}

async function cargarContenidoOriginalQSM(Main){
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Limpiar contenido anterior del calendario
    var eventosContainer = document.getElementById('ProximosEventos');
    if (eventosContainer) {
        eventosContainer.innerHTML = '';
    }

    start();

}
