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

function mostrarInformacionEventoEspecifico(evento, originalMainContent) {

    var mainContent = document.getElementById('main');
    mainContent.innerHTML = `
    <section id="about" class="about">
        <div class="container" data-aos="fade-up">
            <div class="row gy-4">
                <div class="col-lg-4">
                    <img src="${evento.image}" alt="Imagen del evento: ${evento.about}" class="menu-img img-fluid">
                </div>
               
                <div class="col-lg-8">
                <div class="section-header">
                <p>${evento.about}</p>
                </div>
                    <p class="ingredients">${evento.description}</p>
                    <p><b>Fecha de inicio:</b> ${evento.startDate}</p>
                    <p><b>Fecha de fin:</b> ${evento.endDate}</p>
                    <p><b>Dirección:</b> ${evento.location.address.addressLocality}</p>
                    <div id="api-map">
                    </div>
                    <!-- Aquí se colocará el botón -->
                    <button id="backButton" class="btn btn-outline btn-rosa btn-primary">Volver atrás</button>
                </div>
            </div>
        </div>
    </section>`;

    initMapEspecific(evento);

    // Obtener el botón después de haberlo añadido al DOM
    var backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        cargarContenidoOriginal(originalMainContent);
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
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
        imagenEvento.classList.add('menu-img', 'img-fluid');
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
            mostrarInformacionEventoEspecifico(evento, originalMainContent);
        });
    });

}
// Función de inicio
function startJSON() {
    "use strict";

    // Obtener todos los enlaces de pestaña y agregar un controlador de evento a cada uno
    var tabLinks = document.querySelectorAll('.nav-link');

    tabLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            var region = this.dataset.region;
            cargarJSONLocal('fires.json', function (eventos) {
                mostrarInformacionEvento(eventos, region);
            });
        });
    });

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }
}

// Cargar el JSON local y mostrar la información de los eventos
cargarJSONLocal('fires.json', function (eventos) {
    mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
    startJSON(); // Llamar a la función de inicio después de cargar los eventos
});

function cargarContenidoOriginal(Main) {
    var mainContent = document.getElementById('main');
    mainContent.innerHTML = Main;

    // Obtener todos los elementos con la clase "refreshButton"
    start()
    cargarJSONLocal('fires.json', function (eventos) {
        mostrarInformacionEvento(eventos, 'Mallorca'); // Mostrar eventos de Mallorca por defecto
        startJSON(); // Llamar a la función de inicio después de cargar los eventos
    });
}
