function selectFilterBehaviour(eventos) {
    var region = this.dataset.region;
    var selectedOption = document.getElementById('ordenDropdown').value;
    const hanndleOrdenChange ={
        'distancia':() => obtenerUbicacionUsuario(region),
        'fecha':() => mostrarInformacionEvento(eventos,region),                    
        }
    hanndleOrdenChange[selectedOption] ? hanndleOrdenChange[selectedOption]() : console.log('Opción de orden no válida');
    }
