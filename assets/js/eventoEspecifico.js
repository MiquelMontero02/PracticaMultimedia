function mostrarInformacionEventoEspecifico(evento, originalMainContent,type) {
    var menuHeader=document.getElementById("menuHeader").innerHTML;
    selectedNavItem = document.querySelector('.nav-link.active');
    ocultarMenu();
    var mainContent = document.getElementById('main');
    var descripcionEvento = evento.description.replace(/\n/g, "<br>");
    mainContent.innerHTML = `
    <section id="${type}" class="${type}">
        <div class="container" data-aos="fade-up">
            <div class="row gy-4 align-items-center">
                <div class="col-lg-4">
                    <img src="${evento.image}" alt="Imagen del evento: ${evento.name}" class="menu-img img-fluid">
                </div>
                <div class="col-lg-8">
                <div class="section-header">
                
                <p>${evento.name}</p>
                </div>
                <div id="multiContent"></div>
                    <p class="ingredients">${descripcionEvento}</p>
                    <p><b>Fecha de inicio:</b> ${evento.startDate}</p>
                    <p><b>Fecha de fin:</b> ${evento.endDate}</p>
                    <p><b>Dirección:</b> ${evento.location.address.addressLocality}</p>
                    <div id="api-map-conc">
                    </div>
                    <div id="meteo"></div>
                    <!-- Aquí se colocará el botón -->
                    <button id="backButton" class="btn btn-outline btn-rosa btn-primary">Tornar Enrere</button>
                </div>
            </div>
        </div>
    </section>`;

    infoMeteo(evento.location.geo.latitude,evento.location.geo.longitude);
    // Obtener el botón después de haberlo añadido al DOM
    var backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        cargarMenuHeader(menuHeader);
        cargarContenidoOriginal(originalMainContent,evento);
    });
    initMapEspecific(evento);
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    if(evento.location.address.addressLocality=="Manacor"){
        instanciarContenedorAudio("multiContent","AudioFiraManacor.aac");
    }
    else{
        let contMultimedia=document.getElementById("multiContent");
        let button=document.createElement("button");
        button.classList.add("btn-multi","btn");
        button.innerHTML="<img src='assets/img/iconoAudioInicio.svg'>"
        button.id="SpeechButton";
        contMultimedia.appendChild(button);
        asociarWebSpech(button.id,descripcionEvento);
    }
}