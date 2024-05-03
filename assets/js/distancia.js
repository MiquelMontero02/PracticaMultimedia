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

// Función para calcular la distancia entre dos puntos geográficos utilizando la fórmula de Haversine
function calcularDistancia(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radio de la Tierra en kilómetros
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distancia = R * c; // Distancia en kilómetros
    return distancia;
}

// Función para mostrar la información de los eventos en el DOM
function mostrarInformacionEventoDistancia(eventos, region, latitudPersona, longitudPersona) {
    // Calcula la distancia para cada evento y agrégala al objeto de eventos
    eventos.forEach(function (evento) {
        var distancia = calcularDistancia(latitudPersona, longitudPersona, evento.location.geo.latitude, evento.location.geo.longitude);
        evento.distancia = distancia;
    });

    // Ordena los eventos por distancia
    eventos.sort(function (a, b) {
        return a.distancia - b.distancia;
    });

    // Filtra los eventos por región
    var eventosRegion = eventos.filter(function (evento) {
        return evento.location.address.addressRegion === region;
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
  asociarEventos(eventos, region);
  //modificaMapa('fires', region);
}



// Función para obtener la ubicación del usuario utilizando la API de geolocalización
function obtenerUbicacionUsuario(region) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitud = position.coords.latitude;
            var longitud = position.coords.longitude;
            
                mostrarInformacionEventoDistancia(data, region, latitud, longitud);
            
        
        });
    } else {
        console.error("La geolocalización no es compatible con este navegador.");
    }
}

