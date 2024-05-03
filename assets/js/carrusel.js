function carrusel(eventos){
    // Obtener la fecha actual
    // Cargar el archivo JSON

        console.log("Entro Carrusel");        // Obtener la fecha actual
        var fechaActual = new Date();
  
        // Filtrar los eventos que aún no han ocurrido y ordenarlos por fecha de inicio
        var eventosProximos = eventos.filter(function (evento) {
          return new Date(evento.startDate) >= fechaActual;
        }).sort(function (a, b) {
          return new Date(a.startDate) - new Date(b.startDate);
        });
  
        // Tomar solo los primeros tres eventos
        eventosProximos = eventosProximos.slice(0, 3);
  
        // Obtener referencia al marcador dentro del main
        var dynamicSectionMarker = document.getElementById('dynamicSectionMarker');
  
        // Crear sección de eventos próximos
        var section = document.createElement('section');
        section.id = 'ProximosEventos';
        section.className = 'events';
  
        // Crear contenedor fluido
        var containerFluid = document.createElement('div');
        containerFluid.className = 'container-fluid';
        containerFluid.setAttribute('data-aos', 'fade-up');
  
        // Crear contenedor de slides
        var slidesContainer = document.createElement('div');
        slidesContainer.className = 'slides-1 swiper';
        slidesContainer.setAttribute('data-aos', 'fade-up');
        slidesContainer.setAttribute('data-aos-delay', '100');
  
        // Crear contenedor de slides
        var swiperWrapper = document.createElement('div');
        swiperWrapper.className = 'swiper-wrapper';
        swiperWrapper.id = 'Carrusel';
  
        // Iterar sobre los eventos próximos para crear cada slide
        eventosProximos.forEach(function (evento) {
          var slide = document.createElement('div');
          slide.className = 'swiper-slide event-item d-flex flex-column justify-content-end';
          slide.style.backgroundImage = 'url(' + evento.image + ')';
  
          var title = document.createElement('h3');
          title.textContent = evento.name;
  
          var date = document.createElement('div');
          date.className = 'price align-self-start';
          date.textContent = new Date(evento.startDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  
          var description = document.createElement('p');
          description.className = 'description';
          description.textContent = evento.description;
  
          slide.appendChild(title);
          slide.appendChild(date);
          slide.appendChild(description);
  
          swiperWrapper.appendChild(slide);
        });
  
        slidesContainer.appendChild(swiperWrapper);
  
        // Crear paginación
        var pagination = document.createElement('div');
        pagination.className = 'swiper-pagination';
  
        slidesContainer.appendChild(pagination);
  
        containerFluid.appendChild(slidesContainer);
        section.appendChild(containerFluid);
  
        // Agregar la sección al main antes del marcador
        dynamicSectionMarker.parentNode.insertBefore(section, dynamicSectionMarker);
  
        // Inicializar Swiper después de agregar los elementos al DOM
        var swiper = new Swiper('.swiper', {
          pagination: {
            el: '.swiper-pagination',
          },
          autoplay: {
            delay: 5000, // Tiempo entre cada slide en milisegundos
            disableOnInteraction: false, // Deshabilita la pausa al interactuar con el carrusel
          },
        });
      }
  