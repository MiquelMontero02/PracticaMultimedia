function initCounter() {  
    fetch(path="/assets/json/fires.json")
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
  }