// Almacena el contenido original del main cuando se carga por primera vez la página
var originalMainContent = '';
startCalendari();
function startCalendari() {
    originalMainContent = document.getElementById('main').innerHTML;
    var calendar = document.getElementById('calendar');

    // Obtiene la fecha actual
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();

    // Cargar eventos desde el archivo assets/json/fires.json
    fetch('assets/json/fires.json')
        .then(response => response.json())
        .then(data => {
            renderCalendar(currentMonth, currentYear, data);
        })
        .catch(error => console.error('Error fetching events:', error));

    function renderCalendar(month, year, events) {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDayOfMonth = new Date(year, month, 1).getDay(); // Aquí se obtiene el primer día del mes

        // Ajustar el primer día del mes para comenzar el lunes
        if (firstDayOfMonth === 0) { // Si es domingo, cambiarlo a 7 (lunes)
            firstDayOfMonth = 7;
        }

        var monthNames = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        var table = '<div class="month">' +
            '<select id="months" aria-label="Selecciona un mes">';
        for (var i = 0; i < 12; i++) {
            table += '<option value="' + i + '"' + (i === month ? 'selected' : '') + '>' + monthNames[i] + '</option>';
        }
        table += '</select>' +
            '<select id="years" aria-label="Selecciona un año">';
        for (var y = currentYear - 10; y <= currentYear + 10; y++) {
            table += '<option value="' + y + '"' + (y === year ? 'selected' : '') + '>' + y + '</option>';
        }
        table += '</select>' +
            '</div>';

        table += '<table>' +
            '<thead>' +
            '<tr>' +
            '<th>Lunes</th>' + // Aquí se cambia el encabezado para que comience por el lunes
            '<th>Martes</th>' +
            '<th>Miércoles</th>' +
            '<th>Jueves</th>' +
            '<th>Viernes</th>' +
            '<th>Sábado</th>' +
            '<th>Domingo</th>' + // Se mueve el domingo al final
            '</tr>' +
            '</thead>' +
            '<tbody>';

        var date = 1;
        for (var i = 0; i < 6; i++) {
            table += '<tr>';
            for (var j = 1; j <= 7; j++) { // Aquí se ajusta para que el bucle comience por el lunes (j = 1)
                var dayOfWeek = (j + 6) % 7; // Ajuste para comenzar en lunes
                var dayIndex = (i * 7) + dayOfWeek;
                if (dayIndex < firstDayOfMonth || dayIndex >= firstDayOfMonth + daysInMonth) {
                    table += '<td></td>';
                } else {
                    var date = dayIndex - firstDayOfMonth + 1;
                    var eventsForDate = getEventsForDate(year, month, date, events);
                    var dayCellContent = '<span>' + date + '</span>';
                    if (eventsForDate.length > 0) {
                        eventsForDate.forEach(function (event) {
                            if (event.location.address.addressRegion == 'Mallorca') {
                                dayCellContent += '<button id="' + event.name + '" class="btn btn-outline btn-lila btn-primary refreshButtonCalendar" data-content="' + event.name + '">' +
                                    '<p class="price">' + event.name + '</p>' +
                                    '</button>';
                            } else if (event.location.address.addressRegion == 'Menorca') {
                                dayCellContent += '<button id="' + event.name + '" class="btn btn-outline btn-azul btn-primary refreshButtonCalendar" data-content="' + event.name + '">' +
                                    '<p class="price">' + event.name + '</p>' +
                                    '</button>';
                            } else {
                                dayCellContent += '<button id="' + event.name + '" class="btn btn-outline btn-naranja btn-primary refreshButtonCalendar" data-content="' + event.name + '">' +
                                    '<p class="price">' + event.name + '</p>' +
                                    '</button>';
                            }
                        });
                    }

                    table += '<td>' + dayCellContent + '</td>';
                }
            }
            table += '</tr>';
        }


        table += '</tbody>' +
            '</table>';

        calendar.innerHTML = table;

        // Asociar event listeners a los botones generados dinámicamente
        associateButtonListeners(events);

        // Actualiza el calendario al cambiar el mes o el año
        document.getElementById('months').addEventListener('change', function () {
            renderCalendar(parseInt(this.value), parseInt(document.getElementById('years').value), events);
        });

        document.getElementById('years').addEventListener('change', function () {
            renderCalendar(parseInt(document.getElementById('months').value), parseInt(this.value), events);
        });
    }

    // Función para obtener los eventos para una fecha específica
    function getEventsForDate(year, month, day, events) {
        var eventsForDate = [];
        var selectedDate = new Date(year, month, day);
        events.forEach(function (event) {
            var startDate = new Date(event.startDate);
            var endDate = new Date(event.endDate);
            if (startDate <= selectedDate && endDate >= selectedDate) {
                eventsForDate.push(event);
            }
        });
        return eventsForDate;
    }
};

// Función para asociar event listeners a los botones generados dinámicamente
function associateButtonListeners(events) {
    var refreshButtons = document.querySelectorAll('.refreshButtonCalendar');
    refreshButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var eventId = this.id;
            var event = events.find(function (event) {
                return event.name === eventId;
            });
            // Almacenar el contenido original del main
            var originalMainContent = document.getElementById('main').innerHTML;
            mostrarInformacionEventoEspecifico(event, originalMainContent);
        });
    });
}

function mostrarInformacionEventoCalendario(evento) {
    // Almacenar el contenido original del main
    var originalMainContent = document.getElementById('main').innerHTML;
    mostrarInformacionEventoEspecifico(evento, originalMainContent, "#about");
}