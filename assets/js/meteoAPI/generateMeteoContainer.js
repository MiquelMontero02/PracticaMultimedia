async function generateMeteoContainer(currentValues, units) {
    const container = document.getElementById('meteo');
    const title = document.createElement('h2');
    const icon = document.createElement('img');
    const temp = document.createElement('h2');
    const temperature = document.createElement('h2');
    const humidity = document.createElement('h2');
    const wind = document.createElement('h2');

    //TODO: city name
    title.textContent = container.getAttribute('data-city');
    icon.src = await getMeteoIcon(currentValues.weather_code);
    icon.alt = "Icono del clima";
    temperature.textContent = `Temperatura: ${currentValues.temperature_2m} ${units.temperature_2m}`;
    humidity.textContent = `Humedad: ${currentValues.relative_humidity_2m} ${units.relative_humidity_2m}`;
    wind.textContent = `Viento: ${currentValues.wind_speed_10m} ${units.wind_speed_10m}`;

    container.appendChild(title);
    container.appendChild(icon);
    container.appendChild(temp);
    container.appendChild(humidity);
    container.appendChild(wind);
}