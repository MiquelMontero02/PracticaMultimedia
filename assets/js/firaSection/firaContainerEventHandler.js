function asociarEventos() {
var refreshButtons = document.querySelectorAll('.refreshButton');
    refreshButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var eventoId = this.id;
            var evento = eventosRegion.find(function (evento) {
                return evento.name === eventoId;
            });
            mostrarInformacionEventoEspecifico(evento,null,"#event");
        });
    });
}