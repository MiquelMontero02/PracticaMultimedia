// Función para verificar si el usuario ha llegado a la sección del mapa
async function verificarScroll() {
    var mapaSeccion = document.getElementById('api-map');
    if (mapaSeccion != null) {
        var rect = mapaSeccion.getBoundingClientRect();

        // Si la parte superior de la sección del mapa está dentro del viewport
        // o está cerca del viewport
        if (rect.top <= (window.innerHeight || document.documentElement.clientHeight)) {

            // Cargar la función del mapa
            recargarMapa();
            // Eliminar el evento de scroll para no cargar el mapa más de una vez
            window.removeEventListener('scroll', verificarScroll);
        }
    }
}

// Agregar un evento de scroll para verificar cuando el usuario llega a la sección del mapa
window.addEventListener('scroll', verificarScroll);
// Verificar cuando se carga la página, por si el usuario ya está en la sección del mapa al principio
verificarScroll();
