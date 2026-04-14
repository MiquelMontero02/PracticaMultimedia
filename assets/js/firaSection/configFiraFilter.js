function configFiraFilter(region='Mallorca',eventos) {
    var ordenDropdown = document.getElementById('ordenDropdown');
    var selectedValue = localStorage.getItem('selectedOption');
    if (selectedValue) {
        ordenDropdown.value = selectedValue;
    }

    // Agregar un controlador de evento para el cambio de opción
    ordenDropdown.addEventListener('change', function() {
        localStorage.setItem('selectedOption', this.value);
    });

    asociarEventos(eventos);
}