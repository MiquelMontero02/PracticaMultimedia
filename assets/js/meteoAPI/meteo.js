function infoMeteo(lat,lon){
    //console.log(lat,lon);
    let meteoContainer=document.getElementById("meteo");
    const apiKey='7c2fa2ca1b2c4a1e916731e65f19a02b';
    const apiURL = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}&lang=es&units=M`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const weather = data.data[0];

            meteoContainer.innerHTML = `
                <h2>${weather.city_name}</h2>
                <img src="https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png" alt="${weather.weather.description}" />
                <p>Temperatura: ${weather.temp} °C</p>
                <p>Clima: ${weather.weather.description}</p>
                <p>Humedad: ${weather.rh}%</p>
                <p>Viento: ${weather.wind_spd} m/s</p>
            `;
        })
        .catch(error => {
            console.error('Error al obtener el clima:', error);
        });
}