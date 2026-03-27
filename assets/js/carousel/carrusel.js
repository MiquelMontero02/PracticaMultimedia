fetch('assets/json/fires.json')
    .then(response => response.json())
    .then(data => {
      const eventos = data.slice(0, 3);
      const slides = document.querySelectorAll('.swiper-slide');

      eventos.forEach((evento, index) => {
        const slide = slides[index];

        const titulo = slide.querySelector('h3');
        titulo.textContent = evento.name;

        const fecha = slide.querySelector('.price');
        fecha.textContent = evento.startDate;

        const descripcion = slide.querySelector('.description');
        descripcion.textContent = evento.description;

        // Actualizar la imagen de fondo
        const imageUrl = evento.image;
        slide.style.backgroundImage = `url(${imageUrl})`;
        slide.setAttribute('data-image', imageUrl);
      });
    })
    .catch(error => console.error('Error al obtener los datos:', error));