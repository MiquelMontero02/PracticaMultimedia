async function appendEventsToCalendar(cellComponent=null) {
    const events=await fetchContent('assets/json/fires.json').then(events=>JSON.parse(events));
    const cellData=cellComponent.getAttribute('data-date');
    const cellDate=new Date(cellData);
    cellDate.setHours(0,0,0,0);

    const eventsPerDate=events.filter(event => {
        const eventDate = new Date(event.startDate);
        eventDate.setHours(0,0,0,0);
        return eventDate.getTime() === cellDate.getTime();
    });

    eventsPerDate.forEach(event => {

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
            
            
        });
    }

