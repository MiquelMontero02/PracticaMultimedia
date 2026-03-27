const divParaDesplazar = document.getElementById('Carrusel');

// Añadir evento de clic al div para desplazar
divParaDesplazar.addEventListener('click', function() {
    // Obtener la posición de la sección a la que queremos desplazar
    const seccionDestino = document.getElementById('menu');
    const posicion = seccionDestino.offsetTop;

    // Desplazar la página hasta la posición de la sección
    window.scrollTo({
        top: posicion,
        behavior: 'smooth' // Desplazamiento suave
    });
});