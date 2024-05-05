// Primero, asegúrate de tener enfirs.json en la misma carpeta que tu archivo JavaScript

// Luego, puedes usar fetch para leer el archivo JSON
fetch('assets/json/fires.json')
  .then(response => response.json()) // Convertir la respuesta a JSON
  .then(data => {
    // Una vez que los datos estén disponibles, puedes trabajar con ellos

    // Utilizamos data, que contiene los datos del archivo JSON
    const eventos = data.slice(0, 3); // Tomamos los primeros tres eventos del array

    // Ahora puedes usar el mismo código que tenías antes para llenar el carrusel con estos eventos
    const carrusel = document.getElementById("Carrusel");
    eventos.forEach(evento => {
      const slide = document.createElement("div");
      slide.classList.add("swiper-slide", "event-item", "d-flex", "flex-column", "justify-content-end");
      slide.style.backgroundImage = `url(${evento.image})`;

      const titulo = document.createElement("h3");
      titulo.textContent = evento.name;
      slide.appendChild(titulo);

      const fecha = document.createElement("div");
      fecha.classList.add("price", "align-self-start");
      fecha.textContent = evento.startDate;
      slide.appendChild(fecha);

      const descripcion = document.createElement("p");
      descripcion.classList.add("description");
      descripcion.textContent = evento.description;
      slide.appendChild(descripcion);

      carrusel.appendChild(slide);
    });
  })
  .catch(error => console.error('Error al obtener los datos:', error));
