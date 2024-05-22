let data="https://www.firabalear.com/assets/json/fires.json";

async function CargaJSONIncial(){
    fetch(data)
    .then(response => response.json()) // o .text(), .blob(), etc.
    .then(data => {
        mostrarInformacionEvento(data, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON();
        startCalendari();
    })
    .catch(error => console.error('Error:', error));
}




// Función para mostrar la información de los eventos en el DOM
// Función para mostrar información de eventos
function mostrarInformacionEvento(eventos, region,ordenado) {
    // Filtrar y ordenar los eventos por región y fecha
    if(!ordenado){
        var eventosRegion = eventos.filter(function (evento) {
            return evento.location.address.addressRegion === region;
        }).sort(function (a, b) {
            return new Date(a.startDate) - new Date(b.startDate);
        });
    }else
        eventosRegion=eventos;
    
    // Obtener el contenedor de eventos
    var contenedorEventos = document.getElementById('eventos-' + region.toLowerCase());
    contenedorEventos.innerHTML = ''; // Limpiar contenido anterior

    // Mostrar información de los eventos en el DOM
    eventosRegion.forEach(function (evento) {
        var divEvento = document.createElement('div');
        divEvento.classList.add('col', 'menu-item');

        var button = document.createElement('button');
        button.id = evento.name;
        button.classList.add('refreshButton','btn-fires');
        button.dataset.content = evento.name;

        var imagenEvento = document.createElement('img');
        imagenEvento.src = evento.image;
        imagenEvento.alt = "Imagen del evento: " + evento.name;
        imagenEvento.classList.add('menu-img');
        button.appendChild(imagenEvento);

        var nombreEvento = document.createElement('p');
        nombreEvento.classList.add('price');
        nombreEvento.textContent = evento.name;

        button.appendChild(nombreEvento);
        divEvento.appendChild(button);

        contenedorEventos.appendChild(divEvento);
    });

    // Obtener el elemento select y establecer el valor seleccionado
    var ordenDropdown = document.getElementById('ordenDropdown');
    var selectedValue = localStorage.getItem('selectedOption');
    if (selectedValue) {
        ordenDropdown.value = selectedValue;
    }

    // Agregar un controlador de evento para el cambio de opción
    ordenDropdown.addEventListener('change', function() {
        localStorage.setItem('selectedOption', this.value);
    });

    // Obtener todos los botones de eventos y agregar un controlador de evento a cada uno
    if(!ordenado)
        asociarEventos(eventos, region);
    modificaMapa('fires', region);
}

function asociarEventos(eventos, region) {
    var eventosRegion = eventos.filter(function (evento) {
        return evento.location.address.addressRegion === region;
    })
    var refreshButtons = document.querySelectorAll('.refreshButton');
    refreshButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var eventoId = this.id;
            var evento = eventosRegion.find(function (evento) {
                return evento.name === eventoId;
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
                fetch(data)
                .then(response => response.json()) // o .text(), .blob(), etc.
                .then(data => {
                    mostrarInformacionEvento(data,region);                    
                })
                .catch(error => console.error('Error:', error));
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
CargaJSONIncial();

