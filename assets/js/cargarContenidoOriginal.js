function cargarContenidoOriginal(Main, evento) {
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

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
        recargarMapa('fires', 'Mallorca');
        document.getElementById('QSM').addEventListener('click', function () { CambiarMain() });

     
        
    });

    startCalendari();
}

async function cargarContenidoOriginalQSM(Main){
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Limpiar contenido anterior del calendario
    var eventosContainer = document.getElementById('ProximosEventos');
    if (eventosContainer) {
        eventosContainer.innerHTML = '';
    }

    // Obtener todos los elementos con la clase "refreshButton"
    start();
    cargarJSONLocal('assets/json/fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
        recargarMapa('fires','Mallorca');
        startCalendari();
        document.getElementById('QSM').addEventListener('click',function(){CambiarMain()});
    });

}
