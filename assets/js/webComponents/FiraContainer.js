function createFiraContainer(evento, contenedorEventos) {
    var divEvento = document.createElement('div');
    var button = document.createElement('button');
    var imagenEvento = document.createElement('img');
    var nombreEvento = document.createElement('p');
        
    divEvento.classList.add('col', 'menu-item');
        
    button.id = evento.name;
    button.classList.add('refreshButton','btn-fires');
    button.dataset.content = evento.name;

    
    imagenEvento.src = evento.image;
    imagenEvento.alt = "Imagen del evento: " + evento.name;
    imagenEvento.classList.add('menu-img');
    
    nombreEvento.classList.add('price');
    nombreEvento.textContent = evento.name;

    button.appendChild(imagenEvento);
    button.appendChild(nombreEvento);
    divEvento.appendChild(button);

    contenedorEventos.appendChild(divEvento);
}