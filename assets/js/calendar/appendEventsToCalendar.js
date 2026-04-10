function appendEventsToCalendar(cellId, events,cellComponent=null) {
    if(!cellComponent){
        cellComponent = document.getElementById(cellId);
    }
    const dateNumber = cellId.split('-')[0];
    if(!events || events.length === 0){
        const dateText=document.createElement('span');
        dateText.textContent=dateNumber;
        cellComponent.appendChild(dateText);
        return;
    }
    events.forEach(event => {
        const eventDate = new Date(event.date);
        if (cellComponent && eventDate.getDate() === parseInt(dateNumber)) {
            const eventElement = document.createElement('div');
            const eventTitle = document.createElement('p');

            eventTitle.classList.add('price');
            eventTitle.textContent = event.name;
            
            eventElement.setAttribute('data-content', event.name);
            eventElement.classList.add('btn','btn-outline','btn-primary','refreshButtonCalendar');
            eventElement.addEventListener('click', () => {
                // Almacenar el contenido original del main
                const originalMainContent = document.getElementById('main').innerHTML;
                mostrarInformacionEventoEspecifico(event, originalMainContent);
            }); 

            eventElement.appendChild(eventTitle);
            cellComponent.appendChild(eventElement);
            
            }
        });
    }

