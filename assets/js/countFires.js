// Código JavaScript para contar el número de ferias y actualizar el contador
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el número total de ferias desde el archivo JSON
  fetch('fires.json')
    .then(response => response.json())
    .then(data => {
      const totalFires = data.length;
      // Actualizar el contador de ferias
      const counterElement = document.getElementById('totalFires');
      if (counterElement) {
        counterElement.setAttribute('data-purecounter-end', totalFires);
        // Inicializar PureCounter para actualizar el contador
        new PureCounter(counterElement);
      }
    })
    .catch(error => console.error('Error al obtener el archivo JSON:', error)); 
  });