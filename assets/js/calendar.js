// Almacena el contenido original del main cuando se carga por primera vez la página
var originalMainContent = '';
document.addEventListener('DOMContentLoaded', function () {
    originalMainContent = document.getElementById('main').innerHTML;
    var calendar = document.getElementById('calendar');

    // Obtiene la fecha actual
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();

    // Cargar eventos desde el archivo fires.json
    fetch('fires.json')
        .then(response => response.json())
        .then(data => {
            renderCalendar(currentMonth, currentYear, data);
        })
        .catch(error => console.error('Error fetching events:', error));

    function renderCalendar(month, year, events) {
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var firstDayOfMonth = new Date(year, month, 1).getDay();

        var monthNames = [
            "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];

        var table = '<div class="month">' +
                        '<select id="months">';
        for (var i = 0; i < 12; i++) {
            table += '<option value="' + i + '"' + (i === month ? 'selected' : '') + '>' + monthNames[i] + '</option>';
        }
        table += '</select>' +
                        '<select id="years">';
        for (var y = currentYear - 10; y <= currentYear + 10; y++) {
            table += '<option value="' + y + '"' + (y === year ? 'selected' : '') + '>' + y + '</option>';
        }
        table += '</select>' +
                  '</div>';

        table += '<table>' +
                    '<thead>' +
                        '<tr>' +
                            '<th>Domingo</th>' +
                            '<th>Lunes</th>' +
                            '<th>Martes</th>' +
                            '<th>Miércoles</th>' +
                            '<th>Jueves</th>' +
                            '<th>Viernes</th>' +
                            '<th>Sábado</th>' +
                        '</tr>' +
                    '</thead>' +
                    '<tbody>';

        var date = 1;
        for (var i = 0; i < 6; i++) {
            table += '<tr>';
            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth) {
                    table += '<td></td>';
                } else if (date > daysInMonth) {
                    break;
                } else {
                    var eventsForDate = getEventsForDate(year, month, date, events);
                    var dayCellContent = '<span>' + date + '</span>';
if (eventsForDate.length > 0) {
    eventsForDate.forEach(function(event) {
        dayCellContent += '<button class="btn btn-outline btn-rosa btn-primary" onclick="mostrarInformacionEventoCalendario(' + JSON.stringify(event) + ')">' + event.about + '</button>';
    });
                    }
                    table += '<td>' + dayCellContent + '</td>';
                    date++;
                }
            }
            table += '</tr>';
        }

        table += '</tbody>' +
                 '</table>';

        calendar.innerHTML = table;

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
        events.forEach(function(event) {
            var startDate = new Date(event.startDate);
            var endDate = new Date(event.endDate);
            if (startDate <= selectedDate && endDate >= selectedDate) {
                eventsForDate.push(event);
            }
        });
        return eventsForDate;
    }
});
function mostrarInformacionEventoCalendario(evento) {
    // Almacenar el contenido original del main
    var originalMainContent = document.getElementById('main').innerHTML;
    mostrarInformacionEventoEspecifico(evento, originalMainContent);
}

