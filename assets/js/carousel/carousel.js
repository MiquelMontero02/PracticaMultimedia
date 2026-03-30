function initCarousel() {
  fetch('assets/json/fires.json')
    .then(response => response.json())
    .then(data => {
      //const eventos = data.slice(0, 3);
      const slides = document.querySelectorAll('.swiper-slide');

      slides.forEach((slide, i) => {
        let evento = data[i];

        const titulo = slide.querySelector('h3');
        const fecha = slide.querySelector('.price');
        const descripcion = slide.querySelector('.description');
        
        titulo.textContent = evento.name;
        fecha.textContent = evento.startDate;
        descripcion.textContent = evento.description;

        // Actualizar la imagen de fondo
        slide.style.backgroundImage = `url(${evento.image})`;
        slide.setAttribute('data-image', evento.image);
      });
    })
    .catch(error => console.error('Error al obtener los datos:', error));
}