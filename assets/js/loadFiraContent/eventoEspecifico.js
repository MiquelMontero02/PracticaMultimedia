async function mostrarInformacionEventoEspecifico(evento) {
    const mainContent = document.querySelector('main');
    const firaContentSkeleton = await fetchContent('assets/templates/firaContentSkeleton.html')

    mainContent.innerHTML = firaContentSkeleton;

    const descripcionSection = mainContent.querySelector('#description-section');
    const firaImage = mainContent.querySelector('#event-img');

    const title = mainContent.querySelector('#event-name');
    const startDate = mainContent.querySelector('#start-date');
    const endDate = mainContent.querySelector('#end-date');
    const location = mainContent.querySelector('#address');

    const descripcionEvento = evento.description.replace(/\n/g, "<br>");

    console.log("Descripción del evento:", descripcionEvento);

    title.textContent = evento.name;
    firaImage.src = evento.image;
    firaImage.alt = `Imagen del evento: ${evento.name}`;
    descripcionSection.innerHTML = descripcionEvento;
    startDate.textContent = `Fecha de inicio: ${evento.startDate}`;
    endDate.textContent = `Fecha de fin: ${evento.endDate}`;
    location.textContent = `Dirección: ${evento.location.address.addressLocality}`;



    loadMeteoData(evento.location.geo.latitude, evento.location.geo.longitude);

    //addGoBackBtn();

    initMapEspecific(evento);

    configureFiraWebSpeech(evento, descripcionEvento);

    goPageUp();
}