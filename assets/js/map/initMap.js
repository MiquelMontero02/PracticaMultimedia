async function initMap(opc='fires') {
      CargarLibreria();
      const IB_LOCATION={
        'mallorca': [39.534178, 2.857710],
        'menorca': [39.96025378522197, 4.09060689266232],
        'eivissa': [38.97932847627715, 1.3768946629426013],
        'formentera': [38.69142446288327, 1.4719361310701113]
    }
    const EXSTERNAL_APIS_URL={
        'teatres':'https://www.descobreixteatre.com/assets/json/Teatre.json',
        'artesana':'https://www.artesaniamallorca.com/JSONs/eventos.json',
        'fires':'/assets/json/fires.json'
    }
    const url=EXSTERNAL_APIS_URL[opc];
    const data=await fetchAPI(url)
    const mapContainer = document.getElementById('api-map');
    const isMapInitialized = mapContainer.getAttribute('data-map-initialized');
    const opcFormatedName=opc.charAt(0).toUpperCase() + opc.slice(1)

    if (!isMapInitialized) {
        const map = L.map(mapContainer).setView(IB_LOCATION['mallorca'], 8);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);


        data.forEach(item =>{
            const marker=addMarkers(opcFormatedName, item);
            marker.addTo(map);
        });

        mapContainer.setAttribute('data-map-initialized', 'true');
    } else {
        // Si el mapa ya está inicializado, solo actualiza los marcadores
        const map = L.map(mapContainer);
        data.forEach(item =>{
            const marker=addMarkers(opcFormatedName, item);
            marker.addTo(map);
        }
        );
    }
}