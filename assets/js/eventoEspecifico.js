function mostrarInformacionEventoEspecifico(evento, originalMainContent,type) {

    var mainContent = document.getElementById('main');
    mainContent.innerHTML = `
    <section id="${type}" class="${type}">
        <div class="container" data-aos="fade-up">
            <div class="row gy-4 align-items-center">
                <div class="col-lg-4">
                    <img src="${evento.image}" alt="Imagen del evento: ${evento.about}" class="menu-img img-fluid">
                </div>
                <div class="col-lg-8">
                <div class="section-header">
                
                <p>${evento.about}</p>
                </div>
                    <p class="ingredients">${evento.description}</p>
                    <p><b>Fecha de inicio:</b> ${evento.startDate}</p>
                    <p><b>Fecha de fin:</b> ${evento.endDate}</p>
                    <p><b>Dirección:</b> ${evento.location.address.addressLocality}</p>
                    <div id="api-map">
                    </div>
                    <!-- Aquí se colocará el botón -->
                    <button id="backButton" class="btn btn-outline btn-rosa btn-primary">Volver atrás</button>
                </div>
            </div>
        </div>
    </section>`;

    initMapEspecific(evento);

    // Obtener el botón después de haberlo añadido al DOM
    var backButton = document.getElementById('backButton');
    backButton.addEventListener('click', function () {
        cargarContenidoOriginal(originalMainContent);
    });

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}