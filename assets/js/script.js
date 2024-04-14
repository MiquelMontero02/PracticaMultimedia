// Función para cargar el JSON desde un archivo local
function cargarJSONLocal(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send(null);
}




// Función para mostrar la información de los eventos en el DOM
function mostrarInformacionEvento(eventos, region) {
    // Filtrar los eventos cuya región sea la seleccionada y ordenar por fecha
    var eventosRegion = eventos.filter(function (evento) {
        return evento.location.address.addressRegion === region;
    }).sort(function (a, b) {
        return new Date(a.startDate) - new Date(b.startDate);
    });

    // Obtener el contenedor donde se agregarán los eventos
    var contenedorEventos = document.getElementById('eventos-' + region.toLowerCase());

    // Limpiar el contenido anterior si existe
    contenedorEventos.innerHTML = '';

    // Mostrar información de los eventos en el DOM
    eventosRegion.forEach(function (evento) {
        // Crear el div que contendrá la información del evento
        var divEvento = document.createElement('div');
        divEvento.classList.add('col', 'menu-item');

        // Crear el botón dentro del div del evento
        var button = document.createElement('button');
        button.id = evento.about;
        button.classList.add('refreshButton');
        button.dataset.content = evento.about;

        // Crear la imagen dentro del botón
        var imagenEvento = document.createElement('img');
        imagenEvento.src = evento.image;
        imagenEvento.alt = "Imagen del evento: " + evento.about;
        imagenEvento.classList.add('menu-img');
        button.appendChild(imagenEvento);

        // Crear los párrafos para el nombre y descripción del evento
        var nombreEvento = document.createElement('p');
        nombreEvento.classList.add('price');
        nombreEvento.textContent = evento.about;

        // Agregar los elementos al botón y el botón al div del evento
        button.appendChild(nombreEvento);
        divEvento.appendChild(button);

        // Agregar el div del evento al contenedor de eventos
        contenedorEventos.appendChild(divEvento);
    });

    // Obtener todos los botones de eventos y agregar un controlador de evento a cada uno
    asociarEventos(eventos, region);
    modificaMapa('fires',region);
}
function asociarEventos(eventos, region) {
    var eventosRegion = eventos.filter(function (evento) {
        return evento.location.address.addressRegion === region;
    }).sort(function (a, b) {
        return new Date(a.startDate) - new Date(b.startDate);
    });
    var refreshButtons = document.querySelectorAll('.refreshButton');
    refreshButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var eventoId = this.id;
            var evento = eventosRegion.find(function (evento) {
                return evento.about === eventoId;
            });
            // Almacenar el contenido original del main
            var originalMainContent = document.getElementById('main').innerHTML;
            mostrarInformacionEventoEspecifico(evento, originalMainContent,"#event");
        });
    });
}

        
// Función de inicio
function startJSON() {
    "use strict";
    
    // Manejar el cambio en el menú desplegable de orden
    function handleOrdenChange(selectedOption, region) {
        // Llamar a la función correspondiente dependiendo del método de orden seleccionado
        switch(selectedOption) {
            case 'distancia':
                obtenerUbicacionUsuario(region);
                break;
            case 'fecha':
                cargarJSONLocal('assets/json/fires.json', function (eventos) {
                    mostrarInformacionEvento(eventos, region);
                });
                break;
            default:
                console.log('Opción de orden no válida');
        }
    }

    // Manejar el clic en las pestañas
    function handleTabClick() {
        var region = this.dataset.region;
        var selectedOption = document.getElementById('ordenDropdown').value;
        handleOrdenChange(selectedOption, region); // Pasar la región como argumento
    }

    // Manejar la carga completa de la página
    function handlePageLoad() {
        const preloader = document.querySelector('#preloader');
        if (preloader) {
            preloader.remove();
        }
    }

    // Obtener el menú desplegable de orden
    var ordenDropdown = document.getElementById('ordenDropdown');
    
    // Escuchar el evento de cambio en el menú desplegable de orden
    ordenDropdown.addEventListener('change', function() {
        // Obtener el valor seleccionado del menú desplegable de orden
        var selectedOption = ordenDropdown.value;
        var region = document.querySelector('.nav-link.active').dataset.region;
        handleOrdenChange(selectedOption, region); // Pasar la región como argumento
    });

    // Obtener todos los enlaces de pestaña y agregar un controlador de evento a cada uno
    var tabLinks = document.querySelectorAll('.nav-link');

    tabLinks.forEach(function (link) {
        link.addEventListener('click', handleTabClick);
    });

    // Escuchar el evento de carga completa de la página
    window.addEventListener('load', handlePageLoad);
}

// Cargar el JSON local y mostrar la información de los eventos
cargarJSONLocal('assets/json/fires.json', function (eventos) {
    mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
    startJSON();
    startCalendari(); // Llamar a la función de inicio después de cargar los eventos
});

