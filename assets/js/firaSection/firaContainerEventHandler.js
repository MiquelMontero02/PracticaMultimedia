function asociarEventos(eventos) {
    const refreshButtons = document.querySelectorAll('.refreshButton');
    refreshButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const itemId=this.id
            const evento = eventos.find(function (evento) {
                return evento.name === itemId;
            });
            loadFiraContent(evento,null,"#event");
        });
    });
}